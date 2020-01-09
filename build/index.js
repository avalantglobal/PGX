"use strict";function asyncGeneratorStep(e,t,a,n,o,r,i){try{var l=e[r](i),d=l.value}catch(e){return void a(e)}l.done?t(d):Promise.resolve(d).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise(function(n,o){function r(e){asyncGeneratorStep(l,n,o,r,i,"next",e)}function i(e){asyncGeneratorStep(l,n,o,r,i,"throw",e)}var l=e.apply(t,a);r(void 0)})}}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(e){function a(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof t){if(t.has(e))return t.get(e);t.set(e,a)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(a,e)},_wrapNativeSuper(e)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var a=Function.bind.apply(e,o),r=new a;return n&&_setPrototypeOf(r,n.prototype),r},_construct.apply(null,arguments)}function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function _possibleConstructorReturn(e,t){return t&&("object"===_typeof(t)||"function"==typeof t)?t:_assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,a){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var n=_superPropBase(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(a):o.value}},_get(e,t,a||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=_getPrototypeOf(e),null!==e););return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}}function _defineProperties(e,t){for(var a=0,n;a<t.length;a++)n=t[a],n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}(function(){'use strict';/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ /* global Reflect, Promise */var G=Math.ceil,Z=Math.max,$=Math.floor;function e(e,t){function a(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}function t(e,t,a,n){var o=arguments.length,l=3>o?t:null===n?n=Object.getOwnPropertyDescriptor(t,a):n,s;if("object"===("undefined"==typeof Reflect?"undefined":_typeof(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,n);else for(var p=e.length-1;0<=p;p--)(s=e[p])&&(l=(3>o?s(l):3<o?s(t,a,l):s(t,a))||l);return 3<o&&l&&Object.defineProperty(t,a,l),l}function a(e,t,a,n){return new(a||(a=Promise))(function(o,r){function i(e){try{d(n.next(e))}catch(t){r(t)}}function l(e){try{d(n["throw"](e))}catch(t){r(t)}}function d(e){e.done?o(e.value):new a(function(t){t(e.value)}).then(i,l)}d((n=n.apply(e,t||[])).next())})}function n(e,a){function n(e){return function(t){return o([e,t])}}function o(t){if(i)throw new TypeError("Generator is already executing.");for(;r;)try{if(i=1,l&&(d=2&t[0]?l["return"]:t[0]?l["throw"]||((d=l["return"])&&d.call(l),0):l.next)&&!(d=d.call(l,t[1])).done)return d;switch((l=0,d)&&(t=[2&t[0],d.value]),t[0]){case 0:case 1:d=t;break;case 4:return r.label++,{value:t[1],done:!1};case 5:r.label++,l=t[1],t=[0];continue;case 7:t=r.ops.pop(),r.trys.pop();continue;default:if((d=r.trys,!(d=0<d.length&&d[d.length-1]))&&(6===t[0]||2===t[0])){r=0;continue}if(3===t[0]&&(!d||t[1]>d[0]&&t[1]<d[3])){r.label=t[1];break}if(6===t[0]&&r.label<d[1]){r.label=d[1],d=t;break}if(d&&r.label<d[2]){r.label=d[2],r.ops.push(t);break}d[2]&&r.ops.pop(),r.trys.pop();continue;}t=a.call(e,r)}catch(a){t=[6,a],l=0}finally{i=d=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}var r={label:0,sent:function sent(){if(1&d[0])throw d[1];return d[1]},trys:[],ops:[]},i,l,d,s;return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s}function r(e){var t="function"==typeof Symbol&&e[Symbol.iterator],a=0;return t?t.call(e):{next:function next(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}}}function l(e){function t(t){l[t]=e[t]&&function(n){return new Promise(function(o,r){n=e[t](n),a(o,r,n.done,n.value)})}}function a(e,t,a,n){Promise.resolve(n).then(function(t){e({value:t,done:a})},t)}if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],l;return n?n.call(e):(e="function"==typeof r?r(e):e[Symbol.iterator](),l={},t("next"),t("throw"),t("return"),l[Symbol.asyncIterator]=function(){return this},l)}function d(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */ /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */ /**
     * The default TemplateFactory which caches Templates keyed on
     * result.type and result.strings.
     */function s(e){var t=Be.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Be.set(e.type,t));var a=t.stringsArray.get(e.strings);if(void 0!==a)return a;// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
var n=e.strings.join(de);// Check if we already have a Template for this key
return a=t.keyString.get(n),void 0===a&&(a=new ue(e,e.getTemplateElement()),t.keyString.set(n,a)),t.stringsArray.set(e.strings,a),a}/**
     * Removes the list of nodes from a Template safely. In addition to removing
     * nodes from the Template, the Template part indices are updated to match
     * the mutated Template DOM.
     *
     * As the template is walked the removal state is tracked and
     * part indices are adjusted as needed.
     *
     * div
     *   div#1 (remove) <-- start removing (removing node is div#1)
     *     div
     *       div#2 (remove)  <-- continue removing (removing node is still div#1)
     *         div
     * div <-- stop removing since previous sibling is the removing node (div#1,
     * removed 4 nodes)
     */function p(e,t){for(var a=e.element.content,n=e.parts,o=document.createTreeWalker(a,133,null,!1),r=Me(n),i=n[r],l=-1,d=0,s=[],p=null;o.nextNode();){l++;var c=o.currentNode;// End removal if stepped past the removing node
for(c.previousSibling===p&&(p=null),t.has(c)&&(s.push(c),null===p&&(p=c)),null!==p&&d++;i!==void 0&&i.index===l;)// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
// go to the next active part.
i.index=null===p?i.index-d:-1,r=Me(n,r),i=n[r]}s.forEach(function(e){return e.parentNode.removeChild(e)})}/**
     * Inserts the given node into the Template, optionally before the given
     * refNode. In addition to inserting the node into the Template, the Template
     * part indices are updated to match the mutated Template DOM.
     */function c(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,n=e.element.content,o=e.parts;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(null===a||void 0===a)return void n.appendChild(t);for(var r=document.createTreeWalker(n,133,null,!1),i=Me(o),l=0,d=-1;r.nextNode();){d++;var s=r.currentNode;for(s===a&&(l=He(t),a.parentNode.insertBefore(t,a));-1!==i&&o[i].index===d;){// If we've inserted the node, simply adjust all subsequent parts
if(0<l){for(;-1!==i;)o[i].index+=l,i=Me(o,i);return}i=Me(o,i)}}}/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */ // Get a key to lookup in `templateCaches`.
/**
     * A property decorator which creates a LitElement property which reflects a
     * corresponding attribute value. A `PropertyDeclaration` may optionally be
     * supplied to configure property features.
     *
     * @ExportDecoratedItems
     */function u(e){// tslint:disable-next-line:no-any decorator
return function(t,a){return a===void 0?nt(e,t):ot(e,t,a)}}/**
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
    */ /**
     * Minimal implementation of Array.prototype.flat
     * @param arr the array to flatten
     * @param result the accumlated result
     */function g(e){for(var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],a=0,n=e.length,o;a<n;a++)o=e[a],Array.isArray(o)?g(o,t):t.push(o);return t}/** Deeply flattens styles array. Uses native flat if available. */function f(e,t,a){return f.TYPED_ARRAY_SUPPORT||this instanceof f?"number"==typeof e?A(this,e):S(this,e,t,a):new f(e,t,a)}function h(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=ft)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ft.toString(16)+" bytes");return 0|e}function m(e){return e!==e;// eslint-disable-line no-self-compare
}function y(e,t){var a;return f.TYPED_ARRAY_SUPPORT?(a=new Uint8Array(t),a.__proto__=f.prototype):(a=e,null===a&&(a=new f(t)),a.length=t),a}function A(e,t){var a=y(e,0>t?0:0|h(t));if(!f.TYPED_ARRAY_SUPPORT)for(var n=0;n<t;++n)a[n]=0;return a}function b(e,t){var a=0|k(t),n=y(e,a),o=n.write(t);return o!==a&&(n=n.slice(0,o)),n}function x(e,t){for(var a=0>t.length?0:0|h(t.length),n=y(e,a),o=0;o<a;o+=1)n[o]=255&t[o];return n}function v(e,t,a,n){if(0>a||t.byteLength<a)throw new RangeError("'offset' is out of bounds");if(t.byteLength<a+(n||0))throw new RangeError("'length' is out of bounds");var o;return o=void 0===a&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,a):new Uint8Array(t,a,n),f.TYPED_ARRAY_SUPPORT?o.__proto__=f.prototype:o=x(e,o),o}function w(e,t){if(f.isBuffer(t)){var a=0|h(t.length),n=y(e,a);return 0===n.length?n:(t.copy(n,0,0,a),n)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||m(t.length)?y(e,0):x(e,t);if("Buffer"===t.type&&Array.isArray(t.data))return x(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function C(e,t){t=t||1/0;for(var a=e.length,n=null,o=[],r=0,l;r<a;++r){// is surrogate component
if(l=e.charCodeAt(r),55295<l&&57344>l){// last char was a lead
if(!n){// no lead yet
if(56319<l){-1<(t-=3)&&o.push(239,191,189);continue}else if(r+1===a){-1<(t-=3)&&o.push(239,191,189);continue}// valid lead
n=l;continue}// 2 leads in a row
if(56320>l){-1<(t-=3)&&o.push(239,191,189),n=l;continue}// valid surrogate pair
l=(n-55296<<10|l-56320)+65536}else n&&-1<(t-=3)&&o.push(239,191,189);// encode utf8
if(n=null,128>l){if(0>(t-=1))break;o.push(l)}else if(2048>l){if(0>(t-=2))break;o.push(192|l>>6,128|63&l)}else if(65536>l){if(0>(t-=3))break;o.push(224|l>>12,128|63&l>>6,128|63&l)}else if(1114112>l){if(0>(t-=4))break;o.push(240|l>>18,128|63&l>>12,128|63&l>>6,128|63&l)}else throw new Error("Invalid code point")}return o}function k(e){if(f.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var t=e.length;return 0===t?0:C(e).length}function T(e,t,a,n){for(var o=0;o<n&&!(o+a>=t.length||o>=e.length);++o)t[o+a]=e[o];return o}function _(e,t,a,n){return T(C(t,e.length-a),e,a,n)}function S(e,t,a,n){if("number"==typeof t)throw new TypeError("\"value\" argument must not be a number");return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?v(e,t,a,n):"string"==typeof t?b(e,t):w(e,t)}function D(e,t){return t={exports:{}},e(t,t.exports),t.exports}function N(){this.buffer=[],this.length=0}/**
     * Helper class to handle QR Code symbol modules
     *
     * @param {Number} size Symbol size
     */function P(e){if(!e||1>e)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new ht(e*e),this.data.fill(0),this.reservedBit=new ht(e*e),this.reservedBit.fill(0)}/**
     * Set bit value at specified location
     * If reserved flag is set, this bit will be ignored during masking process
     *
     * @param {Number}  row
     * @param {Number}  col
     * @param {Boolean} value
     * @param {Boolean} reserved
     */function E(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}/**
     * Initialize the encoder.
     * The input param should correspond to the number of error correction codewords.
     *
     * @param  {Number} degree
     */function I(e){this.mode=ya.NUMERIC,this.data=e.toString()}function B(e){this.mode=ya.ALPHANUMERIC,this.data=e}function L(e){this.mode=ya.BYTE,this.data=new ht(e)}function j(e){this.mode=ya.KANJI,this.data=e}/**
     * QRCode for JavaScript
     *
     * modified by Ryan Day for nodejs support
     * Copyright (c) 2011 Ryan Day
     *
     * Licensed under the MIT license:
     *   http://www.opensource.org/licenses/mit-license.php
     *
    //---------------------------------------------------------------------
    // QRCode for JavaScript
    //
    // Copyright (c) 2009 Kazuhiko Arase
    //
    // URL: http://www.d-project.com/
    //
    // Licensed under the MIT license:
    //   http://www.opensource.org/licenses/mit-license.php
    //
    // The word "QR Code" is registered trademark of
    // DENSO WAVE INCORPORATED
    //   http://www.denso-wave.com/qrcode/faqpatent-e.html
    //
    //---------------------------------------------------------------------
    */ /**
     * Add finder patterns bits to matrix
     *
     * @param  {BitMatrix} matrix  Modules matrix
     * @param  {Number}    version QR Code version
     */function R(e,t){for(var a=e.size,n=Lt.getPositions(t),o=0;o<n.length;o++)for(var l=n[o][0],d=n[o][1],s=-1;7>=s;s++)if(!(-1>=l+s||a<=l+s))for(var p=-1;7>=p;p++)-1>=d+p||a<=d+p||(0<=s&&6>=s&&(0===p||6===p)||0<=p&&6>=p&&(0===s||6===s)||2<=s&&4>=s&&2<=p&&4>=p?e.set(l+s,d+p,!0,!0):e.set(l+s,d+p,!1,!0))}/**
     * Add timing pattern bits to matrix
     *
     * Note: this function must be called before {@link setupAlignmentPattern}
     *
     * @param  {BitMatrix} matrix Modules matrix
     */function H(e){for(var t=e.size,a=8,n;a<t-8;a++)n=0==a%2,e.set(a,6,n,!0),e.set(6,a,n,!0)}/**
     * Add alignment patterns bits to matrix
     *
     * Note: this function must be called after {@link setupTimingPattern}
     *
     * @param  {BitMatrix} matrix  Modules matrix
     * @param  {Number}    version QR Code version
     */function M(e,t){for(var a=Nt.getPositions(t),n=0;n<a.length;n++)for(var o=a[n][0],l=a[n][1],d=-2;2>=d;d++)for(var s=-2;2>=s;s++)-2===d||2===d||-2===s||2===s||0===d&&0===s?e.set(o+d,l+s,!0,!0):e.set(o+d,l+s,!1,!0)}/**
     * Add version info bits to matrix
     *
     * @param  {BitMatrix} matrix  Modules matrix
     * @param  {Number}    version QR Code version
     */function q(e,t){for(var a=e.size,n=Sa.getEncodedBits(t),o=0,r,l,d;18>o;o++)r=$(o/3),l=o%3+a-8-3,d=1==(1&n>>o),e.set(r,l,d,!0),e.set(l,r,d,!0)}/**
     * Add format info bits to matrix
     *
     * @param  {BitMatrix} matrix               Modules matrix
     * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
     * @param  {Number}    maskPattern          Mask pattern reference value
     */function O(e,t,a){var n=e.size,o=Ba.getEncodedBits(t,a),r,l;for(r=0;15>r;r++)l=1==(1&o>>r),6>r?e.set(r,8,l,!0):8>r?e.set(r+1,8,l,!0):e.set(n-15+r,8,l,!0),8>r?e.set(8,n-r-1,l,!0):9>r?e.set(8,15-r-1+1,l,!0):e.set(8,15-r-1,l,!0);// fixed module
e.set(n-8,8,1,!0)}/**
     * Add encoded data bits to matrix
     *
     * @param  {BitMatrix} matrix Modules matrix
     * @param  {Buffer}    data   Data codewords
     */function U(e,t){for(var a=e.size,n=-1,o=a-1,r=7,i=0,l=a-1;0<l;l-=2)for(6==l&&l--;;){for(var d=0;2>d;d++)if(!e.isReserved(o,l-d)){var s=!1;i<t.length&&(s=1==(1&t[i]>>>r)),e.set(o,l-d,s),r--,-1===r&&(i++,r=7)}if(o+=n,0>o||a<=o){o-=n,n=-n;break}}}/**
     * Create encoded codewords from data input
     *
     * @param  {Number}   version              QR Code version
     * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
     * @param  {ByteData} data                 Data input
     * @return {Buffer}                        Buffer containing encoded codewords
     */function F(e,t,a){// Prepare data buffer
var n=new St;a.forEach(function(t){// prefix data with mode indicator (4 bits)
// Prefix data with character count indicator.
// The character count indicator is a string of bits that represents the
// number of characters that are being encoded.
// The character count indicator must be placed after the mode indicator
// and must be a certain number of bits long, depending on the QR version
// and data mode
// @see {@link Mode.getCharCountIndicator}.
// add binary data sequence to buffer
n.put(t.mode.bit,4),n.put(t.getLength(),ya.getCharCountIndicator(t.mode,e)),t.write(n)});// Calculate required number of bits
var o=bt.getSymbolTotalCodewords(e),r=Yt.getTotalCodewordsCount(e,t),l=8*(o-r);// If the bit string is fewer than four bits shorter, add only the number of 0s that
// are needed to reach the required number of bits.
// After adding the terminator, if the number of bits in the string is not a multiple of 8,
// pad the string on the right with 0s to make the string's length a multiple of 8.
for(n.getLengthInBits()+4<=l&&n.put(0,4);0!=n.getLengthInBits()%8;)n.putBit(0);// Add pad bytes if the string is still shorter than the total number of required bits.
// Extend the buffer to fill the data capacity of the symbol corresponding to
// the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
// and 00010001 (0x11) alternately.
for(var d=(l-n.getLengthInBits())/8,s=0;s<d;s++)n.put(s%2?17:236,8);return V(n,e,t)}/**
     * Encode input data with Reed-Solomon and return codewords with
     * relative error correction bits
     *
     * @param  {BitBuffer} bitBuffer            Data to encode
     * @param  {Number}    version              QR Code version
     * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
     * @return {Buffer}                         Buffer containing encoded codewords
     */function V(e,t,a){// Total codewords for this QR code version (Data + Error correction)
// Divide the buffer into the required number of blocks
for(var n=bt.getSymbolTotalCodewords(t),o=Yt.getTotalCodewordsCount(t,a),l=Yt.getBlocksCount(t,a),d=$(n/l),s=$((n-o)/l),p=d-s,c=new na(p),u=0,g=Array(l),f=Array(l),h=0,m=new ht(e.buffer),y=0,A;y<l;y++)// extract a block of data from buffer
// Calculate EC codewords for this data block
A=y<l-n%l?s:s+1,g[y]=m.slice(u,u+A),f[y]=c.encode(g[y]),u+=A,h=Z(h,A);// Create final data
// Interleave the data and error correction codewords from each block
var x=new ht(n),v=0,w,C;// Add data codewords
for(w=0;w<h;w++)for(C=0;C<l;C++)w<g[C].length&&(x[v++]=g[C][w]);// Apped EC codewords
for(w=0;w<p;w++)for(C=0;C<l;C++)x[v++]=f[C][w];return x}/**
     * Build QR Code symbol
     *
     * @param  {String} data                 Input string
     * @param  {Number} version              QR Code version
     * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
     * @param  {MaskPattern} maskPattern     Mask pattern
     * @return {Object}                      Object containing symbol data
     */function z(e,t,a,n){var o;if(gt(e))o=Oa.fromArray(e);else if("string"==typeof e){var r=t;if(!r){var i=Oa.rawSplit(e);// Estimate best version that can contain raw splitted segments
r=Sa.getBestVersionForData(i,a)}// Build optimized segments
// If estimated version is undefined, try with the highest version
o=Oa.fromString(e,r||40)}else throw new Error("Invalid data");// Get the min version that can contain data
var l=Sa.getBestVersionForData(o,a);// If no version is found, data cannot be stored
if(!l)throw new Error("The amount of data is too big to be stored in a QR Code");// If not specified, use min version as default
if(!t)t=l;else if(t<l)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+l+".\n");var d=F(t,a,o),s=bt.getSymbolSize(t),p=new Dt(s);// Allocate matrix buffer
return R(p,t),H(p),M(p,t),O(p,a,0),7<=t&&q(p,t),U(p,d),isNaN(n)&&(n=jt.getBestMask(p,O.bind(null,p,a))),jt.applyMask(n,p),O(p,a,n),{modules:p,version:t,errorCorrectionLevel:a,maskPattern:n,segments:o}}/**
     * QR Code
     *
     * @param {String | Array} data                 Input data
     * @param {Object} options                      Optional configurations
     * @param {Number} options.version              QR Code version
     * @param {String} options.errorCorrectionLevel Error correction level
     * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
     */function W(e,t){var a=e.a/255,n=t+"=\""+e.hex+"\"";return 1>a?n+" "+t+"-opacity=\""+a.toFixed(2).slice(1)+"\"":n}function Y(e,t,a){var n=e+t;return"undefined"!=typeof a&&(n+=" "+a),n}function Q(e,t,a){for(var n="",o=0,r=!1,l=0,d=0;d<e.length;d++){var s=$(d%t),p=$(d/t);s||r||(r=!0),e[d]?(l++,!(0<d&&0<s&&e[d-1])&&(n+=r?Y("M",s+a,.5+p+a):Y("m",o,0),o=0,r=!1),!(s+1<t&&e[d+1])&&(n+=Y("h",l),l=0)):o++}return n}function K(e,t,a,n,o){var r=[].slice.call(arguments,1),i=r.length,l="function"==typeof r[i-1];if(!l&&!ct())throw new Error("Callback required as last argument");if(l){if(2>i)throw new Error("Too few arguments provided");2===i?(o=a,a=t,t=n=void 0):3===i&&(t.getContext&&"undefined"==typeof o?(o=n,n=void 0):(o=n,n=a,a=t,t=void 0))}else{if(1>i)throw new Error("Too few arguments provided");return 1===i?(a=t,t=n=void 0):2===i&&!t.getContext&&(n=a,a=t,t=void 0),new Promise(function(o,r){try{var i=za.create(a,n);o(e(i,t,n))}catch(t){r(t)}})}try{var d=za.create(a,n);o(null,e(d,t,n))}catch(t){o(t)}}function X(e){return"function"==typeof e}function J(e){return"string"==typeof e}/**
     *
     * render
     * change logs:
     * 2018/2/28 herbluo created
     */var ee=function extendStatics(e,t){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])},ee(e,t)},te=function __assign(){return te=Object.assign||function(e){for(var t=1,a=arguments.length,n;t<a;t++)for(var o in n=arguments[t],n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},te.apply(this,arguments)},ae=new WeakMap,ne=function(e){return"function"==typeof e&&ae.has(e)},oe=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0,re=function(e,t){for(var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;t!==a;){var o=t.nextSibling;e.removeChild(t),t=o}},ie={},le={},de="{{lit-".concat((Math.random()+"").slice(2),"}}"),se="<!--".concat(de,"-->"),pe=new RegExp("".concat(de,"|").concat(se)),ce="$lit$",ue=function e(t,a){_classCallCheck(this,e),this.parts=[],this.element=a;for(var o=[],r=[],l=document.createTreeWalker(a.content,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1),d=0,p=-1,c=0,u=t.strings,g=t.values.length,f;c<g;){if(f=l.nextNode(),null===f){l.currentNode=r.pop();continue}if(p++,1===f.nodeType/* Node.ELEMENT_NODE */){if(f.hasAttributes()){for(var h=f.attributes,m=h.length,y=0,A=0;A<m;A++)ge(h[A].name,ce)&&y++;for(;0<y--;){// Get the template literal section leading up to the first
// expression in this attribute
var b=u[c],x=me.exec(b)[2],v=x.toLowerCase()+ce,w=f.getAttribute(v);// Find the attribute name
f.removeAttribute(v);var I=w.split(pe);this.parts.push({type:"attribute",index:p,name:x,strings:I}),c+=I.length-1}}"TEMPLATE"===f.tagName&&(r.push(f),l.currentNode=f.content)}else if(3===f.nodeType/* Node.TEXT_NODE */){var B=f.data;if(0<=B.indexOf(de)){// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(var C=f.parentNode,k=B.split(pe),T=k.length-1,_=0;_<T;_++){var S=void 0,D=k[_];if(""===D)S=he();else{var L=me.exec(D);null!==L&&ge(L[2],ce)&&(D=D.slice(0,L.index)+L[1]+L[2].slice(0,-ce.length)+L[3]),S=document.createTextNode(D)}C.insertBefore(S,f),this.parts.push({type:"node",index:++p})}// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
""===k[T]?(C.insertBefore(he(),f),o.push(f)):f.data=k[T],c+=T}}else if(8===f.nodeType/* Node.COMMENT_NODE */)if(f.data===de){var j=f.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
(null===f.previousSibling||p===d)&&(p++,j.insertBefore(he(),f)),d=p,this.parts.push({type:"node",index:p}),null===f.nextSibling?f.data="":(o.push(f),p--),c++}else for(var R=-1;-1!==(R=f.data.indexOf(de,R+1));)// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
this.parts.push({type:"node",index:-1}),c++}// Remove text binding nodes after the walk to not disturb the TreeWalker
for(var N=0,P=o,E;N<P.length;N++)E=P[N],E.parentNode.removeChild(E)},ge=function(e,t){var a=e.length-t.length;return 0<=a&&e.slice(a)===t},fe=function(e){return-1!==e.index},he=function(){return document.createComment("")},me=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,ye=/*#__PURE__*/function(){function e(t,a,n){_classCallCheck(this,e),this.__parts=[],this.template=t,this.processor=a,this.options=n}return _createClass(e,[{key:"update",value:function update(e){var t=0,a=!0,n=!1,o=void 0;try{for(var r=this.__parts[Symbol.iterator](),l,d;!(a=(l=r.next()).done);a=!0)d=l.value,void 0!==d&&d.setValue(e[t]),t++}catch(e){n=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(n)throw o}}var s=!0,p=!1,c=void 0;try{for(var u=this.__parts[Symbol.iterator](),g,f;!(s=(g=u.next()).done);s=!0)f=g.value,void 0!==f&&f.commit()}catch(e){p=!0,c=e}finally{try{s||null==u.return||u.return()}finally{if(p)throw c}}}},{key:"_clone",value:function _clone(){// There are a number of steps in the lifecycle of a template instance's
// DOM fragment:
//  1. Clone - create the instance fragment
//  2. Adopt - adopt into the main document
//  3. Process - find part markers and create parts
//  4. Upgrade - upgrade custom elements
//  5. Update - set node, attribute, property, etc., values
//  6. Connect - connect to the document. Optional and outside of this
//     method.
//
// We have a few constraints on the ordering of these steps:
//  * We need to upgrade before updating, so that property values will pass
//    through any property setters.
//  * We would like to process before upgrading so that we're sure that the
//    cloned fragment is inert and not disturbed by self-modifying DOM.
//  * We want custom elements to upgrade even in disconnected fragments.
//
// Given these constraints, with full custom elements support we would
// prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
//
// But Safari dooes not implement CustomElementRegistry#upgrade, so we
// can not implement that order and still have upgrade-before-update and
// upgrade disconnected fragments. So we instead sacrifice the
// process-before-upgrade constraint, since in Custom Elements v1 elements
// must not modify their light DOM in the constructor. We still have issues
// when co-existing with CEv0 elements like Polymer 1, and with polyfills
// that don't strictly adhere to the no-modification rule because shadow
// DOM, which may be created in the constructor, is emulated by being placed
// in the light DOM.
//
// The resulting order is on native is: Clone, Adopt, Upgrade, Process,
// Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
// in one step.
//
// The Custom Elements v1 polyfill supports upgrade(), so the order when
// polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
// Connect.
// Loop through all the nodes and parts of a template
for(var e=oe?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],a=this.template.parts,n=document.createTreeWalker(e,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1),o=0,r=0,i=n.nextNode(),l;o<a.length;){if(l=a[o],!fe(l)){this.__parts.push(void 0),o++;continue}// Progress the tree walker until we find our next part's node.
// Note that multiple parts may share the same node (attribute parts
// on a single element), so this loop may not run at all.
for(;r<l.index;)r++,"TEMPLATE"===i.nodeName&&(t.push(i),n.currentNode=i.content),null===(i=n.nextNode())&&(n.currentNode=t.pop(),i=n.nextNode());// We've arrived at our part's node.
if("node"===l.type){var s=this.processor.handleTextExpression(this.options);s.insertAfterNode(i.previousSibling),this.__parts.push(s)}else{var d;(d=this.__parts).push.apply(d,_toConsumableArray(this.processor.handleAttributeExpressions(i,l.name,l.strings,this.options)))}o++}return oe&&(document.adoptNode(e),customElements.upgrade(e)),e}}]),e}(),Ae=" ".concat(de," "),be=/*#__PURE__*/function(){function e(t,a,n,o){_classCallCheck(this,e),this.strings=t,this.values=a,this.type=n,this.processor=o}/**
         * Returns a string of HTML used to create a `<template>` element.
         */return _createClass(e,[{key:"getHTML",value:function getHTML(){for(var e=this.strings.length-1,t="",a=!1,n=0;n<e;n++){var o=this.strings[n],r=o.lastIndexOf("<!--");// For each binding we want to determine the kind of marker to insert
// into the template source before it's parsed by the browser's HTML
// parser. The marker type is based on whether the expression is in an
// attribute, text, or comment poisition.
//   * For node-position bindings we insert a comment with the marker
//     sentinel as its text content, like <!--{{lit-guid}}-->.
//   * For attribute bindings we insert just the marker sentinel for the
//     first binding, so that we support unquoted attribute bindings.
//     Subsequent bindings can use a comment marker because multi-binding
//     attributes must be quoted.
//   * For comment bindings we insert just the marker sentinel so we don't
//     close the comment.
//
// The following code scans the template source, but is *not* an HTML
// parser. We don't need to track the tree structure of the HTML, only
// whether a binding is inside a comment, and if not, if it appears to be
// the first binding in an attribute.
a=(-1<r||a)&&-1===o.indexOf("-->",r+1);// Check to see if we have an attribute-like sequence preceeding the
// expression. This can match "name=value" like structures in text,
// comments, and attribute values, so there can be false-positives.
var l=me.exec(o);t+=null===l?o+(a?Ae:se):o.substr(0,l.index)+l[1]+l[2]+ce+l[3]+de}return t+=this.strings[e],t}},{key:"getTemplateElement",value:function getTemplateElement(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}(),xe=function(e){return null===e||"object"!==_typeof(e)&&"function"!=typeof e},ve=function(e){return Array.isArray(e)||// tslint:disable-next-line:no-any
!!(e&&e[Symbol.iterator])},we=/*#__PURE__*/function(){function e(t,a,n){_classCallCheck(this,e),this.dirty=!0,this.element=t,this.name=a,this.strings=n,this.parts=[];for(var o=0;o<n.length-1;o++)this.parts[o]=this._createPart()}/**
         * Creates a single part. Override this to create a differnt type of part.
         */return _createClass(e,[{key:"_createPart",value:function _createPart(){return new Ce(this)}},{key:"_getValue",value:function _getValue(){for(var e=this.strings,a=e.length-1,n="",o=0;o<a;o++){n+=e[o];var u=this.parts[o];if(void 0!==u){var g=u.value;if(xe(g)||!ve(g))n+="string"==typeof g?g:g+"";else{var r=!0,l=!1,d=void 0;try{for(var s=g[Symbol.iterator](),p,c;!(r=(p=s.next()).done);r=!0)c=p.value,n+="string"==typeof c?c:c+""}catch(e){l=!0,d=e}finally{try{r||null==s.return||s.return()}finally{if(l)throw d}}}}}return n+=e[a],n}},{key:"commit",value:function commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),Ce=/*#__PURE__*/function(){function e(t){_classCallCheck(this,e),this.value=void 0,this.committer=t}return _createClass(e,[{key:"setValue",value:function setValue(e){e===ie||xe(e)&&e===this.value||(this.value=e,!ne(e)&&(this.committer.dirty=!0))}},{key:"commit",value:function commit(){for(;ne(this.value);){var e=this.value;this.value=ie,e(this)}this.value===ie||this.committer.commit()}}]),e}(),ke=/*#__PURE__*/function(){function e(t){_classCallCheck(this,e),this.value=void 0,this.__pendingValue=void 0,this.options=t}/**
         * Appends this part into a container.
         *
         * This part must be empty, as its contents are not automatically moved.
         */return _createClass(e,[{key:"appendInto",value:function appendInto(e){this.startNode=e.appendChild(he()),this.endNode=e.appendChild(he())}/**
         * Inserts this part after the `ref` node (between `ref` and `ref`'s next
         * sibling). Both `ref` and its next sibling must be static, unchanging nodes
         * such as those that appear in a literal section of a template.
         *
         * This part must be empty, as its contents are not automatically moved.
         */},{key:"insertAfterNode",value:function insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}/**
         * Appends this part into a parent part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */},{key:"appendIntoPart",value:function appendIntoPart(e){e.__insert(this.startNode=he()),e.__insert(this.endNode=he())}/**
         * Inserts this part after the `ref` part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */},{key:"insertAfterPart",value:function insertAfterPart(e){e.__insert(this.startNode=he()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function setValue(e){this.__pendingValue=e}},{key:"commit",value:function commit(){for(;ne(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=ie,t(this)}var e=this.__pendingValue;e===ie||(xe(e)?e!==this.value&&this.__commitText(e):e instanceof be?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):ve(e)?this.__commitIterable(e):e===le?(this.value=le,this.clear()):this.__commitText(e))}},{key:"__insert",value:function __insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"__commitNode",value:function __commitNode(e){this.value===e||(this.clear(),this.__insert(e),this.value=e)}},{key:"__commitText",value:function __commitText(e){var t=this.startNode.nextSibling;e=null==e?"":e;// If `value` isn't already a string, we explicitly convert it here in case
// it can't be implicitly converted - i.e. it's a symbol.
var a="string"==typeof e?e:e+"";t===this.endNode.previousSibling&&3===t.nodeType/* Node.TEXT_NODE */?t.data=a:this.__commitNode(document.createTextNode(a)),this.value=e}},{key:"__commitTemplateResult",value:function __commitTemplateResult(e){var t=this.options.templateFactory(e);if(this.value instanceof ye&&this.value.template===t)this.value.update(e.values);else{// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
var a=new ye(t,e.processor,this.options),n=a._clone();a.update(e.values),this.__commitNode(n),this.value=a}}},{key:"__commitIterable",value:function __commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
var a=this.value,n=0,o=!0,r=!1,i=void 0,l;try{for(var d=t[Symbol.iterator](),s,p;!(o=(s=d.next()).done);o=!0)// Try to reuse an existing part
p=s.value,l=a[n],void 0===l&&(l=new e(this.options),a.push(l),0===n?l.appendIntoPart(this):l.insertAfterPart(a[n-1])),l.setValue(p),l.commit(),n++}catch(e){r=!0,i=e}finally{try{o||null==d.return||d.return()}finally{if(r)throw i}}n<a.length&&(a.length=n,this.clear(l&&l.endNode))}},{key:"clear",value:function clear(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.startNode;re(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),Te=/*#__PURE__*/function(){function e(t,a,n){if(_classCallCheck(this,e),this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=a,this.strings=n}return _createClass(e,[{key:"setValue",value:function setValue(e){this.__pendingValue=e}},{key:"commit",value:function commit(){for(;ne(this.__pendingValue);){var t=this.__pendingValue;this.__pendingValue=ie,t(this)}if(this.__pendingValue!==ie){var e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=ie}}}]),e}(),_e=/*#__PURE__*/function(e){function t(e,a,n){var o;return _classCallCheck(this,t),o=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,a,n)),o.single=2===n.length&&""===n[0]&&""===n[1],o}return _inherits(t,e),_createClass(t,[{key:"_createPart",value:function _createPart(){return new Se(this)}},{key:"_getValue",value:function _getValue(){return this.single?this.parts[0].value:_get(_getPrototypeOf(t.prototype),"_getValue",this).call(this)}},{key:"commit",value:function commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),t}(we),Se=/*#__PURE__*/function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),t}(Ce),De=!1;try{var Cn={get capture(){return De=!0,!1}};// tslint:disable-next-line:no-any
// tslint:disable-next-line:no-any
window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch(e){}var Ne=/*#__PURE__*/function(){function e(t,a,n){var o=this;_classCallCheck(this,e),this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=a,this.eventContext=n,this.__boundHandleEvent=function(t){return o.handleEvent(t)}}return _createClass(e,[{key:"setValue",value:function setValue(e){this.__pendingValue=e}},{key:"commit",value:function commit(){for(;ne(this.__pendingValue);){var n=this.__pendingValue;this.__pendingValue=ie,n(this)}if(this.__pendingValue!==ie){var e=this.__pendingValue,t=this.value,a=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),null!=e&&(null==t||a)&&(this.__options=Pe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=ie}}},{key:"handleEvent",value:function handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),Pe=function(e){return e&&(De?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},Ee=/*#__PURE__*/function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"handleAttributeExpressions",/**
         * Create parts for an attribute-position binding, given the event, attribute
         * name, and string literals.
         *
         * @param element The element containing the binding
         * @param name  The attribute name
         * @param strings The string literals. There are always at least two strings,
         *   event for fully-controlled bindings with a single expression.
         */value:function handleAttributeExpressions(e,t,a,n){var o=t[0];if("."===o){var i=new _e(e,t.slice(1),a);return i.parts}if("@"===o)return[new Ne(e,t.slice(1),n.eventContext)];if("?"===o)return[new Te(e,t.slice(1),a)];var r=new we(e,t,a);return r.parts}/**
         * Create parts for a text-position binding.
         * @param templateFactory
         */},{key:"handleTextExpression",value:function handleTextExpression(e){return new ke(e)}}]),e}(),Ie=new Ee,Be=new Map,Le=new WeakMap,je=function(e,t,a){var n=Le.get(t);n===void 0&&(re(t,t.firstChild),Le.set(t,n=new ke(Object.assign({templateFactory:s},a))),n.appendInto(t)),n.setValue(e),n.commit()};// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");/**
     * Interprets a template literal as an HTML template that can efficiently
     * render to and update a container.
     */var Re=function(e){for(var t=arguments.length,a=Array(1<t?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return new be(e,a,"html",Ie)},He=function(e){for(var t=11===e.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */?0:1,a=document.createTreeWalker(e,133,null,!1);a.nextNode();)t++;return t},Me=function(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,a=t+1,n;a<e.length;a++)if(n=e[a],fe(n))return a;return-1},qe=function(e,t){return"".concat(e,"--").concat(t)},Oe=!0;/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */"undefined"==typeof window.ShadyCSS?Oe=!1:"undefined"==typeof window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Oe=!1);/**
     * Template factory which scopes template DOM using ShadyCSS.
     * @param scopeName {string}
     */var Ue=function(e){return function(t){var a=qe(t.type,e),n=Be.get(a);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},Be.set(a,n));var o=n.stringsArray.get(t.strings);if(void 0!==o)return o;var r=t.strings.join(de);if(o=n.keyString.get(r),void 0===o){var i=t.getTemplateElement();Oe&&window.ShadyCSS.prepareTemplateDom(i,e),o=new ue(t,i),n.keyString.set(r,o)}return n.stringsArray.set(t.strings,o),o}},Fe=["html","svg"],Ve=function(e){Fe.forEach(function(t){var a=Be.get(qe(t,e));a!==void 0&&a.keyString.forEach(function(e){var t=e.element.content,a=new Set;// IE 11 doesn't support the iterable param Set constructor
Array.from(t.querySelectorAll("style")).forEach(function(e){a.add(e)}),p(e,a)})})},ze=new Set,We=function(e,t,a){ze.add(e);// If `renderedDOM` is stamped from a Template, then we need to edit that
// Template's underlying template element. Otherwise, we create one here
// to give to ShadyCSS, which still requires one while scoping.
var n=!a?document.createElement("template"):a.element,o=t.querySelectorAll("style"),r=o.length;// Move styles out of rendered DOM and store.
// If there are no styles, skip unnecessary work
if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,e);// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(var l=document.createElement("style"),d=0,s;d<r;d++)s=o[d],s.parentNode.removeChild(s),l.textContent+=s.textContent;// Remove styles from nested templates in this scope.
Ve(e);// And then put the condensed style into the "root" template passed in as
// `template`.
var u=n.content;!a?u.insertBefore(l,u.firstChild):c(a,l,u.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);var g=u.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==g)// When in native Shadow DOM, ensure the style created by ShadyCSS is
// included in initially rendered output (`renderedDOM`).
t.insertBefore(g.cloneNode(!0),t.firstChild);else if(!!a){u.insertBefore(l,u.firstChild);var f=new Set;f.add(l),p(a,f)}},Ye=function(e,t,a){if(!a||"object"!==_typeof(a)||!a.scopeName)throw new Error("The `scopeName` option is required.");var n=a.scopeName,o=Le.has(t),r=Oe&&11===t.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */&&!!t.host,i=r&&!ze.has(n),l=i?document.createDocumentFragment():t;// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(je(e,l,Object.assign({templateFactory:Ue(n)},a)),i){var d=Le.get(l);Le.delete(l);// ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
// that should apply to `renderContainer` even if the rendered value is
// not a TemplateInstance. However, it will only insert scoped styles
// into the document if `prepareTemplateStyles` has already been called
// for the given scope name.
var s=d.value instanceof ye?d.value.template:void 0;We(n,l,s),re(t,t.firstChild),t.appendChild(l),Le.set(t,d)}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSS.styleElement`
// for dynamic changes.
!o&&r&&window.ShadyCSS.styleElement(t.host)},Qe;window.JSCompiler_renameProperty=function(e){return e};var o={toAttribute:function toAttribute(e,t){return t===Boolean?e?"":null:t===Object||t===Array?null==e?e:JSON.stringify(e):e},fromAttribute:function fromAttribute(e,t){return t===Boolean?null!==e:t===Number?null===e?null:+e:t===Object||t===Array?JSON.parse(e):e}},i=function(e,t){// This ensures (old==NaN, value==NaN) always returns false
return t!==e&&(t===t||e===e)},Ke={attribute:!0,type:String,converter:o,reflect:!1,hasChanged:i},Xe=Promise.resolve(!0),Je=1,Ge=4,Ze=8,$e=16,et=32,tt="finalized",at=/*#__PURE__*/function(e){function t(){var e;return _classCallCheck(this,t),e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)),e._updateState=0,e._instanceProperties=void 0,e._updatePromise=Xe,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}/**
         * Returns a list of attributes corresponding to the registered properties.
         * @nocollapse
         */return _inherits(t,e),_createClass(t,[{key:"initialize",/**
         * Performs element initialization. By default captures any pre-set values for
         * registered properties.
         */value:function initialize(){this._saveInstanceProperties(),this._requestUpdate()}/**
         * Fixes any properties set on the instance before upgrade time.
         * Otherwise these would shadow the accessor and break these properties.
         * The properties are stored in a Map which is played back after the
         * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
         * (<=41), properties created for native platform properties like (`id` or
         * `name`) may not have default values set in the element constructor. On
         * these browsers native properties appear on instances and therefore their
         * default value will overwrite any element default (e.g. if the element sets
         * this.id = 'id' in the constructor, the 'id' will become '' since this is
         * the native platform default).
         */},{key:"_saveInstanceProperties",value:function _saveInstanceProperties(){var e=this;this.constructor._classProperties.forEach(function(t,a){if(e.hasOwnProperty(a)){var n=e[a];delete e[a],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(a,n)}})}/**
         * Applies previously saved instance properties.
         */},{key:"_applyInstanceProperties",value:function _applyInstanceProperties(){var e=this;this._instanceProperties.forEach(function(t,a){return e[a]=t}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function connectedCallback(){this._updateState|=et,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}/**
         * Allows for `super.disconnectedCallback()` in extensions while
         * reserving the possibility of making non-breaking feature additions
         * when disconnecting at some point in the future.
         */},{key:"disconnectedCallback",value:function disconnectedCallback(){}/**
         * Synchronizes property values when attributes change.
         */},{key:"attributeChangedCallback",value:function attributeChangedCallback(e,t,a){t!==a&&this._attributeToProperty(e,a)}},{key:"_propertyToAttribute",value:function _propertyToAttribute(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:Ke,n=this.constructor,o=n._attributeNameForProperty(e,a);if(void 0!==o){var r=n._propertyValueToAttribute(t,a);// an undefined value does not change the attribute.
if(void 0===r)return;// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState|=Ze,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._updateState&=~Ze}}},{key:"_attributeToProperty",value:function _attributeToProperty(e,t){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(!(this._updateState&Ze)){var a=this.constructor,n=a._attributeToPropertyMap.get(e);if(void 0!==n){var o=a._classProperties.get(n)||Ke;// mark state reflecting
this._updateState|=$e,this[n]=// tslint:disable-next-line:no-any
a._propertyValueFromAttribute(t,o),this._updateState&=~$e}}}/**
         * This private version of `requestUpdate` does not access or return the
         * `updateComplete` promise. This promise can be overridden and is therefore
         * not free to access.
         */},{key:"_requestUpdate",value:function _requestUpdate(e,t){var a=!0;// If we have a property key, perform property update steps.
if(void 0!==e){var n=this.constructor,o=n._classProperties.get(e)||Ke;n._valueHasChanged(this[e],t,o.hasChanged)?(!this._changedProperties.has(e)&&this._changedProperties.set(e,t),!0===o.reflect&&!(this._updateState&$e)&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):a=!1}!this._hasRequestedUpdate&&a&&this._enqueueUpdate()}/**
         * Requests an update which is processed asynchronously. This should
         * be called when an element should update based on some state not triggered
         * by setting a property. In this case, pass no arguments. It should also be
         * called when manually implementing a property setter. In this case, pass the
         * property `name` and `oldValue` to ensure that any configured property
         * options are honored. Returns the `updateComplete` Promise which is resolved
         * when the update completes.
         *
         * @param name {PropertyKey} (optional) name of requesting property
         * @param oldValue {any} (optional) old value of requesting property
         * @returns {Promise} A Promise that is resolved when the update completes.
         */},{key:"requestUpdate",value:function requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}/**
         * Sets up the element to asynchronously update.
         */},{key:"_enqueueUpdate",value:function(){var e=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t=this,a,n,o,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState|=Ge,o=this._updatePromise,this._updatePromise=new Promise(function(e,t){a=e,n=t}),e.prev=3,e.next=6,o;case 6:e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](3);case 10:if(this._hasConnected){e.next=13;break}return e.next=13,new Promise(function(e){return t._hasConnectedResolver=e});case 13:if(e.prev=13,r=this.performUpdate(),null==r){e.next=18;break}return e.next=18,r;case 18:e.next=23;break;case 20:e.prev=20,e.t1=e["catch"](13),n(e.t1);case 23:a(!this._hasRequestedUpdate);case 24:case"end":return e.stop();}},e,this,[[3,8],[13,20]])}));return function _enqueueUpdate(){return e.apply(this,arguments)}}()},{key:"performUpdate",/**
         * Performs an element update. Note, if an exception is thrown during the
         * update, `firstUpdated` and `updated` will not be called.
         *
         * You can override this method to change the timing of updates. If this
         * method is overridden, `super.performUpdate()` must be called.
         *
         * For instance, to schedule updates to occur just before the next frame:
         *
         * ```
         * protected async performUpdate(): Promise<unknown> {
         *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
         *   super.performUpdate();
         * }
         * ```
         */value:function performUpdate(){this._instanceProperties&&this._applyInstanceProperties();var t=!1,a=this._changedProperties;try{t=this.shouldUpdate(a),t&&this.update(a)}catch(a){throw t=!1,a}finally{this._markUpdated()}t&&(!(this._updateState&Je)&&(this._updateState|=Je,this.firstUpdated(a)),this.updated(a))}},{key:"_markUpdated",value:function _markUpdated(){this._changedProperties=new Map,this._updateState&=~Ge}/**
         * Returns a Promise that resolves when the element has completed updating.
         * The Promise value is a boolean that is `true` if the element completed the
         * update without triggering another update. The Promise result is `false` if
         * a property was set inside `updated()`. If the Promise is rejected, an
         * exception was thrown during the update.
         *
         * To await additional asynchronous work, override the `_getUpdateComplete`
         * method. For example, it is sometimes useful to await a rendered element
         * before fulfilling this Promise. To do this, first await
         * `super._getUpdateComplete()`, then any subsequent state.
         *
         * @returns {Promise} The Promise returns a boolean that indicates if the
         * update resolved without triggering another update.
         */},{key:"_getUpdateComplete",/**
         * Override point for the `updateComplete` promise.
         *
         * It is not safe to override the `updateComplete` getter directly due to a
         * limitation in TypeScript which means it is not possible to call a
         * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
         * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
         * This method should be overridden instead. For example:
         *
         *   class MyElement extends LitElement {
         *     async _getUpdateComplete() {
         *       await super._getUpdateComplete();
         *       await this._myChild.updateComplete;
         *     }
         *   }
         */value:function _getUpdateComplete(){return this._updatePromise}/**
         * Controls whether or not `update` should be called when the element requests
         * an update. By default, this method always returns `true`, but this can be
         * customized to control when to update.
         *
         * * @param _changedProperties Map of changed properties with old values
         */},{key:"shouldUpdate",value:function shouldUpdate(){return!0}/**
         * Updates the element. This method reflects property values to attributes.
         * It can be overridden to render and keep updated element DOM.
         * Setting properties inside this method will *not* trigger
         * another update.
         *
         * * @param _changedProperties Map of changed properties with old values
         */},{key:"update",value:function update(){var e=this;void 0!==this._reflectingProperties&&0<this._reflectingProperties.size&&(this._reflectingProperties.forEach(function(t,a){return e._propertyToAttribute(a,e[a],t)}),this._reflectingProperties=void 0)}/**
         * Invoked whenever the element is updated. Implement to perform
         * post-updating tasks via DOM APIs, for example, focusing an element.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * * @param _changedProperties Map of changed properties with old values
         */},{key:"updated",value:function updated(){}/**
         * Invoked when the element is first updated. Implement to perform one time
         * work on the element after update.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * * @param _changedProperties Map of changed properties with old values
         */},{key:"firstUpdated",value:function firstUpdated(){}},{key:"_hasConnected",get:function get(){return this._updateState&et}},{key:"_hasRequestedUpdate",get:function get(){return this._updateState&Ge}},{key:"hasUpdated",get:function get(){return this._updateState&Je}},{key:"updateComplete",get:function get(){return this._getUpdateComplete()}}],[{key:"_ensureClassProperties",/**
         * Ensures the private `_classProperties` property metadata is created.
         * In addition to `finalize` this is also called in `createProperty` to
         * ensure the `@property` decorator can add property metadata.
         */ /** @nocollapse */value:function _ensureClassProperties(){var e=this;// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;// NOTE: Workaround IE11 not supporting Map constructor argument.
var t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(function(t,a){return e._classProperties.set(a,t)})}}/**
         * Creates a property accessor on the element prototype if one does not exist.
         * The property setter calls the property's `hasChanged` property option
         * or uses a strict identity check to determine whether or not to request
         * an update.
         * @nocollapse
         */},{key:"createProperty",value:function createProperty(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ke;// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(this._ensureClassProperties(),this._classProperties.set(e,t),!(t.noAccessor||this.prototype.hasOwnProperty(e))){var a="symbol"===_typeof(e)?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{// tslint:disable-next-line:no-any no symbol in index
get:function get(){return this[a]},set:function set(t){var n=this[e];this[a]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}}/**
         * Creates property accessors for registered properties and ensures
         * any superclasses are also finalized.
         * @nocollapse
         */},{key:"finalize",value:function finalize(){// finalize any superclasses
var e=Object.getPrototypeOf(this);// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if(e.hasOwnProperty(tt)||e.finalize(),this[tt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,a=[].concat(_toConsumableArray(Object.getOwnPropertyNames(t)),_toConsumableArray("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])),n=!0,o=!1,r=void 0;// support symbols in properties (IE11 does not support this)
try{// This for/of is ok because propKeys is an array
for(var i=a[Symbol.iterator](),l,d;!(n=(l=i.next()).done);n=!0)// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
d=l.value,this.createProperty(d,t[d])}catch(e){o=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}}}/**
         * Returns the property name for the given attribute `name`.
         * @nocollapse
         */},{key:"_attributeNameForProperty",value:function _attributeNameForProperty(e,t){var a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}/**
         * Returns true if a property should request an update.
         * Called when a property value is set and uses the `hasChanged`
         * option for the property if present or a strict identity check.
         * @nocollapse
         */},{key:"_valueHasChanged",value:function _valueHasChanged(e,t){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:i;return a(e,t)}/**
         * Returns the property value for the given attribute value.
         * Called via the `attributeChangedCallback` and uses the property's
         * `converter` or `converter.fromAttribute` property option.
         * @nocollapse
         */},{key:"_propertyValueFromAttribute",value:function _propertyValueFromAttribute(e,t){var a=t.type,n=t.converter||o,r="function"==typeof n?n:n.fromAttribute;return r?r(e,a):e}/**
         * Returns the attribute value for the given property value. If this
         * returns undefined, the property will *not* be reflected to an attribute.
         * If this returns null, the attribute will be removed, otherwise the
         * attribute will be set to the value.
         * This uses the property's `reflect` and `type.toAttribute` property options.
         * @nocollapse
         */},{key:"_propertyValueToAttribute",value:function _propertyValueToAttribute(e,t){if(void 0!==t.reflect){var a=t.type,n=t.converter,r=n&&n.toAttribute||o.toAttribute;return r(e,a)}}},{key:"observedAttributes",get:function get(){var e=this;this.finalize();var t=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
return this._classProperties.forEach(function(a,n){var o=e._attributeNameForProperty(n,a);void 0!==o&&(e._attributeToPropertyMap.set(o,n),t.push(o))}),t}}]),t}(_wrapNativeSuper(HTMLElement));/**
     * Change function that returns true if `value` is different from `oldValue`.
     * This method is used as the default for a property's `hasChanged` function.
     */Qe=tt,at[Qe]=!0;/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */var nt=function(e,t){// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
return"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign({},t,{finisher:function finisher(a){a.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
initializer:function initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher:function finisher(a){a.createProperty(t.key,e)}}},ot=function(e,t,a){t.constructor.createProperty(a,e)},rt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),lt=/*#__PURE__*/function(){function e(t,a){if(_classCallCheck(this,e),a!==it)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
return _createClass(e,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function get(){return void 0===this._styleSheet&&(rt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}]),e}(),dt=function(e){return new lt(e+"",it)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");var st=function(e){return e.flat?e.flat(1/0):g(e)},pt=/*#__PURE__*/function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"initialize",/**
         * Performs element initialization. By default this calls `createRenderRoot`
         * to create the element `renderRoot` node and captures any pre-set values for
         * registered properties.
         */value:function initialize(){_get(_getPrototypeOf(t.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}/**
         * Returns the node into which the element should render and by default
         * creates and returns an open shadowRoot. Implement to customize where the
         * element's DOM is rendered. For example, to render into the element's
         * childNodes, return `this`.
         * @returns {Element|DocumentFragment} Returns a node into which to render.
         */},{key:"createRenderRoot",value:function createRenderRoot(){return this.attachShadow({mode:"open"})}/**
         * Applies styling to the element shadowRoot using the `static get styles`
         * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
         * available and will fallback otherwise. When Shadow DOM is polyfilled,
         * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
         * is available but `adoptedStyleSheets` is not, styles are appended to the
         * end of the `shadowRoot` to [mimic spec
         * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
         */},{key:"adoptStyles",value:function adoptStyles(){var e=this.constructor._styles;0===e.length||(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?rt?this.renderRoot.adoptedStyleSheets=e.map(function(e){return e.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function(e){return e.cssText}),this.localName))}},{key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}/**
         * Updates the element. This method reflects property values to attributes
         * and calls `render` to render DOM via lit-html. Setting properties inside
         * this method will *not* trigger another update.
         * * @param _changedProperties Map of changed properties with old values
         */},{key:"update",value:function update(e){var a=this;_get(_getPrototypeOf(t.prototype),"update",this).call(this,e);var n=this.render();n instanceof be&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(e){var t=document.createElement("style");t.textContent=e.cssText,a.renderRoot.appendChild(t)}))}/**
         * Invoked on each update to perform rendering tasks. This method must return
         * a lit-html TemplateResult. Setting properties inside this method will *not*
         * trigger the element to update.
         */},{key:"render",value:function(){}}],[{key:"finalize",/** @nocollapse */value:function finalize(){_get(_getPrototypeOf(t),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}/** @nocollapse */},{key:"_getUniqueStyles",value:function _getUniqueStyles(){// Take care not to call `this.styles` multiple times since this generates
// new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
var e=this.styles,t=[];if(Array.isArray(e)){var a=st(e),n=a.reduceRight(function(e,t){// on IE set.add does not return the set.
return e.add(t),e},new Set);// As a performance optimization to avoid duplicated styling that can
// occur especially when composing via subclassing, de-duplicate styles
// preserving the last item in the list. The last item is kept to
// try to preserve cascade order with the assumption that it's most
// important that last added styles override previous styles.
n.forEach(function(e){return t.unshift(e)})}else e&&t.push(e);return t}}]),t}(at);pt.finalized=!0,pt.render=Ye;// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
var ct=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},ut={}.toString,gt=Array.isArray||function(e){return"[object Array]"==ut.call(e)};f.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances be augmented?
try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function foo(){return 42}},42===e.foo()}catch(t){return!1}}();var ft=f.TYPED_ARRAY_SUPPORT?2147483647:1073741823;f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),f.prototype.write=function(e,t,a){void 0===t?(a=this.length,t=0):void 0===a&&"string"==typeof t?(a=this.length,t=0):isFinite(t)&&(t|=0,isFinite(a)?a|=0:a=void 0);var n=this.length-t;if((void 0===a||a>n)&&(a=n),0<e.length&&(0>a||0>t)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");return _(this,e,t,a)},f.prototype.slice=function(e,t){var a=this.length;e=~~e,t=t===void 0?a:~~t,0>e?(e+=a,0>e&&(e=0)):e>a&&(e=a),0>t?(t+=a,0>t&&(t=0)):t>a&&(t=a),t<e&&(t=e);var n;if(f.TYPED_ARRAY_SUPPORT)// Return an augmented `Uint8Array` instance
n=this.subarray(e,t),n.__proto__=f.prototype;else{var o=t-e;n=new f(o,void 0);for(var r=0;r<o;++r)n[r]=this[r+e]}return n},f.prototype.copy=function(e,t,a,n){// Copy 0 bytes; we're done
if(a||(a=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),0<n&&n<a&&(n=a),n===a)return 0;if(0===e.length||0===this.length)return 0;// Fatal error conditions
if(0>t)throw new RangeError("targetStart out of bounds");if(0>a||a>=this.length)throw new RangeError("sourceStart out of bounds");if(0>n)throw new RangeError("sourceEnd out of bounds");// Are we oob?
n>this.length&&(n=this.length),e.length-t<n-a&&(n=e.length-t+a);var o=n-a,r;if(this===e&&a<t&&t<n)// descending copy from end
for(r=o-1;0<=r;--r)e[r+t]=this[r+a];else if(1e3>o||!f.TYPED_ARRAY_SUPPORT)// ascending copy from start
for(r=0;r<o;++r)e[r+t]=this[r+a];else Uint8Array.prototype.set.call(e,this.subarray(a,a+o),t);return o},f.prototype.fill=function(e,t,a){// Handle string cases:
if("string"!=typeof e)"number"==typeof e&&(e&=255);else if("string"==typeof t?(t=0,a=this.length):"string"==typeof a&&(a=this.length),1===e.length){var n=e.charCodeAt(0);256>n&&(e=n)}// Invalid ranges are not set to a default, so can range check early.
if(0>t||this.length<t||this.length<a)throw new RangeError("Out of range index");if(a<=t)return this;t>>>=0,a=a===void 0?this.length:a>>>0,e||(e=0);var o;if("number"==typeof e)for(o=t;o<a;++o)this[o]=e;else{var r=f.isBuffer(e)?e:new f(e),l=r.length;for(o=0;o<a-t;++o)this[o+t]=r[o%l]}return this},f.concat=function(e,t){if(!gt(e))throw new TypeError("\"list\" argument must be an Array of Buffers");if(0===e.length)return y(null,0);var a;if(t===void 0)for(t=0,a=0;a<e.length;++a)t+=e[a].length;var n=A(null,t),o=0;for(a=0;a<e.length;++a){var r=e[a];if(!f.isBuffer(r))throw new TypeError("\"list\" argument must be an Array of Buffers");r.copy(n,o),o+=r.length}return n},f.byteLength=k,f.prototype._isBuffer=!0,f.isBuffer=function(e){return!!(null!=e&&e._isBuffer)};var ht=f,mt=[0,// Not used
26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],yt=function(){return"undefined"!=typeof _t},At=function(e){return _t(e)},bt={getSymbolSize:function(e){if(!e)throw new Error("\"version\" cannot be null or undefined");if(1>e||40<e)throw new Error("\"version\" should be in range from 1 to 40");return 4*e+17},getSymbolTotalCodewords:function(e){return mt[e]},getBCHDigit:function getBCHDigit(e){for(var t=0;0!==e;)t++,e>>>=1;return t},setToSJISFunction:function(e){if("function"!=typeof e)throw new Error("\"toSJISFunc\" is not a valid function.");_t=e},isKanjiModeEnabled:yt,toSJIS:At},xt=D(function(e,t){function a(e){if("string"!=typeof e)throw new Error("Param is not a string");var a=e.toLowerCase();switch(a){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e);}}t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&"undefined"!=typeof e.bit&&0<=e.bit&&4>e.bit},t.from=function(e,n){if(t.isValid(e))return e;try{return a(e)}catch(t){return n}}}),vt=xt.L,wt=xt.M,Ct=xt.Q,kt=xt.H,Tt=xt.isValid,_t;N.prototype={get:function get(e){var t=$(e/8);return 1==(1&this.buffer[t]>>>7-e%8)},put:function put(e,t){for(var a=0;a<t;a++)this.putBit(1==(1&e>>>t-a-1))},getLengthInBits:function getLengthInBits(){return this.length},putBit:function putBit(e){var t=$(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var St=N;P.prototype.set=function(e,t,a,n){var o=e*this.size+t;this.data[o]=a,n&&(this.reservedBit[o]=!0)},P.prototype.get=function(e,t){return this.data[e*this.size+t]},P.prototype.xor=function(e,t,a){this.data[e*this.size+t]^=a},P.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Dt=P,Nt=D(function(e,t){/**
     * Alignment pattern are fixed reference pattern in defined positions
     * in a matrix symbology, which enables the decode software to re-synchronise
     * the coordinate mapping of the image modules in the event of moderate amounts
     * of distortion of the image.
     *
     * Alignment patterns are present only in QR Code symbols of version 2 or larger
     * and their number depends on the symbol version.
     */var a=bt.getSymbolSize;/**
     * Calculate the row/column coordinates of the center module of each alignment pattern
     * for the specified QR Code version.
     *
     * The alignment patterns are positioned symmetrically on either side of the diagonal
     * running from the top left corner of the symbol to the bottom right corner.
     *
     * Since positions are simmetrical only half of the coordinates are returned.
     * Each item of the array will represent in turn the x and y coordinate.
     * @see {@link getPositions}
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinate
     */ /**
     * Returns an array containing the positions of each alignment pattern.
     * Each array's element represent the center point of the pattern as (x, y) coordinates
     *
     * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
     * and filtering out the items that overlaps with finder pattern
     *
     * @example
     * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
     * The alignment patterns, therefore, are to be centered on (row, column)
     * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
     * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
     * and are not therefore used for alignment patterns.
     *
     * var pos = getPositions(7)
     * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
     *
     * @param  {Number} version QR Code version
     * @return {Array}          Array of coordinates
     */t.getRowColCoords=function(e){if(1===e)return[];// Last coord is always (size - 7)
for(var t=$(e/7)+2,n=a(e),o=145===n?26:2*G((n-13)/(2*t-2)),r=[n-7],l=1;l<t-1;l++)r[l]=r[l-1]-o;// First coord is always 6
return r.push(6),r.reverse()},t.getPositions=function(e){for(var a=[],n=t.getRowColCoords(e),o=n.length,r=0;r<o;r++)for(var l=0;l<o;l++)// Skip if position is occupied by finder patterns
(0!==r||0!==l)&&(// top-left
0!==r||l!==o-1)&&(// bottom-left
r!==o-1||0!==l)&&a.push([n[r],n[l]]);return a}}),Pt=Nt.getRowColCoords,Et=Nt.getPositions,It=bt.getSymbolSize,Bt=7,Lt={getPositions:function(e){var t=It(e);return[// top-left
[0,0],// top-right
[t-Bt,0],// bottom-left
[0,t-Bt]]}},jt=D(function(e,t){/**
     * Return mask value at given position
     *
     * @param  {Number} maskPattern Pattern reference value
     * @param  {Number} i           Row
     * @param  {Number} j           Column
     * @return {Boolean}            Mask value
     */function a(e,a,n){switch(e){case t.Patterns.PATTERN000:return 0==(a+n)%2;case t.Patterns.PATTERN001:return 0==a%2;case t.Patterns.PATTERN010:return 0==n%3;case t.Patterns.PATTERN011:return 0==(a+n)%3;case t.Patterns.PATTERN100:return 0==($(a/2)+$(n/3))%2;case t.Patterns.PATTERN101:return 0==a*n%2+a*n%3;case t.Patterns.PATTERN110:return 0==(a*n%2+a*n%3)%2;case t.Patterns.PATTERN111:return 0==(a*n%3+(a+n)%2)%2;default:throw new Error("bad maskPattern:"+e);}}/**
     * Apply a mask pattern to a BitMatrix
     *
     * @param  {Number}    pattern Pattern reference number
     * @param  {BitMatrix} data    BitMatrix data
     */t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};/**
     * Weighted penalty scores for the undesirable features
     * @type {Object}
     */var n={N1:3,N2:3,N3:40,N4:10};/**
     * Check if mask pattern value is valid
     *
     * @param  {Number}  mask    Mask pattern
     * @return {Boolean}         true if valid, false otherwise
     */ /**
     * Returns mask pattern from a value.
     * If value is not valid, returns undefined
     *
     * @param  {Number|String} value        Mask pattern value
     * @return {Number}                     Valid mask pattern or undefined
     */ /**
    * Find adjacent modules in row/column with the same color
    * and assign a penalty value.
    *
    * Points: N1 + i
    * i is the amount by which the number of adjacent modules of the same color exceeds 5
    */ /**
     * Find 2x2 blocks with the same color and assign a penalty value
     *
     * Points: N2 * (m - 1) * (n - 1)
     */ /**
     * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
     * preceded or followed by light area 4 modules wide
     *
     * Points: N3 * number of pattern found
     */ /**
     * Calculate proportion of dark modules in entire symbol
     *
     * Points: N4 * k
     *
     * k is the rating of the deviation of the proportion of dark modules
     * in the symbol from 50% in steps of 5%
     */ /**
     * Returns the best mask pattern for data
     *
     * @param  {BitMatrix} data
     * @return {Number} Mask pattern reference number
     */t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&0<=e&&7>=e},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){for(var t=e.size,a=0,o=0,r=0,i=null,l=null,d=0;d<t;d++){o=r=0,i=l=null;for(var s=0,p;s<t;s++)p=e.get(d,s),p===i?o++:(5<=o&&(a+=n.N1+(o-5)),i=p,o=1),p=e.get(s,d),p===l?r++:(5<=r&&(a+=n.N1+(r-5)),l=p,r=1);5<=o&&(a+=n.N1+(o-5)),5<=r&&(a+=n.N1+(r-5))}return a},t.getPenaltyN2=function(e){for(var t=e.size,a=0,o=0;o<t-1;o++)for(var r=0,i;r<t-1;r++)i=e.get(o,r)+e.get(o,r+1)+e.get(o+1,r)+e.get(o+1,r+1),(4===i||0===i)&&a++;return a*n.N2},t.getPenaltyN3=function(e){for(var t=e.size,a=0,o=0,r=0,i=0;i<t;i++){o=r=0;for(var l=0;l<t;l++)o=2047&o<<1|e.get(i,l),10<=l&&(1488===o||93===o)&&a++,r=2047&r<<1|e.get(l,i),10<=l&&(1488===r||93===r)&&a++}return a*n.N3},t.getPenaltyN4=function(e){for(var t=0,a=e.data.length,o=0;o<a;o++)t+=e.data[o];var r=Math.abs(G(100*t/a/5)-10);return r*n.N4},t.applyMask=function(e,t){for(var n=t.size,o=0;o<n;o++)for(var r=0;r<n;r++)t.isReserved(r,o)||t.xor(r,o,a(e,r,o))},t.getBestMask=function(e,a){for(var n=Object.keys(t.Patterns).length,o=0,r=1/0,i=0;i<n;i++){a(i),t.applyMask(i,e);// Calculate penalty
var l=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);// Undo previously applied mask
t.applyMask(i,e),l<r&&(r=l,o=i)}return o}}),Rt=jt.Patterns,Ht=jt.isValid,Mt=jt.getPenaltyN1,qt=jt.getPenaltyN2,Ot=jt.getPenaltyN3,Ut=jt.getPenaltyN4,Ft=jt.applyMask,Vt=jt.getBestMask,zt=[// L  M  Q  H
1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Wt=[// L  M  Q  H
7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],Yt={getBlocksCount:function(e,t){return t===xt.L?zt[4*(e-1)+0]:t===xt.M?zt[4*(e-1)+1]:t===xt.Q?zt[4*(e-1)+2]:t===xt.H?zt[4*(e-1)+3]:void 0},getTotalCodewordsCount:function(e,t){return t===xt.L?Wt[4*(e-1)+0]:t===xt.M?Wt[4*(e-1)+1]:t===xt.Q?Wt[4*(e-1)+2]:t===xt.H?Wt[4*(e-1)+3]:void 0}},Qt,Kt;ht.alloc?(Qt=ht.alloc(512),Kt=ht.alloc(256)):(Qt=new ht(512),Kt=new ht(256)),function(){for(var e=1,t=0;255>t;t++)Qt[t]=e,Kt[e]=t,e<<=1,256&e&&(e^=285);// Optimization: double the size of the anti-log table so that we don't need to mod 255 to
// stay inside the bounds (because we will mainly use this table for the multiplication of
// two GF numbers, no more).
// @see {@link mul}
for(t=255;512>t;t++)Qt[t]=Qt[t-255]}();/**
     * Returns log value of n inside Galois Field
     *
     * @param  {Number} n
     * @return {Number}
     */var Xt=function(e){if(1>e)throw new Error("log("+e+")");return Kt[e]},Jt=function(e){return Qt[e]},Gt=function(e,t){return 0===e||0===t?0:Qt[Kt[e]+Kt[t]];// should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
// @see {@link initTables}
},Zt={log:Xt,exp:Jt,mul:Gt},$t=D(function(e,t){/**
     * Multiplies two polynomials inside Galois Field
     *
     * @param  {Buffer} p1 Polynomial
     * @param  {Buffer} p2 Polynomial
     * @return {Buffer}    Product of p1 and p2
     */ /**
     * Calculate the remainder of polynomials division
     *
     * @param  {Buffer} divident Polynomial
     * @param  {Buffer} divisor  Polynomial
     * @return {Buffer}          Remainder
     */ /**
     * Generate an irreducible generator polynomial of specified degree
     * (used by Reed-Solomon encoder)
     *
     * @param  {Number} degree Degree of the generator polynomial
     * @return {Buffer}        Buffer containing polynomial coefficients
     */t.mul=function(e,t){var a=new ht(e.length+t.length-1);a.fill(0);for(var n=0;n<e.length;n++)for(var o=0;o<t.length;o++)a[n+o]^=Zt.mul(e[n],t[o]);return a},t.mod=function(e,t){for(var a=new ht(e);0<=a.length-t.length;){for(var n=a[0],o=0;o<t.length;o++)a[o]^=Zt.mul(t[o],n);// remove all zeros from buffer head
for(var r=0;r<a.length&&0===a[r];)r++;a=a.slice(r)}return a},t.generateECPolynomial=function(e){for(var a=new ht([1]),n=0;n<e;n++)a=t.mul(a,[1,Zt.exp(n)]);return a}}),ea=$t.mul,ta=$t.mod,aa=$t.generateECPolynomial;/**
     * Returns anti-log value of n inside Galois Field
     *
     * @param  {Number} n
     * @return {Number}
     */E.prototype.initialize=function(e){// create an irreducible generator polynomial
this.degree=e,this.genPoly=$t.generateECPolynomial(this.degree)},E.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");// Calculate EC for this data block
// extends data size to data+genPoly size
var t=new ht(this.degree);t.fill(0);var a=ht.concat([e,t],e.length+this.degree),n=$t.mod(a,this.genPoly),o=this.degree-n.length;// The error correction codewords are the remainder after dividing the data codewords
// by a generator polynomial
if(0<o){var r=new ht(this.degree);return r.fill(0),n.copy(r,o),r}return n};var na=E,oa={isValid:function(e){return!isNaN(e)&&1<=e&&40>=e}},ra="[0-9]+",ia="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";/**
     * Check if QR Code version is valid
     *
     * @param  {Number}  version QR Code version
     * @return {Boolean}         true if valid version, false otherwise
     */ia=ia.replace(/u/g,"\\u");var la="(?:(?![A-Z0-9 $%*+\\-./:]|"+ia+")(?:.|[\r\n]))+",da=new RegExp(ia,"g"),sa=/[^A-Z0-9 $%*+\-.\/:]+/g,pa=new RegExp(la,"g"),ca=new RegExp(ra,"g"),ua=new RegExp("[A-Z $%*+\\-./:]+","g"),ga=new RegExp("^"+ia+"$"),fa=new RegExp("^"+ra+"$"),ha=/^[A-Z0-9 $%*+\-.\/:]+$/,ma={KANJI:da,BYTE_KANJI:sa,BYTE:pa,NUMERIC:ca,ALPHANUMERIC:ua,testKanji:function(e){return ga.test(e)},testNumeric:function(e){return fa.test(e)},testAlphanumeric:function(e){return ha.test(e)}},ya=D(function(e,t){/**
     * Get mode object from its name
     *
     * @param   {String} string Mode name
     * @returns {Mode}          Mode object
     */function a(e){if("string"!=typeof e)throw new Error("Param is not a string");var a=e.toLowerCase();switch(a){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e);}}/**
     * Returns mode from a value.
     * If value is not a valid mode, returns defaultValue
     *
     * @param  {Mode|String} value        Encoding mode
     * @param  {Mode}        defaultValue Fallback value
     * @return {Mode}                     Encoding mode
     */ /**
     * Numeric mode encodes data from the decimal digit set (0 - 9)
     * (byte values 30HEX to 39HEX).
     * Normally, 3 data characters are represented by 10 bits.
     *
     * @type {Object}
     */ /**
     * Alphanumeric mode encodes data from a set of 45 characters,
     * i.e. 10 numeric digits (0 - 9),
     *      26 alphabetic characters (A - Z),
     *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
     * Normally, two input characters are represented by 11 bits.
     *
     * @type {Object}
     */ /**
     * In byte mode, data is encoded at 8 bits per character.
     *
     * @type {Object}
     */ /**
     * The Kanji mode efficiently encodes Kanji characters in accordance with
     * the Shift JIS system based on JIS X 0208.
     * The Shift JIS values are shifted from the JIS X 0208 values.
     * JIS X 0208 gives details of the shift coded representation.
     * Each two-byte character value is compacted to a 13-bit binary codeword.
     *
     * @type {Object}
     */ /**
     * Mixed mode will contain a sequences of data in a combination of any of
     * the modes described above
     *
     * @type {Object}
     */ /**
     * Returns the number of bits needed to store the data length
     * according to QR Code specifications.
     *
     * @param  {Mode}   mode    Data mode
     * @param  {Number} version QR Code version
     * @return {Number}         Number of bits
     */ /**
     * Returns the most efficient mode to store the specified data
     *
     * @param  {String} dataStr Input data string
     * @return {Mode}           Best mode
     */ /**
     * Return mode name as string
     *
     * @param {Mode} mode Mode object
     * @returns {String}  Mode name
     */ /**
     * Check if input param is a valid mode object
     *
     * @param   {Mode}    mode Mode object
     * @returns {Boolean} True if valid mode, false otherwise
     */t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!oa.isValid(t))throw new Error("Invalid version: "+t);return 1<=t&&10>t?e.ccBits[0]:27>t?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return ma.testNumeric(e)?t.NUMERIC:ma.testAlphanumeric(e)?t.ALPHANUMERIC:ma.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return a(e)}catch(t){return n}}}),Aa=ya.NUMERIC,ba=ya.ALPHANUMERIC,xa=ya.BYTE,va=ya.KANJI,wa=ya.MIXED,Ca=ya.getCharCountIndicator,ka=ya.getBestModeForData,Ta=ya.isValid,Sa=D(function(e,t){function a(e,a,n){for(var o=1;40>=o;o++)if(a<=t.getCapacity(o,n,e))return o}function n(e,t){// Character count indicator + mode indicator bits
return ya.getCharCountIndicator(e,t)+4}function o(e,t){var a=0;return e.forEach(function(e){var o=n(e.mode,t);a+=o+e.getBitsLength()}),a}function r(e,a){for(var n=1,r;40>=n;n++)if(r=o(e,n),r<=t.getCapacity(n,a,ya.MIXED))return n}/**
     * Returns version number from a value.
     * If value is not a valid version, returns defaultValue
     *
     * @param  {Number|String} value        QR Code version
     * @param  {Number}        defaultValue Fallback value
     * @return {Number}                     QR Code version number
     */ // Generator polynomial used to encode version information
var i=bt.getBCHDigit(7973);/**
     * Returns how much data can be stored with the specified QR code version
     * and error correction level
     *
     * @param  {Number} version              QR Code version (1-40)
     * @param  {Number} errorCorrectionLevel Error correction level
     * @param  {Mode}   mode                 Data mode
     * @return {Number}                      Quantity of storable data
     */ /**
     * Returns the minimum version needed to contain the amount of data
     *
     * @param  {Segment} data                    Segment of data
     * @param  {Number} [errorCorrectionLevel=H] Error correction level
     * @param  {Mode} mode                       Data mode
     * @return {Number}                          QR Code version
     */ /**
     * Returns version information with relative error correction bits
     *
     * The version information is included in QR Code symbols of version 7 or larger.
     * It consists of an 18-bit sequence containing 6 data bits,
     * with 12 error correction bits calculated using the (18, 6) Golay code.
     *
     * @param  {Number} version QR Code version
     * @return {Number}         Encoded version info bits
     */t.from=function(e,t){return oa.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,a){if(!oa.isValid(e))throw new Error("Invalid QR Code version");// Use Byte mode as default
"undefined"==typeof a&&(a=ya.BYTE);// Total codewords for this QR code version (Data + Error correction)
var o=bt.getSymbolTotalCodewords(e),r=Yt.getTotalCodewordsCount(e,t),i=8*(o-r);// Total number of error correction codewords
if(a===ya.MIXED)return i;var l=i-n(a,e);// Return max number of storable codewords
switch(a){case ya.NUMERIC:return $(3*(l/10));case ya.ALPHANUMERIC:return $(2*(l/11));case ya.KANJI:return $(l/13);case ya.BYTE:default:return $(l/8);}},t.getBestVersionForData=function(e,t){var n=xt.from(t,xt.M),o;if(gt(e)){if(1<e.length)return r(e,n);if(0===e.length)return 1;o=e[0]}else o=e;return a(o.mode,o.getLength(),n)},t.getEncodedBits=function(e){if(!oa.isValid(e)||7>e)throw new Error("Invalid QR Code version");for(var t=e<<12;0<=bt.getBCHDigit(t)-i;)t^=7973<<bt.getBCHDigit(t)-i;return e<<12|t}}),Da=Sa.getCapacity,Na=Sa.getBestVersionForData,Pa=Sa.getEncodedBits,Ea=1335,Ia=bt.getBCHDigit(Ea),Ba={getEncodedBits:function(e,t){for(var a=e.bit<<3|t,n=a<<10;0<=bt.getBCHDigit(n)-Ia;)n^=Ea<<bt.getBCHDigit(n)-Ia;// xor final data with mask pattern in order to ensure that
// no combination of Error Correction Level and data mask pattern
// will result in an all-zero data string
return(a<<10|n)^21522}};I.getBitsLength=function(e){return 10*$(e/3)+(e%3?3*(e%3)+1:0)},I.prototype.getLength=function(){return this.data.length},I.prototype.getBitsLength=function(){return I.getBitsLength(this.data.length)},I.prototype.write=function(e){var t,a,n;// The input data string is divided into groups of three digits,
// and each group is converted to its 10-bit binary equivalent.
for(t=0;t+3<=this.data.length;t+=3)a=this.data.substr(t,3),n=parseInt(a,10),e.put(n,10);// If the number of input digits is not an exact multiple of three,
// the final one or two digits are converted to 4 or 7 bits respectively.
var o=this.data.length-t;0<o&&(a=this.data.substr(t),n=parseInt(a,10),e.put(n,3*o+1))};var La=I,ja=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];/**
     * Array of characters available in alphanumeric mode
     *
     * As per QR Code specification, to each character
     * is assigned a value from 0 to 44 which in this case coincides
     * with the array index
     *
     * @type {Array}
     */B.getBitsLength=function(e){return 11*$(e/2)+6*(e%2)},B.prototype.getLength=function(){return this.data.length},B.prototype.getBitsLength=function(){return B.getBitsLength(this.data.length)},B.prototype.write=function(e){var t;// Input data characters are divided into groups of two characters
// and encoded as 11-bit binary codes.
for(t=0;t+2<=this.data.length;t+=2){// The character value of the first character is multiplied by 45
var a=45*ja.indexOf(this.data[t]);// The character value of the second digit is added to the product
// The sum is then stored as 11-bit binary number
a+=ja.indexOf(this.data[t+1]),e.put(a,11)}// If the number of input data characters is not a multiple of two,
// the character value of the final character is encoded as a 6-bit binary number.
this.data.length%2&&e.put(ja.indexOf(this.data[t]),6)};var Ra=B;L.getBitsLength=function(e){return 8*e},L.prototype.getLength=function(){return this.data.length},L.prototype.getBitsLength=function(){return L.getBitsLength(this.data.length)},L.prototype.write=function(e){for(var t=0,a=this.data.length;t<a;t++)e.put(this.data[t],8)};var Ha=L;j.getBitsLength=function(e){return 13*e},j.prototype.getLength=function(){return this.data.length},j.prototype.getBitsLength=function(){return j.getBitsLength(this.data.length)},j.prototype.write=function(e){var t;// In the Shift JIS system, Kanji characters are represented by a two byte combination.
// These byte values are shifted from the JIS X 0208 values.
// JIS X 0208 gives details of the shift coded representation.
for(t=0;t<this.data.length;t++){var a=bt.toSJIS(this.data[t]);// For characters with Shift JIS values from 0x8140 to 0x9FFC:
if(33088<=a&&40956>=a)// Subtract 0x8140 from Shift JIS value
a-=33088;else if(57408<=a&&60351>=a)// Subtract 0xC140 from Shift JIS value
a-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");// Multiply most significant byte of result by 0xC0
// and add least significant byte to product
// Convert result to a 13-bit binary string
a=192*(255&a>>>8)+(255&a),e.put(a,13)}};var Ma=j,qa=D(function(e){/******************************************************************************
     * Created 2008-08-19.
     *
     * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
     *
     * Copyright (C) 2008
     *   Wyatt Baldwin <self@wyattbaldwin.com>
     *   All rights reserved
     *
     * Licensed under the MIT license.
     *
     *   http://www.opensource.org/licenses/mit-license.php
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     *****************************************************************************/var a={single_source_shortest_paths:function single_source_shortest_paths(e,t,n){// Predecessor map for each node that has been encountered.
// node ID => predecessor node ID
var o={},r={};// Costs of shortest paths from s to all nodes encountered.
// node ID => cost
r[t]=0;// Costs of shortest paths from s to all nodes encountered; differs from
// `costs` in that it provides easy access to the node that currently has
// the known shortest path from s.
// XXX: Do we actually need both `costs` and `open`?
var i=a.PriorityQueue.make();i.push(t,0);for(var l,d,s,p,c,g,f,h,m;!i.empty();)// ...and explore the edges that connect u to those nodes, updating
// the cost of the shortest paths to any or all of those nodes as
// necessary. v is the node across the current edge from u.
for(s in l=i.pop(),d=l.value,p=l.cost,c=e[d]||{},c)c.hasOwnProperty(s)&&(// Get the cost of the edge running from u to v.
// Cost of s to u plus the cost of u to v across e--this is *a*
// cost from s to v that may or may not be less than the current
// known cost to v.
// If we haven't visited v yet OR if the current known cost from s to
// v is greater than the new cost we just found (cost of s to u plus
// cost of u to v across e), update v's cost in the cost list and
// update v's predecessor in the predecessor list (it's now u).
g=c[s],f=p+g,h=r[s],m="undefined"==typeof r[s],(m||h>f)&&(r[s]=f,i.push(s,f),o[s]=d));if("undefined"!=typeof n&&"undefined"==typeof r[n]){var y=["Could not find a path from ",t," to ",n,"."].join("");throw new Error(y)}return o},extract_shortest_path_from_predecessor_list:function extract_shortest_path_from_predecessor_list(e,t){for(var a=[],n=t,o;n;)a.push(n),o=e[n],n=e[n];return a.reverse(),a},find_path:function find_path(e,t,n){var o=a.single_source_shortest_paths(e,t,n);return a.extract_shortest_path_from_predecessor_list(o,n)},/**
       * A very naive priority queue implementation.
       */PriorityQueue:{make:function make(e){var n=a.PriorityQueue,o={},t;for(t in e=e||{},n)n.hasOwnProperty(t)&&(o[t]=n[t]);return o.queue=[],o.sorter=e.sorter||n.default_sorter,o},default_sorter:function default_sorter(e,t){return e.cost-t.cost},/**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */push:function push(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},/**
         * Return the highest priority element in the queue.
         */pop:function pop(){return this.queue.shift()},empty:function empty(){return 0===this.queue.length}}};// node.js module exports
e.exports=a}),Oa=D(function(e,t){/**
     * Returns UTF8 byte length
     *
     * @param  {String} str Input string
     * @return {Number}     Number of byte
     */function a(e){return unescape(encodeURIComponent(e)).length}/**
     * Get a list of segments of the specified mode
     * from a string
     *
     * @param  {Mode}   mode Segment mode
     * @param  {String} str  String to process
     * @return {Array}       Array of object with segments data
     */function n(e,t,a){for(var n=[],o;null!==(o=e.exec(a));)n.push({data:o[0],index:o.index,mode:t,length:o[0].length});return n}/**
     * Extracts a series of segments with the appropriate
     * modes from a string
     *
     * @param  {String} dataStr Input string
     * @return {Array}          Array of object with segments data
     */function o(e){var t=n(ma.NUMERIC,ya.NUMERIC,e),a=n(ma.ALPHANUMERIC,ya.ALPHANUMERIC,e),o,r;bt.isKanjiModeEnabled()?(o=n(ma.BYTE,ya.BYTE,e),r=n(ma.KANJI,ya.KANJI,e)):(o=n(ma.BYTE_KANJI,ya.BYTE,e),r=[]);var i=t.concat(a,o,r);return i.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}/**
     * Returns how many bits are needed to encode a string of
     * specified length with the specified mode
     *
     * @param  {Number} length String length
     * @param  {Mode} mode     Segment mode
     * @return {Number}        Bit length
     */function r(e,t){return t===ya.NUMERIC?La.getBitsLength(e):t===ya.ALPHANUMERIC?Ra.getBitsLength(e):t===ya.KANJI?Ma.getBitsLength(e):t===ya.BYTE?Ha.getBitsLength(e):void 0}/**
     * Merges adjacent segments which have the same mode
     *
     * @param  {Array} segs Array of object with segments data
     * @return {Array}      Array of object with segments data
     */function l(e){return e.reduce(function(e,t){var a=0<=e.length-1?e[e.length-1]:null;return a&&a.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}/**
     * Generates a list of all possible nodes combination which
     * will be used to build a segments graph.
     *
     * Nodes are divided by groups. Each group will contain a list of all the modes
     * in which is possible to encode the given text.
     *
     * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
     * The group for '12345' will contain then 3 objects, one for each
     * possible encoding mode.
     *
     * Each node represents a possible segment.
     *
     * @param  {Array} segs Array of object with segments data
     * @return {Array}      Array of object with segments data
     */function d(e){for(var t=[],n=0,o;n<e.length;n++)switch(o=e[n],o.mode){case ya.NUMERIC:t.push([o,{data:o.data,mode:ya.ALPHANUMERIC,length:o.length},{data:o.data,mode:ya.BYTE,length:o.length}]);break;case ya.ALPHANUMERIC:t.push([o,{data:o.data,mode:ya.BYTE,length:o.length}]);break;case ya.KANJI:t.push([o,{data:o.data,mode:ya.BYTE,length:a(o.data)}]);break;case ya.BYTE:t.push([{data:o.data,mode:ya.BYTE,length:a(o.data)}]);}return t}/**
     * Builds a graph from a list of nodes.
     * All segments in each node group will be connected with all the segments of
     * the next group and so on.
     *
     * At each connection will be assigned a weight depending on the
     * segment's byte length.
     *
     * @param  {Array} nodes    Array of object with segments data
     * @param  {Number} version QR Code version
     * @return {Object}         Graph of all possible segments
     */function s(e,t){for(var a={},o={start:{}},l=["start"],d=0;d<e.length;d++){for(var s=e[d],p=[],c=0;c<s.length;c++){var u=s[c],g=""+d+c;p.push(g),a[g]={node:u,lastCount:0},o[g]={};for(var f=0,h;f<l.length;f++)h=l[f],a[h]&&a[h].node.mode===u.mode?(o[h][g]=r(a[h].lastCount+u.length,u.mode)-r(a[h].lastCount,u.mode),a[h].lastCount+=u.length):(a[h]&&(a[h].lastCount=u.length),o[h][g]=r(u.length,u.mode)+4+ya.getCharCountIndicator(u.mode,t))}l=p}for(f=0;f<l.length;f++)o[l[f]].end=0;return{map:o,table:a}}/**
     * Builds a segment from a specified data and mode.
     * If a mode is not specified, the more suitable will be used.
     *
     * @param  {String} data             Input data
     * @param  {Mode | String} modesHint Data mode
     * @return {Segment}                 Segment
     */function p(e,t){var a=ya.getBestModeForData(e),n;// Make sure data can be encoded
if(n=ya.from(t,a),n!==ya.BYTE&&n.bit<a.bit)throw new Error("\""+e+"\" cannot be encoded with mode "+ya.toString(n)+".\n Suggested mode is: "+ya.toString(a));// Use Mode.BYTE if Kanji support is disabled
return n!==ya.KANJI||bt.isKanjiModeEnabled()||(n=ya.BYTE),n===ya.NUMERIC?new La(e):n===ya.ALPHANUMERIC?new Ra(e):n===ya.KANJI?new Ma(e):n===ya.BYTE?new Ha(e):void 0}/**
     * Builds a list of segments from an array.
     * Array can contain Strings or Objects with segment's info.
     *
     * For each item which is a string, will be generated a segment with the given
     * string and the more appropriate encoding mode.
     *
     * For each item which is an object, will be generated a segment with the given
     * data and mode.
     * Objects must contain at least the property "data".
     * If property "mode" is not present, the more suitable mode will be used.
     *
     * @param  {Array} array Array of objects with segments data
     * @return {Array}       Array of Segments
     */ /**
     * Builds an optimized sequence of segments from a string,
     * which will produce the shortest possible bitstream.
     *
     * @param  {String} data    Input string
     * @param  {Number} version QR Code version
     * @return {Array}          Array of segments
     */ /**
     * Splits a string in various segments with the modes which
     * best represent their content.
     * The produced segments are far from being optimized.
     * The output of this function is only used to estimate a QR Code version
     * which may contain the data.
     *
     * @param  {string} data Input string
     * @return {Array}       Array of segments
     */t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(p(t,null)):t.data&&e.push(p(t.data,t.mode)),e},[])},t.fromString=function(e,a){for(var n=o(e),r=d(n),p=s(r,a),c=qa.find_path(p.map,"start","end"),u=[],g=1;g<c.length-1;g++)u.push(p.table[c[g]].node);return t.fromArray(l(u))},t.rawSplit=function(e){return t.fromArray(o(e))}}),Ua=Oa.fromArray,Fa=Oa.fromString,Va=Oa.rawSplit,za={create:function(e,t){if("undefined"==typeof e||""===e)throw new Error("No input text");var a=xt.M,n,o;return"undefined"!=typeof t&&(a=xt.from(t.errorCorrectionLevel,xt.M),n=Sa.from(t.version),o=jt.from(t.maskPattern),t.toSJISFunc&&bt.setToSJISFunction(t.toSJISFunc)),z(e,n,a,o)}},Wa=D(function(e,t){function a(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");var t=e.slice().replace("#","").split("");if(3>t.length||5===t.length||8<t.length)throw new Error("Invalid hex color: "+e);// Convert from short to long form (fff -> ffffff)
(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");var a=parseInt(t.join(""),16);return{r:255&a>>24,g:255&a>>16,b:255&a>>8,a:255&a,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});var t="undefined"==typeof e.margin||null===e.margin||0>e.margin?4:e.margin,n=e.width&&21<=e.width?e.width:void 0,o=e.scale||4;return{width:n,scale:n?4:o,margin:t,color:{dark:a(e.color.dark||"#000000ff"),light:a(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,a){var n=t.getScale(e,a);return $((e+2*a.margin)*n)},t.qrToImageData=function(e,a,n){for(var o=a.modules.size,r=a.modules.data,l=t.getScale(o,n),d=$((o+2*n.margin)*l),s=n.margin*l,p=[n.color.light,n.color.dark],c=0;c<d;c++)for(var u=0;u<d;u++){var g=4*(c*d+u),f=n.color.light;if(c>=s&&u>=s&&c<d-s&&u<d-s){var h=$((c-s)/l),m=$((u-s)/l);f=p[r[h*o+m]?1:0]}e[g++]=f.r,e[g++]=f.g,e[g++]=f.b,e[g]=f.a}}}),Ya=Wa.getOptions,Qa=Wa.getScale,Ka=Wa.getImageWidth,Xa=Wa.qrToImageData,Ja=D(function(e,t){function a(e,t,a){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=a,t.width=a,t.style.height=a+"px",t.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}t.render=function(e,t,o){var r=o,i=t;"undefined"!=typeof r||t&&t.getContext||(r=t,t=void 0),t||(i=n()),r=Wa.getOptions(r);var l=Wa.getImageWidth(e.modules.size,r),d=i.getContext("2d"),s=d.createImageData(l,l);return Wa.qrToImageData(s.data,e,r),a(d,i,l),d.putImageData(s,0,0),i},t.renderToDataURL=function(e,a,n){var o=n;"undefined"!=typeof o||a&&a.getContext||(o=a,a=void 0),o||(o={});var r=t.render(e,a,o),i=o.type||"image/png",l=o.rendererOpts||{};return r.toDataURL(i,l.quality)}}),Ga=Ja.render,Za=Ja.renderToDataURL,$a={render:function(e,t,a){var n=Wa.getOptions(t),o=e.modules.size,r=e.modules.data,i=o+2*n.margin,l=n.color.light.a?"<path "+W(n.color.light,"fill")+" d=\"M0 0h"+i+"v"+i+"H0z\"/>":"",d="<path "+W(n.color.dark,"stroke")+" d=\""+Q(r,o,n.margin)+"\"/>",s=n.width?"width=\""+n.width+"\" height=\""+n.width+"\" ":"",p="<svg xmlns=\"http://www.w3.org/2000/svg\" "+s+("viewBox=\"0 0 "+i+" "+i+"\"")+" shape-rendering=\"crispEdges\">"+l+d+"</svg>\n";return"function"==typeof a&&a(null,p),p}},en=za.create,tn=K.bind(null,Ja.render),an=K.bind(null,Ja.renderToDataURL),nn=K.bind(null,function(e,t,a){return $a.render(e,a)}),on=function(e){return function(){var t=Array.prototype.slice.call(arguments);return new Promise(function(a,n){t.push(function(e,t){e?n(e):a(t)}),e.apply(null,t)})}}({create:en,toCanvas:tn,toDataURL:an,toString:nn}.toCanvas),rn=function(e){var t=e.canvas,a=e.content,n=e.width,o=void 0===n?0:n,r=e.nodeQrCodeOptions,i=void 0===r?{}:r;// 容错率，默认对内容少的二维码采用高容错率，内容多的二维码采用低容错率
return i.errorCorrectionLevel=i.errorCorrectionLevel||dn(a),ln(a,i).then(function(e){return i.scale=0===o?void 0:4*(o/e),on(t,a,i)})},ln=function(e,t){var a=document.createElement("canvas");return on(a,e,t).then(function(){return a.width})},dn=function(e){return 36<e.length?"M":16<e.length?"Q":"H"},sn=function(e){var t=e.canvas,a=e.content,n=e.logo;if(n){var o=t.width,r=n.logoSize,i=void 0===r?.15:r,l=n.borderColor,d=n.bgColor,s=void 0===d?l||"#ffffff":d,p=n.borderSize,c=void 0===p?.05:p,u=n.crossOrigin,g=n.borderRadius,f=void 0===g?8:g,h=n.logoRadius,m=void 0===h?0:h,y="string"==typeof n?n:n.src,A=o*i,b=o*(1-i)/2,x=o*(i+c),v=o*(1-i-c)/2,w=t.getContext("2d");pn(w)(v,v,x,x,f),w.fillStyle=s,w.fill();// logo
var C=new Image;(u||m)&&C.setAttribute("crossOrigin",u||"anonymous"),C.src=y;// 使用image绘制可以避免某些跨域情况
var k=function(e){w.drawImage(e,b,b,A,A)},T=function(e){var t=document.createElement("canvas");t.width=b+A,t.height=b+A,t.getContext("2d").drawImage(e,b,b,A,A),pn(w)(b,b,A,A,m),w.fillStyle=w.createPattern(t,"no-repeat"),w.fill()};// 使用canvas绘制以获得更多的功能
// 将 logo绘制到 canvas上
return new Promise(function(e){C.onload=function(){m?T(C):k(C),e()}})}},pn=function(e){return function(t,a,n,o,i){var l=Math.min,d=l(n,o);return i>d/2&&(i=d/2),e.beginPath(),e.moveTo(t+i,a),e.arcTo(t+n,a,t+n,a+o,i),e.arcTo(t+n,a+o,t,a+o,i),e.arcTo(t,a+o,t,a,i),e.arcTo(t,a,t+n,a,i),e.closePath(),e}},cn=function(e){return rn(e).then(function(){return e}).then(sn)},un=function(e,t){var a=e.src,n=document.createElement("a");n.download=t,n.href=a,document.body.appendChild(n),n.click(),document.body.removeChild(n)},gn={toCanvas:cn,toImage:function(e){var t=document.createElement("canvas");return e.canvas=t,e.logo&&(J(e.logo)&&(e.logo={src:e.logo}),e.logo.crossOrigin="Anonymous"),cn(e).then(function(){var a=e.image,n=void 0===a?new Image:a,o=e.downloadName,r=void 0===o?"qr-code":o,i=e.download;if(n.src=t.toDataURL(),!0===i||X(i)){i=!0===i?function(e){return e()}:i;var l=function(){un(n,r)};i(l)}})}},fn=/** @class */function(a){function n(){var e=null!==a&&a.apply(this,arguments)||this;return e.width=250,e.logo="",e.errCorrectionLevel="Q",e.colorDark="#000000ff",e.colorLight="#ffffff",e}return e(n,a),n.prototype.getInspector=function(){return{}},n.prototype.render=function(){return Re(mn||(mn=d(["\n      <style>\n        :host {\n          display: inline-block !important;\n          min-width: 150px;\n          min-height: 150px;\n          width: ","px;\n          height: ","px;\n        }\n        #canvas {\n          min-width: 150px;\n          min-height: 150px;\n          pointer-events: none;\n        }\n      </style>\n      <canvas id=\"canvas\"></canvas>\n    "],["\n      <style>\n        :host {\n          display: inline-block !important;\n          min-width: 150px;\n          min-height: 150px;\n          width: ","px;\n          height: ","px;\n        }\n        #canvas {\n          min-width: 150px;\n          min-height: 150px;\n          pointer-events: none;\n        }\n      </style>\n      <canvas id=\"canvas\"></canvas>\n    "])),this.width,this.width)},n.prototype.firstUpdated=function(){this.generateQRCode()},n.prototype.updated=function(){this.generateQRCode()},n.prototype.generateQRCode=function(){var e=this.renderRoot.querySelector("canvas"),t={canvas:e,content:"https://oneweb.tech/",width:this.width,nodeQrCodeOptions:{errorCorrectionLevel:this.errCorrectionLevel,color:{dark:this.colorDark,light:this.colorLight}}};this.logo&&(t.logo={src:this.logo,borderSize:0}),this.content&&(t.content=this.content),gn.toCanvas(t)},t([u({type:String})],n.prototype,"content",void 0),t([u({type:String})],n.prototype,"width",void 0),t([u({type:String})],n.prototype,"logo",void 0),t([u({type:String})],n.prototype,"errCorrectionLevel",void 0),t([u({type:String})],n.prototype,"colorDark",void 0),t([u({type:String})],n.prototype,"colorLight",void 0),n}(pt);customElements.define("demo-qrcode",fn);var hn=/** @class */function(a){function n(){var e=null!==a&&a.apply(this,arguments)||this;return e.bgColor="#222",e}return e(n,a),n.prototype.render=function(){return Re(bn||(bn=d(["\n      <style>\n        :host {\n          display: block;\n        }\n        #submit {\n          background-color: ",";\n        }\n        #cancel {\n          background-color: ",";\n        }\n      </style>\n      <div>\n        <button id=\"cancel\">Clickttt ME!</button>\n        <button id=\"submit\">Clickxxs ME!</button>\n      </div>\n    "],["\n      <style>\n        :host {\n          display: block;\n        }\n        #submit {\n          background-color: ",";\n        }\n        #cancel {\n          background-color: ",";\n        }\n      </style>\n      <div>\n        <button id=\"cancel\">Clickttt ME!</button>\n        <button id=\"submit\">Clickxxs ME!</button>\n      </div>\n    "])),dt(this.bgColor),dt(this.bgColor))},n.prototype.firstUpdated=function(){},n.prototype.updated=function(e){var t=this;e.forEach(function(e,a){if(console.log(a+" changed. oldValue: "+e),"bgColor"===a){var n=t.renderRoot.querySelector("#cancel");console.log("el:",n),n&&n.style&&(n.style.backgroundColor=t.bgColor)}})},n.prototype.attributeChangedCallback=function(e,t,n){console.log("attribute change: ",e,n),a.prototype.attributeChangedCallback.call(this,e,t,n)},t([u({type:String,attribute:"bg-color",reflect:!0,hasChanged:function hasChanged(e,t){return console.log("hasChagne:",e,t),e!==t}})],n.prototype,"bgColor",void 0),n}(pt),mn;customElements.define("demo-table",hn);var yn=D(function(e){/*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */(function(t,a){e.exports=t.document?a(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return a(e)}})("undefined"==typeof window?this:window,function(e,t){function a(e,t,a){a=a||pe;var n=a.createElement("script"),o,r;if(n.text=e,t)for(o in ke)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
r=t[o]||t.getAttribute&&t.getAttribute(o),r&&n.setAttribute(o,r);a.head.appendChild(n).parentNode.removeChild(n)}function n(e){return null==e?e+"":"object"===_typeof(e)||"function"==typeof e?me[ye.call(e)]||"object":_typeof(e);// Support: Android <=2.3 only (functionish RegExp)
}/* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
function o(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,a=n(e);return!(we(e)||Ce(e))&&("array"===a||0===t||"number"==typeof t&&0<t&&t-1 in e)}function r(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}// Implement the identical functionality for filter and not
function i(e,t,a){return we(t)?_e.grep(e,function(e,n){return!!t.call(e,n,e)!==a}):t.nodeType?_e.grep(e,function(e){return e===t!==a}):"string"==typeof t?_e.filter(t,e,a):_e.grep(e,function(e){return-1<he.call(t,e)!==a});// Single element
// Arraylike of elements (jQuery, arguments, Array)
// Filtered directly for both simple and complex selectors
}function l(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}// Convert String-formatted options into Object-formatted ones
function d(e){var t={};return _e.each(e.match(Me)||[],function(e,a){t[a]=!0}),t}/*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */function s(e){return e}function p(e){throw e}function c(e,t,a,n){var o;try{e&&we(o=e.promise)?o.call(e).done(t).fail(a):e&&we(o=e.then)?o.call(e,t,a):t.apply(void 0,[e].slice(n))}catch(e){a.apply(void 0,[e])}}// The ready event handler and self cleanup method
function u(){pe.removeEventListener("DOMContentLoaded",u),e.removeEventListener("load",u),_e.ready()}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
// Used by camelCase as callback to replace()
function g(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function f(e){return e.replace(Fe,"ms-").replace(Ve,g)}function h(){this.expando=_e.expando+h.uid++}function m(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Qe.test(e)?JSON.parse(e):e);// Only convert to a number if it doesn't change the string
}function y(e,t,a){var n;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===a&&1===e.nodeType)if(n="data-"+t.replace(Ke,"-$&").toLowerCase(),a=e.getAttribute(n),"string"==typeof a){try{a=m(a)}catch(t){}// Make sure we set the data so it isn't changed later
Ye.set(e,t,a)}else a=void 0;return a}function A(e,t,a,n){var o=20,r=n?function(){return n.cur()}:function(){return _e.css(e,t,"")},i=r(),l=a&&a[3]||(_e.cssNumber[t]?"":"px"),// Starting value computation is required for potential unit mismatches
d=e.nodeType&&(_e.cssNumber[t]||"px"!==l&&+i)&&Je.exec(_e.css(e,t)),s,p;if(d&&d[3]!==l){for(i/=2,l=l||d[3],d=+i||1;o--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
_e.style(e,t,d+l),0>=(1-p)*(1-(p=r()/i||.5))&&(o=0),d/=p;d*=2,_e.style(e,t,d+l),a=a||[]}return a&&(d=+d||+i||0,s=a[1]?d+(a[1]+1)*a[2]:+a[2],n&&(n.unit=l,n.start=d,n.end=s)),s}function b(e){var t=e.ownerDocument,a=e.nodeName,n=nt[a],o;return n?n:(o=t.body.appendChild(t.createElement(a)),n=_e.css(o,"display"),o.parentNode.removeChild(o),"none"===n&&(n="block"),nt[a]=n,n)}function x(e,t){// Determine new display value for elements that need to change
for(var a=[],n=0,o=e.length,r,i;n<o;n++)(i=e[n],!!i.style)&&(r=i.style.display,t?("none"===r&&(a[n]=We.get(i,"display")||null,!a[n]&&(i.style.display="")),""===i.style.display&&tt(i)&&(a[n]=b(i))):"none"!==r&&(a[n]="none",We.set(i,"display",r)));// Set the display of the elements in a second loop to avoid constant reflow
for(n=0;n<o;n++)null!=a[n]&&(e[n].style.display=a[n]);return e}function v(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var a;return a="undefined"==typeof e.getElementsByTagName?"undefined"==typeof e.querySelectorAll?[]:e.querySelectorAll(t||"*"):e.getElementsByTagName(t||"*"),void 0===t||t&&r(e,t)?_e.merge([e],a):a}// Mark scripts as having already been evaluated
function w(e,t){for(var a=0,n=e.length;a<n;a++)We.set(e[a],"globalEval",!t||We.get(t[a],"globalEval"))}function C(e,t,a,o,r){for(var d=t.createDocumentFragment(),s=[],p=0,c=e.length,l,u,g,f,h,m;p<c;p++)if(l=e[p],l||0===l)// Add nodes directly
if("object"===n(l))// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
_e.merge(s,l.nodeType?[l]:l);else if(!dt.test(l))s.push(t.createTextNode(l));else{for(u=u||d.appendChild(t.createElement("div")),g=(rt.exec(l)||["",""])[1].toLowerCase(),f=lt[g]||lt._default,u.innerHTML=f[1]+_e.htmlPrefilter(l)+f[2],m=f[0];m--;)u=u.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
_e.merge(s,u.childNodes),u=d.firstChild,u.textContent=""}// Remove wrapper from fragment
for(d.textContent="",p=0;l=s[p++];){// Skip elements already in the context collection (trac-4087)
if(o&&-1<_e.inArray(l,o)){r&&r.push(l);continue}// Capture executables
if(h=$e(l),u=v(d.appendChild(l),"script"),h&&w(u),a)for(m=0;l=u[m++];)it.test(l.type||"")&&a.push(l)}return d}function k(){return!0}function T(){return!1}// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function _(e,t){return e===S()==("focus"===t)}// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function S(){try{return pe.activeElement}catch(e){}}function D(e,t,a,n,o,r){var i,l;// Types can be a map of types/handlers
if("object"===_typeof(t)){for(l in"string"!=typeof a&&(n=n||a,a=void 0),t)D(e,l,a,n,t[l],r);return e}if(null==n&&null==o?(o=a,n=a=void 0):null==o&&("string"==typeof a?(o=n,n=void 0):(o=n,n=a,a=void 0)),!1===o)o=T;else if(!o)return e;return 1===r&&(i=o,o=function(e){return _e().off(e),i.apply(this,arguments)},o.guid=i.guid||(i.guid=_e.guid++)),e.each(function(){_e.event.add(this,t,o,n,a)})}/*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */ // Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function N(e,t,a){// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
return a?void(// Register the controller as a special universal handler for all event namespaces
We.set(e,t,!1),_e.event.add(e,t,{namespace:!1,handler:function handler(e){var n=We.get(this,t),o,r;if(!(1&e.isTrigger&&this[t]))n.length&&(// ...and capture the result
// Abort handling of the native event
We.set(this,t,{value:_e.event.trigger(// Support: IE <=9 - 11+
// Extend with the prototype to reset the above stopImmediatePropagation()
_e.extend(n[0],_e.Event.prototype),n.slice(1),this)}),e.stopImmediatePropagation());else// Interrupt processing of the outer synthetic .trigger()ed event
// Saved data should be false in such cases, but might be a leftover capture object
// from an async native handler (gh-4350)
if(!!n.length)(_e.event.special[t]||{}).delegateType&&e.stopPropagation();else if(n=ue.call(arguments),We.set(this,t,n),o=a(this,t),this[t](),r=We.get(this,t),n!==r||o?We.set(this,t,!1):r={},n!==r)return e.stopImmediatePropagation(),e.preventDefault(),r.value;// If this is an inner synthetic event for an event with a bubbling surrogate
// (focus or blur), assume that the surrogate already propagated from triggering the
// native event and prevent that from happening again here.
// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
// bubbling surrogate propagates *after* the non-bubbling base), but that seems
// less bad than duplication.
// If this is a native event triggered above, everything is now in order
// Fire an inner synthetic event with the original arguments
}})):void(void 0===We.get(e,t)&&_e.event.add(e,t,k))}// Prefer a tbody over its parent table for containing new rows
function P(e,t){return r(e,"table")&&r(11===t.nodeType?t.firstChild:t,"tr")?_e(e).children("tbody")[0]||e:e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function E(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function I(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function B(e,t){var a,n,o,r,d,s,p,c;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(We.hasData(e)&&(r=We.access(e),d=We.set(t,r),c=r.events,c))for(o in delete d.handle,d.events={},c)for(a=0,n=c[o].length;a<n;a++)_e.event.add(t,o,c[o][a]);// 2. Copy user data
Ye.hasData(e)&&(s=Ye.access(e),p=_e.extend({},s),Ye.set(t,p))}}// Fix IE bugs, see support tests
function L(e,t){var a=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===a&&ot.test(e.type)?t.checked=e.checked:("input"===a||"textarea"===a)&&(t.defaultValue=e.defaultValue)}function j(e,t,n,o){t=ge.apply([],t);var r=0,d=e.length,l=t[0],s=we(l),p,c,u,g,f,h;// We can't cloneNode fragments that contain checked, in WebKit
if(s||1<d&&"string"==typeof l&&!ve.checkClone&&ft.test(l))return e.each(function(a){var r=e.eq(a);s&&(t[0]=l.call(this,a,r.html())),j(r,t,n,o)});if(d&&(p=C(t,e[0].ownerDocument,!1,e,o),c=p.firstChild,1===p.childNodes.length&&(p=c),c||o))// Require either new content or an interest in ignored elements to invoke the callback
{// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(u=_e.map(v(p,"script"),E),g=u.length;r<d;r++)f=p,r!==d-1&&(f=_e.clone(f,!0,!0),g&&_e.merge(u,v(f,"script"))),n.call(e[r],f,r);if(g)// Evaluate executable scripts on first document insertion
for(h=u[u.length-1].ownerDocument,_e.map(u,I),r=0;r<g;r++)f=u[r],it.test(f.type||"")&&!We.access(f,"globalEval")&&_e.contains(h,f)&&(f.src&&"module"!==(f.type||"").toLowerCase()?_e._evalUrl&&!f.noModule&&_e._evalUrl(f.src,{nonce:f.nonce||f.getAttribute("nonce")}):a(f.textContent.replace(ht,""),f,h))}return e}function R(e,t,a){for(var n=t?_e.filter(t,e):e,o=0,r;null!=(r=n[o]);o++)a||1!==r.nodeType||_e.cleanData(v(r)),r.parentNode&&(a&&$e(r)&&w(v(r,"script")),r.parentNode.removeChild(r));return e}function H(e,t,a){var// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
n=e.style,o,r,i,l;return a=a||yt(e),a&&(l=a.getPropertyValue(t)||a[t],""===l&&!$e(e)&&(l=_e.style(e,t)),!ve.pixelBoxStyles()&&mt.test(l)&&At.test(t)&&(o=n.width,r=n.minWidth,i=n.maxWidth,n.minWidth=n.maxWidth=n.width=l,l=a.width,n.width=o,n.minWidth=r,n.maxWidth=i)),void 0===l?l:// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
l+""}function M(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function get(){return e()?void delete this.get:(this.get=t).apply(this,arguments);// Hook needed; redefine it so that the support test is not executed again.
}}}// Return a vendor-prefixed property or undefined
function q(e){// Check for vendor prefixed names
for(var t=e[0].toUpperCase()+e.slice(1),a=bt.length;a--;)if(e=bt[a]+t,e in xt)return e}// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function O(e){var t=_e.cssProps[e]||vt[e];return t?t:e in xt?e:vt[e]=q(e)||e}function U(e,t,a){// Any relative (+/-) values have already been
// normalized at this point
var n=Je.exec(t);return n?// Guard against undefined "subtract", e.g., when used as in cssHooks
Z(0,n[2]-(a||0))+(n[3]||"px"):t}function F(e,t,a,n,o,r){var l="width"===t?1:0,d=0,s=0;// Adjustment may not be necessary
if(a===(n?"border":"content"))return 0;for(;4>l;l+=2)"margin"===a&&(s+=_e.css(e,a+Ge[l],!0,o)),n?("content"===a&&(s-=_e.css(e,"padding"+Ge[l],!0,o)),"margin"!==a&&(s-=_e.css(e,"border"+Ge[l]+"Width",!0,o))):(s+=_e.css(e,"padding"+Ge[l],!0,o),"padding"===a?d+=_e.css(e,"border"+Ge[l]+"Width",!0,o):s+=_e.css(e,"border"+Ge[l]+"Width",!0,o));// Account for positive content-box scroll gutter when requested by providing computedVal
return!n&&0<=r&&(s+=Z(0,G(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-s-d-.5// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
// Use an explicit zero to avoid NaN (gh-3964)
))||0),s}function V(e,t,a){// Start with computed style
var n=yt(e),// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
// Fake content-box until we know it's needed to know the true value.
o=!ve.boxSizingReliable()||a,r=o&&"border-box"===_e.css(e,"boxSizing",!1,n),i=r,l=H(e,t,n),d="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(mt.test(l)){if(!a)return l;l="auto"}// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
// Support: IE 9-11 only
// Also use offsetWidth/offsetHeight for when box sizing is unreliable
// We use getClientRects() to check for hidden/disconnected.
// In those cases, the computed value can be trusted to be border-box
// Adjust for the element's box model
return(!ve.boxSizingReliable()&&r||"auto"===l||!parseFloat(l)&&"inline"===_e.css(e,"display",!1,n))&&e.getClientRects().length&&(r="border-box"===_e.css(e,"boxSizing",!1,n),i=d in e,i&&(l=e[d])),l=parseFloat(l)||0,l+F(e,t,a||(r?"border":"content"),i,n,// Provide the current computed size to request scroll gutter calculation (gh-3589)
l)+"px"}function z(e,t,a,n,o){return new z.prototype.init(e,t,a,n,o)}function W(){Nt&&(!1===pe.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(W):e.setTimeout(W,_e.fx.interval),_e.fx.tick())}// Animations created synchronously will run synchronously
function Y(){return e.setTimeout(function(){Dt=void 0}),Dt=Date.now()}// Generate parameters to create a standard animation
function Q(e,t){var a=0,n={height:e},o;// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(t=t?1:0;4>a;a+=2-t)o=Ge[a],n["margin"+o]=n["padding"+o]=e;return t&&(n.opacity=n.width=e),n}function K(e,t,a){for(var n=($.tweeners[t]||[]).concat($.tweeners["*"]),o=0,r=n.length,i;o<r;o++)if(i=n[o].call(a,t,e))// We're done with this property
return i}function X(e,t,a){var n="width"in t||"height"in t,o=this,r={},i=e.style,l=e.nodeType&&tt(e),d=We.get(e,"fxshow"),s,p,c,u,g,f,h,m;// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(s in a.queue||(u=_e._queueHooks(e,"fx"),null==u.unqueued&&(u.unqueued=0,g=u.empty.fire,u.empty.fire=function(){u.unqueued||g()}),u.unqueued++,o.always(function(){o.always(function(){u.unqueued--,_e.queue(e,"fx").length||u.empty.fire()})})),t)if(p=t[s],_t.test(p)){if(delete t[s],c=c||"toggle"===p,p===(l?"hide":"show"))// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"===p&&d&&void 0!==d[s])l=!0;else continue;r[s]=d&&d[s]||_e.style(e,s)}// Bail out if this is a no-op like .hide().hide()
if(f=!_e.isEmptyObject(t),f||!_e.isEmptyObject(r))for(s in n&&1===e.nodeType&&(a.overflow=[i.overflow,i.overflowX,i.overflowY],h=d&&d.display,null==h&&(h=We.get(e,"display")),m=_e.css(e,"display"),"none"===m&&(h?m=h:(x([e],!0),h=e.style.display||h,m=_e.css(e,"display"),x([e]))),("inline"===m||"inline-block"===m&&null!=h)&&"none"===_e.css(e,"float")&&(!f&&(o.done(function(){i.display=h}),null==h&&(m=i.display,h="none"===m?"":m)),i.display="inline-block")),a.overflow&&(i.overflow="hidden",o.always(function(){i.overflow=a.overflow[0],i.overflowX=a.overflow[1],i.overflowY=a.overflow[2]})),f=!1,r)// Per-property setup
f||(d?"hidden"in d&&(l=d.hidden):d=We.access(e,"fxshow",{display:h}),c&&(d.hidden=!l),l&&x([e],!0),o.done(function(){for(s in l||x([e]),We.remove(e,"fxshow"),r)_e.style(e,s,r[s])})),f=K(l?d[s]:0,s,o),s in d||(d[s]=f.start,l&&(f.end=f.start,f.start=0));// Restrict "overflow" and "display" styles during box animations
}function J(e,t){var a,n,o,r,i;// camelCase, specialEasing and expand cssHook pass
for(a in e)if(n=f(a),o=t[n],r=e[a],Array.isArray(r)&&(o=r[1],r=e[a]=r[0]),a!==n&&(e[n]=r,delete e[a]),i=_e.cssHooks[n],i&&"expand"in i)// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(a in r=i.expand(r),delete e[n],r)a in e||(e[a]=r[a],t[a]=o);else t[n]=o}function $(e,t,a){var n=0,o=$.prefilters.length,r=_e.Deferred().always(function(){delete i.elem}),i=function(){if(p)return!1;for(var t=Dt||Y(),a=Z(0,l.startTime+l.duration-t),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
n=a/l.duration||0,o=1-n,i=0,d=l.tweens.length;i<d;i++)l.tweens[i].run(o);// If there's more to do, yield
return(r.notifyWith(e,[l,o,a]),1>o&&d)?a:(d||r.notifyWith(e,[l,1,0]),r.resolveWith(e,[l]),!1);// If this was an empty animation, synthesize a final progress notification
},l=r.promise({elem:e,props:_e.extend({},t),opts:_e.extend(!0,{specialEasing:{},easing:_e.easing._default},a),originalProperties:t,originalOptions:a,startTime:Dt||Y(),duration:a.duration,tweens:[],createTween:function(t,a){var n=_e.Tween(e,l.opts,t,a,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(n),n},stop:function stop(t){var a=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=t?l.tweens.length:0;if(p)return this;for(p=!0;a<n;a++)l.tweens[a].run(1);// Resolve when we played the last frame; otherwise, reject
return t?(r.notifyWith(e,[l,1,0]),r.resolveWith(e,[l,t])):r.rejectWith(e,[l,t]),this}}),d=l.props,s,p;for(J(d,l.opts.specialEasing);n<o;n++)if(s=$.prefilters[n].call(l,e,d,l.opts),s)return we(s.stop)&&(_e._queueHooks(l.elem,l.opts.queue).stop=s.stop.bind(s)),s;return _e.map(d,K,l),we(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),_e.fx.timer(_e.extend(i,{elem:e,anim:l,queue:l.opts.queue})),l}// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function ee(e){var t=e.match(Me)||[];return t.join(" ")}function te(e){return e.getAttribute&&e.getAttribute("class")||""}function ae(e){return Array.isArray(e)?e:"string"==typeof e?e.match(Me)||[]:[]}function ne(e,t,a,o){if(Array.isArray(t))_e.each(t,function(t,n){a||Ot.test(e)?o(e,n):ne(e+"["+("object"===_typeof(n)&&null!=n?t:"")+"]",n,a,o)});else if(!a&&"object"===n(t))// Serialize object item.
for(var r in t)ne(e+"["+r+"]",t[r],a,o);else// Serialize scalar item.
o(e,t)}// Serialize an array of form elements or a set of
// key/values into a query string
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function oe(e){// dataTypeExpression is optional and defaults to "*"
return function(t,a){"string"!=typeof t&&(a=t,t="*");var n=0,o=t.toLowerCase().match(Me)||[],r;if(we(a))// For each dataType in the dataTypeExpression
for(;r=o[n++];)// Prepend if requested
"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(a)):(e[r]=e[r]||[]).push(a)}}// Base inspection function for prefilters and transports
function re(e,t,a,n){function o(l){var d;return r[l]=!0,_e.each(e[l]||[],function(e,l){var s=l(t,a,n);return"string"!=typeof s||i||r[s]?i?!(d=s):void 0:(t.dataTypes.unshift(s),o(s),!1)}),d}var r={},i=e===Zt;return o(t.dataTypes[0])||!r["*"]&&o("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ie(e,t){var a=_e.ajaxSettings.flatOptions||{},n,o;for(n in t)void 0!==t[n]&&((a[n]?e:o||(o={}))[n]=t[n]);return o&&_e.extend(!0,e,o),e}/* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */function le(e,t,a){// Remove auto dataType and get content-type in the process
for(var n=e.contents,o=e.dataTypes,r,i,l,d;"*"===o[0];)o.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(r)for(i in n)if(n[i]&&n[i].test(r)){o.unshift(i);break}// Check to see if we have a response for the expected dataType
if(o[0]in a)l=o[0];else{// Try convertible dataTypes
for(i in a){if(!o[0]||e.converters[i+" "+o[0]]){l=i;break}d||(d=i)}// Or just use first one
l=l||d}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
return l?(l!==o[0]&&o.unshift(l),a[l]):void 0}/* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */function de(e,t,a,n){var o={},// Work with a copy of dataTypes in case we need to modify it for conversion
r=e.dataTypes.slice(),i,l,d,s,p;// Create converters map with lowercased keys
if(r[1])for(d in e.converters)o[d.toLowerCase()]=e.converters[d];// Convert to each sequential dataType
for(l=r.shift();l;)if(e.responseFields[l]&&(a[e.responseFields[l]]=t),!p&&n&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),p=l,l=r.shift(),l)// There's only work to do if current dataType is non-auto
if("*"===l)l=p;else if("*"!==p&&p!==l){// If none found, seek a pair
if(d=o[p+" "+l]||o["* "+l],!d)for(i in o)if(s=i.split(" "),s[1]===l&&(d=o[p+" "+s[0]]||o["* "+s[0]],d)){!0===d?d=o[i]:!0!==o[i]&&(l=s[0],r.unshift(s[1]));break}// Apply converter (if not an equivalence)
if(!0!==d)// Unless errors are allowed to bubble, catch and return them
if(d&&e.throws)t=d(t);else try{t=d(t)}catch(t){return{state:"parsererror",error:d?t:"No conversion from "+p+" to "+l}}}return{state:"success",data:t}}var se=[],pe=e.document,ce=Object.getPrototypeOf,ue=se.slice,ge=se.concat,fe=se.push,he=se.indexOf,me={},ye=me.toString,Ae=me.hasOwnProperty,be=Ae.toString,xe=be.call(Object),ve={},we=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},Ce=function(e){return null!=e&&e===e.window},ke={type:!0,src:!0,nonce:!0,noModule:!0},Te="3.4.1",// Define a local copy of jQuery
_e=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new _e.fn.init(e,t)},// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
Se=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;_e.fn=_e.prototype={// The current version of jQuery being used
jquery:Te,constructor:_e,// The default length of a jQuery object is 0
length:0,toArray:function toArray(){return ue.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function get(e){// Return all the elements in a clean array
return null==e?ue.call(this):0>e?this[e+this.length]:this[e];// Return just the one element from the set
},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function pushStack(e){// Build a new jQuery matched element set
var t=_e.merge(this.constructor(),e);// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return t.prevObject=this,t},// Execute a callback for every element in the matched set.
each:function each(e){return _e.each(this,e)},map:function map(e){return this.pushStack(_e.map(this,function(t,a){return e.call(t,a,t)}))},slice:function slice(){return this.pushStack(ue.apply(this,arguments))},first:function first(){return this.eq(0)},last:function last(){return this.eq(-1)},eq:function eq(e){var t=this.length,a=+e+(0>e?t:0);return this.pushStack(0<=a&&a<t?[this[a]]:[])},end:function end(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:fe,sort:se.sort,splice:se.splice},_e.extend=_e.fn.extend=function(){var e=arguments[0]||{},t=1,a=arguments.length,n=!1,o,r,l,d,s,p;// Handle a deep copy situation
for("boolean"==typeof e&&(n=e,e=arguments[t]||{},t++),"object"===_typeof(e)||we(e)||(e={}),t===a&&(e=this,t--);t<a;t++)// Only deal with non-null/undefined values
if(null!=(o=arguments[t]))// Extend the base object
for(r in o)// Prevent Object.prototype pollution
// Prevent never-ending loop
(d=o[r],"__proto__"!==r&&e!==d)&&(n&&d&&(_e.isPlainObject(d)||(s=Array.isArray(d)))?(l=e[r],p=s&&!Array.isArray(l)?[]:s||_e.isPlainObject(l)?l:{},s=!1,e[r]=_e.extend(n,p,d)):void 0!==d&&(e[r]=d));// Recurse if we're merging plain objects or arrays
// Return the modified object
return e},_e.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(Te+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function error(e){throw new Error(e)},noop:function noop(){},isPlainObject:function isPlainObject(e){var t,a;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!!(e&&"[object Object]"===ye.call(e))&&((t=ce(e),!!!t)||(a=Ae.call(t,"constructor")&&t.constructor,"function"==typeof a&&be.call(a)===xe));// Objects with prototype are plain iff they were constructed by a global Object function
},isEmptyObject:function isEmptyObject(e){for(var t in e)return!1;return!0},// Evaluates a script in a global context
globalEval:function globalEval(e,t){a(e,{nonce:t&&t.nonce})},each:function each(e,t){var a=0,n;if(o(e))for(n=e.length;a<n&&!1!==t.call(e[a],a,e[a]);a++);else for(a in e)if(!1===t.call(e[a],a,e[a]))break;return e},// Support: Android <=4.0 only
trim:function trim(e){return null==e?"":(e+"").replace(Se,"")},// results is for internal usage only
makeArray:function makeArray(e,t){var a=t||[];return null!=e&&(o(Object(e))?_e.merge(a,"string"==typeof e?[e]:e):fe.call(a,e)),a},inArray:function inArray(e,t,a){return null==t?-1:he.call(t,e,a)},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function merge(e,t){for(var a=+t.length,n=0,o=e.length;n<a;n++)e[o++]=t[n];return e.length=o,e},grep:function grep(e,t,a){// Go through the array, only saving the items
// that pass the validator function
for(var n=[],o=0,r=e.length,l;o<r;o++)l=!t(e[o],o),l!==!a&&n.push(e[o]);return n},// arg is for internal usage only
map:function map(e,t,a){var n=0,r=[],l,d;// Go through the array, translating each of the items to their new values
if(o(e))for(l=e.length;n<l;n++)d=t(e[n],n,a),null!=d&&r.push(d);// Go through every key on the object,
else for(n in e)d=t(e[n],n,a),null!=d&&r.push(d);// Flatten any nested arrays
return ge.apply([],r)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:ve}),"function"==typeof Symbol&&(_e.fn[Symbol.iterator]=se[Symbol.iterator]),_e.each(["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error","Symbol"],function(e,t){me["[object "+t+"]"]=t.toLowerCase()});var De=/*!
     * Sizzle CSS Selector Engine v2.3.4
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2019-04-08
     */function(e){function t(e,t,a,n){var o=t&&t.ownerDocument,// nodeType defaults to 9, since context defaults to document
r=t?t.nodeType:9,l,d,s,p,c,g,h;// Return early from calls with invalid selector or context
if(a=a||[],"string"!=typeof e||!e||1!==r&&9!==r&&11!==r)return a;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!n&&((t?t.ownerDocument||t:C)!==ye&&me(t),t=t||ye,be)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==r&&(c=G.exec(e)))// ID selector
if(!(l=c[1])){if(c[2])return R.apply(a,t.getElementsByTagName(e)),a;// Class selector
if((l=c[3])&&ie.getElementsByClassName&&t.getElementsByClassName)return R.apply(a,t.getElementsByClassName(l)),a}else// Document context
if(9===r){if(!(s=t.getElementById(l)))return a;// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(s.id===l)return a.push(s),a}// Element context
else// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(o&&(s=o.getElementById(l))&&Ce(t,s)&&s.id===l)return a.push(s),a;// Type selector
// Take advantage of querySelectorAll
if(ie.qsa&&!N[e+" "]&&(!xe||!xe.test(e))&&(// Support: IE 8 only
// Exclude object elements
1!==r||"object"!==t.nodeName.toLowerCase())){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// Thanks to Andrew Dupont for this technique.
if(h=e,o=t,1===r&&V.test(e)){for((p=t.getAttribute("id"))?p=p.replace(te,ae):t.setAttribute("id",p=w),g=pe(e),d=g.length;d--;)g[d]="#"+p+" "+f(g[d]);h=g.join(","),o=Z.test(e)&&u(t.parentNode)||t}try{return R.apply(a,o.querySelectorAll(h)),a}catch(t){N(e,!0)}finally{p===w&&t.removeAttribute("id")}}}// All others
return ue(e.replace(O,"$1"),t,a,n)}/**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */function a(){function e(a,n){return t.push(a+" ")>le.cacheLength&&delete e[t.shift()],e[a+" "]=n}var t=[];return e}/**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */function n(e){return e[w]=!0,e}/**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */function o(e){var t=ye.createElement("fieldset");try{return!!e(t)}catch(t){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}/**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */function r(e,t){for(var a=e.split("|"),n=a.length;n--;)le.attrHandle[a[n]]=t}/**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */function l(e,t){var a=t&&e,n=a&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;// Use IE sourceIndex if available on both nodes
if(n)return n;// Check if b follows a
if(a)for(;a=a.nextSibling;)if(a===t)return-1;return e?1:-1}/**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */function d(e){return function(t){var a=t.nodeName.toLowerCase();return"input"===a&&t.type===e}}/**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */function s(e){return function(t){var a=t.nodeName.toLowerCase();return("input"===a||"button"===a)&&t.type===e}}/**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */function p(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
/* jshint -W018 */t.isDisabled!==!e&&oe(t)===e:t.disabled===e:!!("label"in t)&&t.disabled===e;// Remaining elements are neither :enabled nor :disabled
}}/**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */function c(e){return n(function(t){return t=+t,n(function(a,n){// Match elements found at the specified indexes
for(var o=e([],a.length,t),r=o.length,l;r--;)a[l=o[r]]&&(a[l]=!(n[l]=a[l]))})})}/**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */function u(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}// Expose support vars for convenience
// Easy API for creating new setFilters
function g(){}function f(e){for(var t=0,a=e.length,n="";t<a;t++)n+=e[t].value;return n}function h(e,t,a){var n=t.dir,o=t.next,r=o||n,i=a&&"parentNode"===r,l=T++;return t.first?// Check against closest ancestor/preceding element
function(t,a,o){for(;t=t[n];)if(1===t.nodeType||i)return e(t,a,o);return!1}:// Check against all ancestor/preceding elements
function(t,a,d){var s=[k,l],p,c,u;// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(d){for(;t=t[n];)if((1===t.nodeType||i)&&e(t,a,d))return!0;}else for(;t=t[n];)if(1===t.nodeType||i)if(u=t[w]||(t[w]={}),c=u[t.uniqueID]||(u[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[n]||t;else{if((p=c[r])&&p[0]===k&&p[1]===l)// Assign to newCache so results back-propagate to previous elements
return s[2]=p[2];// A match means we're done; a fail means we have to keep checking
if(c[r]=s,s[2]=e(t,a,d))return!0}return!1}}function m(e){return 1<e.length?function(t,a,n){for(var o=e.length;o--;)if(!e[o](t,a,n))return!1;return!0}:e[0]}function y(e,a,n){for(var o=0,r=a.length;o<r;o++)t(e,a[o],n);return n}function A(e,t,a,n,o){for(var r=[],l=0,d=e.length,s;l<d;l++)(s=e[l])&&(!a||a(s,n,o))&&(r.push(s),null!=t&&t.push(l));return r}function b(e,t,a,o,r,i){return o&&!o[w]&&(o=b(o)),r&&!r[w]&&(r=b(r,i)),n(function(n,l,d,s){var p=[],c=[],u=l.length,// Get initial elements from seed or context
g=n||y(t||"*",d.nodeType?[d]:d,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
f=e&&(n||!t)?A(g,p,e,d,s):g,h=a?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
r||(n?e:u||o)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
l:f,m,b,x;// Find primary matches
// Apply postFilter
if(a&&a(f,h,d,s),o)for(m=A(h,c),o(m,[],d,s),b=m.length;b--;)(x=m[b])&&(h[c[b]]=!(f[c[b]]=x));if(!n)h=A(h===l?h.splice(u,h.length):h),r?r(null,l,h,s):R.apply(l,h);else if(r||e){if(r){for(m=[],b=h.length;b--;)(x=h[b])&&// Restore matcherIn since elem is not yet a final match
m.push(f[b]=x);r(null,h=[],m,s)}// Move matched elements from seed to results to keep them synchronized
for(b=h.length;b--;)(x=h[b])&&-1<(m=r?M(n,x):p[b])&&(n[m]=!(l[m]=x))}// Add elements to results, through postFinder if defined
})}function x(e){for(var t=e.length,a=le.relative[e[0].type],n=a||le.relative[" "],o=a?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
r=h(function(e){return e===s},n,!0),l=h(function(e){return-1<M(s,e)},n,!0),d=[function(e,t,n){var o=!a&&(n||t!==ge)||((s=t).nodeType?r(e,t,n):l(e,t,n));// Avoid hanging onto element (issue #299)
return s=null,o}],s,p,c;o<t;o++)if(p=le.relative[e[o].type])d=[h(m(d),p)];else{// Return special upon seeing a positional matcher
if(p=le.filter[e[o].type].apply(null,e[o].matches),p[w]){for(c=++o;c<t&&!le.relative[e[c].type];c++);return b(1<o&&m(d),1<o&&f(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
e.slice(0,o-1).concat({value:" "===e[o-2].type?"*":""})).replace(O,"$1"),p,o<c&&x(e.slice(o,c)),c<t&&x(e=e.slice(c)),c<t&&f(e))}d.push(p)}return m(d)}function v(e,a){var o=0<a.length,r=0<e.length,i=function(n,l,d,s,p){var c=0,u="0",g=n&&[],f=[],h=ge,// We must always have either seed elements or outermost context
m=n||r&&le.find.TAG("*",p),// Use integer dirruns iff this is the outermost matcher
y=k+=null==h?1:Math.random()||.1,b=m.length,x,v,w;// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(p&&(ge=l===ye||l||p);u!==b&&null!=(x=m[u]);u++){if(r&&x){for(v=0,l||x.ownerDocument===ye||(me(x),d=!be);w=e[v++];)if(w(x,l||ye,d)){s.push(x);break}p&&(k=y)}// Track unmatched elements for set filters
o&&((x=!w&&x)&&c--,n&&g.push(x))}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(c+=u,o&&u!==c){for(v=0;w=a[v++];)w(g,f,l,d);if(n){// Reintegrate element matches to eliminate the need for sorting
if(0<c)for(;u--;)g[u]||f[u]||(f[u]=B.call(s));// Discard index placeholder values to get only actual matches
f=A(f)}// Add matches to results
R.apply(s,f),p&&!n&&0<f.length&&1<c+a.length&&t.uniqueSort(s)}// Override manipulation of globals by nested matchers
return p&&(k=y,ge=h),g};return o?n(i):i}var// Instance-specific data
w="sizzle"+1*new Date,C=e.document,k=0,T=0,_=a(),S=a(),D=a(),N=a(),P=function(e,t){return e===t&&(he=!0),0},// Instance methods
E={}.hasOwnProperty,I=[],B=I.pop,L=I.push,R=I.push,H=I.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
M=function(e,t){for(var a=0,n=e.length;a<n;a++)if(e[a]===t)return a;return-1},// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
q=/[\x20\t\r\n\f]+/g,O=/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,U=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,F=/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,V=/[\x20\t\r\n\f]|>/,z=/:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,W=/^(?:\\.|[\w-]|[^\0-\xa0])+$/,Y={ID:/^#((?:\\.|[\w-]|[^\0-\xa0])+)/,CLASS:/^\.((?:\\.|[\w-]|[^\0-\xa0])+)/,TAG:/^((?:\\.|[\w-]|[^\0-\xa0])+|[*])/,ATTR:/^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\]/,PSEUDO:/^:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},Q=/HTML$/i,K=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
G=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
$=/\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,ee=function(e,t,a){var n=String.fromCharCode,o="0x"+t-65536;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return o!=o||a?t:0>o?// BMP codepoint
n(o+65536):// Supplemental Plane codepoint (surrogate pair)
n(55296|o>>10,56320|1023&o)},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ae=function(e,t){return t?"\0"===e?"\uFFFD":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;// Other potentially-special ASCII characters get backslash-escaped
},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
ne=function(){me()},oe=h(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"}),re,ie,le,de,se,pe,ce,ue,ge,fe,he,// Local document vars
me,ye,Ae,be,xe,ve,we,Ce;// Optimize for push.apply( _, NodeList )
try{R.apply(I=H.call(C.childNodes),C.childNodes),I[C.childNodes.length].nodeType}catch(t){R={apply:I.length?// Leverage slice if possible
function(e,t){L.apply(e,H.call(t))}:// Support: IE<9
// Otherwise append directly
function(e,t){// Can't trust NodeList.length
for(var a=e.length,n=0;e[a++]=t[n++];);e.length=a-1}}}// Add button/input type pseudos
for(re in ie=t.support={},se=t.isXML=function(e){var t=e.namespaceURI,a=(e.ownerDocument||e).documentElement;// Support: IE <=8
// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
// https://bugs.jquery.com/ticket/4833
return!Q.test(t||a&&a.nodeName||"HTML")},me=t.setDocument=function(e){var t=e?e.ownerDocument||e:C,a,n;// Return early if doc is invalid or already selected
return t!==ye&&9===t.nodeType&&t.documentElement?(ye=t,Ae=ye.documentElement,be=!se(ye),C!==ye&&(n=ye.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",ne,!1):n.attachEvent&&n.attachEvent("onunload",ne)),ie.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),ie.getElementsByTagName=o(function(e){return e.appendChild(ye.createComment("")),!e.getElementsByTagName("*").length}),ie.getElementsByClassName=J.test(ye.getElementsByClassName),ie.getById=o(function(e){return Ae.appendChild(e).id=w,!ye.getElementsByName||!ye.getElementsByName(w).length}),ie.getById?(le.filter.ID=function(e){var t=e.replace($,ee);return function(e){return e.getAttribute("id")===t}},le.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&be){var a=t.getElementById(e);return a?[a]:[]}}):(le.filter.ID=function(e){var t=e.replace($,ee);return function(e){var a="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return a&&a.value===t}},le.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&be){var a=t.getElementById(e),n,o,r;if(a){if(n=a.getAttributeNode("id"),n&&n.value===e)return[a];// Fall back on getElementsByName
for(r=t.getElementsByName(e),o=0;a=r[o++];)if(n=a.getAttributeNode("id"),n&&n.value===e)return[a]}return[]}}),le.find.TAG=ie.getElementsByTagName?function(e,t){return"undefined"==typeof t.getElementsByTagName?ie.qsa?t.querySelectorAll(e):void 0:t.getElementsByTagName(e)}:function(e,t){var a=[],n=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e),r;// Filter out possible comments
if("*"===e){for(;r=o[n++];)1===r.nodeType&&a.push(r);return a}return o},le.find.CLASS=ie.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&be)return t.getElementsByClassName(e)},ve=[],xe=[],(ie.qsa=J.test(ye.querySelectorAll))&&(o(function(e){Ae.appendChild(e).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&xe.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||xe.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"),e.querySelectorAll("[id~="+w+"-]").length||xe.push("~="),e.querySelectorAll(":checked").length||xe.push(":checked"),e.querySelectorAll("a#"+w+"+*").length||xe.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=ye.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&xe.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&xe.push(":enabled",":disabled"),Ae.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&xe.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),xe.push(",.*:")})),(ie.matchesSelector=J.test(we=Ae.matches||Ae.webkitMatchesSelector||Ae.mozMatchesSelector||Ae.oMatchesSelector||Ae.msMatchesSelector))&&o(function(e){ie.disconnectedMatch=we.call(e,"*"),we.call(e,"[s!='']:x"),ve.push("!=",":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")}),xe=xe.length&&new RegExp(xe.join("|")),ve=ve.length&&new RegExp(ve.join("|")),a=J.test(Ae.compareDocumentPosition),Ce=a||J.test(Ae.contains)?function(e,t){var a=9===e.nodeType?e.documentElement:e,n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&(a.contains?a.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},P=a?function(e,t){// Flag for duplicate removal
if(e===t)return he=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var a=!e.compareDocumentPosition-!t.compareDocumentPosition;return a?a:(a=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):// Otherwise we know they are disconnected
1,1&a||!ie.sortDetached&&t.compareDocumentPosition(e)===a?e===ye||e.ownerDocument===C&&Ce(C,e)?-1:t===ye||t.ownerDocument===C&&Ce(C,t)?1:fe?M(fe,e)-M(fe,t):0:4&a?-1:1);// Calculate position if both inputs belong to the same document
}:function(e,t){// Exit early if the nodes are identical
if(e===t)return he=!0,0;var a=0,n=e.parentNode,o=t.parentNode,r=[e],d=[t],s;// Parentless nodes are either documents or disconnected
if(!n||!o)return e===ye?-1:t===ye?1:n?-1:o?1:fe?M(fe,e)-M(fe,t):0;// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(n===o)return l(e,t);for(s=e;s=s.parentNode;)r.unshift(s);for(s=t;s=s.parentNode;)d.unshift(s);// Walk down the tree looking for a discrepancy
for(;r[a]===d[a];)a++;return a?// Do a sibling check if the nodes have a common ancestor
l(r[a],d[a]):// Otherwise nodes in our document sort first
r[a]===C?-1:d[a]===C?1:0},ye):ye;// Update global variables
},t.matches=function(e,a){return t(e,null,null,a)},t.matchesSelector=function(e,a){if((e.ownerDocument||e)!==ye&&me(e),ie.matchesSelector&&be&&!N[a+" "]&&(!ve||!ve.test(a))&&(!xe||!xe.test(a)))try{var n=we.call(e,a);// IE 9's matchesSelector returns false on disconnected nodes
if(n||ie.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(t){N(a,!0)}return 0<t(a,ye,null,[e]).length},t.contains=function(e,t){return(e.ownerDocument||e)!==ye&&me(e),Ce(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==ye&&me(e);var a=le.attrHandle[t.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
n=a&&E.call(le.attrHandle,t.toLowerCase())?a(e,t,!be):void 0;return void 0===n?ie.attributes||!be?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null:n},t.escape=function(e){return(e+"").replace(te,ae)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t=[],a=0,n=0,o;// Unless we *know* we can detect duplicates, assume their presence
if(he=!ie.detectDuplicates,fe=!ie.sortStable&&e.slice(0),e.sort(P),he){for(;o=e[n++];)o===e[n]&&(a=t.push(n));for(;a--;)e.splice(t[a],1)}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return fe=null,e},de=t.getText=function(e){var t="",a=0,n=e.nodeType,o;if(!n)// If no nodeType, this is expected to be an array
for(;o=e[a++];)// Do not traverse comment nodes
t+=de(o);else if(1===n||9===n||11===n){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)t+=de(e)}else if(3===n||4===n)return e.nodeValue;// Do not include comment or processing instruction nodes
return t},le=t.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:n,match:Y,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function ATTR(e){return e[1]=e[1].replace($,ee),e[3]=(e[3]||e[4]||e[5]||"").replace($,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function CHILD(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(!e[3]&&t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function PSEUDO(e){var t=!e[6]&&e[2],a;return Y.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":t&&z.test(t)&&(// Get excess from tokenize (recursively)
a=pe(t,!0))&&(// advance to the next closing parenthesis
a=t.indexOf(")",t.length-a)-t.length)&&(e[0]=e[0].slice(0,a),e[2]=t.slice(0,a)),e.slice(0,3));// Accept quoted arguments as-is
}},filter:{TAG:function TAG(e){var t=e.replace($,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function CLASS(e){var t=_[e+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"([\\x20\\t\\r\\n\\f]|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function ATTR(e,a,n){return function(o){var r=t.attr(o,e);return null==r?"!="===a:!a||(r+="","="===a?r===n:"!="===a?r!==n:"^="===a?n&&0===r.indexOf(n):"*="===a?n&&-1<r.indexOf(n):"$="===a?n&&r.slice(-n.length)===n:"~="===a?-1<(" "+r.replace(q," ")+" ").indexOf(n):"|="==a&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function CHILD(e,t,a,n,o){var r="nth"!==e.slice(0,3),i="last"!==e.slice(-4),l="of-type"===t;return 1===n&&0===o?// Shortcut for :nth-*(n)
function(e){return!!e.parentNode}:function(t,a,d){var s=r===i?"previousSibling":"nextSibling",p=t.parentNode,c=l&&t.nodeName.toLowerCase(),u=!d&&!l,g=!1,f,h,m,y,A,b;if(p){// :(first|last|only)-(child|of-type)
if(r){for(;s;){for(y=t;y=y[s];)if(l?y.nodeName.toLowerCase()===c:1===y.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
b=s="only"===e&&!b&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(b=[i?p.firstChild:p.lastChild],i&&u){for(y=p,m=y[w]||(y[w]={}),h=m[y.uniqueID]||(m[y.uniqueID]={}),f=h[e]||[],A=f[0]===k&&f[1],g=A&&f[2],y=A&&p.childNodes[A];y=++A&&y&&y[s]||(// Fallback to seeking `elem` from the start
g=A=0)||b.pop();)// When found, cache indexes on `parent` and break
if(1===y.nodeType&&++g&&y===t){h[e]=[k,A,g];break}}else// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(u&&(y=t,m=y[w]||(y[w]={}),h=m[y.uniqueID]||(m[y.uniqueID]={}),f=h[e]||[],A=f[0]===k&&f[1],g=A),!1===g)// Use the same loop as above to seek `elem` from the start
for(;(y=++A&&y&&y[s]||(g=A=0)||b.pop())&&!((l?y.nodeName.toLowerCase()===c:1===y.nodeType)&&++g&&(u&&(m=y[w]||(y[w]={}),h=m[y.uniqueID]||(m[y.uniqueID]={}),h[e]=[k,g]),y===t)););// Incorporate the offset, then check against cycle size
return g-=o,g===n||0==g%n&&0<=g/n}}},PSEUDO:function PSEUDO(e,a){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var o=le.pseudos[e]||le.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e),r;// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return o[w]?o(a):1<o.length?(r=[e,e,"",a],le.setFilters.hasOwnProperty(e.toLowerCase())?n(function(e,t){for(var n=o(e,a),r=n.length,l;r--;)l=M(e,n[r]),e[l]=!(t[l]=n[r])}):function(e){return o(e,0,r)}):o;// But maintain support for old signatures
}},pseudos:{// Potentially complex pseudos
not:n(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],a=[],o=ce(e.replace(O,"$1"));return o[w]?n(function(e,t,a,n){// Match elements unmatched by `matcher`
for(var r=o(e,null,n,[]),l=e.length,d;l--;)(d=r[l])&&(e[l]=!(t[l]=d))}):function(e,n,r){return t[0]=e,o(t,null,r,a),t[0]=null,!a.pop()}}),has:n(function(e){return function(a){return 0<t(e,a).length}}),contains:n(function(e){return e=e.replace($,ee),function(t){return-1<(t.textContent||de(t)).indexOf(e)}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:n(function(e){return W.test(e||"")||t.error("unsupported lang: "+e),e=e.replace($,ee).toLowerCase(),function(t){var a;do if(a=be?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return a=a.toLowerCase(),a===e||0===a.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),// Miscellaneous
target:function target(t){var a=e.location&&e.location.hash;return a&&a.slice(1)===t.id},root:function root(e){return e===Ae},focus:function focus(e){return e===ye.activeElement&&(!ye.hasFocus||ye.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:p(!1),disabled:p(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function selected(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function empty(e){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(6>e.nodeType)return!1;return!0},parent:function parent(e){return!le.pseudos.empty(e)},// Element/input types
header:function header(e){return X.test(e.nodeName)},input:function input(e){return K.test(e.nodeName)},button:function button(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function text(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,a){return[0>a?a+t:a]}),even:c(function(e,t){for(var a=0;a<t;a+=2)e.push(a);return e}),odd:c(function(e,t){for(var a=1;a<t;a+=2)e.push(a);return e}),lt:c(function(e,t,a){for(var n=0>a?a+t:a>t?t:a;0<=--n;)e.push(n);return e}),gt:c(function(e,t,a){for(var n=0>a?a+t:a;++n<t;)e.push(n);return e})}},le.pseudos.nth=le.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})le.pseudos[re]=d(re);for(re in{submit:!0,reset:!0})le.pseudos[re]=s(re);return g.prototype=le.filters=le.pseudos,le.setFilters=new g,pe=t.tokenize=function(e,a){var n=S[e+" "],o,r,i,l,d,s,p;if(n)return a?0:n.slice(0);for(d=e,s=[],p=le.preFilter;d;){// Filters
for(l in(!o||(r=U.exec(d)))&&(r&&(d=d.slice(r[0].length)||d),s.push(i=[])),o=!1,(r=F.exec(d))&&(o=r.shift(),i.push({value:o,// Cast descendant combinators to space
type:r[0].replace(O," ")}),d=d.slice(o.length)),le.filter)(r=Y[l].exec(d))&&(!p[l]||(r=p[l](r)))&&(o=r.shift(),i.push({value:o,type:l,matches:r}),d=d.slice(o.length));if(!o)break}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return a?d.length:d?t.error(e):// Cache the tokens
S(e,s).slice(0)},ce=t.compile=function(e,t/* Internal Use Only */){var a=[],n=[],o=D[e+" "],r;if(!o){for(t||(t=pe(e)),r=t.length;r--;)o=x(t[r]),o[w]?a.push(o):n.push(o);// Cache the compiled function
o=D(e,v(n,a)),o.selector=e}return o},ue=t.select=function(e,t,a,n){var o="function"==typeof e&&e,r=!n&&pe(e=o.selector||e),l,d,s,p,c;// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(a=a||[],1===r.length){if(d=r[0]=r[0].slice(0),2<d.length&&"ID"===(s=d[0]).type&&9===t.nodeType&&be&&le.relative[d[1].type]){if(t=(le.find.ID(s.matches[0].replace($,ee),t)||[])[0],!t)return a;// Precompiled matchers will still verify ancestry, so step up a level
o&&(t=t.parentNode),e=e.slice(d.shift().value.length)}// Fetch a seed set for right-to-left matching
for(l=Y.needsContext.test(e)?0:d.length;l--&&(s=d[l],!le.relative[p=s.type]);)if((c=le.find[p])&&(n=c(s.matches[0].replace($,ee),Z.test(d[0].type)&&u(t.parentNode)||t)))// Search, expanding context for leading sibling combinators
{if(d.splice(l,1),e=n.length&&f(d),!e)return R.apply(a,n),a;break}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(o||ce(e,r))(n,t,!be,a,!t||Z.test(e)&&u(t.parentNode)||t),a},ie.sortStable=w.split("").sort(P).join("")===w,ie.detectDuplicates=!!he,me(),ie.sortDetached=o(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(ye.createElement("fieldset"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,a){if(!a)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),ie.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,a){if(!a&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",function(e,t,a){var n;if(!a)return!0===e[t]?t.toLowerCase():(n=e.getAttributeNode(t))&&n.specified?n.value:null}),t}(e);_e.find=De,_e.expr=De.selectors,_e.expr[":"]=_e.expr.pseudos,_e.uniqueSort=_e.unique=De.uniqueSort,_e.text=De.getText,_e.isXMLDoc=De.isXML,_e.contains=De.contains,_e.escapeSelector=De.escape;var Ne=function(e,t,a){for(var n=[];(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(void 0!==a&&_e(e).is(a))break;n.push(e)}return n},Pe=function siblings(e,t){for(var a=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&a.push(e);return a},Ee=_e.expr.match.needsContext,Ie=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;_e.filter=function(e,t,a){var n=t[0];return a&&(e=":not("+e+")"),1===t.length&&1===n.nodeType?_e.find.matchesSelector(n,e)?[n]:[]:_e.find.matches(e,_e.grep(t,function(e){return 1===e.nodeType}))},_e.fn.extend({find:function find(e){var t=this.length,a=this,n,o;if("string"!=typeof e)return this.pushStack(_e(e).filter(function(){for(n=0;n<t;n++)if(_e.contains(a[n],this))return!0}));for(o=this.pushStack([]),n=0;n<t;n++)_e.find(e,a[n],o);return 1<t?_e.uniqueSort(o):o},filter:function filter(e){return this.pushStack(i(this,e||[],!1))},not:function not(e){return this.pushStack(i(this,e||[],!0))},is:function is(e){return!!i(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&Ee.test(e)?_e(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Be=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Le=_e.fn.init=function(e,t,a){var n,o;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(a=a||je,"string"==typeof e){// Match html or make sure no context is specified for #id
if(n="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:Be.exec(e),n&&(n[1]||!t)){// HANDLE: $(html) -> $(array)
if(n[1]){// HANDLE: $(html, props)
if(t=t instanceof _e?t[0]:t,_e.merge(this,_e.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:pe,!0)),Ie.test(n[1])&&_e.isPlainObject(t))for(n in t)// Properties of context are called as methods if possible
we(this[n])?this[n](t[n]):this.attr(n,t[n]);return this;// HANDLE: $(#id)
}// HANDLE: $(expr, $(...))
return o=pe.getElementById(n[2]),o&&(this[0]=o,this.length=1),this}// HANDLE: $(DOMElement)
return!t||t.jquery?(t||a).find(e):this.constructor(t).find(e)}return e.nodeType?(this[0]=e,this.length=1,this):we(e)?void 0===a.ready?// Execute immediately if ready is not present
e(_e):a.ready(e):_e.makeArray(e,this)},je;// Give the init function the jQuery prototype for later instantiation
Le.prototype=_e.fn,je=_e(pe);var Re=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
He={children:!0,contents:!0,next:!0,prev:!0};_e.fn.extend({has:function has(e){var t=_e(e,this),a=t.length;return this.filter(function(){for(var e=0;e<a;e++)if(_e.contains(this,t[e]))return!0})},closest:function closest(e,t){var a=0,n=this.length,o=[],r="string"!=typeof e&&_e(e),l;// Positional selectors never match, since there's no _selection_ context
if(!Ee.test(e))for(;a<n;a++)for(l=this[a];l&&l!==t;l=l.parentNode)// Always skip document fragments
if(11>l.nodeType&&(r?-1<r.index(l):// Don't pass non-elements to Sizzle
1===l.nodeType&&_e.find.matchesSelector(l,e))){o.push(l);break}return this.pushStack(1<o.length?_e.uniqueSort(o):o)},// Determine the position of an element within the set
index:function index(e){// No argument, return index in parent
return e?"string"==typeof e?he.call(_e(e),this[0]):he.call(this,// If it receives a jQuery object, the first element is used
e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;// Index in selector
// Locate the position of the desired element
},add:function add(e,t){return this.pushStack(_e.uniqueSort(_e.merge(this.get(),_e(e,t))))},addBack:function addBack(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),_e.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function parents(e){return Ne(e,"parentNode")},parentsUntil:function parentsUntil(e,t,a){return Ne(e,"parentNode",a)},next:function next(e){return l(e,"nextSibling")},prev:function prev(e){return l(e,"previousSibling")},nextAll:function nextAll(e){return Ne(e,"nextSibling")},prevAll:function prevAll(e){return Ne(e,"previousSibling")},nextUntil:function nextUntil(e,t,a){return Ne(e,"nextSibling",a)},prevUntil:function prevUntil(e,t,a){return Ne(e,"previousSibling",a)},siblings:function siblings(e){return Pe((e.parentNode||{}).firstChild,e)},children:function children(e){return Pe(e.firstChild)},contents:function contents(e){return"undefined"==typeof e.contentDocument?(r(e,"template")&&(e=e.content||e),_e.merge([],e.childNodes)):e.contentDocument;// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
}},function(e,t){_e.fn[e]=function(a,n){var o=_e.map(this,t,a);return"Until"!==e.slice(-5)&&(n=a),n&&"string"==typeof n&&(o=_e.filter(n,o)),1<this.length&&(!He[e]&&_e.uniqueSort(o),Re.test(e)&&o.reverse()),this.pushStack(o)}});var Me=/[^\x20\t\r\n\f]+/g;_e.Callbacks=function(e){e="string"==typeof e?d(e):_e.extend({},e);var// Actual callback list
t=[],// Queue of execution data for repeatable lists
a=[],// Index of currently firing callback (modified by add/remove as needed)
o=-1,// Fire callbacks
r=function(){for(c=c||e.once,p=l=!0;a.length;o=-1)for(s=a.shift();++o<t.length;)// Run callback and check for early termination
!1===t[o].apply(s[0],s[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
o=t.length,s=!1);// Forget the data if we're done with it
e.memory||(s=!1),l=!1,c&&(s?t=[]:t="")},// Actual Callbacks object
i={// Add a callback or a collection of callbacks to the list
add:function add(){return t&&(s&&!l&&(o=t.length-1,a.push(s)),function a(o){_e.each(o,function(o,r){we(r)?(!e.unique||!i.has(r))&&t.push(r):r&&r.length&&"string"!==n(r)&&a(r)})}(arguments),s&&!l&&r()),this},// Remove a callback from the list
remove:function remove(){return _e.each(arguments,function(e,a){for(var n;-1<(n=_e.inArray(a,t,n));)t.splice(n,1),n<=o&&o--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function has(e){return e?-1<_e.inArray(e,t):0<t.length},// Remove all callbacks from the list
empty:function empty(){return t&&(t=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function disable(){return c=a=[],t=s="",this},disabled:function disabled(){return!t},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function lock(){return c=a=[],s||l||(t=s=""),this},locked:function locked(){return!!c},// Call all callbacks with the given context and arguments
fireWith:function fireWith(e,t){return c||(t=t||[],t=[e,t.slice?t.slice():t],a.push(t),!l&&r()),this},// Call all the callbacks with the given arguments
fire:function(){return i.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function fired(){return!!p}},// Flag to know if list is currently firing
l,// Last fire value for non-forgettable lists
s,// Flag to know if list was already fired
p,// Flag to prevent firing
c;return i},_e.extend({Deferred:function Deferred(t){var a=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",_e.Callbacks("memory"),_e.Callbacks("memory"),2],["resolve","done",_e.Callbacks("once memory"),_e.Callbacks("once memory"),0,"resolved"],["reject","fail",_e.Callbacks("once memory"),_e.Callbacks("once memory"),1,"rejected"]],n="pending",o={state:function state(){return n},always:function always(){return r.done(arguments).fail(arguments),this},catch:function _catch(e){return o.then(null,e)},// Keep pipe for back-compat
pipe:function pipe()/* fnDone, fnFail, fnProgress */{var e=arguments;return _e.Deferred(function(t){_e.each(a,function(a,n){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var o=we(e[n[4]])&&e[n[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
r[n[1]](function(){var e=o&&o.apply(this,arguments);e&&we(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[n[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function then(t,n,o){function r(t,a,n,o){return function(){var l=this,d=arguments,c=function(){var e,c;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<i)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(e=n.apply(l,d),e===a.promise())throw new TypeError("Thenable self-resolution");// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=e&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"===_typeof(e)||"function"==typeof e)&&e.then,we(c)?o?c.call(e,r(i,a,s,o),r(i,a,p,o)):(i++,c.call(e,r(i,a,s,o),r(i,a,p,o),r(i,a,s,a.notifyWith))):(n!==s&&(l=void 0,d=[e]),(o||a.resolveWith)(l,d))}},// Only normal processors (resolve) catch and reject exceptions
u=o?c:function(){try{c()}catch(o){_e.Deferred.exceptionHook&&_e.Deferred.exceptionHook(o,u.stackTrace),t+1>=i&&(n!==p&&(l=void 0,d=[o]),a.rejectWith(l,d))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?u():(_e.Deferred.getStackHook&&(u.stackTrace=_e.Deferred.getStackHook()),e.setTimeout(u))}}var i=0;return _e.Deferred(function(e){a[0][3].add(r(0,e,we(o)?o:s,e.notifyWith)),a[1][3].add(r(0,e,we(t)?t:s)),a[2][3].add(r(0,e,we(n)?n:p))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function promise(e){return null==e?o:_e.extend(e,o)}},r={};// Add list-specific methods
// All done!
return _e.each(a,function(e,t){var i=t[2],l=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
o[t[1]]=i.add,l&&i.add(function(){n=l},// rejected_callbacks.disable
// fulfilled_callbacks.disable
a[3-e][2].disable,// rejected_handlers.disable
// fulfilled_handlers.disable
a[3-e][3].disable,// progress_callbacks.lock
a[0][2].lock,// progress_handlers.lock
a[0][3].lock),i.add(t[3].fire),r[t[0]]=function(){return r[t[0]+"With"](this===r?void 0:this,arguments),this},r[t[0]+"With"]=i.fireWith}),o.promise(r),t&&t.call(r,r),r},// Deferred helper
when:function when(e){var// count of uncompleted subordinates
t=arguments.length,// count of unprocessed arguments
a=t,// subordinate fulfillment data
n=Array(a),o=ue.call(arguments),// the master Deferred
r=_e.Deferred(),// subordinate callback factory
l=function(e){return function(a){n[e]=this,o[e]=1<arguments.length?ue.call(arguments):a,--t||r.resolveWith(n,o)}};// Single- and empty arguments are adopted like Promise.resolve
if(1>=t&&(c(e,r.done(l(a)).resolve,r.reject,!t),"pending"===r.state()||we(o[a]&&o[a].then)))// Use .then() to unwrap secondary thenables (cf. gh-3000)
return r.then();// Multiple arguments are aggregated like Promise.all array elements
for(;a--;)c(o[a],l(a),r.reject);return r.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var qe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;_e.Deferred.exceptionHook=function(t,a){e.console&&e.console.warn&&t&&qe.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,a)},_e.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var Oe=_e.Deferred();_e.fn.ready=function(e){return Oe.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){_e.readyException(e)}),this},_e.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Handle when the DOM is ready
ready:function ready(e){// Abort if there are pending holds or we're already ready
(!0===e?! --_e.readyWait:!_e.isReady)&&(// If a normal DOM Ready event fired, decrement, and wait if need be
_e.isReady=!0,!0!==e&&0<--_e.readyWait||// If there are functions bound, to execute
Oe.resolveWith(pe,[_e]))}}),_e.ready.then=Oe.then,"complete"!==pe.readyState&&("loading"===pe.readyState||pe.documentElement.doScroll)?(pe.addEventListener("DOMContentLoaded",u),e.addEventListener("load",u)):e.setTimeout(_e.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Ue=function(e,t,a,o,r,l,d){var s=0,p=e.length,c=null==a;// Sets many values
if("object"===n(a))for(s in r=!0,a)Ue(e,t,s,a[s],!0,l,d);// Sets one value
else if(void 0!==o&&(r=!0,we(o)||(d=!0),c&&(d?(t.call(e,o),t=null):(c=t,t=function(e,t,a){return c.call(_e(e),a)})),t))for(;s<p;s++)t(e[s],a,d?o:o.call(e[s],s,t(e[s],a)));return r?e:c?t.call(e):p?t(e[0],a):l;// Gets
},Fe=/^-ms-/,Ve=/-([a-z])/g,ze=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};// Matches dashed string for camelizing
h.uid=1,h.prototype={cache:function cache(e){// Check if the owner object already has a cache
var t=e[this.expando];// If not, create one
return t||(t={},ze(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function set(e,t,a){var n=this.cache(e),o;// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)n[f(t)]=a;else// Copy the properties one-by-one to the cache object
for(o in t)n[f(o)]=t[o];return n},get:function get(e,t){return void 0===t?this.cache(e):// Always use camelCase key (gh-2257)
e[this.expando]&&e[this.expando][f(t)]},access:function(e,t,a){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===t||t&&"string"==typeof t&&void 0===a?this.get(e,t):(this.set(e,t,a),void 0===a?t:a);// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
},remove:function remove(e,t){var a=e[this.expando],n;if(void 0!==a){if(void 0!==t)for(Array.isArray(t)?t=t.map(f):(t=f(t),t=(t in a)?[t]:t.match(Me)||[]),n=t.length;n--;)delete a[t[n]];// Remove the expando if there's no more data
(void 0===t||_e.isEmptyObject(a))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function hasData(e){var t=e[this.expando];return void 0!==t&&!_e.isEmptyObject(t)}};var We=new h,Ye=new h,Qe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ke=/[A-Z]/g;_e.extend({hasData:function hasData(e){return Ye.hasData(e)||We.hasData(e)},data:function data(e,t,a){return Ye.access(e,t,a)},removeData:function removeData(e,t){Ye.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function _data(e,t,a){return We.access(e,t,a)},_removeData:function _removeData(e,t){We.remove(e,t)}}),_e.fn.extend({data:function(e,t){var a=this[0],n=a&&a.attributes,o,r,l;// Gets all values
if(void 0===e){if(this.length&&(l=Ye.get(a),1===a.nodeType&&!We.get(a,"hasDataAttrs"))){for(o=n.length;o--;)// Support: IE 11 only
// The attrs elements can be null (#14894)
n[o]&&(r=n[o].name,0===r.indexOf("data-")&&(r=f(r.slice(5)),y(a,r,l[r])));We.set(a,"hasDataAttrs",!0)}return l}// Sets multiple values
return"object"===_typeof(e)?this.each(function(){Ye.set(this,e)}):Ue(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
return a&&void 0===t?(n=Ye.get(a,e),void 0!==n)?n:(n=y(a,e),void 0===n?void 0:n):void// Set the data...
this.each(function(){Ye.set(this,e,t)})},null,t,1<arguments.length,null,!0)},removeData:function removeData(e){return this.each(function(){Ye.remove(this,e)})}}),_e.extend({queue:function(e,t,a){var n;if(e)return t=(t||"fx")+"queue",n=We.get(e,t),a&&(!n||Array.isArray(a)?n=We.access(e,t,_e.makeArray(a)):n.push(a)),n||[]},dequeue:function dequeue(e,t){t=t||"fx";var a=_e.queue(e,t),n=a.length,o=a.shift(),r=_e._queueHooks(e,t),i=function(){_e.dequeue(e,t)};// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===o&&(o=a.shift(),n--),o&&("fx"===t&&a.unshift("inprogress"),delete r.stop,o.call(e,i,r)),!n&&r&&r.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function _queueHooks(e,t){var a=t+"queueHooks";return We.get(e,a)||We.access(e,a,{empty:_e.Callbacks("once memory").add(function(){We.remove(e,[t+"queue",a])})})}}),_e.fn.extend({queue:function queue(e,t){var a=2;return"string"!=typeof e&&(t=e,e="fx",a--),arguments.length<a?_e.queue(this[0],e):void 0===t?this:this.each(function(){var a=_e.queue(this,e,t);// Ensure a hooks for this queue
_e._queueHooks(this,e),"fx"===e&&"inprogress"!==a[0]&&_e.dequeue(this,e)})},dequeue:function dequeue(e){return this.each(function(){_e.dequeue(this,e)})},clearQueue:function clearQueue(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function promise(e,t){var a=1,n=_e.Deferred(),o=this,r=this.length,l=function(){--a||n.resolveWith(o,[o])},d;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";r--;)d=We.get(o[r],e+"queueHooks"),d&&d.empty&&(a++,d.empty.add(l));return l(),n.promise(t)}});var Xe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Je=new RegExp("^(?:([+-])=|)("+Xe+")([a-z%]*)$","i"),Ge=["Top","Right","Bottom","Left"],Ze=pe.documentElement,$e=function(e){return _e.contains(e.ownerDocument,e)},et={composed:!0};Ze.getRootNode&&($e=function(e){return _e.contains(e.ownerDocument,e)||e.getRootNode(et)===e.ownerDocument});var tt=function(e,t){// Inline style trumps all
return e=t||e,"none"===e.style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
$e(e)&&"none"===_e.css(e,"display")},at=function(e,t,a,n){var o={},r,i;// Remember the old values, and insert the new ones
for(i in t)o[i]=e.style[i],e.style[i]=t[i];// Revert the old values
for(i in r=a.apply(e,n||[]),t)e.style[i]=o[i];return r},nt={};_e.fn.extend({show:function show(){return x(this,!0)},hide:function hide(){return x(this)},toggle:function toggle(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){tt(this)?_e(this).show():_e(this).hide()})}});var ot=/^(?:checkbox|radio)$/i,rt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,it=/^$|^module$|\/(?:java|ecma)script/i,lt={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};lt.optgroup=lt.option,lt.tbody=lt.tfoot=lt.colgroup=lt.caption=lt.thead,lt.th=lt.td;var dt=/<|&#?\w+;/;(function(){var e=pe.createDocumentFragment(),t=e.appendChild(pe.createElement("div")),a=pe.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
a.setAttribute("type","radio"),a.setAttribute("checked","checked"),a.setAttribute("name","t"),t.appendChild(a),ve.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",ve.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue})();var st=/^key/,pt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ct=/^([^.]*)(?:\.(.+)|)/;_e.event={global:{},add:function add(a,n,o,r,i){var l=We.get(a),d,s,p,c,u,e,g,f,h,m,y;// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(l)for(o.handler&&(d=o,o=d.handler,i=d.selector),i&&_e.find.matchesSelector(Ze,i),o.guid||(o.guid=_e.guid++),(c=l.events)||(c=l.events={}),(s=l.handle)||(s=l.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"!=typeof _e&&_e.event.triggered!==t.type?_e.event.dispatch.apply(a,arguments):void 0}),n=(n||"").match(Me)||[""],u=n.length;u--;)// There *must* be a type, no attaching namespace-only handlers
(p=ct.exec(n[u])||[],h=y=p[1],m=(p[2]||"").split(".").sort(),!!h)&&(g=_e.event.special[h]||{},h=(i?g.delegateType:g.bindType)||h,g=_e.event.special[h]||{},e=_e.extend({type:h,origType:y,data:r,handler:o,guid:o.guid,selector:i,needsContext:i&&_e.expr.match.needsContext.test(i),namespace:m.join(".")},d),(f=c[h])||(f=c[h]=[],f.delegateCount=0,(!g.setup||!1===g.setup.call(a,r,m,s))&&a.addEventListener&&a.addEventListener(h,s)),g.add&&(g.add.call(a,e),!e.handler.guid&&(e.handler.guid=o.guid)),i?f.splice(f.delegateCount++,0,e):f.push(e),_e.event.global[h]=!0);// If event changes its type, use the special event handlers for the changed type
// Caller can pass in an object of custom data in lieu of the handler
},// Detach an event or set of events from an element
remove:function remove(e,a,n,o,r){var i=We.hasData(e)&&We.get(e),l,d,s,p,c,u,g,f,h,m,y;if(i&&(p=i.events)){for(a=(a||"").match(Me)||[""],c=a.length;c--;){// Unbind all events (on this namespace, if provided) for the element
if(s=ct.exec(a[c])||[],h=y=s[1],m=(s[2]||"").split(".").sort(),!h){for(h in p)_e.event.remove(e,h+a[c],n,o,!0);continue}for(g=_e.event.special[h]||{},h=(o?g.delegateType:g.bindType)||h,f=p[h]||[],s=s[2]&&new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=l=f.length;l--;)u=f[l],(r||y===u.origType)&&(!n||n.guid===u.guid)&&(!s||s.test(u.namespace))&&(!o||o===u.selector||"**"===o&&u.selector)&&(f.splice(l,1),u.selector&&f.delegateCount--,g.remove&&g.remove.call(e,u));// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
d&&!f.length&&((!g.teardown||!1===g.teardown.call(e,m,i.handle))&&_e.removeEvent(e,h,i.handle),delete p[h])}// Remove data and the expando if it's no longer used
_e.isEmptyObject(p)&&We.remove(e,"handle events")}// Once for each type.namespace in types; type may be omitted
},dispatch:function dispatch(e){// Make a writable jQuery.Event from the native event object
var t=_e.event.fix(e),a=Array(arguments.length),n=(We.get(this,"events")||{})[t.type]||[],o=_e.event.special[t.type]||{},r,l,d,s,p,c;for(a[0]=t,r=1;r<arguments.length;r++)a[r]=arguments[r];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(t.delegateTarget=this,!(o.preDispatch&&!1===o.preDispatch.call(this,t))){for(c=_e.event.handlers.call(this,t,n),r=0;(s=c[r++])&&!t.isPropagationStopped();)for(t.currentTarget=s.elem,l=0;(p=s.handlers[l++])&&!t.isImmediatePropagationStopped();)// If the event is namespaced, then each handler is only invoked if it is
// specially universal or its namespaces are a superset of the event's.
(!t.rnamespace||!1===p.namespace||t.rnamespace.test(p.namespace))&&(t.handleObj=p,t.data=p.data,d=((_e.event.special[p.origType]||{}).handle||p.handler).apply(s.elem,a),void 0!==d&&!1===(t.result=d)&&(t.preventDefault(),t.stopPropagation()));// Call the postDispatch hook for the mapped type
return o.postDispatch&&o.postDispatch.call(this,t),t.result}// Determine handlers
},handlers:function handlers(e,t){var a=[],n=t.delegateCount,o=e.target,r,l,d,s,p;// Find delegate handlers
if(n&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
o.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&1<=e.button))for(;o!==this;o=o.parentNode||this)// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===o.nodeType&&("click"!==e.type||!0!==o.disabled)){for(s=[],p={},r=0;r<n;r++)// Don't conflict with Object.prototype properties (#13203)
l=t[r],d=l.selector+" ",void 0===p[d]&&(p[d]=l.needsContext?-1<_e(d,this).index(o):_e.find(d,this,null,[o]).length),p[d]&&s.push(l);s.length&&a.push({elem:o,handlers:s})}// Add the remaining (directly-bound) handlers
return o=this,n<t.length&&a.push({elem:o,handlers:t.slice(n)}),a},addProp:function addProp(e,t){Object.defineProperty(_e.Event.prototype,e,{enumerable:!0,configurable:!0,get:we(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function set(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function fix(e){return e[_e.expando]?e:new _e.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function setup(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Claim the first handler
// Return false to allow normal processing in the caller
return ot.test(t.type)&&t.click&&r(t,"input")&&N(t,"click",k),!1},trigger:function trigger(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Force setup before triggering a click
// Return non-false to allow normal event-path propagation
return ot.test(t.type)&&t.click&&r(t,"input")&&N(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function _default(e){var t=e.target;return ot.test(t.type)&&t.click&&r(t,"input")&&We.get(t,"click")||r(t,"a")}},beforeunload:{postDispatch:function postDispatch(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},_e.removeEvent=function(e,t,a){e.removeEventListener&&e.removeEventListener(t,a)},_e.Event=function(e,t){// Allow instantiation without the 'new' keyword
return this instanceof _e.Event?void(// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?k:T,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&_e.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[_e.expando]=!0):new _e.Event(e,t);// Event object
},_e.Event.prototype={constructor:_e.Event,isDefaultPrevented:T,isPropagationStopped:T,isImmediatePropagationStopped:T,isSimulated:!1,preventDefault:function preventDefault(){var t=this.originalEvent;this.isDefaultPrevented=k,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function stopPropagation(){var t=this.originalEvent;this.isPropagationStopped=k,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function stopImmediatePropagation(){var t=this.originalEvent;this.isImmediatePropagationStopped=k,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},_e.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function which(e){var t=e.button;// Add which for key events
return null==e.which&&st.test(e.type)?null==e.charCode?e.keyCode:e.charCode:!e.which&&void 0!==t&&pt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which;// Add which for click: 1 === left; 2 === middle; 3 === right
}},_e.event.addProp),_e.each({focus:"focusin",blur:"focusout"},function(e,t){_e.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function setup(){// Return false to allow normal processing in the caller
return N(this,e,_),!1},trigger:function trigger(){// Return non-false to allow normal event-path propagation
return N(this,e),!0},delegateType:t}}),_e.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){_e.event.special[e]={delegateType:t,bindType:t,handle:function handle(e){var a=this,n=e.relatedTarget,o=e.handleObj,r;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return n&&(n===a||_e.contains(a,n))||(e.type=o.origType,r=o.handler.apply(this,arguments),e.type=t),r}}}),_e.fn.extend({on:function on(e,t,a,n){return D(this,e,t,a,n)},one:function one(e,t,a,n){return D(this,e,t,a,n,1)},off:function off(e,t,a){var n,o;if(e&&e.preventDefault&&e.handleObj)return n=e.handleObj,_e(e.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"===_typeof(e)){// ( types-object [, selector] )
for(o in e)this.off(o,t,e[o]);return this}return(!1===t||"function"==typeof t)&&(a=t,t=void 0),!1===a&&(a=T),this.each(function(){_e.event.remove(this,e,a,t)})}});var/* eslint-disable max-len */ // See https://github.com/eslint/eslint/issues/3229
ut=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */ // Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
gt=/<script|<style|<link/i,// checked="checked" or checked
ft=/checked\s*(?:[^=]|=\s*.checked.)/i,ht=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;_e.extend({htmlPrefilter:function htmlPrefilter(e){return e.replace(ut,"<$1></$2>")},clone:function(e,t,a){var n=e.cloneNode(!0),o=$e(e),r,d,s,p;// Fix IE cloning issues
if(!ve.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!_e.isXMLDoc(e))for(p=v(n),s=v(e),(r=0,d=s.length);r<d;r++)L(s[r],p[r]);// Copy the events from the original to the clone
if(t)if(a)for(s=s||v(e),p=p||v(n),(r=0,d=s.length);r<d;r++)B(s[r],p[r]);else B(e,n);// Preserve script evaluation history
// Return the cloned set
return p=v(n,"script"),0<p.length&&w(p,!o&&v(e,"script")),n},cleanData:function cleanData(e){for(var t=_e.event.special,a=0,n,o,r;void 0!==(o=e[a]);a++)if(ze(o)){if(n=o[We.expando]){if(n.events)for(r in n.events)t[r]?_e.event.remove(o,r):_e.removeEvent(o,r,n.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
o[We.expando]=void 0}o[Ye.expando]&&(o[Ye.expando]=void 0)}}}),_e.fn.extend({detach:function detach(e){return R(this,e,!0)},remove:function remove(e){return R(this,e)},text:function text(e){return Ue(this,function(e){return void 0===e?_e.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function append(){return j(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=P(this,e);t.appendChild(e)}})},prepend:function prepend(){return j(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=P(this,e);t.insertBefore(e,t.firstChild)}})},before:function before(){return j(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function after(){return j(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function empty(){for(var e=0,t;null!=(t=this[e]);e++)1===t.nodeType&&(// Prevent memory leaks
// Remove any remaining nodes
_e.cleanData(v(t,!1)),t.textContent="");return this},clone:function clone(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return _e.clone(this,e,t)})},html:function(e){return Ue(this,function(e){var t=this[0]||{},a=0,n=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!gt.test(e)&&!lt[(rt.exec(e)||["",""])[1].toLowerCase()]){e=_e.htmlPrefilter(e);try{for(;a<n;a++)t=this[a]||{},1===t.nodeType&&(_e.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(t){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function replaceWith(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return j(this,arguments,function(t){var a=this.parentNode;0>_e.inArray(this,e)&&(_e.cleanData(v(this)),a&&a.replaceChild(t,this))},e)}}),_e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){_e.fn[e]=function(e){for(var a=[],n=_e(e),o=n.length-1,r=0,l;r<=o;r++)// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
l=r===o?this:this.clone(!0),_e(n[r])[t](l),fe.apply(a,l.get());return this.pushStack(a)}});var mt=new RegExp("^("+Xe+")(?!px)[a-z%]+$","i"),yt=function(t){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var a=t.ownerDocument.defaultView;return a&&a.opener||(a=e),a.getComputedStyle(t)},At=new RegExp(Ge.join("|"),"i");(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(o){n.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",o.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ze.appendChild(n).appendChild(o);var t=e.getComputedStyle(o);r="1%"!==t.top,s=12===a(t.marginLeft),o.style.right="60%",d=36===a(t.right),i=36===a(t.width),o.style.position="absolute",l=12===a(o.offsetWidth/3),Ze.removeChild(n),o=null}}function a(e){var t=Math.round;return t(parseFloat(e))}var n=pe.createElement("div"),o=pe.createElement("div"),r,i,l,d,s;// Finish early in limited (non-browser) environments
o.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
o.style.backgroundClip="content-box",o.cloneNode(!0).style.backgroundClip="",ve.clearCloneStyle="content-box"===o.style.backgroundClip,_e.extend(ve,{boxSizingReliable:function boxSizingReliable(){return t(),i},pixelBoxStyles:function pixelBoxStyles(){return t(),d},pixelPosition:function pixelPosition(){return t(),r},reliableMarginLeft:function reliableMarginLeft(){return t(),s},scrollboxSize:function scrollboxSize(){return t(),l}}))})();var bt=["Webkit","Moz","ms"],xt=pe.createElement("div").style,vt={},// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
wt=/^(none|table(?!-c[ea]).+)/,Ct=/^--/,kt={position:"absolute",visibility:"hidden",display:"block"},Tt={letterSpacing:"0",fontWeight:"400"};_e.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function get(e,t){if(t){// We should always get a number back from opacity
var a=H(e,"opacity");return""===a?"1":a}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,a,n){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var o=f(t),r=Ct.test(t),i=e.style,l,d,s;// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(r||(t=O(o)),s=_e.cssHooks[t]||_e.cssHooks[o],void 0!==a){// Make sure that null and NaN values aren't set (#7116)
if(d=_typeof(a),"string"===d&&(l=Je.exec(a))&&l[1]&&(a=A(e,t,l),d="number"),null==a||a!==a)return;// If a number was passed in, add the unit (except for certain CSS properties)
// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
// "px" to a few hardcoded values.
"number"!==d||r||(a+=l&&l[3]||(_e.cssNumber[o]?"":"px")),ve.clearCloneStyle||""!==a||0!==t.indexOf("background")||(i[t]="inherit"),s&&"set"in s&&void 0===(a=s.set(e,a,n))||(r?i.setProperty(t,a):i[t]=a)}else// If a hook was provided get the non-computed value from there
return s&&"get"in s&&void 0!==(l=s.get(e,!1,n))?l:i[t];// Otherwise just get the value from the style object
}},css:function css(e,t,a,n){var o=f(t),r=Ct.test(t),i,l,d;// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return r||(t=O(o)),d=_e.cssHooks[t]||_e.cssHooks[o],d&&"get"in d&&(i=d.get(e,!0,a)),void 0===i&&(i=H(e,t,n)),"normal"===i&&t in Tt&&(i=Tt[t]),""===a||a?(l=parseFloat(i),!0===a||isFinite(l)?l||0:i):i}}),_e.each(["height","width"],function(e,t){_e.cssHooks[t]={get:function get(e,a,n){if(a)// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!wt.test(_e.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?V(e,t,n):at(e,kt,function(){return V(e,t,n)})},set:function set(e,a,n){var o=yt(e),// Only read styles.position if the test has a chance to fail
// to avoid forcing a reflow.
r=!ve.scrollboxSize()&&"absolute"===o.position,i=(r||n)&&"border-box"===_e.css(e,"boxSizing",!1,o),l=n?F(e,t,n,i,o):0,d;// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return i&&r&&(l-=G(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-F(e,t,"border",!1,o)-.5)),l&&(d=Je.exec(a))&&"px"!==(d[3]||"px")&&(e.style[t]=a,a=_e.css(e,t)),U(e,a,l)}}}),_e.cssHooks.marginLeft=M(ve.reliableMarginLeft,function(e,t){if(t)return(parseFloat(H(e,"marginLeft"))||e.getBoundingClientRect().left-at(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),_e.each({margin:"",padding:"",border:"Width"},function(e,t){_e.cssHooks[e+t]={expand:function expand(a){for(var n=0,o={},// Assumes a single number if not a string
r="string"==typeof a?a.split(" "):[a];4>n;n++)o[e+Ge[n]+t]=r[n]||r[n-2]||r[0];return o}},"margin"!==e&&(_e.cssHooks[e+t].set=U)}),_e.fn.extend({css:function css(e,t){return Ue(this,function(e,t,a){var n={},o=0,r,l;if(Array.isArray(t)){for(r=yt(e),l=t.length;o<l;o++)n[t[o]]=_e.css(e,t[o],!1,r);return n}return void 0===a?_e.css(e,t):_e.style(e,t,a)},e,t,1<arguments.length)}}),_e.Tween=z,z.prototype={constructor:z,init:function(e,t,a,n,o,r){this.elem=e,this.prop=a,this.easing=o||_e.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=n,this.unit=r||(_e.cssNumber[a]?"":"px")},cur:function cur(){var e=z.propHooks[this.prop];return e&&e.get?e.get(this):z.propHooks._default.get(this)},run:function run(e){var t=z.propHooks[this.prop],a;return this.pos=this.options.duration?a=_e.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):a=e,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),t&&t.set?t.set(this):z.propHooks._default.set(this),this}},z.prototype.init.prototype=z.prototype,z.propHooks={_default:{get:function get(e){var t;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=_e.css(e.elem,e.prop,""),t&&"auto"!==t?t:0);// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
},set:function set(e){_e.fx.step[e.prop]?_e.fx.step[e.prop](e):1===e.elem.nodeType&&(_e.cssHooks[e.prop]||null!=e.elem.style[O(e.prop)])?_e.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},z.propHooks.scrollTop=z.propHooks.scrollLeft={set:function set(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},_e.easing={linear:function linear(e){return e},swing:function swing(e){var t=Math.cos,a=Math.PI;return .5-t(e*a)/2},_default:"swing"},_e.fx=z.prototype.init,_e.fx.step={};var _t=/^(?:toggle|show|hide)$/,St=/queueHooks$/,Dt,Nt;_e.Animation=_e.extend($,{tweeners:{"*":[function(e,t){var a=this.createTween(e,t);return A(a.elem,e,Je.exec(t),a),a}]},tweener:function tweener(e,t){we(e)?(t=e,e=["*"]):e=e.match(Me);for(var a=0,n=e.length,o;a<n;a++)o=e[a],$.tweeners[o]=$.tweeners[o]||[],$.tweeners[o].unshift(t)},prefilters:[X],prefilter:function prefilter(e,t){t?$.prefilters.unshift(e):$.prefilters.push(e)}}),_e.speed=function(e,t,a){var n=e&&"object"===_typeof(e)?_e.extend({},e):{complete:a||!a&&t||we(e)&&e,duration:e,easing:a&&t||t&&!we(t)&&t};// Go to the end state if fx are off
return _e.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in _e.fx.speeds?n.duration=_e.fx.speeds[n.duration]:n.duration=_e.fx.speeds._default),(null==n.queue||!0===n.queue)&&(n.queue="fx"),n.old=n.complete,n.complete=function(){we(n.old)&&n.old.call(this),n.queue&&_e.dequeue(this,n.queue)},n},_e.fn.extend({fadeTo:function fadeTo(e,t,a,n){// Show any hidden elements after setting opacity to 0
return this.filter(tt).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,a,n)},animate:function animate(e,t,a,n){var o=_e.isEmptyObject(e),r=_e.speed(t,a,n),i=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=$(this,_e.extend({},e),r);// Empty animations, or finishing resolves immediately
(o||We.get(this,"finish"))&&t.stop(!0)};return i.finish=i,o||!1===r.queue?this.each(i):this.queue(r.queue,i)},stop:function stop(e,t,a){var n=function(e){var t=e.stop;delete e.stop,t(a)};return"string"!=typeof e&&(a=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=_e.timers,i=We.get(this);if(o)i[o]&&i[o].stop&&n(i[o]);else for(o in i)i[o]&&i[o].stop&&St.test(o)&&n(i[o]);for(o=r.length;o--;)r[o].elem===this&&(null==e||r[o].queue===e)&&(r[o].anim.stop(a),t=!1,r.splice(o,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!a)&&_e.dequeue(this,e)})},finish:function finish(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t=We.get(this),a=t[e+"queue"],n=t[e+"queueHooks"],o=_e.timers,r=a?a.length:0,i;// Enable finishing flag on private data
// Look for any active animations, and finish them
for(t.finish=!0,_e.queue(this,e,[]),n&&n.stop&&n.stop.call(this,!0),i=o.length;i--;)o[i].elem===this&&o[i].queue===e&&(o[i].anim.stop(!0),o.splice(i,1));// Look for any animations in the old queue and finish them
for(i=0;i<r;i++)a[i]&&a[i].finish&&a[i].finish.call(this);// Turn off finishing flag
delete t.finish})}}),_e.each(["toggle","show","hide"],function(e,t){var a=_e.fn[t];_e.fn[t]=function(e,n,o){return null==e||"boolean"==typeof e?a.apply(this,arguments):this.animate(Q(t,!0),e,n,o)}}),_e.each({slideDown:Q("show"),slideUp:Q("hide"),slideToggle:Q("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){_e.fn[e]=function(e,a,n){return this.animate(t,e,a,n)}}),_e.timers=[],_e.fx.tick=function(){var e=0,t=_e.timers,a;for(Dt=Date.now();e<t.length;e++)a=t[e],a()||t[e]!==a||t.splice(e--,1);t.length||_e.fx.stop(),Dt=void 0},_e.fx.timer=function(e){_e.timers.push(e),_e.fx.start()},_e.fx.interval=13,_e.fx.start=function(){Nt||(Nt=!0,W())},_e.fx.stop=function(){Nt=null},_e.fx.speeds={slow:600,fast:200,// Default speed
_default:400},_e.fn.delay=function(t,a){return t=_e.fx?_e.fx.speeds[t]||t:t,a=a||"fx",this.queue(a,function(a,n){var o=e.setTimeout(a,t);n.stop=function(){e.clearTimeout(o)}})},function(){var e=pe.createElement("input"),t=pe.createElement("select"),a=t.appendChild(pe.createElement("option"));e.type="checkbox",ve.checkOn=""!==e.value,ve.optSelected=a.selected,e=pe.createElement("input"),e.value="t",e.type="radio",ve.radioValue="t"===e.value}();var Pt=_e.expr.attrHandle,Et;_e.fn.extend({attr:function attr(e,t){return Ue(this,_e.attr,e,t,1<arguments.length)},removeAttr:function removeAttr(e){return this.each(function(){_e.removeAttr(this,e)})}}),_e.extend({attr:function attr(e,t,a){var n=e.nodeType,o,r;// Don't get/set attributes on text, comment and attribute nodes
if(3!==n&&8!==n&&2!==n)// Fallback to prop when attributes are not supported
return"undefined"==typeof e.getAttribute?_e.prop(e,t,a):(1===n&&_e.isXMLDoc(e)||(r=_e.attrHooks[t.toLowerCase()]||(_e.expr.match.bool.test(t)?Et:void 0)),void 0!==a)?null===a?void _e.removeAttr(e,t):r&&"set"in r&&void 0!==(o=r.set(e,a,t))?o:(e.setAttribute(t,a+""),a):r&&"get"in r&&null!==(o=r.get(e,t))?o:(o=_e.find.attr(e,t),null==o?void 0:o);// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
},attrHooks:{type:{set:function set(e,t){if(!ve.radioValue&&"radio"===t&&r(e,"input")){var a=e.value;return e.setAttribute("type",t),a&&(e.value=a),t}}}},removeAttr:function removeAttr(e,t){var a=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
n=t&&t.match(Me),o;if(n&&1===e.nodeType)for(;o=n[a++];)e.removeAttribute(o)}}),Et={set:function set(e,t,a){return!1===t?_e.removeAttr(e,a):e.setAttribute(a,a),a}},_e.each(_e.expr.match.bool.source.match(/\w+/g),function(e,t){var a=Pt[t]||_e.find.attr;Pt[t]=function(e,t,n){var o=t.toLowerCase(),r,i;return n||(i=Pt[o],Pt[o]=r,r=null==a(e,t,n)?null:o,Pt[o]=i),r}});var It=/^(?:input|select|textarea|button)$/i,Bt=/^(?:a|area)$/i;_e.fn.extend({prop:function prop(e,t){return Ue(this,_e.prop,e,t,1<arguments.length)},removeProp:function removeProp(e){return this.each(function(){delete this[_e.propFix[e]||e]})}}),_e.extend({prop:function prop(e,t,a){var n=e.nodeType,o,r;// Don't get/set properties on text, comment and attribute nodes
if(3!==n&&8!==n&&2!==n)return 1===n&&_e.isXMLDoc(e)||(t=_e.propFix[t]||t,r=_e.propHooks[t]),void 0===a?r&&"get"in r&&null!==(o=r.get(e,t))?o:e[t]:r&&"set"in r&&void 0!==(o=r.set(e,a,t))?o:e[t]=a},propHooks:{tabIndex:{get:function get(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=_e.find.attr(e,"tabindex");return t?parseInt(t,10):It.test(e.nodeName)||Bt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ve.optSelected||(_e.propHooks.selected={get:function get(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function set(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),_e.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_e.propFix[this.toLowerCase()]=this}),_e.fn.extend({addClass:function addClass(e){var t=0,a,n,o,r,l,d,s;if(we(e))return this.each(function(t){_e(this).addClass(e.call(this,t,te(this)))});if(a=ae(e),a.length)for(;n=this[t++];)if(r=te(n),o=1===n.nodeType&&" "+ee(r)+" ",o){for(d=0;l=a[d++];)0>o.indexOf(" "+l+" ")&&(o+=l+" ");// Only assign if different to avoid unneeded rendering.
s=ee(o),r!==s&&n.setAttribute("class",s)}return this},removeClass:function removeClass(e){var t=0,a,n,o,r,l,d,s;if(we(e))return this.each(function(t){_e(this).removeClass(e.call(this,t,te(this)))});if(!arguments.length)return this.attr("class","");if(a=ae(e),a.length)for(;n=this[t++];)if(r=te(n),o=1===n.nodeType&&" "+ee(r)+" ",o){for(d=0;l=a[d++];)// Remove *all* instances
for(;-1<o.indexOf(" "+l+" ");)o=o.replace(" "+l+" "," ");// Only assign if different to avoid unneeded rendering.
s=ee(o),r!==s&&n.setAttribute("class",s)}return this},toggleClass:function toggleClass(e,t){var a=_typeof(e),n="string"===a||Array.isArray(e);return"boolean"==typeof t&&n?t?this.addClass(e):this.removeClass(e):we(e)?this.each(function(a){_e(this).toggleClass(e.call(this,a,te(this),t),t)}):this.each(function(){var t,o,r,l;if(n)for(o=0,r=_e(this),l=ae(e);t=l[o++];)// Check each className given, space separated list
r.hasClass(t)?r.removeClass(t):r.addClass(t);// Toggle whole class name
else(void 0===e||"boolean"===a)&&(t=te(this),t&&We.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":We.get(this,"__className__")||""))})},hasClass:function hasClass(e){var t=0,a,n;for(a=" "+e+" ";n=this[t++];)if(1===n.nodeType&&-1<(" "+ee(te(n))+" ").indexOf(a))return!0;return!1}});var Lt=/\r/g;_e.fn.extend({val:function val(e){var t=this[0],a,n,o;return arguments.length?(o=we(e),this.each(function(t){var n;1!==this.nodeType||(n=o?e.call(this,t,_e(this).val()):e,null==n?n="":"number"==typeof n?n+="":Array.isArray(n)&&(n=_e.map(n,function(e){return null==e?"":e+""})),a=_e.valHooks[this.type]||_e.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||void 0===a.set(this,n,"value"))&&(this.value=n))})):t?(a=_e.valHooks[t.type]||_e.valHooks[t.nodeName.toLowerCase()],a&&"get"in a&&void 0!==(n=a.get(t,"value")))?n:(n=t.value,"string"==typeof n?n.replace(Lt,""):null==n?"":n):void 0}}),_e.extend({valHooks:{option:{get:function get(e){var t=_e.find.attr(e,"value");return null==t?// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
ee(_e.text(e)):t}},select:{get:function get(e){var t=e.options,a=e.selectedIndex,n="select-one"===e.type,o=n?null:[],l=n?a+1:t.length,d,s,p;// Loop through all the selected options
for(p=0>a?l:n?a:0;p<l;p++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(s=t[p],(s.selected||p===a)&&// Don't return options that are disabled or in a disabled optgroup
!s.disabled&&(!s.parentNode.disabled||!r(s.parentNode,"optgroup"))){// We don't need an array for one selects
if(d=_e(s).val(),n)return d;// Multi-Selects return an array
o.push(d)}return o},set:function set(e,t){for(var a=e.options,n=_e.makeArray(t),o=a.length,r,l;o--;)l=a[o],(l.selected=-1<_e.inArray(_e.valHooks.option.get(l),n))&&(r=!0);// Force browsers to behave consistently when non-matching value is set
return r||(e.selectedIndex=-1),n}}}}),_e.each(["radio","checkbox"],function(){_e.valHooks[this]={set:function set(e,t){if(Array.isArray(t))return e.checked=-1<_e.inArray(_e(e).val(),t)}},ve.checkOn||(_e.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),ve.focusin="onfocusin"in e;var jt=/^(?:focusinfocus|focusoutblur)$/,Rt=function(t){t.stopPropagation()};_e.extend(_e.event,{trigger:function trigger(t,a,n,o){var r=[n||pe],l=Ae.call(t,"type")?t.type:t,d=Ae.call(t,"namespace")?t.namespace.split("."):[],s,p,c,u,g,f,h,m;// Don't do events on text and comment nodes
if((p=m=c=n=n||pe,3!==n.nodeType&&8!==n.nodeType)&&!jt.test(l+_e.event.triggered)&&(-1<l.indexOf(".")&&(d=l.split("."),l=d.shift(),d.sort()),g=0>l.indexOf(":")&&"on"+l,t=t[_e.expando]?t:new _e.Event(l,"object"===_typeof(t)&&t),t.isTrigger=o?2:3,t.namespace=d.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=n),a=null==a?[t]:_e.makeArray(a,[t]),h=_e.event.special[l]||{},o||!h.trigger||!1!==h.trigger.apply(n,a)))// focus/blur morphs to focusin/out; ensure we're not firing them right now
{// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!o&&!h.noBubble&&!Ce(n)){for(u=h.delegateType||l,jt.test(u+l)||(p=p.parentNode);p;p=p.parentNode)r.push(p),c=p;// Only add window if we got to document (e.g., not plain obj or detached DOM)
c===(n.ownerDocument||pe)&&r.push(c.defaultView||c.parentWindow||e)}// Fire handlers on the event path
for(s=0;(p=r[s++])&&!t.isPropagationStopped();)// jQuery handler
// Native handler
m=p,t.type=1<s?u:h.bindType||l,f=(We.get(p,"events")||{})[t.type]&&We.get(p,"handle"),f&&f.apply(p,a),f=g&&p[g],f&&f.apply&&ze(p)&&(t.result=f.apply(p,a),!1===t.result&&t.preventDefault());return t.type=l,o||t.isDefaultPrevented()||h._default&&!1!==h._default.apply(r.pop(),a)||!ze(n)||!g||!we(n[l])||Ce(n)||(c=n[g],c&&(n[g]=null),_e.event.triggered=l,t.isPropagationStopped()&&m.addEventListener(l,Rt),n[l](),t.isPropagationStopped()&&m.removeEventListener(l,Rt),_e.event.triggered=void 0,c&&(n[g]=c)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function simulate(t,a,n){var o=_e.extend(new _e.Event,n,{type:t,isSimulated:!0});_e.event.trigger(o,null,a)}}),_e.fn.extend({trigger:function trigger(e,t){return this.each(function(){_e.event.trigger(e,t,this)})},triggerHandler:function triggerHandler(e,t){var a=this[0];if(a)return _e.event.trigger(e,t,a,!0)}}),ve.focusin||_e.each({focus:"focusin",blur:"focusout"},function(e,t){// Attach a single capturing handler on the document while someone wants focusin/focusout
var a=function(e){_e.event.simulate(t,e.target,_e.event.fix(e))};_e.event.special[t]={setup:function setup(){var n=this.ownerDocument||this,o=We.access(n,t);o||n.addEventListener(e,a,!0),We.access(n,t,(o||0)+1)},teardown:function teardown(){var n=this.ownerDocument||this,o=We.access(n,t)-1;o?We.access(n,t,o):(n.removeEventListener(e,a,!0),We.remove(n,t))}}});var Ht=e.location,Mt=Date.now(),qt=/\?/;_e.parseXML=function(t){var a;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{a=new e.DOMParser().parseFromString(t,"text/xml")}catch(t){a=void 0}return(!a||a.getElementsByTagName("parsererror").length)&&_e.error("Invalid XML: "+t),a};var Ot=/\[\]$/,Ut=/\r?\n/g,Ft=/^(?:submit|button|image|reset|file)$/i,Vt=/^(?:input|select|textarea|keygen)/i;_e.param=function(e,t){var a=[],n=function(e,t){// If value is a function, invoke it and use its return value
var n=we(t)?t():t;a[a.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)},o;if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!_e.isPlainObject(e))_e.each(e,function(){n(this.name,this.value)});else// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(o in e)ne(o,e[o],t,n);// Return the resulting serialization
return a.join("&")},_e.fn.extend({serialize:function serialize(){return _e.param(this.serializeArray())},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=_e.prop(this,"elements");return e?_e.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!_e(this).is(":disabled")&&Vt.test(this.nodeName)&&!Ft.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var a=_e(this).val();return null==a?null:Array.isArray(a)?_e.map(a,function(e){return{name:t.name,value:e.replace(Ut,"\r\n")}}):{name:t.name,value:a.replace(Ut,"\r\n")}}).get()}});var zt=/%20/g,Wt=/#.*$/,Yt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Xt=/^(?:GET|HEAD)$/,Jt=/^\/\//,/* Prefilters
    	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
    	 * 2) These are called:
    	 *    - BEFORE asking for a transport
    	 *    - AFTER param serialization (s.data is a string if s.processData is true)
    	 * 3) key is the dataType
    	 * 4) the catchall symbol "*" can be used
    	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
    	 */Gt={},/* Transports bindings
    	 * 1) key is the dataType
    	 * 2) the catchall symbol "*" can be used
    	 * 3) selection will start with transport dataType and THEN go to "*" if needed
    	 */Zt={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
$t="*/".concat("*"),// Anchor tag for parsing the document origin
ea=pe.createElement("a");ea.href=Ht.href,_e.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:Ht.href,type:"GET",isLocal:Kt.test(Ht.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
    		timeout: 0,
    		data: null,
    		dataType: null,
    		username: null,
    		password: null,
    		cache: null,
    		throws: false,
    		traditional: false,
    		headers: {},
    		*/accepts:{"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":_e.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function ajaxSetup(e,t){return t?// Building a settings object
ie(ie(e,_e.ajaxSettings),t):// Extending ajaxSettings
ie(_e.ajaxSettings,e)},ajaxPrefilter:oe(Gt),ajaxTransport:oe(Zt),// Main method
ajax:function ajax(t,a){// Callback for when everything is done
function n(t,a,n,i){var c=a,u,g,A,x,C;// Ignore repeat invocations
v||(// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
// Cache response headers
// Set readyState
// Determine if successful
// Convert no matter what (that way responseXXX fields are always set)
// Set data for the fake xhr object
// Status-dependent callbacks
// Complete
v=!0,b&&e.clearTimeout(b),h=void 0,y=i||"",f.readyState=0<t?4:0,u=200<=t&&300>t||304===t,n&&(x=le(o,f,n)),x=de(o,x,f,u),u?(o.ifModified&&(C=f.getResponseHeader("Last-Modified"),C&&(_e.lastModified[m]=C),C=f.getResponseHeader("etag"),C&&(_e.etag[m]=C)),204===t||"HEAD"===o.type?c="nocontent":304===t?c="notmodified":(c=x.state,g=x.data,A=x.error,u=!A)):(A=c,(t||!c)&&(c="error",0>t&&(t=0))),f.status=t,f.statusText=(a||c)+"",u?d.resolveWith(r,[g,c,f]):d.rejectWith(r,[f,c,A]),f.statusCode(p),p=void 0,w&&l.trigger(u?"ajaxSuccess":"ajaxError",[f,o,u?g:A]),s.fireWith(r,[f,c]),w&&(l.trigger("ajaxComplete",[f,o]),! --_e.active&&_e.event.trigger("ajaxStop")))}"object"===_typeof(t)&&(a=t,t=void 0),a=a||{};var// Create the final options object
o=_e.ajaxSetup({},a),// Callbacks context
r=o.context||o,// Context for global events is callbackContext if it is a DOM node or jQuery collection
l=o.context&&(r.nodeType||r.jquery)?_e(r):_e.event,// Deferreds
d=_e.Deferred(),s=_e.Callbacks("once memory"),// Status-dependent callbacks
p=o.statusCode||{},// Headers (they are sent all at once)
c={},u={},// Default abort message
g="canceled",// Fake xhr
f={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function getResponseHeader(e){var t;if(v){if(!A)for(A={};t=Qt.exec(y);)A[t[1].toLowerCase()+" "]=(A[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=A[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function getAllResponseHeaders(){return v?y:null},// Caches the header
setRequestHeader:function setRequestHeader(e,t){return null==v&&(e=u[e.toLowerCase()]=u[e.toLowerCase()]||e,c[e]=t),this},// Overrides response content-type header
overrideMimeType:function overrideMimeType(e){return null==v&&(o.mimeType=e),this},// Status-dependent callbacks
statusCode:function statusCode(e){if(e)if(v)f.always(e[f.status]);else// Lazy-add the new callbacks in a way that preserves old ones
for(var t in e)p[t]=[p[t],e[t]];return this},// Cancel the request
abort:function abort(e){var t=e||g;return h&&h.abort(t),n(0,t),this}},h,// URL without anti-cache param
m,// Response headers
y,A,// timeout handle
b,// Url cleanup var
x,// Request state (becomes false upon send and true upon completion)
v,// To know if global events are to be dispatched
w,// Loop variable
C,// uncached part of the url
k;// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(d.promise(f),o.url=((t||o.url||Ht.href)+"").replace(Jt,Ht.protocol+"//"),o.type=a.method||a.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(Me)||[""],null==o.crossDomain){x=pe.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{x.href=o.url,x.href=x.href,o.crossDomain=ea.protocol+"//"+ea.host!=x.protocol+"//"+x.host}catch(t){o.crossDomain=!0}}// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=_e.param(o.data,o.traditional)),re(Gt,o,a,f),v)return f;// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(C in w=_e.event&&o.global,w&&0==_e.active++&&_e.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Xt.test(o.type),m=o.url.replace(Wt,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(zt,"+")):(k=o.url.slice(m.length),o.data&&(o.processData||"string"==typeof o.data)&&(m+=(qt.test(m)?"&":"?")+o.data,delete o.data),!1===o.cache&&(m=m.replace(Yt,"$1"),k=(qt.test(m)?"&":"?")+"_="+Mt++ +k),o.url=m+k),o.ifModified&&(_e.lastModified[m]&&f.setRequestHeader("If-Modified-Since",_e.lastModified[m]),_e.etag[m]&&f.setRequestHeader("If-None-Match",_e.etag[m])),(o.data&&o.hasContent&&!1!==o.contentType||a.contentType)&&f.setRequestHeader("Content-Type",o.contentType),f.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"===o.dataTypes[0]?"":", */*; q=0.01"):o.accepts["*"]),o.headers)f.setRequestHeader(C,o.headers[C]);// Allow custom headers/mimetypes and early abort
if(o.beforeSend&&(!1===o.beforeSend.call(r,f,o)||v))// Abort if not done already and return
return f.abort();// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(g="abort",s.add(o.complete),f.done(o.success),f.fail(o.error),h=re(Zt,o,a,f),!h)n(-1,"No Transport");else{// If request was aborted inside ajaxSend, stop there
if(f.readyState=1,w&&l.trigger("ajaxSend",[f,o]),v)return f;// Timeout
o.async&&0<o.timeout&&(b=e.setTimeout(function(){f.abort("timeout")},o.timeout));try{v=!1,h.send(c,n)}catch(t){// Rethrow post-completion exceptions
if(v)throw t;// Propagate others as results
n(-1,t)}}return f},getJSON:function getJSON(e,t,a){return _e.get(e,t,a,"json")},getScript:function getScript(e,t){return _e.get(e,void 0,t,"script")}}),_e.each(["get","post"],function(e,t){_e[t]=function(e,a,n,o){// The url can be an options object (which then must have .url)
return we(a)&&(o=o||n,n=a,a=void 0),_e.ajax(_e.extend({url:e,type:t,dataType:o,data:a,success:n},_e.isPlainObject(e)&&e))}}),_e._evalUrl=function(e,t){return _e.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function textScript(){}},dataFilter:function dataFilter(e){_e.globalEval(e,t)}})},_e.fn.extend({wrapAll:function wrapAll(e){var t;return this[0]&&(we(e)&&(e=e.call(this[0])),t=_e(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function wrapInner(e){return we(e)?this.each(function(t){_e(this).wrapInner(e.call(this,t))}):this.each(function(){var t=_e(this),a=t.contents();a.length?a.wrapAll(e):t.append(e)})},wrap:function wrap(e){var t=we(e);return this.each(function(a){_e(this).wrapAll(t?e.call(this,a):e)})},unwrap:function unwrap(e){return this.parent(e).not("body").each(function(){_e(this).replaceWith(this.childNodes)}),this}}),_e.expr.pseudos.hidden=function(e){return!_e.expr.pseudos.visible(e)},_e.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},_e.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}};var ta={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},aa=_e.ajaxSettings.xhr();ve.cors=!!aa&&"withCredentials"in aa,ve.ajax=aa=!!aa,_e.ajaxTransport(function(t){var a,n;// Cross domain only allowed if supported through XMLHttpRequest
if(ve.cors||aa&&!t.crossDomain)return{send:function send(o,r){var l=t.xhr(),d;// Apply custom fields if provided
if(l.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(d in t.xhrFields)l[d]=t.xhrFields[d];// Override mime type if needed
// Set headers
for(d in t.mimeType&&l.overrideMimeType&&l.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)l.setRequestHeader(d,o[d]);// Callback
a=function callback(e){return function(){a&&(a=n=l.onload=l.onerror=l.onabort=l.ontimeout=l.onreadystatechange=null,"abort"===e?l.abort():"error"===e?"number"==typeof l.status?r(// File: protocol always yields status 0; see #8605, #14207
l.status,l.statusText):r(0,"error"):r(ta[l.status]||l.status,l.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(l.responseType||"text")||"string"!=typeof l.responseText?{binary:l.response}:{text:l.responseText},l.getAllResponseHeaders()))}},l.onload=a(),n=l.onerror=l.ontimeout=a("error"),void 0===l.onabort?l.onreadystatechange=function(){4===l.readyState&&e.setTimeout(function(){a&&n()})}:l.onabort=n,a=a("abort");try{l.send(t.hasContent&&t.data||null)}catch(t){// #14683: Only rethrow if this hasn't been notified as an error yet
if(a)throw t}},abort:function abort(){a&&a()}}}),_e.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),_e.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(e){return _e.globalEval(e),e}}}),_e.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),_e.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,a;return{send:function send(n,o){t=_e("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",a=function callback(e){t.remove(),a=null,e&&o("error"===e.type?404:200,e.type)}),pe.head.appendChild(t[0])},abort:function abort(){a&&a()}}}});var na=[],oa=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
_e.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var e=na.pop()||_e.expando+"_"+Mt++;return this[e]=!0,e}}),_e.ajaxPrefilter("json jsonp",function(t,a,n){var o=!1!==t.jsonp&&(oa.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&oa.test(t.data)&&"data"),r,i,l;// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(o||"jsonp"===t.dataTypes[0])// Delegate to script
return r=t.jsonpCallback=we(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,o?t[o]=t[o].replace(oa,"$1"+r):!1!==t.jsonp&&(t.url+=(qt.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return l||_e.error(r+" was not called"),l[0]},t.dataTypes[0]="json",i=e[r],e[r]=function(){l=arguments},n.always(function(){void 0===i?_e(e).removeProp(r):e[r]=i,t[r]&&(t.jsonpCallback=a.jsonpCallback,na.push(r)),l&&we(i)&&i(l[0]),l=i=void 0}),"script"}),ve.createHTMLDocument=function(){var e=pe.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),_e.parseHTML=function(e,t,a){if("string"!=typeof e)return[];"boolean"==typeof t&&(a=t,t=!1);var n,o,r;// Single tag
return(t||(ve.createHTMLDocument?(t=pe.implementation.createHTMLDocument(""),n=t.createElement("base"),n.href=pe.location.href,t.head.appendChild(n)):t=pe),o=Ie.exec(e),r=!a&&[],o)?[t.createElement(o[1])]:(o=C([e],t,r),r&&r.length&&_e(r).remove(),_e.merge([],o.childNodes))},_e.fn.load=function(e,t,a){var n=this,o=e.indexOf(" "),r,i,l;return-1<o&&(r=ee(e.slice(o)),e=e.slice(0,o)),we(t)?(a=t,t=void 0):t&&"object"===_typeof(t)&&(i="POST"),0<n.length&&_e.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){l=arguments,n.html(r?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
_e("<div>").append(_e.parseHTML(e)).find(r):// Otherwise use the full result
e)}).always(a&&function(e,t){n.each(function(){a.apply(this,l||[e.responseText,t,e])})}),this},_e.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){_e.fn[t]=function(e){return this.on(t,e)}}),_e.expr.pseudos.animated=function(e){return _e.grep(_e.timers,function(t){return e===t.elem}).length},_e.offset={setOffset:function setOffset(e,t,a){var n=_e.css(e,"position"),o=_e(e),r={},i,l,d,s,p,c,u;// Set position first, in-case top/left are set even on static elem
"static"===n&&(e.style.position="relative"),p=o.offset(),d=_e.css(e,"top"),c=_e.css(e,"left"),u=("absolute"===n||"fixed"===n)&&-1<(d+c).indexOf("auto"),u?(i=o.position(),s=i.top,l=i.left):(s=parseFloat(d)||0,l=parseFloat(c)||0),we(t)&&(t=t.call(e,a,_e.extend({},p))),null!=t.top&&(r.top=t.top-p.top+s),null!=t.left&&(r.left=t.left-p.left+l),"using"in t?t.using.call(e,r):o.css(r)}},_e.fn.extend({// offset() relates an element's border box to the document origin
offset:function offset(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){_e.offset.setOffset(this,e,t)});var t=this[0],a,n;if(t)// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
return t.getClientRects().length?(a=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,{top:a.top+n.pageYOffset,left:a.left+n.pageXOffset}):{top:0,left:0};// Get document-relative position by adding viewport scroll to viewport-relative gBCR
},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function position(){if(this[0]){var e=this[0],t={top:0,left:0},a,n,o;// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===_e.css(e,"position"))n=e.getBoundingClientRect();else{for(n=this.offset(),o=e.ownerDocument,a=e.offsetParent||o.documentElement;a&&(a===o.body||a===o.documentElement)&&"static"===_e.css(a,"position");)a=a.parentNode;a&&a!==e&&1===a.nodeType&&(t=_e(a).offset(),t.top+=_e.css(a,"borderTopWidth",!0),t.left+=_e.css(a,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:n.top-t.top-_e.css(e,"marginTop",!0),left:n.left-t.left-_e.css(e,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function offsetParent(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===_e.css(e,"position");)e=e.offsetParent;return e||Ze})}}),_e.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var a="pageYOffset"===t;_e.fn[e]=function(n){return Ue(this,function(e,n,o){// Coalesce documents and windows
var r;return Ce(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===o?r?r[t]:e[n]:void(r?r.scrollTo(a?r.pageXOffset:o,a?o:r.pageYOffset):e[n]=o)},e,n,arguments.length)}}),_e.each(["top","left"],function(e,t){_e.cssHooks[t]=M(ve.pixelPosition,function(e,a){if(a)// If curCSS returns percentage, fallback to offset
return a=H(e,t),mt.test(a)?_e(e).position()[t]+"px":a})}),_e.each({Height:"height",Width:"width"},function(e,t){_e.each({padding:"inner"+e,content:t,"":"outer"+e},function(a,n){_e.fn[n]=function(o,r){var i=arguments.length&&(a||"boolean"!=typeof o),l=a||(!0===o||!0===r?"margin":"border");return Ue(this,function(t,a,o){var r;return Ce(t)?0===n.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Z(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===o?// Get width or height on the element, requesting but not forcing parseFloat
_e.css(t,a,l):// Set width or height on the element
_e.style(t,a,o,l);// Get document width or height
},t,i?o:void 0,i)}})}),_e.each(["blur","focus","focusin","focusout","resize","scroll","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","mouseenter","mouseleave","change","select","submit","keydown","keypress","keyup","contextmenu"],function(e,t){_e.fn[t]=function(e,a){return 0<arguments.length?this.on(t,null,e,a):this.trigger(t)}}),_e.fn.extend({hover:function hover(e,t){return this.mouseenter(e).mouseleave(t||e)}}),_e.fn.extend({bind:function bind(e,t,a){return this.on(e,null,t,a)},unbind:function unbind(e,t){return this.off(e,null,t)},delegate:function delegate(e,t,a,n){return this.on(t,e,a,n)},undelegate:function undelegate(e,t,a){// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",a)}}),_e.proxy=function(e,t){var a,n,o;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(a=e[t],t=e,e=a),!!we(e))return n=ue.call(arguments,2),o=function(){return e.apply(t||this,n.concat(ue.call(arguments)))},o.guid=e.guid=e.guid||_e.guid++,o;// Simulated bind
},_e.holdReady=function(e){e?_e.readyWait++:_e.ready(!0)},_e.isArray=Array.isArray,_e.parseJSON=JSON.parse,_e.nodeName=r,_e.isFunction=we,_e.isWindow=Ce,_e.camelCase=f,_e.type=n,_e.now=Date.now,_e.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=_e.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))};var// Map over jQuery in case of overwrite
ra=e.jQuery,// Map over the $ in case of overwrite
ia=e.$;return _e.noConflict=function(t){return e.$===_e&&(e.$=ia),t&&e.jQuery===_e&&(e.jQuery=ra),_e},t||(e.jQuery=e.$=_e),_e})}),An=/** @class */function(o){function r(){// getInspector: () => ExtInspector;
var e=null!==o&&o.apply(this,arguments)||this;return e.rawData=[],e.setDataTable={headers:[],values:[]},e.currentPage=1,e.resultDataSelected=[],e.resultDataView={},e.resultDataLink={},e.resultDataDelete={},e.renderData=[],e.renderHeader=[],e.defaultConfig={headerbgcolor:"#343a40",headertextcolor:"#ffffff",valuetextcolor:"#000000",valuebgcolor:"#ffffff",valuelinkcolor:"#ffc107",valuebtnviewcolor:"#17a2b8",valuebtnviewtextcolor:"#ffffff",valuebtndeletecolor:"#dc3545",valuebtndeletetextcolor:"#ffffff",valuerowsummarycolor:"#9B9B9B",valuerowsummarytextcolor:"#ffffff",valuetextsummary:"Total",valuecolumnbackgroundcolor:"#ffffff",valuecolumntextcolor:"#000000",valueheaderbackgroundcolor:"#343a40",valueheadertextcolor:"#ffffff",confighassequence:!0,confighaspaging:!0,confighasperpage:10,confighascheckbox:!0,confighasview:!0,confighasdelete:!0,islink:!1,linkname:"Link",isheadermergerow:!1,isheadermergecol:!1,isfieldmergerow:!1,isfieldmergecol:!1,istextinline:!1,iscollapsenewrow:!0,padding:"0px",arrowup:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAABlVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACY9IepAAAAhnRSTlMAAQIDBAYHCAkKCw0ODxARExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKy0uLzAxMjM0Njc4R0pLTE1QVFVWWF5fZGhsd3h5e3x+f4CCg4WGiImLjI6PkZKUlZeYmpudnqCio6WmqKqrra+wsrS1t7m6vL7AwcPFzM/X2dzg6+3v8fP19/n7/YHAxywAAASaSURBVHja7d1ne1RVFMXxfe7EhgUTSpiE0BKsFBF7RVQUCzbEAhqsYFfsoiRmZvbn5g34TMyUe+eestc9a32A/czvP++mPFeE4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO4ziO87zi9vb0TfnyF5d7qqp/PjOVJf+GC3p9K0cz9G++rH17Ljv/nVd03Z7P3J9bgY3+vAoM8qu+kLk/nwLD/LkUmB7qV30xc38OBUb7m19gekXH7ETm/mYXKONvcoFy/uYWKOtvaoGZ0v5mFqjiV30pc3/zClT1N61Adb/qy5n7m1RgMn9zCmyZ0K96MnN/MwrU8TehwJZV1ZwL1PWjF9ha249dwIdf9ZXM/bgFfPlRC/jzq76auR+xwDavftXXMvejFfDvxyqw7V8NsNcz9+MUCOVHKRDOj1EgpB+hwPagfvsFQvtVT2Xut10ght9ygdkoftU3MvdbLRDPb7NATL/FAnH99grE9lsrMLum0fdm5n5LBXYk8dspkMqv+lbmfhsF2gn9Fgqk9au+nbk/dYH0/rQFLPhTFrDhT1fAij9VgTkzftV3MvenKGDLH7/AXEeN7XTm/rgF5g36Yxaw6Vd9N3N/rAJ2/XEKWPbHKGDbH77ATt/+cytQBbz7T9b8S82AncHyC1KBhRD+AAXew/LDFAjmD1HAQfkhCgT1AxQI7DdfYKEb2B+gwPsOym+6wK4YfsMFIvkDFPjAQfmNFtgdz2+yQFS/wQKR/eYK7IntN1YggT9AgQ8dlN9QgUR+MwWS+QMUOOug/CYKJPUbKLA3rT95geT+xAUM+JMW2GfBH6DAOQflT1bAjD9RgcWeGX+AAh85KH+CAsb80QuY80cuYNAftYBJf8QCRv0BCnzsoPyRCizZ9UcpYNofoMCyg/IHL7Dfuj9wAQB/0AIQ/oAF2hj+EL+gEBGRm/8G8Qco8KyIyBkYf4ACt4psBvL7L3BK5Ckkv/cCa04uQvm9F5iRv7D8vgssySqY33OBg/Ibmt9vgQU5Def3WmCTHMHzeyzwh0hrBc/vr8CjIvIIoN9XgctOROQ8oN9Pge5WERFp/Qro91Lg8LVTU78A+j0UePC/U1M/A/prFzjSd2rqEqC/ZoEH1p1qXQL01ypw+H+nWj8B+msUOLjhVOtHQP/EBQ4MONX6AdA/YYH7B55qfQ/on6jAfUNOVS5g42GQlQvcO/RU8R2gv2qB3j0jThXfAvqrFejdPfJU8Q2gv0qB3l1jThVfA/rLF+jtH3uq+ArQX7ZAb6nEqeIioL9cgd5iqVPFBUB/mQLdfSVPFV8C+scX6O4tfWpMAasPwx5doLunwin3BaB/dIHu7kqn3OeA/lEFOrsqnnKfAfqHF+gsVD7lPgX0DyvQ2TnBKfcJoH9wgc78RKfceUD/oAJr8xOecsuA/o0F1uYmPuXOrrt0QjA280//q15t17l1vO/S44KyTb/3fQF+W71bs9c/Ilm+Q3DmHrty7e1/oqh97JajTx9/8tCNgjW346Fjxx5uO+E4juM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juNy3FWTIpk42hMt4AAAAABJRU5ErkJggg==",arrowdown:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAABm1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2E+W/AAAAiHRSTlMAAQIDBAUGBwgJCwwNDg8QERITFBUWFxgbIiUnLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdJSktMTU5PUFFSVFxdXl9hYmRmZ2hpbG1vcHFzdHV4eXt8fn+AgoaPmpumqKqttLq8vsDBw8XHyMrMzs/R09XX2drc4OLk5ujp6+3v8fP1+fv9b/NVnQAABQ9JREFUeNrt3Wl3VFUQheEdu293BEVFUHECB8QBVBSHQBCJ84QDKs4SFY0KqEERUTQBg/Wz/SCRhPRwhzrnVN2z9w+oe593sVgh6RUAjuM4juM4juM4juM4juM4juM4juM4juM4juM4juM4juO4HFfs+HTuzLFPtnZ8vfbmmdn5U1+8cHPTOxMHl+S/LT7liH/Dl5feWr7a1OhQf04u76ibPwTbL15+6392Nji07jdZuZOFD//+VW8tM/X9Z1dfclLgCr/IczUPrb/S76PAGr/I8/X8v6+95KDAAL/Ii1p++wUG+usUuGaw33qBIX6Rl6r6/xh2yXSBoX6Rlysduna433KBEX6RV6r4z426ZLbASL/Iq6UPbRjtt1pgjF/ktbL+P8ddMllgrF/k9VKHrhvvt1ighF/kjTL+v8pcMleglF/k0NhD15fzWytQ0i/yppbfVoHSfpG3Rn8jYaH8JUMFKvhF3tby2ylQyS/yztBDG6v5rRSo6Bc5PMy/WPWSiQKV/SLvDjx0Y3W/hQI1/CLvDfKfr3MpeYFafpH31xzaVM+fukBNv8gRLb/IiYQFpmu/tXyw6tDm+v6UBRr4RT5cceimC00uJSvQyC/ykZY/VYGGfpGPl//919SfpkBj//LXA8WZ5pcSFFDwi+wBgCMal6IXUPHLUh9YJ+KwwLTSWx8GpsRhAS2/LAJHxV8BNb/IRpwWdwUU/XIr/hZvBTT9sg3z4qyAql+24DPxVUDXLxuwS1wVUPafBXpLngoo++UggBnxU0Dbv9ABMPG1mwLafrkNAND71UkBdf/UpcNX+yig7n/2/9MuCgT0uyiwT9t/YNX5SesFAvvNFwjuByZPGy6g7n9mwEMMF4jiN1wgkt9sAXX//qGPMlkgot9kgah+gwUi+4HJX0wVUPdPj32kqQIJ/KYKJPEbKqDu31fywUYKJPMbKZDQD/TTF1D37630+OQFEvuB/s9JCyT3Jy6g7p+q8ZdwwgIm/AEKHC9ZYK8Nf7IC6v6na38pnqSAIX+SAqb8QP9U5ALq/qa//CZyAXP+yAXU/U8qfFM2YgGT/ogFjPqB/nyUAur+J9R+NBelgGF/lAKm/UAvdAF1/x7lD2gELmDeH7iAA3/QAur+x4N8TC9YASd+oPdTkAJu/IEKqPsfC/hh7QAFXPkDFDjnyx+ggPJ2A1kXCO8Hej/m7bdc4FEg6wKx/FYLxPMDhcECjwBZF4jrt1cgth8ofrDkfxjIukAKv6UCafx2CqTyWymQzm+jQEo/UJxM7d8FZF0gtT91gfT+tAV2AlkXsOFPV8CKHyhOpPA/BGRdwJI/RQFb/vgFHgSyLmDPH7eART9QHI/lfwDIuoBVf6wCdv1AN0KB+4GsC9j2A93vw/p3AFkXsO8PW8CDP2SB+4CsC3jxhyrgxx+mgCd/iAK+/ED3u7z92gW2A1kX8OjXLODTD3S/1fHfC2RdwK9fp4Bnv0aBe4CsC3j3Ny3g3w905+r77wayLtAOf/0CbfEDnVoF7gKyLtAmf50C7fIDnW+q+bcBWRdon79agTb6qxTYCmRdoK3+sgXa6wc6Jf5fszuBrAu02z++QNv94wrcAWRdIAf/qAJ5+IHOsbz9wwrk4x9cICf/oAK3A1kXyM0PXPX5Cv75Lchw0xeW/bPrkeWK3bMLcnH+0C3IeBPgOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOI7jOPX9CzOCJxjh33fYAAAAAElFTkSuQmCC"},e.actionEvent={checkbox:"checkbox",view:"view",delete:"delete",link:"link",editext:"editext",onload:"onload"},e.headerbgcolor=e.defaultConfig.headerbgcolor,e.headertextcolor=e.defaultConfig.headertextcolor,e.valuetextcolor=e.defaultConfig.valuetextcolor,e.valuebgcolor=e.defaultConfig.valuebgcolor,e.valuelinkcolor=e.defaultConfig.valuelinkcolor,e.valuebtnviewcolor=e.defaultConfig.valuebtnviewcolor,e.valuebtnviewtextcolor=e.defaultConfig.valuebtnviewtextcolor,e.valuebtndeletecolor=e.defaultConfig.valuebtndeletecolor,e.valuebtndeletetextcolor=e.defaultConfig.valuebtndeletetextcolor,e.valuerowsummarycolor=e.defaultConfig.valuerowsummarycolor,e.valuerowsummarytextcolor=e.defaultConfig.valuerowsummarytextcolor,e.valuetextsummary=e.defaultConfig.valuetextsummary,e.configdatatable=[],e.configcustomtable=[],e.configsubheadertable=[],e.confighasperpage=e.defaultConfig.confighasperpage,e.confighassectionby="example1",e.pgxId="com.oneweb.tableeditor",e}// <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
return e(r,o),r.prototype.createRenderRoot=function(){return this},r.prototype.render=function(){return Re(wn||(wn=d(["\n      <style>\n        :host {\n          display: inline-block !important;\n        }\n        table-editor{\n          display: block;\n        }\n        table-editor *{\n         ","\n        }\n        .table td, .table th{\n          vertical-align: middle !important;\n        }\n        .table th{\n          border-right: 1px solid #dee2e6;\n        }\n        .table td{\n          vertical-align: middle !important;\n          border: 1px solid #dee2e6;\n          // border-left: 1px solid #dee2e6;\n          // border-rigth: 1px solid #dee2e6;\n        }\n        td.td-summary{\n          border:0;\n          border-bottom: 1px solid #dee2e6;\n        }\n        td img, .td-img{\n          width:30px;\n          height:30px;\n          margin-right:10px;\n        }    \n        th,td{\n          outline:0\n        }\n        select:active, select:hover,select:focus {\n          outline: 0;\n        \n        }\n  \n      .paging-select{\n        border-radius: 0;\n        border: 0;\n        border-bottom: solid 1px #dee2e6;\n        border-top: solid 1px #dee2e6;\n        display: block;\n        width: 100%;\n        height: calc(2.25rem + 2px);\n        padding: .375rem .75rem;\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n      }\n      .td-section > .section-text{\n        float:left;\n        padding-left:20px;\n      }\n      .td-section > .section-icon{\n        float:right;\n        padding-right:10px;\n        width:35px;\n        height:20px;\n        cursor:pointer;\n      }\n      // .custom-control-input:checked~.custom-control-label::before {\n      //   background-color: transparent !important;\n      //   border-color:transparent!important;\n      // }\n      </style>\n     <div style=\"display:block\">\n\n      <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\" crossorigin=\"anonymous\">\n      <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\" crossorigin=\"anonymous\"></script>\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <table  class=\"te-table table text-center\">\n      <thead>\n      </thead>\n      <tbody>\n      </tbody>\n    </table>\n    <div class=\"w-100\" style=\"height:50px\">\n    <span class=\"paging-text float-left ml-1\">  </span>\n    <ul class=\"pagination float-right\">\n    <li data-paging=\"paging-first\" @click="," class=\"page-item\"><a class=\"page-link\">First</a> </li>\n    <li data-paging=\"paging-left\"  @click="," class=\"page-item\"><a class=\"page-link\" >&#60;</a></li>\n\n    <li class=\"page-item\"> \n    <select data-paging=\"paging-input\" @change=","   class=\"text-center paging-select\">\n    </select>\n    </li>\n    <li data-paging=\"paging-right\" @click="," class=\"page-item\"><a class=\"page-link\">&#62;</a> </li>\n    <li data-paging=\"paging-last\" @click="," class=\"page-item\"><a class=\"page-link\">Last</a> </li>\n  </ul>\n    </div>\n    </div>\n    "],["\n      <style>\n        :host {\n          display: inline-block !important;\n        }\n        table-editor{\n          display: block;\n        }\n        table-editor *{\n         ","\n        }\n        .table td, .table th{\n          vertical-align: middle !important;\n        }\n        .table th{\n          border-right: 1px solid #dee2e6;\n        }\n        .table td{\n          vertical-align: middle !important;\n          border: 1px solid #dee2e6;\n          // border-left: 1px solid #dee2e6;\n          // border-rigth: 1px solid #dee2e6;\n        }\n        td.td-summary{\n          border:0;\n          border-bottom: 1px solid #dee2e6;\n        }\n        td img, .td-img{\n          width:30px;\n          height:30px;\n          margin-right:10px;\n        }    \n        th,td{\n          outline:0\n        }\n        select:active, select:hover,select:focus {\n          outline: 0;\n        \n        }\n  \n      .paging-select{\n        border-radius: 0;\n        border: 0;\n        border-bottom: solid 1px #dee2e6;\n        border-top: solid 1px #dee2e6;\n        display: block;\n        width: 100%;\n        height: calc(2.25rem + 2px);\n        padding: .375rem .75rem;\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n      }\n      .td-section > .section-text{\n        float:left;\n        padding-left:20px;\n      }\n      .td-section > .section-icon{\n        float:right;\n        padding-right:10px;\n        width:35px;\n        height:20px;\n        cursor:pointer;\n      }\n      // .custom-control-input:checked~.custom-control-label::before {\n      //   background-color: transparent !important;\n      //   border-color:transparent!important;\n      // }\n      </style>\n     <div style=\"display:block\">\n\n      <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\" integrity=\"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS\" crossorigin=\"anonymous\">\n      <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\" integrity=\"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k\" crossorigin=\"anonymous\"></script>\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <table  class=\"te-table table text-center\">\n      <thead>\n      </thead>\n      <tbody>\n      </tbody>\n    </table>\n    <div class=\"w-100\" style=\"height:50px\">\n    <span class=\"paging-text float-left ml-1\">  </span>\n    <ul class=\"pagination float-right\">\n    <li data-paging=\"paging-first\" @click="," class=\"page-item\"><a class=\"page-link\">First</a> </li>\n    <li data-paging=\"paging-left\"  @click="," class=\"page-item\"><a class=\"page-link\" >&#60;</a></li>\n\n    <li class=\"page-item\"> \n    <select data-paging=\"paging-input\" @change=","   class=\"text-center paging-select\">\n    </select>\n    </li>\n    <li data-paging=\"paging-right\" @click="," class=\"page-item\"><a class=\"page-link\">&#62;</a> </li>\n    <li data-paging=\"paging-last\" @click="," class=\"page-item\"><a class=\"page-link\">Last</a> </li>\n  </ul>\n    </div>\n    </div>\n    "])),"PGD"===window.__ENV__?Re(xn||(xn=d(["pointer-events: none;"],["pointer-events: none;"]))):Re(vn||(vn=d(["pointer-events: auto;"],["pointer-events: auto;"]))),this.handlePaging,this.handlePaging,this.handlePaging,this.handlePaging,this.handlePaging)},r.prototype.getInspector=function(){return{title:"PGD Demo",sidebar:{action:{eventTypes:["clientX","clientY"]//examples
},// style: {
//   link: false,
//   text: {
//     font: true,
//     textStyle: true,
//     paragraph: false,
//     alignment: true,
//     color: true
//   },
//   boxSize: true,
//   background: {
//     image: false,
//     color: false
//   },
//   border: {
//     size: true,
//     radius: true
//   },
//   appearance: {
//     opacity: true,
//     padding: true,
//     margin: true
//   },
//   boxShadow: true
// },
specific:{title:"Extension",sections:[{title:"STYLES",forms:[{type:"color",label:"Header Background Color",attribute:"headerbgcolor",defaultValue:this.defaultConfig.headerbgcolor},{type:"color",label:"Header Text Color",attribute:"headertextcolor",defaultValue:this.defaultConfig.headertextcolor},{type:"color",label:"Body Background Color",attribute:"valuebgcolor",defaultValue:this.defaultConfig.valuebgcolor},{type:"color",label:"Body Text Color",attribute:"valuetextcolor",defaultValue:this.defaultConfig.valuetextcolor},{type:"color",label:"Link Color",attribute:"valuelinkcolor",defaultValue:this.defaultConfig.valuelinkcolor},{type:"color",label:"Button View Background Color",attribute:"valuebtnviewcolor",defaultValue:this.defaultConfig.valuebtnviewcolor},{type:"color",label:"Button View Text Color",attribute:"valuebtnviewtextcolor",defaultValue:this.defaultConfig.valuebtnviewtextcolor}]},{title:"OPTION",forms:[{type:"boolean",label:"Show Sequence",attribute:"confighassequence"},{type:"boolean",label:"Show View Button",attribute:"confighasview"},{type:"boolean",label:"Show Delete Button",attribute:"confighasdelete"},{type:"boolean",label:"Show Checkbox",attribute:"confighascheckbox"},{type:"boolean",label:"Merge All Row",attribute:"confighasmergeallrow"},{type:"boolean",label:"Merge All Column",attribute:"confighasmergeallcol"},{type:"boolean",label:"Merge Header",attribute:"confighasmergeheader"},{type:"dependency",label:"Show Paging",attribute:"confighaspaging",// defaultValue: this.defaultConfig.confighaspaging,
values:{true:{forms:[{type:"string",label:"Perpage",attribute:"confighasperpage",defaultValue:this.defaultConfig.confighasperpage}]},false:{}}},{type:"dependency",label:"Use Group By",attribute:"confighasusegroupby",// defaultValue: this.defaultConfig.confighaspaging,
values:{true:{forms:[{type:"store",attribute:"confighasgroupby",label:"Group By",placeholder:"Group By"},{type:"dependency",label:"Calculate Summary fields",attribute:"confighasumaryvalue",placeholder:"Calculate Summary fields",// defaultValue: this.defaultConfig.confighaspaging,
values:{true:{forms:[{type:"string",label:"Text Summary",attribute:"valuetextsummary",defaultValue:this.defaultConfig.valuetextsummary},{type:"color",label:"Background Color",attribute:"valuerowsummarycolor",defaultValue:this.defaultConfig.valuerowsummarycolor},{type:"color",label:"Text Color",attribute:"valuerowsummarytextcolor",defaultValue:this.defaultConfig.valuerowsummarytextcolor}]},false:{}}}]},false:{}}},{type:"dependency",label:"Enable Sub Header",attribute:"confighasusesubheader",values:{true:{forms:[{type:"dependency",label:"Level Of Sub Header",attribute:"configlevelsubheader",placeholder:"Level Of Sub Header",// defaultValue: this.defaultConfig.confighaspaging,
values:{1:{forms:[{type:"array",attribute:"configsubheader0",label:"Add Sub Header",fields:[{type:"string",attribute:"header",label:"Header"}]}]},2:{forms:[{type:"array",attribute:"configsubheader1",label:"Add Header",fields:[{type:"string",attribute:"header",label:"Header"}]}]},3:{forms:[{type:"array",attribute:"configsubheader2",label:"Add Header",fields:[{type:"string",attribute:"header",label:"Header"}]}]},4:{forms:[{type:"array",attribute:"configsubheader3",label:"Add Header",fields:[{type:"string",attribute:"header",label:"Header"}]}]}}}]},false:{}}}]},{title:"DATA",forms:[{type:"array",attribute:"configdatatable",label:"Add Header",fields:[{type:"string",attribute:"header",label:"Header"},{type:"store",attribute:"value",label:"Field",placeholder:"Field form Microflow"},{type:"boolean",attribute:"isfieldmergecol",label:"Merge this Column",placeholder:"Merge Field Column",defaultValue:this.defaultConfig.isfieldmergecol},{type:"boolean",attribute:"istextinline",label:"Enable Text Inline",placeholder:"Use Text Inline Mode",defaultValue:this.defaultConfig.istextinline},{type:"icon",attribute:"isimg",label:"Insert Image",placeholder:"Insert Image"},// {
//   type: "color",
//   label: "Column Background Color",
//   attribute: "valuecolumnbackgroundcolor",
//   placeholder: "Column Background Color",
//  // defaultValue: this.defaultConfig.valuecolumnbackgroundcolor,
// },
// {
//   type: "color",
//   label: "Column Text Color",
//   attribute: "valuecolumntextcolor",
//   placeholder: "Column Text Color",
//  // defaultValue: this.defaultConfig.valuecolumntextcolor,
// },
// {
//   type: "color",
//   label: "Header Background Color",
//   attribute: "valueheaderbackgroundcolor",
//   placeholder: "Header Background Color",
//  // defaultValue: this.defaultConfig.valueheaderbackgroundcolor,
// },
// {
//   type: "color",
//   label: "Header Text Color",
//   attribute: "valueheadertextcolor",
//   placeholder: "Header Text Color",
//  // defaultValue: this.defaultConfig.valueheadertextcolor,
// },
// {
//   type: "string",
//   label: "Custom Class Table",
//   attribute: "cusclassthistable",
//   placeholder: "Custom Class Table",
// },
{type:"string",label:"Custom Class Header",attribute:"cusclassthisheader",placeholder:"Custom Class Header"},{type:"string",label:"Custom Class Value",attribute:"cusclassthisvalue",placeholder:"Custom Class Value"}]}]},{title:"GROUP DATA",forms:[{type:"array",attribute:"configsectiondata",label:"Add Section",fields:[{type:"store",attribute:"sectionby",label:"Section By Field"},{type:"string",attribute:"sectionname",label:"Name"},{type:"icon",attribute:"sectionicon",label:"Icon"},{type:"dependency",label:"Enable Collapse",attribute:"sectioncollapse",values:{true:{forms:[{type:"boolean",label:"Collapse on New Row",attribute:"iscollapsenewrow",defaultValue:this.defaultConfig.iscollapsenewrow}]}}},{type:"boolean",attribute:"sectionhideattr",label:"Hidden Field Section By"},{type:"string",attribute:"sectionclass",label:"Class Name"}]}]},{title:"CUSTOMS",forms:[{type:"array",attribute:"configcustomtable",label:"Add Custom",fields:[{type:"string",attribute:"cusattributekey",label:"Attribute Key",placeholder:"Attribute Key"},{type:"string",attribute:"cusattributevalue",label:"Attribute value",placeholder:"Attribute Value"},{type:"string",attribute:"cususeinlinetext",label:"Enable Inline Text",placeholder:"Enable Inline Text"},{type:"boolean",label:"Merge This Row",attribute:"cusmergecellrow"},{type:"option",label:"Affected",attribute:"cusaffected",options:[{label:"To This Field",value:"one"},{label:"To This Row",value:"all"}]},{type:"color",label:"Background Color",attribute:"cusbackgroundcolor"},{type:"color",label:"Text Color",attribute:"custextcolor"},{type:"option",label:"Text Align",attribute:"custextalign",options:[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}]},{type:"string",label:"Padding Top",attribute:"cuspaddingtop",defaultValue:this.defaultConfig.padding},{type:"string",label:"Padding Left",attribute:"cuspaddingleft",defaultValue:this.defaultConfig.padding},{type:"string",label:"Padding Right",attribute:"cuspaddingright",defaultValue:this.defaultConfig.padding},{type:"string",label:"Padding Bottom",attribute:"cuspaddingbot",defaultValue:this.defaultConfig.padding}]},{type:"string",label:"Custom Class Table",attribute:"cusclasstable"},{type:"string",label:"Custom Class Header",attribute:"cusclassheader"},{type:"string",label:"Custom Class value",attribute:"cusclassvalue"}]}// {
//   title: "Data",
//   forms: [
//     {
//       type: "string",
//       label: "Name",
//       title: "PGDDemo Name",                  //Optional
//       attribute: "name"
//     },
//     {
//       type: "number",
//       label: "Size",
//       title: "PGDDemo Size",                  //Optional
//       attribute: "size",
//       min: -9999,
//       max: 9999
//     },
//     {
//       type: "option",
//       label: "Font",
//       title: "PGDDemo Font",                  //Optional
//       attribute: "font",
//       options: [
//         {
//           label: "Arial",
//           value: "1"
//         },
//         {
//           label: "Courier",
//           value: "2"
//         },
//         {
//           label: "Gadget",
//           value: "3"
//         },
//         {
//           label: "Georgia",
//           value: "4"
//         },
//         {
//           label: "Impact",
//           value: "5"
//         }
//       ],
//     },
//     {
//       type: "boolean",
//       label: "Enable",
//       title: "PGDDemo Enable",                //Optional
//       attribute: "enable"
//     },
//     {
//       type: "color",
//       label: "Color",
//       title: "PGDDemo Color",                 //Optional
//       attribute: "color"
//     }
//   ]
// }
]}},toolbar:{move:!0,clone:!0,selectParent:!0,connectToData:!0,remove:!0}}},r.prototype.firstUpdated=function(){this.initialSetup()},r.prototype.initialSetup=function(){var e=this;console.log("this.data:",this.data),"PGD"!==window.__ENV__&&this.data&&(this.rawData=this.data||[]);var t=G(this.rawData.length/this.defaultConfig.confighasperpage);yn(this).find(".pagination").find("select").html(null),yn(this).find(".pagination").find("select").append("<option value=\"1\">1</option>");for(var a=1;a<t;a++)yn(this).find(".pagination").find("select").append("<option value=\""+(a+1)+"\">"+(a+1)+"</option>");this.rawData=[{example1:"a",example2:"7,500",example3:"4",example4:"2"},{example1:"a",example2:"yyy",example3:"4",example4:"4saa"},{example1:"a",example2:"xxx",example3:"5",example4:"ccsa"},{example1:"a",example2:"3,511.11",example3:"5",example4:"4xx"},{example1:"a",example2:"cda",example3:"5",example4:"14f"},{example1:"field132",example2:"field6",example3:"5",example4:"<img src='https://www.svgrepo.com/show/92827/avatar.svg'/><span>testimg</span>"},{example1:"field1",example2:"field6",example3:"8",example4:"field9"},{example1:"field1",example2:"field6",example3:"8",example4:"field8x"},{example1:"field1",example2:"field5",example3:"8",example4:"field7"}],this.createData().then(function(t){console.log("Data Table \u261B ",t),e.setDataTable=t,e.tableConfig()})},r.prototype.attributeChangedCallback=function(e,t,a){console.log("attCallback: ",e,a),this[e]=a,"confighasview"===e||"confighascheckbox"===e||"confighaspaging"===e||"confighassequence"===e||"confighasdelete"===e||"confighasusesubheader"===e?this[e]=!0:"configdatatable"===e&&(this[e]=JSON.parse(a)),this.initialSetup(),o.prototype.attributeChangedCallback.call(this,e,t,a)},r.prototype.updated=function(){console.log("----update-----"),this.initialSetup()},r.prototype.createData=function(){return a(this,void 0,void 0,function(){var e,t,a,o;return n(this,function(){for(this.configdatatable&&0!=this.configdatatable.length||(this.configdatatable=[{header:"header1",value:"example1",isfieldmergecol:!0,istextinline:!1,isimg:"fa fa-cut",valuecolumnbackgroundcolor:"red",valuecolumntextcolor:"white",valueheaderbackgroundcolor:"blue",valueheadertextcolor:"orange"},{header:"header2",value:"example2",isfieldmergecol:!1},{header:"header3",value:"example3",isfieldmergecol:!1},{header:"header4",value:"example4",islink:this.defaultConfig.islink,linkname:this.defaultConfig.linkname}]),this.configcustomtable&&0!=this.configcustomtable.length||(this.configcustomtable=[{cusattributekey:"example1",cusattributevalue:"field2",cususerelativeword:!0,cususeinlinetext:!1,custextcolor:"blue",custextalign:"right",cusbackgroundcolor:"red",cuspaddingtop:"10px",cuspaddingbot:"10px",cuspaddingleft:"10px",cuspaddingright:"10px",cusmergecellrow:!0,cusaffected:"one"}]),e=[],t=[],a=0;a<this.configdatatable.length;a++)for(o in this.configdatatable[a])"header"==o?e.push(this.configdatatable[a][o]):"value"==o&&t.push({data:this.configdatatable[a][o],islink:this.configdatatable[a].islink,linkname:this.configdatatable[a].linkname,isfieldmergerow:this.configdatatable[a].isfieldmergerow,isfieldmergecol:this.configdatatable[a].isfieldmergecol,istextinline:this.configdatatable[a].istextinline,isimg:this.configdatatable[a].isimg,cusclassthisheader:this.configdatatable[a].cusclassthisheader,cusclassthisvalue:this.configdatatable[a].cusclassthisvalue});return[2/*return*/,{headers:e,values:t}]})})},r.prototype.createColumn=function(){var e=this;this.calMergeCell().then(function(){return a(e,void 0,void 0,function(){var e=this,t,o,r,l,d,s,p,c;return n(this,function(i){switch(i.label){case 0:if(console.log("this.setDataTable",this.setDataTable),t="",o="",this.confighascheckbox&&(t+="<th><div class=\"custom-control custom-checkbox\">\n      <input data-index=\"all\" type=\"checkbox\" class=\"custom-control-input\" id=\"te-checkbox-all\">\n      <label class=\"custom-control-label\" for=\"te-checkbox-all\"></label>\n    </div></th>"),this.confighassequence&&(t+="<th>#</th>"),this.setDataTable.headers.forEach(function(a,n){t+=e.setDataTable.values[n].cusclassthisheader?"<th class=\""+e.setDataTable.values[n].cusclassthisheader+"\" >"+a+"</th>":"<th>"+a+"</th>"}),this.confighasview&&(t+="<th></th>"),r=this.currentPage*this.perPage-this.perPage,l=this.perPage*this.currentPage,r>this.rawData.length-1&&0<this.rawData.length&&(--this.currentPage,r=this.currentPage*this.perPage-this.perPage,l=this.perPage*this.currentPage),"PGD"===window.__ENV__)return[3/*break*/,5];d=function(t){var r;return n(this,function(i){switch(i.label){case 0:return t<s.rawData.length?(o+="<tr>",s.confighascheckbox&&(o+="<td><div class=\"custom-control custom-checkbox\">\n              <input data-index=\""+t+"\" type=\"checkbox\" class=\"custom-control-input\" id=\"te-checkbox-"+t+"\">\n              <label class=\"custom-control-label\" for=\"te-checkbox-"+t+"\"></label>\n            </div></td>"),s.confighassequence&&(o+="<td>"+(t+1)+"</td> "),[4/*yield*/,s.setDataTable.values.forEach(function(r){return a(e,void 0,void 0,function(){var e,a,i;return n(this,function(){return e="",a=!1,i="",r.islink&&(e="<a data-attribute=\""+r.data+"\"  data-index=\""+t+"\" href=\""+this.rawData[t][r.data]+"\" target=\"_blank\" id=\"te-value-link-"+t+"\" class=\"stretched-link te-value-link\">"+r.linkname+"</a>"),r.istextinline&&(a=!0),r.isimg&&(i="<span class=\"td-img "+r.isimg+"\"></span>"),o+=r.cusclassthisvalue?"<td class=\""+r.cusclassthisvalue+"\" data-index=\""+t+"\" data-attribute=\""+r.data+"\" contenteditable=\""+a+"\">"+i+(e||this.rawData[t][r.data])+"</td>":"<td data-index=\""+t+"\" data-attribute=\""+r.data+"\" contenteditable=\""+a+"\">"+i+(e||this.rawData[t][r.data])+"</td>",[2/*return*/]})})})]):[3/*break*/,2];case 1:i.sent(),r="",s.confighasview&&(r+="<a  data-index=\""+t+"\" id=\"te-value-view-"+t+"\" class=\"btn stretched-link  te-value-view\">View</a> "),s.confighasdelete&&(r+="<a  data-index=\""+t+"\" id=\"te-value-delete-"+t+"\" class=\"btn stretched-link  te-value-delete\">Delete</a>"),(s.confighasview||s.confighasdelete)&&(o+="<td>"+r+"</td>"),o+="</tr>",i.label=2;case 2:return[2/*return*/];}})},s=this,p=r,i.label=1;case 1:return p<l?[5/*yield**/,d(p)]:[3/*break*/,4];case 2:i.sent(),i.label=3;case 3:return p++,[3/*break*/,1];case 4:return(0===this.rawData.length||r>this.rawData.length-1)&&(c=this.setDataTable.headers.length,this.confighascheckbox&&(c+=1),this.confighasview&&(c+=1),this.confighasdelete&&(c+=1),o+="<tr><td class=\"text-center\" colspan=\""+c+"\">No data</td></tr>"),[3/*break*/,6];case 5:this.setDataTable.values.forEach(function(t,a){if(e.confighascheckbox&&0===a&&(o+="<td><div class=\"custom-control custom-checkbox\">\n              <input data-index=\""+a+"\" type=\"checkbox\" class=\"custom-control-input\" id=\"te-checkbox-"+a+"\">\n              <label class=\"custom-control-label\" for=\"te-checkbox-"+a+"\"></label>\n            </div></td>"),e.confighassequence&&0===a&&(o+="<td>"+(a+1)+"</td> "),o+=t.islink?"<td> <a  data-index=\""+a+"\" href=\""+t.data+"\" target=\"_blank\" id=\"te-value-link-"+a+"\" class=\"stretched-link te-value-link\">"+t.data+"</a></td>":t.cusclassthisvalue?"<td class=\""+t.cusclassthisvalue+"\">"+t.data+"</td>":"<td>"+t.data+"</td>",a===e.setDataTable.values.length-1){var n="";e.confighasview&&(n+="<a  data-index=\""+a+"\" id=\"te-value-view-"+a+"\" class=\"btn stretched-link  te-value-view\">View</a> "),e.confighasdelete&&(n+="<a  data-index=\""+a+"\" id=\"te-value-delete-"+a+"\" class=\"btn stretched-link  te-value-delete\">Delete</a>"),(e.confighasview||e.confighasdelete)&&(o+="<td>"+n+"</td>")}}),i.label=6;case 6:return t="<tr>"+t+"</tr>",yn(this).find(".pagination").find("select").val(this.currentPage),yn(this).find(".te-table").find("thead").html(t),yn(this).find(".te-table").find("tbody").html(o),this.confighaspaging?l<this.rawData.length?yn(this).find(".paging-text").text("Showing "+(r+1)+" to "+l+" of "+this.rawData.length+" entries"):0==this.rawData.length?yn(this).find(".paging-text").text("Showing "+this.rawData.length+" to "+this.rawData.length+" of "+this.rawData.length+" entries"):yn(this).find(".paging-text").text("Showing "+(r+1)+" to "+this.rawData.length+" of "+this.rawData.length+" entries"):yn(this).find(".paging-text").text(" "),this.handleCheckBox(),this.handleBtn(),this.handleInlineInput(),this.createGroupByData(),this.createSectionByData(),setTimeout(function(){e.createMergeData()}),this.tableStyle(),this.createSubHeader(),setTimeout(function(){e.handleOnload()},1e3),[2/*return*/];}})})})},r.prototype.tableConfig=function(){this.configPaging(),this.createColumn()},r.prototype.tableStyle=function(){yn(this).find(".te-table").find("thead").css("background",this.headerbgcolor),yn(this).find(".te-table").find("thead").css("color",this.headertextcolor),yn(this).find(".te-table").find("tbody").css("background",this.valuebgcolor),yn(this).find(".te-table").find("tbody").css("color",this.valuetextcolor),yn(this).find(".te-table").find("tbody").find(".te-value-link").css("color",this.valuelinkcolor),yn(this).find(".te-table").find("tbody").find(".te-value-view").css("color",this.valuebtnviewtextcolor),yn(this).find(".te-table").find("tbody").find(".te-value-view").css("background",this.valuebtnviewcolor),yn(this).find(".te-table").find("tbody").find(".te-value-delete").css("color",this.valuebtndeletetextcolor),yn(this).find(".te-table").find("tbody").find(".te-value-delete").css("background",this.valuebtndeletecolor),yn(this).find(".te-table").find("tbody").find("[data-isgroup=\"true\"]").css("background",this.valuerowsummarycolor),yn(this).find(".te-table").find("tbody").find("[data-isgroupdraft=\"true\"]").css("background",this.valuerowsummarycolor),yn(this).find(".te-table").find("tbody").find("[data-isgroup=\"true\"]").css("color",this.valuebtnviewtextcolor),yn(this).find(".te-table").find("tbody").find("[data-isgroupdraft=\"true\"]").css("color",this.valuebtnviewtextcolor),yn(this).find(".te-table").addClass(this.cusclasstable),yn(this).find(".te-table").find("thead").find("th").addClass(this.cusclassheader),yn(this).find(".te-table").find("tbody").find("td:not(\".td-summary\")").addClass(this.cusclassvalue)},r.prototype.configPaging=function(){this.perPage=this.confighasperpage,this.confighaspaging?yn(this).find(".pagination").css("display","flex"):yn(this).find(".pagination").css("display","none")},r.prototype.handleCheckBox=function(){var e=this;this.resultDataSelected=[],this.resultDataLink={},this.resultDataView={},this.resultDataSelected.forEach(function(t){yn(e).find(".te-table").find("tbody").find("input[id=te-checkbox-"+t.index+"]").prop("checked",!0)}),yn(this).find(".te-table").find("thead").find(".custom-control-input").unbind().bind("change",function(t){yn(t.currentTarget).prop("checked")?(yn(e).find(".te-table").find("tbody").find(".custom-control-input").prop("checked",!0),yn(e).find(".te-table").find("tbody").find(".custom-control-input").each(function(t,a){var n=parseInt(yn(a).attr("data-index"));e.resultDataSelected.push({index:n,data:e.rawData[n]})})):(yn(e).find(".te-table").find("tbody").find(".custom-control-input").prop("checked",!1),e.resultDataSelected=[]);var a={action:e.actionEvent.checkbox,data:{microflowName:e.pgData,microflowData:e.resultDataSelected}},n=new CustomEvent("table-editor-event",{detail:{results:a},bubbles:!0,composed:!0});e.dispatchEvent(n),console.log("Result Selected \u261B",a)}),yn(this).find(".te-table").find("tbody").find(".custom-control-input").unbind().bind("change",function(t){var a=parseInt(yn(t.currentTarget).attr("data-index"));yn(t.currentTarget).prop("checked")?e.resultDataSelected.push({index:a,data:e.rawData[a]}):e.resultDataSelected=e.resultDataSelected.filter(function(e){return e.index!==a}),yn(e).find(".te-table").find("tbody").find(".custom-control-input").length===e.resultDataSelected.length?yn(e).find(".te-table").find("thead").find(".custom-control-input").prop("checked",!0):0===e.resultDataSelected.length&&yn(e).find(".te-table").find("thead").find(".custom-control-input").prop("checked",!1);var n={action:e.actionEvent.checkbox,data:{microflowName:e.pgData,microflowData:e.resultDataSelected}},o=new CustomEvent("table-editor-event",{detail:{results:n},bubbles:!0,composed:!0});e.dispatchEvent(o),console.log("Result Selected \u261B",n)})},r.prototype.handleOnload=function(){var e={action:this.actionEvent.onload,data:{microflowName:this.pgData,microflowData:this.rawData}},t=new CustomEvent("table-editor-event",{detail:{results:e},bubbles:!0,composed:!0});this.dispatchEvent(t)},r.prototype.handleInlineInput=function(){var e=this;yn(this).find(".te-table").find("tbody").find("td").unbind().bind("input",this.debounce(function(t){var a=yn(t.currentTarget);e.rawData[a.attr("data-index")][a.attr("data-attribute")]=yn(t.currentTarget).text();var n={action:e.actionEvent.editext,data:{microflowName:e.pgData,microflowData:e.rawData}},o=new CustomEvent("table-editor-event",{detail:{results:n},bubbles:!0,composed:!0});e.dispatchEvent(o)},1e3))},r.prototype.handleBtn=function(){var e=this;yn(this).find(".te-table").find("tbody").find("a").unbind().bind("click",function(t){var a=parseInt(yn(t.currentTarget).attr("data-index"));e.resultDataLink={index:a,data:e.rawData[a]};var n={action:e.actionEvent.link,data:{microflowName:e.pgData,microflowData:e.resultDataLink}},o=new CustomEvent("table-editor-event",{detail:{results:n},bubbles:!0,composed:!0});e.dispatchEvent(o),console.log("Result link \u261B",n)}),yn(this).find(".te-table").find("tbody").find(".te-value-view").unbind().bind("click",function(t){var a=parseInt(yn(t.currentTarget).attr("data-index"));e.resultDataView={index:a,data:e.rawData[a]};var n={action:e.actionEvent.view,data:{microflowName:e.pgData,microflowData:e.resultDataView}},o=new CustomEvent("table-editor-event",{detail:{results:n},bubbles:!0,composed:!0});e.dispatchEvent(o),console.log("Result view \u261B",n)}),yn(this).find(".te-table").find("tbody").find(".te-value-delete").unbind().bind("click",function(t){var a=parseInt(yn(t.currentTarget).attr("data-index"));e.resultDataDelete={index:a,data:e.rawData[a]};var n={action:e.actionEvent.delete,data:{microflowName:e.pgData,microflowData:e.resultDataDelete}},o=new CustomEvent("table-editor-event",{detail:{results:n},bubbles:!0,composed:!0});e.dispatchEvent(o),console.log("Result view \u261B",n)})},r.prototype.handlePaging=function(e){if("paging-first"===yn(e.currentTarget).attr("data-paging"))this.currentPage=1;else if("paging-right"===yn(e.currentTarget).attr("data-paging"))this.currentPage*this.perPage<this.rawData.length&&(this.currentPage+=1);else if("paging-input"===yn(e.currentTarget).attr("data-paging")){var t=parseInt(yn(e.currentTarget).val().toString());this.currentPage=1>t?1:t*this.perPage-this.perPage<this.rawData.length?t:G(this.rawData.length/this.perPage)}else"paging-left"===yn(e.currentTarget).attr("data-paging")?1<this.currentPage&&(this.currentPage-=1):"paging-last"===yn(e.currentTarget).attr("data-paging")&&(this.currentPage=G(this.rawData.length/this.perPage));this.createColumn(),this.tableStyle()},r.prototype.handleSection=function(){var e=this;yn("[data-section=\"icon\"]").unbind().bind("click",function(t){// console.log("xx",$(event.currentTarget).parent())
var a=yn(yn(t.currentTarget).parents("[data-issection=\"true\"]"));// console.log(parentTr.nextUntil(`[data-section_level="${parseInt(parentTr.attr('data-section_level'))}"]`))
// console.log(parentTr.nextUntil(`[data-section_level="${parseInt(parentTr.attr('data-section_level'))+1}"],[data-section_level="${parentTr.attr('data-section_level')}"]`))
// parentTr.nextUntil(`[data-section_level="${parentTr.attr('data-section_level')}"],[data-section_level="${parseInt(parentTr.attr('data-section_level'))-1}"]`).toggle();
"hide"===a.attr("data-collaspe-action")?(a.attr("data-collaspe-action","show"),a.nextUntil("[data-section_level=\""+a.attr("data-section_level")+"\"],[data-section_level=\""+(parseInt(a.attr("data-section_level"))-1)+"\"]").show()):(a.attr("data-collaspe-action","hide"),a.nextUntil("[data-section_level=\""+a.attr("data-section_level")+"\"],[data-section_level=\""+(parseInt(a.attr("data-section_level"))-1)+"\"]").hide()),a.nextUntil("[data-issection=\"true\"]").is(":visible")?yn(t.currentTarget).find("[data-section=\"icon\"]").attr("src",e.defaultConfig.arrowup):yn(t.currentTarget).find("[data-section=\"icon\"]").attr("src",e.defaultConfig.arrowdown)})},r.prototype.calMergeCell=function(){var e,t;return a(this,void 0,void 0,function(){var o=this,r,d,d,s,p,c,u,g,f,d,h,m,y,A,u,d,b;return n(this,function(i){switch(i.label){case 0:return this.renderData=this.rawData,this.renderHeader=[],r={},[4/*yield*/,this.configsubheader3];case 1:return i.sent()&&this.configsubheader3.forEach(function(e,t){return a(o,void 0,void 0,function(){return n(this,function(){return r["header"+t]=e.header,[2/*return*/]})})}),0<Object.keys(r).length&&this.renderHeader.push(r),r={},[4/*yield*/,this.configsubheader2];case 2:return i.sent()&&this.configsubheader2.forEach(function(e,t){return a(o,void 0,void 0,function(){return n(this,function(){return r["header"+t]=e.header,[2/*return*/]})})}),0<Object.keys(r).length&&this.renderHeader.push(r),r={},[4/*yield*/,this.configsubheader1];case 3:return i.sent()&&this.configsubheader1.forEach(function(e,t){return a(o,void 0,void 0,function(){return n(this,function(){return r["header"+t]=e.header,[2/*return*/]})})}),0<Object.keys(r).length&&this.renderHeader.push(r),r={},[4/*yield*/,this.configsubheader0];case 4:return i.sent()&&this.configsubheader0.forEach(function(e,t){return a(o,void 0,void 0,function(){return n(this,function(){return r["header"+t]=e.header,[2/*return*/]})})}),0<Object.keys(r).length&&this.renderHeader.push(r),r={},[4/*yield*/,this.configdatatable.forEach(function(e,t){return a(o,void 0,void 0,function(){return n(this,function(){return r["header"+t]=e.header,[2/*return*/]})})})];case 5:// console.log("this.configsubheader0",this.configsubheader0)
// console.log("this.renderHeader",this.renderHeader)
//console.log('aaaaaaaaaaa',this.renderHeader)
// this.configsubheadertable.slice().reverse().forEach((subheaders)=>{
//     let objHeader = {}
//     subheaders.forEach((subheader,index) => {
//       objHeader['header'+index] = subheader.header
//       // this.renderHeader.push(subheader)
//     });
//     this.renderHeader.push(objHeader)
// })
//his.renderHeader.push(...this.configdatatable);
for(i.sent(),0<Object.keys(r).length&&this.renderHeader.push(r),d=0;d<this.renderData.length;d++)this.renderData[d]=te(te({},this.renderData[d]),{meta_:{merge:{}}});for(d=0;d<this.renderHeader.length;d++)this.renderHeader[d]=te(te({},this.renderHeader[d]),{meta_:{merge:{}}});if(!(0<this.rawData.length))return[3/*break*/,22];s=this.rawData.length-1,i.label=6;case 6:i.trys.push([6,12,13,18]),p=l(this.setDataTable.values),i.label=7;case 7:return[4/*yield*/,p.next()];case 8:return(c=i.sent(),!!c.done)?[3/*break*/,11]:(u=c.value,[4/*yield*/,this.findMergeColCell(s,0,u.data,"value")]);case 9:i.sent(),s=this.rawData.length-1,i.label=10;case 10:return[3/*break*/,7];case 11:return[3/*break*/,18];case 12:return g=i.sent(),e={error:g},[3/*break*/,18];case 13:return i.trys.push([13,,16,17]),c&&!c.done&&(t=p.return)?[4/*yield*/,t.call(p)]:[3/*break*/,15];case 14:i.sent(),i.label=15;case 15:return[3/*break*/,17];case 16:if(e)throw e.error;return[7/*endfinally*/];case 17:return[7/*endfinally*/];case 18:f=this.setDataTable.values.length-1,d=this.rawData.length-1,i.label=19;case 19:return 0<=d?[4/*yield*/,this.findMergeRowCell(f,d,0,"value")]:[3/*break*/,22];case 20:i.sent(),f=this.setDataTable.values.length-1,i.label=21;case 21:return d--,[3/*break*/,19];case 22:for(y in h=this.renderHeader.length-1,m=[],this.renderHeader[0])m.push(y);A=0,i.label=23;case 23:return A<m.length?(u=m[A],"meta_"==u?[3/*break*/,25]:[4/*yield*/,this.findMergeColCell(h,0,u,"header")]):[3/*break*/,26];case 24:i.sent(),h=this.renderHeader.length-1,i.label=25;case 25:return A++,[3/*break*/,23];case 26:d=this.renderHeader.length-1,i.label=27;case 27:return 0<=d?(b=Object.keys(this.renderHeader[d]).length-1,[4/*yield*/,this.findMergeRowCell(b,d,0,"header")]):[3/*break*/,30];case 28:i.sent(),i.label=29;case 29:return d--,[3/*break*/,27];case 30:return[2/*return*/];}})})},r.prototype.calGroupBy=function(){return a(this,void 0,void 0,function(){var e=this,t;return n(this,function(){for(t=0;t<this.renderData.length;t++)this.renderData[t].meta_.groupby={};return this.renderData.forEach(function(t,o){return a(e,void 0,void 0,function(){return n(this,function(){return 0<t.meta_.merge["col_"+this.confighasgroupby]?this.renderData[o+t.meta_.merge["col_"+this.confighasgroupby]].meta_.groupby["key_"+this.confighasgroupby]=1:!this.renderData[o].meta_.groupby["key_"+this.confighasgroupby]&&(this.renderData[o-1]&&this.renderData[o-1][this.confighasgroupby]!==this.renderData[o][this.confighasgroupby]||this.renderData[o+1]&&this.renderData[o][this.confighasgroupby]!==this.renderData[o+1][this.confighasgroupby])&&(this.renderData[o].meta_.groupby["key_"+this.confighasgroupby]=1),[2/*return*/]})})}),[2/*return*/]})})},r.prototype.calSectionBy=function(){return a(this,void 0,void 0,function(){var e=this,t;return n(this,function(){for(t=0;t<this.renderData.length;t++)this.renderData[t].meta_.sectionby={};return this.configsectiondata.forEach(function(t,a){//let ojectKey = this.confighassectionby;
for(var n=t.sectionby,o=e.renderData.length-1;0<=o;o--)// if (this.renderData[i].meta_.merge['col_' + ojectKey] > 0) {
//   this.renderData[i].meta_.sectionby['key_' + ojectKey] = 1
// }
0===a?0===o?e.renderData[o].meta_.sectionby["key_"+n]=1:e.renderData[o-1][n]!==e.renderData[o][n]&&(e.renderData[o].meta_.sectionby["key_"+n]=1):(e.renderData[o-1]&&e.renderData[o-1][n]!==e.renderData[o][n]||0<e.renderData[o].meta_.sectionby["key_"+e.configsectiondata[a-1].sectionby])&&(e.renderData[o].meta_.sectionby["key_"+n]=1)}),[2/*return*/]})})},r.prototype.calSummaryNumber=function(){var e,t;return a(this,void 0,void 0,function(){var a,o,r,d,s,p;return n(this,function(n){switch(n.label){case 0:for(a=0;a<this.renderData.length;a++)this.renderData[a].meta_.summary={};if(!(0<this.renderData.length))return[3/*break*/,13];o=0,n.label=1;case 1:n.trys.push([1,7,8,13]),r=l(this.setDataTable.values),n.label=2;case 2:return[4/*yield*/,r.next()];case 3:return(d=n.sent(),!!d.done)?[3/*break*/,6]:(s=d.value,[4/*yield*/,this.findSectionSummary(o,0,s.data,0)]);case 4:n.sent(),o=0,n.label=5;case 5:return[3/*break*/,2];case 6:return[3/*break*/,13];case 7:return p=n.sent(),e={error:p},[3/*break*/,13];case 8:return n.trys.push([8,,11,12]),d&&!d.done&&(t=r.return)?[4/*yield*/,t.call(r)]:[3/*break*/,10];case 9:n.sent(),n.label=10;case 10:return[3/*break*/,12];case 11:if(e)throw e.error;return[7/*endfinally*/];case 12:return[7/*endfinally*/];case 13:return[2/*return*/];}})})},r.prototype.findSectionSummary=function(e,t,a,n){//console.log('valueOFColumn',valueOFColumn)
var o;return(e<=this.renderData.length-1&&(o=this.parseStringToInt(this.renderData[e][a]),t+=o),e===this.renderData.length-1)?void(isNaN(t)||(this.renderData[e].meta_.summary["key_"+a]=t)):(0<this.renderData[e].meta_.groupby["key_"+this.confighasgroupby]&&(isNaN(t)||(this.renderData[e].meta_.summary["key_"+a]=t),t=0),this.findSectionSummary(e+1,t,a,n))},r.prototype.createMergeData=function(){var e=this;console.log("this.renderData",this.renderData),this.renderData.forEach(function(t,a){for(var n in t){var o=e.configdatatable.find(function(e){return e.value===n});if(0<t.meta_.merge["col_"+n]&&(o.isfieldmergecol||e.confighasmergeallcol)){for(var r=0,l=t.meta_.merge["col_"+n]+1,d=t.meta_.merge["col_"+n]+1,s=0;s<t.meta_.merge["col_"+n];s++)console.log(yn(yn(e).find("tbody tr([data-isgroup!='true'][data-issection==\"true\"])")[a+s]));for(;r<t.meta_.merge["col_"+n];){if(yn(yn(e).find("tbody tr:not([data-isgroup='true'],[data-issection=\"true\"])")[a+r]).next().attr("data-issection")){yn(yn(e).find("tbody tr:not([data-isgroup='true'],[data-issection=\"true\"])")[a]).find("[data-attribute='"+n+"']").attr("rowspan",r+1),d-=r+1;for(var p=1;p<r+1;p++)yn(yn(e).find("tbody tr:not([data-isgroup='true'],[data-issection=\"true\"])")[a+p]).find("[data-attribute='"+n+"']").remove()}else if(console.log("remainRowSpan",n,d,a+r+1),r===t.meta_.merge["col_"+n]-1){yn(yn(e).find("tbody tr:not([data-isgroup='true'],[data-issection=\"true\"])")[a+r+1-(d-1)]).find("[data-attribute='"+n+"']").attr("rowspan",d);for(var p=1;p<d;p++)yn(yn(e).find("tbody tr:not([data-isgroup='true'],[data-issection=\"true\"])")[a+r+1+p-(d-1)]).find("[data-attribute='"+n+"']").remove();// $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index+jind(`[data-attribute='${key}']`).remove();
}// // console.log("obj.meta_.merge['col_' + key]",obj.meta_.merge['col_' + key]);
// // console.log(i)
// if(i=== obj.meta_.merge['col_' + key]-1){
//   $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[(index+i)-remainRowSpan]).find(`[data-attribute='${key}']`).attr('rowspan', remainRowSpan);
//   // for (let j = 1; j < remainRowSpan; j++) {
//   //   $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index+remainRowSpan+j]).find(`[data-attribute='${key}']`).remove();
//   // }
// }
// else{
//   if(i=== obj.meta_.merge['col_' + key]){
//     $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index]).find(`[data-attribute='${key}']`).attr('rowspan', remainRowSpan);
//   }
// }
// $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index + i]).find(`[data-attribute='${key}']`).remove()
//console.log( $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index]).next().css('background','red'))
r++}// // console.log( $($(this).find('tbody tr')[index]))
// $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index]).find(`[data-attribute='${key}']`).attr('rowspan', obj.meta_.merge['col_' + key] + 1);
// for (let i = 1; i <= obj.meta_.merge['col_' + key]; i++) {
//   $($(this).find(`tbody tr:not([data-isgroup='true'],[data-issection="true"])`)[index + i]).find(`[data-attribute='${key}']`).remove()
//   //console.log(     $($(this).find('tbody tr')[index + i]).find(`[data-attribute='${key}']`).remove())
//   //$($(this).find('tbody tr')[index + i]).find(`[data-attribute='${key}']`).remove();
// }
}if(0<t.meta_.merge["row_"+n]&&e.confighasmergeallrow)//console.log($(this).find('tbody tr td'))
// console.log(" $($(this).find('tbody tr td')[index]).find(`[data-attribute='${key}']`)", $($(this).find('tbody tr')[index]).find(`[data-attribute='${key}']`))
{yn(yn(e).find("tbody tr")[a]).find("[data-attribute='"+n+"']").attr("colspan",t.meta_.merge["row_"+n]+1);for(var r=1;r<=t.meta_.merge["row_"+n];r++)yn(yn(e).find("tbody tr")[a]).find("[data-attribute='"+n+"']").next().remove();// $($(this).find('tbody tr')[index]).find('td')[obj.meta_.merge['col_'+key]+i].remove();
}}}),this.renderHeader.forEach(function(t,a){for(var n in t){if(0<t.meta_.merge["col_"+n]){yn(yn(e).find("thead tr:not([data-isgroup='true'],[data-issection=\"true\"])")[a]).find("[data-attribute='"+n+"']").attr("rowspan",t.meta_.merge["col_"+n]+1);for(var o=1;o<=t.meta_.merge["col_"+n];o++)yn(yn(e).find("thead tr:not([data-isgroup='true'],[data-issection=\"true\"])")[a+o]).find("[data-attribute='"+n+"']").remove();//console.log(     $($(this).find('tbody tr')[index + i]).find(`[data-attribute='${key}']`).remove())
//$($(this).find('tbody tr')[index + i]).find(`[data-attribute='${key}']`).remove();
}if(0<t.meta_.merge["row_"+n]){yn(yn(e).find("thead tr")[a]).find("[data-attribute='"+n+"']").attr("colspan",t.meta_.merge["row_"+n]+1);for(var o=1;o<=t.meta_.merge["row_"+n];o++)yn(yn(e).find("thead tr")[a]).find("[data-attribute='"+n+"']").next().remove()}}}),this.setCustomTable()},r.prototype.createGroupByData=function(){return a(this,void 0,void 0,function(){var e=this,t,o;return n(this,function(){//$(this).find('tbody').append('<tr><td data-isgroupdraft="true" class="border-0" colspan="'+totalField+'">total</td></tr>')
return!yn(this).find("tbody tr").attr("data-isgroupdraft")&&this.confighasusegroupby&&yn(this).find("tbody").append("<tr><td  data-isgroupdraft=\"true\"></td></td></tr>"),this.confighasusegroupby&&("PGD"===window.__ENV__?(o=yn(yn(this).find("thead")[0]).find("th").length,console.log("totalField",o),yn(this).find("tbody").find("[data-isgroupdraft=\"true\"]").show(),yn(this).find("tbody").find("[data-isgroupdraft=\"true\"]").text(this.valuetextsummary),yn(this).find("tbody").find("[data-isgroupdraft=\"true\"]").attr("colspan",o),this.tableStyle()):(yn(this).find("tbody").find("[data-isgroupdraft=\"true\"]").hide(),t=0,this.calGroupBy().then(function(){return a(e,void 0,void 0,function(){var e=this,o;return n(this,function(r){switch(r.label){case 0:return this.confighasumaryvalue?[4/*yield*/,this.calSummaryNumber()]:[3/*break*/,2];case 1:r.sent(),r.label=2;case 2:return o=!1,this.renderData.forEach(function(r,l){return a(e,void 0,void 0,function(){var e,a,d,s,p,c,u,p,c;return n(this,function(){var n=Number.isInteger;if(0<r.meta_.groupby["key_"+this.confighasgroupby]){for(yn(yn(this).find("tbody tr")[l+t]).after("<tr data-group_no=\""+t+"\" data-isgroup=\"true\"></tr>"),e="",a=yn(yn(this).find("tbody tr")[0]).find("td").length,d=0;d<a;d++)0===d?this.confighasumaryvalue?(s=yn(yn(yn(this).find("tbody tr")[l]).find("td")[d]).attr("data-attribute"),p=r.meta_.summary["key_"+s],p?(c=this.formatCurrency(p),!n(p)&&(c=this.formatCurrency(p,2)),e=e+"<td class=\"td-summary\">"+c+"</td>"):(o=!0,e=e+"<td class=\"td-summary\">"+this.valuetextsummary+"</td>")):e=e+"<td class=\"td-summary\" colspan=\""+a+"\"></td>":(u=yn(yn(yn(this).find("tbody tr")[l]).find("td")[d]).attr("data-attribute"),d!==a-1||o||r.meta_.summary["key_"+u]?(p=r.meta_.summary["key_"+u],p?(c=this.formatCurrency(p),!n(p)&&(c=this.formatCurrency(p,2)),e=e+"<td class=\"td-summary\">"+c+"</td>"):e+="<td class=\"td-summary\"></td>"):e=e+"<td class=\"td-summary\">"+this.valuetextsummary+"</td>");// $($(this).find('tbody tr')[index+countSection]).append('<td>total</td>')
++t,yn(yn(this).find("tbody tr")[l+t]).append(e)}// if(!this.confighasumaryvalue){
//   this.calSummaryNumber().then(()=>{
//     console.log('after cal summary ',this.renderData);
//   })
// }else{
//   $(this).find('tbody tr').find(`[data-isgroup="true"]`).find('td').attr('colspan',$($(this).find('tbody tr')[0]).find('td').length)
// }
return[2/*return*/]})})}),this.tableStyle(),[2/*return*/];}})})}))),[2/*return*/]})})},r.prototype.createSubHeader=function(){var e=this;this.confighasusesubheader&&this.renderHeader.slice().reverse().forEach(function(t,a){if(0!==a){var n="<tr>";for(var o in t)"meta_"!=o&&(n=n+"<th>"+t[o]+"</th>");n+="</tr>",yn(e).find("thead").prepend(n)}});// $($($(this).find('thead tr')[i]).find('th').remove();
for(var t=0,a;t<this.renderHeader.length;t++)for(var n in a=0,this.renderHeader[t])"meta_"!=n&&(yn(yn(yn(this).find("thead tr")[t]).find("th")[a]).attr("data-attribute",n),++a);// $($(this).find('thead tr').find('th')[i]).attr('data-attribute',key)
},r.prototype.createSectionByData=function(){return a(this,void 0,void 0,function(){var e=this;return n(this,function(){// for (let i = 0; i < this.renderData.length; i++) {
//   this.renderData[i].meta_['sectionby'] = {}
// }
// let index = 0;
// for await (const config of this.configsectiondata) {
//   let countSection = 0;
//   if (index === 0) {
//     this.calSectionBy(config.sectionby, this.renderData.length - 1, 0)
//       let totalField = $($(this).find('tbody tr')[0]).find('td').length;
//        this.renderData.forEach(async (obj, index) => {
//         if (obj.meta_.sectionby['key_' + this.confighassectionby] > 0) {
//           $($(this).find(`tbody tr:not([data-issection=true])`)[index]).before(`<tr data-section_level="0" data-section_no="${countSection}" data-issection="true">
//             <td class="td-section" colspan="${totalField}">
//              <span class="section-text">${this.confighassectionby}</span>
//                <img data-section="icon" src="${this.defaultConfig.arrowdown}" class="section-icon"></img>
//             </td></tr>`)
//           countSection++;
//         }
//       });
//       this.handleSection();
//   }else{
//     let targetSection = $(`[data-section_level="${index-1}"]`)
//     console.log(targetSection.next())
//    console.log( targetSection.nextUntil(targetSection.next()))
//    // console.log(targetSection.attr('data-section_no')+1)
//     // targetSection.nextUntil(`[data-section_no="${parseInt(targetSection.attr('data-section_no'))+1}"]`).css('background','red')
//   }
//   index++;
// }
// await this.configsectiondata.forEach(async (config, index) => {
//   let countSection = 0;
//   if (index === 0) {
//     await this.calSectionBy(config.sectionby, this.renderData.length - 1, 0)
//       console.log('xxxxxxx')
//       let totalField = $($(this).find('tbody tr')[0]).find('td').length;
//        this.renderData.forEach(async (obj, index) => {
//         if (obj.meta_.sectionby['key_' + this.confighassectionby] > 0) {
//           $($(this).find(`tbody tr:not([data-issection=true])`)[index]).before(`<tr data-section_level="0" data-section_no="${countSection}" data-issection="true">
//             <td class="td-section" colspan="${totalField}">
//              <span class="section-text">${this.confighassectionby}</span>
//                <img data-section="icon" src="${this.defaultConfig.arrowdown}" class="section-icon"></img>
//             </td></tr>`)
//           countSection++;
//         }
//       });
//       this.handleSection();
//   }else{
//       console.log($(`[data-section_level="${index-1}"]`))
//       console.log( $(`[data-section_level="${index-1}"]`).nextUntil(`[data-section_level="${index-1}"]`)   )
//   }
// });
// let sectionBy =  this.configsectiondata && this.configsectiondata.length > 0 && this.configsectiondata[0].sectionby || null;
return"PGD"!==window.__ENV__&&this.calSectionBy().then(function(){return a(e,void 0,void 0,function(){var e=this,t,o,r,i,d,s,p,c,u;return n(this,function(g){switch(g.label){case 0:t=0,g.label=1;case 1:g.trys.push([1,6,7,12]),o=l(this.configsectiondata),g.label=2;case 2:return[4/*yield*/,o.next()];case 3:if(r=g.sent(),!!r.done)return[3/*break*/,5];i=r.value,d=0,s=yn(yn(this).find("tbody tr:not([data-issection=\"true\"], [data-isgroup=\"true\"])")[0]).find("td").length,this.renderData.forEach(function(o,r){return a(e,void 0,void 0,function(){return n(this,function(){return 0<o.meta_.sectionby["key_"+i.sectionby]&&(i.iscollapsenewrow?yn(yn(this).find("tbody tr:not([data-issection=true])")[r]).before("<tr data-section_level=\""+t+"\" data-section_no=\""+d+"\" data-issection=\"true\">\n                      <td style=\"padding-left:"+20*t+"px\" class=\"td-section\" colspan=\""+s+"\">\n                      <span class=\"section-text\">"+i.sectionby+"</span>\n                        <img data-section=\"icon\" src=\""+this.defaultConfig.arrowdown+"\" class=\"section-icon\"></img>\n                      </td></tr>"):(yn(yn(this).find("tbody tr:not([data-issection=true])")[r]).attr("data-section_level",t),yn(yn(this).find("tbody tr:not([data-issection=true])")[r]).attr("data-section_no",d),yn(yn(this).find("tbody tr:not([data-issection=true])")[r]).attr("data-isselfsection","true"),yn(yn(this).find("tbody tr:not([data-issection=true])")[r]).attr("data-issection","true")),d++),[2/*return*/]})})}),this.handleSection(),t++,g.label=4;case 4:return[3/*break*/,2];case 5:return[3/*break*/,12];case 6:return p=g.sent(),c={error:p},[3/*break*/,12];case 7:return g.trys.push([7,,10,11]),r&&!r.done&&(u=o.return)?[4/*yield*/,u.call(o)]:[3/*break*/,9];case 8:g.sent(),g.label=9;case 9:return[3/*break*/,11];case 10:if(c)throw c.error;return[7/*endfinally*/];case 11:return[7/*endfinally*/];case 12:return[2/*return*/];}})})}),[2/*return*/]})})},r.prototype.setCustomTable=function(){return a(this,void 0,void 0,function(){var e=this;return n(this,function(){return console.log("configcustomtable ==>",this.configcustomtable),this.configcustomtable.forEach(function(t){return a(e,void 0,void 0,function(){var e=this;return n(this,function(){return this.renderData.forEach(function(o,r){return a(e,void 0,void 0,function(){var e,a,l,d;return n(this,function(n){switch(n.label){case 0:return o[t.cusattributekey]==t.cusattributevalue?(e=this.renderData[r],a=this.setDataTable.values.length-1,t.cusmergecellrow?[4/*yield*/,this.findMergeRowCell(a,r,0,"value")]:[3/*break*/,2]):[3/*break*/,3];case 1:for(l in n.sent(),e)if(0<e.meta_.merge["row_"+l]&&l===o[t.cusattributekey])for(yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+l+"']").attr("colspan",e.meta_.merge["row_"+l]+1),d=1;d<=e.meta_.merge["row_"+l];d++)yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+l+"']").next().text()===t.cusattributevalue&&yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+l+"']").next().remove();// $($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${key}']`).next().remove();
//$($(this).find('tbody tr')[targetRowIndex]).find(`[data-attribute='${key}']`).next().remove();
n.label=2;case 2:"one"===t.cusaffected?(yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+t.cusattributekey+"']").css("background",t.cusbackgroundcolor),yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+t.cusattributekey+"']").css("color",t.custextcolor),yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+t.cusattributekey+"']").css("text-align",t.custextalign),yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+t.cusattributekey+"']").css("padding-top",t.cuspaddingtop),yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+t.cusattributekey+"']").css("padding-left",t.cuspaddingleft),yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+t.cusattributekey+"']").css("padding-right",t.cuspaddingright),yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+t.cusattributekey+"']").css("padding-bottom",t.cuspaddingbot),t.cususeinlinetext?yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+t.cusattributekey+"']").attr("contenteditable","true"):yn(yn(this).find("tbody tr")[r]).find("[data-attribute='"+t.cusattributekey+"']").attr("contenteditable","false")):(yn(yn(this).find("tbody tr")[r]).find("td").css("background",t.cusbackgroundcolor),yn(yn(this).find("tbody tr")[r]).find("td").css("color",t.custextcolor),yn(yn(this).find("tbody tr")[r]).find("td").css("text-align",t.custextalign),yn(yn(this).find("tbody tr")[r]).find("td").css("padding-top",t.cuspaddingtop),yn(yn(this).find("tbody tr")[r]).find("td").css("padding-left",t.cuspaddingleft),yn(yn(this).find("tbody tr")[r]).find("td").css("padding-right",t.cuspaddingright),yn(yn(this).find("tbody tr")[r]).find("td").css("padding-bottom",t.cuspaddingbot),t.cususeinlinetext?yn(yn(this).find("tbody tr")[r]).find("td").attr("contenteditable","true"):yn(yn(this).find("tbody tr")[r]).find("td").attr("contenteditable","false")),n.label=3;case 3:return[2/*return*/];}})})}),[2/*return*/]})})}),[2/*return*/]})})},r.prototype.findMergeColCell=function(e,t,a,n){if("header"===n){if(0>=e)return void(this.renderHeader[e].meta_.merge["col_"+a]=t);this.renderHeader[e-1][a]===this.renderHeader[e][a]?(this.renderHeader[e].meta_.merge["col_"+a]=0,++t):(this.renderHeader[e].meta_.merge["col_"+a]=t,t=0)}else if("value"===n){if(0>=e)return void(this.renderData[e].meta_.merge["col_"+a]=t);this.renderData[e-1][a]===this.renderData[e][a]?(this.renderData[e].meta_.merge["col_"+a]=0,++t):(this.renderData[e].meta_.merge["col_"+a]=t,t=0)}return this.findMergeColCell(e-1,t,a,n)},r.prototype.findMergeRowCell=function(e,t,a,n){if("header"===n){if(0>=e)return void(this.renderHeader[t].meta_.merge["row_header"+e]=a);// if (runnumber <= 0) {
//   this.renderHeader[runnumber].meta_.merge['row_' + this.renderHeader[runnumber].header+'_'+headerNo ] = numberOfMerge;
//   return;
// } else if (
//   this.renderHeader[runnumber].header !== this.renderHeader[runnumber-1].header
// ) {
//   this.renderHeader[runnumber].meta_.merge['row_' + this.renderHeader[runnumber].header+'_'+headerNo] = numberOfMerge
//   numberOfMerge = 0;
// } else {
//   this.renderHeader[runnumber].meta_.merge['row_' + this.renderHeader[runnumber].header+'_'+headerNo] = 0;
//   numberOfMerge = numberOfMerge + 1;
// }
// headerNo = headerNo-1;
this.renderHeader[t]["header"+e]===this.renderHeader[t]["header"+(e-1)]?(this.renderHeader[t].meta_.merge["row_header"+e]=0,++a):(this.renderHeader[t].meta_.merge["row_header"+e]=a,a=0)}else if("value"===n){if(0>=e)return void(this.renderData[t].meta_.merge["row_"+this.setDataTable.values[e].data]=a);this.renderData[t][this.setDataTable.values[e].data]===this.renderData[t][this.setDataTable.values[e-1].data]?(this.renderData[t].meta_.merge["row_"+this.setDataTable.values[e].data]=0,++a):(this.renderData[t].meta_.merge["row_"+this.setDataTable.values[e].data]=a,a=0)}return this.findMergeRowCell(e-1,t,a,n)},r.prototype.debounce=function(e,t){var a;return function(){var n=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(this,n)}.bind(this),t)}},r.prototype.parseStringToInt=function(e){e=e.toString();var t=e.replace(",","");return new Number(t).valueOf()},r.prototype.formatCurrency=function(e,t,a){var n="(\\d)(?=(\\d{"+(a||3)+"})+"+(0<t?"\\.":"$")+")";return e.toFixed(Z(0,~~t)).replace(new RegExp(n,"g"),"$1,")},t([u({type:String})],r.prototype,"headerbgcolor",void 0),t([u({type:String})],r.prototype,"headertextcolor",void 0),t([u({type:String})],r.prototype,"valuetextcolor",void 0),t([u({type:String})],r.prototype,"valuebgcolor",void 0),t([u({type:String})],r.prototype,"valuelinkcolor",void 0),t([u({type:String})],r.prototype,"valuebtnviewcolor",void 0),t([u({type:String})],r.prototype,"valuebtnviewtextcolor",void 0),t([u({type:String})],r.prototype,"valuebtndeletecolor",void 0),t([u({type:String})],r.prototype,"valuebtndeletetextcolor",void 0),t([u({type:String})],r.prototype,"valuerowsummarycolor",void 0),t([u({type:String})],r.prototype,"valuerowsummarytextcolor",void 0),t([u({type:String})],r.prototype,"valuetextsummary",void 0),t([u({type:Array})],r.prototype,"configdatatable",void 0),t([u({type:Array})],r.prototype,"configcustomtable",void 0),t([u({type:Array})],r.prototype,"configsubheadertable",void 0),t([u({type:Number})],r.prototype,"configlevelsubheader",void 0),t([u({type:Array})],r.prototype,"configsubheader0",void 0),t([u({type:Array})],r.prototype,"configsubheader1",void 0),t([u({type:Array})],r.prototype,"configsubheader2",void 0),t([u({type:Array})],r.prototype,"configsubheader3",void 0),t([u({type:Boolean})],r.prototype,"confighaspaging",void 0),t([u({type:Number})],r.prototype,"confighasperpage",void 0),t([u({type:Boolean})],r.prototype,"confighascheckbox",void 0),t([u({type:Boolean})],r.prototype,"confighasview",void 0),t([u({type:Boolean})],r.prototype,"confighasdelete",void 0),t([u({type:Boolean})],r.prototype,"confighassequence",void 0),t([u({type:Boolean})],r.prototype,"confighasmergeallrow",void 0),t([u({type:Boolean})],r.prototype,"confighasmergeallcol",void 0),t([u({type:Boolean})],r.prototype,"confighasmergeheader",void 0),t([u({type:Boolean})],r.prototype,"confighasusegroupby",void 0),t([u({type:String})],r.prototype,"confighasgroupby",void 0),t([u({type:Boolean})],r.prototype,"confighasumaryvalue",void 0),t([u({type:Boolean})],r.prototype,"confighasusesubheader",void 0),t([u({type:String})],r.prototype,"confighassectionby",void 0),t([u({type:String})],r.prototype,"cusclasstable",void 0),t([u({type:String})],r.prototype,"cusclassheader",void 0),t([u({type:String})],r.prototype,"cusclassvalue",void 0),t([u({type:String})],r.prototype,"cusclassthisheader",void 0),t([u({type:String})],r.prototype,"cusclassthisvalue",void 0),t([u({type:Array})],r.prototype,"configsectiondata",void 0),t([u({type:String,attribute:"pg-data"})],r.prototype,"pgData",void 0),t([u({type:String})],r.prototype,"pgxId",void 0),t([u({type:Object,hasChanged:function hasChanged(e,t){return e!=t}})],r.prototype,"data",void 0),r}(pt),bn;customElements.define("table-editor",An);var xn,vn,wn})();
//# sourceMappingURL=index.js.map
