"use strict";(self.webpackChunkonsenui_v2_react_minimum=self.webpackChunkonsenui_v2_react_minimum||[]).push([[1894],{21894:(e,t,n)=>{n.d(t,{X:()=>k});var r=n(7100),i=n(56392),a=n(73723),d=n(54413),o=n(1265),s=n(64443),c=n(6009);function l(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:h(e),edges:g(e)};return(0,o.nT)(e.graph())||(t.value=(0,o.m_)(e.graph())),t}function h(e){return(0,o.LG)(e.nodes(),(function(t){var n=e.node(t),r=e.parent(t),i={v:t};return(0,o.nT)(n)||(i.value=n),(0,o.nT)(r)||(i.parent=r),i}))}function g(e){return(0,o.LG)(e.edges(),(function(t){var n=e.edge(t),r={v:t.v,w:t.w};return(0,o.nT)(t.name)||(r.name=t.name),(0,o.nT)(n)||(r.value=n),r}))}(0,c.K2)(l,"write"),(0,c.K2)(h,"writeNodes"),(0,c.K2)(g,"writeEdges");var f={},u={},m={},w=(0,c.K2)((()=>{u={},m={},f={}}),"clear"),p=(0,c.K2)(((e,t)=>(s.Rm.trace("In isDescendant",t," ",e," = ",u[t].includes(e)),!!u[t].includes(e))),"isDescendant"),R=(0,c.K2)(((e,t)=>(s.Rm.info("Descendants of ",t," is ",u[t]),s.Rm.info("Edge is ",e),e.v!==t&&e.w!==t&&(u[t]?u[t].includes(e.v)||p(e.v,t)||p(e.w,t)||u[t].includes(e.w):(s.Rm.debug("Tilt, ",t,",not in descendants"),!1)))),"edgeInCluster"),v=(0,c.K2)(((e,t,n,r)=>{s.Rm.warn("Copying children of ",e,"root",r,"data",t.node(e),r);const i=t.children(e)||[];e!==r&&i.push(e),s.Rm.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(t.children(i).length>0)v(i,t,n,r);else{const a=t.node(i);s.Rm.info("cp ",i," to ",r," with parent ",e),n.setNode(i,a),r!==t.parent(i)&&(s.Rm.warn("Setting parent",i,t.parent(i)),n.setParent(i,t.parent(i))),e!==r&&i!==e?(s.Rm.debug("Setting parent",i,e),n.setParent(i,e)):(s.Rm.info("In copy ",e,"root",r,"data",t.node(e),r),s.Rm.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));const d=t.edges(i);s.Rm.debug("Copying Edges",d),d.forEach((i=>{s.Rm.info("Edge",i);const a=t.edge(i.v,i.w,i.name);s.Rm.info("Edge data",a,r);try{R(i,r)?(s.Rm.info("Copying as ",i.v,i.w,a,i.name),n.setEdge(i.v,i.w,a,i.name),s.Rm.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):s.Rm.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(e){s.Rm.error(e)}}))}s.Rm.debug("Removing node",i),t.removeNode(i)}))}),"copy"),y=(0,c.K2)(((e,t)=>{const n=t.children(e);let r=[...n];for(const i of n)m[i]=e,r=[...r,...y(i,t)];return r}),"extractDescendants"),x=(0,c.K2)(((e,t)=>{s.Rm.trace("Searching",e);const n=t.children(e);if(s.Rm.trace("Searching children of id ",e,n),n.length<1)return s.Rm.trace("This is a valid node",e),e;for(const r of n){const n=x(r,t);if(n)return s.Rm.trace("Found replacement for",e," => ",n),n}}),"findNonClusterChild"),b=(0,c.K2)((e=>f[e]&&f[e].externalConnections&&f[e]?f[e].id:e),"getAnchorId"),C=(0,c.K2)(((e,t)=>{if(!e||t>10)s.Rm.debug("Opting out, no graph ");else{s.Rm.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(s.Rm.warn("Cluster identified",t," Replacement id in edges: ",x(t,e)),u[t]=y(t,e),f[t]={id:x(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){const n=e.children(t),r=e.edges();n.length>0?(s.Rm.debug("Cluster identified",t,u),r.forEach((e=>{e.v!==t&&e.w!==t&&p(e.v,t)^p(e.w,t)&&(s.Rm.warn("Edge: ",e," leaves cluster ",t),s.Rm.warn("Descendants of XXX ",t,": ",u[t]),f[t].externalConnections=!0)}))):s.Rm.debug("Not a cluster ",t,u)}));for(let t of Object.keys(f)){const n=f[t].id,r=e.parent(n);r!==t&&f[r]&&!f[r].externalConnections&&(f[t].id=r)}e.edges().forEach((function(t){const n=e.edge(t);s.Rm.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),s.Rm.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let r=t.v,i=t.w;if(s.Rm.warn("Fix XXX",f,"ids:",t.v,t.w,"Translating: ",f[t.v]," --- ",f[t.w]),f[t.v]&&f[t.w]&&f[t.v]===f[t.w]){s.Rm.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),s.Rm.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=b(t.v),i=b(t.w),e.removeEdge(t.v,t.w,t.name);const a=t.w+"---"+t.v;e.setNode(a,{domId:a,id:a,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const d=structuredClone(n),o=structuredClone(n);d.label="",d.arrowTypeEnd="none",o.label="",d.fromCluster=t.v,o.toCluster=t.v,e.setEdge(r,a,d,t.name+"-cyclic-special"),e.setEdge(a,i,o,t.name+"-cyclic-special")}else if(f[t.v]||f[t.w]){if(s.Rm.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),r=b(t.v),i=b(t.w),e.removeEdge(t.v,t.w,t.name),r!==t.v){const i=e.parent(r);f[i].externalConnections=!0,n.fromCluster=t.v}if(i!==t.w){const r=e.parent(i);f[r].externalConnections=!0,n.toCluster=t.w}s.Rm.warn("Fix Replacing with XXX",r,i,t.name),e.setEdge(r,i,n,t.name)}})),s.Rm.warn("Adjusted Graph",l(e)),N(e,0),s.Rm.trace(f)}}),"adjustClustersAndEdges"),N=(0,c.K2)(((e,t)=>{if(s.Rm.warn("extractor - ",t,l(e),e.children("D")),t>10)return void s.Rm.error("Bailing out");let n=e.nodes(),r=!1;for(const t of n){const n=e.children(t);r=r||n.length>0}if(r){s.Rm.debug("Nodes = ",n,t);for(const r of n)if(s.Rm.debug("Extracting node",r,f,f[r]&&!f[r].externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",t),f[r])if(!f[r].externalConnections&&e.children(r)&&e.children(r).length>0){s.Rm.warn("Cluster without external connections, without a parent and with children",r,t);let n="TB"===e.graph().rankdir?"LR":"TB";f[r]&&f[r].clusterData&&f[r].clusterData.dir&&(n=f[r].clusterData.dir,s.Rm.warn("Fixing dir",f[r].clusterData.dir,n));const i=new d.T({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));s.Rm.warn("Old graph before copy",l(e)),v(r,e,i,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:f[r].clusterData,labelText:f[r].labelText,graph:i}),s.Rm.warn("New graph after copy node: (",r,")",l(i)),s.Rm.debug("Old graph after copy",l(e))}else s.Rm.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!f[r].externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),t),s.Rm.debug(f);else s.Rm.debug("Not a cluster",r,t);n=e.nodes(),s.Rm.warn("New list of nodes",n);for(const r of n){const n=e.node(r);s.Rm.warn(" Now next level",r,n),n.clusterNode&&N(n.graph,t+1)}}else s.Rm.debug("Done, no node has children",e.nodes())}),"extractor"),E=(0,c.K2)(((e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach((t=>{const r=e.children(t),i=E(e,r);n=[...n,...i]})),n}),"sorter"),X=(0,c.K2)((e=>E(e,e.children())),"sortNodesByHierarchy"),T=(0,c.K2)(((e,t)=>{s.Rm.info("Creating subgraph rect for ",t.id,t);const n=(0,s.D7)(),a=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),d=a.insert("rect",":first-child"),o=(0,s._3)(n.flowchart.htmlLabels),c=a.insert("g").attr("class","cluster-label"),l="markdown"===t.labelType?(0,i.GZ)(c,t.labelText,{style:t.labelStyle,useHtmlLabels:o},n):c.node().appendChild((0,r.DA)(t.labelText,t.labelStyle,void 0,!0));let h=l.getBBox();if((0,s._3)(n.flowchart.htmlLabels)){const e=l.children[0],t=(0,s.df)(l);h=e.getBoundingClientRect(),t.attr("width",h.width),t.attr("height",h.height)}const g=0*t.padding,f=g/2,u=t.width<=h.width+g?h.width+g:t.width;t.width<=h.width+g?t.diff=(h.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,s.Rm.trace("Data ",t,JSON.stringify(t)),d.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-u/2).attr("y",t.y-t.height/2-f).attr("width",u).attr("height",t.height+g);const{subGraphTitleTopMargin:m}=(0,r.Oi)(n);o?c.attr("transform",`translate(${t.x-h.width/2}, ${t.y-t.height/2+m})`):c.attr("transform",`translate(${t.x}, ${t.y-t.height/2+m})`);const w=d.node().getBBox();return t.width=w.width,t.height=w.height,t.intersect=function(e){return(0,r.nM)(t,e)},a}),"rect"),D=(0,c.K2)(((e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),i=n.insert("rect",":first-child"),a=0*t.padding,d=a/2;i.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2-d).attr("width",t.width+a).attr("height",t.height+a).attr("fill","none");const o=i.node().getBBox();return t.width=o.width,t.height=o.height,t.intersect=function(e){return(0,r.nM)(t,e)},n}),"noteGroup"),S={rect:T,roundedWithTitle:(0,c.K2)(((e,t)=>{const n=(0,s.D7)(),i=e.insert("g").attr("class",t.classes).attr("id",t.id),a=i.insert("rect",":first-child"),d=i.insert("g").attr("class","cluster-label"),o=i.append("rect"),c=d.node().appendChild((0,r.DA)(t.labelText,t.labelStyle,void 0,!0));let l=c.getBBox();if((0,s._3)(n.flowchart.htmlLabels)){const e=c.children[0],t=(0,s.df)(c);l=e.getBoundingClientRect(),t.attr("width",l.width),t.attr("height",l.height)}l=c.getBBox();const h=0*t.padding,g=h/2,f=t.width<=l.width+t.padding?l.width+t.padding:t.width;t.width<=l.width+t.padding?t.diff=(l.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,a.attr("class","outer").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g).attr("width",f+h).attr("height",t.height+h),o.attr("class","inner").attr("x",t.x-f/2-g).attr("y",t.y-t.height/2-g+l.height-1).attr("width",f+h).attr("height",t.height+h-l.height-3);const{subGraphTitleTopMargin:u}=(0,r.Oi)(n);d.attr("transform",`translate(${t.x-l.width/2}, ${t.y-t.height/2-t.padding/3+((0,s._3)(n.flowchart.htmlLabels)?5:3)+u})`);const m=a.node().getBBox();return t.height=m.height,t.intersect=function(e){return(0,r.nM)(t,e)},i}),"roundedWithTitle"),noteGroup:D,divider:(0,c.K2)(((e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),i=n.insert("rect",":first-child"),a=0*t.padding,d=a/2;i.attr("class","divider").attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2).attr("width",t.width+a).attr("height",t.height+a);const o=i.node().getBBox();return t.width=o.width,t.height=o.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,r.nM)(t,e)},n}),"divider")},K={},O=(0,c.K2)(((e,t)=>{s.Rm.trace("Inserting cluster");const n=t.shape||"rect";K[t.id]=S[n](e,t)}),"insertCluster"),B=(0,c.K2)((()=>{K={}}),"clear"),G=(0,c.K2)((async(e,t,n,i,d,o)=>{s.Rm.info("Graph in recursive render: XXX",l(t),d);const c=t.graph().rankdir;s.Rm.trace("Dir in recursive render - dir:",c);const h=e.insert("g").attr("class","root");t.nodes()?s.Rm.info("Recursive render XXX",t.nodes()):s.Rm.info("No nodes found for",t),t.edges().length>0&&s.Rm.trace("Recursive edges",t.edge(t.edges()[0]));const g=h.insert("g").attr("class","clusters"),u=h.insert("g").attr("class","edgePaths"),m=h.insert("g").attr("class","edgeLabels"),w=h.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const a=t.node(e);if(void 0!==d){const n=JSON.parse(JSON.stringify(d.clusterData));s.Rm.info("Setting data for cluster XXX (",e,") ",n,d),t.setNode(d.id,n),t.parent(e)||(s.Rm.trace("Setting parent",e,d.id),t.setParent(e,d.id,n))}if(s.Rm.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),a&&a.clusterNode){s.Rm.info("Cluster identified",e,a.width,t.node(e));const{ranksep:d,nodesep:c}=t.graph();a.graph.setGraph({...a.graph.graph(),ranksep:d,nodesep:c});const l=await G(w,a.graph,n,i,t.node(e),o),h=l.elem;(0,r.lC)(a,h),a.diff=l.diff||0,s.Rm.info("Node bounds (abc123)",e,a,a.width,a.x,a.y),(0,r.U7)(h,a),s.Rm.warn("Recursive render complete ",h,a)}else t.children(e).length>0?(s.Rm.info("Cluster - the non recursive path XXX",e,a.id,a,t),s.Rm.info(x(a.id,t)),f[a.id]={id:x(a.id,t),node:a}):(s.Rm.info("Node - the non recursive path",e,a.id,a),await(0,r.on)(w,t.node(e),c))}))),t.edges().forEach((function(e){const n=t.edge(e.v,e.w,e.name);s.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),s.Rm.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),s.Rm.info("Fix",f,"ids:",e.v,e.w,"Translating: ",f[e.v],f[e.w]),(0,r.jP)(m,n)})),t.edges().forEach((function(e){s.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),s.Rm.info("#############################################"),s.Rm.info("###                Layout                 ###"),s.Rm.info("#############################################"),s.Rm.info(t),(0,a.Z)(t),s.Rm.info("Graph after layout:",l(t));let p=0;const{subGraphTitleTotalMargin:R}=(0,r.Oi)(o);return X(t).forEach((function(e){const n=t.node(e);s.Rm.info("Position "+e+": "+JSON.stringify(t.node(e))),s.Rm.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?(n.y+=R,(0,r.U_)(n)):t.children(e).length>0?(n.height+=R,O(g,n),f[n.id].node=n):(n.y+=R/2,(0,r.U_)(n))})),t.edges().forEach((function(e){const a=t.edge(e);s.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(a),a),a.points.forEach((e=>e.y+=R/2));const d=(0,r.Jo)(u,e,a,f,n,t,i);(0,r.T_)(a,d)})),t.nodes().forEach((function(e){const n=t.node(e);s.Rm.info(e,n.type,n.diff),"group"===n.type&&(p=n.diff)})),{elem:h,diff:p}}),"recursiveRender"),k=(0,c.K2)((async(e,t,n,i,a)=>{(0,r.g0)(e,n,i,a),(0,r.IU)(),(0,r.gh)(),B(),w(),s.Rm.warn("Graph at first:",JSON.stringify(l(t))),C(t),s.Rm.warn("Graph after:",JSON.stringify(l(t)));const d=(0,s.D7)();await G(e,t,i,a,void 0,d)}),"render")}}]);