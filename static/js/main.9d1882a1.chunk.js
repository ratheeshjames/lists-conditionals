(this["webpackJsonplists-conditionals"]=this["webpackJsonplists-conditionals"]||[]).push([[0],{58:function(e,t,n){e.exports=n(68)},63:function(e,t,n){},64:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),l=n.n(i),o=(n(63),n(103)),c=n(45),s=n(104),u=n(111),d=n(40),h=n(41),m=n(23),f=n(47),p=n(46),v=(n(64),n(101)),g=n(105),y=n(106),b=n(107),E=Object(v.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function w(){var e=Object(o.a)("(prefers-color-scheme: dark)"),t=null,n=Object(c.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#dc004e"},type:e?"dark":"light"}}),a=Object(c.a)({palette:{primary:{main:"#424242"},secondary:{main:"#f48fb1"},type:e?"dark":"light"}});t=e?a:n;var i=E();return r.a.createElement("div",{className:i.root},r.a.createElement(s.a,{theme:t},r.a.createElement(g.a,{position:"static"},r.a.createElement(y.a,null,r.a.createElement(b.a,{variant:"h6",className:i.title},"Lists and Conditionals")))))}var C=n(112),k=Object(v.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function j(e){var t=k(),n=null,a=null;return e.value.length>5?(n="Nice!!",a="Text is long enough!"):(n="Error",a="Text is short!!"),r.a.createElement("form",{className:t.root,autoComplete:"off"},e.value.length>5?r.a.createElement(C.a,{id:"filled-basic",label:n,variant:"filled",type:"text",helperText:a,onChange:e.onChange,value:e.value}):r.a.createElement(C.a,{error:!0,id:"filled-basic",label:n,variant:"filled",type:"text",helperText:a,onChange:e.onChange,value:e.value}))}var x=n(110),O=n(113),I=function(e){return r.a.createElement("div",null,e.inputLength>5?r.a.createElement(b.a,{variant:"body2",color:"textSecondary"},"Text is long enough!"):r.a.createElement(b.a,{variant:"body2",color:"textSecondary"},"Text is short!!"))},S=n(108),T=n(109),H=n(114);var W=function(e){return" "===e.character||""===e.character?null:r.a.createElement(S.a,{style:{margin:"4px"},onClick:e.onClick},r.a.createElement(H.a,null,r.a.createElement(T.a,null,r.a.createElement(b.a,{variant:"h6"},e.character))))},N=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).inputChangeHandler=a.inputChangeHandler.bind(Object(m.a)(a)),a.deleteCharHandler=a.deleteCharHandler.bind(Object(m.a)(a)),a.state={userInput:""},a}return Object(h.a)(n,[{key:"inputChangeHandler",value:function(e){this.setState({userInput:e.target.value})}},{key:"deleteCharHandler",value:function(e){var t=this.state.userInput.split(""),n=t.join("");t.splice(e,1),n=t.join(""),setTimeout(function(){this.setState({userInput:n})}.bind(this),500)}},{key:"render",value:function(){var e=this,t=this.state.userInput.split("").map((function(t,n){return r.a.createElement(W,{character:t,key:n,onClick:function(){return e.deleteCharHandler(n)}})}));return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(x.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},m:1},r.a.createElement(O.a,{component:"span",m:1},r.a.createElement(j,{onChange:this.inputChangeHandler,value:this.state.userInput})),r.a.createElement(O.a,{m:1},r.a.createElement(b.a,{variant:"body1"},this.state.userInput)),r.a.createElement(O.a,{m:1},r.a.createElement(I,{inputLength:this.state.userInput.length})),r.a.createElement("div",null,""!==this.state.userInput?r.a.createElement(b.a,{variant:"body1"},"Select the Character to delete:"," "):null),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",margin:"8px"}},t)))}}]),n}(r.a.Component);var A=function(){var e=Object(o.a)("(prefers-color-scheme: dark)"),t=null,n=Object(c.a)({palette:{primary:{main:"#1976d2"},secondary:{main:"#dc004e"},type:e?"dark":"light"}}),a=Object(c.a)({palette:{primary:{main:"#90caf9"},secondary:{main:"#f48fb1"},type:e?"dark":"light"}});return t=e?a:n,r.a.createElement(s.a,{theme:t},r.a.createElement(u.a,null),r.a.createElement(N,null))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/lists-conditonals",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/lists-conditonals","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.9d1882a1.chunk.js.map