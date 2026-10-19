// Every site's palette, read from the site's own code on hackahobo.info. This file is the one place palettes
// live: palette.html shows where each color comes from, and the candidates and site pages take their colors
// from here, so editing a palette here updates every page.
//
// colors: ranked, color 1 first. Each stripe of a two-color pattern (Awesome Stuff's gradients) is its own color.
// extra: other colors found in the site's code, not in the ranking.
// px and img: the pixel each color was read from on a lossless 1280-wide capture, and its zoom images in palette/.
(function () {
  var SITES = {
 "awesome": {
  "name": "Awesome Stuff",
  "page": "https://hackahobo.info/projects/sites/lawesomel/index.html",
  "colors": [
   {
    "hex": "#4c532d",
    "what": "Footer, stripe 1 of 2",
    "src": "green/style.css\n#fw-footer { background: [[#535a31]] url('html-bg.gif') repeat-x; }\nimage html-bg.gif gives the stripe its second color",
    "px": [
     [
      19,
      1044
     ]
    ],
    "img": [
     "awesome-x1a"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#acf083",
    "what": "Box headings",
    "src": "green/style.css\n.fw-title { background: [[#acf083]] url('title-bg.gif') top repeat-x; }",
    "px": [
     [
      174,
      177
     ]
    ],
    "img": [
     "awesome-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#94a157",
    "what": "Top of the header gradient behind the logo, stripe 1 of 2",
    "src": "image green/container-bg.gif (#fw-container background), its top rows",
    "px": [
     [
      10,
      5
     ]
    ],
    "img": [
     "awesome-4a"
    ],
    "edge": [
     true
    ]
   },
   {
    "hex": "#68a94f",
    "what": "Underlines below the menu links",
    "src": "green/style.css\n#fw-nav-menu a { border-bottom-color: [[#68a94f]]; }",
    "px": [
     [
      183,
      111
     ]
    ],
    "img": [
     "awesome-5"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#30341d",
    "what": "Page background",
    "src": ".design.css\nbody { background-color: [[#30341d]]; }",
    "px": [
     [
      11,
      143
     ]
    ],
    "img": [
     "awesome-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#e6edee",
    "what": "Boxes",
    "src": "Chromz.css\n.fw-paragraph { background: [[#e6edee]] url('img08.gif') repeat-x; }",
    "px": [
     [
      174,
      227
     ]
    ],
    "img": [
     "awesome-3"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#a0ac66",
    "what": "Top of the header gradient behind the logo, stripe 2 of 2",
    "src": "image green/container-bg.gif (#fw-container background), its top rows",
    "px": [
     [
      7,
      7
     ]
    ],
    "img": [
     "awesome-4b"
    ],
    "edge": [
     true
    ]
   }
  ],
  "extra": [
   {
    "hex": "#535a31",
    "what": "Footer, stripe 2 of 2",
    "src": "green/style.css\n#fw-footer { background: [[#535a31]] url('html-bg.gif') repeat-x; }\nimage html-bg.gif gives the stripe its second color",
    "px": [
     [
      16,
      1043
     ]
    ],
    "img": [
     "awesome-x1b"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#69723e",
    "what": "Striped header gradient behind the logo",
    "src": "green/style.css\n#fw-container { background: url([['container-bg.gif']]) repeat-x; }",
    "px": [
     [
      0,
      0
     ]
    ],
    "img": [
     "awesome-x2"
    ],
    "edge": [
     false
    ],
    "pattern": {
     "file": "palette/patterns/awesome-container-bg.gif",
     "repeat": "repeat-x",
     "base": "#30341d"
    }
   },
   {
    "hex": "#69723e",
    "what": "Striped page and footer gradient",
    "src": "green/style.css\nhtml { background: url([['html-bg.gif']]) repeat-x; }  #fw-footer { background: #535a31 url([['html-bg.gif']]) repeat-x; }",
    "px": [
     [
      0,
      940
     ]
    ],
    "img": [
     "awesome-x3"
    ],
    "edge": [
     false
    ],
    "pattern": {
     "file": "palette/patterns/awesome-html-bg.gif",
     "repeat": "repeat-x",
     "base": "#9ba85e"
    }
   }
  ]
 },
 "ask": {
  "name": "Askthenickman",
  "page": "https://hackahobo.info/projects/sites/askthenickman/index.html",
  "colors": [
   {
    "hex": "#d60000",
    "what": "Red of the logo",
    "src": "image askthenickman.png (the logo), its most common red",
    "px": [
     [
      969,
      123
     ]
    ],
    "img": [
     "ask-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#000000",
    "what": "Page background",
    "src": "askthenickman.css\nbody { background-color: [[black]]; }",
    "px": [
     [
      11,
      420
     ]
    ],
    "img": [
     "ask-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#fecb00",
    "what": "Yellow of the logo",
    "src": "image askthenickman.png (the logo), its most common yellow",
    "px": [
     [
      591,
      321
     ]
    ],
    "img": [
     "ask-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 },
 "titans": {
  "name": "Titans Softball",
  "page": "https://hackahobo.info/projects/sites/titans/titans.html",
  "colors": [
   {
    "hex": "#ffc200",
    "what": "Gold page",
    "src": "titans.html\nbody { background-color: [[#ffc200]]; }",
    "px": [
     [
      11,
      11
     ]
    ],
    "img": [
     "titans-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#362a38",
    "what": "Purple tabs",
    "src": "titans.html\ntd.header { background-color: [[#362a38]]; color: white; }",
    "px": [
     [
      40,
      274
     ]
    ],
    "img": [
     "titans-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#ffffff",
    "what": "White tab text",
    "src": "titans.html\ntd.header { color: [[white]]; }",
    "px": [
     [
      321,
      289
     ]
    ],
    "img": [
     "titans-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 },
 "hobo": {
  "name": "Hack a HOBO",
  "page": "https://hackahobo.info/?theme=original (2026 Edition, original theme)",
  "colors": [
   {
    "hex": "#29a4c6",
    "what": "Blue behind the logo",
    "src": "files/style-home.css  .section-2 { background-color: var(--color-1); }\nfiles/style-shared.css  .original-theme { --og-teal-primary: [[#29a4c6]]; }",
    "px": [
     [
      11,
      12
     ]
    ],
    "img": [
     "hobo-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#ffffff",
    "what": "White page",
    "src": "files/style-shared.css  .original-theme { --og-white: [[#ffffff]]; } (body background)",
    "px": [
     [
      11,
      120
     ]
    ],
    "img": [
     "hobo-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#30a92b",
    "what": "Green of the logo",
    "src": "image files/hackahobo.png (the logo on the 2026 site), its green",
    "px": [
     [
      179,
      50
     ]
    ],
    "img": [
     "hobo-3"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#007c9e",
    "what": "Deep teal of the menu frame and section titles",
    "src": "files/style-shared.css  .original-theme { --og-teal-dark: [[#007c9e]]; }",
    "px": [
     [
      326,
      12
     ]
    ],
    "img": [
     "hobo-x1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#cdf4ff",
    "what": "Light teal game containers",
    "src": "files/style-shared.css  .original-theme { --og-teal-light: [[#cdf4ff]]; }",
    "px": [
     [
      1015,
      100
     ]
    ],
    "img": [
     "hobo-x2"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 },
 "bv": {
  "name": "BV Homework",
  "page": "https://hackahobo.info/projects/sites/bv-homework/BVHomework.html",
  "colors": [
   {
    "hex": "#81c8ff",
    "what": "Sky blue page",
    "src": "image background.jpg (body background), its main color\n(the nav hover in the HTML is nearly the same blue, [[#82c8ff]])",
    "px": [
     [
      11,
      11
     ]
    ],
    "img": [
     "bv-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#f21411",
    "what": "Red of the logo",
    "src": "image BVHomeworkBigHanako.jpg (the logo), its most common red",
    "px": [
     [
      891,
      59
     ]
    ],
    "img": [
     "bv-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#949000",
    "what": "Green nav buttons",
    "src": "BVHomework.html\n.nav { background-color: [[#949000]]; color: white; }",
    "px": [
     [
      153,
      179
     ]
    ],
    "img": [
     "bv-3"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 },
 "engen": {
  "name": "EnGen NextGen",
  "page": "https://hackahobo.info/projects/sites/engen/home.php",
  "colors": [
   {
    "hex": "#ffffff",
    "what": "White paper",
    "src": "image bg.png (graph-paper background), its main color; css.css .center { background-color: [[#FFFFFF]]; }",
    "px": [
     [
      16,
      208
     ]
    ],
    "img": [
     "engen-3"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#e15252",
    "what": "Red text, under the logo and across the site",
    "src": "css.css\nfigcaption { color: [[#E15252]]; font-style: oblique; font-variant: small-caps; }",
    "px": [
     [
      399,
      135
     ]
    ],
    "img": [
     "engen-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#0055e6",
    "what": "Blue of the logo and headings",
    "src": "css.css\nh3 { color: [[#0055e6]]; }  hr { border-color: [[#0055e6]]; }",
    "px": [
     [
      521,
      108
     ]
    ],
    "img": [
     "engen-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#fafdfe",
    "what": "Graph-paper background pattern",
    "src": "css.css\nbody { background: linear-gradient(to right, white, transparent 15%, transparent 85%, white), url([['bg.png']]); background-repeat: repeat; }",
    "px": [
     [
      0,
      180
     ]
    ],
    "img": [
     "engen-x1"
    ],
    "edge": [
     false
    ],
    "pattern": {
     "file": "palette/patterns/engen-bg.png",
     "repeat": "repeat",
     "base": "#fafdfe"
    }
   }
  ],
  "extra": [
   {
    "hex": "#c7c7c7",
    "what": "Gray gears in the logo",
    "src": "image EnGenAlphaCrop.png (the logo), its gray",
    "px": [
     [
      267,
      56
     ]
    ],
    "img": [
     "engen-4"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#e6e6e6",
    "what": "Gray tabs",
    "src": "css.css\n#tab2, #tab3, #tab4 { background-color: [[#E6E6E6]]; }",
    "px": [
     [
      376,
      164
     ]
    ],
    "img": [
     "engen-5"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#bababa",
    "what": "Darker gray of the current tab",
    "src": "home.php\n<div id=\"tab1\" class=\"tab\" style=\"background-color:[[#BABABA]];\">",
    "px": [
     [
      260,
      164
     ]
    ],
    "img": [
     "engen-6"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#8a8a8a",
    "what": "Gray tab text",
    "src": "css.css\n.tabs .tab { color: [[#8A8A8A]]; }",
    "px": [
     [
      652,
      173
     ]
    ],
    "img": [
     "engen-7"
    ],
    "edge": [
     false
    ]
   }
  ]
 },
 "home": {
  "name": "Home",
  "page": "https://hackahobo.info/projects/sites/home-original/index.php",
  "colors": [
   {
    "hex": "#c6f8ff",
    "what": "Light cyan boxes and borders",
    "src": "style.css\n.blue-background-1 { background-color: [[rgb(198,248,255)]]; }",
    "px": [
     [
      268,
      237
     ]
    ],
    "img": [
     "home-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#000000",
    "what": "Black text, like the Welcome Nick heading",
    "src": "style.css\n.black { color: [[#000000]]; }",
    "px": [
     [
      795,
      32
     ]
    ],
    "img": [
     "home-4"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#45e8ff",
    "what": "Cyan headers",
    "src": "style.css\n.blue-background-0 { background-color: [[rgb(69,232,255)]]; }",
    "px": [
     [
      153,
      109
     ]
    ],
    "img": [
     "home-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#fefefe",
    "what": "White patterned background",
    "src": "style.css  html { background-image: url('pattern.png'); }  body { background: linear-gradient(to right, white, transparent, white); }\nthe most common pixel of the patterned margin",
    "px": [
     [
      30,
      14
     ]
    ],
    "img": [
     "home-3"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#f0f0f0",
    "what": "Patterned background",
    "src": "style.css\nhtml { background-image: url([['pattern.png']]); }",
    "px": [
     [
      0,
      0
     ]
    ],
    "img": [
     "home-x1"
    ],
    "edge": [
     false
    ],
    "pattern": {
     "file": "palette/patterns/home-pattern.png",
     "repeat": "repeat",
     "base": "#f0f0f0"
    }
   }
  ],
  "extra": []
 },
 "spaceatlas": {
  "name": "Space Atlas",
  "page": "https://spaceatlas.hackahobo.info/",
  "colors": [
   {
    "hex": "#929292",
    "what": "Gray underline below MOON, and the loading bar",
    "src": "stylesheet.min.css\n[id='2headerBody'] { text-decoration-color: [[#929292]]; }  #loading { background-color: [[#929292]]; }",
    "px": [
     [
      640,
      57
     ]
    ],
    "img": [
     "sa-5"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#2f2f2f",
    "what": "Gray menu bar",
    "src": "stylesheet.min.css\n#header { background-color: [[#2f2f2f]]; }",
    "px": [
     [
      11,
      11
     ]
    ],
    "img": [
     "sa-1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#000000",
    "what": "Black background",
    "src": "stylesheet.min.css\nbody { font-family: arial; margin: 0; background-color: [[#000]]; }",
    "px": [
     [
      11,
      90
     ]
    ],
    "img": [
     "sa-2"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#ff8100",
    "what": "Mars orange",
    "src": "stylesheet.min.css\n[id='3headerBody'] { text-decoration-color: [[#ff8100]]; }  .high { background-color: [[#ff8100]]; }",
    "px": [
     [
      699,
      57
     ]
    ],
    "img": [
     "sa-3"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#49aae3",
    "what": "Earth blue",
    "src": "stylesheet.min.css\n[id='1headerBody'] { text-decoration-color: [[#49aae3]]; }  .low { background-color: [[#49aae3]]; }",
    "px": [
     [
      537,
      57
     ]
    ],
    "img": [
     "sa-x1"
    ],
    "edge": [
     false
    ]
   },
   {
    "hex": "#f7f7f7",
    "what": "Light gray planet names and menu button",
    "src": "stylesheet.min.css\n.headerBody { color: [[#f7f7f7]]; }  .burgerLines { background-color: [[#f7f7f7]]; }",
    "px": [
     [
      585,
      41
     ]
    ],
    "img": [
     "sa-4"
    ],
    "edge": [
     false
    ]
   }
  ],
  "extra": []
 }
};

  // Trial order: the palette page can reorder colors in this browser only. It is saved in browser storage as
  // { site: { colors: [img keys], extra: [img keys] } } and applied here, so every page in this browser
  // shows the trial order until it is reset. The published order above is untouched.
  var KEY = 'splash-palette-order', PUBLISHED = {};
  Object.keys(SITES).forEach(function (k) {
    PUBLISHED[k] = { colors: SITES[k].colors.map(function (c) { return c.img[0]; }), extra: SITES[k].extra.map(function (c) { return c.img[0]; }) };
  });
  function arrange(order) {
    Object.keys(SITES).forEach(function (k) {
      var all = {}, o = order[k] || PUBLISHED[k];
      SITES[k].colors.concat(SITES[k].extra).forEach(function (c) { all[c.img[0]] = c; });
      var take = function (ids) { return ids.filter(function (id) { return all[id]; }).map(function (id) { var c = all[id]; delete all[id]; return c; }); };
      var colors = take(o.colors), extra = take(o.extra);
      Object.keys(all).forEach(function (id) { extra.push(all[id]); });
      SITES[k].colors = colors.length ? colors : extra.splice(0, 1);
      SITES[k].extra = extra;
    });
  }
  // Parts: every place a page uses a site color, and which palette color (1 = color 1) it takes. A fill part
  // can also take a pattern, and every part can take N (slot 0, its neutral): the page's own gray, white or black
  // rather than a site color. Each site has its own choices: slot is the default, and a page's sites list
  // ({ site: { part: slot } }) holds a site's published changes. The Palette panel can try others in this browser.
  var PARTS = {
    K: { name: 'K · Scroll through time', parts: [
      { id: 'year', label: 'Big year', slot: 1, neutral: '#f2f2f2' },
      { id: 'openFill', label: 'Open full screen button', slot: 1, neutral: '#f2f2f2', fill: true },
      { id: 'openText', label: 'Open full screen text', slot: 2, neutral: '#121212' },
      { id: 'marks', label: 'Timeline marks on the right (each site\'s own)', slot: 1, neutral: '#9a9a9a' } ] },
    AG: { name: 'AG · Fanned windows', sites: {awesome:{year:2},ask:{readFill:3,open:1,glow:1},titans:{glow:1},hobo:{glow:3},bv:{readFill:2,readText:1,glow:1},engen:{year:3,kicker:2,readFill:4,open:2},home:{year:3,kicker:1,readFill:5,glow:1},spaceatlas:{kicker:4,readFill:3,readText:1,open:4,glow:1}}, parts: [
      { id: 'year', label: 'Big year', slot: 1, neutral: '#f2f2f2' },
      { id: 'kicker', label: 'Project type line', slot: 3, neutral: '#9a9a9a' },
      { id: 'readFill', label: 'Read more button', slot: 1, neutral: '#f2f2f2', fill: true },
      { id: 'readText', label: 'Read more text', slot: 2, neutral: '#121212' },
      { id: 'open', label: 'Open full screen outline and text', slot: 3, neutral: '#f2f2f2' },
      { id: 'glow', label: 'Glow at the bottom of the page', slot: 2, neutral: '#555555' } ] },
    AE: { name: 'AE · Row of windows', parts: [
      { id: 'year', label: 'Big year', slot: 1, neutral: '#141414' } ] },
    AI: { name: 'AI · Split screen', parts: [
      { id: 'sideFill', label: 'Side panel', slot: 1, neutral: '#141414', fill: true },
      { id: 'sideText', label: 'Side panel text', slot: 2, neutral: '#f4f4f4' },
      { id: 'num', label: 'Section numbers', slot: 1, neutral: '#5f5f5f' },
      { id: 'mark', label: 'Selected logo and link underline', slot: 1, neutral: '#141414' } ] },
    AK: { name: 'AK · Chapters', parts: [
      { id: 'kicker', label: 'Line above the site name', slot: 1, neutral: '#5f5f5f' },
      { id: 'num', label: 'Chapter numbers', slot: 1, neutral: '#141414' },
      { id: 'tocNum', label: 'Current chapter in the contents', slot: 1, neutral: '#141414' },
      { id: 'mark', label: 'Facts box line and selected logo', slot: 1, neutral: '#141414' } ] },
    // AN is the site page paired with AG.
    AN: { name: 'AN · Fan page', sites: {awesome:{glow:2,year:2,kick:3,link:2},ask:{kick:3,btnFill:3,logoFill:2,logoText:3,logoLine:1},titans:{kick:3},hobo:{glow:3,kick:3,btnFill:4,logoFill:1,logoText:2,logoLine:2},bv:{year:2,kick:1,btnFill:3,btnText:0},engen:{glow:2,year:3,kick:2,btnFill:4,bar:2},home:{year:3,kick:1,btnFill:5},spaceatlas:{kick:4,bar:4}}, parts: [
      { id: 'glow', label: 'Glow behind the top section', slot: 1, neutral: '#555555' },
      { id: 'home', label: 'All sites link', slot: 0, neutral: '#f2f2f2' },
      { id: 'prevnext', label: 'Previous and next site links at the top', slot: 0, neutral: '#9a9a9a' },
      { id: 'year', label: 'Big year', slot: 1, neutral: '#f2f2f2' },
      { id: 'kick', label: 'Project type line', slot: 0, neutral: '#9a9a9a' },
      { id: 'name', label: 'Site name', slot: 0, neutral: '#f2f2f2' },
      { id: 'lede', label: 'Line under the site name', slot: 0, neutral: '#cfcfcf' },
      { id: 'cap', label: 'Caption beside the window', slot: 0, neutral: '#9a9a9a' },
      { id: 'btnFill', label: 'Buttons', slot: 1, neutral: '#f2f2f2', fill: true },
      { id: 'btnText', label: 'Button text', slot: 2, neutral: '#121212' },
      { id: 'factLabel', label: 'Fact labels (Started, Address)', slot: 0, neutral: '#9a9a9a' },
      { id: 'factValue', label: 'Facts', slot: 0, neutral: '#f2f2f2' },
      { id: 'toc', label: 'Contents links', slot: 0, neutral: '#cfcfcf' },
      { id: 'link', label: 'Link and contents hover', slot: 1, neutral: '#f2f2f2' },
      { id: 'bar', label: 'Bar above each section heading', slot: 1, neutral: '#9a9a9a' },
      { id: 'h2', label: 'Section headings', slot: 0, neutral: '#f2f2f2' },
      { id: 'h3', label: 'Smaller headings', slot: 0, neutral: '#f2f2f2' },
      { id: 'body', label: 'Story text', slot: 0, neutral: '#cfcfcf' },
      { id: 'figcap', label: 'Picture captions', slot: 0, neutral: '#9a9a9a' },
      { id: 'btnLine', label: 'Other buttons outline', slot: 0, neutral: '#444444' },
      { id: 'btnOther', label: 'Other buttons text', slot: 0, neutral: '#f2f2f2' },
      { id: 'listLink', label: 'Download list links', slot: 0, neutral: '#f2f2f2' },
      { id: 'logoFill', label: 'Logo boxes', slot: 0, neutral: '#ffffff', fill: true },
      { id: 'logoText', label: 'Logo box labels', slot: 0, neutral: '#4a4a4a' },
      { id: 'logoLine', label: 'Logo box border', slot: 0, neutral: '#ffffff' },
      { id: 'mark', label: 'Selected logo border', slot: 1, neutral: '#f2f2f2' },
      { id: 'endLabel', label: 'Years at the bottom', slot: 0, neutral: '#9a9a9a' },
      { id: 'endName', label: 'Previous and next site names at the bottom', slot: 0, neutral: '#f2f2f2' } ] }
  };
  // @edit (tools/release.py keeps only the @release lines below, uncommented, in a published build)
  // Trial parts are saved as { page: { site: { part: slot } } }.
  var PKEY = 'splash-palette-parts-sites', partTrial = null;
  try { partTrial = JSON.parse(localStorage.getItem(PKEY) || 'null'); } catch (e) {}
  try { localStorage.removeItem('splash-palette-parts'); } catch (e) {} // the old all-sites format
  // @release
  // var partTrial = null;
  // @end
  function sk(key) { return key === 'hobo26' ? 'hobo' : key; }
  function slotOf(page, id, key) {
    key = sk(key);
    var t = partTrial && partTrial[page] && partTrial[page][key];
    if (t && t[id] != null) return t[id];
    var pub = PARTS[page] && PARTS[page].sites && PARTS[page].sites[key];
    if (pub && pub[id] != null) return pub[id];
    var d = PARTS[page] && PARTS[page].parts.filter(function (x) { return x.id === id; })[0];
    return d ? d.slot : 1;
  }
  // Which page this is, from its address.
  var PAGE = (function () {
    var f = location.pathname.split('/').pop();
    return { 'Travel.dc.html': 'K', 'R8-AG.dc.html': 'AG', 'AG.html': 'AG', 'R8-AE.dc.html': 'AE', 'AI.html': 'AI', 'AK.html': 'AK', 'AN.html': 'AN' }[f] || null;
  })();

  // @edit
  // After a panel change reloads the page, it comes back on the same site and scroll position.
  var RKEY = 'splash-pal-return', back = null;
  try { back = JSON.parse(sessionStorage.getItem(RKEY) || 'null'); sessionStorage.removeItem(RKEY); } catch (e) {}
  if (back && back.path !== location.pathname + location.search) back = null;

  var trial = null;
  try { trial = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  if (trial) arrange(trial);
  // @release
  // var back = null, trial = null;
  // @end

  // Pattern files sit next to this script, so resolve them from its own address (pages load it from different folders).
  var BASE = (document.currentScript && document.currentScript.src || '').replace(/palette\.js[^/]*$/, '');
  // CSS background for a palette entry: its color, or for a pattern the tiled image over its base color.
  function css(c) {
    if (!c.pattern) return c.hex;
    return c.pattern.base + " url('" + BASE + c.pattern.file + "') " + (c.pattern.repeat === 'repeat-x' ? 'repeat-x top' : 'repeat');
  }
  function rgb(h) { var n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function lum(h) {
    var c = rgb(h).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  // WCAG contrast ratio between two hex colors.
  function contrast(a, b) { var x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  function toHex(c) {
    if (/^#[0-9a-f]{6}$/i.test(c)) return c.toLowerCase();
    var m = String(c).match(/\d+(\.\d+)?/g); if (!m) return '#ffffff';
    return '#' + m.slice(0, 3).map(function (v) { return ('0' + Math.round(+v).toString(16)).slice(-2); }).join('');
  }
  function site(key) { return SITES[sk(key)]; }
  function ranked(key) { return site(key).colors.map(function (c) { return c.hex; }); }
  window.PALETTE = {
    sites: SITES,
    // @edit
    // Trial order controls, used by palette.html.
    trial: !!trial,
    published: PUBLISHED,
    saveOrder: function (order) { arrange(order); try { localStorage.setItem(KEY, JSON.stringify(order)); } catch (e) {} this.trial = true; },
    clearOrder: function () { arrange(PUBLISHED); try { localStorage.removeItem(KEY); } catch (e) {} this.trial = false; },
    exportText: function () {
      var lines = ['Palette order for Old Sites', ''];
      Object.keys(SITES).forEach(function (k) {
        var t = SITES[k];
        lines.push(t.name + ': ' + t.colors.map(function (c, i) { return (i + 1) + ' ' + c.hex + ' (' + c.what + ')'; }).join(', '));
        if (t.extra.length) lines.push('  other: ' + t.extra.map(function (c) { return c.hex + ' (' + c.what + ')'; }).join(', '));
      });
      lines.push('', 'Parts (which color each part of a page takes, per site; N is neutral, the page\'s own color):');
      var po = this.partOrder();
      Object.keys(PARTS).forEach(function (pg) {
        lines.push(PARTS[pg].name);
        Object.keys(SITES).forEach(function (k) {
          lines.push('  ' + SITES[k].name + ': ' + PARTS[pg].parts.map(function (d) { return d.label + ' ' + (po[pg][k][d.id] || 'N'); }).join(', '));
        });
      });
      lines.push('', 'order: ' + JSON.stringify(this.order()), 'parts: ' + JSON.stringify(po));
      return lines.join('\n');
    },
    // Markup for one page's parts: each part with a chip per palette number, shown in site key's colors.
    partsHtml: function (page, key) {
      var cs = site(key).colors, n = 0; Object.keys(SITES).forEach(function (k) { n = Math.max(n, SITES[k].colors.length); });
      return PARTS[page].parts.map(function (d) {
        var cur = slotOf(page, d.id, key), chips = '';
        if (d.neutral) chips += '<button class="pal-slot pal-n' + (cur === 0 ? ' on' : '') + '" data-page="' + page + '" data-site="' + sk(key) + '" data-part="' + d.id + '" data-slot="0" title="Neutral: the page\'s own ' + d.neutral + ', not a site color" style="background:' + d.neutral + ';color:' + (contrast(d.neutral, '#000000') < contrast(d.neutral, '#ffffff') ? '#fff' : '#111') + '">N</button>';
        for (var i = 1; i <= n; i++) {
          var c = cs[i - 1], bgc = c ? (d.fill ? css(c) : c.hex) : 'transparent';
          var fg = c && contrast(c.hex, '#000000') < contrast(c.hex, '#ffffff') ? '#fff' : '#111';
          chips += '<button class="pal-slot' + (i === cur ? ' on' : '') + (c ? '' : ' none') + '" data-page="' + page + '" data-site="' + sk(key) + '" data-part="' + d.id + '" data-slot="' + i + '" title="Color ' + i + (c ? ' ' + c.hex : ', not in this site\'s palette (uses its last color)') + '" style="background:' + bgc + ';color:' + fg + '">' + i + '</button>';
        }
        return '<div class="pal-part"><span class="pal-pl">' + d.label + '</span><span class="pal-slots">' + chips + '</span></div>';
      }).join('');
    },
    partsCss: '.pal-part{display:flex;align-items:center;gap:8px;padding:5px 14px}.pal-pl{flex:1 1 0;min-width:0;font-size:12.5px;line-height:1.3}' +
      '.pal-slots{flex:none;display:flex;gap:3px}.pal-slot{width:24px;height:24px;padding:0!important;border-radius:6px!important;border:1px solid #0003!important;font:700 11px ui-monospace,monospace!important;cursor:pointer}' +
      '.pal-slot.pal-n{margin-right:5px}.pal-slot.on{outline:2px solid #111;outline-offset:1px}.pal-slot.none{border-style:dashed!important;color:#999!important}',
    // @end
    page: PAGE,
    // Pages that switch sites in place say which one they show, so the panel shows that site's colors.
    showing: function (key) { if (key === this.shown) return; this.shown = key; if (this.onShow) this.onShow(key); },
    shown: null,
    // The site to start on, for pages that pick their site in place: the one showing before a panel reload, or ?site=.
    resume: back && back.site || new URLSearchParams(location.search).get('site'),
    // @edit
    // Reload the page, keeping the site shown and the scroll position (the page's own and [data-keep-scroll]).
    reloadHere: function () {
      var el = document.querySelector('[data-keep-scroll]');
      try { sessionStorage.setItem(RKEY, JSON.stringify({ path: location.pathname + location.search, site: this.shown, y: scrollY, sc: el ? el.scrollTop : 0 })); } catch (e) {}
      location.reload();
    },
    // @end
    parts: PARTS,
    // @edit
    partsTrial: !!partTrial,
    // @end
    slotOf: slotOf,
    key: sk,
    // The color (or for a fill part, the background) a page part takes for a site.
    part: function (page, id, key) {
      var d = PARTS[page] && PARTS[page].parts.filter(function (x) { return x.id === id; })[0], n = slotOf(page, id, key);
      if (n === 0 && d && d.neutral) return d.neutral;
      var cs = site(key).colors, c = cs[Math.min(Math.max(n, 1), cs.length) - 1];
      return d && d.fill ? css(c) : c.hex;
    },
    // Every part of a page for a site, as { id: value }.
    partsFor: function (page, key) { var o = {}, me = this; (PARTS[page] ? PARTS[page].parts : []).forEach(function (d) { o[d.id] = me.part(page, d.id, key); }); return o; },
    // @edit
    partOrder: function () {
      var o = {};
      Object.keys(PARTS).forEach(function (pg) { o[pg] = {}; Object.keys(SITES).forEach(function (k) { o[pg][k] = {}; PARTS[pg].parts.forEach(function (d) { o[pg][k][d.id] = slotOf(pg, d.id, k); }); }); });
      return o;
    },
    savePart: function (page, id, slot, key) {
      key = sk(key); var o = partTrial || {}; o[page] = o[page] || {}; o[page][key] = o[page][key] || {}; o[page][key][id] = slot; partTrial = o;
      try { localStorage.setItem(PKEY, JSON.stringify(o)); } catch (e) {} this.partsTrial = true;
    },
    clearParts: function () { partTrial = null; try { localStorage.removeItem(PKEY); } catch (e) {} this.partsTrial = false; },
    // @end
    order: function () { var o = {}; Object.keys(SITES).forEach(function (k) { o[k] = { colors: SITES[k].colors.map(function (c) { return c.img[0]; }), extra: SITES[k].extra.map(function (c) { return c.img[0]; }) }; }); return o; },
    contrast: contrast,
    ranked: ranked,
    css: css,
    // Background for ranked slot i (0 is color 1): a solid color or a pattern. Use it for fills.
    bg: function (key, i) { var c = site(key).colors[i || 0] || site(key).colors[0]; return css(c); },
    // The site's own page background (a color, or its pattern), for the backing of its live windows: where a page
    // ends before the window does, the rest matches the site instead of showing white.
    pageBg: function (key) {
      var hex = { awesome: '#30341d', ask: '#000000', titans: '#ffc200', hobo: '#ffffff', bv: '#81c8ff', engen: '#fafdfe', home: '#f0f0f0', spaceatlas: '#000000' }[sk(key)];
      if (!hex) return '#ffffff';
      var all = site(key).colors.concat(site(key).extra), c = all.filter(function (x) { return x.hex === hex; })[0];
      return c ? css(c) : hex;
    },
    // Color 1, the site's main color, for fills such as bars and buttons.
    main: function (key) { return ranked(key)[0]; },
    // Roles follow the order directly, so any reorder shows on every page:
    // color 1 is site-colored text, big numbers, marks and fills; color 2 is text on a color-1 fill;
    // color 3 is a third accent. (No contrast checks for now; bg and min are kept for later.)
    ink: function (key, bg, min) { return ranked(key)[0]; },
    on: function (key, fillHex, min) { var r = ranked(key); return r[1] || r[0]; },
    third: function (key) { var r = ranked(key); return r[2] || r[1] || r[0]; }
  };

  // @edit
  // Palette panel: a Palette button on every page that loads this file, for trying a different order in place.
  // A change saves the trial order and reloads the page so it redraws in the new colors; the panel reopens.
  function panel() {
    if (window.PALETTE_NO_PANEL || document.getElementById('pal-btn')) return;
    var P = window.PALETTE, here = sk(new URLSearchParams(location.search).get('site') || P.shown);
    var st = document.createElement('style');
    st.textContent =
      '#pal-btn{position:fixed;right:14px;bottom:14px;z-index:100000;height:38px;padding:0 14px;border:0;border-radius:999px;background:#000000cc;color:#fff;font:700 12px ui-monospace,monospace;cursor:pointer;box-shadow:0 6px 20px #0005}' +
      '#pal-btn i{display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffd23f;margin-right:7px;vertical-align:-1px}' +
      '#pal{position:fixed;right:14px;bottom:62px;z-index:100000;width:min(380px,calc(100vw - 28px));max-height:min(72vh,640px);overflow:auto;background:#fff;color:#15181d;border-radius:14px;box-shadow:0 20px 60px #0007;font:13px/1.4 system-ui,sans-serif;text-align:left;zoom:1}' +
      '#pal *{box-sizing:border-box}#pal[hidden]{display:none}' +
      '#pal .pal-top{position:sticky;top:0;background:#fff;padding:12px 14px 10px;border-bottom:1px solid #e3e6ea;display:flex;flex-wrap:wrap;gap:6px;align-items:center}' +
      '#pal .pal-top b{flex:1 1 100%;font-size:14px}#pal .pal-top small{flex:1 1 100%;color:#5b6270}' +
      '#pal button{font:600 12px system-ui,sans-serif;padding:6px 10px;border-radius:7px;border:1px solid #d6dbe1;background:#f6f7f9;color:#15181d;cursor:pointer}#pal button:disabled{opacity:.3;cursor:default}' +
      '#pal details{border-bottom:1px solid #eef0f3}#pal summary{cursor:pointer;padding:10px 14px;display:flex;align-items:center;gap:8px;font-weight:700;list-style:none}#pal summary::-webkit-details-marker{display:none}' +
      '#pal summary .pal-st{display:flex;gap:2px;margin-left:auto}#pal summary .pal-st span{width:14px;height:14px;border-radius:3px;border:1px solid #0002}' +
      '#pal .pal-c{display:flex;align-items:center;gap:8px;padding:5px 14px}#pal .pal-c .pal-sw{flex:none;width:26px;height:26px;border-radius:6px;border:1px solid #0002;font:700 10px ui-monospace,monospace;display:flex;align-items:center;justify-content:center}' +
      '#pal .pal-c .pal-t{flex:1;min-width:0}#pal .pal-c code{font:600 12px ui-monospace,monospace}#pal .pal-c .pal-w{color:#5b6270;font-size:11.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '#pal .pal-c button{padding:4px 7px}#pal .pal-lbl{padding:6px 14px 2px;color:#5b6270;font-size:11px;text-transform:uppercase;letter-spacing:.05em}' +
      P.partsCss +
      // Phones: a round button bottom right (just the dot), and the panel as a sheet above it.
      '@media (max-width:759px),(max-height:479px){#pal-btn{right:10px;bottom:calc(10px + env(safe-area-inset-bottom));width:42px;height:42px;padding:0;display:flex;align-items:center;justify-content:center}#pal-btn i{width:14px;height:14px;margin:0}#pal-btn .pal-l{display:none}' +
      '#pal{left:8px;right:8px;width:auto;bottom:calc(60px + env(safe-area-inset-bottom));max-height:70vh}#pal .pal-slot{width:30px;height:30px}#pal .pal-c button{padding:7px 10px}}' +
      '#pal textarea{width:calc(100% - 28px);margin:8px 14px;height:180px;font:11px/1.45 ui-monospace,monospace;border:1px solid #d6dbe1;border-radius:8px;padding:8px}';
    document.head.appendChild(st);
    var btn = document.createElement('button'); btn.id = 'pal-btn'; btn.innerHTML = '<i></i><span class="pal-l">Palette' + (P.trial || P.partsTrial ? ' · trial' : '') + '</span>'; btn.title = 'Palette';
    var box = document.createElement('div'); box.id = 'pal'; box.hidden = true;
    document.body.appendChild(box); document.body.appendChild(btn);
    var open = {}; try { open = JSON.parse(sessionStorage.getItem('splash-pal-open') || '{}'); } catch (e) {}
    function sw(h, label, c) { return '<span class="pal-sw" style="background:' + (c ? css(c) : h) + ';color:' + (contrast(h, '#000000') >= contrast(h, '#ffffff') ? '#111' : '#fff') + '">' + label + '</span>'; }
    function line(k, l, i, n, c) {
      var b = function (a, t, off) { return '<button data-k="' + k + '" data-l="' + l + '" data-i="' + i + '" data-a="' + a + '"' + (off ? ' disabled' : '') + '>' + t + '</button>'; };
      return '<div class="pal-c">' + sw(c.hex, l === 'colors' ? i + 1 : '·', c) + '<div class="pal-t"><code>' + (c.pattern ? 'pattern' : c.hex) + '</code><div class="pal-w">' + c.what + '</div></div>' +
        b('up', '↑', i === 0) + b('down', '↓', i === n - 1) + (l === 'colors' ? b('out', '−', n === 1) : b('in', '+')) + '</div>';
    }
    function draw() {
      var keys = Object.keys(SITES); if (here && SITES[here]) keys = [here].concat(keys.filter(function (k) { return k !== here; }));
      box.innerHTML = '<div class="pal-top"><b>Palette order</b><small>' + (P.trial ? 'Trial order on in this browser.' : 'Published order.') +
        ' ↑ ↓ reorder, − takes a color out of the ranking, + adds it back.</small><button data-x="export">Export</button>' +
        (P.trial || P.partsTrial ? '<button data-x="reset">Reset all</button>' : '') + '<button data-x="full">All details</button><button data-x="close">Close</button></div>' +
        (open.exp ? '<textarea readonly>' + P.exportText().replace(/</g, '&lt;') + '</textarea><div style="padding:0 14px 10px"><button data-x="copy">Copy</button></div>' : '') +
        (P.page && P.parts[P.page] ? (function () {
          var pk = here && SITES[here] ? here : (open.page === location.pathname + location.search && open.site) || keys[0];
          return '<div class="pal-lbl">Parts on this page for ' + SITES[pk].name + ' · which of its colors each uses</div>' + P.partsHtml(P.page, pk) + '<div style="height:8px;border-bottom:1px solid #eef0f3"></div>';
        })() : '') +
        keys.map(function (k) {
          var t = SITES[k];
          return '<details data-k="' + k + '"' + ((open.page === location.pathname + location.search && open.site ? open.site === k : k === keys[0]) ? ' open' : '') + '><summary>' + t.name +
            '<span class="pal-st">' + t.colors.map(function (c) { return '<span style="background:' + css(c) + '"></span>'; }).join('') + '</span></summary>' +
            t.colors.map(function (c, i) { return line(k, 'colors', i, t.colors.length, c); }).join('') +
            (t.extra.length ? '<div class="pal-lbl">Other colors</div>' + t.extra.map(function (c, i) { return line(k, 'extra', i, t.extra.length, c); }).join('') : '') + '</details>';
        }).join('');
    }
    function keep(site) { open.on = !box.hidden; if (site) { open.site = site; open.page = location.pathname + location.search; } try { sessionStorage.setItem('splash-pal-open', JSON.stringify(open)); } catch (e) {} }
    btn.addEventListener('click', function () { box.hidden = !box.hidden; if (!box.hidden) draw(); keep(); });
    box.addEventListener('toggle', function (e) { if (e.target.open) keep(e.target.dataset.k); }, true);
    box.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      if (t.dataset.a) {
        var k = t.dataset.k, l = t.dataset.l, i = +t.dataset.i, o = P.order(), a = o[k][l];
        if (t.dataset.a === 'up') a.splice(i - 1, 0, a.splice(i, 1)[0]);
        if (t.dataset.a === 'down') a.splice(i + 1, 0, a.splice(i, 1)[0]);
        if (t.dataset.a === 'out') o[k].extra.unshift(a.splice(i, 1)[0]);
        if (t.dataset.a === 'in') o[k].colors.push(a.splice(i, 1)[0]);
        P.saveOrder(o); keep(k); P.reloadHere();
      }
      if (t.dataset.part) { P.savePart(t.dataset.page, t.dataset.part, +t.dataset.slot, t.dataset.site); keep(t.dataset.site); P.reloadHere(); return; }
      var x = t.dataset.x;
      if (x === 'close') { box.hidden = true; keep(); }
      if (x === 'reset') { P.clearOrder(); P.clearParts(); keep(); P.reloadHere(); }
      if (x === 'export') { open.exp = !open.exp; keep(); draw(); }
      if (x === 'copy') { var ta = box.querySelector('textarea'); (navigator.clipboard ? navigator.clipboard.writeText(ta.value) : Promise.reject()).then(function () { t.textContent = 'Copied'; }, function () { ta.select(); document.execCommand('copy'); t.textContent = 'Copied'; }); }
      if (x === 'full') location.href = (location.pathname.indexOf('/candidates/') >= 0 ? '../../' : location.pathname.indexOf('/sitepages/') >= 0 ? '../' : '') + 'palette.html';
    });
    P.onShow = function (key) { here = sk(key); if (!box.hidden) draw(); };
    if (open.on) { box.hidden = false; draw(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', panel); else panel();
  // Put the scroll back once the page has drawn (candidates draw after load, so keep trying for a moment).
  if (back && (back.y || back.sc)) {
    var tries = 0, put = setInterval(function () {
      var el = document.querySelector('[data-keep-scroll]'), ok = true;
      if (back.y) { scrollTo(0, back.y); ok = Math.abs(scrollY - back.y) < 2; }
      if (back.sc) { if (el) { el.scrollTop = back.sc; ok = ok && Math.abs(el.scrollTop - back.sc) < 2; } else ok = false; }
      if (ok && tries > 4 || ++tries > 40) clearInterval(put);
    }, 100);
  }
  // @end
})();
