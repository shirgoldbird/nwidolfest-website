(self.webpackChunknw_idolfest_website=self.webpackChunknw_idolfest_website||[]).push([[678],{1446:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/2ed145dd599d561ba9a42eb699912d6e/97b65/socal_test.png","srcSet":"/static/2ed145dd599d561ba9a42eb699912d6e/591d3/socal_test.png 33w,\\n/static/2ed145dd599d561ba9a42eb699912d6e/a6003/socal_test.png 67w,\\n/static/2ed145dd599d561ba9a42eb699912d6e/97b65/socal_test.png 133w,\\n/static/2ed145dd599d561ba9a42eb699912d6e/7b8df/socal_test.png 266w","sizes":"(min-width: 133px) 133px, 100vw"},"sources":[{"srcSet":"/static/2ed145dd599d561ba9a42eb699912d6e/18f5f/socal_test.webp 33w,\\n/static/2ed145dd599d561ba9a42eb699912d6e/f7a94/socal_test.webp 67w,\\n/static/2ed145dd599d561ba9a42eb699912d6e/0f5e4/socal_test.webp 133w,\\n/static/2ed145dd599d561ba9a42eb699912d6e/c13f8/socal_test.webp 266w","type":"image/webp","sizes":"(min-width: 133px) 133px, 100vw"}]},"width":133,"height":50}')},3823:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return B}});var n=a(7294),r=a(7095),i=a(5583),l=a(6273),o=a(6924),s=a(5954),d=a(5444),c=a(920),u=a(3332),p=a(7627),m=a(7676),f=(0,p.Z)((function(e){return{carouselSlider:{width:"100%",maxWidth:"800px",height:"400px",position:"relative",overflow:"hidden","@media (max-width: 800px)":{width:"calc(100vw - 4em)",height:"200px","& img":{objectFit:"scale-down !important"}}},carouselSlide:{width:"100%",maxWidth:"100vw",height:"400px",position:"absolute",textAlign:"center","& > div":{height:"400px",objectFit:"cover"},"@media (max-width: 800px)":{"& > div":{height:"200px"},height:"auto"}},btn:{position:"absolute",width:"40px",height:"40px",padding:"10px",border:"none",borderRadius:"50%",zIndex:10,cursor:"pointer",backgroundColor:e.palette.light_pink,fontSize:"18px",lineHeight:"18px",top:"45%","@media (max-width: 800px)":{top:"40%"},"&:active":{transform:"scale(1.1)",backgroundColor:e.palette.dark_pink}},btnPrev:{left:"2%"},btnNext:{right:"2%"}}})),h=function(e){var t=f(),a=(0,n.createRef)(),r=(0,n.useState)(0),i=r[0],l=r[1],o=(0,n.useState)(!1),s=o[0],d=o[1],c=(0,n.useState)(!1),u=c[0],p=c[1];(0,n.useEffect)((function(){s?a.current.querySelectorAll("."+t.carouselSlide).forEach((function(e,t){e.style.transform="translateX("+100*(t-i)+"%)",e.style.transition="all 0.5s"})):document.querySelectorAll("."+t.carouselSlide).forEach((function(e,t){e.style.transform="translateX("+100*t+"%)"}))}),[s,d,t,i,a]),(0,n.useEffect)((function(){var e=setInterval((function(){u||h()}),4e3);return function(){return clearInterval(e)}}));var h=(0,n.useCallback)((function(){d(!0),i<e.images.length-1?l(i+1):l(0)}),[i,l,e]),g=(0,n.useCallback)((function(){p(!0),h()}),[p,h]),b=(0,n.useCallback)((function(){d(!0),p(!0),l(i>0?i-1:e.images.length-1)}),[i,l,e]),x=e.images;return n.createElement("div",{className:""+t.carouselSlider,ref:a},x.map((function(a){return n.createElement("div",{className:""+t.carouselSlide,style:{animationDuration:e.animationDuration},key:a.relativePath},n.createElement(m.G,{image:a.childImageSharp.gatsbyImageData,placeholder:"blurred",alt:"Prior event"}))})),n.createElement("button",{className:t.btn+" "+t.btnNext,onClick:g},">"),n.createElement("button",{className:t.btn+" "+t.btnPrev,onClick:b},"<"))},g=(0,p.Z)((function(e){return{banner:{fontSize:"20px",lineHeight:"45px",border:"1px solid #aaa",borderRadius:"10px",marginBottom:"16px",padding:"5px","& a":{boxShadow:"none"},"& img":{paddingRight:"20px"},"@media (max-width: 800px)":{fontSize:"16px",lineHeight:"32px",textAlign:"center"}}}})),b=n.createElement(m.S,{layout:"constrained",alt:"",height:50,transformOptions:{fit:"contain"},src:"../images/logo/socal_test.png",placeholder:"none",backgroundColor:"transparent",__imageData:a(1446)}),x=function(e){var t=g(),a=(0,d.useStaticQuery)("3181453390").site.siteMetadata,r=a.sisterBannerEvent,i=a.sisterBannerText,l=n.createElement(n.Fragment,null);return"scif"!==r?n.createElement(n.Fragment,null):(l=b,n.createElement("div",{className:t.banner},n.createElement("a",{href:"https://scidolfest.com",target:"_blank",rel:"noreferrer"},l,i)))},w=a(3964),v=a.n(w),E=JSON.parse('{"TN":"NW IdolFest 2023 Schedule  Live!","d1":"Get ready for NW IdolFest 2023! <a target=\\"_blank\\" href=\\"/events\\">Our schedule is now live!</a>\\n\\nBack for our third year, Northwest IdolFest is a three day convention all about idols, anisong, and j-pop! Featuring your favorite idol performers, vendors, and tons of amazing panels, join us in Seattle, WA from October 20-22, 2023.","w7":true,"ZY":[{"text":"Schedule","href":"https://nwidolfest.com/events"}],"_o":3}'),S=E.TN,y=E.d1,k=E.w7,_=E.ZY,N=(0,c.Z)((function(e){return{introWrapper:{position:"relative"},introText:{position:"absolute",backgroundColor:"#fff",borderRadius:"5px",opacity:"0.85",top:"calc(50% - 8px)",left:"50%",transform:"translate(-50%, -50%)",padding:"4px 16px",textAlign:"center"},introLine:{width:"100%",backgroundColor:"#fff",height:"4px"},carouselHolder:{margin:"auto",display:"grid",placeItems:"center",marginBottom:"24px"},htmlBody:{whiteSpace:"pre-wrap",fontSize:"1.5em",fontWeight:400,lineHeight:1.25,paddingBottom:"1em"},buttonHolder:{display:"flex",flexWrap:"wrap","& > a":{flexGrow:1,margin:"4px 32px",width:"200px",flexBasis:"200px",marginTop:"24px",textAlign:"center"},"& > .MuiButton-sizeLarge":{fontSize:"150%"}},scheduleBanner:{fontSize:"20px",lineHeight:"45px",border:"1px solid #aaa",borderRadius:"10px",marginBottom:"16px",padding:"5px 20px","& a":{boxShadow:"none"},"@media (max-width: 800px)":{fontSize:"16px",lineHeight:"32px",textAlign:"center"}}}})),B=function(){for(var e=N(),t=(0,d.useStaticQuery)("233542362"),a=t.site.siteMetadata.shortDates,c=v()(),p=v()(a.split(/[-,]/)[0]+a.split(/[-,]/)[2],"MMM DD YYYY",!0),m=p.clone().startOf("week").add(1,"day"),f=[],g=0;g<E._o;g++)f.push(p.clone().add(g,"days"));var b=f.filter((function(e){return c.isSame(e,"day")})),w=c.isAfter(m)&&c.isBefore(f[0]),B=n.createElement(n.Fragment,null);if(w){var C=f[0].format("dddd");B=n.createElement("div",{className:e.scheduleBanner},n.createElement("a",{href:"/events/"+C.toLowerCase()},"Click here for the ",C," schedule!"))}else if(b.length>0){var z=b[0].format("dddd");B=n.createElement("div",{className:e.scheduleBanner},n.createElement("a",{href:"/events/"+z.toLowerCase()},"Click here for today's schedule!"))}var H=t.images.nodes;return n.createElement(r.Z,null,n.createElement(i.Z,{title:"Home"}),n.createElement(s.Z,{title:S}),n.createElement(l.Z,null,n.createElement(x,null),B,n.createElement("div",{className:e.carouselHolder},n.createElement(h,{images:H})),n.createElement("div",{className:e.htmlBody,dangerouslySetInnerHTML:{__html:y}}),k?n.createElement("div",{className:e.buttonHolder},n.createElement(u.Z,{variant:"contained",size:"large",className:"cta",href:"/register"},"Buy a Badge")):n.createElement(n.Fragment,null),n.createElement("div",{className:e.buttonHolder,style:{width:1===_.length?"50%":"100%",margin:"auto"}},_.map((function(e){return n.createElement(u.Z,{key:e.href,variant:"contained",className:"cta",href:e.href},e.text)}))),n.createElement("br",null),n.createElement("br",null),n.createElement("p",null,"Sign up for our email list below to get notifications for future announcements."),n.createElement(o.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b7eccefbca7c5c27ba35.js.map