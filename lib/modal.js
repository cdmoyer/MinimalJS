/* Minimal JS -- Modal -- http://github.com/cdmoyer/minimaljs
//= require "copyright"
 *
 * Usage:
 * <%= MINIMALJS_OBJECT %>.modal_open('<h1>A Modal</h1><p>Yay!</p>'); // Open a modal
 * <%= MINIMALJS_OBJECT %>.modal_close();           // Close a modal
 *
 */
//= require "preamble"
(function (mjs) {
	var overlay_div, modal_div;

	function _height() {
		var pageh = 0;
		if (window.innerHeight && window.scrollMaxY) { pageh = window.innerHeight + window.scrollMaxY; }
		else if (document.body.scrollHeight > document.body.offsetHeight ) { pageh = document.body.scrollHeight; }
		else { pageh = document.body.offsetHeight + document.body.offsetTop; }

		var winh = 0;
		if (window.innerHeight) { winh = window.innerHeight; }
		else if (document.documentElement.clientHeight) { winh = document.documentElement.clientHeight; } 
		else { pageh = document.body.clientHeight; }

		return pageh > winh ? pageh : winh;
	}

	function close() {
		if (overlay_div) { document.body.removeChild(overlay_div); }
		if (modal_div) { document.body.removeChild(modal_div); }
		overlay_div = modal_div = null;
		return false;
	}

	mjs.modal_close = close;

	mjs.modal_open = function (html) {
		overlay_div = document.createElement('DIV');
		overlay_div.style.cssText = "position: absolute; top: 0%; left: 0%; width: 100%; height: "+_height()+"px; background-color: black; z-index:1001; -moz-opacity: 0.8; opacity:.80; filter: alpha(opacity=80);";
		document.body.appendChild(overlay_div);
	
		modal_div = document.createElement('DIV');
		modal_div.style.cssText = "position: absolute; top: 25%; left: 25%; width: 50%; height: 50%; padding: 0px; border: 2px solid #666; background-color: #fff; z-index:1002; overflow: auto; padding: 12px 2px 2px 2px;";
		modal_div.innerHTML = html;
		document.body.appendChild(modal_div);
	
		var a = document.createElement('A');
		a.innerHTML = 'X';
		a.setAttribute('href', '#');
		a.style.cssText = 'display:block; color: #000; background:#ccc; text-decoration: none; font-size: 12px; height: 12px; padding: 0px 1px 0px 2px; border: 1px solid #000';
		a.onclick = close;
	
		var x = document.createElement('DIV');
		x.appendChild(a);
		x.style.cssText = "position: absolute; right: 1px; top: 1px;";
		modal_div.appendChild(x);
	
		window.scrollTo(0,0);
		return false;
	};

	return mjs;
})(<%= MINIMALJS_OBJECT %>);
