'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ('value' in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
})();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError('Cannot call a class as a function');
	}
}

var Link = (function() {
	function Link() {
		_classCallCheck(this, Link);

		this.link = document.createElement('a');
	}

	_createClass(Link, [
		{
			key: 'setPath',
			value: function setPath(href) {
				this.link.href = href;
			}
		},
		{
			key: 'getPath',
			value: function getPath() {
				var path = this.link.pathname;
				if (path[0] !== '/') {
					path = '/' + path;
				}
				return path;
			}
		},
		{
			key: 'getAddress',
			value: function getAddress() {
				var path = this.link.pathname + this.link.search;
				if (path[0] !== '/') {
					path = '/' + path;
				}
				return path;
			}
		},
		{
			key: 'getHash',
			value: function getHash() {
				return this.link.hash;
			}
		}
	]);

	return Link;
})();

exports.default = Link;
