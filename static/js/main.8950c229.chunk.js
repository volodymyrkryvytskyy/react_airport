(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),u=a.n(c),l=(a(16),a(2)),i=a(3),s=a(6),o=a(4),p=a(7),m=(a(17),a(1)),d=a.n(m),h=a(5),y=function(e){var t=e.flightsList,a="Arrivals"===e.pageType?"timeToStand":"timeDepShedule";return t.map(function(e){var t=new Date(e[a]).toTimeString().slice(0,5);return n.a.createElement("tr",{className:"arrivals",key:e.fltNo+e.status},n.a.createElement("td",null,e.term),n.a.createElement("td",null,t),n.a.createElement("td",null,e["airportFromID.city"]||e["airportToID.city"]),n.a.createElement("td",null,e.status),n.a.createElement("td",null,e.airline.ua.name),n.a.createElement("td",null,e.codeShareData[0].icao+e.fltNo))})},f=function(){var e=Object(h.a)(d.a.mark(function e(t){var a,r,n,c;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=(new Date).toLocaleDateString("ru-RU").replace(/\./g,"-"),r="https://api.iev.aero/api/flights/".concat(a),e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c.body[t]);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b=function(e,t,a){return e.filter(function(e){var r,n,c=new Date(e.timeDepShedule||e.timeToStand).toLocaleDateString("ru-RU"),u=new Date;return r=t,n=a,Object.prototype.hasOwnProperty.call(r,n)&&u.setDate(u.getDate()+r[n]),c.slice(0,2)===u.toLocaleDateString("ru-Ru").slice(0,2)})},v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).takeData(),a.state={arrival:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"takeData",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("arrival");case 2:t=e.sent,this.setState({arrival:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.arrival,t=this.props,a=t.currentDay,r=t.dateMap,c=t.type,u=b(e,r,a);return n.a.createElement(y,{flightsList:u,pageType:c})}}]),t}(r.Component),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={departure:[]},a.takeData(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"takeData",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("departure");case 2:t=e.sent,this.setState({departure:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.departure,t=this.props,a=t.currentDay,r=t.dateMap,c=t.type,u=b(e,r,a);return n.a.createElement(y,{flightsList:u,pageType:c})}}]),t}(r.Component),E="Arrivals",g="Today",k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).call(this))).handleClick=function(t){e.setState({currentPage:t})},e.setCurrentDay=function(t){e.setState({currentDay:t})},e.state={currentPage:E,currentDay:g,dateMap:{Yesterday:-1,Tomorrow:1}},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.currentDay,r=t.currentPage,c=t.dateMap;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"typeContainer"},n.a.createElement("img",{src:"https://bit.ly/2YB0YpL",alt:"departures",className:"departure-bg-img"}),n.a.createElement("button",{onClick:function(){return e.handleClick("Departures")},className:"typeButton",type:"submit"},"Departures"),n.a.createElement("button",{onClick:function(){return e.handleClick(E)},className:"typeButton",type:"submit"},"Arrivals"),n.a.createElement("img",{src:"https://bit.ly/2xrC5Ri",alt:"arrivals",className:"arrival-bg-img"})),n.a.createElement("div",{className:"pickADate"},n.a.createElement("button",{type:"submit",onClick:function(){return e.setCurrentDay("Yesterday")},className:"dateButton"},"Yesterday"),n.a.createElement("button",{type:"submit",onClick:function(){return e.setCurrentDay(g)},className:"dateButton"},"Today"),n.a.createElement("button",{type:"submit",onClick:function(){return e.setCurrentDay("Tomorrow")},className:"dateButton"},"Tomorrow")),n.a.createElement("h3",null,"".concat(r," for ").concat(a)),n.a.createElement("table",{className:"AppTable"},n.a.createElement("thead",{className:"tableHead"},n.a.createElement("tr",null,n.a.createElement("th",null,"Terminal"),n.a.createElement("th",null,"Local Time"),n.a.createElement("th",null,"Destination"),n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Airline"),n.a.createElement("th",null,"Flight"))),n.a.createElement("tbody",null,r===E?n.a.createElement(v,{currentDay:a,dateMap:c,type:E}):n.a.createElement(D,{currentDay:a,dateMap:c,type:"Departures"}))))}}]),t}(r.Component);u.a.render(n.a.createElement(k,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8950c229.chunk.js.map