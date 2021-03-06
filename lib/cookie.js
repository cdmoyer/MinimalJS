/* Minimal JS -- Cookies -- http://github.com/cdmoyer/minimaljs
//= require "copyright"
 *
 * Usage:
 * <%= MINIMALJS_OBJECT %>.cookie_set(name, value, [expire minutes])
 * <%= MINIMALJS_OBJECT %>.cookie_get(name);
 */
//= require "preamble"
(function (mjs) {
 	mjs.cookie_set = function (name, value, minutes) {
		var expires = "";
		if (minutes) {
			var expy = new Date();
			expy.setTime(expy.getTime() + (minutes*60*1000));
			expires = ";expires=" + expy.toGMTString();
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
