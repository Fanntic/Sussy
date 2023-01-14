!function(){"use strict";function e(){var e={retryable:!0,withCredentials:!0,url:"".concat(y,"/auth-token-service/v1/login/create")};return c.httpService.post(e).then((function(e){return e})).catch((function(e){return console.debug(e)}))}function t(e){var t={retryable:!0,url:"".concat(y,"/auth-token-service/v1/login/status")};return c.httpService.post(t,e).then((function(e){return e})).catch((function(e){return console.debug(e)}))}function n(e){var t={retryable:!0,url:"".concat(y,"/auth-token-service/v1/login/cancel")};return c.httpService.post(t,e).then((function(e){return e})).catch((function(e){return console.debug(e)}))}function r(){e().then((function(e){"Created"===(null==(e=e.data)?void 0:e.status)&&(e=new CustomEvent("OpenCrossDeviceLoginDisplayCodeModal",{detail:{code:e.code,privateKey:e.privateKey,imagePath:e.imagePath}}),window.dispatchEvent(e))}))}function a(){var e={retryable:!0,withCredentials:!0,url:"".concat(y,"/product-experimentation-platform/v1/projects/1/layers/Website.Login.CrossDeviceLogin.DisplayCode/values")},t={parameters:b.join(",")};return c.httpService.get(e,t).then((function(e){return null!=e&&e.data?e.data:Promise.reject()}))}function i(){return c.httpService.get({retryable:!0,withCredentials:!0,url:"".concat(y,"/auth-token-service/v1/login/metadata")})}var o={n:function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},d:function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},c=CoreUtilities,l=React,s=o.n(l),u=ReactDOM,d=Roblox,v=o.n(d),m=PropTypes,f=o.n(m),p=ReactUtilities,h=CoreRobloxUtilities,g=ReactStyleGuide,y=d.EnvironmentUrls.apiGatewayUrl,b=["alt_title","alt_instruction","alt_device_specific_instruction"],E="https://en.help.roblox.com/hc/en-us/articles/360056582012";function w(e){var t=e.code,n=e.qrUrl,r=e.translate,a=e.altTitle,i=e.altInstruction,o=(e=e.altDeviceSpecificInstruction,i=i||r("Label.LoginInstructions"),e?s().createElement("div",{className:"cross-device-login-device-specific-instruction-text font-caption-header",dangerouslySetInnerHTML:{__html:"".concat(i,"<br>").concat(e)}}):s().createElement("div",{className:"cross-device-login-instruction-text font-caption-header",dangerouslySetInnerHTML:{__html:"".concat(i,"<br>").concat(r("Label.LoginLocation"))}}));return n?s().createElement("div",null,s().createElement("div",null,s().createElement("b",null,r("Label.QrHeader"))),s().createElement("img",{src:n,alt:"",className:"cross-device-login-display-qr-code-image"}),s().createElement("div",{className:"cross-device-login-instruction-text font-caption-header"},r("Label.QrInstructions"),s().createElement("br",null),s().createElement("a",{href:E,target:"_blank",rel:"noreferrer",className:"text-link cross-device-login-instruction-text"},s().createElement("u",null,r("Label.QrTroubleshooting")))),s().createElement("div",{className:"cross-device-login-qr-header-text"},s().createElement("b",null,r("Label.CodeHeader"))),s().createElement("div",{className:"font-title"},t),s().createElement("div",{className:"cross-device-login-instruction-text font-caption-header"},o)):s().createElement("div",null,s().createElement("div",{className:"cross-device-login-display-code-modal-image"}),s().createElement("div",{className:"font-title"},t),s().createElement("div",{className:"cross-device-login-device-prompt-text font-header-2"},a||r("Label.DevicePrompt")),s().createElement("div",{className:"cross-device-login-instruction-text font-caption-header"},o))}w.defaultProps={altTitle:"",altInstruction:"",altDeviceSpecificInstruction:""},w.propTypes={translate:f().func.isRequired,code:f().string.isRequired,qrUrl:f().string.isRequired,altTitle:f().string,altInstruction:f().string,altDeviceSpecificInstruction:f().string};var x=w;function S(e){var t=e.accountName,n=e.accountPictureUrl;e=e.translate;return s().createElement("div",null,s().createElement("div",null,n?s().createElement("img",{className:"cross-device-login-avatar-thumbnail",src:n,alt:"ph-avatar-headshot"}):s().createElement("div",{className:"cross-device-login-display-code-modal-image cross-device-login-ph-avatar-image"}),s().createElement("div",{className:"cross-device-login-device-prompt-text font-header-2"},e("Label.ConfirmOnDevice")),s().createElement("div",{className:"cross-device-login-instruction-text font-caption-header"},e("Label.WebLogginInAs")," ",s().createElement("span",null," ",t," "))))}S.propTypes={translate:f().func.isRequired,accountName:f().func.isRequired,accountPictureUrl:f().func.isRequired};var C=S;function L(e,t,n,r,a,i,o){try{var c=e[i](o),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e){var t,n=e.show,r=e.onHide,o=e.code,c=e.qrUrl,u=e.accountName,d=e.accountPictureUrl,v=e.translate,m=(t=N((0,l.useState)(""),2))[0],f=t[1],p=(e=(h=N((0,l.useState)(""),2))[0],h[1]),h=(t=N((0,l.useState)(""),2))[0],y=t[1];function b(){var e;return e=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:if(null!=(n=e.sent)&&null!==(t=n.data)&&void 0!==t&&t.ShouldEnableCrossDeviceLoginInitiatorExperiments&&/^en\b/.test(navigator.language))return e.next=6,a();e.next=10;break;case 6:n=e.sent,f(null==n?void 0:n.alt_title),p(null==n?void 0:n.alt_instruction),y(null==n?void 0:n.alt_device_specific_instruction);case 10:case"end":return e.stop()}}),e)})),(b=function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){L(i,r,a,o,c,"next",e)}function c(e){L(i,r,a,o,c,"throw",e)}o(void 0)}))}).apply(this,arguments)}return(0,l.useEffect)((function(){return function(){return b.apply(this,arguments)}()}),[]),s().createElement(g.Modal,{show:n,onHide:r,className:"cross-device-login-display-code-modal",size:"lg","aria-labelledby":"contained-modal-title-vcenter",scrollable:"true",centered:"true"},s().createElement(g.Modal.Header,{useBaseBootstrapComponent:!0},s().createElement("div",{className:"cross-device-login-display-code-modal-title-container"},s().createElement("button",{type:"button",className:"cross-device-login-display-code-modal-title-button",onClick:r},s().createElement("span",{className:"close icon-close"})),s().createElement(g.Modal.Title,{id:"contained-modal-title-vcenter"},v("Heading.LoginCode")))),s().createElement(g.Modal.Body,null,u?s().createElement(C,{accountName:u,accountPictureUrl:d,translate:v}):s().createElement(x,{code:o,qrUrl:c,translate:v,altTitle:m,altInstruction:e,altDeviceSpecificInstruction:h})))}R.propTypes={translate:f().func.isRequired,onHide:f().func.isRequired,show:f().bool.isRequired,code:f().string.isRequired,qrUrl:f().string.isRequired,accountName:f().string.isRequired,accountPictureUrl:f().string.isRequired};var D=R;function P(e){var t=e.code,a=e.qrUrl;e=e.translate;return s().createElement("div",{className:"cross-device-login-code-display"},s().createElement("div",{className:"alternative-login-divider-container"},s().createElement("div",{className:"rbx-divider alternative-login-divider"})),s().createElement("h2",null,e("Label.QrCodeLogin")),s().createElement("div",{className:"font-caption-header"},e("Label.QrInstructions"),s().createElement("div",{className:"font-caption-header cross-device-login-front-load-help-link"},s().createElement("a",{href:E,target:"_blank",rel:"noreferrer",className:"text-link cross-device-login-instruction-text"},s().createElement("u",null,e("Label.QrTroubleshooting"))))),s().createElement("img",{src:a,alt:"",className:"cross-device-login-display-qr-code-image"}),s().createElement("div",{className:"font-caption-header"},s().createElement("a",{href:"#",onClick:function(){n({code:t}),r()},className:"text-link"},e("Action.OpenAlphaNumericModal"))))}P.propTypes={code:f().string.isRequired,translate:f().func.isRequired,qrUrl:f().string.isRequired};var U=P,I={showModal:{name:"showModal",type:(m=h.eventStreamService.eventTypes).pageLoad,context:"crossDeviceKey"},showProfile:{name:"showProfile",type:m.pageLoad,context:"confirmPrompt"}};function k(e,t,n,r,a,i,o){try{var c=e[i](o),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){k(i,r,a,o,c,"next",e)}function c(e){k(i,r,a,o,c,"throw",e)}o(void 0)}))}}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=d.EnvironmentUrls.apiGatewayUrl;function O(r){function a(e){e&&p("".concat(_,"/auth-token-service").concat(e))}var i,o=r.isQrCodeFrontLoaded,c=r.translate,u=(f=A((0,l.useState)(!1),2))[0],d=f[1],v=(i=A((0,l.useState)(""),2))[0],m=i[1],f=(r=A((0,l.useState)(""),2))[0],p=r[1],g=(i=A((0,l.useState)(""),2))[0],y=i[1],b=(r=A((0,l.useState)(""),2))[0],E=r[1],w=(r=(i=A((0,l.useState)(""),2))[0],i[1]);function x(e){return m(""),p(""),y(""),E(""),w(""),d(!1),o&&e&&S(),e?n({code:e}):null}window.addEventListener("OpenCrossDeviceLoginDisplayCodeModal",(function(e){m(e.detail.code),y(e.detail.privateKey),a(e.detail.imagePath),h.eventStreamService.sendEventWithTarget(I.showModal.type,I.showModal.context,{}),d(!0)}),!1);var S=function(){var t=T(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=(n=t.sent).data,m(n.code),y(n.privateKey),a(n.imagePath),E(""),w("");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=null;return v&&g?e=setInterval(T(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={code:v,privateKey:g},n.prev=1,n.next=4,t(r);case 4:if(i=n.sent,"Cancelled"===(null==(a=i.data)?void 0:a.status))return n.next=9,S();n.next=9;break;case 9:if("UserLinked"===(null==a?void 0:a.status)&&(""===b&&h.eventStreamService.sendEventWithTarget(I.showProfile.type,I.showProfile.context,{}),E(a.accountName||"unknown"),w(a.accountPictureUrl),d(!0)),"Validated"===(null==a?void 0:a.status))return i=new CustomEvent("OnCrossDeviceCodeValidated",{detail:{ctype:"AuthToken",code:v,privateKey:g}}),window.dispatchEvent(i),x(),n.abrupt("return",clearInterval(e));n.next=16;break;case 16:n.next=22;break;case 18:return n.prev=18,n.t0=n.catch(1),n.next=22,S();case 22:return n.abrupt("return",!1);case 23:case"end":return n.stop()}}),n,null,[[1,18]])}))),5e3):o&&!(v||g)&&S(),function(){return clearInterval(e)}}),[b,v,g,o]),s().createElement("div",null,s().createElement(D,{show:u,code:v,qrUrl:!o&&f,accountName:b,accountPictureUrl:r,onHide:function(){return x(v)},translate:c}),o&&s().createElement(U,{code:v,qrUrl:f,translate:c}))}O.propTypes={isQrCodeFrontLoaded:f().bool.isRequired,translate:f().func.isRequired};var j=O;function Q(e){var t=e.isQrCodeFrontLoaded;e=e.translate;return s().createElement(j,{isQrCodeFrontLoaded:t,translate:e})}Q.propTypes={isQrCodeFrontLoaded:f().bool.isRequired,translate:f().func.isRequired};var H=(0,p.withTranslations)(Q,{common:[],feature:"Authentication.CrossDevice"});v().CrossDeviceLoginDisplayCodeService={openModal:r};var F=function(e){return"true"===e.getAttribute("data-frontload-qr-code").toString()};function K(){var e=document.getElementById("crossDeviceLoginDisplayCode-container");e&&!function(e){return null===e.getAttribute("data-frontload-qr-code")}(e)?(0,u.render)(s().createElement(H,{isQrCodeFrontLoaded:F(e)}),e):window.requestAnimationFrame(K)}(0,c.ready)((function(){K()}))}(),window.Roblox&&window.Roblox.BundleDetector&&window.Roblox.BundleDetector.bundleDetected("CrossDeviceLoginDisplayCode");