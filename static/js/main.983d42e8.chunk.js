(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),s=n.n(o),l=n(5),c=n(3),i=n(4),u=n(7),g=n(6),h=(n(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),d=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={isStarted:!1,goods:[].concat(h),isReversed:!1,sortTypeOf:"",goodLength:1},e.toggleStart=function(){e.setState((function(e){return{isStarted:!e.isStarted}}))},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.sortString=function(){e.setState((function(){return{sortTypeOf:"string",isReversed:!1}}))},e.sortNumber=function(){e.setState((function(){return{sortTypeOf:"number",isReversed:!1}}))},e.setGoodLength=function(t){e.setState((function(){return{goodLength:t}}))},e.handleChange=function(t){e.setState({goodLength:t.target.value})},e.reset=function(){e.setState((function(){return{isReversed:!1,sortTypeOf:"",goodLength:1}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.goods,n=e.isStarted,r=e.isReversed,o=e.sortTypeOf,s=e.goodLength,c=Object(l.a)(t).filter((function(e){return e.length>=s}));return c.sort((function(e,t){switch(o){case"string":return e.localeCompare(t);case"number":return e.length-t.length;default:return 0}})),r&&c.reverse(),a.a.createElement("div",{className:"App"},a.a.createElement("button",{type:"button",onClick:this.toggleStart,className:n?"hidden":null},"Start"),n&&a.a.createElement("span",null,a.a.createElement("h1",null,"Goods List:\xa0",c.length||0),a.a.createElement("ul",null,c.map((function(e){return a.a.createElement("li",{key:e},e)}))),a.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.sortString},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.sortNumber},"Sort by length"),a.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),a.a.createElement("hr",null),a.a.createElement("span",null,"Set good's name length for filter : "),a.a.createElement("select",{name:"goodLength",value:s,onChange:this.handleChange},[1,2,3,4,5,6,7,8,9,10].map((function(e){return a.a.createElement("option",{value:e},e)})))))}}]),n}(a.a.Component);s.a.render(a.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.983d42e8.chunk.js.map