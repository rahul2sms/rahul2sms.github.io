"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[682],{814:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(1721),s=a(7294),l=a(1079),i=a(2888),r=a(784),o=a(3603);let c=function(e){function t(t){var a;return(a=e.call(this,t)||this).init=async()=>{a.setState({loading:!0});const e=document.getElementById("videoElement");try{await i.Cd_(),a.webcam=await i.aTG.webcam(e),a.model=await r.z(),a.setState({loading:!1})}catch(t){a.setState({alertMessage:t.message||t,loading:!1})}},a.onClickSnap=async e=>{a.setState({loading:!0});try{const e=await a.webcam.capture(),t=await a.model.classify(e);e.dispose(),a.setState({predictions:t,loading:!1})}catch(t){a.setState({alertMessage:t.message||t,loading:!1})}},a.state={loading:!1,alertMessage:null,predictions:null},a.webcam=null,a.model=null,a}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.init()},a.render=function(){return s.createElement(l.Z,{className:"d-flex flex-column align-items-center my-4"},s.createElement("h1",{className:"h2"},"Snap It"),this.state.alertMessage&&s.createElement("span",{className:"alert alert-danger w-100"},this.state.alertMessage),s.createElement("video",{id:"videoElement",className:"border my-4"}),this.state.loading&&s.createElement("progress",null),s.createElement("button",{className:"btn btn-primary",disabled:this.state.loading,hidden:this.state.loading,onClick:this.onClickSnap},"Snap"),s.createElement(o.Z,{predictions:this.state.predictions}))},t}(s.Component)}}]);
//# sourceMappingURL=component---src-pages-image-classifier-jsx-4b3a35bd612b8e3101e1.js.map