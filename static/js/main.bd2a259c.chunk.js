(this["webpackJsonpasb-radar"]=this["webpackJsonpasb-radar"]||[]).push([[0],{17:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(9),o=n.n(c),i=n(2),r=n(23),s=n(25),l=n(27),u=(n(17),n(22)),h=n(24),j=n(26),_=n(1),b=function(t,e,n){n=(n+360)%360;var a=Math.PI/180,c=180/Math.PI,o=6378137,i=t.lng*a,r=t.lat*a,s=n*a,l=Math.sin(r),u=Math.cos(r),h=Math.cos(e/o),j=Math.sin(e/o),_=Math.asin(l*h+u*j*Math.cos(s)),b=i+Math.atan2(Math.sin(s)*j*u,h-l*Math.sin(_));return[_*c,b=(b*=c)>180?b-360:b<-180?b+360:b]},p=function(t){var e=Object(a.useState)(0),n=Object(i.a)(e,2),c=n[0],o=n[1],r=t.center,s=[r,b(r,t.length,c)];return Object(a.useEffect)((function(){var t=setTimeout((function(){return o(c<=360?c+1:0)}),5);return function(){clearTimeout(t)}}),[c]),Object(_.jsx)(u.a,{positions:s,pathOptions:{color:t.color,weight:t.weight}})},m=function(t){var e=t.color,n=t.position,c=t.radius,o=Object(r.a)("zoom",(function(t){O((o.getZoom()/6).toString())})),s=Object(a.useState)((o.getZoom()/6).toString()),l=Object(i.a)(s,2),m=l[0],O=l[1],d=function(t,e){for(var n=[],a=1;a<t;a++)n[a-1]=e-100*a;return n}(Math.trunc(c/100),c),g=function(t,e){for(var n=[],a=[0,180,270,90],c=0;c<4;c++)n.push(b(t,e,a[c]));return[[n[0],n[1]],[n[2],n[3]]]}(n,c);return c<100?null:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(j.a,{center:n,radius:c,pathOptions:{color:e,weight:m}}),Object(_.jsx)(u.a,{positions:g,pathOptions:{color:e,weight:m}}),Object(_.jsx)(p,{center:n,color:e,weight:m,time:2,length:c}),d.map((function(t,a){return Object(_.jsx)(j.a,{center:n,radius:t,pathOptions:{color:e,weight:m-1,fillOpacity:0}},"Circle"+a)}))]})},O=(n(19),n.p+"static/media/arrow.c51499a1.png"),d=(n(20),function(t){var e=Object(r.a)("click",(function(n){var a=n.latlng;t.radarMovable?t.changeRadarPosition(a):e.setView(a,e.getZoom(),{animate:!0})}));return null}),g=function(){var t={lat:59.94,lng:30.3},e=Object(a.useState)(!1),n=Object(i.a)(e,2),c=n[0],o=n[1],r=Object(a.useState)(t),u=Object(i.a)(r,2),h=u[0],j=u[1],b=Object(a.useState)(.5),p=Object(i.a)(b,2),g=p[0],f=p[1],x=Object(a.useState)("#00FF00"),v=Object(i.a)(x,2),w=v[0],M=v[1],S=Object(a.useState)(null),k=Object(i.a)(S,2),y=k[0],N=k[1],C=Object(a.useState)(!0),P=Object(i.a)(C,2),Z=P[0],z=P[1];return Object(_.jsxs)("div",{id:"App",children:[Object(_.jsxs)("div",{className:"map__buttons_container",children:[Object(_.jsx)("input",{type:"image",className:"map__button_hide_menu map__control_element__container"+(Z?" show":" hide"),onClick:function(){return z(!Z)},src:O,alt:"Swap"}),Object(_.jsx)("button",{className:"map__button_goto map__control_element__container"+(Z?" show":" hide"),onClick:function(){y.locate().on("locationfound",(function(t){y.flyTo(t.latlng,y.getZoom()),j(t.latlng)}))},children:"\u041f\u0435\u0440\u043c\u0435\u0441\u0442\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043b\u043e\u043a\u0446\u0438\u044e"}),Object(_.jsxs)("label",{className:"map__checkbox_movable__container map__control_element__container"+(Z?" show":" hide"),children:[Object(_.jsx)("input",{className:"map__checkbox_movable__input",type:"checkbox",checked:c,onChange:function(){return o(!c)}}),Object(_.jsx)("p",{children:"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0440\u0430\u0434\u0430\u0440\u0430 \u043f\u043e \u043a\u043b\u0438\u043a\u0443"})]}),Object(_.jsxs)("label",{className:"map__radius_input__container map__control_element__container"+(Z?" show":" hide"),children:[Object(_.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0430\u0434\u0438\u0443\u0441 \u0440\u0430\u0434\u0430\u0440\u0430(\u043a\u043c):"}),Object(_.jsx)("input",{className:"map__radius_input__field",type:"text",value:g,onChange:function(t){return f(t.target.value.replace(",","."))}})]}),Object(_.jsxs)("label",{className:"map__color_input__container map__control_element__container"+(Z?" show":" hide"),children:[Object(_.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0432\u0435\u0442 \u0434\u043b\u044f \u0440\u0430\u0434\u0430\u0440\u0430:"}),Object(_.jsx)("input",{className:"map__color_input__field",type:"color",value:w,onChange:function(t){return M(t.target.value)}})]})]}),Object(_.jsxs)(s.a,{eventHandlers:{click:function(t){return console.log(t)}},whenCreated:N,center:t,zoom:14,style:{height:"100vh"},children:[Object(_.jsx)(l.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 Site created by <a href="https://github.com/finn3r/">Finner</a>'}),Object(_.jsx)(d,{radarMovable:c,changeRadarPosition:j}),Object(_.jsx)(m,{color:w,position:h,radius:1e3*g})]})]})};o.a.render(Object(_.jsx)(g,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.bd2a259c.chunk.js.map