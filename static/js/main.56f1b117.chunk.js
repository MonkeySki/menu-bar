(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),i=a.n(l),r=(a(13),a(15),a(3)),s=a(4),u=a(6),o=a(5),m=a(7),f=(a(17),["btn--primary","btn--outline"]),b=["btn--medium","btn--large"],d=function(e){var t=e.children,a=e.type,n=e.onClick,l=e.buttonStyle,i=e.buttonSize,r=f.includes(l)?l:f[0],s=b.includes(i)?i:b[0];return c.a.createElement("button",{className:"btn ".concat(r," ").concat(s),onClick:n,type:a},t)},v=[{title:"Home",url:"#",cName:"nav-links"},{title:"Services",url:"#",cName:"nav-links"},{title:"Products",url:"#",cName:"nav-links"},{title:"Contact Us",url:"#",cName:"nav-links"},{title:"Sign Up",url:"#",cName:"nav-links-mobile"}],k=(a(19),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={clicked:!1},a.handleClick=function(){a.setState({clicked:!a.state.clicked})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"NavbarItems"},c.a.createElement("h1",{className:"navbar-logo"},"React",c.a.createElement("i",{className:"fab fa-react"})),c.a.createElement("div",{className:"menu-icon",onClick:this.handleClick},c.a.createElement("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})),c.a.createElement("ul",{className:this.state.clicked?"nav-menu active":"nav-menu"},v.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("a",{className:e.cName,href:e.url},e.title))})),c.a.createElement(d,null,"Sign Up"))}}]),t}(n.Component));var p=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null),"Yay! I made a menu bar following this tutorial: https://www.youtube.com/watch?v=fL8cFqhTHwA")};i.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[8,2,1]]]);
//# sourceMappingURL=main.56f1b117.chunk.js.map