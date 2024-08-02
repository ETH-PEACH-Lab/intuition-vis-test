"use strict";(self.webpackChunkonsenui_v2_react_minimum=self.webpackChunkonsenui_v2_react_minimum||[]).push([[4683],{60803:(e,t,a)=>{function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a(6009).K2)(i,"populateCommonDb")},84683:(e,t,a)=>{a.d(t,{diagram:()=>b});var i=a(60803),n=a(63084),l=(a(62244),a(48952),a(46808),a(31698),a(38390),a(329),a(80389)),r=(a(1265),a(33615),a(40057)),s=(a(25070),a(772)),o=(a(8605),a(6009)),c=s.UI.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,u=p.showData,g=structuredClone(c),m=(0,o.K2)((()=>structuredClone(g)),"getConfig"),h=(0,o.K2)((()=>{d=new Map,u=p.showData,(0,s.IU)()}),"clear"),f=(0,o.K2)((({label:e,value:t})=>{d.has(e)||(d.set(e,t),s.Rm.debug(`added new section: ${e}, with value: ${t}`))}),"addSection"),S=(0,o.K2)((()=>d),"getSections"),x=(0,o.K2)((e=>{u=e}),"setShowData"),w=(0,o.K2)((()=>u),"getShowData"),D={getConfig:m,clear:h,setDiagramTitle:s.ke,getDiagramTitle:s.ab,setAccTitle:s.SV,getAccTitle:s.iN,setAccDescription:s.EI,getAccDescription:s.m7,addSection:f,getSections:S,setShowData:x,getShowData:w},T=(0,o.K2)(((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)}),"populateDb"),$={parse:async e=>{const t=await(0,n.q)("pie",e);s.Rm.debug(t),T(t,D)}},y=(0,o.K2)((e=>`\n  .pieCircle{\n    stroke: ${e.pieStrokeColor};\n    stroke-width : ${e.pieStrokeWidth};\n    opacity : ${e.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${e.pieOuterStrokeColor};\n    stroke-width: ${e.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${e.pieTitleTextSize};\n    fill: ${e.pieTitleTextColor};\n    font-family: ${e.fontFamily};\n  }\n  .slice {\n    font-family: ${e.fontFamily};\n    fill: ${e.pieSectionTextColor};\n    font-size:${e.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${e.pieLegendTextColor};\n    font-family: ${e.fontFamily};\n    font-size: ${e.pieLegendTextSize};\n  }\n`),"getStyles"),C=(0,o.K2)((e=>{const t=[...e.entries()].map((e=>({label:e[0],value:e[1]}))).sort(((e,t)=>t.value-e.value));return(0,s.f2)().value((e=>e.value))(t)}),"createPieArcs"),b={parser:$,db:D,renderer:{draw:(0,o.K2)(((e,t,a,i)=>{s.Rm.debug("rendering pie chart\n"+e);const n=i.db,o=(0,s.D7)(),c=(0,r.$t)(n.getConfig(),o.pie),p=(0,l.D)(t),d=p.append("g");d.attr("transform","translate(225,225)");const{themeVariables:u}=o;let[g]=(0,r.I5)(u.pieOuterStrokeWidth);g??=2;const m=c.textPosition,h=Math.min(450,450)/2-40,f=(0,s.zp)().innerRadius(0).outerRadius(h),S=(0,s.zp)().innerRadius(h*m).outerRadius(h*m);d.append("circle").attr("cx",0).attr("cy",0).attr("r",h+g/2).attr("class","pieOuterCircle");const x=n.getSections(),w=C(x),D=[u.pie1,u.pie2,u.pie3,u.pie4,u.pie5,u.pie6,u.pie7,u.pie8,u.pie9,u.pie10,u.pie11,u.pie12],T=(0,s.IE)(D);d.selectAll("mySlices").data(w).enter().append("path").attr("d",f).attr("fill",(e=>T(e.data.label))).attr("class","pieCircle");let $=0;x.forEach((e=>{$+=e})),d.selectAll("mySlices").data(w).enter().append("text").text((e=>(e.data.value/$*100).toFixed(0)+"%")).attr("transform",(e=>"translate("+S.centroid(e)+")")).style("text-anchor","middle").attr("class","slice"),d.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const y=d.selectAll(".legend").data(T.domain()).enter().append("g").attr("class","legend").attr("transform",((e,t)=>"translate(216,"+(22*t-22*T.domain().length/2)+")"));y.append("rect").attr("width",18).attr("height",18).style("fill",T).style("stroke",T),y.data(w).append("text").attr("x",22).attr("y",14).text((e=>{const{label:t,value:a}=e.data;return n.getShowData()?`${t} [${a}]`:t}));const b=512+Math.max(...y.selectAll("text").nodes().map((e=>e?.getBoundingClientRect().width??0)));p.attr("viewBox",`0 0 ${b} 450`),(0,s.a$)(p,450,b,c.useMaxWidth)}),"draw")},styles:y}}}]);