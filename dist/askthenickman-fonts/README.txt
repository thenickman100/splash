Askthenickman font fix

Upload everything in this folder to https://hackahobo.info/projects/sites/askthenickman/, keeping the folders,
replacing the six pages it includes. Nothing else on the site changes.

Why: the site was made on Windows with Windows' fonts (Comic Sans MS for nearly all its text, plus Impact,
Bodoni MT Black, Berlin Sans FB and Lucida Console here and there). Phones and many computers don't have them, so
the text fell back to other fonts (Marker Felt on iPhones). fonts.css gives each of those fonts a free look-alike
under the same name: a device that has the real font still uses it, and anything else gets the look-alike.

What changed:
  fonts.css and fonts/                    new: the look-alikes (SIL Open Font License, see fonts/OFL-*.txt)
  askthenickman.css                       one line added at the top: @import url("fonts.css");
  games/index.html, Holidays/index.htm,
  more/index.htm, more/secretphonenumbers/index.htm,
  programming/js4.html                    one line added after <head>: a link to fonts.css
The pages are otherwise byte-for-byte the files on the server (Windows-1252 text, as Word saved them).
