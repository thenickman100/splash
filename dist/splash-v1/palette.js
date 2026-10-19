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
      { id: 'kicker', label: 'Year and tier line', slot: 3, neutral: '#9a9a9a' },
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
      { id: 'kick', label: 'Year and tier line', slot: 0, neutral: '#9a9a9a' },
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
  var partTrial = null;
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
    return { 'Travel.dc.html': 'K', 'R8-AG.dc.html': 'AG', 'R8-AE.dc.html': 'AE', 'AI.html': 'AI', 'AK.html': 'AK', 'AN.html': 'AN' }[f] || null;
  })();

  var back = null, trial = null;

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
    page: PAGE,
    // Pages that switch sites in place say which one they show, so the panel shows that site's colors.
    showing: function (key) { if (key === this.shown) return; this.shown = key; if (this.onShow) this.onShow(key); },
    shown: null,
    // The site to start on, for pages that pick their site in place: the one showing before a panel reload, or ?site=.
    resume: back && back.site || new URLSearchParams(location.search).get('site'),
    parts: PARTS,
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
    order: function () { var o = {}; Object.keys(SITES).forEach(function (k) { o[k] = { colors: SITES[k].colors.map(function (c) { return c.img[0]; }), extra: SITES[k].extra.map(function (c) { return c.img[0]; }) }; }); return o; },
    contrast: contrast,
    ranked: ranked,
    css: css,
    // Background for ranked slot i (0 is color 1): a solid color or a pattern. Use it for fills.
    bg: function (key, i) { var c = site(key).colors[i || 0] || site(key).colors[0]; return css(c); },
    // Color 1, the site's main color, for fills such as bars and buttons.
    main: function (key) { return ranked(key)[0]; },
    // Roles follow the order directly, so any reorder shows on every page:
    // color 1 is site-colored text, big numbers, marks and fills; color 2 is text on a color-1 fill;
    // color 3 is a third accent. (No contrast checks for now; bg and min are kept for later.)
    ink: function (key, bg, min) { return ranked(key)[0]; },
    on: function (key, fillHex, min) { var r = ranked(key); return r[1] || r[0]; },
    third: function (key) { var r = ranked(key); return r[2] || r[1] || r[0]; }
  };

})();
