"use strict";(self.webpackChunkonsenui_v2_react_minimum=self.webpackChunkonsenui_v2_react_minimum||[]).push([[8501],{803:(t,e,a)=>{function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{S:()=>r}),(0,a(6009).K2)(r,"populateCommonDb")},8501:(t,e,a)=>{a.d(e,{diagram:()=>w});var r=a(803),n=a(6128),l=(a(975),a(2520),a(3769),a(8223),a(7333),a(77),a(389)),i=(a(1265),a(3615),a(57)),o=(a(5070),a(772)),c=(a(8605),a(6009)),s={slides:[]},d=structuredClone(s),p=o.UI.array,g=(0,c.K2)((()=>(0,i.$t)({...p,...(0,o.zj)().array})),"getConfig"),u=(0,c.K2)((()=>d.slides),"getSlides"),x={addSlide:(0,c.K2)((t=>{d.slides.push(t)}),"addSlide"),getSlides:u,getConfig:g,clear:(0,c.K2)((()=>{(0,o.IU)(),d=structuredClone(s)}),"clear"),setAccTitle:o.SV,getAccTitle:o.iN,setDiagramTitle:o.ke,getDiagramTitle:o.ab,getAccDescription:o.m7,setAccDescription:o.EI},f=(0,c.K2)((t=>{(0,r.S)(t,x);for(const e of t.pages){const t=e.elements.map((t=>({value:t.value,arrow:"arrow"===t.arrow,context:t.context,color:t.color})));x.addSlide({showIndex:!!e.showIndex,elements:t})}}),"populate"),y={parse:async t=>{const e=await(0,n.q)("testslides",t);o.Rm.debug(e),f(e)}},m=(0,c.K2)(((t,e,a,r)=>{const n=r.db,i=n.getConfig(),s=n.getSlides(),d=n.getDiagramTitle(),p=(0,l.D)(e),g=(0,c.K2)((t=>{p.selectAll("g.page").attr("style","display: none"),p.select(`#page${t}`).attr("style","display: inline"),p.select("#prevButton").attr("fill",t>0?"#007bff":"#c0c0c0"),p.select("#nextButton").attr("fill",t<s.length-1?"#007bff":"#c0c0c0"),p.select("#pageIndicator").text(`${t+1} / ${s.length}`)}),"renderPage"),u=(0,c.K2)(((t,e)=>{const a=t.append("g").attr("class","navigation-buttons"),r=a.append("g").attr("id","prevButtonGroup").attr("cursor","pointer");r.append("rect").attr("id","prevButton").attr("x",180).attr("y",450).attr("width",60).attr("height",30).attr("fill","#c0c0c0"),r.append("text").text("<").attr("x",210).attr("y",470).attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","middle");const n=a.append("g").attr("id","nextButtonGroup").attr("cursor","pointer");n.append("rect").attr("id","nextButton").attr("x",360).attr("y",450).attr("width",60).attr("height",30).attr("fill","#007bff"),n.append("text").text(">").attr("x",390).attr("y",470).attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","middle");const l=a.append("g").attr("id","playButtonGroup").attr("cursor","pointer");l.append("rect").attr("id","playButton").attr("x",270).attr("y",450).attr("width",60).attr("height",30).attr("fill","#007bff"),l.append("text").text("▶").attr("x",300).attr("y",470).attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","middle"),a.append("text").attr("id","pageIndicator").attr("x",550).attr("y",470).attr("fill","black").attr("text-anchor","middle").attr("alignment-baseline","middle").text(`1 / ${e}`)}),"addNavigationButtons"),x=(0,c.K2)(((t,e,a)=>{const r=t.append("g").attr("id",`page${a}`).attr("class","page").attr("style",0===a?"display: inline":"display: none");d&&r.append("text").text(d).attr("x",300).attr("y",25).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","arrayTitle");for(const[t,a]of e.elements.entries())b(r,a,t,i,e.showIndex)}),"drawSlide");p.attr("viewBox","0 0 600 500"),(0,o.a$)(p,500,600,i.useMaxWidth),v(p),s.forEach(((t,e)=>{x(p,t,e)})),u(p,s.length),g(0);const f=`\n    const svg = document.getElementById('${e}');\n    let currentPage = 0;\n    const totalPages = ${s.length};\n    let playInterval = null;\n\n    function renderPage(pageIndex) {\n      const pages = svg.querySelectorAll('g.page');\n      pages.forEach(page => {\n        page.style.display = 'none';\n      });\n      svg.querySelector('#page' + pageIndex).style.display = 'inline';\n\n      const prevButton = svg.querySelector('#prevButton');\n      const nextButton = svg.querySelector('#nextButton');\n      \n      if (prevButton) prevButton.setAttribute('fill', pageIndex > 0 ? '#007bff' : '#c0c0c0');\n      if (nextButton) nextButton.setAttribute('fill', pageIndex < totalPages - 1 ? '#007bff' : '#c0c0c0');\n\n      // Update current page display\n      svg.querySelector('#pageIndicator').textContent = (pageIndex + 1) + ' / ' + totalPages;\n    }\n\n    svg.querySelector('#prevButtonGroup').addEventListener('click', function() {\n      if (currentPage > 0) {\n        currentPage -= 1;\n        renderPage(currentPage);\n      }\n    });\n\n    svg.querySelector('#nextButtonGroup').addEventListener('click', function() {\n      if (currentPage < totalPages - 1) {\n        currentPage += 1;\n        renderPage(currentPage);\n      }\n    });\n\n    svg.querySelector('#playButtonGroup').addEventListener('click', function() {\n      if (playInterval) {\n        clearInterval(playInterval);\n        playInterval = null;\n        svg.querySelector('#playButton').setAttribute('fill', '#007bff');\n        svg.querySelector('#playButton text').textContent = '▶';\n      } else {\n        playInterval = setInterval(() => {\n          if (currentPage < totalPages - 1) {\n            currentPage += 1;\n          } else {\n            currentPage = 0;\n          }\n          renderPage(currentPage);\n        }, 1000);\n        svg.querySelector('#playButton').setAttribute('fill', '#c0c0c0');\n        svg.querySelector('#playButton text').textContent = '❚❚';\n      }\n    });\n\n    renderPage(currentPage);\n  `;p.append("script").attr("type","text/ecmascript").text(f)}),"draw"),h=(0,c.K2)((t=>{switch(t){case"blue":return"rgba(0, 0, 255, 0.3)";case"green":return"rgba(0, 255, 0, 0.3)";case"red":return"rgba(255, 0, 0, 0.3)";default:return"none"}}),"getColor"),b=(0,c.K2)(((t,e,a,{elementColor:r,borderColor:n,borderWidth:l,labelColor:i,labelFontSize:o},c)=>{const s=t.append("g"),d=50*a+50,p=h(e.color);if(e.arrow){const t=60,a=90;s.append("line").attr("x1",d+20).attr("y1",t).attr("x2",d+20).attr("y2",a).attr("stroke","black").attr("marker-end","url(#arrowhead)"),e.context&&s.append("text").attr("x",d+20).attr("y",t-10).attr("fill",i).attr("font-size",o).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","arrowContext").text(e.context)}s.append("rect").attr("x",d).attr("y",100).attr("width",40).attr("height",40).style("fill",p).attr("stroke",n).attr("stroke-width",l).attr("class","arrayElement"),s.append("text").attr("x",d+20).attr("y",120).attr("fill",i).attr("font-size",o).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","elementLabel").text(e.value),c&&s.append("text").attr("x",d+20).attr("y",160).attr("fill",i).attr("font-size",25).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","indexLabel").text(a)}),"drawElement"),v=(0,c.K2)((t=>{t.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","0 0 10 10").attr("refX","5").attr("refY","5").attr("markerWidth","6").attr("markerHeight","6").attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("fill","black")}),"defineArrowhead"),w={parser:y,db:x,renderer:{draw:m},styles:(0,c.K2)(((t={})=>(o.Rm.debug({options:t}),`\n    .element {\n      font-size: ${t.array?.elementFontSize??"10px"};\n      fill: ${t.array?.valueColor??"black"};\n    }\n    .element.index {\n      fill: ${t.array?.indexColor??"black"};\n    }\n    .element {\n      stroke: ${t.array?.elementStrokeColor??"black"};\n      stroke-width: ${t.array?.elementStrokeWidth??"1"};\n      fill: ${t.array?.elementFillColor??"#efefef"};\n    }\n  `)),"styles")}}}]);