(function(){var t={5730:function(){},137:function(t,e,n){"use strict";var s=n(9242),i=n(3396);function a(t,e,n,s,a,r){const o=(0,i.up)("NavBar"),l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{"is-logged-in":!0}),(0,i.Wm)(l)],64)}const r={class:"navContainer"};function o(t,e,n,s,a,o){const l=(0,i.up)("NavBarItem"),c=(0,i.up)("LoggedOut"),d=(0,i.up)("LoggedIn");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(l,{name:"Home",route:"/"}),!0===n.isLoggedIn?((0,i.wg)(),(0,i.j4)(l,{key:0,name:"Train",route:"/train"})):(0,i.kq)("",!0),!0===n.isLoggedIn?((0,i.wg)(),(0,i.j4)(l,{key:1,name:"Leaderboards",route:"/leaderboards"})):(0,i.kq)("",!0),(0,i.Wm)(l,{name:"About",route:"/about"}),!1===n.isLoggedIn?((0,i.wg)(),(0,i.j4)(c,{key:2})):(0,i.kq)("",!0),!0===n.isLoggedIn?((0,i.wg)(),(0,i.j4)(d,{key:3})):(0,i.kq)("",!0)])}var l=n(7139);const c={class:"itemContainer"};function d(t,e,n,s,a,r){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i.Wm)(o,{to:{path:n.route},class:"link"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(n.name),1)])),_:1},8,["to"])])}var h={name:"NavbarItem",props:{name:String,route:String}},u=n(89);const m=(0,u.Z)(h,[["render",d],["__scopeId","data-v-5ec5decc"]]);var p=m;const f={class:"container"};function g(t,e,n,s,a,r){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i.Wm)(o,{to:"/login",class:"link",id:"loginButton"},{default:(0,i.w5)((()=>[(0,i.Uk)("Login")])),_:1}),(0,i.Wm)(o,{to:"/register",class:"link"},{default:(0,i.w5)((()=>[(0,i.Uk)("Register")])),_:1})])}var v={name:"LoggedOut"};const b=(0,u.Z)(v,[["render",g],["__scopeId","data-v-84d74ce2"]]);var k=b;const w=t=>((0,i.dD)("data-v-75122f8c"),t=t(),(0,i.Cn)(),t),x={class:"container"},y=w((()=>(0,i._)("div",null," Hello Nicholas ",-1))),_=[y];function O(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("div",x,_)}var P={name:"LoggedIn"};const M=(0,u.Z)(P,[["render",O],["__scopeId","data-v-75122f8c"]]);var C=M,A={name:"NavBar",props:{isLoggedIn:{type:Boolean,default:!0}},components:{LoggedIn:C,NavBarItem:p,LoggedOut:k}};const j=(0,u.Z)(A,[["render",o],["__scopeId","data-v-e7fd76d8"]]);var I=j,S={name:"App",data(){return{isLoggedIn:!1}},components:{NavBar:I}};const Y=(0,u.Z)(S,[["render",a]]);var T=Y,L=n(678);const X=(0,i._)("div",null,[(0,i._)("h1",null,"Welcome back! {Username}")],-1),D={class:"task-container"};function B(t,e,n,s,a,r){const o=(0,i.up)("TaskWindow");return(0,i.wg)(),(0,i.iD)(i.HY,null,[X,(0,i._)("div",D,[(0,i.Wm)(o)])],64)}const W=t=>((0,i.dD)("data-v-43394e09"),t=t(),(0,i.Cn)(),t),R={class:"task-window"},U=(0,i.uE)('<div class="task-header" data-v-43394e09><p data-v-43394e09>Your next challenge </p></div><div class="difficulty-select" data-v-43394e09><select name="difficulty" id="difficulty" data-v-43394e09><option value="" disabled selected hidden data-v-43394e09>Choose task type</option><option value="fundamentals" data-v-43394e09>Fundamentals</option><option value="RankUp" data-v-43394e09>Rank Up</option><option value="PandR" data-v-43394e09>Practice &amp; Repeat</option><option value="random" data-v-43394e09>radnom</option></select></div>',2),q={class:"button-container"},N={class:"simple-button train"},Z=W((()=>(0,i._)("button",{class:"simple-button train"},[(0,i._)("i",{class:"fa-solid fa-forward"},"Skip")],-1))),H=W((()=>(0,i._)("div",{class:"description-container"},[(0,i._)("div",{class:"description-header"},[(0,i._)("h4",{class:"description-header-text"},"Description")]),(0,i._)("div",{class:"description-text"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")],-1)));function E(t,e,n,s,a,r){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",R,[U,(0,i._)("div",q,[(0,i._)("button",N,[(0,i.Wm)(o,{to:"/task/"+a.currentTask,class:"fa-solid fa-wave-square"},{default:(0,i.w5)((()=>[(0,i.Uk)("Train")])),_:1},8,["to"])]),Z])]),H],64)}var F={name:"TaskWindow",data(){return{currentTask:0}}};const z=(0,u.Z)(F,[["render",E],["__scopeId","data-v-43394e09"]]);var V=z,K={name:"HomePage",components:{TaskWindow:V}};const G=(0,u.Z)(K,[["render",B]]);var J=G;function Q(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("h1",null,"Hello from About")}var $=n(5730),tt=n.n($);const et=(0,u.Z)(tt(),[["render",Q]]);var nt=et;function st(t,e,n,s,a,r){const o=(0,i.up)("BoardContainer");return(0,i.wg)(),(0,i.j4)(o)}const it={class:"scoreboardTable"};function at(t,e,n,s,a,r){const o=(0,i.up)("BoardHeaders");return(0,i.wg)(),(0,i.iD)("table",it,[(0,i.Wm)(o),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.items,(t=>((0,i.wg)(),(0,i.iD)("tr",{class:"scoreboardRegularRow",key:t},[((0,i.wg)(),(0,i.j4)((0,i.LL)(t)))])))),128))])}n(7658);const rt={class:"scoreboardHeaderRow"},ot=(0,i._)("th",{class:"scoreboardHeader"},"Rank",-1),lt=(0,i._)("th",{class:"scoreboardHeader"},"Username",-1),ct=(0,i._)("th",{class:"scoreboardHeader"},"Score",-1),dt=(0,i._)("th",{class:"scoreboardHeader"},"# Completed",-1),ht=[ot,lt,ct,dt];function ut(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("tr",rt,ht)}var mt={name:"BoardHeaders"};const pt=(0,u.Z)(mt,[["render",ut]]);var ft=pt;const gt={class:"rankItem"},vt={class:"usernameItem"},bt={class:"scoreItem"},kt={class:"completedItem"};function wt(t,e,n,s,a,r){const o=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("td",gt,(0,l.zw)(n.rank),1),(0,i._)("td",vt,[(0,i.Wm)(o,{to:"/user/"+n.username},{default:(0,i.w5)((()=>[(0,i.Uk)((0,l.zw)(n.username),1)])),_:1},8,["to"])]),(0,i._)("td",bt,(0,l.zw)(n.score),1),(0,i._)("td",kt,(0,l.zw)(n.completed),1)],64)}var xt={name:"BoardRow",props:{rank:{type:Number,default:-333},username:{type:String,default:"Default"},score:{type:Number,default:-666},completed:{type:Number,default:-999}}};const yt=(0,u.Z)(xt,[["render",wt]]);var _t=yt,Ot={name:"BoardContainer",components:{BoardHeaders:ft,BoardRows:_t},data(){return{items:[]}},mounted(){this.items.push((0,i.Wm)(_t,{rank:"1",username:"Nicholas",score:"2",completed:"5"},null)),this.items.push((0,i.Wm)(_t,{rank:"2",username:"Lasse",score:"2",completed:"5"},null))}};const Pt=(0,u.Z)(Ot,[["render",at]]);var Mt=Pt,Ct={name:"LeaderboardsPage",components:{BoardContainer:Mt}};const At=(0,u.Z)(Ct,[["render",st]]);var jt=At;const It={class:"container"},St=(0,i._)("div",null,[(0,i._)("h1",null,"Complete this task!")],-1);function Yt(t,e,n,s,a,r){const o=(0,i.up)("TaskDescription"),l=(0,i.up)("UppaalCanvas"),c=(0,i.up)("TaskButtons");return(0,i.wg)(),(0,i.iD)("div",It,[St,(0,i._)("div",null,[(0,i.Wm)(o)]),(0,i._)("div",null,[(0,i.Wm)(l)]),(0,i._)("div",null,[(0,i.Wm)(c)])])}const Tt={class:"description-container"};function Lt(t,e,n,s,a,r){const o=(0,i.up)("LoremIpsum");return(0,i.wg)(),(0,i.iD)("div",Tt,[(0,i.Wm)(o,{class:"description-text",add:"3p"})])}var Xt=n(5435),Dt={name:"TaskDescription",components:{LoremIpsum:Xt.Z}};const Bt=(0,u.Z)(Dt,[["render",Lt],["__scopeId","data-v-3ebb2cf1"]]);var Wt=Bt;const Rt=t=>((0,i.dD)("data-v-35163e0a"),t=t(),(0,i.Cn)(),t),Ut={class:"canvas-container"},qt={class:"optionsContainer"},Nt=Rt((()=>(0,i._)("h4",null," Options ",-1))),Zt={key:0,class:"node-chosen"},Ht={class:"name-field only-name"},Et=Rt((()=>(0,i._)("h5",null," Name ",-1))),Ft={class:"name-field"},zt=Rt((()=>(0,i._)("h5",null," Invariant ",-1))),Vt={class:"name-field"},Kt=Rt((()=>(0,i._)("h5",null," Rate of exponential ",-1))),Gt={class:"checkbox-field"},Jt=Rt((()=>(0,i._)("h5",null," Initial ",-1))),Qt={class:"checkbox-field"},$t=Rt((()=>(0,i._)("h5",null," Urgent ",-1))),te={class:"checkbox-field"},ee=Rt((()=>(0,i._)("h5",null," Committed ",-1))),ne={key:1,class:"link-chosen"},se={class:"name-field"},ie=Rt((()=>(0,i._)("h5",null," Select ",-1))),ae={class:"name-field"},re=Rt((()=>(0,i._)("h5",null," Guard ",-1))),oe={class:"name-field"},le=Rt((()=>(0,i._)("h5",null," Sync ",-1))),ce={class:"name-field"},de=Rt((()=>(0,i._)("h5",null," Update ",-1)));function he(t,e,n,a,r,o){return(0,i.wg)(),(0,i.iD)("div",Ut,[(0,i._)("canvas",{id:"myCanvas",width:"1000",height:"550",onKeydown:e[0]||(e[0]=(...t)=>o.handleKeyDown&&o.handleKeyDown(...t)),onKeyup:e[1]||(e[1]=(...t)=>o.handleKeyUp&&o.handleKeyUp(...t)),tabindex:"1",onClick:e[2]||(e[2]=(...t)=>o.handleLeftClick&&o.handleLeftClick(...t)),onMousemove:e[3]||(e[3]=(...t)=>o.handleMouseMove&&o.handleMouseMove(...t))},null,32),(0,i._)("div",qt,[Nt,null===r.selectedObject||!1!==r.linkChosen||r.altDown||null!==r.currentLink?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",Zt,[(0,i._)("div",Ht,[Et,(0,i.wy)((0,i._)("input",{id:"item-name","onUpdate:modelValue":e[4]||(e[4]=t=>r.name=t)},null,512),[[s.nr,r.name]])]),(0,i._)("div",Ft,[zt,(0,i.wy)((0,i._)("textarea",{id:"item-invariant",class:"input-texts",rows:"5","onUpdate:modelValue":e[5]||(e[5]=t=>r.invariant=t)},null,512),[[s.nr,r.invariant]])]),(0,i._)("div",Vt,[Kt,(0,i.wy)((0,i._)("textarea",{id:"item-exponential",class:"input-texts",rows:"5","onUpdate:modelValue":e[6]||(e[6]=t=>r.exponential=t)},null,512),[[s.nr,r.exponential]])]),(0,i._)("div",Gt,[(0,i.wy)((0,i._)("input",{type:"checkbox",id:"check-initial","onUpdate:modelValue":e[7]||(e[7]=t=>r.initial=t)},null,512),[[s.e8,r.initial]]),Jt]),(0,i._)("div",Qt,[(0,i.wy)((0,i._)("input",{type:"checkbox",id:"check-urgent","onUpdate:modelValue":e[8]||(e[8]=t=>r.urgent=t)},null,512),[[s.e8,r.urgent]]),$t]),(0,i._)("div",te,[(0,i.wy)((0,i._)("input",{type:"checkbox",id:"check-committed","onUpdate:modelValue":e[9]||(e[9]=t=>r.committed=t)},null,512),[[s.e8,r.committed]]),ee]),(0,i._)("button",{onClick:e[10]||(e[10]=(...t)=>o.saveOptionsForObject&&o.saveOptionsForObject(...t))}," Save ")])),null!==r.selectedObject&&!0===r.linkChosen?((0,i.wg)(),(0,i.iD)("div",ne,[(0,i._)("div",se,[ie,(0,i.wy)((0,i._)("textarea",{id:"item-select",class:"input-texts is-link",rows:"5","onUpdate:modelValue":e[11]||(e[11]=t=>r.select=t)},null,512),[[s.nr,r.select]])]),(0,i._)("div",ae,[re,(0,i.wy)((0,i._)("textarea",{id:"item-guard",class:"input-texts is-link",rows:"5","onUpdate:modelValue":e[12]||(e[12]=t=>r.guard=t)},null,512),[[s.nr,r.guard]])]),(0,i._)("div",oe,[le,(0,i.wy)((0,i._)("textarea",{id:"item-sync",class:"input-texts is-link",rows:"5","onUpdate:modelValue":e[13]||(e[13]=t=>r.sync=t)},null,512),[[s.nr,r.sync]])]),(0,i._)("div",ce,[de,(0,i.wy)((0,i._)("textarea",{id:"item-update",class:"input-texts is-link",rows:"5","onUpdate:modelValue":e[14]||(e[14]=t=>r.update=t)},null,512),[[s.nr,r.update]])]),(0,i._)("button",{onClick:e[15]||(e[15]=(...t)=>o.saveOptionsForObject&&o.saveOptionsForObject(...t))}," Save ")])):(0,i.kq)("",!0)])])}class ue{constructor(t,e,n,s){this.x=t,this.y=e,this.radius=n,this.mouseOffsetX=0,this.mouseOffsetY=0,this.identifier=s,this.color="#000000",this.name="",this.invariant=[],this.exponential="",this.initial=!1,this.urgent=!1,this.committed=!1}closestPointOnCircle(t,e){let n=t-this.x,s=e-this.y,i=Math.sqrt(n*n+s*s);return{x:this.x+n*this.radius/i,y:this.y+s*this.radius/i}}setMouseStart(t,e){this.mouseOffsetX=this.x-t,this.mouseOffsetY=this.y-e}setAnchorPoint(t,e){this.x=t+this.mouseOffsetX,this.y=e+this.mouseOffsetY}containsPoint(t,e){return(t-this.x)*(t-this.x)+(e-this.y)*(e-this.y)<this.radius*this.radius}draw(t){t.fillStyle=this.color,t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.stroke(),this.drawText(t,this.name,this.x,this.y,null,Math.round(this.y)-this.radius-3),this.drawText(t,this.invariant,this.x,this.y,null,Math.round(this.y)+this.radius+10),this.initial&&(t.beginPath(),t.arc(this.x,this.y,this.radius-6,0,2*Math.PI,!1),t.stroke()),this.urgent&&(t.beginPath(),t.arc(this.x,this.y,this.radius-12,0,Math.PI,!1),t.stroke()),this.committed&&(t.beginPath(),t.arc(this.x,this.y,this.radius-18,.5*Math.PI,1.5*Math.PI,!1),t.stroke())}drawText(t,e,n,s,i,a){t.font='15px "Times New Roman", serif';let r=t.measureText(e).width;if(n-=r/2,null!=i){let t=Math.cos(i),e=Math.sin(i),s=(r/2+5)*(t>0?1:-1),a=15*(e>0?1:-1),o=e*Math.pow(Math.abs(e),40)*s-t*Math.pow(Math.abs(t),10)*a;n+=s-e*o,a+t*o}n=Math.round(n),t.fillText(e,n,a)}}var me=ue;class pe{getMousePos(t,e){var n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top}}selectObject(t,e,n,s){for(let i=0;i<n.length;i++)if(n[i].containsPoint(t,e))return n[i];for(let i=0;i<s.length;i++)if(s[i].containsPoint(t,e))return s[i];return null}crossBrowserElementPos(t){let e=t.target||t.srcElement,n=0,s=0;while(e.offsetParent)n+=e.offsetLeft,s+=e.offsetTop,e=e.offsetParent;return{x:n,y:s}}crossBrowserMousePos(t){return{x:t.pageX||t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,y:t.pageY||t.clientY+document.body.scrollTop+document.documentElement.scrollTop}}crossBrowserRelativeMousePos(t){let e=this.crossBrowserElementPos(t),n=this.crossBrowserMousePos(t);return{x:n.x-e.x,y:n.y-e.y}}drawArrow(t,e,n,s){const i=Math.cos(s),a=Math.sin(s);t.beginPath(),t.moveTo(e,n),t.lineTo(e-8*i+5*a,n-8*a-5*i),t.lineTo(e-8*i-5*a,n-8*a+5*i),t.fill()}circleFromThreePoints(t,e,n,s,i,a){var r=this.det(t,e,1,n,s,1,i,a,1),o=-this.det(t*t+e*e,e,1,n*n+s*s,s,1,i*i+a*a,a,1),l=this.det(t*t+e*e,t,1,n*n+s*s,n,1,i*i+a*a,i,1),c=-this.det(t*t+e*e,t,e,n*n+s*s,n,s,i*i+a*a,i,a);return{x:-o/(2*r),y:-l/(2*r),radius:Math.sqrt(o*o+l*l-4*r*c)/(2*Math.abs(r))}}det(t,e,n,s,i,a,r,o,l){return t*i*l+e*a*r+n*s*o-t*a*o-e*s*l-n*i*r}}var fe=pe;class ge{constructor(t,e){this.from=t,this.to=e,this.utils=new fe,this.nails=[]}draw(t){t.beginPath(),t.moveTo(this.to.x,this.to.y),t.lineTo(this.from.x,this.from.y),t.stroke(),this.utils.drawArrow(t,this.to.x,this.to.y,Math.atan2(this.to.y-this.from.y,this.to.x-this.from.x))}}var ve=ge;class be{constructor(t,e){this.node=t,this.deltaX=0,this.deltaY=0,this.text="",this.utils=new fe,this.nails=[],e&&this.setAnchorPoint(e.x,e.y)}setAnchorPoint(t,e){this.deltaX=t-this.node.x,this.deltaY=e-this.node.y,Math.abs(this.deltaX)<6&&(this.deltaX=0),Math.abs(this.deltaY)<6&&(this.deltaY=0)}getEndPoints(){let t=this.node.x+this.deltaX,e=this.node.y+this.deltaY,n=this.node.closestPointOnCircle(t,e);return{startX:t,startY:e,endX:n.x,endY:n.y}}draw(t){var e=this.getEndPoints();t.beginPath(),t.moveTo(e.startX,e.startY),t.lineTo(e.endX,e.endY),t.stroke(),this.utils.drawArrow(t,e.endX,e.endY,Math.atan2(-this.deltaY,-this.deltaX))}containsPoint(t,e){let n=this.getEndPoints(),s=n.endX-n.startX,i=n.endY-n.startY,a=Math.sqrt(s*s+i*i),r=(s*(t-n.startX)+i*(e-n.startY))/(a*a),o=(s*(e-n.startY)-i*(t-n.startX))/a;return r>0&&r<1&&Math.abs(o)<6}}var ke=be;class we{constructor(t,e,n){this.nodeA=t,this.nodeB=e,this.lineAngleAdjust=0,this.parallelPart=.5,this.perpendicularPart=0,this.utils=new fe,this.from=this.nodeA.identifier.toString(),this.to=this.nodeB.identifier.toString(),this.identifier=n.toString(),this.select="",this.guard="",this.sync="",this.update=""}getAnchorPoint(){let t=this.nodeB.x-this.nodeA.x,e=this.nodeB.y-this.nodeA.y,n=Math.sqrt(t*t+e*e);return{x:this.nodeA.x+t*this.parallelPart-e*this.perpendicularPart/n,y:this.nodeA.y+e*this.parallelPart+t*this.perpendicularPart/n}}setAnchorPoint(t,e){let n=this.nodeB.x-this.nodeA.x,s=this.nodeB.y-this.nodeA.y,i=Math.sqrt(n*n+s*s);this.parallelPart=(n*(t-this.nodeA.x)+s*(e-this.nodeA.y))/(i*i),this.perpendicularPart=(n*(e-this.nodeA.y)-s*(t-this.nodeA.x))/i,this.parallelPart>0&&this.parallelPart<1&&Math.abs(this.perpendicularPart)<6&&(this.lineAngleAdjust=(this.perpendicularPart<0)*Math.PI,this.perpendicularPart=0)}getEndPointsAndCircle(){if(0===this.perpendicularPart){let t=(this.nodeA.x+this.nodeB.x)/2,e=(this.nodeA.y+this.nodeB.y)/2,n=this.nodeA.closestPointOnCircle(t,e),s=this.nodeB.closestPointOnCircle(t,e);return{hasCircle:!1,startX:n.x,startY:n.y,endX:s.x,endY:s.y}}let t=this.getAnchorPoint(),e=this.utils.circleFromThreePoints(this.nodeA.x,this.nodeA.y,this.nodeB.x,this.nodeB.y,t.x,t.y),n=this.perpendicularPart>0,s=n?1:-1,i=Math.atan2(this.nodeA.y-e.y,this.nodeA.x-e.x)-18*s/e.radius,a=Math.atan2(this.nodeB.y-e.y,this.nodeB.x-e.x)+18*s/e.radius,r=e.x+e.radius*Math.cos(i),o=e.y+e.radius*Math.sin(i),l=e.x+e.radius*Math.cos(a),c=e.y+e.radius*Math.sin(a);return{hasCircle:!0,startX:r,startY:o,endX:l,endY:c,startAngle:i,endAngle:a,circleX:e.x,circleY:e.y,circleRadius:e.radius,reverseScale:s,isReversed:n}}draw(t){let e=this.getEndPointsAndCircle();t.beginPath(),e.hasCircle?t.arc(e.circleX,e.circleY,e.circleRadius,e.startAngle,e.endAngle,e.isReversed):(t.moveTo(e.startX,e.startY),t.lineTo(e.endX,e.endY)),t.stroke(),e.hasCircle?this.utils.drawArrow(t,e.endX,e.endY,e.endAngle-e.reverseScale*(Math.PI/2)):this.utils.drawArrow(t,e.endX,e.endY,Math.atan2(e.endY-e.startY,e.endX-e.startX));let n=(e.startX+e.endX)/2,s=(e.startY+e.endY)/2,i=Math.atan2(e.endX-e.startX,e.startY-e.endY);this.drawText(t,this.select,n,s,i+this.lineAngleAdjust,s-5)}containsPoint(t,e){var n=this.getEndPointsAndCircle();if(!n.hasCircle){let s=n.endX-n.startX,i=n.endY-n.startY,a=Math.sqrt(s*s+i*i),r=(s*(t-n.startX)+i*(e-n.startY))/(a*a),o=(s*(e-n.startY)-i*(t-n.startX))/a;return r>0&&r<1&&Math.abs(o)<6}{let s=t-n.circleX,i=e-n.circleY,a=Math.sqrt(s*s+i*i)-n.circleRadius;if(Math.abs(a)<6){let t=Math.atan2(i,s),e=n.startAngle,a=n.endAngle;if(n.isReversed){let t=e;e=a,a=t}return a<e&&(a+=2*Math.PI),t<e?t+=2*Math.PI:t>a&&(t-=2*Math.PI),t>e&&t<a}}return!1}drawText(t,e,n,s,i,a){t.font='15px "Times New Roman", serif';let r=t.measureText(e).width;if(n-=r/2,null!=i){let t=Math.cos(i),e=Math.sin(i),s=(r/2+5)*(t>0?1:-1),a=15*(e>0?1:-1),o=e*Math.pow(Math.abs(e),40)*s-t*Math.pow(Math.abs(t),10)*a;n+=s-e*o,a+t*o}n=Math.round(n),t.fillText(e,n,a)}}var xe=we;class ye{constructor(t,e,n,s){this.node=t,this.anchorAngle=0,this.mouseOffsetAngle=0,this.radius=n,this.utils=new fe,this.to=this.node.identifier.toString(),this.from=this.node.identifier.toString(),this.identifier=s.toString(),this.select="",this.guard="",this.sync="",this.update="",e&&this.setAnchorPoint(e.x,e.y)}setMouseStart(t,e){this.mouseOffsetAngle=this.anchorAngle-Math.atan2(e-this.node.y,t-this.node.x)}setAnchorPoint(t,e){this.anchorAngle=Math.atan2(e-this.node.y,t-this.node.x)+this.mouseOffsetAngle;let n=Math.round(this.anchorAngle/(Math.PI/2))*(Math.PI/2);Math.abs(this.anchorAngle-n)<.1&&(this.anchorAngle=n),this.anchorAngle<-Math.PI&&(this.anchorAngle+=2*Math.PI),this.anchorAngle>Math.PI&&(this.anchorAngle-=2*Math.PI)}getEndPointsAndCircle(){let t=this.node.x+1.5*this.radius*Math.cos(this.anchorAngle),e=this.node.y+1.5*this.radius*Math.sin(this.anchorAngle),n=.75*this.radius,s=this.anchorAngle-.8*Math.PI,i=this.anchorAngle+.8*Math.PI,a=t+n*Math.cos(s),r=e+n*Math.sin(s),o=t+n*Math.cos(i),l=e+n*Math.sin(i);return{hasCircle:!0,startX:a,startY:r,endX:o,endY:l,startAngle:s,endAngle:i,circleX:t,circleY:e,circleRadius:n}}draw(t){var e=this.getEndPointsAndCircle();t.beginPath(),t.arc(e.circleX,e.circleY,e.circleRadius,e.startAngle,e.endAngle,!1),t.stroke(),this.utils.drawArrow(t,e.endX,e.endY,e.endAngle+.4*Math.PI)}containsPoint(t,e){var n=this.getEndPointsAndCircle(),s=t-n.circleX,i=e-n.circleY,a=Math.sqrt(s*s+i*i)-n.circleRadius;return Math.abs(a)<6}}var _e=ye,Oe={name:"UppaalCanvas",data(){return{canvas:null,context:null,nodes:[],links:[],utils:null,currentLink:null,selectedObject:null,originalClick:null,movingObject:!1,altDown:!1,nodeIdentifier:0,linkIdentifier:0,targetNode:null,linkChosen:!1,name:"",invariant:"",exponential:"",initial:!1,urgent:!1,committed:!1,select:"",guard:"",sync:"",update:""}},mounted(){this.canvas=document.getElementById("myCanvas"),this.context=this.canvas.getContext("2d"),this.utils=new fe},methods:{handleKeyDown(t){if(t.altKey&&(this.altDown=!0),27===t.keyCode&&(this.currentLink=null,this.selectedObject=null,this.drawCanvas()),8===t.keyCode&&null!=this.selectedObject)if(t.preventDefault(),this.selectedObject instanceof me){let t=[],e=[];for(let n=0;n<this.nodes.length;n++)this.nodes[n].identifier!==this.selectedObject.identifier&&t.push(this.nodes[n]);for(let n=0;n<this.links.length;n++)this.links[n].to!==this.selectedObject.identifier.toString()&&this.links[n].from!==this.selectedObject.identifier.toString()&&e.push(this.links[n]);this.nodes=t,this.links=e}else if(this.selectedObject instanceof xe||this.selectedObject instanceof _e){let t=[];this.links=t}this.drawCanvas(),console.log(t.keyCode)},handleKeyUp(t){18===t.keyCode&&(this.altDown=!1)},handleLeftClick(t){let e=this.utils.crossBrowserRelativeMousePos(t);this.selectedObject=this.utils.selectObject(e.x,e.y,this.nodes,this.links),this.altDown&&null==this.currentLink?null==this.selectedObject?(this.nodes.push(new me(e.x,e.y,25,this.nodeIdentifier)),this.nodeIdentifier++):(this.originalClick=e,this.selectedObject=this.utils.selectObject(e.x,e.y,this.nodes,this.links),this.currentLink=new ve(e,e)):null!=this.selectedObject&&(this.selectedObject instanceof xe||this.selectedObject instanceof _e?(this.linkChosen=!0,this.updateOptionsContainer()):(this.linkChosen=!1,this.updateOptionsContainer()),null!=this.currentLink&&(this.currentLink instanceof ve||null==this.targetNode||this.links.push(this.currentLink),this.currentLink=null,this.selectedObject=null)),this.drawCanvas()},handleMouseMove(t){let e=this.utils.crossBrowserRelativeMousePos(t);null!=this.currentLink&&(this.targetNode=this.utils.selectObject(e.x,e.y,this.nodes,this.links),this.targetNode instanceof me||(this.targetNode=null),null==this.selectedObject?null!=this.targetNode?(this.currentLink=new ke(this.targetNode,this.originalClick,this.linkIdentifier),this.linkIdentifier++):this.currentLink=new ve(this.originalClick,e):this.targetNode===this.selectedObject?(this.currentLink=new _e(this.selectedObject,e,18,this.linkIdentifier),this.linkIdentifier++):null!=this.targetNode?(this.currentLink=new xe(this.selectedObject,this.targetNode,this.linkIdentifier),this.linkIdentifier++):(this.currentLink=new ve(this.selectedObject.closestPointOnCircle(e.x,e.y),e),this.originalClick=this.selectedObject.closestPointOnCircle(e.x,e.y)),this.drawCanvas())},drawCanvas(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save();for(let t=0;t<this.nodes.length;t++)this.context.lineWidth=1,this.context.fillStyle=this.context.strokeStyle="blue",this.nodes[t].draw(this.context);for(let t=0;t<this.links.length;t++)this.context.lineWidth=1,this.context.fillStyle=this.context.strokeStyle=this.links[t]===this.selectedObject?"blue":"black",this.links[t].draw(this.context);null!=this.currentLink&&(this.context.lineWidth=1,this.context.fillStyle=this.context.strokeStyle="black",this.currentLink.draw(this.context)),this.context.restore()},saveOptionsForObject(){this.linkChosen?(this.selectedObject.select=this.select,this.selectedObject.guard=this.guard,this.selectedObject.sync=this.sync,this.selectedObject.update=this.update,this.overrideObjects()):(this.selectedObject.name=this.name,this.selectedObject.invariant=this.invariant,this.selectedObject.exponential=this.exponential,this.selectedObject.initial=this.initial,this.selectedObject.urgent=this.urgent,this.selectedObject.committed=this.committed,this.overrideObjects())},overrideObjects(){if(this.linkChosen)for(let t=0;t<this.links.length;t++){let t=[];for(let e=0;e<this.links.length;e++)this.links[e].identifier!==this.selectedObject.identifier&&t.push(this.links[e]);t.push(this.selectedObject),this.links=t}else{let t=[];for(let e=0;e<this.nodes.length;e++)this.nodes[e].identifier!==this.selectedObject.identifier&&t.push(this.nodes[e]);t.push(this.selectedObject),this.nodes=t}this.drawCanvas()},updateOptionsContainer(){this.linkChosen?(this.select=this.selectedObject.select,this.guard=this.selectedObject.guard,this.sync=this.selectedObject.sync,this.update=this.selectedObject.update):(this.name=this.selectedObject.name,this.invariant=this.selectedObject.invariant,this.exponential=this.selectedObject.exponential,this.initial=this.selectedObject.initial,this.urgent=this.selectedObject.urgent,this.committed=this.selectedObject.committed)}}};const Pe=(0,u.Z)(Oe,[["render",he],["__scopeId","data-v-35163e0a"]]);var Me=Pe;const Ce={class:"button-container"};function Ae(t,e,n,s,a,r){const o=(0,i.up)("TaskButton");return(0,i.wg)(),(0,i.iD)("div",Ce,[(0,i.Wm)(o,{icon:"fa-solid fa-check",text:"Submit"}),(0,i.Wm)(o,{icon:"fa-solid fa-forward",text:"Skip"})])}const je={class:"simple-button"};function Ie(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("button",je,[(0,i._)("i",{class:(0,l.C_)(n.icon)},(0,l.zw)(n.text),3)])}var Se={name:"TaskButton",props:{icon:String,text:String}};const Ye=(0,u.Z)(Se,[["render",Ie],["__scopeId","data-v-098de622"]]);var Te=Ye,Le={name:"TaskButtons",components:{TaskButton:Te}};const Xe=(0,u.Z)(Le,[["render",Ae],["__scopeId","data-v-3ef3b1e4"]]);var De=Xe,Be={name:"TaskPage",props:{taskid:Number},components:{TaskDescription:Wt,UppaalCanvas:Me,TaskButtons:De}};const We=(0,u.Z)(Be,[["render",Yt]]);var Re=We;function Ue(t,e){return" Register "}const qe={},Ne=(0,u.Z)(qe,[["render",Ue]]);var Ze=Ne;function He(t,e){return" Log in "}const Ee={},Fe=(0,u.Z)(Ee,[["render",He]]);var ze=Fe;const Ve={class:"profile-container"},Ke={class:"sidebar-container"},Ge=(0,i._)("div",{class:"content-divider"},null,-1),Je={class:"main-content-container"};function Qe(t,e,n,s,a,r){const o=(0,i.up)("ProfileCard"),l=(0,i.up)("ContentCard");return(0,i.wg)(),(0,i.iD)("div",Ve,[(0,i._)("div",Ke,[(0,i.Wm)(o,{username:n.username,title:a.title,"created-at":a.createdAt},null,8,["username","title","created-at"])]),Ge,(0,i._)("div",Je,[(0,i.Wm)(l,{title:"About me",content:a.about},null,8,["content"])])])}const $e={class:"profile-header"},tn={class:"stats-main"},en={class:"socials-panel"};function nn(t,e,n,s,a,r){const o=(0,i.up)("ProfileHeader"),l=(0,i.up)("StatField"),c=(0,i.up)("OtherSocials");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",$e,[(0,i.Wm)(o,{username:n.username,title:n.title},null,8,["username","title"])]),(0,i._)("div",tn,[(0,i.Wm)(l,{"stat-name":"Total Score","stat-value":"2000"}),(0,i.Wm)(l,{"stat-name":"Achievements","stat-value":"2"}),(0,i.Wm)(l,{"stat-name":"# Completed","stat-value":"20"}),(0,i.Wm)(l,{"stat-name":"Created","stat-value":n.createdAt},null,8,["stat-value"])]),(0,i._)("div",en,[(0,i.Wm)(c,{facebook:"fa-brands fa-facebook-square fa-xl",instagram:"fa-brands fa-instagram-square fa-xl",github:"fa-brands fa-github-square fa-xl",gitlab:"fa-brands fa-gitlab-square fa-xl",linkedin:"fa-brands fa-linkedin fa-xl"})])])}const sn={class:"stats-container"},an={class:"stats-field"},rn={class:"stats-item"},on={class:"stats-item"};function ln(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("div",sn,[(0,i._)("div",an,[(0,i._)("h4",rn,(0,l.zw)(n.statName)+":",1),(0,i._)("h4",on,(0,l.zw)(n.statValue),1)])])}var cn={name:"StatField",props:{statName:String,statValue:String}};const dn=(0,u.Z)(cn,[["render",ln],["__scopeId","data-v-0ebae8b2"]]);var hn=dn;const un=t=>((0,i.dD)("data-v-5215d00b"),t=t(),(0,i.Cn)(),t),mn=un((()=>(0,i._)("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",alt:"avatar",class:"profile-image"},null,-1))),pn={class:"username-header"},fn={class:"user-header"},gn={class:"user-header"};function vn(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[mn,(0,i._)("div",pn,[(0,i._)("h2",fn,(0,l.zw)(n.username),1),(0,i._)("h5",gn,(0,l.zw)(n.title),1)])],64)}var bn={name:"ProfileHeader",props:{username:String,title:String}};const kn=(0,u.Z)(bn,[["render",vn],["__scopeId","data-v-5215d00b"]]);var wn=kn;function xn(t,e,n,s,a,r){const o=(0,i.up)("SocialField");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{classname:n.facebook,refer:"_blank"},null,8,["classname"]),(0,i.Wm)(o,{classname:n.instagram,refer:"_blank"},null,8,["classname"]),(0,i.Wm)(o,{classname:n.github,refer:"_blank"},null,8,["classname"]),(0,i.Wm)(o,{classname:n.gitlab,refer:"_blank"},null,8,["classname"]),(0,i.Wm)(o,{classname:n.linkedin,refer:"_blank"},null,8,["classname"])],64)}const yn=["href"];function _n(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("a",{href:n.refer},[(0,i._)("i",{class:(0,l.C_)(n.classname)},null,2)],8,yn)}var On={name:"SocialField",props:{classname:String,refer:String}};const Pn=(0,u.Z)(On,[["render",_n],["__scopeId","data-v-376c5b09"]]);var Mn=Pn,Cn={name:"OtherSocials",props:{facebook:String,instagram:String,github:String,gitlab:String,linkedin:String},components:{SocialField:Mn}};const An=(0,u.Z)(Cn,[["render",xn]]);var jn=An,In={name:"ProfileCard",props:{username:String,title:String,createdAt:String},components:{StatField:hn,ProfileHeader:wn,OtherSocials:jn}};const Sn=(0,u.Z)(In,[["render",nn],["__scopeId","data-v-483ecca8"]]);var Yn=Sn;const Tn={class:"card"},Ln={class:"card-header"},Xn={class:"card-content"};function Dn(t,e,n,s,a,r){return(0,i.wg)(),(0,i.iD)("div",Tn,[(0,i._)("h2",Ln,(0,l.zw)(n.title),1),(0,i._)("div",Xn,(0,l.zw)(n.content),1)])}var Bn={name:"ContentCard",props:{title:String,content:String}};const Wn=(0,u.Z)(Bn,[["render",Dn],["__scopeId","data-v-2f1bd216"]]);var Rn=Wn,Un={data(){return{title:"",createdAt:"",about:""}},props:{username:String},components:{ProfileCard:Yn,ContentCard:Rn},async created(){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.username})},e=await fetch("/data-access/get-user-info",t),n=await e.json();this.about=n.about,this.createdAt=n.createdAt,this.title=n.title}};const qn=(0,u.Z)(Un,[["render",Qe]]);var Nn=qn;const Zn=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:nt},{path:"/leaderboards",name:"Leaderboards",component:jt},{path:"/train",name:"Train",component:Re},{path:"/login",name:"Login",component:ze},{path:"/register",name:"Register",component:Ze},{path:"/user/:username?",name:"User",component:Nn,props:!0},{path:"/task/:taskid?",name:"Task",component:Re,props:!0}],Hn=(0,L.p7)({history:(0,L.PO)("/"),routes:Zn});var En=Hn;(0,s.ri)(T).use(En).mount("#app")}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,s,i,a){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],a=t[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(o=!1,a<r&&(r=a));if(o){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,a,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var d=l(n)}for(e&&e(s);c<r.length;c++)a=r[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},s=self["webpackChunkrevuepal"]=self["webpackChunkrevuepal"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(137)}));s=n.O(s)})();
//# sourceMappingURL=app.277ad093.js.map