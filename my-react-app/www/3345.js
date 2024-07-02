/*! For license information please see 3345.js.LICENSE.txt */
"use strict";(self.webpackChunkonsenui_v2_react_minimum=self.webpackChunkonsenui_v2_react_minimum||[]).push([[3345],{83345:(e,t,n)=>{n.r(t),n.d(t,{CompletionAdapter:()=>Ot,DefinitionAdapter:()=>Jt,DiagnosticsAdapter:()=>Ut,DocumentColorAdapter:()=>cn,DocumentFormattingEditProvider:()=>an,DocumentHighlightAdapter:()=>Qt,DocumentLinkAdapter:()=>on,DocumentRangeFormattingEditProvider:()=>sn,DocumentSymbolAdapter:()=>tn,FoldingRangeAdapter:()=>dn,HoverAdapter:()=>$t,ReferenceAdapter:()=>Zt,RenameAdapter:()=>en,SelectionRangeAdapter:()=>ln,WorkerManager:()=>Ft,fromPosition:()=>Wt,fromRange:()=>Ht,setupMode:()=>mn,setupMode1:()=>fn,toRange:()=>Kt,toTextEdit:()=>zt});var r=n(36761),i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,u=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of a(t))s.call(e,u)||u===n||i(e,u,{get:()=>t[u],enumerable:!(r=o(t,u))||r.enumerable});return e},c={};u(c,r,"default");var d,l,g,f,m,h,p,v,b,_,k,w,y,x,I,E,S,A,C,R,L,T,M,P,D,F,j,N,U,V,O,W,H,K,X,z,$,B,q,Q,G,J,Y,Z,ee,te,ne,re,ie,oe,ae,se,ue,ce,de,le,ge,fe,me,he,pe,ve,be,_e,ke,we,ye,xe,Ie,Ee,Se,Ae,Ce,Re,Le,Te,Me,Pe,De,Fe,je,Ne,Ue,Ve,Oe,We,He,Ke,Xe,ze,$e,Be,qe,Qe,Ge,Je,Ye,Ze,et,tt,nt,rt,it,ot,at,st,ut,ct,dt,lt,gt,ft,mt,ht,pt,vt,bt,_t,kt,wt,yt,xt,It,Et,St,At,Ct,Rt,Lt,Tt,Mt,Pt,Dt,Ft=class{constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(d||(d={})).is=function(e){return"string"==typeof e},(l||(l={})).is=function(e){return"string"==typeof e},(f=g||(g={})).MIN_VALUE=-2147483648,f.MAX_VALUE=2147483647,f.is=function(e){return"number"==typeof e&&f.MIN_VALUE<=e&&e<=f.MAX_VALUE},(h=m||(m={})).MIN_VALUE=0,h.MAX_VALUE=2147483647,h.is=function(e){return"number"==typeof e&&h.MIN_VALUE<=e&&e<=h.MAX_VALUE},(v=p||(p={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=m.MAX_VALUE),t===Number.MAX_VALUE&&(t=m.MAX_VALUE),{line:e,character:t}},v.is=function(e){let t=e;return jt.objectLiteral(t)&&jt.uinteger(t.line)&&jt.uinteger(t.character)},(_=b||(b={})).create=function(e,t,n,r){if(jt.uinteger(e)&&jt.uinteger(t)&&jt.uinteger(n)&&jt.uinteger(r))return{start:p.create(e,t),end:p.create(n,r)};if(p.is(e)&&p.is(t))return{start:e,end:t};throw new Error(`Range#create called with invalid arguments[${e}, ${t}, ${n}, ${r}]`)},_.is=function(e){let t=e;return jt.objectLiteral(t)&&p.is(t.start)&&p.is(t.end)},(w=k||(k={})).create=function(e,t){return{uri:e,range:t}},w.is=function(e){let t=e;return jt.objectLiteral(t)&&b.is(t.range)&&(jt.string(t.uri)||jt.undefined(t.uri))},(x=y||(y={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},x.is=function(e){let t=e;return jt.objectLiteral(t)&&b.is(t.targetRange)&&jt.string(t.targetUri)&&b.is(t.targetSelectionRange)&&(b.is(t.originSelectionRange)||jt.undefined(t.originSelectionRange))},(E=I||(I={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},E.is=function(e){const t=e;return jt.objectLiteral(t)&&jt.numberRange(t.red,0,1)&&jt.numberRange(t.green,0,1)&&jt.numberRange(t.blue,0,1)&&jt.numberRange(t.alpha,0,1)},(A=S||(S={})).create=function(e,t){return{range:e,color:t}},A.is=function(e){const t=e;return jt.objectLiteral(t)&&b.is(t.range)&&I.is(t.color)},(R=C||(C={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},R.is=function(e){const t=e;return jt.objectLiteral(t)&&jt.string(t.label)&&(jt.undefined(t.textEdit)||z.is(t))&&(jt.undefined(t.additionalTextEdits)||jt.typedArray(t.additionalTextEdits,z.is))},(T=L||(L={})).Comment="comment",T.Imports="imports",T.Region="region",(P=M||(M={})).create=function(e,t,n,r,i,o){const a={startLine:e,endLine:t};return jt.defined(n)&&(a.startCharacter=n),jt.defined(r)&&(a.endCharacter=r),jt.defined(i)&&(a.kind=i),jt.defined(o)&&(a.collapsedText=o),a},P.is=function(e){const t=e;return jt.objectLiteral(t)&&jt.uinteger(t.startLine)&&jt.uinteger(t.startLine)&&(jt.undefined(t.startCharacter)||jt.uinteger(t.startCharacter))&&(jt.undefined(t.endCharacter)||jt.uinteger(t.endCharacter))&&(jt.undefined(t.kind)||jt.string(t.kind))},(F=D||(D={})).create=function(e,t){return{location:e,message:t}},F.is=function(e){let t=e;return jt.defined(t)&&k.is(t.location)&&jt.string(t.message)},(N=j||(j={})).Error=1,N.Warning=2,N.Information=3,N.Hint=4,(V=U||(U={})).Unnecessary=1,V.Deprecated=2,(O||(O={})).is=function(e){const t=e;return jt.objectLiteral(t)&&jt.string(t.href)},(H=W||(W={})).create=function(e,t,n,r,i,o){let a={range:e,message:t};return jt.defined(n)&&(a.severity=n),jt.defined(r)&&(a.code=r),jt.defined(i)&&(a.source=i),jt.defined(o)&&(a.relatedInformation=o),a},H.is=function(e){var t;let n=e;return jt.defined(n)&&b.is(n.range)&&jt.string(n.message)&&(jt.number(n.severity)||jt.undefined(n.severity))&&(jt.integer(n.code)||jt.string(n.code)||jt.undefined(n.code))&&(jt.undefined(n.codeDescription)||jt.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(jt.string(n.source)||jt.undefined(n.source))&&(jt.undefined(n.relatedInformation)||jt.typedArray(n.relatedInformation,D.is))},(X=K||(K={})).create=function(e,t,...n){let r={title:e,command:t};return jt.defined(n)&&n.length>0&&(r.arguments=n),r},X.is=function(e){let t=e;return jt.defined(t)&&jt.string(t.title)&&jt.string(t.command)},($=z||(z={})).replace=function(e,t){return{range:e,newText:t}},$.insert=function(e,t){return{range:{start:e,end:e},newText:t}},$.del=function(e){return{range:e,newText:""}},$.is=function(e){const t=e;return jt.objectLiteral(t)&&jt.string(t.newText)&&b.is(t.range)},(q=B||(B={})).create=function(e,t,n){const r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},q.is=function(e){const t=e;return jt.objectLiteral(t)&&jt.string(t.label)&&(jt.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(jt.string(t.description)||void 0===t.description)},(Q||(Q={})).is=function(e){const t=e;return jt.string(t)},(J=G||(G={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},J.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},J.del=function(e,t){return{range:e,newText:"",annotationId:t}},J.is=function(e){const t=e;return z.is(t)&&(B.is(t.annotationId)||Q.is(t.annotationId))},(Z=Y||(Y={})).create=function(e,t){return{textDocument:e,edits:t}},Z.is=function(e){let t=e;return jt.defined(t)&&le.is(t.textDocument)&&Array.isArray(t.edits)},(te=ee||(ee={})).create=function(e,t,n){let r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},te.is=function(e){let t=e;return t&&"create"===t.kind&&jt.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||jt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||jt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||Q.is(t.annotationId))},(re=ne||(ne={})).create=function(e,t,n,r){let i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},re.is=function(e){let t=e;return t&&"rename"===t.kind&&jt.string(t.oldUri)&&jt.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||jt.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||jt.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||Q.is(t.annotationId))},(oe=ie||(ie={})).create=function(e,t,n){let r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},oe.is=function(e){let t=e;return t&&"delete"===t.kind&&jt.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||jt.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||jt.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||Q.is(t.annotationId))},(ae||(ae={})).is=function(e){let t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((e=>jt.string(e.kind)?ee.is(e)||ne.is(e)||ie.is(e):Y.is(e))))},(ue=se||(se={})).create=function(e){return{uri:e}},ue.is=function(e){let t=e;return jt.defined(t)&&jt.string(t.uri)},(de=ce||(ce={})).create=function(e,t){return{uri:e,version:t}},de.is=function(e){let t=e;return jt.defined(t)&&jt.string(t.uri)&&jt.integer(t.version)},(ge=le||(le={})).create=function(e,t){return{uri:e,version:t}},ge.is=function(e){let t=e;return jt.defined(t)&&jt.string(t.uri)&&(null===t.version||jt.integer(t.version))},(me=fe||(fe={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},me.is=function(e){let t=e;return jt.defined(t)&&jt.string(t.uri)&&jt.string(t.languageId)&&jt.integer(t.version)&&jt.string(t.text)},(pe=he||(he={})).PlainText="plaintext",pe.Markdown="markdown",pe.is=function(e){const t=e;return t===pe.PlainText||t===pe.Markdown},(ve||(ve={})).is=function(e){const t=e;return jt.objectLiteral(e)&&he.is(t.kind)&&jt.string(t.value)},(_e=be||(be={})).Text=1,_e.Method=2,_e.Function=3,_e.Constructor=4,_e.Field=5,_e.Variable=6,_e.Class=7,_e.Interface=8,_e.Module=9,_e.Property=10,_e.Unit=11,_e.Value=12,_e.Enum=13,_e.Keyword=14,_e.Snippet=15,_e.Color=16,_e.File=17,_e.Reference=18,_e.Folder=19,_e.EnumMember=20,_e.Constant=21,_e.Struct=22,_e.Event=23,_e.Operator=24,_e.TypeParameter=25,(we=ke||(ke={})).PlainText=1,we.Snippet=2,(ye||(ye={})).Deprecated=1,(Ie=xe||(xe={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},Ie.is=function(e){const t=e;return t&&jt.string(t.newText)&&b.is(t.insert)&&b.is(t.replace)},(Se=Ee||(Ee={})).asIs=1,Se.adjustIndentation=2,(Ae||(Ae={})).is=function(e){const t=e;return t&&(jt.string(t.detail)||void 0===t.detail)&&(jt.string(t.description)||void 0===t.description)},(Ce||(Ce={})).create=function(e){return{label:e}},(Re||(Re={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Te=Le||(Le={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Te.is=function(e){const t=e;return jt.string(t)||jt.objectLiteral(t)&&jt.string(t.language)&&jt.string(t.value)},(Me||(Me={})).is=function(e){let t=e;return!!t&&jt.objectLiteral(t)&&(ve.is(t.contents)||Le.is(t.contents)||jt.typedArray(t.contents,Le.is))&&(void 0===e.range||b.is(e.range))},(Pe||(Pe={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(De||(De={})).create=function(e,t,...n){let r={label:e};return jt.defined(t)&&(r.documentation=t),jt.defined(n)?r.parameters=n:r.parameters=[],r},(je=Fe||(Fe={})).Text=1,je.Read=2,je.Write=3,(Ne||(Ne={})).create=function(e,t){let n={range:e};return jt.number(t)&&(n.kind=t),n},(Ve=Ue||(Ue={})).File=1,Ve.Module=2,Ve.Namespace=3,Ve.Package=4,Ve.Class=5,Ve.Method=6,Ve.Property=7,Ve.Field=8,Ve.Constructor=9,Ve.Enum=10,Ve.Interface=11,Ve.Function=12,Ve.Variable=13,Ve.Constant=14,Ve.String=15,Ve.Number=16,Ve.Boolean=17,Ve.Array=18,Ve.Object=19,Ve.Key=20,Ve.Null=21,Ve.EnumMember=22,Ve.Struct=23,Ve.Event=24,Ve.Operator=25,Ve.TypeParameter=26,(Oe||(Oe={})).Deprecated=1,(We||(We={})).create=function(e,t,n,r,i){let o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(He||(He={})).create=function(e,t,n,r){return void 0!==r?{name:e,kind:t,location:{uri:n,range:r}}:{name:e,kind:t,location:{uri:n}}},(Xe=Ke||(Ke={})).create=function(e,t,n,r,i,o){let a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Xe.is=function(e){let t=e;return t&&jt.string(t.name)&&jt.number(t.kind)&&b.is(t.range)&&b.is(t.selectionRange)&&(void 0===t.detail||jt.string(t.detail))&&(void 0===t.deprecated||jt.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},($e=ze||(ze={})).Empty="",$e.QuickFix="quickfix",$e.Refactor="refactor",$e.RefactorExtract="refactor.extract",$e.RefactorInline="refactor.inline",$e.RefactorRewrite="refactor.rewrite",$e.Source="source",$e.SourceOrganizeImports="source.organizeImports",$e.SourceFixAll="source.fixAll",(qe=Be||(Be={})).Invoked=1,qe.Automatic=2,(Ge=Qe||(Qe={})).create=function(e,t,n){let r={diagnostics:e};return null!=t&&(r.only=t),null!=n&&(r.triggerKind=n),r},Ge.is=function(e){let t=e;return jt.defined(t)&&jt.typedArray(t.diagnostics,W.is)&&(void 0===t.only||jt.typedArray(t.only,jt.string))&&(void 0===t.triggerKind||t.triggerKind===Be.Invoked||t.triggerKind===Be.Automatic)},(Ye=Je||(Je={})).create=function(e,t,n){let r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):K.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},Ye.is=function(e){let t=e;return t&&jt.string(t.title)&&(void 0===t.diagnostics||jt.typedArray(t.diagnostics,W.is))&&(void 0===t.kind||jt.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||K.is(t.command))&&(void 0===t.isPreferred||jt.boolean(t.isPreferred))&&(void 0===t.edit||ae.is(t.edit))},(et=Ze||(Ze={})).create=function(e,t){let n={range:e};return jt.defined(t)&&(n.data=t),n},et.is=function(e){let t=e;return jt.defined(t)&&b.is(t.range)&&(jt.undefined(t.command)||K.is(t.command))},(nt=tt||(tt={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},nt.is=function(e){let t=e;return jt.defined(t)&&jt.uinteger(t.tabSize)&&jt.boolean(t.insertSpaces)},(it=rt||(rt={})).create=function(e,t,n){return{range:e,target:t,data:n}},it.is=function(e){let t=e;return jt.defined(t)&&b.is(t.range)&&(jt.undefined(t.target)||jt.string(t.target))},(at=ot||(ot={})).create=function(e,t){return{range:e,parent:t}},at.is=function(e){let t=e;return jt.objectLiteral(t)&&b.is(t.range)&&(void 0===t.parent||at.is(t.parent))},(ut=st||(st={})).namespace="namespace",ut.type="type",ut.class="class",ut.enum="enum",ut.interface="interface",ut.struct="struct",ut.typeParameter="typeParameter",ut.parameter="parameter",ut.variable="variable",ut.property="property",ut.enumMember="enumMember",ut.event="event",ut.function="function",ut.method="method",ut.macro="macro",ut.keyword="keyword",ut.modifier="modifier",ut.comment="comment",ut.string="string",ut.number="number",ut.regexp="regexp",ut.operator="operator",ut.decorator="decorator",(dt=ct||(ct={})).declaration="declaration",dt.definition="definition",dt.readonly="readonly",dt.static="static",dt.deprecated="deprecated",dt.abstract="abstract",dt.async="async",dt.modification="modification",dt.documentation="documentation",dt.defaultLibrary="defaultLibrary",(lt||(lt={})).is=function(e){const t=e;return jt.objectLiteral(t)&&(void 0===t.resultId||"string"==typeof t.resultId)&&Array.isArray(t.data)&&(0===t.data.length||"number"==typeof t.data[0])},(ft=gt||(gt={})).create=function(e,t){return{range:e,text:t}},ft.is=function(e){const t=e;return null!=t&&b.is(t.range)&&jt.string(t.text)},(ht=mt||(mt={})).create=function(e,t,n){return{range:e,variableName:t,caseSensitiveLookup:n}},ht.is=function(e){const t=e;return null!=t&&b.is(t.range)&&jt.boolean(t.caseSensitiveLookup)&&(jt.string(t.variableName)||void 0===t.variableName)},(vt=pt||(pt={})).create=function(e,t){return{range:e,expression:t}},vt.is=function(e){const t=e;return null!=t&&b.is(t.range)&&(jt.string(t.expression)||void 0===t.expression)},(_t=bt||(bt={})).create=function(e,t){return{frameId:e,stoppedLocation:t}},_t.is=function(e){const t=e;return jt.defined(t)&&b.is(e.stoppedLocation)},(wt=kt||(kt={})).Type=1,wt.Parameter=2,wt.is=function(e){return 1===e||2===e},(xt=yt||(yt={})).create=function(e){return{value:e}},xt.is=function(e){const t=e;return jt.objectLiteral(t)&&(void 0===t.tooltip||jt.string(t.tooltip)||ve.is(t.tooltip))&&(void 0===t.location||k.is(t.location))&&(void 0===t.command||K.is(t.command))},(Et=It||(It={})).create=function(e,t,n){const r={position:e,label:t};return void 0!==n&&(r.kind=n),r},Et.is=function(e){const t=e;return jt.objectLiteral(t)&&p.is(t.position)&&(jt.string(t.label)||jt.typedArray(t.label,yt.is))&&(void 0===t.kind||kt.is(t.kind))&&void 0===t.textEdits||jt.typedArray(t.textEdits,z.is)&&(void 0===t.tooltip||jt.string(t.tooltip)||ve.is(t.tooltip))&&(void 0===t.paddingLeft||jt.boolean(t.paddingLeft))&&(void 0===t.paddingRight||jt.boolean(t.paddingRight))},(St||(St={})).createSnippet=function(e){return{kind:"snippet",value:e}},(At||(At={})).create=function(e,t,n,r){return{insertText:e,filterText:t,range:n,command:r}},(Ct||(Ct={})).create=function(e){return{items:e}},(Lt=Rt||(Rt={})).Invoked=0,Lt.Automatic=1,(Tt||(Tt={})).create=function(e,t){return{range:e,text:t}},(Mt||(Mt={})).create=function(e,t){return{triggerKind:e,selectedCompletionInfo:t}},(Pt||(Pt={})).is=function(e){const t=e;return jt.objectLiteral(t)&&l.is(t.uri)&&jt.string(t.name)},function(e){function t(e,n){if(e.length<=1)return e;const r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);let a=0,s=0,u=0;for(;a<i.length&&s<o.length;){let t=n(i[a],o[s]);e[u++]=t<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new Nt(e,t,n,r)},e.is=function(e){let t=e;return!!(jt.defined(t)&&jt.string(t.uri)&&(jt.undefined(t.languageId)||jt.string(t.languageId))&&jt.uinteger(t.lineCount)&&jt.func(t.getText)&&jt.func(t.positionAt)&&jt.func(t.offsetAt))},e.applyEdits=function(e,n){let r=e.getText(),i=t(n,((e,t)=>{let n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length;for(let t=i.length-1;t>=0;t--){let n=i[t],a=e.offsetAt(n.range.start),s=e.offsetAt(n.range.end);if(!(s<=o))throw new Error("Overlapping edit");r=r.substring(0,a)+n.newText+r.substring(s,r.length),o=a}return r}}(Dt||(Dt={}));var jt,Nt=class{constructor(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content}update(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0}getLineOffsets(){if(void 0===this._lineOffsets){let e=[],t=this._content,n=!0;for(let r=0;r<t.length;r++){n&&(e.push(r),n=!1);let i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return p.create(0,e);for(;n<r;){let i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}let i=n-1;return p.create(i,e-t[i])}offsetAt(e){let t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;let n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)}get lineCount(){return this.getLineOffsets().length}};!function(e){const t=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.numberRange=function(e,n,r){return"[object Number]"===t.call(e)&&n<=e&&e<=r},e.integer=function(e){return"[object Number]"===t.call(e)&&-2147483648<=e&&e<=2147483647},e.uinteger=function(e){return"[object Number]"===t.call(e)&&0<=e&&e<=2147483647},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}(jt||(jt={}));var Ut=class{constructor(e,t,n){this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{c.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(c.editor.onDidCreateModel(r)),this._disposables.push(c.editor.onWillDisposeModel(i)),this._disposables.push(c.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{c.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),c.editor.getModels().forEach(r)}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:Vt(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=c.editor.getModel(e);i&&i.getLanguageId()===t&&c.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function Vt(e){switch(e){case j.Error:return c.MarkerSeverity.Error;case j.Warning:return c.MarkerSeverity.Warning;case j.Information:return c.MarkerSeverity.Info;case j.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}var Ot=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),Wt(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new c.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:Xt(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:Kt(e.textEdit.insert),replace:Kt(e.textEdit.replace)}:t.range=Kt(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(zt)),e.insertTextFormat===ke.Snippet&&(t.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function Wt(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function Ht(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function Kt(e){if(e)return new c.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function Xt(e){const t=c.languages.CompletionItemKind;switch(e){case be.Text:return t.Text;case be.Method:return t.Method;case be.Function:return t.Function;case be.Constructor:return t.Constructor;case be.Field:return t.Field;case be.Variable:return t.Variable;case be.Class:return t.Class;case be.Interface:return t.Interface;case be.Module:return t.Module;case be.Property:return t.Property;case be.Unit:return t.Unit;case be.Value:return t.Value;case be.Enum:return t.Enum;case be.Keyword:return t.Keyword;case be.Snippet:return t.Snippet;case be.Color:return t.Color;case be.File:return t.File;case be.Reference:return t.Reference}return t.Property}function zt(e){if(e)return{range:Kt(e.range),text:e.newText}}var $t=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),Wt(t)))).then((e=>{if(e)return{range:Kt(e.range),contents:qt(e.contents)}}))}};function Bt(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function qt(e){if(e)return Array.isArray(e)?e.map(Bt):[Bt(e)]}var Qt=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),Wt(t)))).then((e=>{if(e)return e.map((e=>({range:Kt(e.range),kind:Gt(e.kind)})))}))}};function Gt(e){switch(e){case Fe.Read:return c.languages.DocumentHighlightKind.Read;case Fe.Write:return c.languages.DocumentHighlightKind.Write;case Fe.Text:return c.languages.DocumentHighlightKind.Text}return c.languages.DocumentHighlightKind.Text}var Jt=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),Wt(t)))).then((e=>{if(e)return[Yt(e)]}))}};function Yt(e){return{uri:c.Uri.parse(e.uri),range:Kt(e.range)}}var Zt=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),Wt(t)))).then((e=>{if(e)return e.map(Yt)}))}},en=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),Wt(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=c.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:Kt(i.range),text:i.newText}})}return{edits:t}}(e)))}},tn=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>"children"in e?nn(e):{name:e.name,detail:"",containerName:e.containerName,kind:rn(e.kind),range:Kt(e.location.range),selectionRange:Kt(e.location.range),tags:[]}))}))}};function nn(e){return{name:e.name,detail:e.detail??"",kind:rn(e.kind),range:Kt(e.range),selectionRange:Kt(e.selectionRange),tags:e.tags??[],children:(e.children??[]).map((e=>nn(e)))}}function rn(e){let t=c.languages.SymbolKind;switch(e){case Ue.File:return t.File;case Ue.Module:return t.Module;case Ue.Namespace:return t.Namespace;case Ue.Package:return t.Package;case Ue.Class:return t.Class;case Ue.Method:return t.Method;case Ue.Property:return t.Property;case Ue.Field:return t.Field;case Ue.Constructor:return t.Constructor;case Ue.Enum:return t.Enum;case Ue.Interface:return t.Interface;case Ue.Function:return t.Function;case Ue.Variable:return t.Variable;case Ue.Constant:return t.Constant;case Ue.String:return t.String;case Ue.Number:return t.Number;case Ue.Boolean:return t.Boolean;case Ue.Array:return t.Array}return t.Function}var on=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:Kt(e.range),url:e.target})))}}))}},an=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,un(t)).then((e=>{if(e&&0!==e.length)return e.map(zt)}))))}},sn=class{constructor(e){this._worker=e,this.canFormatMultipleRanges=!1}provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),Ht(t),un(n)).then((e=>{if(e&&0!==e.length)return e.map(zt)}))))}};function un(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var cn=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:Kt(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,Ht(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=zt(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(zt)),t}))}))}},dn=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case L.Comment:return c.languages.FoldingRangeKind.Comment;case L.Imports:return c.languages.FoldingRangeKind.Imports;case L.Region:return c.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}},ln=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(Wt)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:Kt(e.range)}),e=e.parent;return t}))}))}},gn=class extends Ot{constructor(e){super(e,[".",":","<",'"',"=","/"])}};function fn(e){const t=new Ft(e),n=(...e)=>t.getLanguageServiceWorker(...e);let r=e.languageId;c.languages.registerCompletionItemProvider(r,new gn(n)),c.languages.registerHoverProvider(r,new $t(n)),c.languages.registerDocumentHighlightProvider(r,new Qt(n)),c.languages.registerLinkProvider(r,new on(n)),c.languages.registerFoldingRangeProvider(r,new dn(n)),c.languages.registerDocumentSymbolProvider(r,new tn(n)),c.languages.registerSelectionRangeProvider(r,new ln(n)),c.languages.registerRenameProvider(r,new en(n)),"html"===r&&(c.languages.registerDocumentFormattingEditProvider(r,new an(n)),c.languages.registerDocumentRangeFormattingEditProvider(r,new sn(n)))}function mn(e){const t=[],n=[],r=new Ft(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:r}=e;pn(n),r.completionItems&&n.push(c.languages.registerCompletionItemProvider(t,new gn(i))),r.hovers&&n.push(c.languages.registerHoverProvider(t,new $t(i))),r.documentHighlights&&n.push(c.languages.registerDocumentHighlightProvider(t,new Qt(i))),r.links&&n.push(c.languages.registerLinkProvider(t,new on(i))),r.documentSymbols&&n.push(c.languages.registerDocumentSymbolProvider(t,new tn(i))),r.rename&&n.push(c.languages.registerRenameProvider(t,new en(i))),r.foldingRanges&&n.push(c.languages.registerFoldingRangeProvider(t,new dn(i))),r.selectionRanges&&n.push(c.languages.registerSelectionRangeProvider(t,new ln(i))),r.documentFormattingEdits&&n.push(c.languages.registerDocumentFormattingEditProvider(t,new an(i))),r.documentRangeFormattingEdits&&n.push(c.languages.registerDocumentRangeFormattingEditProvider(t,new sn(i)))}(),t.push(hn(n)),hn(t)}function hn(e){return{dispose:()=>pn(e)}}function pn(e){for(;e.length;)e.pop().dispose()}}}]);