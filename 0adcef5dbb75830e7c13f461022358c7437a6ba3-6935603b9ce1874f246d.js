(self.webpackChunknw_idolfest_website=self.webpackChunknw_idolfest_website||[]).push([[63],{9683:function(e,t,n){"use strict";var a=n(1253),r=n(2122),l=n(7294),i=n(5505),o=n(4621),s=n(3604),c="table",d=l.forwardRef((function(e,t){var n=e.classes,o=e.className,d=e.component,u=void 0===d?c:d,p=e.padding,m=void 0===p?"default":p,f=e.size,h=void 0===f?"medium":f,g=e.stickyHeader,v=void 0!==g&&g,y=(0,a.Z)(e,["classes","className","component","padding","size","stickyHeader"]),Z=l.useMemo((function(){return{padding:m,size:h,stickyHeader:v}}),[m,h,v]);return l.createElement(s.Z.Provider,{value:Z},l.createElement(u,(0,r.Z)({role:u===c?null:"table",ref:t,className:(0,i.Z)(n.root,o,v&&n.stickyHeader)},y)))}));t.Z=(0,o.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},3604:function(e,t,n){"use strict";var a=n(7294).createContext();t.Z=a},8847:function(e,t,n){"use strict";var a=n(7294).createContext();t.Z=a},6300:function(e,t,n){"use strict";var a=n(2122),r=n(1253),l=n(7294),i=n(5505),o=n(4621),s=n(8847),c={variant:"body"},d="tbody",u=l.forwardRef((function(e,t){var n=e.classes,o=e.className,u=e.component,p=void 0===u?d:u,m=(0,r.Z)(e,["classes","className","component"]);return l.createElement(s.Z.Provider,{value:c},l.createElement(p,(0,a.Z)({className:(0,i.Z)(n.root,o),ref:t,role:p===d?null:"rowgroup"},m)))}));t.Z=(0,o.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},9400:function(e,t,n){"use strict";var a=n(1253),r=n(2122),l=n(7294),i=n(5505),o=n(4621),s=n(1664),c=n(7595),d=n(3604),u=n(8847),p=l.forwardRef((function(e,t){var n,o,c=e.align,p=void 0===c?"inherit":c,m=e.classes,f=e.className,h=e.component,g=e.padding,v=e.scope,y=e.size,Z=e.sortDirection,E=e.variant,b=(0,a.Z)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),w=l.useContext(d.Z),x=l.useContext(u.Z),k=x&&"head"===x.variant;h?(o=h,n=k?"columnheader":"cell"):o=k?"th":"td";var N=v;!N&&k&&(N="col");var C=g||(w&&w.padding?w.padding:"default"),T=y||(w&&w.size?w.size:"medium"),S=E||x&&x.variant,R=null;return Z&&(R="asc"===Z?"ascending":"descending"),l.createElement(o,(0,r.Z)({ref:t,className:(0,i.Z)(m.root,m[S],f,"inherit"!==p&&m["align".concat((0,s.Z)(p))],"default"!==C&&m["padding".concat((0,s.Z)(C))],"medium"!==T&&m["size".concat((0,s.Z)(T))],"head"===S&&w&&w.stickyHeader&&m.stickyHeader),"aria-sort":R,role:n,scope:N},b))}));t.Z=(0,o.Z)((function(e){return{root:(0,r.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?(0,c.$n)((0,c.U1)(e.palette.divider,1),.88):(0,c._j)((0,c.U1)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},8475:function(e,t,n){"use strict";var a=n(2122),r=n(1253),l=n(7294),i=n(5505),o=n(4621),s=l.forwardRef((function(e,t){var n=e.classes,o=e.className,s=e.component,c=void 0===s?"div":s,d=(0,r.Z)(e,["classes","className","component"]);return l.createElement(c,(0,a.Z)({ref:t,className:(0,i.Z)(n.root,o)},d))}));t.Z=(0,o.Z)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(s)},4093:function(e,t,n){"use strict";var a=n(2122),r=n(1253),l=n(7294),i=n(5505),o=n(4621),s=n(8847),c={variant:"head"},d="thead",u=l.forwardRef((function(e,t){var n=e.classes,o=e.className,u=e.component,p=void 0===u?d:u,m=(0,r.Z)(e,["classes","className","component"]);return l.createElement(s.Z.Provider,{value:c},l.createElement(p,(0,a.Z)({className:(0,i.Z)(n.root,o),ref:t,role:p===d?null:"rowgroup"},m)))}));t.Z=(0,o.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},9395:function(e,t,n){"use strict";var a=n(2122),r=n(1253),l=n(7294),i=n(5505),o=n(4621),s=n(8847),c=n(7595),d=l.forwardRef((function(e,t){var n=e.classes,o=e.className,c=e.component,d=void 0===c?"tr":c,u=e.hover,p=void 0!==u&&u,m=e.selected,f=void 0!==m&&m,h=(0,r.Z)(e,["classes","className","component","hover","selected"]),g=l.useContext(s.Z);return l.createElement(d,(0,a.Z)({ref:t,className:(0,i.Z)(n.root,o,g&&{head:n.head,footer:n.footer}[g.variant],p&&n.hover,f&&n.selected),role:"tr"===d?null:"row"},h))}));t.Z=(0,o.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,c.U1)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},8091:function(e,t,n){"use strict";t.Z=c;var a=l(n(7294)),r=l(n(5697));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}c.propTypes={tag:r.default.string,hide:r.default.bool,show:r.default.bool,if:r.default.bool},c.defaultProps={tag:"span"};var o=Object.keys(c.propTypes);function s(e){return null!=e}function c(e){if(!1===e.if)return null;var t={};(function(e){return s(e.show)?!e.show:!!s(e.hide)&&e.hide})(e)&&(t.display="none");var n=e.tag,r=function(e){var t=Object.assign({},e);return o.forEach((function(e){e in t&&delete t[e]})),t}(e);return a.default.createElement(n,i({style:t},r))}},6892:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var a=n(2137),r=n(7757),l=n.n(r),i=n(7294),o=n(7627),s=n(2112),c=n(8475),d=n(9683),u=n(4093),p=n(9395),m=n(9400),f=n(6300),h=n(7606),g=n(1788),v=n(8091),y=function(e){function t(){var t;return(t=e.call(this)||this).state={show:!1},t}(0,g.Z)(t,e);var n=t.prototype;return n.handleClick=function(){this.setState({show:!this.state.show})},n.render=function(){var e=this;return i.createElement("div",{onClick:function(){return e.handleClick()},onKeyDown:function(){return e.handleClick()},role:"button",tabIndex:"0"},i.createElement("span",null,i.createElement(h.G,{icon:["fas","caret-right"],style:{marginRight:"3px"}}),this.state.show?"":this.props.title),i.createElement(v.Z,{show:this.state.show},this.props.content))},t}(i.Component),Z=n(5444),E=n(3964),b=n.n(E),w=(0,s.Z)(c.Z)({margin:"0 auto",maxWidth:"1366px",paddingBottom:"1em",fontSize:"1rem !important"}),x=(0,o.Z)((function(e){return{mobileSchedule:{display:"none"},panel:{textAlign:"left","& .name":{fontSize:"larger",marginTop:"7px",fontWeight:"600"},"& .time":{},"& .panelists":{paddingBottom:".5em"}},description:{paddingTop:".5em",whiteSpace:"pre-line"},desktopPanel:{fontSize:"1rem"},"@media (max-width: 799px)":{mobileSchedule:{display:"block","& h3":{margin:"8px 0 0 0"}},desktopSchedule:{display:"none"}}}}));function k(e){return new Date(e).toLocaleTimeString([],{timeStyle:"short",timeZone:"America/Los_Angeles"})}var N=function(e){var t=e.dayOfWeek,n=(0,Z.useStaticQuery)("1087326582").site.siteMetadata.shortDates,r=n.substring(0,n.indexOf("-"))+n.substring(n.indexOf(", ")+1),o=b()(r,"MMM D, YYYY");"sunday"===t.toLowerCase()&&(t=7),o.day(t);var s=o.format("YYYY-MM-DD"),c=x(),g=(0,i.useState)({loading:!0}),v=g[0],E=g[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://nw-idolfest-webstuff.s3.amazonaws.com/schedule/schedule.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,E(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),E({error:!0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();v.loading&&e()})),v.loading?i.createElement("h3",null,i.createElement("em",null,"Loading...")):v.error?i.createElement("h3",null,i.createElement("em",null,"Loading schedule failed. Please refresh the page!")):i.createElement(i.Fragment,null,i.createElement(h.G,{icon:["fas","star"]})," = special guest panel",Object.entries(v.times).map((function(e){var t=e[0],n=e[1];return t.split("T")[0]!==s?null:i.createElement("div",{className:c.mobileSchedule},i.createElement("h3",null,k(t)),n.map((function(e){return i.createElement("div",{className:c.panel,key:e.id},i.createElement("div",{className:"name"},e.isGuest?i.createElement(i.Fragment,null,i.createElement(h.G,{icon:["fas","star"]}),i.createElement("span",null,"  ")):null," ",e.title),i.createElement("div",{className:"room"},"Room: ",e.room),i.createElement("div",{className:"time"},"Time: ",k(e.startTime)," – ",k(e.endTime)),e.panelists?i.createElement("div",null,i.createElement("span",{className:"panelists"},"Panelists"),": ",e.panelists):null,e.description?i.createElement("div",{className:c.description},i.createElement("span",null,i.createElement(y,{title:e.description.substring(0,e.description.lastIndexOf(" ",50))+"…",content:e.description}))):null)})),i.createElement("hr",null))})),i.createElement("div",{className:c.desktopSchedule},i.createElement(i.Fragment,null,i.createElement(w,null,i.createElement(d.Z,{"aria-label":"simple table"},i.createElement(u.Z,{style:{textTransform:"uppercase"}},i.createElement(p.Z,null,i.createElement(m.Z,null,"Time"),i.createElement(m.Z,null,"Room"),i.createElement(m.Z,null,"Panel"),i.createElement(m.Z,null,"Description"))),i.createElement(f.Z,null,Object.entries(v.times).map((function(e){var t=e[0],n=e[1];return t.split("T")[0]!==s?null:n.map((function(e){return i.createElement(p.Z,{key:e.title},i.createElement(m.Z,{className:c.desktopPanel,width:"10%",style:{minWidth:"100px",whiteSpace:"nowrap"}},k(e.startTime),"-",k(e.endTime)),i.createElement(m.Z,{className:c.desktopPanel,width:"10%"},e.room),i.createElement(m.Z,{className:c.desktopPanel,width:"25%",component:"th",scope:"panel"},e.isGuest?i.createElement(i.Fragment,null,i.createElement(h.G,{icon:["fas","star"]}),i.createElement("span",null,"  ")):null,""+e.title),i.createElement(m.Z,{className:c.desktopPanel},i.createElement("div",{className:c.description},e.description),e.panelists?i.createElement(i.Fragment,null,i.createElement("br",null),i.createElement("br",null)," ",i.createElement("i",null,"Panelists: ",e.panelists)):null))}))}))))))))}}}]);
//# sourceMappingURL=0adcef5dbb75830e7c13f461022358c7437a6ba3-6935603b9ce1874f246d.js.map