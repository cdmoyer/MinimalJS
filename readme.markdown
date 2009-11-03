MinimalJS
==========

[http://github.com/cdmoyer/minimaljs](http://github.com/cdmoyer/minimaljs)

JavaScript libraries are awesome.  jQuery, Dojo, MooTools, YUI, et al. all
have their place.  Somethimes, though, you just need one or two pieces of 
functionality on a page or project.  And that's what MinimalJS is for.

Usage
-----

### Quick Start

Copy files from `/js/` into your web path, include them, use them

### Custom Build

If you find that you need multiple functions on a page, you probably want to create a custom build (and ask yourself if you should be using a real library.)  MinimalJS uses [Sprockets](http://getsprockets.com/) as an internal build system, making it simple do so yourself.

1.  Create your file, specifying the modules you wish to use with `require` directives.
	
		//= require <cookie>
		//= require <modal>

2.  Add whatever other javascript you want to your file
3.  Run `sprocketize`

		sprocketize -I lib/ myfile_template.js &gt; myfile.js

Code Standards
--------------

All modules provide methods to a global library object.  In the default build, this is called `mjs`.  If you are building your own, this can be changed in `lib/constants.yml`.

Within a module, all variables are contained in an anonymous closure.

All code should generally not make [JSLint](http://www.jslint.com/) sad, assuming:

	/*jslint browser: true */
	/*global mjs: true, window */

