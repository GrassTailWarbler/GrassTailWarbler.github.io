window.__require=function e(t,s,i){function o(n,c){if(!s[n]){if(!t[n]){var d=n.split("/");if(d=d[d.length-1],!t[d]){var u="function"==typeof __require&&__require;if(!c&&u)return u(d,!0);if(r)return r(d,!0);throw new Error("Cannot find module '"+n+"'")}n=d}var h=s[n]={exports:{}};t[n][0].call(h.exports,function(e){return o(t[n][1][e]||e)},h,h.exports,e,t,s,i)}return s[n].exports}for(var r="function"==typeof __require&&__require,n=0;n<i.length;n++)o(i[n]);return o}({HelloWorld:[function(e,t,s){"use strict";cc._RF.push(t,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},text:"Hello, World!"},onLoad:function(){this.label.string=this.text},update:function(e){}}),cc._RF.pop()},{}],audioMng:[function(e,t,s){"use strict";cc._RF.push(t,"a0eb7RvDqpMTYdtZ330OQE8","audioMng"),cc.Class({extends:cc.Component,properties:{bgm:{default:null,type:cc.AudioClip}},playMusic:function(){cc.audioEngine.playMusic(this.bgm,!0)},pauseMusic:function(){cc.audioEngine.pauseMusic(),cc.log("ddd")},resumeMusic:function(){cc.audioEngine.resumeMusic()},start:function(){this.playMusic()}}),cc._RF.pop()},{}],movecenterbg:[function(e,t,s){"use strict";cc._RF.push(t,"3b315Cgq8tJNreudUDqqwIj","movecenterbg"),cc.Class({extends:cc.Component,properties:{bgNodeArray:{default:[],type:[cc.Node]},speedX:[cc.Integer],speedY:[cc.Integer]},onLoad:function(){this.pos0=this.bgNodeArray[0].position,this.pos1=this.bgNodeArray[1].position,this.pos2=this.bgNodeArray[2].position,this.node.on("mousemove",this.moveBackGroud,this),this.node.on("mouseenter",this.initBackGroud,this),this.node.on("mouseleave",this.initBackGroud,this)},initBackGroud:function(){this.bgNodeArray[0].position=this.pos0,this.bgNodeArray[1].position=this.pos1,this.bgNodeArray[2].position=this.pos2},moveBackGroud:function(e){if(this.speedX.length&&this.speedY.length){var t=e.getDelta().x,s=e.getDelta().y;t>0?(this.bgNodeArray[0].x-=.1*this.speedX[0],this.bgNodeArray[1].x-=.1*this.speedX[1],this.bgNodeArray[2].x-=.3*this.speedX[2]):t<0&&(this.bgNodeArray[0].x+=.1*this.speedX[0],this.bgNodeArray[1].x+=.1*this.speedX[1],this.bgNodeArray[2].x+=.3*this.speedX[2]),s>0?(this.bgNodeArray[0].y-=.1*this.speedY[0],this.bgNodeArray[1].y-=.1*this.speedY[1],this.bgNodeArray[2].y-=.1*this.speedY[2]):s<0&&(this.bgNodeArray[0].y+=.1*this.speedY[0],this.bgNodeArray[1].y<43?this.bgNodeArray[1].y+=.1*this.speedY[1]:this.bgNodeArray[1].y=this.bgNodeArray[1].y,this.bgNodeArray[2].y<-61?this.bgNodeArray[2].y+=.1*this.speedY[2]:this.bgNodeArray[2].y=this.bgNodeArray[2].y)}},onDestroy:function(){this.node.off("mousemove",this.moveBackGroud,this),this.node.off("mouseenter",this.initBackGroud,this)}}),cc._RF.pop()},{}],"use_v2.1-2.2.1_cc.Toggle_event":[function(e,t,s){"use strict";cc._RF.push(t,"14ee9sByWdHN7UUBWlcspOG","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["HelloWorld","audioMng","movecenterbg","use_v2.1-2.2.1_cc.Toggle_event"]);