(this["webpackJsonpshare-my-cart"]=this["webpackJsonpshare-my-cart"]||[]).push([[31],{189:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return y}));var r=o(15),n=o(2),i=o.n(n),a=o(10),s=o(3),p=o(4),c=o(25),l=o(22),d=(o(31),o(14)),u=o(32),f=(o(45),o(40)),v=o(231),h=o(233),b=function(e,t){var o="top",r="left",n=e.querySelector(".popover-content"),i=n.getBoundingClientRect(),a=i.width,s=i.height,p=e.ownerDocument.defaultView.innerWidth,c=e.ownerDocument.defaultView.innerHeight,l=t&&t.target&&t.target.getBoundingClientRect(),u=null!=l&&"top"in l?l.top:c/2-s/2,f=null!=l&&"left"in l?l.left:p/2,v=l&&l.width||0,h=l&&l.height||0,b=e.querySelector(".popover-arrow"),x=b.getBoundingClientRect(),g=x.width,w=x.height;null==l&&(b.style.display="none");var y={top:u+h,left:f+v/2-g/2},k={top:u+h+(w-1),left:f+v/2-a/2},j=!1,O=!1;k.left<m+25?(j=!0,k.left=m):a+m+k.left+25>p&&(O=!0,k.left=p-a-m,r="right"),u+h+s>c&&u-s>0?(y.top=u-(w+1),k.top=u-s-(w-1),e.className=e.className+" popover-bottom",o="bottom"):u+h+s>c&&(n.style.bottom=m+"%"),b.style.top=y.top+"px",b.style.left=y.left+"px",n.style.top=k.top+"px",n.style.left=k.left+"px",j&&(n.style.left="calc(".concat(k.left,"px + var(--ion-safe-area-left, 0px))")),O&&(n.style.left="calc(".concat(k.left,"px - var(--ion-safe-area-right, 0px))")),n.style.transformOrigin=o+" "+r;var D=Object(d.a)(),E=Object(d.a)(),P=Object(d.a)();return E.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),P.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),D.addElement(e).easing("ease").duration(100).addAnimation([E,P])},m=5,x=function(e){var t=Object(d.a)(),o=Object(d.a)(),r=Object(d.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},g=function(e,t){var o=e.ownerDocument,r="rtl"===o.dir,n="top",i=r?"right":"left",a=e.querySelector(".popover-content"),s=a.getBoundingClientRect(),p=s.width,c=s.height,l=o.defaultView.innerWidth,u=o.defaultView.innerHeight,f=t&&t.target&&t.target.getBoundingClientRect(),v=null!=f&&"bottom"in f?f.bottom:u/2-c/2,h=null!=f&&"left"in f?r?f.left-p+f.width:f.left:l/2-p/2,b=f&&f.height||0,m={top:v,left:h};m.left<12?(m.left=12,i="left"):p+12+m.left>l&&(m.left=l-p-12,i="right"),v+b+c>u&&v-c>0?(m.top=v-c-b,e.className=e.className+" popover-bottom",n="bottom"):v+b+c>u&&(a.style.bottom="12px");var x=Object(d.a)(),g=Object(d.a)(),w=Object(d.a)(),y=Object(d.a)(),k=Object(d.a)();return g.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),y.addElement(a).beforeStyles({top:"".concat(m.top,"px"),left:"".concat(m.left,"px"),"transform-origin":"".concat(n," ").concat(i)}).fromTo("transform","scale(0.001)","scale(1)"),k.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),x.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,w,y,k])},w=function(e){var t=Object(d.a)(),o=Object(d.a)(),r=Object(d.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),r.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,r])},y=function(){function e(t){var o=this;Object(s.a)(this,e),Object(c.l)(this,t),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),o.dismiss()},this.onBackdropTap=function(){o.dismiss(void 0,f.a)},this.onLifecycle=function(e){var t=o.usersElement,r=k[e.type];if(t&&r){var n=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},Object(f.e)(this.el),this.didPresent=Object(c.f)(this,"ionPopoverDidPresent",7),this.willPresent=Object(c.f)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(c.f)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(c.f)(this,"ionPopoverDidDismiss",7)}return Object(p.a)(e,[{key:"present",value:function(){var e=Object(a.a)(i.a.mark((function e(){var t,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".popover-content")){e.next=5;break}throw new Error("container is undefined");case 5:return o=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),e.next=8,Object(h.a)(this.delegate,t,this.component,["popover-viewport",this.el["s-sc"]],o);case 8:return this.usersElement=e.sent,e.next=11,Object(u.d)(this.usersElement);case 11:return e.abrupt("return",Object(f.f)(this,"popoverEnter",b,g,this.event));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dismiss",value:function(){var e=Object(a.a)(i.a.mark((function e(t,o){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.g)(this,t,o,"popoverLeave",x,w,this.event);case 2:if(!(r=e.sent)){e.next=6;break}return e.next=6,Object(h.b)(this.delegate,this.usersElement);case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t,o){return e.apply(this,arguments)}}()},{key:"onDidDismiss",value:function(){return Object(f.h)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(f.h)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var e,t=Object(l.b)(this),o=this.onLifecycle;return Object(c.j)(c.b,{"aria-modal":"true","no-router":!0,style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(v.b)(this.cssClass)),(e={},Object(r.a)(e,t,!0),Object(r.a)(e,"popover-translucent",this.translucent),e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(c.j)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(c.j)("div",{class:"popover-wrapper"},Object(c.j)("div",{class:"popover-arrow"}),Object(c.j)("div",{class:"popover-content"})))}},{key:"el",get:function(){return Object(c.g)(this)}}]),e}(),k={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};y.style={ios:'.sc-ion-popover-ios-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios::after,[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after,[dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{top:-6px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios,.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:".sc-ion-popover-md-h{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color, #000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md,[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md,[dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:100ms;transition-delay:100ms}"}},231:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return s})),o.d(t,"d",(function(){return d}));var r=o(2),n=o.n(r),i=o(10),a=o(15),s=function(e,t){return null!==t.closest(e)},p=function(e){return"string"===typeof e&&e.length>0?Object(a.a)({"ion-color":!0},"ion-color-".concat(e),!0):void 0},c=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},l=/^[a-z][a-z0-9+\-.]*:/,d=function(){var e=Object(i.a)(n.a.mark((function e(t,o,r){var i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||l.test(t)){e.next=5;break}if(!(i=document.querySelector("ion-router"))){e.next=5;break}return null!=o&&o.preventDefault(),e.abrupt("return",i.push(t,r));case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t,o,r){return e.apply(this,arguments)}}()},233:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return s}));var r=o(2),n=o.n(r),i=o(10),a=function(){var e=Object(i.a)(n.a.mark((function e(t,o,r,i,a){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(o,r,a,i));case 2:if("string"===typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(s="string"===typeof r?o.ownerDocument&&o.ownerDocument.createElement(r):r,i&&i.forEach((function(e){return s.classList.add(e)})),a&&Object.assign(s,a),o.appendChild(s),!s.componentOnReady){e.next=11;break}return e.next=11,s.componentOnReady();case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,o,r,n,i){return e.apply(this,arguments)}}(),s=function(e,t){if(t){if(e){var o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=stencil-ion-popover-md-entry-js.081e5dc3.chunk.js.map