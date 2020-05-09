(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(10),o=(r(0),r(180)),i={id:"upgrade-guide",title:"Upgrade Guide",sidebar_label:"Upgrade Guide"},c={id:"upgrade-guide",title:"Upgrade Guide",description:"This project moves pretty quickly and demonstrates the best practices of JavaScript, Electron, and React. Keep in mind that this is a boilerplate project with a purposefully tiny feature set (a counter). The boilerplate will enable you to build an advanced app with a large feature set, and over time your advanced app will diverge from the simple feature set of the boilerplate.",source:"@site/docs/upgrade-guide.md",permalink:"/docs/upgrade-guide",sidebar_label:"Upgrade Guide",sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/faq"},next:{title:"App Showcase",permalink:"/docs/app-showcase"}},p=[],l={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This project moves pretty quickly and demonstrates the best practices of JavaScript, Electron, and React. Keep in mind that this is a boilerplate project with a purposefully tiny feature set (a counter). The boilerplate will enable you to build an advanced app with a large feature set, and over time your advanced app will diverge from the simple feature set of the boilerplate."),Object(o.b)("h4",{id:"tips-for-keeping-your-app-modernized"},"Tips for keeping your app modernized"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Track explanations of the changes between versions in this ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://electron-react-boilerplate.js.org/docs/upgrade-guide#ugrading-to-0170-from-0160"}),"Upgrade Guide")," and in the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/blob/next/CHANGELOG.md"}),"CHANGELOG"),"."),Object(o.b)("li",{parentName:"ul"},"Try merging new releases into your project, especially early on, but expect your project to evolve beyond the boilerplate and for merging upstream changes into your project to become untenable."),Object(o.b)("li",{parentName:"ul"},"Subscribe to changes from this repo. Even if you can't merge every change into your project, watching changes from this repo will help ensure you don't miss major changes, and help you appreciate the smaller ones."),Object(o.b)("li",{parentName:"ul"},"If something breaks in your app, try it in the boilerplate. Seeing if something works in the boilerplate can help you understand if it's a configuration issue inherited by the boilerplate or something you broke on your own. This is especially relevant for building native modules, Webpack config changes, babel config changes, additional renderer processes, etc."),Object(o.b)("li",{parentName:"ul"},"Be realistic about what this project gives you. The boilerplate is meant to be a working educational example. It's a demonstration, not a black-box development framework for you to build on top of. Inspect the boilerplate, understand how it works, and tweak your app to meet your needs.")))}u.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),b=n,f=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return r?a.a.createElement(f,c({ref:t},l,{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);