(this["webpackJsonpshoppies-app"]=this["webpackJsonpshoppies-app"]||[]).push([[0],{46:function(n,e,t){},47:function(n,e,t){},69:function(n,e,t){"use strict";t.r(e);var a={};t.r(a),t.d(a,"darkBlue",(function(){return cn})),t.d(a,"midBlue",(function(){return un})),t.d(a,"green",(function(){return ln})),t.d(a,"lightGreen",(function(){return dn})),t.d(a,"white",(function(){return pn}));var o=t(1),r=t(0),i=t.n(r),s=t(17),c=t.n(s),u=(t(46),t(47),t(8)),l=t(9),d=t(12),p=t(11),h=t(5),b=t(74),m=t(4),f=t(71),j=t(10),g=t.n(j);t(16);function x(){var n=Object(h.a)(["\n  .navbar {\n    padding: 30px 0px;\n    background-color: rgba(63, 96, 111, 0.5);\n  }\n\n  .nominations {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 600;\n  }\n"]);return x=function(){return n},n}var v=m.b.div(x()),O=(r.Component,t(20),t.p+"static/media/logo.5ec0f922.png");function y(){var n=Object(h.a)(["\n  color: ",";\n  font-size: 22px;\n  margin: 0;\n"]);return y=function(){return n},n}var k=m.b.p(y(),(function(n){return n.theme.lightGreen}));function N(){var n=Object(h.a)(["\n  height: 200px;\n  background: url(",") no-repeat;\n  background-size: contain;\n  background-position: center;\n"]);return N=function(){return n},n}function w(){var n=Object(h.a)(["\n  /* background-color: ","; */\n  padding-top: 15%;\n\n  h1 {\n    color: blue;\n  }\n"]);return w=function(){return n},n}var P=m.b.div(w(),(function(n){return n.theme.darkBlue})),C=m.b.div(N(),O),D=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){g.a.init({once:!0})}},{key:"render",value:function(){return Object(o.jsx)(P,{children:Object(o.jsxs)(f.a,{children:[Object(o.jsx)(C,{"data-aos":"fade","data-aos-duration":"1200"}),Object(o.jsx)(k,{"data-aos":"fade","data-aos-duration":"1200","data-aos-delay":"400",className:"text-center mt-5",children:Object(o.jsx)("em",{children:"Select your top five favorite movies for our upcoming Shoppies award show!"})})]})})}}]),t}(r.Component),S=t(40),I=t(75),R=t(72),F=t(73),z=t(23),M=t.n(z),A=t(14);function B(){var n=Object(h.a)(["\n  /* max-width: 400px; */\n  max-width: 90%;\n  padding-top: 70px;\n\n  .overlay {\n    opacity: 0.2;\n    transition: 0.2s;\n  }\n\n  .title {\n    float: left;\n    text-align: left;\n    font-weight: 600;\n    margin-top: 10px;\n    display: block;\n  }\n\n  .nominate {\n    opacity: 0;\n    transition: 0.2s !important;\n  }\n\n  .year {\n    font-size: 18px;\n    font-weight: 400;\n    display: block;\n  }\n\n  .disableLink {\n    pointer-events: none;\n  }\n\n  .selectPoster :hover {\n    cursor: pointer;\n    background: rgba(26, 51, 65, 0.73) !important;\n\n    .nominate {\n      opacity: 1;\n    }\n  }\n"]);return B=function(){return n},n}function q(){var n=Object(h.a)(["\n  width: 200px;\n  height: 300px;\n  -webkit-border-radius: 15px;\n  -moz-border-radius: 15px;\n  border-radius: 15px;\n  transition: 0.2s !important;\n"]);return q=function(){return n},n}var L=m.b.div(q()),T=m.b.div(B()),E=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(n){var a;return Object(u.a)(this,t),(a=e.call(this,n)).handleClick=function(n){if(!a.props.nominations)return null;a.props.searched?a.props.addNomination(a.props.title,a.props.poster,a.props.year,a.props.imdbID):a.props.nominated&&a.props.removeNomination(a.props.imdbID)},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){g.a.init({once:!0})}},{key:"renderMoviePoster",value:function(){return Object(o.jsx)(L,{style:{background:"url(".concat(this.props.poster,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"},"data-aos":"fade","data-aos-duration":"1200",children:Object(o.jsxs)("div",{className:"nominate",style:{color:"#91AA9D",paddingTop:"50%"},children:[this.props.searched&&Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)(A.c,{size:55}),Object(o.jsx)(k,{className:"text-center",children:"Nominate"})]}),this.props.nominated&&Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)(A.e,{size:55}),Object(o.jsx)(k,{className:"text-center",children:"Remove Nomination"})]})]})})}},{key:"renderBlankMoviePoster",value:function(){return Object(o.jsx)(L,{style:{"background-color":"#1A3341"},"data-aos":"fade","data-aos-duration":"1200"})}},{key:"renderSelectedMoviePoster",value:function(){return Object(o.jsx)(L,{style:{"background-color":"#1A3341"},"data-aos":"fade","data-aos-duration":"1200"})}},{key:"grayedOut",value:function(){var n=this;return!!this.props.nominated||(this.props.nominations?this.props.full?void 0:!this.props.nominations||!this.props.nominations.some((function(e){return e.imdbID===n.props.imdbID})):null)}},{key:"render",value:function(){var n=this;return this.props.nominations?Object(o.jsxs)(T,{children:[console.log("GRAYED OUT",this.grayedOut()),Object(o.jsxs)("div",{className:" ".concat(this.grayedOut()?"":"overlay"," "),children:["N/A"!==this.props.poster&&Object(o.jsx)("a",{className:" ".concat(this.grayedOut()?"selectPoster":"disableLink"," "),onClick:this.handleClick,children:this.renderMoviePoster()}),"N/A"==this.props.poster&&Object(o.jsx)("a",{className:"selectPoster",onClick:function(){return n.props.click(n.props.title,n.props.poster,n.props.year)},children:this.renderBlankMoviePoster()}),Object(o.jsxs)(k,{className:"title","data-aos":"fade","data-aos-duration":"1200","data-aos-delay":"150",children:[this.props.title,Object(o.jsx)("span",{className:"year","data-aos":"fade","data-aos-duration":"1200","data-aos-delay":"200",children:this.props.year})]})]})]}):null}}]),t}(r.Component);function G(){var n=Object(h.a)(["\n  border-radius: 96px;\n  background-color: ",";\n  cursor: pointer;\n  margin: 0 !important;\n  outline: 0 !important;\n  box-shadow: none !important;\n  border: 0px !important;\n\n  :hover,\n  :active,\n  :focus {\n    background-color: "," !important;\n    outline: 0 !important;\n    box-shadow: none !important;\n  }\n"]);return G=function(){return n},n}function Y(){var n=Object(h.a)(["\n  margin-top: 40px;\n  display: inline-block !important;\n\n  .hide {\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  .show {\n    display: initial;\n  }\n"]);return Y=function(){return n},n}var J=m.b.div(Y()),K=Object(m.b)(I.a)(G(),(function(n){return n.theme.midBlue}),(function(n){return n.theme.darkBlue})),U=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(n){var a;return Object(u.a)(this,t),(a=e.call(this,n)).state={},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){g.a.init({once:!0})}},{key:"render",value:function(){return Object(o.jsxs)(J,{className:"text-center ".concat(this.props.loading?"hide":"show"," "),children:[Object(o.jsx)(K,{className:" ".concat(1!==this.props.pageNumber?"show":"hide"," "),onClick:this.props.handlePrevPage,children:Object(o.jsx)(A.a,{size:16})}),Object(o.jsxs)(k,{className:"currentPage ".concat(this.props.query?"show":"hide"," "),children:["Page ",this.props.pageNumber]}),Object(o.jsx)(K,{className:"shadow-none currentPage ".concat(this.props.pageNumber-this.props.totalPages!==0?"show":"hide"," "),onClick:this.props.handleNextPage,children:Object(o.jsx)(A.b,{size:16})})]})}}]),t}(r.Component);function W(){var n=Object(h.a)(["\n  width: 150px;\n  height: 150px;\n  margin: 300px auto 600px auto;\n  display: block;\n\n  ","\n"]);return W=function(){return n},n}var H=m.b.svg(W(),(function(n){return!n.loading&&"\n    display: none;\n  "})),Q=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(n){var a;return Object(u.a)(this,t),(a=e.call(this,n)).state={},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){g.a.init({once:!0})}},{key:"render",value:function(){return Object(o.jsxs)(H,{version:"1.1",id:"L4",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0",loading:this.props.loading,children:[Object(o.jsx)("circle",{fill:"#fff",stroke:"none",cx:"6",cy:"50",r:"6",children:Object(o.jsx)("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.1"})}),Object(o.jsx)("circle",{fill:"#fff",stroke:"none",cx:"26",cy:"50",r:"6",children:Object(o.jsx)("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.2"})}),Object(o.jsx)("circle",{fill:"#fff",stroke:"none",cx:"46",cy:"50",r:"6",children:Object(o.jsx)("animate",{attributeName:"opacity",dur:"1s",values:"0;1;0",repeatCount:"indefinite",begin:"0.3"})})]})}}]),t}(r.Component);function V(){var n=Object(h.a)(["\n  padding-top: 15%;\n  padding-bottom: 20%;\n\n  h1 {\n    color: blue;\n  }\n"]);return V=function(){return n},n}var X=m.b.div(V()),Z=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){g.a.init({once:!0})}},{key:"render",value:function(){var n=this;return Object(o.jsx)(X,{children:Object(o.jsxs)(f.a,{className:"text-center",children:[Object(o.jsx)(k,{children:"Your Nominations"}),Object(o.jsx)("div",{children:Object(o.jsx)(R.a,{className:"justify-content-md-center",children:this.props.nominations.map((function(e){return Object(o.jsx)(F.a,{md:3,sm:6,children:Object(o.jsx)(E,{imdbID:e.imdbID,title:e.title,nominations:n.props.nominations,poster:e.poster,year:e.year,nominated:!0,removeNomination:n.props.removeNomination})},e.imdbID)}))})})]})})}}]),t}(r.Component);function $(){var n=Object(h.a)(["\n  .message {\n    margin-top: 20px;\n    font-weight: 400;\n  }\n\n  .styledContentLoader {\n    width: 500px;\n    height: 500px;\n  }\n\n  .hide {\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  .show {\n    display: initial;\n  }\n\n  .currentPage {\n    margin: 0 30px;\n  }\n"]);return $=function(){return n},n}function _(){var n=Object(h.a)(["\n  background-color: ",";\n  padding: 15px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  outline: 0 !important;\n  box-shadow: none !important;\n  border: 0px !important;\n\n  :hover,\n  :active,\n  :focus {\n    background-color: "," !important;\n    outline: 0 !important;\n    box-shadow: none !important;\n  }\n"]);return _=function(){return n},n}function nn(){var n=Object(h.a)(["\n  width: 85%;\n  height: 100px;\n  padding: 10px 0 0 0;\n  border-width: 0 0 2px 0;\n  border-color: rgba(209, 220, 189, 0.4);\n  background: transparent;\n  color: ",";\n  font-size: 60px;\n  font-weight: 300;\n  transition: 0.2s;\n\n  ::placeholder {\n    color: ",";\n    text-align: center;\n    bottom: 1px;\n    font-weight: 200;\n    opacity: 0.66;\n    font-size: 60px;\n\n    @media (max-width: 1000px) {\n      font-size: 4vw;\n      font-weight: 400;\n    }\n  }\n\n  /* Remove default outline when click on text box */\n  :focus {\n    outline: none;\n    border-color: rgba(209, 220, 189, 1);\n\n    /* Make placeholder transparent when you click on input */\n    ::placeholder {\n      color: transparent;\n    }\n  }\n"]);return nn=function(){return n},n}var en=m.b.input(nn(),(function(n){return n.theme.white}),(function(n){return n.theme.green})),tn=Object(m.b)(I.a)(_(),(function(n){return n.theme.midBlue}),(function(n){return n.theme.darkBlue})),an=m.b.div($()),on=function(n){Object(d.a)(t,n);var e=Object(p.a)(t);function t(n){var a;return Object(u.a)(this,t),(a=e.call(this,n)).fetchSearchResults=function(n,e){var t=n?"&page=".concat(n):"",o="https://www.omdbapi.com/?apikey=a5eb5dea&type=movie&s=".concat(e).concat(t);a.cancel&&a.cancel.cancel(),M.a.get(o,{cancelToken:a.cancel.token}).then((function(n){var t="False"===n.data.Response&&n.data.totalResults&&""!=e?n.data.Error:"Found ".concat(n.data.totalResults," Results");a.setState({results:n.data,message:t,loading:!1,totalPages:Math.ceil(n.data.totalResults/10)})})).catch((function(n){(M.a.isCancel(n)||n)&&(console.log(n),a.setState({loading:!1,message:"Failed to fetch data"}))}))},a.handleOnInputChange=function(n,e){if(13===n.keyCode||1==e){a.setState({results:{},pageNumber:1});var t=a.searchInput.current.value;t?a.setState({query:t,loading:!0,message:""},(function(){a.fetchSearchResults(a.state.pageNumber,t)})):a.setState({query:t,results:{},message:""})}},a.handleNextPage=function(){var n=a.state.pageNumber+1;a.setState({results:{},loading:!0,pageNumber:n}),a.fetchSearchResults(n,a.state.query)},a.handlePrevPage=function(){var n=a.state.pageNumber-1;a.setState({results:{},loading:!0,pageNumber:n}),a.fetchSearchResults(n,a.state.query)},a.renderSearchResults=function(){var n=a.state.results;if(n.Search)return Object(o.jsx)("div",{children:Object(o.jsx)(R.a,{className:"justify-content-md-center",children:n.Search.map((function(n){return Object(o.jsx)(F.a,{md:3,sm:6,children:Object(o.jsx)(E,{imdbID:n.imdbID,addNomination:a.addNomination,title:n.Title,nominations:a.state.nominations,poster:n.Poster,year:n.Year,full:a.state.full,searched:!0})},n.imdbID)}))})})},a.addNomination=function(n,e,t,o){a.state.nominations.length<=4&&(a.setState((function(a){return{nominations:[].concat(Object(S.a)(a.nominations),[{imdbID:o,title:n,poster:e,year:t}])}})),4==a.state.nominations.length&&a.setState({full:!0}))},a.removeNomination=function(n){a.setState({nominations:a.state.nominations.filter((function(e){return e.imdbID!==n})),full:!1})},a.state={query:"",results:{},nominations:[],loading:!1,full:!1,pageNumber:1,totalPages:1},a.searchInput=i.a.createRef(),a.cancel="",a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){g.a.init({once:!0})}},{key:"render",value:function(){var n=this,e=this.state,t=e.loading,a=e.message,r=e.totalPages,i=e.pageNumber,s=e.query,c=e.nominations;return Object(o.jsx)(an,{children:Object(o.jsxs)(f.a,{className:"text-center pt-4",children:[Object(o.jsx)(en,{className:"text-center",type:"text",name:"query",autocomplete:"chrome-off","data-aos":"fade-up","data-aos-duration":"1500","data-aos-delay":"800",placeholder:"What's one of your favorite movies?",ref:this.searchInput,onKeyDown:function(e){return n.handleOnInputChange(e,!1)}}),Object(o.jsx)(tn,{type:"submit","data-aos":"fade-up","data-aos-duration":"1500","data-aos-delay":"900",onClick:function(e){return n.handleOnInputChange(e,!0)},children:Object(o.jsx)(A.d,{size:24})}),a&&Object(o.jsx)(k,{className:"message",children:a}),Object(o.jsx)(U,{handlePrevPage:this.handlePrevPage,handleNextPage:this.handleNextPage,loading:t,pageNumber:i,query:s,totalPages:r}),this.renderSearchResults(),Object(o.jsx)(U,{className:"mt-5",handlePrevPage:this.handlePrevPage,handleNextPage:this.handleNextPage,loading:t,pageNumber:i,query:s,totalPages:r}),Object(o.jsx)(Q,{loading:t}),Object(o.jsx)(Z,{nominations:c,removeNomination:this.removeNomination})]})})}}]),t}(r.Component);var rn=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(D,{}),Object(o.jsx)(on,{})]})},sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(e){var t=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),o(n),r(n),i(n)}))},cn="#1A3341",un="#3F606F",ln="#91AA9D",dn="#D1DCBD",pn="#FCFFF5";c.a.render(Object(o.jsx)(m.a,{theme:a,children:Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(rn,{})})}),document.getElementById("root")),sn()}},[[69,1,2]]]);
//# sourceMappingURL=main.aed3189d.chunk.js.map