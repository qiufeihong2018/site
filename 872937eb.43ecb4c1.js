(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(141)),i={id:"adding-dependencies",title:"Adding Dependencies",sidebar_label:"Adding Dependencies"},c={id:"adding-dependencies",title:"Adding Dependencies",description:"## How to add modules to the project",source:"@site/docs/adding-dependencies.md",permalink:"/docs/adding-dependencies",sidebar_label:"Adding Dependencies",sidebar:"docs",previous:{title:"Adding Assets",permalink:"/docs/adding-assets"},next:{title:"Component Tests",permalink:"/docs/component-tests"}},l=[{value:"How to add modules to the project",id:"how-to-add-modules-to-the-project",children:[{value:"Module Structure",id:"module-structure",children:[]},{value:"Which <code>package.json</code> file to use",id:"which-packagejson-file-to-use",children:[]},{value:"Further Readings",id:"further-readings",children:[]}]}],d={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-add-modules-to-the-project"},"How to add modules to the project"),Object(o.b)("p",null,"You will need to add other modules to this boilerplate, depending on the requirements of your project. For example, you may want to add ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/brianc/node-postgres"}),"node-postgres")," to communicate with PostgreSQL database, or\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.material-ui.com/"}),"material-ui")," to reuse react UI components."),Object(o.b)("p",null,"\u26a0\ufe0f Please read the following section before installing any dependencies \u26a0\ufe0f"),Object(o.b)("h3",{id:"module-structure"},"Module Structure"),Object(o.b)("p",null,"This boilerplate uses a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/electron-userland/electron-builder/wiki/Two-package.json-Structure"}),"two package.json structure"),". This means, you will have two ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," files."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"./package.json")," in the root of your project"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"./app/package.json")," inside ",Object(o.b)("inlineCode",{parentName:"li"},"app")," folder")),Object(o.b)("h3",{id:"which-packagejson-file-to-use"},"Which ",Object(o.b)("inlineCode",{parentName:"h3"},"package.json")," file to use"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Rule of thumb")," is: all modules go into ",Object(o.b)("inlineCode",{parentName:"p"},"./package.json")," except native modules, or modules with native dependencies or peer dependencies. Native modules, or packages with native dependencies should go into ",Object(o.b)("inlineCode",{parentName:"p"},"./app/package.json"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If the module is native to a platform (like node-postgres), it should be listed under ",Object(o.b)("inlineCode",{parentName:"li"},"dependencies")," in ",Object(o.b)("inlineCode",{parentName:"li"},"./app/package.json")),Object(o.b)("li",{parentName:"ol"},"If a module is ",Object(o.b)("inlineCode",{parentName:"li"},"import"),"ed by another module, include it in ",Object(o.b)("inlineCode",{parentName:"li"},"dependencies")," in ",Object(o.b)("inlineCode",{parentName:"li"},"./package.json"),". See ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md"}),"this ESLint rule"),". Examples of such modules are ",Object(o.b)("inlineCode",{parentName:"li"},"material-ui"),", ",Object(o.b)("inlineCode",{parentName:"li"},"redux-form"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"moment"),"."),Object(o.b)("li",{parentName:"ol"},"Otherwise, modules used for building, testing and debugging should be included in ",Object(o.b)("inlineCode",{parentName:"li"},"devDependencies")," in ",Object(o.b)("inlineCode",{parentName:"li"},"./package.json"),".")),Object(o.b)("h3",{id:"further-readings"},"Further Readings"),Object(o.b)("p",null,"See the wiki page, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/wiki/Module-Structure----Two-package.json-Structure"}),"Module Structure\u2009\u2014\u2009Two package.json Structure")," to understand what is native module, the rationale behind two package.json structure and more."),Object(o.b)("p",null,"For an example app that uses this boilerplate and packages native dependencies, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/amilajack/erb-sqlite-example"}),"erb-sqlite-example"),"."))}p.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return n?a.a.createElement(m,c({ref:t},d,{components:n})):a.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);