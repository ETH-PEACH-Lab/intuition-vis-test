"use strict";(self.webpackChunkonsenui_v2_react_minimum=self.webpackChunkonsenui_v2_react_minimum||[]).push([[8659],{60803:(t,e,a)=>{function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{S:()=>r}),(0,a(6009).K2)(r,"populateCommonDb")},28659:(t,e,a)=>{a.d(e,{diagram:()=>B});var r=a(60803),n=a(27232),l=(a(15073),a(71746),a(66279),a(67203),a(35861),a(17036)),o=(a(1265),a(33615),a(41981)),i=(a(25070),a(64443)),s=(a(8605),a(6009)),c=[],d=[...c],p=i.UI.visslides,g=(0,s.K2)((()=>(0,o.$t)({...p,...(0,i.zj)().visslides})),"getConfig"),u={getPages:(0,s.K2)((()=>d),"getPages"),addPage:(0,s.K2)((t=>{d.push(t)}),"addPage"),getConfig:g,clear:(0,s.K2)((()=>{(0,i.IU)(),d=[...c]}),"clear"),setAccTitle:i.SV,getAccTitle:i.iN,setDiagramTitle:i.ke,getDiagramTitle:i.ab,getAccDescription:i.m7,setAccDescription:i.EI},x=(0,s.K2)((t=>{(0,r.S)(t,u);for(const e of t.pages){const t=e.subDiagrams.map((t=>"elements"in t?{elements:t.elements.map((t=>({value:t.value,arrow:!!t.arrow||void 0,context:t.context,color:t.color}))),showIndex:!!t.showIndex||void 0}:{rows:t.rows.map((t=>({elements:t.elements.map((t=>({value:t.value,color:t.color})))})))}));u.addPage({subDiagrams:t})}}),"populate"),f={parse:async t=>{const e=await(0,n.q)("visslides",t);i.Rm.debug(e),x(e)}},m=(0,s.K2)(((t,e,a,r)=>{const n=t.append("g").attr("transform",`translate(0, ${a})`);e.elements.forEach(((t,a)=>{y(n,t,a,r,e.showIndex||!1)}))}),"drawArrayDiagram"),y=(0,s.K2)(((t,e,a,{elementColor:r,borderColor:n,borderWidth:l,labelColor:o,labelFontSize:i},s)=>{const c=t.append("g"),d=50*a+50,p=b(e.color);if(e.arrow){const t=10,a=40;c.append("line").attr("x1",d+20).attr("y1",t).attr("x2",d+20).attr("y2",a).attr("stroke","black").attr("marker-end","url(#arrowhead)"),e.context&&c.append("text").attr("x",d+20).attr("y",t-10).attr("fill",o).attr("font-size",i).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","arrowContext").text(e.context)}c.append("rect").attr("x",d).attr("y",50).attr("width",40).attr("height",40).style("fill",p).attr("stroke","#191970").attr("stroke-width","2px").attr("class","arrayElement"),c.append("text").attr("x",d+20).attr("y",70).attr("fill",o).attr("font-size",i).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","elementLabel").text(e.value),s&&c.append("text").attr("x",d+20).attr("y",110).attr("fill",o).attr("font-size",25).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","indexLabel").text(a)}),"drawElement"),b=(0,s.K2)((t=>{switch(t){case"blue":return"rgba(0, 0, 255, 0.3)";case"green":return"rgba(0, 255, 0, 0.3)";case"red":return"rgba(255, 0, 0, 0.3)";default:return"none"}}),"getColor"),v=(0,s.K2)(((t,e,a,r)=>{const n=t.append("g").attr("transform",`translate(0, ${a})`);e.rows.forEach(((t,e)=>{t.elements.forEach(((t,a)=>{h(n,t,e,a,r)}))}))}),"drawMatrixDiagram"),h=(0,s.K2)(((t,e,a,r,{borderColor:n,borderWidth:l,labelColor:o,labelFontSize:i})=>{const s=t.append("g"),c=50*r+50,d=50*a+50,p=w(e.color);s.append("rect").attr("x",c).attr("y",d).attr("width",48).attr("height",48).style("fill",p).attr("stroke","#191970").attr("stroke-width","1.5px").attr("class","matrixElement"),s.append("text").attr("x",c+20).attr("y",d+20).attr("fill",o).attr("font-size",i).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","elementLabel").text(e.value.toString())}),"drawElement"),w=(0,s.K2)((t=>{switch(t){case"blue":return"rgba(0, 0, 255, 0.3)";case"green":return"rgba(0, 255, 0, 0.3)";case"red":return"rgba(255, 0, 0, 0.3)";default:return"none"}}),"getColor"),B={parser:f,db:u,renderer:{draw:(0,s.K2)(((t,e,a,r)=>{const n=r.db,o=n.getConfig(),c=n.getPages(),d=n.getDiagramTitle(),p=(0,l.D)(e);let g=0,u=null;const x=(0,s.K2)((t=>{p.selectAll("g.page").attr("display","none"),p.select(`#page${t}`).attr("display","inline"),p.select("#prevButton").attr("fill",t>0?"#007bff":"#c0c0c0"),p.select("#nextButton").attr("fill",t<c.length-1?"#007bff":"#c0c0c0"),p.select("#pageIndicator").text(`${t+1} / ${c.length}`)}),"renderPage"),f=(0,s.K2)(((t,e)=>{const a=t.append("g").attr("class","navigation-buttons"),r=a.append("g").attr("id","prevButtonGroup").attr("cursor","pointer");r.append("rect").attr("id","prevButton").attr("x",430).attr("y",740).attr("width",40).attr("height",20).attr("fill","#c0c0c0"),r.append("text").text("<").attr("x",450).attr("y",750).attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","middle");const n=a.append("g").attr("id","playButtonGroup").attr("cursor","pointer");n.append("rect").attr("id","playButton").attr("x",480).attr("y",740).attr("width",40).attr("height",20).attr("fill","#007bff"),n.append("text").text("▶").attr("x",500).attr("y",750).attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","middle");const l=a.append("g").attr("id","nextButtonGroup").attr("cursor","pointer");l.append("rect").attr("id","nextButton").attr("x",530).attr("y",740).attr("width",40).attr("height",20).attr("fill","#007bff"),l.append("text").text(">").attr("x",550).attr("y",750).attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","middle"),a.append("text").attr("id","pageIndicator").attr("x",950).attr("y",750).attr("fill","black").attr("text-anchor","middle").attr("alignment-baseline","middle").text(`1 / ${e}`),r.node()?.addEventListener("click",(()=>{g>0&&(g-=1,x(g))})),l.node()?.addEventListener("click",(()=>{g<e-1&&(g+=1,x(g))})),n.node()?.addEventListener("click",(()=>{u?(clearInterval(u),u=null,(0,i.df)("#playButton text").text("▶"),(0,i.df)("#playButton").attr("fill","#007bff")):(u=setInterval((()=>{g<e-1?g+=1:g=0,x(g)}),1e3),(0,i.df)("#playButton text").text("❚❚"),(0,i.df)("#playButton").attr("fill","#c0c0c0"))}))}),"addNavigationButtons"),y=(0,s.K2)(((t,e,a)=>{const r=t.append("g").attr("id",`page${a}`).attr("class","page").attr("display",0===a?"inline":"none");d&&r.append("text").text(d).attr("x",500).attr("y",25).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","pageTitle");let n=50;for(const t of e.subDiagrams)t.elements?(m(r,t,n,o),n+=100):(v(r,t,n,o),n+=200)}),"drawPage");p.attr("viewBox","0 0 1000 800"),(0,i.a$)(p,800,1e3,o.useMaxWidth),c.forEach(((t,e)=>{y(p,t,e)})),f(p,c.length),x(g);const b=`\n    (function() {\n      const svg = document.getElementById('${e}');\n      let currentPage = 0;\n      const totalPages = ${c.length};\n      let playInterval = null;\n\n      function renderPage(pageIndex) {\n        const pages = svg.querySelectorAll('g.page');\n        pages.forEach(page => {\n          page.style.display = 'none';\n        });\n        svg.querySelector('#page' + pageIndex).style.display = 'inline';\n\n        const prevButton = svg.querySelector('#prevButton');\n        const nextButton = svg.querySelector('#nextButton');\n        \n        if (prevButton) prevButton.setAttribute('fill', pageIndex > 0 ? '#007bff' : '#c0c0c0');\n        if (nextButton) nextButton.setAttribute('fill', pageIndex < totalPages - 1 ? '#007bff' : '#c0c0c0');\n\n        // Update current page display\n        svg.querySelector('#pageIndicator').textContent = (pageIndex + 1) + ' / ' + totalPages;\n      }\n\n      svg.querySelector('#prevButtonGroup').addEventListener('click', function() {\n        if (currentPage > 0) {\n          currentPage -= 1;\n          renderPage(currentPage);\n        }\n      });\n\n      svg.querySelector('#nextButtonGroup').addEventListener('click', function() {\n        if (currentPage < totalPages - 1) {\n          currentPage += 1;\n          renderPage(currentPage);\n        }\n      });\n\n      svg.querySelector('#playButtonGroup').addEventListener('click', function() {\n        if (playInterval) {\n          clearInterval(playInterval);\n          playInterval = null;\n          svg.querySelector('#playButton text').textContent = '▶';\n          svg.querySelector('#playButton').setAttribute('fill', '#007bff');\n        } else {\n          playInterval = setInterval(() => {\n            if (currentPage < totalPages - 1) {\n              currentPage += 1;\n            } else {\n              currentPage = 0;\n            }\n            renderPage(currentPage);\n          }, 1000);\n          svg.querySelector('#playButton text').textContent = '❚❚';\n          svg.querySelector('#playButton').setAttribute('fill', '#c0c0c0');\n        }\n      });\n\n      renderPage(currentPage);\n    })();\n  `;p.append("script").attr("type","text/javascript").text(b)}),"draw")},styles:(0,s.K2)(((t={})=>(i.Rm.debug({options:t}),`\n    .element {\n      font-size: ${t.array?.elementFontSize??"10px"};\n      fill: ${t.array?.valueColor??"black"};\n    }\n    .element.index {\n      fill: ${t.array?.indexColor??"black"};\n    }\n    .element {\n      stroke: ${t.array?.elementStrokeColor??"black"};\n      stroke-width: ${t.array?.elementStrokeWidth??"1"};\n      fill: ${t.array?.elementFillColor??"#efefef"};\n    }\n  `)),"styles")}}}]);