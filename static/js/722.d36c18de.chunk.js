(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[722],{6505:function(t,n,e){"use strict";e.d(n,{Z:function(){return x}});var r,a,i,o=e(3874),s=e(168),c=e(6444),p=c.ZP.div(r||(r=(0,s.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tgap: 20px;\n\tmargin: 1vh auto;\n"]))),u=c.ZP.p(a||(a=(0,s.Z)(["\n\tmax-width: 80%;\n\tcolor: #9e035d;\n\ttext-shadow: 2px 2px 5px white;\n\ttext-align: center;\n\tfont-family: 'Dancing Script';\n\tfont-size: 48px;\n"]))),l=c.ZP.img(i||(i=(0,s.Z)(["\n\twidth: 25vw;\n\theight: auto;\n\tobject-fit: contain;\n\tobject-position: center;\n\tmargin: 0 auto;\n"]))),d=e(184);function x(t){var n=t.message;return(0,d.jsxs)(p,{role:"alert",children:[(0,d.jsx)(u,{children:n}),(0,d.jsx)(l,{src:o,width:"180",alt:"movie poster"})]})}},601:function(t,n,e){"use strict";e.d(n,{a:function(){return b}});var r,a,i,o,s,c=e(7689),p=(e(2791),e(168)),u=e(6444),l=u.ZP.li(r||(r=(0,p.Z)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 8px;\n\tpadding: 8px;\n\tmax-width: 100%;\n\twidth: 280px;\n\theight: 100%;\n\tborder: none;\n\ttransform: scale(1);\n\tborder-radius: 8px;\n\tbackground-color: transparent;\n\tbox-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n\t\t0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\tbackdrop-filter: blure(3.5px);\n\ttransition: box-shadow 250ms linear;\n\tcursor: pointer;\n\n\t&:hover {\n\t\tbox-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.60);\n\t}\n\n\timg {\n\t\tdisplay: block;\n\t\tmin-height: 100%;\n\t\theight: 420px;\n\t\twidth: 100%;\n\t\tborder-top-left-radius: 8px;\n\t\tborder-top-right-radius: 8px;\n\t\ttransition: transform 250ms linear;\n\t\ttransform: scale(1);\n\t\tobject-fit: cover;\n\t\tobject-position: center;\n\n\t\t&:hover {\n\t\t\ttransform: scale(1.2);\n\t\t}\n\t}\n"]))),d=u.ZP.div(a||(a=(0,p.Z)(["\n\tmargin-bottom: 8px;\n\toverflow: hidden;\n"]))),x=u.ZP.h2(i||(i=(0,p.Z)(["\n\tpadding: 8px;\n\tmax-width: 100%;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tcolor: #2b2828;\n\ttext-shadow: 0px 0.4px 0.4px #000;\n\ttext-align: center;\n\tfont-size: 14px;\n\tfont-weight: 700;\n"]))),f=(u.ZP.div(o||(o=(0,p.Z)(["\n\tposition: absolute;\n\tbottom: 48px;\n\tleft: 10px;\n"]))),e(1087)),h=e(3874),v=e(184),g=function(t){var n=t.movie,e=n.id,r=n.original_title,a=n.poster_path,i=n.title,o=n.name,s=t.state;return(0,v.jsx)(l,{children:(0,v.jsxs)(f.rU,{to:"/movies/".concat(e),state:s,children:[(0,v.jsx)(d,{children:(0,v.jsx)("img",{src:a?"https://image.tmdb.org/t/p/original".concat(a):h,alt:r,width:"200"})}),(0,v.jsx)(x,{children:i||o})]})})},m=u.ZP.ul(s||(s=(0,p.Z)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tgap: 20px;\n\tmargin: 0 0px 10px;\n"]))),b=function(t){var n=t.movies,e=t.genres,r=(0,c.TH)();return(0,v.jsx)(m,{children:n.map((function(t){return(0,v.jsx)(g,{movie:t,genres:e,state:{from:r}},t.id)}))})}},9722:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return C}});var r,a,i,o=e(5861),s=e(3433),c=e(9439),p=e(7757),u=e.n(p),l=e(2791),d=e(168),x=e(6444),f=x.ZP.div(r||(r=(0,d.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0 auto;\n\tmargin-top: 20px;\n\twidth: 100%;\n\tmax-width: 320px;\n\theight: 34px;\n\tborder: 0;\n\toutline: 0;\n\tcolor: #fff;\n\tbackground-color: #f3f7f5;\n\tbox-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\tbackdrop-filter: blure(2px);\n\toverflow: hidden;\n"]))),h=x.ZP.button(a||(a=(0,d.Z)(["\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 34px;\n\theight: 34px;\n\tborder: 0;\n\topacity: 0.6;\n\tbackground: linear-gradient(#f698a8, #f03251);\n\ttransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\tcursor: pointer;\n\toutline: none;\n\n\t:hover {\n\t\topacity: 1;\n\t}\n\n\tsvg {\n\t\tfill: #3d3a3a;\n\t\tstroke: #fff;\n\t\tstroke-width: 1px;\n\t\ttransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n\t\t:hover {\n\t\t\ttransform: scale(1.2);\n\t\t}\n\t}\n"]))),v=x.ZP.input(i||(i=(0,d.Z)(["\n\tdisplay: inline-block;\n\twidth: 100%;\n\tmin-height: 34px;\n\tborder-radius: 4px;\n\tfont: inherit;\n\tfont-size: 14px;\n\tborder: none;\n\toutline: none;\n\tpadding-left: 20px;\n\tpadding-right: 8px;\n\tbackground: none;\n\tcolor: #3d3a3a;\n\tletter-spacing: 1.4px;\n\ttext-shadow: 2px 2px 5px white;\n\n\t::placeholder {\n\t\tfont-weight: 400;\n\t\tcolor: #3d3a3a;\n\t\ttext-shadow: 2px 2px 5px white;\n\t\tfont-size: 18px;\n\t\tletter-spacing: 1.2px;\n\t}\n"]))),g=e(3479),m=e(2007),b=e.n(m),w=e(184),y=function(t){var n=t.value,e=t.onChange;return(0,w.jsxs)(f,{children:[(0,w.jsx)(v,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:n,onChange:e}),(0,w.jsx)(h,{children:(0,w.jsx)(g.QLp,{size:"24"})})]})};y.propType={handleFormSubmit:b().func.isRequired};var Z,j=e(1087),k=e(7689),_=e(4390),P=e(601),O=e(9649),T=e(6505),E=x.ZP.div(Z||(Z=(0,d.Z)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 20px;\n\tpadding: 0 16px 20px 16px;\n\tmargin-bottom: 60px;\n\tfont-size: 18px;\n\ttext-align: center;\n"]))),C=function(){var t=(0,l.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],a=(0,l.useState)([]),i=(0,c.Z)(a,2),p=i[0],d=i[1],x=(0,l.useState)(!1),f=(0,c.Z)(x,2),h=f[0],v=f[1],g=(0,l.useState)(!1),m=(0,c.Z)(g,2),b=m[0],Z=m[1],C=(0,j.lr)({page:1,query:""}),S=(0,c.Z)(C,2),q=S[0],z=S[1],R=(0,l.useMemo)((function(){return Object.fromEntries((0,s.Z)(q))}),[q]),L=Number(R.page||1),I=R.query,N=(0,k.TH)();(0,l.useEffect)((function(){(0,o.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,_.NV)(L,I);case 3:n=t.sent,r(n.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Z(t.t0);case 10:return t.prev=10,v(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})))()}),[L,I,N.search]),(0,l.useEffect)((function(){var t=null===e||void 0===e?void 0:e.filter((function(t){var n,e;return null===t||void 0===t||null===(n=t.title)||void 0===n?void 0:n.toLowerCase().includes(null===(e=I)||void 0===e?void 0:e.toLowerCase())}));d(t)}),[e,I]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(E,{children:[(0,w.jsx)(y,{value:I,onChange:function(t){var n=t.target.value;z({page:1,query:I=n})}}),h&&(0,w.jsx)(O.a,{}),b&&(0,w.jsx)(T.Z,{message:"I didn`t find movies. Please try again"}),!b&&I&&!h&&(0,w.jsx)(P.a,{movies:p})]}),!e.length&&I&&(0,w.jsx)("div",{style:{padding:"24px",textAlign:"center"},children:(0,w.jsxs)("p",{children:["We don't have movies by query: ",I]})})]})}},4390:function(t,n,e){"use strict";e.d(n,{Df:function(){return s},NV:function(){return c},TP:function(){return p},q5:function(){return l},yo:function(){return u}});var r=e(5861),a=e(7757),i=e.n(a),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"effc343b47c620264dd2241b3bdd904f",language:"en-US",include_adult:!1};var s=function(){var t=(0,r.Z)(i().mark((function t(){var n,e,r,a=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,t.prev=1,t.next=4,o.Z.get("/trending/movie/day",{params:{page:n}});case 4:return e=t.sent,r=e.data,t.abrupt("return",r);case 9:throw t.prev=9,t.t0=t.catch(1),new Error("Oops, there is no movies");case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(i().mark((function t(){var n,e,r,a,s,c,p=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>0&&void 0!==p[0]?p[0]:1,e=p.length>1&&void 0!==p[1]?p[1]:"",r=p.length>2?p[2]:void 0,t.prev=3,a=e?"/search/movie?page=".concat(n,"&query=").concat(e,"&language=").concat(r):"/movie/upcoming?page=".concat(n,"&language=").concat(r),t.next=7,o.Z.get(a);case 7:return s=t.sent,c=s.data,t.abrupt("return",c);case 12:throw t.prev=12,t.t0=t.catch(3),new Error("Oops, there is no movie");case 15:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/movie/".concat(n),{params:{id:n}});case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Oops, there is no movie with that name");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/movie/".concat(n,"/credits"),{params:{id:n}});case 3:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.Z.get("/movie/".concat(n,"/reviews"),{params:{id:n}});case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}()},888:function(t,n,e){"use strict";var r=e(9047);function a(){}function i(){}i.resetWarningCache=a,t.exports=function(){function t(t,n,e,a,i,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return e.PropTypes=e,e}},2007:function(t,n,e){t.exports=e(888)()},9047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3874:function(t,n,e){"use strict";t.exports=e.p+"static/media/No_movie_poster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=722.d36c18de.chunk.js.map