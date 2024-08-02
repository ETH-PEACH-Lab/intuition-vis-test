import{a as R}from"./chunk-FI6ZHBMQ.mjs";import{a as q}from"./chunk-CBKUYFM2.mjs";import"./chunk-QACL6645.mjs";import"./chunk-NNCHJPYV.mjs";import"./chunk-6PCQ7JZ7.mjs";import"./chunk-PC2RSJ4C.mjs";import"./chunk-QLLLEZ2Q.mjs";import"./chunk-IVOKOJOY.mjs";import{a as F}from"./chunk-GCAN3TJ3.mjs";import"./chunk-VMDNBU76.mjs";import"./chunk-LEAL3RNQ.mjs";import{l as X}from"./chunk-EYGBHCO6.mjs";import"./chunk-EZ6AQD5Z.mjs";import{Fa as Y,Ia as B,La as z,Ma as $,Na as M,Oa as N,Pa as j,Qa as A,Ra as T,b as P,h as v,pa as I}from"./chunk-PZJP3F4K.mjs";import"./chunk-RS46GSJM.mjs";import{a as s}from"./chunk-J73WXDYM.mjs";var W=[],C=[...W],nt=I.visual,ot=s(()=>X({...nt,...Y().visual}),"getConfig"),lt=s(()=>C,"getPages"),it=s(a=>{C.push(a)},"addPage"),st=s(()=>{z(),C=[...W]},"clear"),L={getPages:lt,addPage:it,getConfig:ot,clear:st,setAccTitle:$,getAccTitle:M,setDiagramTitle:A,getDiagramTitle:T,getAccDescription:j,setAccDescription:N};var ct=s(a=>{R(a,L);for(let e of a.pages){let l=e.subDiagrams.map(r=>{switch(r.diagramType){case"array":return{type:"array",orientation:r.orientation,title:r.title,showIndex:r.showIndex,label:r.label,elements:r.elements.map(t=>({value:t.value,color:t.color,arrow:t.arrowLabel!==void 0&&t.arrowLabel!==null,arrowLabel:t.arrowLabel}))};case"matrix":return{type:"matrix",title:r.title,rows:r.rows.map(t=>({elements:t.elements.map(n=>({value:n.value,color:n.color}))})),showIndex:r.showIndex,label:r.label};case"stack":return{type:"stack",orientation:r.orientation,title:r.title,showIndex:r.showIndex,label:r.label,size:r.size,elements:r.elements.map(t=>({value:t.value,color:t.color,arrow:t.arrowLabel!==void 0&&t.arrowLabel!==null,arrowLabel:t.arrowLabel}))};case"tree":return{type:"tree",title:r.title,label:r.label,elements:r.elements.map(t=>({nodeId:t.nodeId,left:t.left=="None"?void 0:t.left,right:t.right=="None"?void 0:t.right,value:t.value,color:t.color}))};case"graph":return{type:"graph",title:r.title,label:r.label,elements:r.elements.map(t=>{if(t.$type=="NodeDefinition")return{type:"node",nodeId:t.nodeId,value:t.value,color:t.color,arrow:t.arrowLabel!==void 0&&t.arrowLabel!==null,arrowLabel:t.arrowLabel,hidden:t.hidden};if(t.$type=="EdgeDefinition")return{type:"edge",start:t.start,end:t.end,value:t.value,color:t.color};throw new Error("Unknown graph element type")})};case"linkedList":return{type:"linkedList",title:r.title,label:r.label,elements:r.elements.map(t=>({value:t.value,color:t.color,arrow:!!t.arrowLabel,arrowLabel:t.arrowLabel}))};case"text":return{type:"text",title:r.title,elements:r.elements.map(t=>t.value)};default:throw new Error(`Unknown diagram type: ${r.diagramType}`)}});L.addPage({subDiagrams:l})}},"populate"),_={parse:async a=>{let e=await q("visual",a);P.debug(e),ct(e)}};var H=s((a,e,l,r)=>{a.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","0 0 10 10").attr("refX","5").attr("refY","5").attr("markerWidth","6").attr("markerHeight","6").attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("fill","black");let t="16",n=100,o=20,i="16",c=100,d=160;e.title&&a.append("text").attr("x",n).attr("y",o).attr("fill",r.labelColor).attr("font-size",t).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","arrayDiagramTitle").text(e.title);let m=a.append("g").attr("transform",`translate(50, ${l+40})`);if(e.elements.forEach((f,x)=>{dt(m,f,x,r,e.showIndex||!1)}),e.label){let f=d,x=c;m.append("text").attr("x",x).attr("y",f).attr("fill",r.labelColor).attr("font-size",i).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","arrayDiagramLabel").text(e.label)}},"drawArrayDiagram"),dt=s((a,e,l,{labelColor:r,labelFontSize:t},n)=>{let o="16",i="16",c=a.append("g"),d=40,p=l*d,m=50,f=pt(e.color);if(e.arrow){let x=m-40,h=m-10;c.append("line").attr("x1",p+20).attr("y1",x).attr("x2",p+20).attr("y2",h).attr("stroke","black").attr("stroke-width","1.5").attr("marker-end","url(#arrowhead)"),e.arrowLabel&&c.append("text").attr("x",p+20).attr("y",x-20).attr("fill",r).attr("font-size",t).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","arrowContext").text(e.arrowLabel)}c.append("rect").attr("x",p).attr("y",m).attr("width",d).attr("height",d).style("fill",f).attr("stroke","#000000").attr("stroke-width","2px").attr("class","arrayElement"),c.append("text").attr("x",p+d/2).attr("y",m+d/2).attr("fill",r).attr("font-size",i).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","elementLabel").text(e.value),n&&c.append("text").attr("x",p+d/2).attr("y",m+d+20).attr("fill",r).attr("font-size",o).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","indexLabel").text(l)},"drawElement"),pt=s(a=>{switch(a){case"blue":return"rgba(0, 0, 255, 0.3)";case"green":return"rgba(0, 255, 0, 0.3)";case"red":return"rgba(255, 0, 0, 0.3)";default:return"none"}},"getColor");var O=s((a,e,l,r)=>{let n=e.title?100:0,o=a.append("g").attr("transform",`translate(50, ${l+n})`),i=e.rows.length,c=Math.max(...e.rows.map(d=>d.elements.length));if(e.title&&a.append("text").attr("x",50).attr("y",l).attr("fill",r.labelColor).attr("font-size",r.labelFontSize).attr("dominant-baseline","hanging").attr("text-anchor","start").attr("class","diagramTitle").text(e.title),e.rows.forEach((d,p)=>{d.elements.forEach((m,f)=>{mt(o,m,p,f,r),gt(o,p,f,r)})}),e.label){let d=i*50+50,p=c*25;o.append("text").attr("x",p).attr("y",d).attr("fill",r.labelColor).attr("font-size",r.labelFontSize).attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","arrayDiagramLabel").text(e.label)}e.showIndex&&ut(o,i,c,r)},"drawMatrixDiagram"),mt=s((a,e,l,r,{labelColor:t,labelFontSize:n})=>{let o=a.append("g"),i=r*50,c=l*50,d="#000000",p="1.2px",m=ft(e.color);o.append("rect").attr("x",i).attr("y",c).attr("width",50).attr("height",50).style("fill",m).attr("stroke",d).attr("stroke-width",p).attr("class","matrixElement"),o.append("text").attr("x",i+25).attr("y",c+25).attr("fill",t).attr("font-size",n).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","elementLabel").text(e.value.toString())},"drawElement"),ut=s((a,e,l,{labelColor:r,labelFontSize:t})=>{let n=a.append("g");for(let o=0;o<e;o++)n.append("text").attr("x",-10).attr("y",o*50+25).attr("fill",r).attr("font-size",t).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","rowIndex").text(o.toString());for(let o=0;o<l;o++)n.append("text").attr("x",o*50+25).attr("y",-10).attr("fill",r).attr("font-size",t).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","colIndex").text(o.toString())},"addIndices"),gt=s((a,e,l,{borderColor:r,borderWidth:t})=>{let n=a.append("g"),o=l*50,i=e*50;n.append("rect").attr("x",o).attr("y",i).attr("width",50).attr("height",50).attr("stroke",r).attr("stroke-width",t).attr("fill","none")},"drawGrid"),ft=s(a=>{switch(a){case"blue":return"rgba(0, 0, 255, 0.3)";case"green":return"rgba(0, 255, 0, 0.3)";case"red":return"rgba(255, 0, 0, 0.3)";default:return"none"}},"getColor");var U=s((a,e,l)=>{let r=a.append("g").attr("transform",`translate(0, ${l})`),t=e.size*40;if(xt(r,50,0,70,t),e.elements.forEach((n,o)=>{let i=e.size-e.elements.length+o;bt(r,n,i)}),e.label){let o=t+40+20;r.append("text").attr("x",85).attr("y",o).attr("fill","black").attr("font-size","16").attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","stackDiagramLabel").text(e.label)}},"drawStackDiagram"),bt=s((a,e,l)=>{let r=a.append("g"),t=50,n=l*40,o=yt(e.color);r.append("rect").attr("x",t).attr("y",n).attr("width",70).attr("height",40).style("fill",o).attr("stroke","black").attr("stroke-width","1").attr("class","stackElement"),r.append("text").attr("x",t+35).attr("y",n+20).attr("fill","black").attr("font-size","12").attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","elementLabel").text(e.value)},"drawElement"),xt=s((a,e,l,r,t)=>{let n="#000000";a.append("line").attr("x1",e).attr("y1",l).attr("x2",e).attr("y2",l+t).attr("stroke",n).attr("stroke-width",2),a.append("line").attr("x1",e+r).attr("y1",l).attr("x2",e+r).attr("y2",l+t).attr("stroke",n).attr("stroke-width",2),a.append("line").attr("x1",e).attr("y1",l+t).attr("x2",e+r).attr("y2",l+t).attr("stroke",n).attr("stroke-width",2)},"drawFramework"),yt=s(a=>{switch(a){case"blue":return"rgba(0, 0, 255, 0.3)";case"green":return"rgba(0, 255, 0, 0.3)";case"red":return"rgba(255, 0, 0, 0.3)";default:return"none"}},"getColor");var J=s((a,e,l)=>{let r=a.append("g").attr("transform",`translate(0, ${l})`),t=e.elements.filter(i=>i.type=="node"),n=e.elements.filter(i=>i.type=="edge"),o=ht(t||[]);if(n&&n.forEach(i=>{kt(r,i,o)}),t&&t.forEach(i=>{wt(r,i,o[i.nodeId])}),e.label){let i=t?Math.ceil(t.length/3)*100+70:100;r.append("text").attr("x",150).attr("y",i).attr("fill","black").attr("font-size","16").attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","graphDiagramLabel").text(e.label)}},"drawGraphDiagram"),ht=s(a=>{let e={},n=2*Math.PI/a.length;return a.forEach((o,i)=>{let c=i*n;e[o.nodeId]={x:150+100*Math.cos(c),y:150+100*Math.sin(c)}}),e},"calculateNodePositions"),wt=s((a,e,l)=>{let r=l.x,t=l.y,n=Gt(e.color);a.append("circle").attr("cx",r).attr("cy",t).attr("r",20).style("fill",n).attr("stroke","black").attr("stroke-width","1").attr("class","graphNode"),a.append("text").attr("x",r).attr("y",t).attr("dy",".35em").attr("fill","black").attr("font-size","12").attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","nodeLabel").text(e.value||e.nodeId)},"drawNode"),kt=s((a,e,l)=>{let r=l[e.start],t=l[e.end];if(r&&t){let{startX:n,startY:o,endX:i,endY:c}=St(r,t),d=e.color||"black";a.append("line").attr("x1",n).attr("y1",o).attr("x2",i).attr("y2",c).attr("stroke",d).attr("stroke-width","2"),e.value&&a.append("text").attr("x",(n+i)/2).attr("y",(o+c)/2).attr("fill","black").attr("font-size","12").attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","edgeLabel").text(e.value)}},"drawEdge"),St=s((a,e)=>{let r=e.x-a.x,t=e.y-a.y,n=Math.sqrt(r*r+t*t),o=r*20/n,i=t*20/n;return{startX:a.x+o,startY:a.y+i,endX:e.x-o,endY:e.y-i}},"calculateEdgePosition"),Gt=s(a=>{switch(a){case"blue":return"rgba(0, 0, 255, 0.3)";case"green":return"rgba(0, 255, 0, 0.3)";case"red":return"rgba(255, 0, 0, 0.3)";default:return"none"}},"getColor");var K=s((a,e,l)=>{let r=a.append("g").attr("transform",`translate(0, ${l})`),t=e.elements||[],n=Lt(t),o=vt(t);if(n&&n.forEach(i=>{Vt(r,i,o)}),t&&t.forEach(i=>{Pt(r,i,o[i.nodeId])}),e.label){let i=t?Math.ceil(t.length/3)*100+70:100;r.append("text").attr("x",150).attr("y",i).attr("fill","black").attr("font-size","16").attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","treeDiagramLabel").text(e.label)}},"drawTreeDiagram"),vt=s(a=>{let e={},n=s((i,c,d)=>{let p=c,m=0+d*100;e[i.nodeId]={x:p,y:m};let f=a.find(h=>h.nodeId===i.left),x=a.find(h=>h.nodeId===i.right);f&&n(f,p-50,d+1),x&&n(x,p+50,d+1)},"calculatePosition"),o=a.find(i=>!i.parentId);return o&&n(o,150,0),e},"calculateNodePositions"),Lt=s(a=>{let e=[];return a.forEach(l=>{l.left&&e.push({start:l.nodeId,end:l.left}),l.right&&e.push({start:l.nodeId,end:l.right})}),e},"calculateTreeEdges"),Pt=s((a,e,l)=>{let r=l.x,t=l.y,n=Dt(e.color);a.append("circle").attr("cx",r).attr("cy",t).attr("r",20).style("fill",n).attr("stroke","black").attr("stroke-width","1").attr("class","treeNode"),a.append("text").attr("x",r).attr("y",t).attr("dy",".35em").attr("fill","black").attr("font-size","12").attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","nodeLabel").text(e.value||e.nodeId)},"drawNode"),Vt=s((a,e,l)=>{let r=l[e.start],t=l[e.end];if(r&&t){let{startX:n,startY:o,endX:i,endY:c}=Et(r,t),d=e.color||"black";a.append("line").attr("x1",n).attr("y1",o).attr("x2",i).attr("y2",c).attr("stroke",d).attr("stroke-width","2"),e.value&&a.append("text").attr("x",(n+i)/2).attr("y",(o+c)/2).attr("fill","black").attr("font-size","12").attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","edgeLabel").text(e.value)}},"drawEdge"),Et=s((a,e)=>{let r=e.x-a.x,t=e.y-a.y,n=Math.sqrt(r*r+t*t),o=r*20/n,i=t*20/n;return{startX:a.x+o,startY:a.y+i,endX:e.x-o,endY:e.y-i}},"calculateEdgePosition"),Dt=s(a=>{switch(a){case"blue":return"rgba(0, 0, 255, 0.3)";case"green":return"rgba(0, 255, 0, 0.3)";case"red":return"rgba(255, 0, 0, 0.3)";default:return"none"}},"getColor");var Q=s((a,e,l)=>{let r=a.append("g").attr("transform",`translate(0, ${l})`);r.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","0 0 10 10").attr("refX","10").attr("refY","5").attr("markerWidth","6").attr("markerHeight","6").attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("fill","black");let t=e.elements,n=Ct(t||[]);t&&t.forEach((o,i)=>{It(r,o,n[i],i<t.length-1)}),e.label&&r.append("text").attr("x",150).attr("y",100).attr("fill","black").attr("font-size","16").attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","linkedListDiagramLabel").text(e.label)},"drawLinkedListDiagram"),Ct=s(a=>{let e=[];return a.forEach((n,o)=>{e.push({x:50+o*120,y:50})}),e},"calculateNodePositions"),It=s((a,e,l,r)=>{let t=l.x,n=l.y,o=Xt(e.color);a.append("rect").attr("x",t).attr("y",n).attr("width",60).attr("height",30).style("fill",o).attr("stroke","black").attr("stroke-width","1").attr("class","linkedListNode"),a.append("text").attr("x",t+30).attr("y",n+15).attr("dy",".35em").attr("fill","black").attr("font-size","12").attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","nodeLabel").text(e.value),e.arrow&&(a.append("line").attr("x1",t+30).attr("y1",n-30).attr("x2",t+30).attr("y2",n).attr("stroke","black").attr("stroke-width","2").attr("marker-end","url(#arrowhead)"),e.arrowLabel&&a.append("text").attr("x",t+30).attr("y",n-40).attr("fill","black").attr("font-size","16").attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","arrowLabel").text(e.arrowLabel)),r&&a.append("line").attr("x1",t+60).attr("y1",n+15).attr("x2",t+60+60).attr("y2",n+15).attr("stroke","black").attr("stroke-width","2").attr("marker-end","url(#arrowhead)")},"drawNode"),Xt=s(a=>{switch(a){case"blue":return"rgba(0, 0, 255, 0.3)";case"green":return"rgba(0, 255, 0, 0.3)";case"red":return"rgba(255, 0, 0, 0.3)";default:return"white"}},"getColor");var Z=s((a,e,l)=>{let r=a.append("g").attr("transform",`translate(0, ${l})`),t=0;if(e.elements.forEach(n=>{t=Yt(r,n,t)}),e.label){let n=t+20;r.append("text").attr("x",50).attr("y",n).attr("fill","black").attr("font-size","16").attr("dominant-baseline","hanging").attr("text-anchor","middle").attr("class","textDiagramLabel").text(e.label)}},"drawTextDiagram"),Yt=s((a,e,l)=>{let r=a.append("g"),t=50,n=e.split(`
`);return n.forEach((o,i)=>{let c=l+i*20;r.append("text").attr("x",t).attr("y",c).attr("fill","black").attr("font-size","20").attr("dominant-baseline","hanging").attr("class","textElement").text(o)}),l+n.length*20},"drawElement");var Bt=s((a,e,l,r)=>{let t=r.db,n=t.getConfig(),o=t.getPages(),i=t.getDiagramTitle(),c=800,d=1e3,p=F(e),m=0,f=null,x=s(y=>{p.selectAll("g.page").attr("display","none"),p.select(`#page${y}`).attr("display","inline"),p.select("#prevButton").attr("fill",y>0?"#007bff":"#c0c0c0"),p.select("#nextButton").attr("fill",y<o.length-1?"#007bff":"#c0c0c0"),p.select("#pageIndicator").text(`${y+1} / ${o.length}`)},"renderPage"),h=s((y,k)=>{let w=y.append("g").attr("class","navigation-buttons"),g=40,u=20,b=10,S=d/2-(g*1.5+b),G=c-60,V=w.append("g").attr("id","prevButtonGroup").attr("cursor","pointer");V.append("rect").attr("id","prevButton").attr("x",S).attr("y",G).attr("width",g).attr("height",u).attr("fill","#c0c0c0"),V.append("text").text("<").attr("x",S+g/2).attr("y",G+u/2).attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","middle");let E=w.append("g").attr("id","playButtonGroup").attr("cursor","pointer");E.append("rect").attr("id","playButton").attr("x",S+g+b).attr("y",G).attr("width",g).attr("height",u).attr("fill","#007bff"),E.append("text").text("\u25B6").attr("x",S+g+b+g/2).attr("y",G+u/2).attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","middle");let D=w.append("g").attr("id","nextButtonGroup").attr("cursor","pointer");D.append("rect").attr("id","nextButton").attr("x",S+2*(g+b)).attr("y",G).attr("width",g).attr("height",u).attr("fill","#007bff"),D.append("text").text(">").attr("x",S+2*(g+b)+g/2).attr("y",G+u/2).attr("fill","white").attr("text-anchor","middle").attr("alignment-baseline","middle"),w.append("text").attr("id","pageIndicator").attr("x",d-50).attr("y",c-50).attr("fill","black").attr("text-anchor","middle").attr("alignment-baseline","middle").text(`1 / ${k}`),V.node()?.addEventListener("click",()=>{m>0&&(m-=1,x(m))}),D.node()?.addEventListener("click",()=>{m<k-1&&(m+=1,x(m))}),E.node()?.addEventListener("click",()=>{f?(clearInterval(f),f=null,v("#playButton text").text("\u25B6"),v("#playButton").attr("fill","#007bff")):(f=1e3,v("#playButton text").text("\u275A\u275A"),v("#playButton").attr("fill","#c0c0c0"))})},"addNavigationButtons"),rt=s((y,k,w)=>{let g=y.append("g").attr("id",`page${w}`).attr("class","page").attr("display",w===0?"inline":"none");i&&g.append("text").text(i).attr("x",d/2).attr("y",25).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","pageTitle");let u=50;for(let b of k.subDiagrams)switch(b.type){case"array":{H(g,b,u,n),u+=250;break}case"matrix":{O(g,b,u,n),u+=250;break}case"stack":{U(g,b,u),u+=250;break}case"graph":{J(g,b,u),u+=250;break}case"tree":{K(g,b,u),u+=250;break}case"linkedList":{Q(g,b,u),u+=250;break}case"text":{Z(g,b,u),u+=250;break}default:throw new Error(`Unknown diagram type: ${b.type}`)}},"drawPage");p.attr("viewBox",`0 0 ${d} ${c}`),B(p,c,d,n.useMaxWidth),o.forEach((y,k)=>{rt(p,y,k)}),h(p,o.length),x(m);let at=`
    (function() {
      const svg = document.getElementById('${e}');
      let currentPage = 0;
      const totalPages = ${o.length};
      let playInterval = null;

      function renderPage(pageIndex) {
        const pages = svg.querySelectorAll('g.page');
        pages.forEach(page => {
          page.style.display = 'none';
        });
        svg.querySelector('#page' + pageIndex).style.display = 'inline';

        const prevButton = svg.querySelector('#prevButton');
        const nextButton = svg.querySelector('#nextButton');
        
        if (prevButton) prevButton.setAttribute('fill', pageIndex > 0 ? '#007bff' : '#c0c0c0');
        if (nextButton) nextButton.setAttribute('fill', pageIndex < totalPages - 1 ? '#007bff' : '#c0c0c0');

        // Update current page display
        svg.querySelector('#pageIndicator').textContent = (pageIndex + 1) + ' / ' + totalPages;
      }

      svg.querySelector('#prevButtonGroup').addEventListener('click', function() {
        if (currentPage > 0) {
          currentPage -= 1;
          renderPage(currentPage);
        }
      });

      svg.querySelector('#nextButtonGroup').addEventListener('click', function() {
        if (currentPage < totalPages - 1) {
          currentPage += 1;
          renderPage(currentPage);
        }
      });

      svg.querySelector('#playButtonGroup').addEventListener('click', function() {
        if (playInterval) {
          clearInterval(playInterval);
          playInterval = null;
          svg.querySelector('#playButton text').textContent = '\u25B6';
          svg.querySelector('#playButton').setAttribute('fill', '#007bff');
        } else {
          playInterval = setInterval(() => {
            if (currentPage < totalPages - 1) {
              currentPage += 1;
            } else {
              currentPage = 0;
            }
            renderPage(currentPage);
          }, 1000);
          svg.querySelector('#playButton text').textContent = '\u275A\u275A';
          svg.querySelector('#playButton').setAttribute('fill', '#c0c0c0');
        }
      });

      renderPage(currentPage);
    })();
  `;p.append("script").attr("type","text/javascript").text(at)},"draw"),tt={draw:Bt};var et=s((a={})=>(P.debug({options:a}),`
    .element {
      font-size: ${a.array?.elementFontSize??"10px"};
      fill: ${a.array?.valueColor??"black"};
    }
    .element.index {
      fill: ${a.array?.indexColor??"black"};
    }
    .element {
      stroke: ${a.array?.elementStrokeColor??"black"};
      stroke-width: ${a.array?.elementStrokeWidth??"1"};
      fill: ${a.array?.elementFillColor??"#efefef"};
    }
  `),"styles");var Pe={parser:_,db:L,renderer:tt,styles:et};export{Pe as diagram};
