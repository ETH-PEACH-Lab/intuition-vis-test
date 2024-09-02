"use strict";(self.webpackChunkonsenui_v2_react_minimum=self.webpackChunkonsenui_v2_react_minimum||[]).push([[5033],{803:(t,e,a)=>{function r(t,e){t.accDescr&&e.setAccDescription?.(t.accDescr),t.accTitle&&e.setAccTitle?.(t.accTitle),t.title&&e.setDiagramTitle?.(t.title)}a.d(e,{S:()=>r}),(0,a(6009).K2)(r,"populateCommonDb")},5033:(t,e,a)=>{a.d(e,{diagram:()=>x});var r=a(803),n=a(6128),o=(a(975),a(2520),a(3769),a(8223),a(7333),a(77),a(389)),l=(a(1265),a(3615),a(57)),i=(a(5070),a(772)),c=(a(8605),a(6009)),s={packet:[]},d=structuredClone(s),k=i.UI.packet,p=(0,c.K2)((()=>{const t=(0,l.$t)({...k,...(0,i.zj)().packet});return t.showBits&&(t.paddingY+=10),t}),"getConfig"),b=(0,c.K2)((()=>d.packet),"getPacket"),g={pushWord:(0,c.K2)((t=>{t.length>0&&d.packet.push(t)}),"pushWord"),getPacket:b,getConfig:p,clear:(0,c.K2)((()=>{(0,i.IU)(),d=structuredClone(s)}),"clear"),setAccTitle:i.SV,getAccTitle:i.iN,setDiagramTitle:i.ke,getDiagramTitle:i.ab,getAccDescription:i.m7,setAccDescription:i.EI},h=(0,c.K2)((t=>{(0,r.S)(t,g);let e=-1,a=[],n=1;const{bitsPerRow:o}=g.getConfig();for(let{start:r,end:l,label:c}of t.blocks){if(l&&l<r)throw new Error(`Packet block ${r} - ${l} is invalid. End must be greater than start.`);if(r!==e+1)throw new Error(`Packet block ${r} - ${l??r} is not contiguous. It should start from ${e+1}.`);for(e=l??r,i.Rm.debug(`Packet block ${r} - ${e} with label ${c}`);a.length<=o+1&&g.getPacket().length<1e4;){const[t,e]=u({start:r,end:l,label:c},n,o);if(a.push(t),t.end+1===n*o&&(g.pushWord(a),a=[],n++),!e)break;({start:r,end:l,label:c}=e)}}g.pushWord(a)}),"populate"),u=(0,c.K2)(((t,e,a)=>{if(void 0===t.end&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*a?[t,void 0]:[{start:t.start,end:e*a-1,label:t.label},{start:e*a,end:t.end,label:t.label}]}),"getNextFittingBlock"),f={parse:async t=>{const e=await(0,n.q)("packet",t);i.Rm.debug(e),h(e)}},m=(0,c.K2)(((t,e,a,r)=>{const n=r.db,l=n.getConfig(),{rowHeight:c,paddingY:s,bitWidth:d,bitsPerRow:k}=l,p=n.getPacket(),b=n.getDiagramTitle(),g=c+s,h=g*(p.length+1)-(b?0:c),u=d*k+2,f=(0,o.D)(e);f.attr("viewbox",`0 0 ${u} ${h}`),(0,i.a$)(f,h,u,l.useMaxWidth);for(const[t,e]of p.entries())$(f,e,t,l);f.append("text").text(b).attr("x",u/2).attr("y",h-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")}),"draw"),$=(0,c.K2)(((t,e,a,{rowHeight:r,paddingX:n,paddingY:o,bitWidth:l,bitsPerRow:i,showBits:c})=>{const s=t.append("g"),d=a*(r+o)+o;for(const t of e){const e=t.start%i*l+1,a=(t.end-t.start+1)*l-n;if(s.append("rect").attr("x",e).attr("y",d).attr("width",a).attr("height",r).attr("class","packetBlock"),s.append("text").attr("x",e+a/2).attr("y",d+r/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(t.label),!c)continue;const o=t.end===t.start,k=d-2;s.append("text").attr("x",e+(o?a/2:0)).attr("y",k).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",o?"middle":"start").text(t.start),o||s.append("text").attr("x",e+a).attr("y",k).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(t.end)}}),"drawWord"),w={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},x={parser:f,db:g,renderer:{draw:m},styles:(0,c.K2)((({packet:t}={})=>{const e=(0,l.$t)(w,t);return`\n\t.packetByte {\n\t\tfont-size: ${e.byteFontSize};\n\t}\n\t.packetByte.start {\n\t\tfill: ${e.startByteColor};\n\t}\n\t.packetByte.end {\n\t\tfill: ${e.endByteColor};\n\t}\n\t.packetLabel {\n\t\tfill: ${e.labelColor};\n\t\tfont-size: ${e.labelFontSize};\n\t}\n\t.packetTitle {\n\t\tfill: ${e.titleColor};\n\t\tfont-size: ${e.titleFontSize};\n\t}\n\t.packetBlock {\n\t\tstroke: ${e.blockStrokeColor};\n\t\tstroke-width: ${e.blockStrokeWidth};\n\t\tfill: ${e.blockFillColor};\n\t}\n\t`}),"styles")}}}]);