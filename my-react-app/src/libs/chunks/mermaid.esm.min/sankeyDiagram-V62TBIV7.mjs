import{D as vt,Ja as St,La as wt,Ma as Lt,Na as At,Oa as Et,Pa as Tt,Qa as Ct,Ra as Mt,Ta as X,Va as Nt,h as U,ha as bt,l as _t}from"./chunk-3RIG7DRU.mjs";import{a as n}from"./chunk-J73WXDYM.mjs";var lt=function(){var t=n(function(x,o,a,l){for(a=a||{},l=x.length;l--;a[x[l]]=o);return a},"o"),r=[1,9],i=[1,10],u=[1,5,10,12],c={trace:n(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:n(function(o,a,l,k,_,p,v){var C=p.length-1;switch(_){case 7:let E=k.findOrCreateNode(p[C-4].trim().replaceAll('""','"')),M=k.findOrCreateNode(p[C-2].trim().replaceAll('""','"')),D=parseFloat(p[C].trim());k.addLink(E,M,D);break;case 8:case 9:case 11:this.$=p[C];break;case 10:this.$=p[C-1];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:r,20:i},{1:[2,6],7:11,10:[1,12]},t(i,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(u,[2,8]),t(u,[2,9]),{19:[1,16]},t(u,[2,11]),{1:[2,1]},{1:[2,5]},t(i,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:r,20:i},{15:18,16:7,17:8,18:r,20:i},{18:[1,19]},t(i,[2,3]),{12:[1,20]},t(u,[2,10]),{15:21,16:7,17:8,18:r,20:i},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:n(function(o,a){if(a.recoverable)this.trace(o);else{var l=new Error(o);throw l.hash=a,l}},"parseError"),parse:n(function(o){var a=this,l=[0],k=[],_=[null],p=[],v=this.table,C="",E=0,M=0,D=0,z=2,B=1,R=p.slice.call(arguments,1),w=Object.create(this.lexer),N={yy:{}};for(var P in this.yy)Object.prototype.hasOwnProperty.call(this.yy,P)&&(N.yy[P]=this.yy[P]);w.setInput(o,N.yy),N.yy.lexer=w,N.yy.parser=this,typeof w.yylloc>"u"&&(w.yylloc={});var O=w.yylloc;p.push(O);var y=w.options&&w.options.ranges;typeof N.yy.parseError=="function"?this.parseError=N.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function T(L){l.length=l.length-2*L,_.length=_.length-L,p.length=p.length-L}n(T,"popStack");function st(){var L;return L=k.pop()||w.lex()||B,typeof L!="number"&&(L instanceof Array&&(k=L,L=k.pop()),L=a.symbols_[L]||L),L}n(st,"lex");for(var A,Y,e,f,h,d,s={},g,b,$,I;;){if(e=l[l.length-1],this.defaultActions[e]?f=this.defaultActions[e]:((A===null||typeof A>"u")&&(A=st()),f=v[e]&&v[e][A]),typeof f>"u"||!f.length||!f[0]){var j="";I=[];for(g in v[e])this.terminals_[g]&&g>z&&I.push("'"+this.terminals_[g]+"'");w.showPosition?j="Parse error on line "+(E+1)+`:
`+w.showPosition()+`
Expecting `+I.join(", ")+", got '"+(this.terminals_[A]||A)+"'":j="Parse error on line "+(E+1)+": Unexpected "+(A==B?"end of input":"'"+(this.terminals_[A]||A)+"'"),this.parseError(j,{text:w.match,token:this.terminals_[A]||A,line:w.yylineno,loc:O,expected:I})}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+e+", token: "+A);switch(f[0]){case 1:l.push(A),_.push(w.yytext),p.push(w.yylloc),l.push(f[1]),A=null,Y?(A=Y,Y=null):(M=w.yyleng,C=w.yytext,E=w.yylineno,O=w.yylloc,D>0&&D--);break;case 2:if(b=this.productions_[f[1]][1],s.$=_[_.length-b],s._$={first_line:p[p.length-(b||1)].first_line,last_line:p[p.length-1].last_line,first_column:p[p.length-(b||1)].first_column,last_column:p[p.length-1].last_column},y&&(s._$.range=[p[p.length-(b||1)].range[0],p[p.length-1].range[1]]),d=this.performAction.apply(s,[C,M,E,N.yy,f[1],_,p].concat(R)),typeof d<"u")return d;b&&(l=l.slice(0,-1*b*2),_=_.slice(0,-1*b),p=p.slice(0,-1*b)),l.push(this.productions_[f[1]][0]),_.push(s.$),p.push(s._$),$=v[l[l.length-2]][l[l.length-1]],l.push($);break;case 3:return!0}}return!0},"parse")},S=function(){var x={EOF:1,parseError:n(function(a,l){if(this.yy.parser)this.yy.parser.parseError(a,l);else throw new Error(a)},"parseError"),setInput:function(o,a){return this.yy=a||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var a=o.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},unput:function(o){var a=o.length,l=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var k=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var _=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===k.length?this.yylloc.first_column:0)+k[k.length-l.length].length-l[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[_[0],_[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(o){this.unput(this.match.slice(o))},pastInput:function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var o=this.pastInput(),a=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+a+"^"},test_match:function(o,a){var l,k,_;if(this.options.backtrack_lexer&&(_={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(_.yylloc.range=this.yylloc.range.slice(0))),k=o[0].match(/(?:\r\n?|\n).*/g),k&&(this.yylineno+=k.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:k?k[k.length-1].length-k[k.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],l=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var p in _)this[p]=_[p];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,a,l,k;this._more||(this.yytext="",this.match="");for(var _=this._currentRules(),p=0;p<_.length;p++)if(l=this._input.match(this.rules[_[p]]),l&&(!a||l[0].length>a[0].length)){if(a=l,k=p,this.options.backtrack_lexer){if(o=this.test_match(l,_[p]),o!==!1)return o;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(o=this.test_match(a,_[k]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:n(function(){var a=this.next();return a||this.lex()},"lex"),begin:n(function(a){this.conditionStack.push(a)},"begin"),popState:n(function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:n(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:n(function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},"topState"),pushState:n(function(a){this.begin(a)},"pushState"),stateStackSize:n(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:n(function(a,l,k,_){var p=_;switch(k){case 0:return this.pushState("csv"),4;break;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;break;case 5:return 20;case 6:return this.popState("escaped_text"),18;break;case 7:return 19}},"anonymous"),rules:[/^(?:sankey-beta\b)/i,/^(?:$)/i,/^(?:((\u000D\u000A)|(\u000A)))/i,/^(?:(\u002C))/i,/^(?:(\u0022))/i,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/i,/^(?:(\u0022)(?!(\u0022)))/i,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/i],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};return x}();c.lexer=S;function m(){this.yy={}}return n(m,"Parser"),m.prototype=c,c.Parser=m,new m}();lt.parser=lt;var G=lt;var tt=[],et=[],Z=new Map,Ft=n(()=>{tt=[],et=[],Z=new Map,wt()},"clear"),ut=class{constructor(r,i,u=0){this.source=r;this.target=i;this.value=u}static{n(this,"SankeyLink")}},Ht=n((t,r,i)=>{tt.push(new ut(t,r,i))},"addLink"),ft=class{constructor(r){this.ID=r}static{n(this,"SankeyNode")}},Yt=n(t=>{t=bt.sanitizeText(t,X());let r=Z.get(t);return r===void 0&&(r=new ft(t),Z.set(t,r),et.push(r)),r},"findOrCreateNode"),qt=n(()=>et,"getNodes"),Ut=n(()=>tt,"getLinks"),Xt=n(()=>({nodes:et.map(t=>({id:t.ID})),links:tt.map(t=>({source:t.source.ID,target:t.target.ID,value:t.value}))}),"getGraph"),Ot={nodesMap:Z,getConfig:()=>X().sankey,getNodes:qt,getLinks:Ut,getGraph:Xt,addLink:Ht,findOrCreateNode:Yt,getAccTitle:At,setAccTitle:Lt,getAccDescription:Tt,setAccDescription:Et,getDiagramTitle:Mt,setDiagramTitle:Ct,clear:Ft};function J(t,r){let i;if(r===void 0)for(let u of t)u!=null&&(i<u||i===void 0&&u>=u)&&(i=u);else{let u=-1;for(let c of t)(c=r(c,++u,t))!=null&&(i<c||i===void 0&&c>=c)&&(i=c)}return i}n(J,"max");function W(t,r){let i;if(r===void 0)for(let u of t)u!=null&&(i>u||i===void 0&&u>=u)&&(i=u);else{let u=-1;for(let c of t)(c=r(c,++u,t))!=null&&(i>c||i===void 0&&c>=c)&&(i=c)}return i}n(W,"min");function F(t,r){let i=0;if(r===void 0)for(let u of t)(u=+u)&&(i+=u);else{let u=-1;for(let c of t)(c=+r(c,++u,t))&&(i+=c)}return i}n(F,"sum");function Gt(t){return t.target.depth}n(Gt,"targetDepth");function ct(t){return t.depth}n(ct,"left");function ht(t,r){return r-1-t.height}n(ht,"right");function Q(t,r){return t.sourceLinks.length?t.depth:r-1}n(Q,"justify");function dt(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?W(t.sourceLinks,Gt)-1:0}n(dt,"center");function H(t){return function(){return t}}n(H,"constant");function It(t,r){return nt(t.source,r.source)||t.index-r.index}n(It,"ascendingSourceBreadth");function Dt(t,r){return nt(t.target,r.target)||t.index-r.index}n(Dt,"ascendingTargetBreadth");function nt(t,r){return t.y0-r.y0}n(nt,"ascendingBreadth");function pt(t){return t.value}n(pt,"value");function Jt(t){return t.index}n(Jt,"defaultId");function Qt(t){return t.nodes}n(Qt,"defaultNodes");function Kt(t){return t.links}n(Kt,"defaultLinks");function Pt(t,r){let i=t.get(r);if(!i)throw new Error("missing: "+r);return i}n(Pt,"find");function Rt({nodes:t}){for(let r of t){let i=r.y0,u=i;for(let c of r.sourceLinks)c.y0=i+c.width/2,i+=c.width;for(let c of r.targetLinks)c.y1=u+c.width/2,u+=c.width}}n(Rt,"computeLinkBreadths");function rt(){let t=0,r=0,i=1,u=1,c=24,S=8,m,x=Jt,o=Q,a,l,k=Qt,_=Kt,p=6;function v(){let e={nodes:k.apply(null,arguments),links:_.apply(null,arguments)};return C(e),E(e),M(e),D(e),R(e),Rt(e),e}n(v,"sankey"),v.update=function(e){return Rt(e),e},v.nodeId=function(e){return arguments.length?(x=typeof e=="function"?e:H(e),v):x},v.nodeAlign=function(e){return arguments.length?(o=typeof e=="function"?e:H(e),v):o},v.nodeSort=function(e){return arguments.length?(a=e,v):a},v.nodeWidth=function(e){return arguments.length?(c=+e,v):c},v.nodePadding=function(e){return arguments.length?(S=m=+e,v):S},v.nodes=function(e){return arguments.length?(k=typeof e=="function"?e:H(e),v):k},v.links=function(e){return arguments.length?(_=typeof e=="function"?e:H(e),v):_},v.linkSort=function(e){return arguments.length?(l=e,v):l},v.size=function(e){return arguments.length?(t=r=0,i=+e[0],u=+e[1],v):[i-t,u-r]},v.extent=function(e){return arguments.length?(t=+e[0][0],i=+e[1][0],r=+e[0][1],u=+e[1][1],v):[[t,r],[i,u]]},v.iterations=function(e){return arguments.length?(p=+e,v):p};function C({nodes:e,links:f}){for(let[d,s]of e.entries())s.index=d,s.sourceLinks=[],s.targetLinks=[];let h=new Map(e.map((d,s)=>[x(d,s,e),d]));for(let[d,s]of f.entries()){s.index=d;let{source:g,target:b}=s;typeof g!="object"&&(g=s.source=Pt(h,g)),typeof b!="object"&&(b=s.target=Pt(h,b)),g.sourceLinks.push(s),b.targetLinks.push(s)}if(l!=null)for(let{sourceLinks:d,targetLinks:s}of e)d.sort(l),s.sort(l)}n(C,"computeNodeLinks");function E({nodes:e}){for(let f of e)f.value=f.fixedValue===void 0?Math.max(F(f.sourceLinks,pt),F(f.targetLinks,pt)):f.fixedValue}n(E,"computeNodeValues");function M({nodes:e}){let f=e.length,h=new Set(e),d=new Set,s=0;for(;h.size;){for(let g of h){g.depth=s;for(let{target:b}of g.sourceLinks)d.add(b)}if(++s>f)throw new Error("circular link");h=d,d=new Set}}n(M,"computeNodeDepths");function D({nodes:e}){let f=e.length,h=new Set(e),d=new Set,s=0;for(;h.size;){for(let g of h){g.height=s;for(let{source:b}of g.targetLinks)d.add(b)}if(++s>f)throw new Error("circular link");h=d,d=new Set}}n(D,"computeNodeHeights");function z({nodes:e}){let f=J(e,s=>s.depth)+1,h=(i-t-c)/(f-1),d=new Array(f);for(let s of e){let g=Math.max(0,Math.min(f-1,Math.floor(o.call(null,s,f))));s.layer=g,s.x0=t+g*h,s.x1=s.x0+c,d[g]?d[g].push(s):d[g]=[s]}if(a)for(let s of d)s.sort(a);return d}n(z,"computeNodeLayers");function B(e){let f=W(e,h=>(u-r-(h.length-1)*m)/F(h,pt));for(let h of e){let d=r;for(let s of h){s.y0=d,s.y1=d+s.value*f,d=s.y1+m;for(let g of s.sourceLinks)g.width=g.value*f}d=(u-d+m)/(h.length+1);for(let s=0;s<h.length;++s){let g=h[s];g.y0+=d*(s+1),g.y1+=d*(s+1)}st(h)}}n(B,"initializeNodeBreadths");function R(e){let f=z(e);m=Math.min(S,(u-r)/(J(f,h=>h.length)-1)),B(f);for(let h=0;h<p;++h){let d=Math.pow(.99,h),s=Math.max(1-d,(h+1)/p);N(f,d,s),w(f,d,s)}}n(R,"computeNodeBreadths");function w(e,f,h){for(let d=1,s=e.length;d<s;++d){let g=e[d];for(let b of g){let $=0,I=0;for(let{source:L,value:at}of b.targetLinks){let q=at*(b.layer-L.layer);$+=A(L,b)*q,I+=q}if(!(I>0))continue;let j=($/I-b.y0)*f;b.y0+=j,b.y1+=j,T(b)}a===void 0&&g.sort(nt),P(g,h)}}n(w,"relaxLeftToRight");function N(e,f,h){for(let d=e.length,s=d-2;s>=0;--s){let g=e[s];for(let b of g){let $=0,I=0;for(let{target:L,value:at}of b.sourceLinks){let q=at*(L.layer-b.layer);$+=Y(b,L)*q,I+=q}if(!(I>0))continue;let j=($/I-b.y0)*f;b.y0+=j,b.y1+=j,T(b)}a===void 0&&g.sort(nt),P(g,h)}}n(N,"relaxRightToLeft");function P(e,f){let h=e.length>>1,d=e[h];y(e,d.y0-m,h-1,f),O(e,d.y1+m,h+1,f),y(e,u,e.length-1,f),O(e,r,0,f)}n(P,"resolveCollisions");function O(e,f,h,d){for(;h<e.length;++h){let s=e[h],g=(f-s.y0)*d;g>1e-6&&(s.y0+=g,s.y1+=g),f=s.y1+m}}n(O,"resolveCollisionsTopToBottom");function y(e,f,h,d){for(;h>=0;--h){let s=e[h],g=(s.y1-f)*d;g>1e-6&&(s.y0-=g,s.y1-=g),f=s.y0-m}}n(y,"resolveCollisionsBottomToTop");function T({sourceLinks:e,targetLinks:f}){if(l===void 0){for(let{source:{sourceLinks:h}}of f)h.sort(Dt);for(let{target:{targetLinks:h}}of e)h.sort(It)}}n(T,"reorderNodeLinks");function st(e){if(l===void 0)for(let{sourceLinks:f,targetLinks:h}of e)f.sort(Dt),h.sort(It)}n(st,"reorderLinks");function A(e,f){let h=e.y0-(e.sourceLinks.length-1)*m/2;for(let{target:d,width:s}of e.sourceLinks){if(d===f)break;h+=s+m}for(let{source:d,width:s}of f.targetLinks){if(d===e)break;h-=s}return h}n(A,"targetTop");function Y(e,f){let h=f.y0-(f.targetLinks.length-1)*m/2;for(let{source:d,width:s}of f.targetLinks){if(d===e)break;h+=s+m}for(let{target:d,width:s}of e.sourceLinks){if(d===f)break;h-=s}return h}return n(Y,"sourceTop"),v}n(rt,"Sankey");var yt=Math.PI,mt=2*yt,V=1e-6,Zt=mt-V;function gt(){this._x0=this._y0=this._x1=this._y1=null,this._=""}n(gt,"Path");function jt(){return new gt}n(jt,"path");gt.prototype=jt.prototype={constructor:gt,moveTo:function(t,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+r)},closePath:function(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,r){this._+="L"+(this._x1=+t)+","+(this._y1=+r)},quadraticCurveTo:function(t,r,i,u){this._+="Q"+ +t+","+ +r+","+(this._x1=+i)+","+(this._y1=+u)},bezierCurveTo:function(t,r,i,u,c,S){this._+="C"+ +t+","+ +r+","+ +i+","+ +u+","+(this._x1=+c)+","+(this._y1=+S)},arcTo:function(t,r,i,u,c){t=+t,r=+r,i=+i,u=+u,c=+c;var S=this._x1,m=this._y1,x=i-t,o=u-r,a=S-t,l=m-r,k=a*a+l*l;if(c<0)throw new Error("negative radius: "+c);if(this._x1===null)this._+="M"+(this._x1=t)+","+(this._y1=r);else if(k>V)if(!(Math.abs(l*x-o*a)>V)||!c)this._+="L"+(this._x1=t)+","+(this._y1=r);else{var _=i-S,p=u-m,v=x*x+o*o,C=_*_+p*p,E=Math.sqrt(v),M=Math.sqrt(k),D=c*Math.tan((yt-Math.acos((v+k-C)/(2*E*M)))/2),z=D/M,B=D/E;Math.abs(z-1)>V&&(this._+="L"+(t+z*a)+","+(r+z*l)),this._+="A"+c+","+c+",0,0,"+ +(l*_>a*p)+","+(this._x1=t+B*x)+","+(this._y1=r+B*o)}},arc:function(t,r,i,u,c,S){t=+t,r=+r,i=+i,S=!!S;var m=i*Math.cos(u),x=i*Math.sin(u),o=t+m,a=r+x,l=1^S,k=S?u-c:c-u;if(i<0)throw new Error("negative radius: "+i);this._x1===null?this._+="M"+o+","+a:(Math.abs(this._x1-o)>V||Math.abs(this._y1-a)>V)&&(this._+="L"+o+","+a),i&&(k<0&&(k=k%mt+mt),k>Zt?this._+="A"+i+","+i+",0,1,"+l+","+(t-m)+","+(r-x)+"A"+i+","+i+",0,1,"+l+","+(this._x1=o)+","+(this._y1=a):k>V&&(this._+="A"+i+","+i+",0,"+ +(k>=yt)+","+l+","+(this._x1=t+i*Math.cos(c))+","+(this._y1=r+i*Math.sin(c))))},rect:function(t,r,i,u){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+r)+"h"+ +i+"v"+ +u+"h"+-i+"Z"},toString:function(){return this._}};var xt=jt;function ot(t){return n(function(){return t},"constant")}n(ot,"default");function zt(t){return t[0]}n(zt,"x");function Bt(t){return t[1]}n(Bt,"y");var $t=Array.prototype.slice;function te(t){return t.source}n(te,"linkSource");function ee(t){return t.target}n(ee,"linkTarget");function ne(t){var r=te,i=ee,u=zt,c=Bt,S=null;function m(){var x,o=$t.call(arguments),a=r.apply(this,o),l=i.apply(this,o);if(S||(S=x=xt()),t(S,+u.apply(this,(o[0]=a,o)),+c.apply(this,o),+u.apply(this,(o[0]=l,o)),+c.apply(this,o)),x)return S=null,x+""||null}return n(m,"link"),m.source=function(x){return arguments.length?(r=x,m):r},m.target=function(x){return arguments.length?(i=x,m):i},m.x=function(x){return arguments.length?(u=typeof x=="function"?x:ot(+x),m):u},m.y=function(x){return arguments.length?(c=typeof x=="function"?x:ot(+x),m):c},m.context=function(x){return arguments.length?(S=x??null,m):S},m}n(ne,"link");function re(t,r,i,u,c){t.moveTo(r,i),t.bezierCurveTo(r=(r+u)/2,i,r,c,u,c)}n(re,"curveHorizontal");function kt(){return ne(re)}n(kt,"linkHorizontal");function oe(t){return[t.source.x1,t.y0]}n(oe,"horizontalSource");function ie(t){return[t.target.x0,t.y1]}n(ie,"horizontalTarget");function it(){return kt().source(oe).target(ie)}n(it,"default");var K=class t{static{n(this,"Uid")}static{this.count=0}static next(r){return new t(r+ ++t.count)}constructor(r){this.id=r,this.href=`#${r}`}toString(){return"url("+this.href+")"}};var se={left:ct,right:ht,center:dt,justify:Q},ae=n(function(t,r,i,u){let{securityLevel:c,sankey:S}=X(),m=Nt.sankey,x;c==="sandbox"&&(x=U("#i"+r));let o=c==="sandbox"?U(x.nodes()[0].contentDocument.body):U("body"),a=c==="sandbox"?o.select(`[id="${r}"]`):U(`[id="${r}"]`),l=S?.width??m.width,k=S?.height??m.width,_=S?.useMaxWidth??m.useMaxWidth,p=S?.nodeAlignment??m.nodeAlignment,v=S?.prefix??m.prefix,C=S?.suffix??m.suffix,E=S?.showValues??m.showValues,M=u.db.getGraph(),D=se[p];rt().nodeId(y=>y.id).nodeWidth(10).nodePadding(10+(E?15:0)).nodeAlign(D).extent([[0,0],[l,k]])(M);let R=_t(vt);a.append("g").attr("class","nodes").selectAll(".node").data(M.nodes).join("g").attr("class","node").attr("id",y=>(y.uid=K.next("node-")).id).attr("transform",function(y){return"translate("+y.x0+","+y.y0+")"}).attr("x",y=>y.x0).attr("y",y=>y.y0).append("rect").attr("height",y=>y.y1-y.y0).attr("width",y=>y.x1-y.x0).attr("fill",y=>R(y.id));let w=n(({id:y,value:T})=>E?`${y}
${v}${Math.round(T*100)/100}${C}`:y,"getText");a.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(M.nodes).join("text").attr("x",y=>y.x0<l/2?y.x1+6:y.x0-6).attr("y",y=>(y.y1+y.y0)/2).attr("dy",`${E?"0":"0.35"}em`).attr("text-anchor",y=>y.x0<l/2?"start":"end").text(w);let N=a.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(M.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),P=S?.linkColor||"gradient";if(P==="gradient"){let y=N.append("linearGradient").attr("id",T=>(T.uid=K.next("linearGradient-")).id).attr("gradientUnits","userSpaceOnUse").attr("x1",T=>T.source.x1).attr("x2",T=>T.target.x0);y.append("stop").attr("offset","0%").attr("stop-color",T=>R(T.source.id)),y.append("stop").attr("offset","100%").attr("stop-color",T=>R(T.target.id))}let O;switch(P){case"gradient":O=n(y=>y.uid,"coloring");break;case"source":O=n(y=>R(y.source.id),"coloring");break;case"target":O=n(y=>R(y.target.id),"coloring");break;default:O=P}N.append("path").attr("d",it()).attr("stroke",O).attr("stroke-width",y=>Math.max(1,y.width)),St(void 0,a,0,_)},"draw"),Vt={draw:ae};var Wt=n(t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,`
`).trim(),"prepareTextForParsing");var le=G.parse.bind(G);G.parse=t=>le(Wt(t));var wn={parser:G,db:Ot,renderer:Vt};export{wn as diagram};
