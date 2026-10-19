// Site content shared by every site-page design (AI to AN).
// The text is v0.1's, word for word (projects/splash/*.html in splash-v0.1.zip).
// Order is by start date; previous/next links follow it. Colors come from ../palette.js.
// top: the windows shown at the top of the page (AN's fan), in order; { ref: id } is a section's own window.
// song and topLinks sit beside the top window. Since Nick's content review, sections no longer repeat a top window.
(function () {
  var H = 'https://hackahobo.info';
  var S = H + '/projects/sites/';
  var G = S + 'awesomestuff/games/';
  var L = H + '/projects/splash/logos/';
  var IC = H + '/projects/splash/icons/';
  var ATN = S + 'askthenickman/';

  window.SITES = [
    {
      key: 'awesome',
      name: 'Awesome Stuff',
      range: 'c. 2008',
      started: 'c. 2008',
      tier: 'Flagship',
      favicon: IC + 'awesomestuff/favicon.ico',
      logo: L + 'awesomestuff/awesomestuff-upscaled.png',
      thumb: 'img/awesome-lawesomel.jpg',
      addresses: ['lawesomel.webs.com', 'awesomestuffr.webstarts.com'],
      lede: 'My first website, made in middle school.',
      top: [{ addr: 'http://lawesomel.webs.com/', src: S + 'lawesomel/index.html', w: 1280, h: 900, img: 'img/awesome-lawesomel.jpg', title: 'Awesome Stuff' }],
      sections: [
        {
          h: 'Origins',
          p: ['My best friend in middle school had already made a few sites on webs.com, including Radical Dragon and Harry Hackers, and he showed me how to make one. Webs.com was the craze back then, and millions of sites lived there. I liked talking about tech, so I started Awesome Stuff at lawesomel.webs.com as a place to rank the things I liked.']
        },
        {
          h: 'Contents',
          p: ['Over time we added whatever we thought was fun. We posted obscure links, like live traffic cams and CCTV sites that streamed cameras from around the world. Widgets were extremely popular, so we added all the widgets we could find, and since web games back then had an “add this game to your site” button, I think we added some of those too. I shared photos I’d taken with my camera, the games I made in GameMaker, and script-kiddie hacking tricks for pulling pranks on people, along with other fun scripts. Toolbars were big at the time, so I made a Conduit toolbar for Awesome Stuff and advertised the download on the site.'],
          media: [{ img: 'img/toolbar-2010.png', cap: 'The Awesome Stuff toolbar in Internet Explorer, 2010' }]
        },
        {
          h: 'Games and scripting',
          p: ['Awesome Stuff was one site on two domains. The main site was at lawesomel.webs.com, and the hacking scripts and games were in a section at awesomestuffr.webstarts.com. Webstarts had more features than webs.com, like password-protected pages. I tried to make that section look the same as the main site, but I didn’t do very well. It’s somehow still online.',
            'The games page from the Webstarts section is still online. It lists the games I made in GameMaker and posted to YoYo Games, along with Planetary Ballistics, the HD Masters games, and a PowerPoint game made by my friend Harry. The downloads below are the original files. The GameMaker games are Windows programs from around 2008, so they may need compatibility mode or a virtual machine running an older version of Windows to work on a modern computer. Harry’s PowerPoint games play as slide shows.'],
          lists: [
            { h: 'Games I made', items: [
              ['Sepy', G + 'sepy.exe'], ['Awesome Pac Guy', G + 'Awesome%20pac%20guy.exe'], ['Old Pac Guy', G + 'Old%20pac%20guy.exe'],
              ['Molten', G + 'Molten.exe'], ['Kitchen Invaders 3D', G + 'Kitchen%20Invaders%203D.exe'], ['Breakout', G + 'Breakout.exe'],
              ['Mario Kong', G + 'donkey%20kong%20preview.exe'], ['Dodger', G + 'Dodger.exe'], ['Virus', null]
            ] },
            { h: 'Unlisted GameMaker games', items: [
              ['Maze Game', G + 'MAZE%20GAME.exe'], ['Another Molten', G + 'Another.%20Molten.exe'], ['Pac Guy', G + 'pacguy.exe']
            ] },
            { h: 'Games Harry made', items: [
              ['HD Masters 1', G + 'HD%20Masters%201.exe'], ['HD Masters 2', G + 'HD%20Masters%202.exe'], ['Planetary Ballistics', G + 'Planetary_Ballistics.exe'],
              ['Breakout 2', G + 'Breakout2.exe'], ['Meteor Storm', G + 'Meteor_Storm.exe'], ['Piñatahead', G + 'Pin~atahead.exe'],
              ['Tails Doll 2', G + 'Tails%20Doll%202.exe'], ['Smiley Surgeon', G + 'smiley%20Surgeon.ppt'], ['Smiley Surgeon, newer copy', G + 'Smiley%20Surgeon.pptx'],
              ['Smiley Dude', G + 'smiley%20dude.ppt'], ['Stress Relief', G + 'Stress%20Relief.ppt'], ['Magnum Simulator v1.0', G + 'Magnum%20Simulator%20v1.0.pps'],
              ['Bumbling Idiot', G + 'bumbling%20idiot.pptx'], ['Button Game 4', G + 'Button%20Game%204.pptx'], ['Combo Lock', G + 'Combo%20Lock.pptx'],
              ['French Revolution', G + 'French%20Revolution.pptx'], ['The Maze', G + 'The%20Maze.pptx']
            ] },
            { h: 'Other games', items: [['The Npac Game', G + 'The%20Npac%20Game.exe']] }
          ]
        },
        {
          h: 'Scripts',
          p: ['Two of the scripts from the Javascript Codes page in the Webstarts section. Pasting one into a browser’s address bar ran it on whatever page was open. Both are shown word for word, and you can run them on this page.'],
          scripts: [
            { h: '“Make images fly around screen”', p: 'Every picture on the page moves in circles.', action: 'fly', on: 'Put them back',
              code: 'javascript:R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; DI=document.getElementsByTagName("img"); DIL=DI.length; function A(){for(i=0; i-DIL; i++){DIS=DI[ i ].style; DIS.position=\'absolute\'; DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+ "px"; DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+" px"}R++}setInterval( \'A()\',5); void(0);' },
            { h: '“Edit websites #2”', p: 'Every piece of text on the page becomes editable, so you can click anywhere and type over it. Reloading the page puts everything back.', action: 'edit', on: 'Stop editing',
              code: 'javascript: document.body.contentEditable = \'true\'; document.designMode = \'on\'; void 0' }
          ]
        }
      ]
    },
    {
      key: 'ask',
      name: 'Askthenickman',
      range: 'c. 2009',
      started: 'c. 2009',
      tier: 'Flagship',
      favicon: IC + 'askthenickman/favicon.ico',
      logo: L + 'askthenickman/original-cropped.png',
      thumb: 'img/ask-home.jpg',
      addresses: ['askthenickman.webs.com', 'askthenickman.net23.net', 'askthenickman.com'],
      evolvedInto: 'Hack a HOBO',
      lede: 'A site I built in Microsoft Word and later used mostly for games.',
      top: [{ ref: 'atn' }, { addr: 'http://askthenickman.com/', src: ATN + 'index-techno.html', w: 1280, h: 800, img: 'img/ask-techno.jpg', title: 'Techno home page' }],
      sections: [
        {
          h: 'Ask a Ninja',
          p: ['I enjoyed the video podcast Ask a Ninja, where a ninja answers viewers’ questions, and I thought it would be cool to make my own version. I was just a kid, so it never worked out. I made a few home videos with my sister for the site and uploaded some videos I made in classes at school.'],
          media: [{ img: 'img/ask-a-ninja.png', cap: 'Ask a Ninja, the video podcast that inspired the site' }]
        },
        {
          h: 'Microsoft Word',
          p: ['I made the first pages in Microsoft Word, with WordArt and gradient shapes. Word could export a document to HTML, which sounded neat, so I figured out how to do it and uploaded the HTML to webs.com. That’s why the logo says .WEBS.COM. For a while the site also lived at askthenickman.net23.net. Then my neighbor taught me how to register a domain, and he registered askthenickman.com for me.']
        },
        {
          h: 'Contents',
          p: [
            'I posted whatever I was into. That included Flash games, the secret phone numbers from The Hitchhiker’s Guide to the Galaxy, one of those chat rooms where you talked with random strangers, and Fundiferous Nothing, comics my middle school friend Jackie drew for me, which are also in the Awesome Stuff photo albums. The Programming section started as a school project where I had to research something and present it to the class. I researched all the languages needed to make websites (HTML, CSS, JavaScript, and XML) and put what I learned on the site as lesson pages, one for each tag and topic.',
            'Over time I posted more games than anything else, until Askthenickman was mostly a games site. In 2011 I moved the games to their own site, Hack a HOBO. The Askthenickman games page ended up loading its game menu from hackahobo.info, and it still has a commented-out line that once sent visitors straight to the new site.'
          ]
        },
        {
          h: 'Holidays',
          p: ['I enjoyed websites with holiday themes, and I wanted to try it myself. I made a themed logo for each holiday, each with its own copy of the home page, and added JavaScript effects to match. The Christmas page had falling snow, and other pages had fireworks or extra mouse cursors that trailed behind the real one.'],
          embed: { id: 'atn', addr: 'http://askthenickman.webs.com/', src: ATN + 'index.html', w: 1280, h: 800, img: 'img/ask-home.jpg', title: 'Askthenickman' }
        },
        {
          h: 'Holiday logos',
          p: ['Click a logo to load that holiday’s version of the site.'],
          logos: { target: 'atn', items: [
            { name: 'New Year’s', img: L + 'askthenickman/holidays/newyears.png', src: ATN + 'Holidays/newyears.html', addr: 'http://askthenickman.webs.com/Holidays/newyears.html' },
            { name: 'Groundhog Day', img: L + 'askthenickman/holidays/groundhogsday.gif', src: ATN + 'Holidays/groundhogsday.html', addr: 'http://askthenickman.webs.com/Holidays/groundhogsday.html' },
            { name: 'Valentine’s Day', img: L + 'askthenickman/holidays/valentinesday.png', src: ATN + 'Holidays/valentinesday.html', addr: 'http://askthenickman.webs.com/Holidays/valentinesday.html' },
            { name: 'Presidents’ Day', img: L + 'askthenickman/holidays/presidentsday.png', src: ATN + 'Holidays/presidentsday.html', addr: 'http://askthenickman.webs.com/Holidays/presidentsday.html' },
            { name: 'Mardi Gras', img: L + 'askthenickman/holidays/mardigras.png', src: ATN + 'Holidays/mardigras.html', addr: 'http://askthenickman.webs.com/Holidays/mardigras.html' },
            { name: 'St. Patrick’s Day', img: L + 'askthenickman/holidays/stpatricksday.png', src: ATN + 'Holidays/stpatricksday.html', addr: 'http://askthenickman.webs.com/Holidays/stpatricksday.html' },
            { name: 'Fourth of July', img: L + 'askthenickman/holidays/fourthofjuly.png', src: ATN + 'Holidays/fourthofjuly.html', addr: 'http://askthenickman.webs.com/Holidays/fourthofjuly.html' },
            { name: 'Halloween', img: L + 'askthenickman/holidays/halloween.png', src: ATN + 'Holidays/halloween.html', addr: 'http://askthenickman.webs.com/Holidays/halloween.html' },
            { name: 'Christmas', img: L + 'askthenickman/holidays/christmas.png', src: ATN + 'Holidays/christmas.html', addr: 'http://askthenickman.webs.com/Holidays/christmas.html' },
            { name: 'Everyday logo', img: L + 'askthenickman/original-cropped.png', src: ATN + 'index.html', addr: 'http://askthenickman.webs.com/' },
            { name: '“Techno blur” redesign', img: L + 'askthenickman/askthenickmantechnoblur.jpg', src: ATN + 'index-techno.html', addr: 'http://askthenickman.com/' }
          ] }
        },
        {
          h: 'Effects',
          p: ['Snow, fireworks, and cursor trails, recreated for this page. The site’s original fireworks page also still works.'],
          fx: true,
          buttons: [{ text: 'Original fireworks page', href: ATN + 'Holidays/Fireworks.html' }]
        }
      ]
    },
    {
      key: 'titans',
      name: 'Titans Softball',
      range: 'c. 2010',
      started: 'c. 2010',
      tier: 'Side project',
      favicon: 'img/softball.ico',
      logo: L + 'titans/titansheader.png',
      thumb: 'img/titans.jpg',
      addresses: ['softball.askthenickman.com'],
      commissioned: 'My dad',
      lede: 'The first site someone asked me to build.',
      top: [{ addr: 'http://softball.askthenickman.com/', src: S + 'titans/titans.html', w: 1366, h: 768, img: 'img/titans.jpg', title: 'Titans Softball' }],
      song: { src: S + 'titans/centerfield.mp3', play: 'Play “Centerfield”', stop: 'Stop the song' },
      sections: [
        {
          h: 'Commission',
          p: ['My dad coached my sister’s softball team. He likes sports and is very into stats. He wanted one place where parents on the team could get information on practices and games, see photos from the games, and check their kids’ stats. It was the first site anyone asked me to build, and because it was built to his specifications, I learned how to work with a customer to find out what they need. I built it shortly before the first season, and it lived at the subdomain softball.askthenickman.com.']
        },
      ]
    },
    {
      key: 'hobo',
      name: 'Hack a HOBO',
      range: '2011 – today',
      started: '2011',
      tier: 'Flagship',
      favicon: IC + 'hackahobo/favicon.ico',
      logo: L + 'hackahobo/hackahobo-logo-stretched.png',
      thumb: 'img/hobo-2012.jpg',
      addresses: ['hackahobo.info'],
      evolvedFrom: 'Askthenickman',
      lede: 'The games site that started on Askthenickman. Still going strong to this day!',
      top: [{ addr: 'http://www.hackahobo.info/', src: H + '/files/v1/index-v1.html', w: 1100, h: 760, img: 'img/hobo-2012.jpg', title: '2011 Edition, as of November 6, 2012' },
        { addr: 'https://hackahobo.info/', src: H + '/index-v2.php', w: 1100, h: 760, img: 'img/hobo-2024.jpg', title: '2024 Edition' },
        { id: 'hah', addr: 'https://hackahobo.info/?theme=original', src: H + '/?theme=original', w: 1100, h: 760, img: 'img/hobo-2026.jpg', title: '2026 Edition' }],
      sections: [
        {
          h: 'Origins',
          p: ['In 2011, I started transitioning the games from Askthenickman to their own site. My sister came up with the new site’s name, Hack a HOBO. We wanted it themed around cavemen, and I thought “hobo” was another word for a caveman. The “Hack” probably came from the hacking tutorials on Awesome Stuff. The first layout was based on Facebook’s design in early 2011, with a blue bar across the top, small navigation buttons on the right, and content in boxes underneath. I started Hack a HOBO in middle school and kept it going through high school as a way for kids to get around blocked gaming sites at school.']
        },
        {
          h: 'Profiles',
          p: ['When I started learning PHP, I wanted to make my own social media site, so I added profiles to Hack a HOBO. People could sign up, log in, and have their own page. It was hard to prevent spam, injection attacks, and similar problems, so I removed the profiles. I never liked gaming sites that tried to force the social media aspect anyway, so that was an easy decision.']
        },
        {
          h: 'Hack a HOBO’s Hiatus',
          p: [
            'For years before it ended, browsers warned that Flash was going away and started blocking it by default, and Adobe finally shut it down at the end of 2020. Many of the other games ran on Shockwave and Java, which browsers dropped too. Since the site relied on all of these technologies that were going away, I let the site die off. In 2024, Flash was just starting to be revived through Ruffle, and I began rebuilding the site to its former glory.',
            'The 2024 Edition made the site modern, so it works in current browsers and on phones, and it brought the games back. The site now runs Flash games with Ruffle, Java games with CheerpJ, and Shockwave games with DirPlayer. Only a handful of the Flash games still aren’t fully working in Ruffle. DirPlayer only took off in the past year, and soon almost every Shockwave game will be fully playable. Previews of its latest GitHub build show near-perfect emulation of the complicated 3D games of the past.',
            'The 2026 Edition was an overhaul to fix design problems that had been on the site for over a decade, which I finally had ideas and fixes for. The first fix was the left sidebar, which now holds a featured game and the navigation tools. The second was game containers on the home page, which let me give the site custom holiday themes. The holidays I most wanted were Halloween and Christmas, and the containers made those themes possible by letting me use more colors in the design. I’ve always wanted snow to collect on the game containers, and I plan to have that working by Christmas 2027.'
          ]
        },
        {
          h: 'Holiday logos',
          p: ['Click a logo to load that theme on the live site. Hover over a logo to see its animated version.'],
          embed: { id: 'themes', addr: 'https://hackahobo.info/?theme=original', src: H + '/?theme=original', w: 1100, h: 760, img: 'img/hobo-2026.jpg', title: 'Holiday themes' },
          logos: { target: 'themes', items: [
            { name: 'Original', img: H + '/files/hackahobo.png', hover: H + '/files/hackahoboover.gif', src: H + '/?theme=original', addr: 'https://hackahobo.info/?theme=original' },
            { name: 'Valentine’s Day', img: H + '/files/hackahobo-vday.png', hover: H + '/files/hackahoboover-vday.gif', src: H + '/?theme=valentines', addr: 'https://hackahobo.info/?theme=valentines' },
            { name: 'St. Patrick’s Day', img: H + '/files/hackahobo-stpattys.png', hover: H + '/files/hackahoboover-stpattys.gif', src: H + '/?theme=stpattys', addr: 'https://hackahobo.info/?theme=stpattys' },
            { name: 'Halloween', img: H + '/files/hackahobo-halloween.png', hover: H + '/files/hackahoboover-halloween.gif', src: H + '/?theme=halloween', addr: 'https://hackahobo.info/?theme=halloween' },
            { name: 'Christmas', img: H + '/files/hackahobo-xmas.png', hover: H + '/files/hackahoboover-xmas.gif', src: H + '/?theme=christmas', addr: 'https://hackahobo.info/?theme=christmas' }
          ] }
        }
      ]
    },
    {
      key: 'bv',
      name: 'BV Homework',
      range: '2013',
      started: '2013',
      tier: 'Side project',
      favicon: 'img/blank.ico',
      logo: 'img/BVHomeworkBig.png',
      thumb: 'img/bv.jpg',
      addresses: [],
      lede: 'A homework-answers site I never launched.',
      sections: [
        {
          h: 'Idea',
          p: ['BV Homework, named for Blue Valley High School, was going to be a place to share answers to everyone’s homework problems. Its pitch was “Blue Valley students, unite against the tyranny of busy work.” I stopped working on it before it launched because I was afraid of getting in trouble.']
        },
        {
          h: 'Draft',
          p: ['The site as I left it in April 2013.'],
          embed: { addr: 'BV Homework', src: S + 'bv-homework/BVHomework.html', w: 1280, h: 900, img: 'img/bv.jpg', title: 'BV Homework draft' }
        }
      ]
    },
    {
      key: 'engen',
      name: 'EnGen NextGen',
      range: '2014',
      started: '2014',
      tier: 'Side project',
      favicon: IC + 'engen/favicon_red.ico',
      logo: 'img/EnGenAlphaTrim.png',
      tagline: 'The Next Generation of Engineers',
      thumb: 'img/engen.jpg',
      addresses: ['engennextgen.org'],
      commissioned: 'The club’s founder',
      lede: 'My second commission, paid for in personal training.',
      top: [{ addr: 'http://www.engennextgen.org/', src: S + 'engen/home.php', w: 1366, h: 768, img: 'img/engen.jpg', title: 'EnGen NextGen' }],
      sections: [
        {
          h: 'Commission',
          p: ['I had to get in shape for basic training. My best friend had a friend who was very fit, so I asked him to be my personal trainer. He had a girlfriend who wanted a website, and he said he’d train me if I made it for her. She wanted to build her resume for college, so she started a club called EnGen NextGen, which would meet weekly with professional engineers. I worked hard to make the site engineering themed. The front page showcased the club, which I joined. We did photo shoots for the site’s photos, someone wrote blog entries that I uploaded, and there was a calendar of the club’s events. The club was mostly there to help people get into college, so it didn’t last long.']
        },
        {
          h: 'Competition',
          p: ['At the same time, I was in a drafting class in high school, and my teacher signed everyone up for engineering competitions at the local college. Web design was one of the categories, so I entered the club’s site. I kept working on it all the way up to the competition, and it won first place.']
        },
        {
          h: 'Domain expiry',
          p: ['Later I used the site for my own blog, where the club’s blog had been. I had a communications class where we had to keep a blog and were graded on our posts, and I hosted mine on engennextgen.org. When the domain expired around 2015, everything on it was lost, including the version I worked so hard on and entered in the competition. For some reason, I had kept all the files on the server and never saved them on my own computer. There were a few very old builds of the site that I was able to recover, but they were missing many months of work done before the competition. I tried my best to recreate what I could.']
        },
        {
          h: 'Notable milestones',
          gallery: [
            { img: 'img/cte-first-place.jpg', cap: 'Competitive Technology Event 2015, Web Information, 1st place' },
            { img: 'img/first-day.jpg', cap: 'First day of building, August 1, 2014' }
          ]
        }
      ]
    },
    {
      key: 'home',
      name: 'Home',
      range: '2016 – today',
      started: '2016',
      tier: 'Personal',
      favicon: IC + 'home-original/favicon.ico',
      logo: L + 'home-original/logo-transparent.png',
      thumb: 'img/home.jpg',
      addresses: ['localhost/home'],
      lede: 'The start page I built to help keep me organized. I rebuilt it in 2018 and still use it today.',
      top: [{ addr: 'http://localhost/home/', src: S + 'home-original/index.php', w: 1280, h: 900, img: 'img/home.jpg', title: 'Home, first version' }],
      sections: [
        {
          h: 'First version',
          p: ['I built the first version in November 2016 with PHP and jQuery. Every time I opened a browser, it greeted me with “Welcome Nick” and the date and time, and filled in from RSS news feeds, Yahoo stock data, weather APIs, Reddit, and more. Whenever one of those APIs changed, the whole site crashed. A friend saw the page and was impressed with it, and he later picked me to lead the web design on Space Atlas.']
        },
        {
          h: 'Second version',
          p: ['After too many crashes, I rebuilt the page with every feed in its own module. Each module was a bubble that expanded when you opened it. It looked cleaner but was less interesting. The bubbles held the same feeds as before, plus my website bookmarks with a bubble for each category, more detailed stock data you could interact with, and notes. When I got married in 2019, I added a module to manage, track, and visualize our spending and finances. I still use it, mostly for finances.'],
          media: [{ img: L + 'home/logo-transparent.png', cap: 'The second version of the site', bg: L + 'home/pinstripe2.png' }]
        }
      ]
    },
    {
      key: 'spaceatlas',
      name: 'Space Atlas',
      range: '2018',
      started: '2018',
      tier: 'Notable',
      favicon: IC + 'spaceatlas/favicon.ico',
      logo: L + 'spaceatlas/spaceatlas.png',
      thumb: 'img/spaceatlas.jpg',
      addresses: ['thespaceatlas.org'],
      commissioned: 'Newt Gingrich, via USAFA',
      lede: 'A virtual experience about the future of space, made at the Air Force Academy for Newt Gingrich.',
      top: [{ addr: 'http://thespaceatlas.org/', src: 'https://spaceatlas.hackahobo.info/', w: 1400, h: 850, img: 'img/spaceatlas.jpg', title: 'Space Atlas' }],
      sections: [
        {
          h: 'Assignment',
          p: ['Around 2017, Newt Gingrich, the former Speaker of the U.S. House of Representatives and a longtime advocate of space exploration, commissioned the U.S. Air Force Academy to create a virtual experience that would show the future of space, looking ahead to 2038. My best friend at USAFA was in the Astronautical Engineering department, and leading the team became his capstone project. I wasn’t an Astro major, but he knew about the Home start page I had built for myself. He was impressed with it, and he picked me to lead the web design.']
        },
        {
          h: 'Development',
          p: ['I worked most closely with our graphic artist, who designed assets for the site. My best friend and others on the team made the 3D renders in Blender, the rest did research, and another cadet took over as lead in the second semester. The project was technically very demanding, and with my friend’s leadership we managed to pull it off. The whole site was a challenge, and when it was finished it felt like a masterpiece. We presented the work to the department and at Space Symposium, and we collaborated with SpaceX, Lockheed Martin, and JPL. I’m not sure how far the project went beyond that.']
        },
        {
          h: 'Concept work',
          p: ['Sketches, notes, and drafts from building the site in 2018.'],
          gallery: [
            { img: 'img/sa-whiteboard.jpg', cap: 'First layout sketch' },
            { img: 'img/sa-menu-button-math.jpg', cap: 'Working out the geometry for the menu button, whose bars rotate into an X' },
            { img: 'img/sa-orbit-test.jpg', cap: 'Orbit test, January 22, 2018' }
          ],
          sub: [
            { h: 'Logo', gallery: [
              { img: 'img/sa-early-logo.jpg', cap: 'Early logo, under the working title “Space in 2038”' },
              { img: 'img/sa-logo-sketch-cleaned.jpg', cap: 'Hand-drawn logo idea' },
              { img: 'img/sa-logo-design.jpg', cap: 'Logo design with a rocket in place of the A' },
              { img: 'img/sa-final-logo.png', cap: 'Final logo', dark: true }
            ] },
            { h: 'Icons', p: 'Icons I drafted for the spacecraft and bases.', icons: [
              'another-rocket1', 'arm-thing1', 'debris-manager1', 'dream-chaser', 'glen1', 'moon-base', 'not-much-better',
              'other-satelite1', 'rocket-logo-3', 'rocket-logo-4', 'satellite2', 'space-thing1', 'tank-thing1'
            ].map(function (n) { return { img: 'img/sa-icons/custom-' + n + '.png', cap: '', dark: true }; }) }
          ]
        },
        {
          h: 'Lost builds',
          p: ['I kept archives of every version of Space Atlas, codenamed Newton, from v1 through v8. I loaned out my hard drive for Space Symposium and never got it back, and it turned out the only copies of v1 through v6 were on that drive, so they’re mostly lost for good. All that’s left of the old builds are the photos and videos I took with my phone.']
        }
      ]
    }
  ];

  // The focus designs first.
  window.SITE_DESIGNS = {
    AI: { file: 'AI.html', name: 'Split screen' },
    AK: { file: 'AK.html', name: 'Chapters' },
    AN: { file: 'AN.html', name: 'Fan page' },
    AJ: { file: 'AJ.html', name: 'Drawer' },
    AL: { file: 'AL.html', name: 'Long read' },
    AM: { file: 'AM.html', name: 'Window page' }
  };
})();
