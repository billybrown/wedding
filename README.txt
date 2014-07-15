//+++++++++++++++++++++++++++!!!+++++++++++++++++++++++++++//

PROJECT OVERVIEW

@author: Bill Brown, Front-end developer, Echo & Co.

The internet summer page can be located at /internetsummer

It's a single, long scrolly page that lives "outside" drupal (it has its own <head> with its own js/css/etc. all sitting inside this module).


//+++++++++++++++++++++++++++!!!+++++++++++++++++++++++++++//

STACK OVERVIEW

This project uses a CSS preprocessor to compile CSS. Specifically libsass, an implementation of Sass in C/C++ instead of Ruby (what sass was originally written in). We're using this because it has an extremely fast compile time.

https://github.com/sass/libsass

To compile libsass, we are using a task manager called grunt. 

http://gruntjs.com/

We are also using grunt to concatenate and optimize all css files, concatenate and minify all JS files, optimize theme level images, and to generate sprites. Grunt is da' bomb.


//+++++++++++++++++++++++++++!!!+++++++++++++++++++++++++++//

GETTING STARTED

1. Install node and Grunt on your local machine
	- Grunt runs on node, so you need to make sure you've got that - dl it here: 
	- Grunt needs to be installed locally as well. Learn how to install it here: http://gruntjs.com/getting-started

2. Type 'npm install' into your terminal at the project root
	- this will grab the proper versions of all the packages needed to run this project. They are all listed in packages.json
	- If you get an error about imagemin, you might need to download the most recent version of phantom.js

3. Run some grunt commands depending on what you want to do
	- Need to make a css change?
		- run 'grunt watch'
		- open up a scss file, make your change and save the file.
		- Grunt will compile the scss into css, run the file through autoprefixer (this adds the appropriate browser prefixes based on what browser/versions you are supporting - defined in gruntfile.js), concatenate it with other css files and then optimize and minify it
		- The resulting css file is called styles.min.css
	- Need to make a js change?
		- run 'grunt watch'
		- open up a js file, make your change and save the file
		- grunt will concatenate this js file with all other scripts (save for modernizr) and minify it
		- the result js file is called scripts.min.js
	- Need to add a theme level image?
		- Is it raster? (jpeg, gif, png)
			- add it to the img/single/ folder
			- run 'grunt imagemin'
			- this will optmize all the images in the theme (doesn't hurt images already optimized)
		- is it an svg?
			- add it to the img/svg-sprites folder
			- run 'grunt svg-sprites'
			- this will compile all the svgs in that folder into a single big svg (an svg sprite) and a png fallback sprite.
			- It will also generate a scss partial with a class that you can use to integrate the svg as a background image inside the theme
			- TIP: You will need to run 'grunt watch' and compile your scss into a new css file for the new images to be integrated
			- TIP: You can either use the @extend method on the sprite class to 'extend' the image style to another element, or (and cleaner) you can apply the generated class directly to the markup to get the image to show up.


//+++++++++++++++++++++++++++!!!+++++++++++++++++++++++++++//

RAPID FRONT-END DEVELOPMENT TIPS

1. Takana (live as-you-type style injection)
	- type 'npm install -g takana'
	- Open up the site in chrome and some sass files in sublime 3
	- run 'takana .' in the terminal from the project root
	- refresh you page and then make some sass changes - and they should change as-you-type in the browser window
	- more info here: http://usetakana.com/
	- The tricky thing about this is - you cant use a minified and aggregated 

2. Live Reload (auto page refresh or style injection on save)
	- live reload is integrated in with 'grunt watch' (when you save it gets triggered)
	- for it to work though, you need to have the chrome browser extension:

3. Chrome inspector
	- right click and inspect an element in chrome, and you can adjust the css/html inside the browser
	- There are ways to link up chrome inspector directly with your scss/html/js - but i've never really gotten it to work right. So I just copy and paste the css I write in chrome inspector back into the sass partial.


//+++++++++++++++++++++++++++!!!+++++++++++++++++++++++++++//

CSS METHODOLOGY

1. responsive, mobile-first
	- everything is styled for mobile first, then using breakpoints other styles are added or overwritten for larger screen sizes. See the breakpoints mixin in the sass folder for more info on how to use media queries
	- Breakpoints based on content, not devices. The breakpoints are purely based on when content starts to look funky as you make your screen larger. So the site should look good at all screen sizes - not just at iphone size, ipad size, etc.
	- Breakpoints use ems, not pixels. If you use pixels you fuck things up when people start to zoom in, inside the browser.

2. Feature detection
	- We use modernizr to detect what features are available for certain browsers. For example if a device is touch friendly, modernizr will add a class of '.touch' to the <body> element - then we can change the scss based on tha class. If it's *not* touch friendly it will add a class of '.no-touch'. It does this for a number of things included svg, media queries, js, etc. If you need to check for other types of things you need to generate a new custom modernizr script and replace the one currently being loaded.

3. Progressive Enhancement
	- Make sure things work in the most basic of scenarios first, then add to that. So the tiny screen with no javascript and no css3, doesn't have to look perfect - but it shouldn't look broken. 







