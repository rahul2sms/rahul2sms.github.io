"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[230,120],{5835:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(1721),s=n(7294),r=n(1079);let c=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).state={supported:null,voices:[],selectedVoice:null,text:""},t.initData=async()=>{"speechSynthesis"in window?t.setState({supported:!0,voices:speechSynthesis.getVoices()}):t.setState({supported:!1})},t.onChangeVoiceOption=e=>{const n=e.currentTarget.value;t.setState({selectedVoice:t.state.voices[n]})},t.onSubmit=e=>{e.preventDefault();const n=new SpeechSynthesisUtterance;n.text=t.state.text,n.voice=t.state.selectedVoice,window.speechSynthesis.speak(n)},t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.initData(),window.speechSynthesis.onvoiceschanged=this.initData},n.render=function(){return s.createElement(r.Z,null,s.createElement("section",{className:"d-flex flex-column"},s.createElement("h1",{className:"h2 text-center my-4"},"I can read what you type"),!1===this.state.supported&&s.createElement("span",{className:"alert alert-danger"},"Your browser ",s.createElement("strong",null,"does not support")," Speech Synthesis."),s.createElement("form",{className:"align-self-center",onSubmit:this.onSubmit},s.createElement("div",{className:"mb-3"},s.createElement("label",{htmlFor:"lstVoice",className:"form-label"},"Select Voice"),s.createElement("select",{id:"lstVoice",className:"form-select",onChange:this.onChangeVoiceOption,required:!0},s.createElement("option",{value:""}),this.state.voices.map(((e,t)=>s.createElement("option",{key:`voiceOption-${e.name}`,value:`${t}`},e.name))))),s.createElement("div",{className:"mb-3"},s.createElement("label",{htmlFor:"txtMessage"},"Your message to read:"),s.createElement("textarea",{id:"txtMessage",className:"form-control",required:!0,onChange:e=>this.setState({text:e.currentTarget.value})})),s.createElement("button",{type:"submit",className:"btn btn-primary float-end"},"Speak"))))},t}(s.Component)},610:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=n(7294),s=n(5835);function r(){return a.createElement(s.default,null)}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-554950008c2fdd6e0c00.js.map