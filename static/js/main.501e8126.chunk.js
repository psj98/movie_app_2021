(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n.n(a),i=n(23),o=n.n(i),r=n(28),u=n(2),l=n(12),m=n.n(l),j=n(24),d=n(25),v=n(26),b=n(31),p=n(30),h=n(27),O=n.n(h);n(56);var x=function(e){e.id;var t=e.year,n=e.title,a=e.summary,c=e.poster,i=e.genres;return Object(s.jsxs)("div",{className:"movies_movie",children:[Object(s.jsx)("img",{src:c,alt:n,title:n}),Object(s.jsxs)("div",{className:"movie_data",children:[Object(s.jsx)("h3",{className:"movie_title",children:n}),Object(s.jsx)("h5",{className:"movie_year",children:t}),Object(s.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(s.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{className:"movie_summary",children:[a.slice(0,140),"..."]})]})]})},f=(n(57),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={count:0,isLoading:!0,movies:[]},e.add=function(){e.setState((function(e){return{count:e.count+1}}))},e.minus=function(){e.setState((function(e){return{count:e.count-1}}))},e.getMovies=Object(j.a)(m.a.mark((function t(){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){console.log("mount"),setTimeout((function(){}),3e3),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log("update")}},{key:"componentWillUnmount",value:function(){console.log("unmount")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(s.jsx)("div",{className:"main",children:Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:n.map((function(e){return Object(s.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})})}}]),n}(c.a.Component));var g=function(){return Object(s.jsx)("span",{children:"About this page : I built it because I love movies."})};var y=function(){return Object(s.jsxs)(r.a,{children:[Object(s.jsx)(u.a,{path:"/",component:f}),Object(s.jsx)(u.a,{path:"/about",component:g})]})};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.501e8126.chunk.js.map