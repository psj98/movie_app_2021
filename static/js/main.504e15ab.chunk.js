(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{56:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),i=n(28),r=n.n(i),o=n(8),l=n(2),u=n(17),j=n.n(u),m=n(29),d=n(11),b=n(12),h=n(14),p=n(13),v=n(30),O=n.n(v);n(56);var x=function(e){var t=e.id,n=e.year,s=e.title,c=e.summary,i=e.poster,r=e.genres;return Object(a.jsx)("div",{className:"movies_movie",children:Object(a.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:c,poster:i,genres:r}},children:[Object(a.jsx)("img",{src:i,alt:s,title:s}),Object(a.jsxs)("div",{className:"movie_data",children:[Object(a.jsx)("h3",{className:"movie_title",children:s}),Object(a.jsx)("h5",{className:"movie_year",children:n}),Object(a.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(a.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{className:"movie_summary",children:[c.slice(0,140),"..."]})]})]})})},f=(n(65),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={count:0,isLoading:!0,movies:[]},e.add=function(){e.setState((function(e){return{count:e.count+1}}))},e.minus=function(){e.setState((function(e){return{count:e.count-1}}))},e.getMovies=Object(m.a)(j.a.mark((function t(){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){console.log("mount"),setTimeout((function(){}),3e3),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(a.jsx)("div",{className:"main",children:Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:n.map((function(e){return Object(a.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})})}}]),n}(c.a.Component));n(66);var g=function(){return Object(a.jsxs)("div",{className:"about_container",children:[Object(a.jsx)("span",{children:"About this page"}),Object(a.jsx)("span",{children:"Created by SeongJunPark"})]})},y=(n(67),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsxs)("div",{className:"detail_container",children:[Object(a.jsx)("img",{src:e.state.poster,alt:e.state.title}),Object(a.jsxs)("div",{className:"detail_data",children:[Object(a.jsx)("h1",{className:"detail_title",children:e.state.title}),Object(a.jsx)("h3",{className:"detail_year",children:e.state.year}),Object(a.jsx)("ul",{className:"detail_genres",children:e.state.genres.map((function(e,t){return Object(a.jsx)("li",{className:"detail_genres_genre",children:e},t)}))}),Object(a.jsx)("p",{}),Object(a.jsx)("p",{className:"detail_summary",children:e.state.summary})]})]}):null}}]),n}(c.a.Component));n(68);var _=function(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:"About"})]})};var N=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(_,{}),Object(a.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(a.jsx)(l.a,{path:"/about",component:g}),Object(a.jsx)(l.a,{path:"/movie/:id",component:y})]})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.504e15ab.chunk.js.map