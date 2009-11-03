/* Minimal JS -- Cookies -- http://github.com/cdmoyer/minimaljs
 * Copyright (c) 2009 Chris Moyer (chris@inarow.net)  
 *
 * Usage:
 * <%= MINIMALJS_OBJECT %>.cookie_set(name, value, [expire minutes])
 * <%= MINIMALJS_OBJECT %>.cookie_get(name); 
 *
 * MIT (http://www.opensource.org/licenses/mit-license.php) licensed.
 */
//= require "preamble"
(function (mjs) {
 	mjs.cookie_set = function (name, value, minutes) {
		var expires = "";
		if (minutes) {
			var expy = new Date();
			expy.setTime(expy.getTime() + (minutes*60*60*1000));
			expires = "; " + date.toGMTString();
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	};

	mjs.cookie_get = function (name) {
		var cookies = "" + document.cookie;
		var indx = cookies.indexOf(name + '=');
		if (indx == -1 ) { return false; }
		var end = cookies.indexOf(';', indx);
		return cookies.substr(indx + name.length + 1, end == -1 ? cookies.length : end);
	};
	return mjs;
})(<%= MINIMALJS_OBJECT %>);
