import{fA as U,fB as de,Q as ge,bW as l,J as me,r as x,a as ue,K as h,e as pe}from"./strapi-DYO6Ziap.js";import{P as c}from"./index-DlupjiHK.js";import{c as be,C as he}from"./index-DqzKUT9b.js";const fe=U`
  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 1.4rem;
  }

  .ck-editor__main {
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 0.6em;
      font-weight: 400;
    }

    h2 {
      font-size: 2.688rem;
      margin-bottom: 0.4em;
      font-weight: 400;
    }

    h3 {
      font-size: 2.176rem;
      margin-bottom: 0.2em;
      font-weight: 400;
    }

    h4 {
      font-size: 1.84rem;
      margin-bottom: 0.1em;
      font-weight: 400;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6em;
      margin-bottom: 0.8em;
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 1.2rem;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    .image figcaption {
      font-size: 1.2rem;
    }

    blockquote {
    }

    .table {
      font-size: 1.6rem;
    }

    code {
      font-size: 1.4rem;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      font-size: 1.6rem;
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub
    }

    sup {
      vertical-align: super
    }

    // higher specificity needed
    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }
`,ke=U`
`,Ce=U`
  .ck {
    --ck-color-toolbar-background: rgb(24, 24, 38);
    --ck-color-text: rgb(165, 165, 186);
    --ck-color-editor-base-text: rgb(255, 255, 255);
    --ck-color-toolbar-border: rgb(74, 74, 106);
    --ck-color-base-border: rgb(74, 74, 106);
    --ck-color-base-background: rgb(33, 33, 52);
    --ck-color-button-default-background: rgb(33, 33, 52);
    --ck-color-list-button-hover-background: rgb(24, 24, 38);
    --ck-color-button-default-hover-background: rgb(33, 33, 52);
    --ck-color-button-on-background: rgb(33, 33, 52);
    --ck-color-button-on-hover-background: rgb(33, 33, 52);
    --ck-color-button-default-active-background: rgb(33, 33, 52);
  }
  .ck-word-count {
    color: rgb(165, 165, 186)
  }
`,xe=o=>{let e=null;switch(o){case"dark":e=Ce;break;case"light":e=ke;break}return de`
    ${fe}
    ${e}
  `},{Plugin:ve}=window.CKEDITOR,{ButtonView:we}=window.CKEDITOR,Ee='<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.3.6a.9.9 0 100 1.8h15.311a.9.9 0 100-1.8H4.301zm17.1 3.7A1.6 1.6 0 0123 5.9v15.5a1.6 1.6 0 01-1.6 1.6H2.6A1.601 1.601 0 011 21.4V8 5.915C1 5.03 1.716 4.3 2.6 4.3h18.8zM5.032 19.18h14.336l-3.136-3.205-1.792 1.831-4.032-4.12-5.376 5.494zm13.44-8.697c0 1.282-.985 2.289-2.24 2.289-1.254 0-2.24-1.007-2.24-2.29 0-1.281.986-2.288 2.24-2.288 1.255 0 2.24 1.007 2.24 2.289z"></path></svg>';class v extends ve{strapiToggle=null;static get pluginName(){return"strapiMediaLib"}init(){this.editor.ui.componentFactory.add("strapiMediaLib",()=>{const t=new we;return t.set({label:"Media Library",icon:Ee,tooltip:!0}),t.on("execute",this.toggle.bind(this)),t})}connect(e){if(typeof e!="function")throw new Error("Input parameter for toogle should be a function");this.strapiToggle=e}toggle(){if(typeof this.strapiToggle!="function")throw new Error("Strapi media library toggle function not connected. Use connect function first");this.strapiToggle()}}const Ie="1.1.1",w=be("strapi",{version:Ie}),{Plugin:Te}=window.CKEDITOR;class Pe extends Te{static get pluginName(){return"MaximumLength"}static get requires(){return["WordCount"]}init(){const e=this.editor,t=e.plugins.get("WordCount"),i=e.config.get("maximumLength.characters");let n=!1;e.model.document.registerPostFixer(d=>{const a=t.characters,r=this._calculateExcessRange(i,a);r?n?d.updateMarker("maximumLengthExcess",{range:r,usingOperation:!1}):(d.addMarker("maximumLengthExcess",{range:r,usingOperation:!1}),n=!0):n&&(d.removeMarker("maximumLengthExcess"),n=!1)}),e.conversion.for("editingDowncast").markerToHighlight({model:"maximumLengthExcess",view:{classes:"ck-maximum-length-excess"}})}_calculateExcessRange(e,t){if(e>t)return null;const i=this.editor,d=i.model.createRangeIn(i.model.document.getRoot()).getWalker({singleCharacters:!0,direction:"backward"});let a=t,r,s;for(const u of d)if(u.type=="text"&&(r||(r=u.previousPosition),a--,a<e))return s=u.previousPosition,i.model.createRange(s,r)}}const{Alignment:ye,Autoformat:E,Bold:I,Italic:T,Underline:Le,Strikethrough:Ne,Code:_e,Subscript:Se,Superscript:Re,BlockQuote:q,CodeBlock:Q,Essentials:P,FontSize:ze,FontFamily:Me,FontColor:He,FontBackgroundColor:je,FindAndReplace:Ae,Heading:y,HorizontalLine:De,HtmlEmbed:Fe,Image:L,ImageCaption:N,ImageStyle:_,ImageToolbar:S,ImageUpload:R,ImageResize:Ke,Indent:z,IndentBlock:Oe,Link:M,LinkImage:J,List:H,ListProperties:Ve,TodoList:Be,Markdown:Ue,MediaEmbed:X,Paragraph:j,PasteFromOffice:A,RemoveFormat:We,SpecialCharacters:$e,SpecialCharactersEssentials:Ge,Table:D,TableToolbar:F,TableProperties:qe,TableCellProperties:Qe,TableColumnResize:K,TableCaption:O,WordCount:V,Highlight:Je}=window.CKEDITOR,B={light:{plugins:[E,I,T,P,y,L,N,_,S,R,z,M,H,j,A,D,F,K,O,V,v,w],toolbar:["undo","redo","|","heading","|","bold","italic","|","link","strapiMediaLib","insertTable","|","bulletedList","numberedList"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","toggleTableCaption"]},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}},standard:{plugins:[E,I,T,q,Q,P,y,L,N,_,S,R,z,M,J,H,X,j,A,D,F,K,O,V,v,w],toolbar:["undo","redo","|","heading","|","bold","italic","|","link","strapiMediaLib","mediaEmbed","blockQuote","insertTable","codeBlock","|","bulletedList","numberedList","outdent","indent"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative","|","linkImage"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","toggleTableCaption"]},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}},rich:{plugins:[ye,E,I,T,Le,Ne,_e,Se,Re,q,Q,P,ze,Me,He,je,Ae,y,De,Fe,L,N,_,S,R,Ke,z,Oe,M,J,H,Ve,Be,X,j,A,We,$e,Ge,D,F,qe,Qe,K,O,V,Je,v,w],toolbar:{items:["undo","redo","|","findAndReplace","selectAll","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","superscript","subscript","code","removeFormat","-","link","strapiMediaLib","mediaEmbed","insertTable","horizontalLine","blockQuote","codeBlock","htmlEmbed","specialCharacters","highlight","|","alignment","|","bulletedList","numberedList","todoList","outdent","indent"],shouldNotGroupWhenFull:!0},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},image:{resizeUnit:"%",resizeOptions:[{name:"resizeImage:original",value:null,icon:"original"},{name:"resizeImage:25",value:"25",icon:"small"},{name:"resizeImage:50",value:"50",icon:"medium"},{name:"resizeImage:75",value:"75",icon:"large"}],toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative","|","linkImage","|","resizeImage:25","resizeImage:50","resizeImage:75","resizeImage:original"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","tableCellProperties","tableProperties","|","toggleTableCaption"]},fontSize:{options:[9,11,13,"default",17,19,21,27,35],supportAllValues:!1},fontFamily:{options:["default","Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif","Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif"],supportAllValues:!0},fontColor:{columns:5,documentColors:10},fontBackgroundColor:{columns:5,documentColors:10},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}}};class Xe{constructor(e){this.fieldConfig=e}getEditorConfig(){const e=this._getBaseConfig(),t=this.fieldConfig.maxLength,i=this.fieldConfig.options.output,n=this.fieldConfig.licenseKey;return e.licenseKey=n,i==="Markdown"&&e.plugins.push(Ue),t&&(e.plugins.push(Pe),e.maximumLength={characters:t}),e}_getBaseConfig(){const e=this.fieldConfig.options.preset;switch(e){case"light":return B.light;case"standard":return B.standard;case"rich":return B.rich;default:throw new Error("Invalid preset name "+e)}}}function Ye(o){return o&&o.startsWith("/")?`${window.strapi.backendURL}${o}`:o}const Z=({isOpen:o=!1,onChange:e=()=>{},onToggle:t=()=>{}})=>{const{components:i}=ge("library",a=>a),n=i["media-library"],d=a=>{const r=a.map(s=>({alt:s.alternativeText||s.name,url:Ye(s.url),mime:s.mime}));e(r)};return o?l.jsxDEV(n,{onClose:t,onSelectAssets:d},void 0,!1,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/MediaLib/index.jsx",lineNumber:25,columnNumber:5},void 0):null};Z.propTypes={isOpen:c.bool,onChange:c.func,onToggle:c.func};function Y(o){const e={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};for(const t in e){const i=e[t];o=o.replaceAll(t,i)}return o}const{ClassicEditor:Ze}=window.CKEDITOR,et=localStorage.getItem("STRAPI_THEME")||"light",tt=xe(et),ot=o=>{const{attribute:e,name:t,disabled:i,labelAction:n,required:d,description:a,error:r,intlLabel:s}=o,{onChange:u,value:ee}=me(t),[f,te]=x.useState(!1),{formatMessage:W}=ue(),{maxLengthCharacters:$,licenseKey:oe,...ie}=e.options,ne=new Xe({options:ie,maxLength:$,licenseKey:oe}).getEditorConfig(),G=x.useRef(null),[ae,re]=x.useState(!1),k=()=>re(g=>!g),se=g=>{let m="";g.map(b=>{if(b.mime.includes("image")){const le=Y(b.url),ce=Y(b.alt);m+=`<img src="${le}" alt="${ce}" />`}});const p=f.data.processor.toView(m),C=f.data.toModel(p);f.model.insertContent(C),k()};return l.jsxDEV(h.Root,{name:t,id:t,error:r,hint:a&&W(a),children:[l.jsxDEV(pe,{spacing:1,alignItems:"normal",style:{flexDirection:"column"},children:[l.jsxDEV(h.Label,{action:n,required:d,children:s?W(s):t},void 0,!1,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:72,columnNumber:9},void 0),l.jsxDEV(tt,{},void 0,!1,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:75,columnNumber:9},void 0),l.jsxDEV(he,{editor:Ze,disabled:i,data:ee??"",onReady:g=>{const m=g.plugins.get("WordCount");G.current.appendChild(m.wordCountContainer),g.plugins.get("strapiMediaLib").connect(k),te(g)},onChange:(g,m)=>{const p=m.getData();u({target:{name:t,value:p}}),m.plugins.get("WordCount").characters>$&&console.log("Too long")},config:ne},void 0,!1,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:76,columnNumber:9},void 0),l.jsxDEV("div",{ref:G},void 0,!1,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:103,columnNumber:9},void 0),l.jsxDEV(h.Hint,{},void 0,!1,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:104,columnNumber:9},void 0),l.jsxDEV(h.Error,{},void 0,!1,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:105,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:71,columnNumber:7},void 0),l.jsxDEV(Z,{isOpen:ae,onChange:se,onToggle:k},void 0,!1,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:107,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/mac/Programing/Parsec/cms/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:64,columnNumber:5},void 0)};ot.propTypes={attribute:c.object.isRequired,name:c.string.isRequired,description:c.object,disabled:c.bool,error:c.string,labelAction:c.object,required:c.bool};export{ot as CKEditorInput};
