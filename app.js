!function(e){function t(t){for(var o,a,l=t[0],u=t[1],c=t[2],s=0,p=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(d&&d(t);p.length;)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=u;i.push([1,1]),n()}([,function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);let i=null,a=0;const l={type:r.a.AUTO,width:800,height:600,physics:{default:"arcade",arcade:{gravity:{y:200}}},scene:{preload:function(){this.load.image("dingdong","assets/sky.png"),this.load.image("bird","assets/bird.png")},create:function(){this.add.image(0,0,"dingdong").setOrigin(0),i=this.physics.add.sprite(l.width/10,0,"bird").setOrigin(0),i.body.velocity.x=300},update:function(e,t){a+=t,i.body.position.x>=800-i.width&&(i.body.velocity.x=-300);i.body.position.x<=0&&(i.body.velocity.x=300);i.body.position.y>=600&&(i.body.velocity.y=-400);a>=1e3&&(console.log({gravity:i.body.gravity.y,velocity:i.body.velocity.y}),a=0)}}};new r.a.Game(l)}]);