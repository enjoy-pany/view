!function(r){var t={};function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=t,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(r,t,function(e){return n[e]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="./",o(o.s="./src/OverScene.js")}({"./src/OverScene.js":
/*!**************************!*\
  !*** ./src/OverScene.js ***!
  \**************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\n(function (ns) {\n\n    var OverScene = ns.OverScene = Hilo.Class.create({\n        Extends: Hilo.Container,\n        constructor: function constructor(properties) {\n            OverScene.superclass.constructor.call(this, properties);\n            this.init(properties);\n        },\n\n        init: function init(properties) {\n            var gameover = new Hilo.Bitmap({\n                id: 'gameover',\n                image: properties.image,\n                rect: [0, 298, 508, 158]\n            });\n\n            gameover.x = this.width - gameover.width >> 1;\n            gameover.y = gameover.height - 20;\n\n            this.addChild(gameover);\n        },\n\n        show: function show(score, bestScore) {\n            this.visible = true;\n            Hilo.Tween.to(this.getChildById('gameover'), { alpha: 1 }, { duration: 100 });\n        },\n\n        hide: function hide() {\n            this.visible = false;\n            this.getChildById('gameover').alpha = 0;\n        }\n    });\n})(window.game);\n\n//# sourceURL=webpack:///./src/OverScene.js?")}});