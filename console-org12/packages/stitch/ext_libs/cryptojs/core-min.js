/*
CryptoJS v4.0.0
[The MIT License (MIT)](http://opensource.org/licenses/MIT)
Copyright (c) 2009-2013 Jeff Mott
Copyright (c) 2013-2016 Evan Vosberg
*/
!function(t,n){"object"==typeof exports?module.exports=exports=n():"function"==typeof define&&define.amd?define([],n):t.CryptoJS=n()}(this,function(){var t=t||function(t,n){var e;if("undefined"!=typeof window&&window.crypto&&(e=window.crypto),!e&&"undefined"!=typeof window&&window.msCrypto&&(e=window.msCrypto),!e&&"undefined"!=typeof global&&global.crypto&&(e=global.crypto),!e&&"function"==typeof require)try{e=require("crypto")}catch(t){}var i=function(){if(e){if("function"==typeof e.getRandomValues)try{return e.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof e.randomBytes)try{return e.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},r=Object.create||function(){function t(){}return function(n){var e;return t.prototype=n,e=new t,t.prototype=null,e}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=r(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,e=t.words,i=this.sigBytes,r=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<r;o++){var s=e[o>>>2]>>>24-o%4*8&255;n[i+o>>>2]|=s<<24-(i+o)%4*8}else for(o=0;o<r;o+=4)n[i+o>>>2]=e[o>>>2];return this.sigBytes+=r,this},clamp:function(){var n=this.words,e=this.sigBytes;n[e>>>2]&=4294967295<<32-e%4*8,n.length=t.ceil(e/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],e=0;e<t;e+=4)n.push(i());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,e=t.sigBytes,i=[],r=0;r<e;r++){var o=n[r>>>2]>>>24-r%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var n=t.length,e=[],i=0;i<n;i+=2)e[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new c.init(e,n/2)}},p=u.Latin1={stringify:function(t){for(var n=t.words,e=t.sigBytes,i=[],r=0;r<e;r++){var o=n[r>>>2]>>>24-r%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var n=t.length,e=[],i=0;i<n;i++)e[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new c.init(e,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(p.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return p.parse(unescape(encodeURIComponent(t)))}},h=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var e,i=this._data,r=i.words,o=i.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var p=0;p<u;p+=s)this._doProcessBlock(r,p);e=r.splice(0,u),i.sigBytes-=f}return new c.init(e,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),l=(s.Hasher=h.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,e){return new t.init(e).finalize(n)}},_createHmacHelper:function(t){return function(n,e){return new l.HMAC.init(t,e).finalize(n)}}}),o.algo={});return o}(Math);return t});
