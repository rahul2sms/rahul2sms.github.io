"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[424],{1712:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var i=n(1721),a=n(7294),r=n(1079);const s=Object.freeze({"en-US":"English","hi-IN":"Hindi","bn-IN":"Bangla"});function o(e){return a.createElement("form",{className:"row justify-content-between py-2 border rounded",onSubmit:()=>!1},Object.entries(s).map((t=>{let[n,i]=t;return a.createElement("div",{key:n,className:"col"},a.createElement("input",{type:"radio",className:"btn-check",name:"options-outlined",id:n,autocomplete:"off",checked:n===e.value,onClick:()=>e.onChange(n)}),a.createElement("label",{className:"btn btn-sm btn-outline-success",for:n},i))})))}let l=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).state={loading:!1,listening:!1,locale:"en-US",transcript:null,error:null},t.init=async()=>{t.setState({loading:!0});try{await navigator.mediaDevices.getUserMedia({audio:!0});const e=window.SpeechRecognition||window.webkitSpeechRecognition;t.recognition=new e,t.recognition.interimResults=!0,t.recognition.maxAlternatives=1,t.recognition.lang="en-US",t.recognition.addEventListener("speechstart",t.onSpeechStart),t.recognition.addEventListener("speechend",t.onSpeechEnd),t.recognition.addEventListener("error",(e=>t.setState({error:e.error||e}))),t.recognition.addEventListener("result",t.onResult),t.setState({loading:!1})}catch(e){t.setState({error:e,loading:!1})}},t.onSpeechStart=()=>{t.setState({listening:!0,transcript:null,error:null})},t.onSpeechEnd=()=>{t.setState({listening:!1})},t.onResult=e=>{const n=e.results.length;if(n>0){var i;const a=null===(i=e.results[n-1])||void 0===i?void 0:i[0].transcript;t.setState({transcript:a})}},t.onClickMic=e=>{t.recognition.start(),t.setState({listening:!0})},t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.init()},n.render=function(){return a.createElement(r.Z,{className:"d-flex flex-column align-items-center"},a.createElement("h1",{className:"h2 my-4"},"I can write as to speek"),a.createElement(o,{value:this.state.locale,onChange:e=>{this.recognition.lang=e,this.setState({locale:e})}}),this.state.loading?a.createElement("progress",null):a.createElement("input",{type:"image",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiBjbGFzcz0iYmkgYmktbWljIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogICAgPHBhdGggZD0iTTMuNSA2LjVBLjUuNSAwIDAgMSA0IDd2MWE0IDQgMCAwIDAgOCAwVjdhLjUuNSAwIDAgMSAxIDB2MWE1IDUgMCAwIDEtNC41IDQuOTc1VjE1aDNhLjUuNSAwIDAgMSAwIDFoLTdhLjUuNSAwIDAgMSAwLTFoM3YtMi4wMjVBNSA1IDAgMCAxIDMgOFY3YS41LjUgMCAwIDEgLjUtLjUiLz4KICAgIDxwYXRoIGQ9Ik0xMCA4YTIgMiAwIDEgMS00IDBWM2EyIDIgMCAxIDEgNCAwek04IDBhMyAzIDAgMCAwLTMgM3Y1YTMgMyAwIDAgMCA2IDBWM2EzIDMgMCAwIDAtMy0zIi8+Cjwvc3ZnPg==",alt:"mic",className:"mt-3 btn btn-lg btn-"+(this.state.listening?"danger":"warning"),onClick:this.onClickMic,disabled:this.state.listening}),a.createElement("textarea",{className:"my-3 col-12 col-md-6",value:this.state.transcript}),this.state.listening&&a.createElement("progress",null),this.state.error&&a.createElement("span",{className:"text-danger"},this.state.error))},t}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-speech-to-text-jsx-7a15e7b4b8bc840a2c34.js.map