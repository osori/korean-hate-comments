(this.webpackJsonpakpl=this.webpackJsonpakpl||[]).push([[51],{169:function(t,n,e){"use strict";e.r(n),e.d(n,"KEYBOARD_DID_CLOSE",(function(){return r})),e.d(n,"KEYBOARD_DID_OPEN",(function(){return i})),e.d(n,"copyVisualViewport",(function(){return l})),e.d(n,"keyboardDidClose",(function(){return g})),e.d(n,"keyboardDidOpen",(function(){return p})),e.d(n,"keyboardDidResize",(function(){return b})),e.d(n,"resetKeyboardAssist",(function(){return a})),e.d(n,"setKeyboardClose",(function(){return h})),e.d(n,"setKeyboardOpen",(function(){return c})),e.d(n,"startKeyboardAssist",(function(){return s})),e.d(n,"trackViewportChanges",(function(){return y}));var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},d=!1,a=function(){o={},u={},d=!1},s=function(t){f(t),t.visualViewport&&(u=l(t.visualViewport),t.visualViewport.onresize=function(){y(t),p()||b(t)?c(t):g(t)&&h(t)})},f=function(t){t.addEventListener("keyboardDidShow",(function(n){return c(t,n)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},c=function(t,n){w(t,n),d=!0},h=function(t){v(t),d=!1},p=function(){var t=(o.height-u.height)*u.scale;return!d&&o.width===u.width&&t>150},b=function(t){return d&&!g(t)},g=function(t){return d&&u.height===t.innerHeight},w=function(t,n){var e=n?n.keyboardHeight:t.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:e}});t.dispatchEvent(r)},v=function(t){var n=new CustomEvent(r);t.dispatchEvent(n)},y=function(t){o=Object.assign({},u),u=l(t.visualViewport)},l=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);
//# sourceMappingURL=51.67444e59.chunk.js.map