"use strict";function asyncGeneratorStep(e,t,r,a,o,n,i){try{var s=e[n](i),m=s.value}catch(e){return void r(e)}s.done?t(m):Promise.resolve(m).then(a,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){function n(e){asyncGeneratorStep(s,a,o,n,i,"next",e)}function i(e){asyncGeneratorStep(s,a,o,n,i,"throw",e)}var s=e.apply(t,r);n(void 0)})}}function _wrapNativeSuper(e){var t="function"==typeof Map?new Map:void 0;return _wrapNativeSuper=function(e){function r(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof t){if(t.has(e))return t.get(e);t.set(e,r)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(r,e)},_wrapNativeSuper(e)}function isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _construct(){return _construct=isNativeReflectConstruct()?Reflect.construct:function(e,t,r){var o=[null];o.push.apply(o,t);var a=Function.bind.apply(e,o),n=new a;return r&&_setPrototypeOf(n,r.prototype),n},_construct.apply(null,arguments)}function _isNativeFunction(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function _possibleConstructorReturn(e,t){return t&&("object"===_typeof2(t)||"function"==typeof t)?t:_assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _get(e,t,r){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var a=_superPropBase(e,t);if(a){var o=Object.getOwnPropertyDescriptor(a,t);return o.get?o.get.call(r):o.value}},_get(e,t,r||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=_getPrototypeOf(e),null!==e););return e}function _getPrototypeOf(e){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_getPrototypeOf(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _defineProperties(e,t){for(var r,a=0;a<t.length;a++)r=t[a],r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _typeof2(e){return _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof2(e)}(function(){'use strict';var J=Math.ceil,K=Math.floor;function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e){return t="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)},t(e)}/*! *****************************************************************************
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
	***************************************************************************** */ /* global Reflect, Promise */function r(e,t){function r(){this.constructor=e}G(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function a(e,a,o,n){var s,m=arguments.length,l=3>m?a:null===n?n=Object.getOwnPropertyDescriptor(a,o):n;if("object"===("undefined"==typeof Reflect?"undefined":t(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,a,o,n);else for(var p=e.length-1;0<=p;p--)(s=e[p])&&(l=(3>m?s(l):3<m?s(a,o,l):s(a,o))||l);return 3<m&&l&&Object.defineProperty(a,o,l),l}function o(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}/**
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
	 */function n(e){var t=we.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},we.set(e.type,t));var r=t.stringsArray.get(e.strings);if(void 0!==r)return r;// If the TemplateStringsArray is new, generate a key from the strings
// This key is shared between all templates with identical content
var a=e.strings.join(ae);// Check if we already have a Template for this key
return r=t.keyString.get(a),void 0===r&&(r=new se(e,e.getTemplateElement()),t.keyString.set(a,r)),t.stringsArray.set(e.strings,r),r}/**
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
	 */function i(e,t){for(var r=e.element.content,a=e.parts,o=document.createTreeWalker(r,133,null,!1),n=Te(a),i=a[n],s=-1,m=0,d=[],l=null;o.nextNode();){s++;var p=o.currentNode;// End removal if stepped past the removing node
for(p.previousSibling===l&&(l=null),t.has(p)&&(d.push(p),null===l&&(l=p)),null!==l&&m++;i!==void 0&&i.index===s;)// If part is in a removed node deactivate it by setting index to -1 or
// adjust the index as needed.
// go to the next active part.
i.index=null===l?i.index-m:-1,n=Te(a,n),i=a[n]}d.forEach(function(e){return e.parentNode.removeChild(e)})}/**
	 * Inserts the given node into the Template, optionally before the given
	 * refNode. In addition to inserting the node into the Template, the Template
	 * part indices are updated to match the mutated Template DOM.
	 */function s(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,a=e.element.content,o=e.parts;// If there's no refNode, then put node at end of template.
// No part indices need to be shifted in this case.
if(null===r||void 0===r)return void a.appendChild(t);for(var n=document.createTreeWalker(a,133,null,!1),i=Te(o),s=0,m=-1;n.nextNode();){m++;var d=n.currentNode;for(d===r&&(s=Ne(t),r.parentNode.insertBefore(t,r));-1!==i&&o[i].index===m;){// If we've inserted the node, simply adjust all subsequent parts
if(0<s){for(;-1!==i;)o[i].index+=s,i=Te(o,i);return}i=Te(o,i)}}}/**
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
	 */function m(e){// tslint:disable-next-line:no-any decorator
return function(t,r){return r===void 0?We(e,t):Ge(e,t,r)}}/**
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
	 */function d(e){for(var t,r=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],a=0,o=e.length;a<o;a++)t=e[a],Array.isArray(t)?d(t,r):r.push(t);return r}/** Deeply flattens styles array. Uses native flat if available. */function l(e,t,r){return l.TYPED_ARRAY_SUPPORT||this instanceof l?"number"==typeof e?c(this,e):S(this,e,t,r):new l(e,t,r)}function p(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=ht)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ht.toString(16)+" bytes");return 0|e}function g(e){return e!==e;// eslint-disable-line no-self-compare
}function u(e,t){var r;return l.TYPED_ARRAY_SUPPORT?(r=new Uint8Array(t),r.__proto__=l.prototype):(r=e,null===r&&(r=new l(t)),r.length=t),r}function c(e,t){var r=u(e,0>t?0:0|p(t));if(!l.TYPED_ARRAY_SUPPORT)for(var a=0;a<t;++a)r[a]=0;return r}function h(e,t){var r=0|_(t),a=u(e,r),o=a.write(t);return o!==r&&(a=a.slice(0,o)),a}function y(e,t){for(var r=0>t.length?0:0|p(t.length),a=u(e,r),o=0;o<r;o+=1)a[o]=255&t[o];return a}function b(e,t,r,a){if(0>r||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(a||0))throw new RangeError("'length' is out of bounds");var o;return o=void 0===r&&void 0===a?new Uint8Array(t):void 0===a?new Uint8Array(t,r):new Uint8Array(t,r,a),l.TYPED_ARRAY_SUPPORT?o.__proto__=l.prototype:o=y(e,o),o}function f(e,t){if(l.isBuffer(t)){var r=0|p(t.length),a=u(e,r);return 0===a.length?a:(t.copy(a,0,0,r),a)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||g(t.length)?u(e,0):y(e,t);if("Buffer"===t.type&&Array.isArray(t.data))return y(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function v(e,t){t=t||1/0;for(var r,a=e.length,o=null,n=[],s=0;s<a;++s){// is surrogate component
if(r=e.charCodeAt(s),55295<r&&57344>r){// last char was a lead
if(!o){// no lead yet
if(56319<r){-1<(t-=3)&&n.push(239,191,189);continue}else if(s+1===a){-1<(t-=3)&&n.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(56320>r){-1<(t-=3)&&n.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&-1<(t-=3)&&n.push(239,191,189);// encode utf8
if(o=null,128>r){if(0>(t-=1))break;n.push(r)}else if(2048>r){if(0>(t-=2))break;n.push(192|r>>6,128|63&r)}else if(65536>r){if(0>(t-=3))break;n.push(224|r>>12,128|63&r>>6,128|63&r)}else if(1114112>r){if(0>(t-=4))break;n.push(240|r>>18,128|63&r>>12,128|63&r>>6,128|63&r)}else throw new Error("Invalid code point")}return n}function _(e){if(l.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var t=e.length;return 0===t?0:v(e).length}function x(e,t,r,a){for(var o=0;o<a&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}function P(e,t,r,a){return x(v(t,e.length-r),e,r,a)}function S(e,t,r,a){if("number"==typeof t)throw new TypeError("\"value\" argument must not be a number");return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?b(e,t,r,a):"string"==typeof t?h(e,t,r):f(e,t)}function C(){this.buffer=[],this.length=0}/**
	 * Helper class to handle QR Code symbol modules
	 *
	 * @param {Number} size Symbol size
	 */function w(e){if(!e||1>e)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new bt(e*e),this.data.fill(0),this.reservedBit=new bt(e*e),this.reservedBit.fill(0)}/**
	 * Set bit value at specified location
	 * If reserved flag is set, this bit will be ignored during masking process
	 *
	 * @param {Number}  row
	 * @param {Number}  col
	 * @param {Boolean} value
	 * @param {Boolean} reserved
	 */function k(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}/**
	 * Initialize the encoder.
	 * The input param should correspond to the number of error correction codewords.
	 *
	 * @param  {Number} degree
	 */function A(e){this.mode=fr.NUMERIC,this.data=e.toString()}function E(e){this.mode=fr.ALPHANUMERIC,this.data=e}function N(e){this.mode=fr.BYTE,this.data=new bt(e)}function T(e){this.mode=fr.KANJI,this.data=e}/**
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
	 */function R(e,t){for(var a=e.size,o=Ut.getPositions(t),n=0;n<o.length;n++)for(var s=o[n][0],m=o[n][1],d=-1;7>=d;d++)if(!(-1>=s+d||a<=s+d))for(var l=-1;7>=l;l++)-1>=m+l||a<=m+l||(0<=d&&6>=d&&(0==l||6==l)||0<=l&&6>=l&&(0==d||6==d)||2<=d&&4>=d&&2<=l&&4>=l?e.set(s+d,m+l,!0,!0):e.set(s+d,m+l,!1,!0))}/**
	 * Add timing pattern bits to matrix
	 *
	 * Note: this function must be called before {@link setupAlignmentPattern}
	 *
	 * @param  {BitMatrix} matrix Modules matrix
	 */function I(e){for(var t,a=e.size,o=8;o<a-8;o++)t=0==o%2,e.set(o,6,t,!0),e.set(6,o,t,!0)}/**
	 * Add alignment patterns bits to matrix
	 *
	 * Note: this function must be called after {@link setupTimingPattern}
	 *
	 * @param  {BitMatrix} matrix  Modules matrix
	 * @param  {Number}    version QR Code version
	 */function L(e,t){for(var a=Tt.getPositions(t),o=0;o<a.length;o++)for(var n=a[o][0],s=a[o][1],m=-2;2>=m;m++)for(var d=-2;2>=d;d++)-2==m||2==m||-2==d||2==d||0==m&&0==d?e.set(n+m,s+d,!0,!0):e.set(n+m,s+d,!1,!0)}/**
	 * Add version info bits to matrix
	 *
	 * @param  {BitMatrix} matrix  Modules matrix
	 * @param  {Number}    version QR Code version
	 */function B(e,t){for(var r,a,o,n=e.size,s=Ar.getEncodedBits(t),m=0;18>m;m++)r=K(m/3),a=m%3+n-8-3,o=1==(1&s>>m),e.set(r,a,o,!0),e.set(a,r,o,!0)}/**
	 * Add format info bits to matrix
	 *
	 * @param  {BitMatrix} matrix               Modules matrix
	 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
	 * @param  {Number}    maskPattern          Mask pattern reference value
	 */function U(e,t,r){var a,o,n=e.size,s=Lr.getEncodedBits(t,r);for(a=0;15>a;a++)o=1==(1&s>>a),6>a?e.set(a,8,o,!0):8>a?e.set(a+1,8,o,!0):e.set(n-15+a,8,o,!0),8>a?e.set(8,n-a-1,o,!0):9>a?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);// fixed module
e.set(n-8,8,1,!0)}/**
	 * Add encoded data bits to matrix
	 *
	 * @param  {BitMatrix} matrix Modules matrix
	 * @param  {Buffer}    data   Data codewords
	 */function M(e,t){for(var r=e.size,a=-1,o=r-1,n=7,i=0,s=r-1;0<s;s-=2)for(6==s&&s--;;){for(var m=0;2>m;m++)if(!e.isReserved(o,s-m)){var d=!1;i<t.length&&(d=1==(1&t[i]>>>n)),e.set(o,s-m,d),n--,-1===n&&(i++,n=7)}if(o+=a,0>o||r<=o){o-=a,a=-a;break}}}/**
	 * Create encoded codewords from data input
	 *
	 * @param  {Number}   version              QR Code version
	 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
	 * @param  {ByteData} data                 Data input
	 * @return {Buffer}                        Buffer containing encoded codewords
	 */function O(e,t,r){// Prepare data buffer
var a=new Et;r.forEach(function(t){// prefix data with mode indicator (4 bits)
// Prefix data with character count indicator.
// The character count indicator is a string of bits that represents the
// number of characters that are being encoded.
// The character count indicator must be placed after the mode indicator
// and must be a certain number of bits long, depending on the QR version
// and data mode
// @see {@link Mode.getCharCountIndicator}.
// add binary data sequence to buffer
a.put(t.mode.bit,4),a.put(t.getLength(),fr.getCharCountIndicator(t.mode,e)),t.write(a)});// Calculate required number of bits
var o=xt.getSymbolTotalCodewords(e),n=Kt.getTotalCodewordsCount(e,t),s=8*(o-n);// If the bit string is fewer than four bits shorter, add only the number of 0s that
// are needed to reach the required number of bits.
// After adding the terminator, if the number of bits in the string is not a multiple of 8,
// pad the string on the right with 0s to make the string's length a multiple of 8.
for(a.getLengthInBits()+4<=s&&a.put(0,4);0!=a.getLengthInBits()%8;)a.putBit(0);// Add pad bytes if the string is still shorter than the total number of required bits.
// Extend the buffer to fill the data capacity of the symbol corresponding to
// the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
// and 00010001 (0x11) alternately.
for(var m=(s-a.getLengthInBits())/8,d=0;d<m;d++)a.put(d%2?17:236,8);return V(a,e,t)}/**
	 * Encode input data with Reed-Solomon and return codewords with
	 * relative error correction bits
	 *
	 * @param  {BitBuffer} bitBuffer            Data to encode
	 * @param  {Number}    version              QR Code version
	 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
	 * @return {Buffer}                         Buffer containing encoded codewords
	 */function V(e,t,a){// Total codewords for this QR code version (Data + Error correction)
// Divide the buffer into the required number of blocks
for(var o=Math.max,n,s=xt.getSymbolTotalCodewords(t),m=Kt.getTotalCodewordsCount(t,a),d=Kt.getBlocksCount(t,a),l=K(s/d),p=K((s-m)/d),g=l-p,u=new or(g),c=0,h=Array(d),y=Array(d),f=0,v=new bt(e.buffer),_=0;_<d;_++)// extract a block of data from buffer
// Calculate EC codewords for this data block
n=_<d-s%d?p:p+1,h[_]=v.slice(c,c+n),y[_]=u.encode(h[_]),c+=n,f=o(f,n);// Create final data
// Interleave the data and error correction codewords from each block
var x,P,S=new bt(s),C=0;// Add data codewords
for(x=0;x<f;x++)for(P=0;P<d;P++)x<h[P].length&&(S[C++]=h[P][x]);// Apped EC codewords
for(x=0;x<g;x++)for(P=0;P<d;P++)S[C++]=y[P][x];return S}/**
	 * Build QR Code symbol
	 *
	 * @param  {String} data                 Input string
	 * @param  {Number} version              QR Code version
	 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
	 * @param  {MaskPattern} maskPattern     Mask pattern
	 * @return {Object}                      Object containing symbol data
	 */function z(e,t,r,a){var o;if(ct(e))o=Dr.fromArray(e);else if("string"==typeof e){var n=t;if(!n){var i=Dr.rawSplit(e);// Estimate best version that can contain raw splitted segments
n=Ar.getBestVersionForData(i,r)}// Build optimized segments
// If estimated version is undefined, try with the highest version
o=Dr.fromString(e,n||40)}else throw new Error("Invalid data");// Get the min version that can contain data
var s=Ar.getBestVersionForData(o,r);// If no version is found, data cannot be stored
if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");// If not specified, use min version as default
if(!t)t=s;else if(t<s)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+s+".\n");var m=O(t,r,o),d=xt.getSymbolSize(t),l=new Nt(d);// Allocate matrix buffer
return R(l,t),I(l),L(l,t),U(l,r,0),7<=t&&B(l,t),M(l,m),isNaN(a)&&(a=Mt.getBestMask(l,U.bind(null,l,r))),Mt.applyMask(a,l),U(l,r,a),{modules:l,version:t,errorCorrectionLevel:r,maskPattern:a,segments:o}}/**
	 * QR Code
	 *
	 * @param {String | Array} data                 Input data
	 * @param {Object} options                      Optional configurations
	 * @param {Number} options.version              QR Code version
	 * @param {String} options.errorCorrectionLevel Error correction level
	 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
	 */function D(e,t){var r=e.a/255,a=t+"=\""+e.hex+"\"";return 1>r?a+" "+t+"-opacity=\""+r.toFixed(2).slice(1)+"\"":a}function F(e,t,r){var a=e+t;return"undefined"!=typeof r&&(a+=" "+r),a}function Y(e,t,r){for(var a="",o=0,n=!1,s=0,m=0;m<e.length;m++){var d=K(m%t),l=K(m/t);d||n||(n=!0),e[m]?(s++,!(0<m&&0<d&&e[m-1])&&(a+=n?F("M",d+r,.5+l+r):F("m",o,0),o=0,n=!1),!(d+1<t&&e[m+1])&&(a+=F("h",s),s=0)):o++}return a}function H(e,t,r,a,o){var n=[].slice.call(arguments,1),i=n.length,s="function"==typeof n[i-1];if(!s&&!gt())throw new Error("Callback required as last argument");if(s){if(2>i)throw new Error("Too few arguments provided");2===i?(o=r,r=t,t=a=void 0):3===i&&(t.getContext&&"undefined"==typeof o?(o=a,a=void 0):(o=a,a=r,r=t,t=void 0))}else{if(1>i)throw new Error("Too few arguments provided");return 1===i?(r=t,t=a=void 0):2===i&&!t.getContext&&(a=r,r=t,t=void 0),new Promise(function(o,n){try{var i=qr.create(r,a);o(e(i,t,a))}catch(t){n(t)}})}try{var m=qr.create(r,a);o(null,e(m,t,a))}catch(t){o(t)}}function q(e){return"function"==typeof e}function j(e){return"string"==typeof e}/**
	 *
	 * render
	 * change logs:
	 * 2018/2/28 herbluo created
	 */var Q=e(function(e){/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */var t=function(e){function t(e,t,r,o){// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var n=t&&t.prototype instanceof a?t:a,i=Object.create(n.prototype),s=new g(o||[]);return i._invoke=m(e,r,s),i}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function r(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function a(){}function o(){}function n(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function i(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function s(e){function t(a,o,n,i){var s=r(e[a],e,o);if("throw"===s.type)i(s.arg);else{var m=s.arg,d=m.value;return d&&"object"===_typeof2(d)&&b.call(d,"__await")?Promise.resolve(d.__await).then(function(e){t("next",e,n,i)},function(e){t("throw",e,n,i)}):Promise.resolve(d).then(function(e){m.value=e,n(m)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return t("throw",e,n,i)})}}function a(e,r){function a(){return new Promise(function(a,o){t(e,r,a,o)})}return o=// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
o?o.then(a,// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
a):a()}// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
var o;this._invoke=a}function m(e,t,a){var o="suspendedStart";return function(n,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return c()}for(a.method=n,a.arg=i;;){var s=a.delegate;if(s){var m=d(s,a);if(m){if(m===P)continue;return m}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===o)throw o="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o="executing";var l=r(e,t,a);if("normal"===l.type){if(o=a.done?"completed":"suspendedYield",l.arg===P)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
o="completed",a.method="throw",a.arg=l.arg)}}}// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function d(e,t){var a=e.iterator[t.method];if(a===h){if(t.delegate=null,"throw"===t.method){// Note: ["return"] must be used for ES3 parsing compatibility.
if(e.iterator["return"]&&(t.method="return",t.arg=h,d(e,t),"throw"===t.method))// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return P;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return P}var o=r(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,P;var n=o.arg;if(!n)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,P;if(n.done)t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=h);else// Re-yield the result returned by the delegate method.
return n;// The delegate iterator is finished, so forget it and continue with
// the outer generator.
return t.delegate=null,P}// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
function l(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function p(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function g(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(l,this),this.reset(!0)}function u(e){if(e){var t=e[v];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(b.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=h,t.done=!0,t};return a.next=a}}// Return an iterator with no values.
return{next:c}}function c(){return{value:h,done:!0}}var h,y=Object.prototype,b=y.hasOwnProperty,f="function"==typeof Symbol?Symbol:{},v=f.iterator||"@@iterator",_=f.asyncIterator||"@@asyncIterator",x=f.toStringTag||"@@toStringTag";e.wrap=t;var P={},S={};S[v]=function(){return this};var C=Object.getPrototypeOf,w=C&&C(C(u([])));w&&w!==y&&b.call(w,v)&&(S=w);var k=n.prototype=a.prototype=Object.create(S);// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return o.prototype=k.constructor=n,n.constructor=o,n[x]=o.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===o||// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,n):(e.__proto__=n,!(x in e)&&(e[x]="GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},i(s.prototype),s.prototype[_]=function(){return this},e.AsyncIterator=s,e.async=function(r,a,o,n){var i=new s(t(r,a,o,n));return e.isGeneratorFunction(a)?i// If outerFn is a generator, return the full iterator.
:i.next().then(function(e){return e.done?e.value:i.next()})},i(k),k[x]="Generator",k[v]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return r.done=!0,r}},e.values=u,g.prototype={constructor:g,reset:function r(e){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(p),!e)for(var t in this)// Not sure about the optimal order of these conditions:
"t"===t.charAt(0)&&b.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=h)},stop:function r(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function d(e){function t(t,a){return n.type="throw",n.arg=e,r.next=t,a&&(r.method="next",r.arg=h),!!a}if(this.done)throw e;for(var r=this,a=this.tryEntries.length-1;0<=a;--a){var o=this.tryEntries[a],n=o.completion;if("root"===o.tryLoc)// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return t("end");if(o.tryLoc<=this.prev){var s=b.call(o,"catchLoc"),m=b.call(o,"finallyLoc");if(s&&m){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);}else if(!m)throw new Error("try statement without catch or finally");else if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}},abrupt:function s(e,t){for(var r,a=this.tryEntries.length-1;0<=a;--a)if(r=this.tryEntries[a],r.tryLoc<=this.prev&&b.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var n=o?o.completion:{};return n.type=e,n.arg=t,o?(this.method="next",this.next=o.finallyLoc,P):this.complete(n)},complete:function r(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),P},finish:function a(e){for(var t,r=this.tryEntries.length-1;0<=r;--r)if(t=this.tryEntries[r],t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),p(t),P},catch:function n(e){for(var t,r=this.tryEntries.length-1;0<=r;--r)if(t=this.tryEntries[r],t.tryLoc===e){var a=t.completion;if("throw"===a.type){var o=a.arg;p(t)}return o}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function a(e,t,r){return this.delegate={iterator:u(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=h),P}},e}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
e.exports);try{regeneratorRuntime=t}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
Function("r","regeneratorRuntime = r")(t)}}),W={providers:{},define:function r(e,t){return console.debug("[[define]]:",e,t),Object.defineProperty(this.providers,e,{get:function e(){return t}}),!0},get:function t(e){return this.providers[e]},size:function e(){return Object.getOwnPropertyNames(this.providers).length}};(function(e){Object.defineProperty(e,"ChartCtx",{get:function e(){return W}})})(window);var G=function(e,t){return G=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},G(e,t)},Z=new WeakMap,$=function(e){return"function"==typeof e&&Z.has(e)},X=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0,ee=function(e,t){for(var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,a=t;a!==r;){var o=a.nextSibling;e.removeChild(a),a=o}},te={},re={},ae="{{lit-".concat((Math.random()+"").slice(2),"}}"),oe="<!--".concat(ae,"-->"),ne=new RegExp("".concat(ae,"|").concat(oe)),ie="$lit$",se=function e(t,r){var a=this;_classCallCheck(this,e),this.parts=[],this.element=r;var o=-1,i=0,s=[],m=function(e){for(var r=e.content,n=document.createTreeWalker(r,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1),d=0// Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
// null
;n.nextNode();){o++;var P=n.currentNode;if(1===P.nodeType/* Node.ELEMENT_NODE */){if(P.hasAttributes()){for(var l=P.attributes,p=0,g=0;g<l.length;g++)0<=l[g].value.indexOf(ae)&&p++;for(;0<p--;){// Get the template literal section leading up to the first
// expression in this attribute
var u=t.strings[i],c=le.exec(u)[2],h=c.toLowerCase()+ie,y=P.getAttribute(h),b=y.split(ne);// Find the attribute name
a.parts.push({type:"attribute",index:o,name:c,strings:b}),P.removeAttribute(h),i+=b.length-1}}"TEMPLATE"===P.tagName&&m(P)}else if(3===P.nodeType/* Node.TEXT_NODE */){var S=P.data;if(0<=S.indexOf(ae)){// Generate a new text node for each literal section
// These nodes are also used as the markers for node parts
for(var f=P.parentNode,v=S.split(ne),_=v.length-1,x=0;x<_;x++)f.insertBefore(""===v[x]?de():document.createTextNode(v[x]),P),a.parts.push({type:"node",index:++o});// If there's no text, we must insert a comment to mark our place.
// Else, we can trust it will stick around after cloning.
// We have a part for each match found
""===v[_]?(f.insertBefore(de(),P),s.push(P)):P.data=v[_],i+=_}}else if(8===P.nodeType/* Node.COMMENT_NODE */)if(P.data===ae){var C=P.parentNode;// Add a new marker node to be the startNode of the Part if any of
// the following are true:
//  * We don't have a previousSibling
//  * The previousSibling is already the start of a previous part
(null===P.previousSibling||o===d)&&(o++,C.insertBefore(de(),P)),d=o,a.parts.push({type:"node",index:o}),null===P.nextSibling?P.data="":(s.push(P),o--),i++}else for(var w=-1;-1!==(w=P.data.indexOf(ae,w+1));)// Comment node has a binding marker inside, make an inactive part
// The binding won't work, but subsequent bindings will
// TODO (justinfagnani): consider whether it's even worth it to
// make bindings in comments work
a.parts.push({type:"node",index:-1})}};m(r);// Remove text binding nodes after the walk to not disturb the TreeWalker
for(var d,l=0,p=s;l<p.length;l++)d=p[l],d.parentNode.removeChild(d)},me=function(e){return-1!==e.index},de=function(){return document.createComment("")},le=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,pe=/*#__PURE__*/function(){function e(t,r,a){_classCallCheck(this,e),this._parts=[],this.template=t,this.processor=r,this.options=a}return _createClass(e,[{key:"update",value:function h(e){var t=0,r=!0,a=!1,o=void 0;try{for(var n,s,m=this._parts[Symbol.iterator]();!(r=(n=m.next()).done);r=!0)s=n.value,void 0!==s&&s.setValue(e[t]),t++}catch(e){a=!0,o=e}finally{try{r||null==m.return||m.return()}finally{if(a)throw o}}var d=!0,l=!1,p=void 0;try{for(var g,u,c=this._parts[Symbol.iterator]();!(d=(g=c.next()).done);d=!0)u=g.value,void 0!==u&&u.commit()}catch(e){l=!0,p=e}finally{try{d||null==c.return||c.return()}finally{if(l)throw p}}}},{key:"_clone",value:function i(){var e=this,t=X?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=this.template.parts,a=0,o=0,n=function(t){// Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
// null
// Loop through all the nodes and parts of a template
for(var i,s=document.createTreeWalker(t,133/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */,null,!1),m=s.nextNode();a<r.length&&null!==m;)// Consecutive Parts may have the same node index, in the case of
// multiple bound attributes on an element. So each iteration we either
// increment the nodeIndex, if we aren't on a node with a part, or the
// partIndex if we are. By not incrementing the nodeIndex when we find a
// part, we allow for the next part to be associated with the current
// node if neccessasry.
if(i=r[a],!me(i))e._parts.push(void 0),a++;else if(o===i.index){if("node"===i.type){var l=e.processor.handleTextExpression(e.options);l.insertAfterNode(m.previousSibling),e._parts.push(l)}else{var d;(d=e._parts).push.apply(d,_toConsumableArray(e.processor.handleAttributeExpressions(m,i.name,i.strings,e.options)))}a++}else o++,"TEMPLATE"===m.nodeName&&n(m.content),m=s.nextNode()};return n(t),X&&(document.adoptNode(t),customElements.upgrade(t)),t}}]),e}(),ge=/*#__PURE__*/function(){function e(t,r,a,o){_classCallCheck(this,e),this.strings=t,this.values=r,this.type=a,this.processor=o}/**
	     * Returns a string of HTML used to create a `<template>` element.
	     */return _createClass(e,[{key:"getHTML",value:function n(){for(var e=this.strings.length-1,t="",r=0;r<e;r++){var a=this.strings[r],o=le.exec(a);// This exec() call does two things:
// 1) Appends a suffix to the bound attribute name to opt out of special
// attribute value parsing that IE11 and Edge do, like for style and
// many SVG attributes. The Template class also appends the same suffix
// when looking up attributes to create Parts.
// 2) Adds an unquoted-attribute-safe marker for the first expression in
// an attribute. Subsequent attribute expressions will use node markers,
// and this is safe since attributes with multiple expressions are
// guaranteed to be quoted.
t+=o?a.substr(0,o.index)+o[1]+o[2]+ie+o[3]+ae:a+oe}return t+this.strings[e]}},{key:"getTemplateElement",value:function t(){var e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}]),e}(),ue=function(e){return null===e||"object"!==_typeof2(e)&&"function"!=typeof e},ce=/*#__PURE__*/function(){function e(t,r,a){_classCallCheck(this,e),this.dirty=!0,this.element=t,this.name=r,this.strings=a,this.parts=[];for(var o=0;o<a.length-1;o++)this.parts[o]=this._createPart()}/**
	     * Creates a single part. Override this to create a differnt type of part.
	     */return _createClass(e,[{key:"_createPart",value:function e(){return new he(this)}},{key:"_getValue",value:function g(){for(var e=this.strings,r=e.length-1,a="",o=0;o<r;o++){a+=e[o];var u=this.parts[o];if(void 0!==u){var c=u.value;if(null!=c&&(Array.isArray(c)||// tslint:disable-next-line:no-any
"string"!=typeof c&&c[Symbol.iterator])){var n=!0,s=!1,m=void 0;try{for(var d,l,p=c[Symbol.iterator]();!(n=(d=p.next()).done);n=!0)l=d.value,a+="string"==typeof l?l:l+""}catch(e){s=!0,m=e}finally{try{n||null==p.return||p.return()}finally{if(s)throw m}}}else a+="string"==typeof c?c:c+""}}return a+=e[r],a}},{key:"commit",value:function e(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),e}(),he=/*#__PURE__*/function(){function e(t){_classCallCheck(this,e),this.value=void 0,this.committer=t}return _createClass(e,[{key:"setValue",value:function t(e){e===te||ue(e)&&e===this.value||(this.value=e,!$(e)&&(this.committer.dirty=!0))}},{key:"commit",value:function e(){for(;$(this.value);){var t=this.value;this.value=te,t(this)}this.value===te||this.committer.commit()}}]),e}(),ye=/*#__PURE__*/function(){function e(t){_classCallCheck(this,e),this.value=void 0,this._pendingValue=void 0,this.options=t}/**
	     * Inserts this part into a container.
	     *
	     * This part must be empty, as its contents are not automatically moved.
	     */return _createClass(e,[{key:"appendInto",value:function t(e){this.startNode=e.appendChild(de()),this.endNode=e.appendChild(de())}/**
	     * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
	     * its next sibling must be static, unchanging nodes such as those that appear
	     * in a literal section of a template.
	     *
	     * This part must be empty, as its contents are not automatically moved.
	     */},{key:"insertAfterNode",value:function t(e){this.startNode=e,this.endNode=e.nextSibling}/**
	     * Appends this part into a parent part.
	     *
	     * This part must be empty, as its contents are not automatically moved.
	     */},{key:"appendIntoPart",value:function t(e){e._insert(this.startNode=de()),e._insert(this.endNode=de())}/**
	     * Appends this part after `ref`
	     *
	     * This part must be empty, as its contents are not automatically moved.
	     */},{key:"insertAfterPart",value:function t(e){e._insert(this.startNode=de()),this.endNode=e.endNode,e.endNode=this.startNode}},{key:"setValue",value:function t(e){this._pendingValue=e}},{key:"commit",value:function t(){for(;$(this._pendingValue);){var r=this._pendingValue;this._pendingValue=te,r(this)}var e=this._pendingValue;e===te||(ue(e)?e!==this.value&&this._commitText(e):e instanceof ge?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||// tslint:disable-next-line:no-any
e[Symbol.iterator]?this._commitIterable(e):e===re?(this.value=re,this.clear()):this._commitText(e))}},{key:"_insert",value:function t(e){this.endNode.parentNode.insertBefore(e,this.endNode)}},{key:"_commitNode",value:function t(e){this.value===e||(this.clear(),this._insert(e),this.value=e)}},{key:"_commitText",value:function r(e){var t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType/* Node.TEXT_NODE */?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:e+"")),this.value=e}},{key:"_commitTemplateResult",value:function o(e){var t=this.options.templateFactory(e);if(this.value instanceof pe&&this.value.template===t)this.value.update(e.values);else{// Make sure we propagate the template processor from the TemplateResult
// so that we use its syntax extension, etc. The template factory comes
// from the render function options so that it can control template
// caching and preprocessing.
var r=new pe(t,e.processor,this.options),a=r._clone();r.update(e.values),this._commitNode(a),this.value=r}}},{key:"_commitIterable",value:function p(t){Array.isArray(this.value)||(this.value=[],this.clear());// Lets us keep track of how many items we stamped so we can clear leftover
// items from a previous render
var r,a=this.value,o=0,n=!0,i=!1,s=void 0;try{for(var m,d,l=t[Symbol.iterator]();!(n=(m=l.next()).done);n=!0)// Try to reuse an existing part
d=m.value,r=a[o],void 0===r&&(r=new e(this.options),a.push(r),0===o?r.appendIntoPart(this):r.insertAfterPart(a[o-1])),r.setValue(d),r.commit(),o++}catch(e){i=!0,s=e}finally{try{n||null==l.return||l.return()}finally{if(i)throw s}}o<a.length&&(a.length=o,this.clear(r&&r.endNode))}},{key:"clear",value:function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.startNode;ee(this.startNode.parentNode,e.nextSibling,this.endNode)}}]),e}(),be=/*#__PURE__*/function(){function e(t,r,a){if(_classCallCheck(this,e),this.value=void 0,this._pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=a}return _createClass(e,[{key:"setValue",value:function t(e){this._pendingValue=e}},{key:"commit",value:function t(){for(;$(this._pendingValue);){var r=this._pendingValue;this._pendingValue=te,r(this)}if(this._pendingValue!==te){var e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=te}}}]),e}(),fe=/*#__PURE__*/function(e){function t(e,r,a){var o;return _classCallCheck(this,t),o=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,r,a)),o.single=2===a.length&&""===a[0]&&""===a[1],o}return _inherits(t,e),_createClass(t,[{key:"_createPart",value:function e(){return new ve(this)}},{key:"_getValue",value:function e(){return this.single?this.parts[0].value:_get(_getPrototypeOf(t.prototype),"_getValue",this).call(this)}},{key:"commit",value:function e(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),t}(ce),ve=/*#__PURE__*/function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),t}(he),_e=!1;try{var ha={get capture(){return _e=!0,!1}};// tslint:disable-next-line:no-any
// tslint:disable-next-line:no-any
window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch(e){}var xe=/*#__PURE__*/function(){function e(t,r,a){var o=this;_classCallCheck(this,e),this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=a,this._boundHandleEvent=function(t){return o.handleEvent(t)}}return _createClass(e,[{key:"setValue",value:function t(e){this._pendingValue=e}},{key:"commit",value:function a(){for(;$(this._pendingValue);){var o=this._pendingValue;this._pendingValue=te,o(this)}if(this._pendingValue!==te){var e=this._pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive);r&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),null!=e&&(null==t||r)&&(this._options=Pe(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=te}}},{key:"handleEvent",value:function t(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}]),e}(),Pe=function(e){return e&&(_e?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},Se=/*#__PURE__*/function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"handleAttributeExpressions",/**
	     * Create parts for an attribute-position binding, given the event, attribute
	     * name, and string literals.
	     *
	     * @param element The element containing the binding
	     * @param name  The attribute name
	     * @param strings The string literals. There are always at least two strings,
	     *   event for fully-controlled bindings with a single expression.
	     */value:function i(e,t,r,a){var o=t[0];if("."===o){var s=new fe(e,t.slice(1),r);return s.parts}if("@"===o)return[new xe(e,t.slice(1),a.eventContext)];if("?"===o)return[new be(e,t.slice(1),r)];var n=new ce(e,t,r);return n.parts}/**
	     * Create parts for a text-position binding.
	     * @param templateFactory
	     */},{key:"handleTextExpression",value:function t(e){return new ye(e)}}]),e}(),Ce=new Se,we=new Map,ke=new WeakMap,Ae=function(e,t,r){var a=ke.get(t);a===void 0&&(ee(t,t.firstChild),ke.set(t,a=new ye(Object.assign({templateFactory:n},r))),a.appendInto(t)),a.setValue(e),a.commit()};// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");/**
	 * Interprets a template literal as an HTML template that can efficiently
	 * render to and update a container.
	 */var Ee=function(e){for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return new ge(e,r,"html",Ce)},Ne=function(e){for(var t=11===e.nodeType/* Node.DOCUMENT_FRAGMENT_NODE */?0:1,r=document.createTreeWalker(e,133,null,!1);r.nextNode();)t++;return t},Te=function(e){for(var t,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1,a=r+1;a<e.length;a++)if(t=e[a],me(t))return a;return-1},Re=function(e,t){return"".concat(e,"--").concat(t)},Ie=!0;/**
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
	 */"undefined"==typeof window.ShadyCSS?Ie=!1:"undefined"==typeof window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),Ie=!1);/**
	 * Template factory which scopes template DOM using ShadyCSS.
	 * @param scopeName {string}
	 */var Le=function(e){return function(t){var r=Re(t.type,e),a=we.get(r);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},we.set(r,a));var o=a.stringsArray.get(t.strings);if(void 0!==o)return o;var n=t.strings.join(ae);if(o=a.keyString.get(n),void 0===o){var i=t.getTemplateElement();Ie&&window.ShadyCSS.prepareTemplateDom(i,e),o=new se(t,i),a.keyString.set(n,o)}return a.stringsArray.set(t.strings,o),o}},Be=["html","svg"],Ue=function(e){Be.forEach(function(t){var r=we.get(Re(t,e));r!==void 0&&r.keyString.forEach(function(e){var t=e.element.content,r=new Set;// IE 11 doesn't support the iterable param Set constructor
Array.from(t.querySelectorAll("style")).forEach(function(e){r.add(e)}),i(e,r)})})},Me=new Set,Oe=function(e,t,r){Me.add(r);// Move styles out of rendered DOM and store.
var a=e.querySelectorAll("style");// If there are no styles, skip unnecessary work
if(0===a.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,r);// Collect styles into a single style. This helps us make sure ShadyCSS
// manipulations will not prevent us from being able to fix up template
// part indices.
// NOTE: collecting styles is inefficient for browsers but ShadyCSS
// currently does this anyway. When it does not, this should be changed.
for(var o,n=document.createElement("style"),m=0;m<a.length;m++)o=a[m],o.parentNode.removeChild(o),n.textContent+=o.textContent;// Remove styles from nested templates in this scope.
if(Ue(r),s(t,n,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,r),window.ShadyCSS.nativeShadow){// When in native Shadow DOM, re-add styling to rendered content using
// the style ShadyCSS produced.
var d=t.element.content.querySelector("style");e.insertBefore(d.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(n,t.element.content.firstChild);var l=new Set;l.add(n),i(t,l)}},Ve=function(e,t,r){var a=r.scopeName,o=ke.has(t),n=t instanceof ShadowRoot&&Ie&&e instanceof ge,i=n&&!Me.has(a),s=i?document.createDocumentFragment():t;// When performing first scope render,
// (1) We've rendered into a fragment so that there's a chance to
// `prepareTemplateStyles` before sub-elements hit the DOM
// (which might cause them to render based on a common pattern of
// rendering in a custom element's `connectedCallback`);
// (2) Scope the template with ShadyCSS one time only for this scope.
// (3) Render the fragment into the container and make sure the
// container knows its `part` is the one we just rendered. This ensures
// DOM will be re-used on subsequent renders.
if(Ae(e,s,Object.assign({templateFactory:Le(a)},r)),i){var m=ke.get(s);ke.delete(s),m.value instanceof pe&&Oe(s,m.value.template,a),ee(t,t.firstChild),t.appendChild(s),ke.set(t,m)}// After elements have hit the DOM, update styling if this is the
// initial render to this container.
// This is needed whenever dynamic changes are made so it would be
// safest to do every render; however, this would regress performance
// so we leave it up to the user to call `ShadyCSSS.styleElement`
// for dynamic changes.
!o&&n&&window.ShadyCSS.styleElement(t.host)};window.JSCompiler_renameProperty=function(e){return e};var ze={toAttribute:function r(e,t){return t===Boolean?e?"":null:t===Object||t===Array?null==e?e:JSON.stringify(e):e},fromAttribute:function r(e,t){return t===Boolean?null!==e:t===Number?null===e?null:+e:t===Object||t===Array?JSON.parse(e):e}},De=function(e,t){// This ensures (old==NaN, value==NaN) always returns false
return t!==e&&(t===t||e===e)},Fe={attribute:!0,type:String,converter:ze,reflect:!1,hasChanged:De},Ye=Promise.resolve(!0),He=1,qe=4,je=8,Je=16,Ke=32,Qe=/*#__PURE__*/function(e){function t(){var e;return _classCallCheck(this,t),e=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this)),e._updateState=0,e._instanceProperties=void 0,e._updatePromise=Ye,e._hasConnectedResolver=void 0,e._changedProperties=new Map,e._reflectingProperties=void 0,e.initialize(),e}/**
	     * Returns a list of attributes corresponding to the registered properties.
	     * @nocollapse
	     */return _inherits(t,e),_createClass(t,[{key:"initialize",/**
	     * Performs element initialization. By default captures any pre-set values for
	     * registered properties.
	     */value:function e(){this._saveInstanceProperties()}/**
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
	     */},{key:"_saveInstanceProperties",value:function t(){var e=this;this.constructor._classProperties.forEach(function(t,r){if(e.hasOwnProperty(r)){var a=e[r];delete e[r],e._instanceProperties||(e._instanceProperties=new Map),e._instanceProperties.set(r,a)}})}/**
	     * Applies previously saved instance properties.
	     */},{key:"_applyInstanceProperties",value:function t(){var e=this;this._instanceProperties.forEach(function(t,r){return e[r]=t}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function e(){this._updateState|=Ke,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}/**
	     * Allows for `super.disconnectedCallback()` in extensions while
	     * reserving the possibility of making non-breaking feature additions
	     * when disconnecting at some point in the future.
	     */},{key:"disconnectedCallback",value:function e(){}/**
	     * Synchronizes property values when attributes change.
	     */},{key:"attributeChangedCallback",value:function a(e,t,r){t!==r&&this._attributeToProperty(e,r)}},{key:"_propertyToAttribute",value:function n(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:Fe,a=this.constructor,o=a._attributeNameForProperty(e,r);if(void 0!==o){var i=a._propertyValueToAttribute(t,r);// an undefined value does not change the attribute.
if(void 0===i)return;// Track if the property is being reflected to avoid
// setting the property again via `attributeChangedCallback`. Note:
// 1. this takes advantage of the fact that the callback is synchronous.
// 2. will behave incorrectly if multiple attributes are in the reaction
// stack at time of calling. However, since we process attributes
// in `update` this should not be possible (or an extreme corner case
// that we'd like to discover).
// mark state reflecting
this._updateState|=je,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._updateState&=~je}}},{key:"_attributeToProperty",value:function o(e,t){// Use tracking info to avoid deserializing attribute value if it was
// just set from a property setter.
if(!(this._updateState&je)){var r=this.constructor,a=r._attributeToPropertyMap.get(e);if(void 0!==a){var n=r._classProperties.get(a)||Fe;// mark state reflecting
this._updateState|=Je,this[a]=// tslint:disable-next-line:no-any
r._propertyValueFromAttribute(t,n),this._updateState&=~Je}}}/**
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
	     */},{key:"requestUpdate",value:function n(e,t){var r=!0;// if we have a property key, perform property update steps.
if(void 0!==e&&!this._changedProperties.has(e)){var a=this.constructor,o=a._classProperties.get(e)||Fe;a._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.set(e,t),!0===o.reflect&&!(this._updateState&Je)&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):r=!1}return!this._hasRequestedUpdate&&r&&this._enqueueUpdate(),this.updateComplete}/**
	     * Sets up the element to asynchronously update.
	     */},{key:"_enqueueUpdate",value:function(){var e=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function e(){var t,r,a,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this._updateState|=qe,r=this._updatePromise,this._updatePromise=new Promise(function(e){return t=e}),e.next=5,r;case 5:if(this._hasConnected){e.next=8;break}return e.next=8,new Promise(function(e){return o._hasConnectedResolver=e});case 8:if(a=this.performUpdate(),null==a||"function"!=typeof a.then){e.next=12;break}return e.next=12,a;case 12:t(!this._hasRequestedUpdate);case 13:case"end":return e.stop();}},e,this)}));return function t(){return e.apply(this,arguments)}}()},{key:"performUpdate",/**
	     * Performs an element update.
	     *
	     * You can override this method to change the timing of updates. For instance,
	     * to schedule updates to occur just before the next frame:
	     *
	     * ```
	     * protected async performUpdate(): Promise<unknown> {
	     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
	     *   super.performUpdate();
	     * }
	     * ```
	     */value:function e(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){var t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&He||(this._updateState|=He,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}},{key:"_markUpdated",value:function e(){this._changedProperties=new Map,this._updateState&=~qe}/**
	     * Returns a Promise that resolves when the element has completed updating.
	     * The Promise value is a boolean that is `true` if the element completed the
	     * update without triggering another update. The Promise result is `false` if
	     * a property was set inside `updated()`. This getter can be implemented to
	     * await additional state. For example, it is sometimes useful to await a
	     * rendered element before fulfilling this Promise. To do this, first await
	     * `super.updateComplete` then any subsequent state.
	     *
	     * @returns {Promise} The Promise returns a boolean that indicates if the
	     * update resolved without triggering another update.
	     */},{key:"shouldUpdate",/**
	     * Controls whether or not `update` should be called when the element requests
	     * an update. By default, this method always returns `true`, but this can be
	     * customized to control when to update.
	     *
	     * * @param _changedProperties Map of changed properties with old values
	     */value:function e(){return!0}/**
	     * Updates the element. This method reflects property values to attributes.
	     * It can be overridden to render and keep updated element DOM.
	     * Setting properties inside this method will *not* trigger
	     * another update.
	     *
	     * * @param _changedProperties Map of changed properties with old values
	     */},{key:"update",value:function t(){var e=this;void 0!==this._reflectingProperties&&0<this._reflectingProperties.size&&(this._reflectingProperties.forEach(function(t,r){return e._propertyToAttribute(r,e[r],t)}),this._reflectingProperties=void 0)}/**
	     * Invoked whenever the element is updated. Implement to perform
	     * post-updating tasks via DOM APIs, for example, focusing an element.
	     *
	     * Setting properties inside this method will trigger the element to update
	     * again after this update cycle completes.
	     *
	     * * @param _changedProperties Map of changed properties with old values
	     */},{key:"updated",value:function e(){}/**
	     * Invoked when the element is first updated. Implement to perform one time
	     * work on the element after update.
	     *
	     * Setting properties inside this method will trigger the element to update
	     * again after this update cycle completes.
	     *
	     * * @param _changedProperties Map of changed properties with old values
	     */},{key:"firstUpdated",value:function e(){}},{key:"_hasConnected",get:function e(){return this._updateState&Ke}},{key:"_hasRequestedUpdate",get:function e(){return this._updateState&qe}},{key:"hasUpdated",get:function e(){return this._updateState&He}},{key:"updateComplete",get:function e(){return this._updatePromise}}],[{key:"_ensureClassProperties",/**
	     * Ensures the private `_classProperties` property metadata is created.
	     * In addition to `finalize` this is also called in `createProperty` to
	     * ensure the `@property` decorator can add property metadata.
	     */ /** @nocollapse */value:function t(){var e=this;// ensure private storage for property declarations.
if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;// NOTE: Workaround IE11 not supporting Map constructor argument.
var r=Object.getPrototypeOf(this)._classProperties;void 0!==r&&r.forEach(function(t,r){return e._classProperties.set(r,t)})}}/**
	     * Creates a property accessor on the element prototype if one does not exist.
	     * The property setter calls the property's `hasChanged` property option
	     * or uses a strict identity check to determine whether or not to request
	     * an update.
	     * @nocollapse
	     */},{key:"createProperty",value:function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Fe;// Do not generate an accessor if the prototype already has one, since
// it would be lost otherwise and that would never be the user's intention;
// Instead, we expect users to call `requestUpdate` themselves from
// user-defined accessors. Note that if the super has an accessor we will
// still overwrite it
if(this._ensureClassProperties(),this._classProperties.set(e,t),!(t.noAccessor||this.prototype.hasOwnProperty(e))){var r="symbol"===_typeof2(e)?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{// tslint:disable-next-line:no-any no symbol in index
get:function e(){// tslint:disable-next-line:no-any no symbol in index
return this[r]},set:function o(t){// tslint:disable-next-line:no-any no symbol in index
var a=this[e];// tslint:disable-next-line:no-any no symbol in index
this[r]=t,this.requestUpdate(e,a)},configurable:!0,enumerable:!0})}}/**
	     * Creates property accessors for registered properties and ensures
	     * any superclasses are also finalized.
	     * @nocollapse
	     */},{key:"finalize",value:function d(){if(!(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)){// finalize any superclasses
var e=Object.getPrototypeOf(this);// make any properties
// Note, only process "own" properties since this element will inherit
// any properties defined on the superClass, and finalization ensures
// the entire prototype chain is finalized.
if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,r=[].concat(_toConsumableArray(Object.getOwnPropertyNames(t)),_toConsumableArray("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[])),a=!0,o=!1,n=void 0;// support symbols in properties (IE11 does not support this)
try{// This for/of is ok because propKeys is an array
for(var i,s,m=r[Symbol.iterator]();!(a=(i=m.next()).done);a=!0)// note, use of `any` is due to TypeSript lack of support for symbol in
// index types
// tslint:disable-next-line:no-any no symbol in index
s=i.value,this.createProperty(s,t[s])}catch(e){o=!0,n=e}finally{try{a||null==m.return||m.return()}finally{if(o)throw n}}}}}/**
	     * Returns the property name for the given attribute `name`.
	     * @nocollapse
	     */},{key:"_attributeNameForProperty",value:function a(e,t){var r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}/**
	     * Returns true if a property should request an update.
	     * Called when a property value is set and uses the `hasChanged`
	     * option for the property if present or a strict identity check.
	     * @nocollapse
	     */},{key:"_valueHasChanged",value:function a(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:De;return r(e,t)}/**
	     * Returns the property value for the given attribute value.
	     * Called via the `attributeChangedCallback` and uses the property's
	     * `converter` or `converter.fromAttribute` property option.
	     * @nocollapse
	     */},{key:"_propertyValueFromAttribute",value:function n(e,t){var r=t.type,a=t.converter||ze,o="function"==typeof a?a:a.fromAttribute;return o?o(e,r):e}/**
	     * Returns the attribute value for the given property value. If this
	     * returns undefined, the property will *not* be reflected to an attribute.
	     * If this returns null, the attribute will be removed, otherwise the
	     * attribute will be set to the value.
	     * This uses the property's `reflect` and `type.toAttribute` property options.
	     * @nocollapse
	     */},{key:"_propertyValueToAttribute",value:function n(e,t){if(void 0!==t.reflect){var r=t.type,a=t.converter,o=a&&a.toAttribute||ze.toAttribute;return o(e,r)}}},{key:"observedAttributes",get:function r(){var e=this;this.finalize();var t=[];// Use forEach so this works even if for/of loops are compiled to for loops
// expecting arrays
return this._classProperties.forEach(function(r,a){var o=e._attributeNameForProperty(a,r);void 0!==o&&(e._attributeToPropertyMap.set(o,a),t.push(o))}),t}}]),t}(_wrapNativeSuper(HTMLElement));/**
	 * Change function that returns true if `value` is different from `oldValue`.
	 * This method is used as the default for a property's `hasChanged` function.
	 */Qe.finalized=!0;/**
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
	 */var We=function(e,t){// When decorating an accessor, pass it through and add property metadata.
// Note, the `hasOwnProperty` check in `createProperty` ensures we don't
// stomp over the user's accessor.
return"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign({},t,{finisher:function a(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},// When @babel/plugin-proposal-decorators implements initializers,
// do this instead of the initializer below. See:
// https://github.com/babel/babel/issues/9260 extras: [
//   {
//     kind: 'initializer',
//     placement: 'own',
//     initializer: descriptor.initializer,
//   }
// ],
// tslint:disable-next-line:no-any decorator
initializer:function e(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher:function a(r){r.createProperty(t.key,e)}}},Ge=function(e,t,r){t.constructor.createProperty(r,e)},Ze="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$e=Symbol(),Xe=/*#__PURE__*/function(){function e(t,r){if(_classCallCheck(this,e),r!==$e)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}// Note, this is a getter so that it's lazy. In practice, this means
// stylesheets are not created until the first element instance is made.
return _createClass(e,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function e(){return void 0===this._styleSheet&&(Ze?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}]),e}(),et=function(e){if(e instanceof Xe)return e.cssText;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))},tt=function(e){for(var t=arguments.length,r=Array(1<t?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var o=r.reduce(function(t,r,a){return t+et(r)+e[a+1]},e[0]);return new Xe(o,$e)};(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");var rt=function(e){return e.flat?e.flat(1/0):d(e)},at=/*#__PURE__*/function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:"initialize",/**
	     * Performs element initialization. By default this calls `createRenderRoot`
	     * to create the element `renderRoot` node and captures any pre-set values for
	     * registered properties.
	     */value:function e(){_get(_getPrototypeOf(t.prototype),"initialize",this).call(this),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}/**
	     * Returns the node into which the element should render and by default
	     * creates and returns an open shadowRoot. Implement to customize where the
	     * element's DOM is rendered. For example, to render into the element's
	     * childNodes, return `this`.
	     * @returns {Element|DocumentFragment} Returns a node into which to render.
	     */},{key:"createRenderRoot",value:function e(){return this.attachShadow({mode:"open"})}/**
	     * Applies styling to the element shadowRoot using the `static get styles`
	     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
	     * available and will fallback otherwise. When Shadow DOM is polyfilled,
	     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
	     * is available but `adoptedStyleSheets` is not, styles are appended to the
	     * end of the `shadowRoot` to [mimic spec
	     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
	     */},{key:"adoptStyles",value:function t(){var e=this.constructor._styles;0===e.length||(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ze?this.renderRoot.adoptedStyleSheets=e.map(function(e){return e.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(function(e){return e.cssText}),this.localName))}},{key:"connectedCallback",value:function e(){_get(_getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}/**
	     * Updates the element. This method reflects property values to attributes
	     * and calls `render` to render DOM via lit-html. Setting properties inside
	     * this method will *not* trigger another update.
	     * * @param _changedProperties Map of changed properties with old values
	     */},{key:"update",value:function o(e){var r=this;_get(_getPrototypeOf(t.prototype),"update",this).call(this,e);var a=this.render();a instanceof ge&&this.constructor.render(a,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(e){var t=document.createElement("style");t.textContent=e.cssText,r.renderRoot.appendChild(t)}))}/**
	     * Invoked on each update to perform rendering tasks. This method must return
	     * a lit-html TemplateResult. Setting properties inside this method will *not*
	     * trigger the element to update.
	     */},{key:"render",value:function(){}}],[{key:"finalize",/** @nocollapse */value:function e(){_get(_getPrototypeOf(t),"finalize",this).call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}/** @nocollapse */},{key:"_getUniqueStyles",value:function o(){// Take care not to call `this.styles` multiple times since this generates
// new CSSResults each time.
// TODO(sorvell): Since we do not cache CSSResults by input, any
// shared styles will generate new stylesheet objects, which is wasteful.
// This should be addressed when a browser ships constructable
// stylesheets.
var e=this.styles,t=[];if(Array.isArray(e)){var r=rt(e),a=r.reduceRight(function(e,t){// on IE set.add does not return the set.
return e.add(t),e},new Set);// As a performance optimization to avoid duplicated styling that can
// occur especially when composing via subclassing, de-duplicate styles
// preserving the last item in the list. The last item is kept to
// try to preserve cascade order with the assumption that it's most
// important that last added styles override previous styles.
a.forEach(function(e){return t.unshift(e)})}else e&&t.push(e);return t}}]),t}(Qe);at.finalized=!0,at.render=Ve;var ot,nt=/** @class */function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t,"styles",{get:function e(){return[tt(ot||(ot=o(["\n        :host {\n          display: block;\n        }\n        :host[disabled] {\n          pointer-events: none;\n        }\n        :host[readonly] {\n          pointer-events: none;\n          user-select: none;\n        }\n      "],["\n        :host {\n          display: block;\n        }\n        :host[disabled] {\n          pointer-events: none;\n        }\n        :host[readonly] {\n          pointer-events: none;\n          user-select: none;\n        }\n      "])))]},enumerable:!0,configurable:!0}),t.prototype.platform=function(){return["web","mobile"]},t.prototype.isPlatform=function(e){return-1<this.platform().indexOf(e)},t}(at),it=/** @class */function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t,"styles",{get:function t(){return e.styles.concat([tt(st||(st=o(["\n        :host {\n          padding: 10px 15px;\n          font-size: 2em;\n          color: hsl(232, 90%, 60%);\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n            Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n        }\n      "],["\n        :host {\n          padding: 10px 15px;\n          font-size: 2em;\n          color: hsl(232, 90%, 60%);\n          font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n            Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n        }\n      "])))])},enumerable:!0,configurable:!0}),t.prototype.render=function(){/**
	         * `render` must return a lit-html `TemplateResult`.
	         *
	         * To create a `TemplateResult`, tag a JavaScript template literal
	         * with the `html` helper function:
	         */return Ee(mt||(mt=o(["\n      <p>","</p>\n    "],["\n      <p>","</p>\n    "])),this.text)},t.prototype.firstUpdated=function(){},a([m({type:String})],t.prototype,"text",void 0),t}(nt);customElements.define("pg-demo",it);var st,mt,dt=/** @class */function(e){function t(){var t=e.call(this)||this;return t._handleResize=function(){setTimeout(function(){t._forceUpdate()},50)},t._forceUpdate=function(){t.chartProvider&&t.chartProvider.update&&(t.chartProvider.update({columns:t._columns,rows:t._rows,options:t.options}),t.chartProvider.resize())},t._getAxes=function(e,t){var r=Object.assign({},{display:!0,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,offsetGridLines:"x"===t,tickMarkLength:10});if(e){"string"==typeof e.label&&(r.scaleLabel={display:!!e.label,labelString:e.label});var a=Object.assign({},e);delete a.label,r.gridLines={borderDash:[a.dashWidth||0,isNaN(a.dashOffset)?a.dashWidth||0:a.dashOffset],lineWidth:"number"==typeof a.lineWidth?a.lineWidth:1,color:"string"==typeof a.color?a.color:"rgba(0, 0, 0, 0.1)"}}return r.ticks={beginAtZero:!0},r},window.addEventListener("resize",t._handleResize),document.addEventListener("resize",t._handleResize),t.type="bar",t.version="0.1",t}return r(t,e),t.prototype.supportTypes=function(){return this.chartProvider?this.chartProvider.supportTypes:{}},t.prototype.getInspector=function(){if(this.chartProvider)return this.chartProvider.getInspector(this.type)},t.prototype._getConfig=function(){var e=Object.keys(this.supportTypes());e.includes(this.type)||(this.type=e[0]);var t={type:this.type,dataTable:{columns:this._columns,rows:this._rows,options:this.options},options:{title:{display:!!this.titleOptions.text,text:this.titleOptions.text,position:this.titleOptions.position}}};if(!["radar","pie","doughnut","polarArea","halfDoughnut"].includes(this.type)){var r={},a=Object.assign({},t);if(this.xAxis){var o=[],n=this._getAxes(this.xAxis,"x");o.push(n),r.xAxes=o}var i=[],s=this._getAxes(this.yAxis,"y");return i.push(s),r.yAxes=i,Object.assign(a.options,{scales:r}),a}return t},t.prototype._configUpdate=function(e){e&&this.chartProvider&&this.chartProvider.updateConfig(e)},t.prototype._cleanRender=function(){this.chartProvider.destroy(),this._renderChart()},t.prototype._updateData=function(e){var t=this,r="object"===_typeof2(e)?e:JSON.parse(e);if(r&&r.category_ instanceof Array){var a=Object.keys(r),o=a.filter(function(e){return"category_"!==e}),n=["category_"].concat(o);this._columns=n,("pie"===this.type||"doughnut"===this.type||"polarArea"===this.type||"halfDoughnut"===this.type)&&(this._columns=n.slice(0,2),n=n.slice(0,2)),this._rows=r.category_.map(function(e,t){return[e].concat(n.filter(function(e){return"category_"!==e}).map(function(e){return r[e][t]}))})}setTimeout(function(){t._forceUpdate()},50)},t.prototype.__handle__=function(){var e=this;return{provider:function a(t,r){e.provider=r,e._forceUpdate()},series:function a(t,r){e._updateData(r)},type:function o(t,r){if(e.type=r,e.series){var a=e.__handle__().series;"function"==typeof a&&a(t,e.series)}e.chartProvider&&(e._configUpdate({type:r}),e._cleanRender())},colors:function a(t,r){r&&setTimeout(function(){e._configUpdate({colors:JSON.parse(r)}),e._forceUpdate()},23)},"x-axis":function o(t,r){var a=JSON.parse(r)||{};e.xAxis=a,setTimeout(function(){e.chartProvider.axis({x:a},e.type),e._forceUpdate()},23)},"y-axis":function o(t,r){var a=JSON.parse(r)||{};e.yAxis=a,setTimeout(function(){e.chartProvider.axis({y:a},e.type),e._forceUpdate()},23)},"title-options":function o(t,r){var a=JSON.parse(r);"object"===_typeof2(a)&&(e.titleOptions=a,e.chartProvider&&setTimeout(function(){e.chartProvider.changeTitle(a),e._forceUpdate()},23))},options:function o(t,r){var a=JSON.parse(r)||[];e.options=a,e._forceUpdate()},"pg-store":function a(t,r){e.pgStore=r}}},t.prototype.attributeChangedCallback=function(e,t,r){var a=this.__handle__()[e];"series"===e&&(this.series=JSON.parse(r)),"function"==typeof a&&a(t,r)},t.prototype.render=function(){return Ee(pt||(pt=o(["\n      <style>\n        :host {\n          display: block;\n          margin: auto;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        div#Container {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n        canvas {\n          display: block;\n          width: 100% !important;\n          height: 100% !important;\n        }\n        .loading-contain{\n          width: 100%;\n          height: 100%;\n          position: absolute;\n        }\n        .loading {\n          width: 100%;\n          height: 100%;\n          text-align: center;\n          position: absolute;\n          z-index: 2;\n          background-color: #999999;\n          opacity: 0.4;\n        }\n        .loader {\n          margin: auto;\n          margin-top : 25%;\n          font-size: 8px;\n          width: 1em;\n          height: 1em;\n          border-radius: 50%;\n          text-indent: -9999em;\n          -webkit-animation: load5 1.1s infinite ease;\n          animation: load5 1.1s infinite ease;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n        }\n        @-webkit-keyframes load5 {\n          0%,\n          100% {\n            box-shadow: 0em -2.6em 0em 0em #000000, 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.5), -1.8em -1.8em 0 0em rgba(0,0,0, 0.7);\n          }\n          12.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.7), 1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.5);\n          }\n          25% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.5), 1.8em -1.8em 0 0em rgba(0,0,0, 0.7), 2.5em 0em 0 0em #000000, 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          37.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.5), 2.5em 0em 0 0em rgba(0,0,0, 0.7), 1.75em 1.75em 0 0em #000000, 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          50% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.5), 1.75em 1.75em 0 0em rgba(0,0,0, 0.7), 0em 2.5em 0 0em #000000, -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          62.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.5), 0em 2.5em 0 0em rgba(0,0,0, 0.7), -1.8em 1.8em 0 0em #000000, -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          75% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.5), -1.8em 1.8em 0 0em rgba(0,0,0, 0.7), -2.6em 0em 0 0em #000000, -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          87.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.5), -2.6em 0em 0 0em rgba(0,0,0, 0.7), -1.8em -1.8em 0 0em #000000;\n          }\n        }\n        @keyframes load5 {\n          0%,\n          100% {\n            box-shadow: 0em -2.6em 0em 0em #000000, 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.5), -1.8em -1.8em 0 0em rgba(0,0,0, 0.7);\n          }\n          12.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.7), 1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.5);\n          }\n          25% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.5), 1.8em -1.8em 0 0em rgba(0,0,0, 0.7), 2.5em 0em 0 0em #000000, 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          37.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.5), 2.5em 0em 0 0em rgba(0,0,0, 0.7), 1.75em 1.75em 0 0em #000000, 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          50% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.5), 1.75em 1.75em 0 0em rgba(0,0,0, 0.7), 0em 2.5em 0 0em #000000, -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          62.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.5), 0em 2.5em 0 0em rgba(0,0,0, 0.7), -1.8em 1.8em 0 0em #000000, -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          75% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.5), -1.8em 1.8em 0 0em rgba(0,0,0, 0.7), -2.6em 0em 0 0em #000000, -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          87.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.5), -2.6em 0em 0 0em rgba(0,0,0, 0.7), -1.8em -1.8em 0 0em #000000;\n          }\n        }\n        }\n      </style>\n      <div id=\"Container\">\n        ","\n        <canvas\n          id=\"Canvas\"\n          height=\"","\"\n          width=\"","\"\n        ></canvas>\n      </div>\n    "],["\n      <style>\n        :host {\n          display: block;\n          margin: auto;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        div#Container {\n          position: relative;\n          width: 100%;\n          height: 100%;\n        }\n        canvas {\n          display: block;\n          width: 100% !important;\n          height: 100% !important;\n        }\n        .loading-contain{\n          width: 100%;\n          height: 100%;\n          position: absolute;\n        }\n        .loading {\n          width: 100%;\n          height: 100%;\n          text-align: center;\n          position: absolute;\n          z-index: 2;\n          background-color: #999999;\n          opacity: 0.4;\n        }\n        .loader {\n          margin: auto;\n          margin-top : 25%;\n          font-size: 8px;\n          width: 1em;\n          height: 1em;\n          border-radius: 50%;\n          text-indent: -9999em;\n          -webkit-animation: load5 1.1s infinite ease;\n          animation: load5 1.1s infinite ease;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n        }\n        @-webkit-keyframes load5 {\n          0%,\n          100% {\n            box-shadow: 0em -2.6em 0em 0em #000000, 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.5), -1.8em -1.8em 0 0em rgba(0,0,0, 0.7);\n          }\n          12.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.7), 1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.5);\n          }\n          25% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.5), 1.8em -1.8em 0 0em rgba(0,0,0, 0.7), 2.5em 0em 0 0em #000000, 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          37.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.5), 2.5em 0em 0 0em rgba(0,0,0, 0.7), 1.75em 1.75em 0 0em #000000, 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          50% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.5), 1.75em 1.75em 0 0em rgba(0,0,0, 0.7), 0em 2.5em 0 0em #000000, -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          62.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.5), 0em 2.5em 0 0em rgba(0,0,0, 0.7), -1.8em 1.8em 0 0em #000000, -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          75% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.5), -1.8em 1.8em 0 0em rgba(0,0,0, 0.7), -2.6em 0em 0 0em #000000, -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          87.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.5), -2.6em 0em 0 0em rgba(0,0,0, 0.7), -1.8em -1.8em 0 0em #000000;\n          }\n        }\n        @keyframes load5 {\n          0%,\n          100% {\n            box-shadow: 0em -2.6em 0em 0em #000000, 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.5), -1.8em -1.8em 0 0em rgba(0,0,0, 0.7);\n          }\n          12.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.7), 1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.5);\n          }\n          25% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.5), 1.8em -1.8em 0 0em rgba(0,0,0, 0.7), 2.5em 0em 0 0em #000000, 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          37.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.5), 2.5em 0em 0 0em rgba(0,0,0, 0.7), 1.75em 1.75em 0 0em #000000, 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          50% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.5), 1.75em 1.75em 0 0em rgba(0,0,0, 0.7), 0em 2.5em 0 0em #000000, -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          62.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.5), 0em 2.5em 0 0em rgba(0,0,0, 0.7), -1.8em 1.8em 0 0em #000000, -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          75% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.5), -1.8em 1.8em 0 0em rgba(0,0,0, 0.7), -2.6em 0em 0 0em #000000, -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);\n          }\n          87.5% {\n            box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.5), -2.6em 0em 0 0em rgba(0,0,0, 0.7), -1.8em -1.8em 0 0em #000000;\n          }\n        }\n        }\n      </style>\n      <div id=\"Container\">\n        ","\n        <canvas\n          id=\"Canvas\"\n          height=\"","\"\n          width=\"","\"\n        ></canvas>\n      </div>\n    "])),!this.data&&this.pgStore&&"PGD"!==window.__ENV__?Ee(lt||(lt=o(["\n              <div class=\"loading-contain\">\n                <div class=\"loading\"></div>\n                <div class=\"loader\"></div>\n              </div>\n            "],["\n              <div class=\"loading-contain\">\n                <div class=\"loading\"></div>\n                <div class=\"loader\"></div>\n              </div>\n            "]))):"",this.height,this.width)},t.prototype._renderChart=function(){var e=this._getConfig();this._chart=this.chartProvider.render(this.$,e)},t.prototype.firstUpdated=function(){if(console.log("version:",this.version),this.$={Container:this.renderRoot.querySelector("#Container"),Canvas:this.renderRoot.querySelector("#Canvas")},!this.provider){console.error("Provider can't be empty!");var e=Object.getOwnPropertyNames(W.providers);this.provider=e[0]}var t=W.get(this.provider);return t?"function"==typeof t?void(//@ts-ignore
this.chartProvider=new t,this._renderChart()):void console.error("Chart provider is not a function!"):void console.error("Chart provider not found!")},t.prototype.updated=function(e){var t=this;e.forEach(function(e,r){"data"==r&&t.data!=e&&t._updateData(t.data)})},a([m({type:String,attribute:"pg-store"})],t.prototype,"pgStore",void 0),a([m({type:String})],t.prototype,"version",void 0),a([m({type:String,attribute:"provider"})],t.prototype,"provider",void 0),a([m({type:Number,attribute:"height",reflect:!0})],t.prototype,"height",void 0),a([m({type:Number,attribute:"width",reflect:!0})],t.prototype,"width",void 0),a([m({type:String,reflect:!0,attribute:"type"})],t.prototype,"type",void 0),a([m({type:Array,reflect:!0,attribute:"colors"})],t.prototype,"colors",void 0),a([m({type:Array,reflect:!0,attribute:"options"})],t.prototype,"options",void 0),a([m({type:Object,reflect:!0,attribute:"title-options"})],t.prototype,"titleOptions",void 0),a([m({type:Object,reflect:!0,attribute:"series"})],t.prototype,"series",void 0),a([m({type:Object,hasChanged:function r(e,t){return e!=t}})],t.prototype,"data",void 0),a([m({type:Object,reflect:!0,attribute:"x-axis"})],t.prototype,"xAxis",void 0),a([m({type:Object,reflect:!0,attribute:"y-axis"})],t.prototype,"yAxis",void 0),t}(nt);/// <reference path="index.d.ts" />
customElements.define("pg-chart",dt);var lt,pt,gt=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},ut={}.toString,ct=Array.isArray||function(e){return"[object Array]"==ut.call(e)};// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157
l.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances be augmented?
try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function e(){return 42}},42===e.foo()}catch(t){return!1}}();var ht=l.TYPED_ARRAY_SUPPORT?2147483647:1073741823;l.TYPED_ARRAY_SUPPORT&&(l.prototype.__proto__=Uint8Array.prototype,l.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1})),l.prototype.write=function(e,t,r){void 0===t?(r=this.length,t=0):void 0===r&&"string"==typeof t?(r=this.length,t=0):isFinite(t)&&(t|=0,isFinite(r)?r|=0:r=void 0);var a=this.length-t;if((void 0===r||r>a)&&(r=a),0<e.length&&(0>r||0>t)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");return P(this,e,t,r)},l.prototype.slice=function(e,t){var r=this.length;e=~~e,t=t===void 0?r:~~t,0>e?(e+=r,0>e&&(e=0)):e>r&&(e=r),0>t?(t+=r,0>t&&(t=0)):t>r&&(t=r),t<e&&(t=e);var a;if(l.TYPED_ARRAY_SUPPORT)// Return an augmented `Uint8Array` instance
a=this.subarray(e,t),a.__proto__=l.prototype;else{var o=t-e;a=new l(o,void 0);for(var n=0;n<o;++n)a[n]=this[n+e]}return a},l.prototype.copy=function(e,t,r,a){// Copy 0 bytes; we're done
if(r||(r=0),a||0===a||(a=this.length),t>=e.length&&(t=e.length),t||(t=0),0<a&&a<r&&(a=r),a===r)return 0;if(0===e.length||0===this.length)return 0;// Fatal error conditions
if(0>t)throw new RangeError("targetStart out of bounds");if(0>r||r>=this.length)throw new RangeError("sourceStart out of bounds");if(0>a)throw new RangeError("sourceEnd out of bounds");// Are we oob?
a>this.length&&(a=this.length),e.length-t<a-r&&(a=e.length-t+r);var o,n=a-r;if(this===e&&r<t&&t<a)// descending copy from end
for(o=n-1;0<=o;--o)e[o+t]=this[o+r];else if(1e3>n||!l.TYPED_ARRAY_SUPPORT)// ascending copy from start
for(o=0;o<n;++o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+n),t);return n},l.prototype.fill=function(e,t,r){// Handle string cases:
if("string"!=typeof e)"number"==typeof e&&(e&=255);else if("string"==typeof t?(t=0,r=this.length):"string"==typeof r&&(r=this.length),1===e.length){var a=e.charCodeAt(0);256>a&&(e=a)}// Invalid ranges are not set to a default, so can range check early.
if(0>t||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t>>>=0,r=r===void 0?this.length:r>>>0,e||(e=0);var o;if("number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var n=l.isBuffer(e)?e:new l(e),s=n.length;for(o=0;o<r-t;++o)this[o+t]=n[o%s]}return this},l.concat=function(e,t){if(!ct(e))throw new TypeError("\"list\" argument must be an Array of Buffers");if(0===e.length)return u(null,0);var r;if(t===void 0)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var a=c(null,t),o=0;for(r=0;r<e.length;++r){var n=e[r];if(!l.isBuffer(n))throw new TypeError("\"list\" argument must be an Array of Buffers");n.copy(a,o),o+=n.length}return a},l.byteLength=_,l.prototype._isBuffer=!0,l.isBuffer=function(e){return!!(null!=e&&e._isBuffer)};var yt,bt=l,ft=[0,// Not used
26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],vt=function(){return"undefined"!=typeof yt},_t=function(e){return yt(e)},xt={getSymbolSize:function(e){if(!e)throw new Error("\"version\" cannot be null or undefined");if(1>e||40<e)throw new Error("\"version\" should be in range from 1 to 40");return 4*e+17},getSymbolTotalCodewords:function(e){return ft[e]},getBCHDigit:function r(e){for(var t=0;0!==e;)t++,e>>>=1;return t},setToSJISFunction:function(e){if("function"!=typeof e)throw new Error("\"toSJISFunc\" is not a valid function.");yt=e},isKanjiModeEnabled:vt,toSJIS:_t},Pt=e(function(e,t){function r(e){if("string"!=typeof e)throw new Error("Param is not a string");var r=e.toLowerCase();switch(r){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e);}}t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&"undefined"!=typeof e.bit&&0<=e.bit&&4>e.bit},t.from=function(e,a){if(t.isValid(e))return e;try{return r(e)}catch(t){return a}}}),St=Pt.L,Ct=Pt.M,wt=Pt.Q,kt=Pt.H,At=Pt.isValid;C.prototype={get:function r(e){var t=K(e/8);return 1==(1&this.buffer[t]>>>7-e%8)},put:function a(e,t){for(var r=0;r<t;r++)this.putBit(1==(1&e>>>t-r-1))},getLengthInBits:function e(){return this.length},putBit:function r(e){var t=K(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Et=C;w.prototype.set=function(e,t,r,a){var o=e*this.size+t;this.data[o]=r,a&&(this.reservedBit[o]=!0)},w.prototype.get=function(e,t){return this.data[e*this.size+t]},w.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},w.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Nt=w,Tt=e(function(e,t){/**
	 * Alignment pattern are fixed reference pattern in defined positions
	 * in a matrix symbology, which enables the decode software to re-synchronise
	 * the coordinate mapping of the image modules in the event of moderate amounts
	 * of distortion of the image.
	 *
	 * Alignment patterns are present only in QR Code symbols of version 2 or larger
	 * and their number depends on the symbol version.
	 */var r=xt.getSymbolSize;/**
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
for(var t=K(e/7)+2,a=r(e),o=145===a?26:2*J((a-13)/(2*t-2)),n=[a-7],s=1;s<t-1;s++)n[s]=n[s-1]-o;// First coord is always 6
return n.push(6),n.reverse()},t.getPositions=function(e){for(var r=[],a=t.getRowColCoords(e),o=a.length,n=0;n<o;n++)for(var s=0;s<o;s++)// Skip if position is occupied by finder patterns
(0!=n||0!=s)&&(// top-left
0!=n||s!=o-1)&&(// bottom-left
n!=o-1||0!=s)&&r.push([a[n],a[s]]);return r}}),Rt=Tt.getRowColCoords,It=Tt.getPositions,Lt=xt.getSymbolSize,Bt=7,Ut={getPositions:function(e){var t=Lt(e);return[// top-left
[0,0],// top-right
[t-Bt,0],// bottom-left
[0,t-Bt]]}},Mt=e(function(e,t){/**
	 * Return mask value at given position
	 *
	 * @param  {Number} maskPattern Pattern reference value
	 * @param  {Number} i           Row
	 * @param  {Number} j           Column
	 * @return {Boolean}            Mask value
	 */function r(e,r,a){switch(e){case t.Patterns.PATTERN000:return 0==(r+a)%2;case t.Patterns.PATTERN001:return 0==r%2;case t.Patterns.PATTERN010:return 0==a%3;case t.Patterns.PATTERN011:return 0==(r+a)%3;case t.Patterns.PATTERN100:return 0==(K(r/2)+K(a/3))%2;case t.Patterns.PATTERN101:return 0==r*a%2+r*a%3;case t.Patterns.PATTERN110:return 0==(r*a%2+r*a%3)%2;case t.Patterns.PATTERN111:return 0==(r*a%3+(r+a)%2)%2;default:throw new Error("bad maskPattern:"+e);}}/**
	 * Apply a mask pattern to a BitMatrix
	 *
	 * @param  {Number}    pattern Pattern reference number
	 * @param  {BitMatrix} data    BitMatrix data
	 */t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};/**
	 * Weighted penalty scores for the undesirable features
	 * @type {Object}
	 */var a={N1:3,N2:3,N3:40,N4:10};/**
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
	 */t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&0<=e&&7>=e},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){for(var t=e.size,r=0,o=0,n=0,i=null,s=null,m=0;m<t;m++){o=n=0,i=s=null;for(var d,l=0;l<t;l++)d=e.get(m,l),d===i?o++:(5<=o&&(r+=a.N1+(o-5)),i=d,o=1),d=e.get(l,m),d===s?n++:(5<=n&&(r+=a.N1+(n-5)),s=d,n=1);5<=o&&(r+=a.N1+(o-5)),5<=n&&(r+=a.N1+(n-5))}return r},t.getPenaltyN2=function(e){for(var t=e.size,r=0,o=0;o<t-1;o++)for(var n,i=0;i<t-1;i++)n=e.get(o,i)+e.get(o,i+1)+e.get(o+1,i)+e.get(o+1,i+1),(4===n||0===n)&&r++;return r*a.N2},t.getPenaltyN3=function(e){for(var t=e.size,r=0,o=0,n=0,i=0;i<t;i++){o=n=0;for(var s=0;s<t;s++)o=2047&o<<1|e.get(i,s),10<=s&&(1488===o||93===o)&&r++,n=2047&n<<1|e.get(s,i),10<=s&&(1488===n||93===n)&&r++}return r*a.N3},t.getPenaltyN4=function(e){for(var t=0,r=e.data.length,o=0;o<r;o++)t+=e.data[o];var n=Math.abs(J(100*t/r/5)-10);return n*a.N4},t.applyMask=function(e,t){for(var a=t.size,o=0;o<a;o++)for(var n=0;n<a;n++)t.isReserved(n,o)||t.xor(n,o,r(e,n,o))},t.getBestMask=function(e,r){for(var a=Object.keys(t.Patterns).length,o=0,n=1/0,i=0;i<a;i++){r(i),t.applyMask(i,e);// Calculate penalty
var s=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);// Undo previously applied mask
t.applyMask(i,e),s<n&&(n=s,o=i)}return o}}),Ot=Mt.Patterns,Vt=Mt.isValid,zt=Mt.getPenaltyN1,Dt=Mt.getPenaltyN2,Ft=Mt.getPenaltyN3,Yt=Mt.getPenaltyN4,Ht=Mt.applyMask,qt=Mt.getBestMask,jt=[// L  M  Q  H
1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Jt=[// L  M  Q  H
7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],Kt={getBlocksCount:function(e,t){return t===Pt.L?jt[4*(e-1)+0]:t===Pt.M?jt[4*(e-1)+1]:t===Pt.Q?jt[4*(e-1)+2]:t===Pt.H?jt[4*(e-1)+3]:void 0},getTotalCodewordsCount:function(e,t){return t===Pt.L?Jt[4*(e-1)+0]:t===Pt.M?Jt[4*(e-1)+1]:t===Pt.Q?Jt[4*(e-1)+2]:t===Pt.H?Jt[4*(e-1)+3]:void 0}};if(bt.alloc)var Qt=bt.alloc(512),Wt=bt.alloc(256);else var Qt=new bt(512),Wt=new bt(256);(function(){for(var e=1,t=0;255>t;t++)Qt[t]=e,Wt[e]=t,e<<=1,256&e&&(e^=285);// Optimization: double the size of the anti-log table so that we don't need to mod 255 to
// stay inside the bounds (because we will mainly use this table for the multiplication of
// two GF numbers, no more).
// @see {@link mul}
for(t=255;512>t;t++)Qt[t]=Qt[t-255]})();/**
	 * Returns log value of n inside Galois Field
	 *
	 * @param  {Number} n
	 * @return {Number}
	 */var Gt=function(e){if(1>e)throw new Error("log("+e+")");return Wt[e]},Zt=function(e){return Qt[e]},$t=function(e,t){return 0===e||0===t?0:Qt[Wt[e]+Wt[t]];// should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
// @see {@link initTables}
},Xt={log:Gt,exp:Zt,mul:$t},er=e(function(e,t){/**
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
	 */t.mul=function(e,t){var r=new bt(e.length+t.length-1);r.fill(0);for(var a=0;a<e.length;a++)for(var o=0;o<t.length;o++)r[a+o]^=Xt.mul(e[a],t[o]);return r},t.mod=function(e,t){for(var r=new bt(e);0<=r.length-t.length;){for(var a=r[0],o=0;o<t.length;o++)r[o]^=Xt.mul(t[o],a);// remove all zeros from buffer head
for(var n=0;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){for(var r=new bt([1]),a=0;a<e;a++)r=t.mul(r,[1,Xt.exp(a)]);return r}}),tr=er.mul,rr=er.mod,ar=er.generateECPolynomial;/**
	 * Returns anti-log value of n inside Galois Field
	 *
	 * @param  {Number} n
	 * @return {Number}
	 */k.prototype.initialize=function(e){// create an irreducible generator polynomial
this.degree=e,this.genPoly=er.generateECPolynomial(this.degree)},k.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");// Calculate EC for this data block
// extends data size to data+genPoly size
var t=new bt(this.degree);t.fill(0);var r=bt.concat([e,t],e.length+this.degree),a=er.mod(r,this.genPoly),o=this.degree-a.length;// The error correction codewords are the remainder after dividing the data codewords
// by a generator polynomial
if(0<o){var n=new bt(this.degree);return n.fill(0),a.copy(n,o),n}return a};var or=k,nr={isValid:function(e){return!isNaN(e)&&1<=e&&40>=e}},ir="[0-9]+",sr="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";/**
	 * Check if QR Code version is valid
	 *
	 * @param  {Number}  version QR Code version
	 * @return {Boolean}         true if valid version, false otherwise
	 */sr=sr.replace(/u/g,"\\u");var mr="(?:(?![A-Z0-9 $%*+\\-./:]|"+sr+")(?:.|[\r\n]))+",dr=new RegExp(sr,"g"),lr=/[^A-Z0-9 $%*+\-.\/:]+/g,pr=new RegExp(mr,"g"),gr=new RegExp(ir,"g"),ur=new RegExp("[A-Z $%*+\\-./:]+","g"),cr=new RegExp("^"+sr+"$"),hr=new RegExp("^"+ir+"$"),yr=/^[A-Z0-9 $%*+\-.\/:]+$/,br={KANJI:dr,BYTE_KANJI:lr,BYTE:pr,NUMERIC:gr,ALPHANUMERIC:ur,testKanji:function(e){return cr.test(e)},testNumeric:function(e){return hr.test(e)},testAlphanumeric:function(e){return yr.test(e)}},fr=e(function(e,t){/**
	 * Get mode object from its name
	 *
	 * @param   {String} string Mode name
	 * @returns {Mode}          Mode object
	 */function r(e){if("string"!=typeof e)throw new Error("Param is not a string");var r=e.toLowerCase();switch(r){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e);}}/**
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
	 */t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!nr.isValid(t))throw new Error("Invalid version: "+t);return 1<=t&&10>t?e.ccBits[0]:27>t?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return br.testNumeric(e)?t.NUMERIC:br.testAlphanumeric(e)?t.ALPHANUMERIC:br.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,a){if(t.isValid(e))return e;try{return r(e)}catch(t){return a}}}),vr=fr.NUMERIC,_r=fr.ALPHANUMERIC,xr=fr.BYTE,Pr=fr.KANJI,Sr=fr.MIXED,Cr=fr.getCharCountIndicator,wr=fr.getBestModeForData,kr=fr.isValid,Ar=e(function(e,t){function r(e,r,a){for(var o=1;40>=o;o++)if(r<=t.getCapacity(o,a,e))return o}function a(e,t){// Character count indicator + mode indicator bits
return fr.getCharCountIndicator(e,t)+4}function o(e,t){var r=0;return e.forEach(function(e){var o=a(e.mode,t);r+=o+e.getBitsLength()}),r}function n(e,r){for(var a,n=1;40>=n;n++)if(a=o(e,n),a<=t.getCapacity(n,r,fr.MIXED))return n}/**
	 * Returns version number from a value.
	 * If value is not a valid version, returns defaultValue
	 *
	 * @param  {Number|String} value        QR Code version
	 * @param  {Number}        defaultValue Fallback value
	 * @return {Number}                     QR Code version number
	 */ // Generator polynomial used to encode version information
var i=xt.getBCHDigit(7973);/**
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
	 */t.from=function(e,t){return nr.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!nr.isValid(e))throw new Error("Invalid QR Code version");// Use Byte mode as default
"undefined"==typeof r&&(r=fr.BYTE);// Total codewords for this QR code version (Data + Error correction)
var o=xt.getSymbolTotalCodewords(e),n=Kt.getTotalCodewordsCount(e,t),i=8*(o-n);// Total number of error correction codewords
if(r===fr.MIXED)return i;var s=i-a(r,e);// Return max number of storable codewords
switch(r){case fr.NUMERIC:return K(3*(s/10));case fr.ALPHANUMERIC:return K(2*(s/11));case fr.KANJI:return K(s/13);case fr.BYTE:default:return K(s/8);}},t.getBestVersionForData=function(e,t){var a,o=Pt.from(t,Pt.M);if(ct(e)){if(1<e.length)return n(e,o);if(0===e.length)return 1;a=e[0]}else a=e;return r(a.mode,a.getLength(),o)},t.getEncodedBits=function(e){if(!nr.isValid(e)||7>e)throw new Error("Invalid QR Code version");for(var t=e<<12;0<=xt.getBCHDigit(t)-i;)t^=7973<<xt.getBCHDigit(t)-i;return e<<12|t}}),Er=Ar.getCapacity,Nr=Ar.getBestVersionForData,Tr=Ar.getEncodedBits,Rr=1335,Ir=xt.getBCHDigit(Rr),Lr={getEncodedBits:function(e,t){for(var r=e.bit<<3|t,a=r<<10;0<=xt.getBCHDigit(a)-Ir;)a^=Rr<<xt.getBCHDigit(a)-Ir;// xor final data with mask pattern in order to ensure that
// no combination of Error Correction Level and data mask pattern
// will result in an all-zero data string
return(r<<10|a)^21522}};A.getBitsLength=function(e){return 10*K(e/3)+(e%3?3*(e%3)+1:0)},A.prototype.getLength=function(){return this.data.length},A.prototype.getBitsLength=function(){return A.getBitsLength(this.data.length)},A.prototype.write=function(e){var t,r,a;// The input data string is divided into groups of three digits,
// and each group is converted to its 10-bit binary equivalent.
for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),a=parseInt(r,10),e.put(a,10);// If the number of input digits is not an exact multiple of three,
// the final one or two digits are converted to 4 or 7 bits respectively.
var o=this.data.length-t;0<o&&(r=this.data.substr(t),a=parseInt(r,10),e.put(a,3*o+1))};var Br=A,Ur=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];/**
	 * Array of characters available in alphanumeric mode
	 *
	 * As per QR Code specification, to each character
	 * is assigned a value from 0 to 44 which in this case coincides
	 * with the array index
	 *
	 * @type {Array}
	 */E.getBitsLength=function(e){return 11*K(e/2)+6*(e%2)},E.prototype.getLength=function(){return this.data.length},E.prototype.getBitsLength=function(){return E.getBitsLength(this.data.length)},E.prototype.write=function(e){var t;// Input data characters are divided into groups of two characters
// and encoded as 11-bit binary codes.
for(t=0;t+2<=this.data.length;t+=2){// The character value of the first character is multiplied by 45
var r=45*Ur.indexOf(this.data[t]);// The character value of the second digit is added to the product
// The sum is then stored as 11-bit binary number
r+=Ur.indexOf(this.data[t+1]),e.put(r,11)}// If the number of input data characters is not a multiple of two,
// the character value of the final character is encoded as a 6-bit binary number.
this.data.length%2&&e.put(Ur.indexOf(this.data[t]),6)};var Mr=E;N.getBitsLength=function(e){return 8*e},N.prototype.getLength=function(){return this.data.length},N.prototype.getBitsLength=function(){return N.getBitsLength(this.data.length)},N.prototype.write=function(e){for(var t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)};var Or=N;T.getBitsLength=function(e){return 13*e},T.prototype.getLength=function(){return this.data.length},T.prototype.getBitsLength=function(){return T.getBitsLength(this.data.length)},T.prototype.write=function(e){var t;// In the Shift JIS system, Kanji characters are represented by a two byte combination.
// These byte values are shifted from the JIS X 0208 values.
// JIS X 0208 gives details of the shift coded representation.
for(t=0;t<this.data.length;t++){var r=xt.toSJIS(this.data[t]);// For characters with Shift JIS values from 0x8140 to 0x9FFC:
if(33088<=r&&40956>=r)// Subtract 0x8140 from Shift JIS value
r-=33088;else if(57408<=r&&60351>=r)// Subtract 0xC140 from Shift JIS value
r-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");// Multiply most significant byte of result by 0xC0
// and add least significant byte to product
// Convert result to a 13-bit binary string
r=192*(255&r>>>8)+(255&r),e.put(r,13)}};var Vr=T,zr=e(function(e){/******************************************************************************
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
	 *****************************************************************************/var r={single_source_shortest_paths:function f(e,t,a){// Predecessor map for each node that has been encountered.
// node ID => predecessor node ID
var o={},n={};// Costs of shortest paths from s to all nodes encountered.
// node ID => cost
n[t]=0;// Costs of shortest paths from s to all nodes encountered; differs from
// `costs` in that it provides easy access to the node that currently has
// the known shortest path from s.
// XXX: Do we actually need both `costs` and `open`?
var i=r.PriorityQueue.make();i.push(t,0);for(var s,m,d,l,p,g,c,h,y;!i.empty();)// ...and explore the edges that connect u to those nodes, updating
// the cost of the shortest paths to any or all of those nodes as
// necessary. v is the node across the current edge from u.
for(d in s=i.pop(),m=s.value,l=s.cost,p=e[m]||{},p)p.hasOwnProperty(d)&&(// Get the cost of the edge running from u to v.
// Cost of s to u plus the cost of u to v across e--this is *a*
// cost from s to v that may or may not be less than the current
// known cost to v.
// If we haven't visited v yet OR if the current known cost from s to
// v is greater than the new cost we just found (cost of s to u plus
// cost of u to v across e), update v's cost in the cost list and
// update v's predecessor in the predecessor list (it's now u).
g=p[d],c=l+g,h=n[d],y="undefined"==typeof n[d],(y||h>c)&&(n[d]=c,i.push(d,c),o[d]=m));if("undefined"!=typeof a&&"undefined"==typeof n[a]){var b=["Could not find a path from ",t," to ",a,"."].join("");throw new Error(b)}return o},extract_shortest_path_from_predecessor_list:function n(e,t){for(var r,a=[],o=t;o;)a.push(o),r=e[o],o=e[o];return a.reverse(),a},find_path:function n(e,t,a){var o=r.single_source_shortest_paths(e,t,a);return r.extract_shortest_path_from_predecessor_list(o,a)},/**
	   * A very naive priority queue implementation.
	   */PriorityQueue:{make:function t(e){var a,o=r.PriorityQueue,n={};for(a in e=e||{},o)o.hasOwnProperty(a)&&(n[a]=o[a]);return n.queue=[],n.sorter=e.sorter||o.default_sorter,n},default_sorter:function r(e,t){return e.cost-t.cost},/**
	     * Add a new item to the queue and ensure the highest priority element
	     * is at the front of the queue.
	     */push:function r(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},/**
	     * Return the highest priority element in the queue.
	     */pop:function e(){return this.queue.shift()},empty:function e(){return 0===this.queue.length}}};// node.js module exports
e.exports=r}),Dr=e(function(e,t){/**
	 * Returns UTF8 byte length
	 *
	 * @param  {String} str Input string
	 * @return {Number}     Number of byte
	 */function r(e){return unescape(encodeURIComponent(e)).length}/**
	 * Get a list of segments of the specified mode
	 * from a string
	 *
	 * @param  {Mode}   mode Segment mode
	 * @param  {String} str  String to process
	 * @return {Array}       Array of object with segments data
	 */function a(e,t,r){for(var a,o=[];null!==(a=e.exec(r));)o.push({data:a[0],index:a.index,mode:t,length:a[0].length});return o}/**
	 * Extracts a series of segments with the appropriate
	 * modes from a string
	 *
	 * @param  {String} dataStr Input string
	 * @return {Array}          Array of object with segments data
	 */function o(e){var t,r,o=a(br.NUMERIC,fr.NUMERIC,e),n=a(br.ALPHANUMERIC,fr.ALPHANUMERIC,e);xt.isKanjiModeEnabled()?(t=a(br.BYTE,fr.BYTE,e),r=a(br.KANJI,fr.KANJI,e)):(t=a(br.BYTE_KANJI,fr.BYTE,e),r=[]);var i=o.concat(n,t,r);return i.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}/**
	 * Returns how many bits are needed to encode a string of
	 * specified length with the specified mode
	 *
	 * @param  {Number} length String length
	 * @param  {Mode} mode     Segment mode
	 * @return {Number}        Bit length
	 */function i(e,t){return t===fr.NUMERIC?Br.getBitsLength(e):t===fr.ALPHANUMERIC?Mr.getBitsLength(e):t===fr.KANJI?Vr.getBitsLength(e):t===fr.BYTE?Or.getBitsLength(e):void 0}/**
	 * Merges adjacent segments which have the same mode
	 *
	 * @param  {Array} segs Array of object with segments data
	 * @return {Array}      Array of object with segments data
	 */function s(e){return e.reduce(function(e,t){var r=0<=e.length-1?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[])}/**
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
	 */function m(e){for(var t,a=[],o=0;o<e.length;o++)switch(t=e[o],t.mode){case fr.NUMERIC:a.push([t,{data:t.data,mode:fr.ALPHANUMERIC,length:t.length},{data:t.data,mode:fr.BYTE,length:t.length}]);break;case fr.ALPHANUMERIC:a.push([t,{data:t.data,mode:fr.BYTE,length:t.length}]);break;case fr.KANJI:a.push([t,{data:t.data,mode:fr.BYTE,length:r(t.data)}]);break;case fr.BYTE:a.push([{data:t.data,mode:fr.BYTE,length:r(t.data)}]);}return a}/**
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
	 */function d(e,t){for(var r={},a={start:{}},o=["start"],s=0;s<e.length;s++){for(var m=e[s],d=[],l=0;l<m.length;l++){var p=m[l],g=""+s+l;d.push(g),r[g]={node:p,lastCount:0},a[g]={};for(var u,c=0;c<o.length;c++)u=o[c],r[u]&&r[u].node.mode===p.mode?(a[u][g]=i(r[u].lastCount+p.length,p.mode)-i(r[u].lastCount,p.mode),r[u].lastCount+=p.length):(r[u]&&(r[u].lastCount=p.length),a[u][g]=i(p.length,p.mode)+4+fr.getCharCountIndicator(p.mode,t))}o=d}for(c=0;c<o.length;c++)a[o[c]].end=0;return{map:a,table:r}}/**
	 * Builds a segment from a specified data and mode.
	 * If a mode is not specified, the more suitable will be used.
	 *
	 * @param  {String} data             Input data
	 * @param  {Mode | String} modesHint Data mode
	 * @return {Segment}                 Segment
	 */function l(e,t){var r,a=fr.getBestModeForData(e);// Make sure data can be encoded
if(r=fr.from(t,a),r!==fr.BYTE&&r.bit<a.bit)throw new Error("\""+e+"\" cannot be encoded with mode "+fr.toString(r)+".\n Suggested mode is: "+fr.toString(a));// Use Mode.BYTE if Kanji support is disabled
return r!==fr.KANJI||xt.isKanjiModeEnabled()||(r=fr.BYTE),r===fr.NUMERIC?new Br(e):r===fr.ALPHANUMERIC?new Mr(e):r===fr.KANJI?new Vr(e):r===fr.BYTE?new Or(e):void 0}/**
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
	 */t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(l(t,null)):t.data&&e.push(l(t.data,t.mode)),e},[])},t.fromString=function(e,r){for(var a=o(e,xt.isKanjiModeEnabled()),n=m(a),l=d(n,r),p=zr.find_path(l.map,"start","end"),g=[],u=1;u<p.length-1;u++)g.push(l.table[p[u]].node);return t.fromArray(s(g))},t.rawSplit=function(e){return t.fromArray(o(e,xt.isKanjiModeEnabled()))}}),Fr=Dr.fromArray,Yr=Dr.fromString,Hr=Dr.rawSplit,qr={create:function(e,t){if("undefined"==typeof e||""===e)throw new Error("No input text");var r,a,o=Pt.M;return"undefined"!=typeof t&&(o=Pt.from(t.errorCorrectionLevel,Pt.M),r=Ar.from(t.version),a=Mt.from(t.maskPattern),t.toSJISFunc&&xt.setToSJISFunction(t.toSJISFunc)),z(e,r,o,a)}},jr=e(function(e,t){function r(e){if("string"!=typeof e)throw new Error("Color should be defined as hex string");var t=e.slice().replace("#","").split("");if(3>t.length||5===t.length||8<t.length)throw new Error("Invalid hex color: "+e);// Convert from short to long form (fff -> ffffff)
(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");var r=parseInt(t.join(""),16);return{r:255&r>>24,g:255&r>>16,b:255&r>>8,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});var t="undefined"==typeof e.margin||null===e.margin||0>e.margin?4:e.margin,a=e.width&&21<=e.width?e.width:void 0,o=e.scale||4;return{width:a,scale:a?4:o,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){var a=t.getScale(e,r);return K((e+2*r.margin)*a)},t.qrToImageData=function(e,r,a){for(var o=r.modules.size,n=r.modules.data,s=t.getScale(o,a),m=K((o+2*a.margin)*s),d=a.margin*s,l=[a.color.light,a.color.dark],p=0;p<m;p++)for(var g=0;g<m;g++){var u=4*(p*m+g),c=a.color.light;if(p>=d&&g>=d&&p<m-d&&g<m-d){var h=K((p-d)/s),y=K((g-d)/s);c=l[n[h*o+y]?1:0]}e[u++]=c.r,e[u++]=c.g,e[u++]=c.b,e[u]=c.a}}}),Jr=jr.getOptions,Kr=jr.getScale,Qr=jr.getImageWidth,Wr=jr.qrToImageData,Gr=e(function(e,t){function r(e,t,r){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=r,t.width=r,t.style.height=r+"px",t.style.width=r+"px"}function a(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}t.render=function(e,t,o){var n=o,i=t;"undefined"!=typeof n||t&&t.getContext||(n=t,t=void 0),t||(i=a()),n=jr.getOptions(n);var s=jr.getImageWidth(e.modules.size,n),m=i.getContext("2d"),d=m.createImageData(s,s);return jr.qrToImageData(d.data,e,n),r(m,i,s),m.putImageData(d,0,0),i},t.renderToDataURL=function(e,r,a){var o=a;"undefined"!=typeof o||r&&r.getContext||(o=r,r=void 0),o||(o={});var n=t.render(e,r,o),i=o.type||"image/png",s=o.rendererOpts||{};return n.toDataURL(i,s.quality)}}),Zr=Gr.render,$r=Gr.renderToDataURL,Xr={render:function(e,t,r){var a=jr.getOptions(t),o=e.modules.size,n=e.modules.data,i=o+2*a.margin,s=a.color.light.a?"<path "+D(a.color.light,"fill")+" d=\"M0 0h"+i+"v"+i+"H0z\"/>":"",m="<path "+D(a.color.dark,"stroke")+" d=\""+Y(n,o,a.margin)+"\"/>",d=a.width?"width=\""+a.width+"\" height=\""+a.width+"\" ":"",l="<svg xmlns=\"http://www.w3.org/2000/svg\" "+d+("viewBox=\"0 0 "+i+" "+i+"\"")+" shape-rendering=\"crispEdges\">"+s+m+"</svg>\n";return"function"==typeof r&&r(null,l),l}},ea=qr.create,ta=H.bind(null,Gr.render),ra=H.bind(null,Gr.renderToDataURL),aa=H.bind(null,function(e,t,r){return Xr.render(e,r)}),oa=function(e){return function(){var t=Array.prototype.slice.call(arguments);return new Promise(function(r,a){t.push(function(e,t){e?a(e):r(t)}),e.apply(null,t)})}}({create:ea,toCanvas:ta,toDataURL:ra,toString:aa}.toCanvas),na=function(e){var t=e.canvas,r=e.content,a=e.width,o=void 0===a?0:a,n=e.nodeQrCodeOptions,i=void 0===n?{}:n;// 容错率，默认对内容少的二维码采用高容错率，内容多的二维码采用低容错率
return i.errorCorrectionLevel=i.errorCorrectionLevel||sa(r),ia(r,i).then(function(e){return i.scale=0===o?void 0:4*(o/e),oa(t,r,i)})},ia=function(e,t){var r=document.createElement("canvas");return oa(r,e,t).then(function(){return r.width})},sa=function(e){return 36<e.length?"M":16<e.length?"Q":"H"},ma=function(e){var t=e.canvas,r=e.content,a=e.logo;if(a){var o=t.width,n=a.logoSize,i=void 0===n?.15:n,s=a.borderColor,m=a.bgColor,d=void 0===m?s||"#ffffff":m,l=a.borderSize,p=void 0===l?.05:l,g=a.crossOrigin,u=a.borderRadius,c=void 0===u?8:u,h=a.logoRadius,y=void 0===h?0:h,b="string"==typeof a?a:a.src,f=o*i,v=o*(1-i)/2,_=o*(i+p),x=o*(1-i-p)/2,P=t.getContext("2d");da(P)(x,x,_,_,c),P.fillStyle=d,P.fill();// logo
var S=new Image;(g||y)&&S.setAttribute("crossOrigin",g||"anonymous"),S.src=b;// 使用image绘制可以避免某些跨域情况
var C=function(e){P.drawImage(e,v,v,f,f)},w=function(e){var t=document.createElement("canvas");t.width=v+f,t.height=v+f,t.getContext("2d").drawImage(e,v,v,f,f),da(P)(v,v,f,f,y),P.fillStyle=P.createPattern(t,"no-repeat"),P.fill()};// 使用canvas绘制以获得更多的功能
// 将 logo绘制到 canvas上
return new Promise(function(e){S.onload=function(){y?w(S):C(S),e()}})}},da=function(e){return function(t,a,o,n,i){var s=Math.min,m=s(o,n);return i>m/2&&(i=m/2),e.beginPath(),e.moveTo(t+i,a),e.arcTo(t+o,a,t+o,a+n,i),e.arcTo(t+o,a+n,t,a+n,i),e.arcTo(t,a+n,t,a,i),e.arcTo(t,a,t+o,a,i),e.closePath(),e}},la=function(e){return na(e).then(function(){return e}).then(ma)},pa=function(e,t){var r=e.src,a=document.createElement("a");a.download=t,a.href=r,document.body.appendChild(a),a.click(),document.body.removeChild(a)},ga={toCanvas:la,toImage:function(e){var t=document.createElement("canvas");return e.canvas=t,e.logo&&(j(e.logo)&&(e.logo={src:e.logo}),e.logo.crossOrigin="Anonymous"),la(e).then(function(){var r=e.image,a=void 0===r?new Image:r,o=e.downloadName,n=void 0===o?"qr-code":o,i=e.download;if(a.src=t.toDataURL(),!0===i||q(i)){i=!0===i?function(e){return e()}:i;var s=function(){pa(a,n)};i(s)}})}},ua=/** @class */function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.width=250,t.logo="",t.errCorrectionLevel="Q",t.colorDark="#000000ff",t.colorLight="#ffffff",t}return r(t,e),t.prototype.render=function(){return Ee(ca||(ca=o(["\n      <style>\n        :host {\n          display: inline-block !important;\n          min-width: 150px;\n          min-height: 150px;\n          width: ","px;\n          height: ","px;\n        }\n        #canvas {\n          min-width: 150px;\n          min-height: 150px;\n          pointer-events: none;\n        }\n      </style>\n      <canvas id=\"canvas\"></canvas>\n    "],["\n      <style>\n        :host {\n          display: inline-block !important;\n          min-width: 150px;\n          min-height: 150px;\n          width: ","px;\n          height: ","px;\n        }\n        #canvas {\n          min-width: 150px;\n          min-height: 150px;\n          pointer-events: none;\n        }\n      </style>\n      <canvas id=\"canvas\"></canvas>\n    "])),this.width,this.width)},t.prototype.firstUpdated=function(){this.generateQRCode()},t.prototype.updated=function(){this.generateQRCode()},t.prototype.generateQRCode=function(){var e=this.renderRoot.querySelector("canvas"),t={canvas:e,content:"https://oneweb.tech/",width:this.width,nodeQrCodeOptions:{errorCorrectionLevel:this.errCorrectionLevel,color:{dark:this.colorDark,light:this.colorLight}}};this.logo&&(t.logo={src:this.logo,borderSize:0}),this.content&&(t.content=this.content),ga.toCanvas(t)},a([m({type:String})],t.prototype,"content",void 0),a([m({type:String})],t.prototype,"width",void 0),a([m({type:String})],t.prototype,"logo",void 0),a([m({type:String})],t.prototype,"errCorrectionLevel",void 0),a([m({type:String})],t.prototype,"colorDark",void 0),a([m({type:String})],t.prototype,"colorLight",void 0),t}(nt);customElements.define("pg-qrcode",ua);var ca})();
//# sourceMappingURL=index.js.map
