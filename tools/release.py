#!/usr/bin/env python3
"""Build a published copy of Old Sites from the test environment: python3 tools/release.py [version]

The test environment keeps every candidate and the editing tools (test bars, the Palette panel, the content
editor). A published build is one main-page design plus one site-page design, with the tools taken out:

  * Code between "@edit" and "@end" marker lines (// or <!-- --> comments) is dropped. Lines between
    "@release" and "@end" are kept with their leading "// " removed, so a block can swap in a published version.
  * The main page becomes index.html, and each site gets its own page under v0.1's file names, so links to
    the live museum keep working. Pages name their site and the page map in SPLASH_SITE and SPLASH_PAGES.
  * Logos and icons that the test pages load from the live museum (projects/splash/logos, icons) are
    downloaded into the build, so it doesn't depend on v0.1's files.

The build lands in dist/splash-<version>/ with a zip beside it, ready to upload to projects/splash/.
To publish a different pairing later, change MAIN and SITE_PAGE.
"""
import json, os, re, shutil, subprocess, sys, urllib.request, zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VERSION = sys.argv[1] if len(sys.argv) > 1 else 'v1'
OUT = os.path.join(ROOT, 'dist', 'splash-' + VERSION)

MAIN = 'candidates/AG-fanned-windows-main-page/R8-AG.dc.html'  # the main page, published as index.html
SITE_PAGE = 'sitepages/AN.html'                               # the site page, published once per site
# v0.1's page for each site.
PAGES = {'awesome': 'awesomestuff.html', 'ask': 'askthenickman.html', 'titans': 'titans.html', 'hobo': 'hackahobo.html',
         'bv': 'bvhomework.html', 'engen': 'engen.html', 'home': 'welcomenick.html', 'spaceatlas': 'spaceatlas.html'}
MUSEUM = 'https://hackahobo.info/projects/splash/'


def strip(text):
    """Drop @edit blocks and uncomment @release blocks."""
    out, mode = [], None
    for line in text.split('\n'):
        t = line.strip()
        is_marker = t.startswith('//') or t.startswith('<!--')
        if is_marker and '@edit' in t:
            mode = 'edit'; continue
        if is_marker and '@release' in t and mode == 'edit':
            mode = 'release'; continue
        if is_marker and '@end' in t and mode:
            mode = None; continue
        if mode == 'edit':
            continue
        if mode == 'release':
            out.append(re.sub(r'^(\s*)// ?', r'\1', line)); continue
        out.append(line)
    assert mode is None, 'unclosed @edit block'
    return '\n'.join(out)


def read(path):
    with open(os.path.join(ROOT, path), encoding='utf-8') as f:
        return f.read()


def write(path, text):
    full = os.path.join(OUT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(text)


def copy(src, dst=None):
    full = os.path.join(OUT, dst or src)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    (shutil.copytree if os.path.isdir(os.path.join(ROOT, src)) else shutil.copy2)(os.path.join(ROOT, src), full)


def pages_script(site=None):
    js = 'var SPLASH_PAGES = ' + json.dumps(PAGES) + ';'
    if site:
        design = os.path.basename(SITE_PAGE).replace('.html', '')
        js = 'var SPLASH_SITE = ' + json.dumps(site) + ', SPLASH_DESIGN = ' + json.dumps(design) + ', ' + js[4:]
    return '<script>' + js + '</script>\n'


def strings(value):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for v in value.values(): yield from strings(v)
    elif isinstance(value, list):
        for v in value: yield from strings(v)


def main():
    if os.path.exists(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT)

    # Main page.
    main_dir = os.path.dirname(MAIN)
    html = strip(read(MAIN)).replace('../../', '')
    html = re.sub(r'<title>.*?</title>', '<title>Old Sites</title>', html, count=1)
    html = html.replace('<script src="palette.js"></script>', pages_script() + '<script src="palette.js"></script>', 1)
    write('index.html', html)
    for f in ('support.js', 'vendor', 'assets'):
        copy(os.path.join(main_dir, f), f)

    # Shared files.
    write('palette.js', strip(read('palette.js')))
    write('browsernav.js', strip(read('browsernav.js')))
    write('browser.css', read('browser.css'))
    write('favicon.js', strip(read('favicon.js')))
    copy('palette/patterns')

    # Site pages: one per site from the site-page design.
    data = strip(read('sitepages/data.js'))
    data = data.replace("var L = H + '/projects/splash/logos/';", "var L = 'logos/';").replace("var IC = H + '/projects/splash/icons/';", "var IC = 'icons/';")
    write('data.js', data)
    write('common.js', strip(read('sitepages/common.js')))
    page = strip(read(SITE_PAGE)).replace('../', '')
    for key, name in PAGES.items():
        write(name, page.replace('<script src="data.js"></script>', pages_script(key) + '<script src="data.js"></script>', 1))

    # Files the site pages use: their own images, and the museum's logos and icons.
    sites = json.loads(subprocess.check_output(['node', '-e', 'global.window={};require(process.argv[1]);console.log(JSON.stringify(window.SITES))',
                                                os.path.join(ROOT, 'sitepages/data.js')]))
    refs = set(strings(sites))
    museum = {r[len(MUSEUM):] for r in refs if r.startswith(MUSEUM)} | {'icons/' + r for r in re.findall(r"IC \+ '([^']+)'", read('favicon.js'))}
    museum = sorted(museum)
    for r in sorted(r for r in refs if r.startswith('img/')):
        copy('sitepages/' + r, r)
    for f in re.findall(r"IMG \+ '([^']+)'", read('favicon.js')):
        if not os.path.exists(os.path.join(OUT, 'img', f)): copy('sitepages/img/' + f, 'img/' + f)
    for r in museum:
        dst = os.path.join(OUT, r)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        req = urllib.request.Request(MUSEUM + r, headers={'User-Agent': 'splash-release'})
        with urllib.request.urlopen(req, timeout=60) as resp, open(dst, 'wb') as f:
            f.write(resp.read())

    write('README.txt', '''Old Sites, splash %s
Upload everything in this folder to https://hackahobo.info/projects/splash/, replacing what is there.

index.html is the main page; each site has its own page under the same names as v0.1, so old links still
work. The logos and icons the pages use are included in logos/ and icons/. v0.1's museum.css, museum.js and
exhibits/ are no longer used by any page.

Built by tools/release.py in the splash repo (github.com/thenickman100/splash). Don't edit these files by
hand; change the test environment there and build again.
''' % VERSION)

    # A check that nothing from the editing tools is left.
    left = []
    for d, _, files in os.walk(OUT):
        for f in files:
            if f.endswith(('.html', '.js')) and f not in ('support.js',) and 'vendor' not in d:
                t = open(os.path.join(d, f), encoding='utf-8').read()
                for word in ('@edit', '@release', 'sp-test', 'class="tb"', 'pal-btn', 'content.js', 'localStorage'):
                    if word in t: left.append((os.path.relpath(os.path.join(d, f), OUT), word))
    if left:
        print('Editing code left in the build:', left)
        sys.exit(1)

    z = OUT + '.zip'
    with zipfile.ZipFile(z, 'w', zipfile.ZIP_DEFLATED) as zf:
        for d, _, files in os.walk(OUT):
            for f in sorted(files):
                p = os.path.join(d, f)
                zf.write(p, os.path.join('splash-' + VERSION, os.path.relpath(p, OUT)))
    n = sum(len(f) for _, _, f in os.walk(OUT))
    print('Built', os.path.relpath(OUT, ROOT), '(%d files, %d from the museum),' % (n, len(museum)), os.path.relpath(z, ROOT))


if __name__ == '__main__':
    main()
