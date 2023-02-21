import{_ as t,o as p,c as r,a as s,b as a,w as o,d as l,e,r as c}from"./app.f1d78d56.js";const os=JSON.parse(`{"title":"Js 面试题一","description":"","frontmatter":{},"headers":[{"level":2,"title":"1、document.write 和 innerHTML 有什么区别？","slug":"_1、document-write-和-innerhtml-有什么区别","link":"#_1、document-write-和-innerhtml-有什么区别","children":[]},{"level":2,"title":"2、什么是类数组对象?","slug":"_2、什么是类数组对象","link":"#_2、什么是类数组对象","children":[]},{"level":2,"title":"3、['1', '2', '3'].map(parseInt) 的返回值是什么？","slug":"_3、-1-2-3-map-parseint-的返回值是什么","link":"#_3、-1-2-3-map-parseint-的返回值是什么","children":[]},{"level":2,"title":"4、说说对 new.target 的理解？","slug":"_4、说说对-new-target-的理解","link":"#_4、说说对-new-target-的理解","children":[]},{"level":2,"title":"5、什么是 Polyfill？","slug":"_5、什么是-polyfill","link":"#_5、什么是-polyfill","children":[]},{"level":2,"title":"6、null 是对象吗？为什么？","slug":"_6、null-是对象吗-为什么","link":"#_6、null-是对象吗-为什么","children":[]},{"level":2,"title":"7、谈谈你知道的 DOM 常见的操作？","slug":"_7、谈谈你知道的-dom-常见的操作","link":"#_7、谈谈你知道的-dom-常见的操作","children":[]},{"level":2,"title":"8、js 数组有哪些常用的方法？","slug":"_8、js-数组有哪些常用的方法","link":"#_8、js-数组有哪些常用的方法","children":[]},{"level":2,"title":"9、你了解的 web worker？","slug":"_9、你了解的-web-worker","link":"#_9、你了解的-web-worker","children":[]},{"level":2,"title":"10、Service worker 是什么？","slug":"_10、service-worker-是什么","link":"#_10、service-worker-是什么","children":[]},{"level":2,"title":"11、fetch 与 ajax 的区别？","slug":"_11、fetch-与-ajax-的区别","link":"#_11、fetch-与-ajax-的区别","children":[]},{"level":2,"title":"12、for...in 和 for...of 有什么区别？","slug":"_12、for-in-和-for-of-有什么区别","link":"#_12、for-in-和-for-of-有什么区别","children":[]}],"relativePath":"content/interview/js/interview1.md"}`),y={name:"content/interview/js/interview1.md"},i=s("h1",{id:"js-面试题一",tabindex:"-1"},[l("Js 面试题一 "),s("a",{class:"header-anchor",href:"#js-面试题一","aria-hidden":"true"},"#")],-1),D={id:"_1、document-write-和-innerhtml-有什么区别",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#_1、document-write-和-innerhtml-有什么区别","aria-hidden":"true"},"#",-1),C={id:"_2、什么是类数组对象",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#_2、什么是类数组对象","aria-hidden":"true"},"#",-1),d=s("p",null,[s("strong",null,"1）es6 里用 Array.form()将类数组对象转化为数组")],-1),_=s("p",null,[s("strong",null,"2）用循环遍历类数组对象，push 到新创建的数组里")],-1),u=s("p",null,[s("strong",null,"3）通过 call 调用数组的 slice 方法来实现转换 Array.prototype.slice.call(类数组)")],-1),h=s("p",null,[s("strong",null,"4）通过 call 调用数组的 splice 方法来实现转换 Array.prototype.splice.call(类数组, 0)")],-1),m=s("p",null,[s("strong",null,"5）通过 apply 调用数组的 concat 方法来实现转换 Array.prototype.concat.apply([], 类数组)")],-1),f={id:"_3、-1-2-3-map-parseint-的返回值是什么",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#_3、-1-2-3-map-parseint-的返回值是什么","aria-hidden":"true"},"#",-1),g=e("",1),S={id:"_4、说说对-new-target-的理解",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#_4、说说对-new-target-的理解","aria-hidden":"true"},"#",-1),x=e("",1),b={id:"_5、什么是-polyfill",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#_5、什么是-polyfill","aria-hidden":"true"},"#",-1),T={id:"_6、null-是对象吗-为什么",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#_6、null-是对象吗-为什么","aria-hidden":"true"},"#",-1),j={id:"_7、谈谈你知道的-dom-常见的操作",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#_7、谈谈你知道的-dom-常见的操作","aria-hidden":"true"},"#",-1),N=e("",1),I=e("",1),P=e("",1),V={id:"_8、js-数组有哪些常用的方法",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#_8、js-数组有哪些常用的方法","aria-hidden":"true"},"#",-1),M=e("",1),J={id:"_9、你了解的-web-worker",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#_9、你了解的-web-worker","aria-hidden":"true"},"#",-1),R=s("p",null,[s("strong",null,"1）worker 线程，它跟异步任务不同，异步任务是被读取到主线程中执行，而它是把执行结果返给主线程")],-1),H=s("p",null,[s("strong",null,"2）不意味着 JS 语言本身支持了多线程能力，而是浏览器作为宿主环境提供了 JS 一个多线程运行的环境")],-1),O={id:"_10、service-worker-是什么",tabindex:"-1"},$=s("a",{class:"header-anchor",href:"#_10、service-worker-是什么","aria-hidden":"true"},"#",-1),W=s("li",null,[s("strong",null,"它采用 JavaScript 控制关联的页面或者网站，拦截并修改访问和资源请求，细粒度地缓存资源。你可以完全控制应用在特定情形（最常见的情形是网络不可用）下的表现")],-1),G={id:"_11、fetch-与-ajax-的区别",tabindex:"-1"},X=s("a",{class:"header-anchor",href:"#_11、fetch-与-ajax-的区别","aria-hidden":"true"},"#",-1),z={id:"_12、for-in-和-for-of-有什么区别",tabindex:"-1"},K=s("a",{class:"header-anchor",href:"#_12、for-in-和-for-of-有什么区别","aria-hidden":"true"},"#",-1);function Q(U,Y,Z,ss,ls,ns){const n=c("font");return p(),r("div",null,[i,s("h2",D,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("1、document.write 和 innerHTML 有什么区别？")]),_:1}),l(),A]),s("p",null,[s("strong",null,[l("document.write 会重排("),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("重排一定会导致重绘")]),_:1}),l(")整个页面，innerHTML 重绘页面的某一部分")])]),s("h2",C,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("2、什么是类数组对象?")]),_:1}),l(),F]),s("p",null,[s("strong",null,[l("拥有 length 属性"),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("且")]),_:1}),l(" key 为非负整数，不具有数组的所具有的方法")])]),s("details",null,[s("summary",null,[a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("注意")]),_:1}),l("：类数组如何转化为数组？")]),d,_,u,h,m]),s("h2",f,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("3、['1', '2', '3'].map(parseInt) 的返回值是什么？")]),_:1}),l(),v]),g,s("h2",S,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("4、说说对 new.target 的理解？")]),_:1}),l(),E]),s("p",null,[s("strong",null,[l("如果是"),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("普通函数调用")]),_:1}),l("，new.target 的值是 undefined，如果是"),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("用 new 关键字调用的")]),_:1}),l("，则 new.target 值是构造函数")])]),x,s("h2",b,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("5、什么是 Polyfill？")]),_:1}),l(),w]),s("p",null,[s("strong",null,[l("Polyfill 是一个 js 库，主要抚平不同浏览器之间对 js 实现的差异。比如 html5 的 localStorage 不同浏览器，不同版本，有些支持，有些不支持。"),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("Polyfill 帮你把这些差异化抹平，不支持的变得支持了")]),_:1})])]),s("h2",T,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("6、null 是对象吗？为什么？")]),_:1}),l(),k]),s("p",null,[s("strong",null,[l("null 不是对象。虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，"),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object")]),_:1})])]),s("h2",j,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("7、谈谈你知道的 DOM 常见的操作？")]),_:1}),l(),q]),s("details",null,[s("summary",null,[l("创建节点("),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("4种")]),_:1}),l(")")]),N]),s("details",null,[s("summary",null,[l("获取节点("),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("6种")]),_:1}),l(")")]),I]),P,s("h2",V,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("8、js 数组有哪些常用的方法？")]),_:1}),l(),B]),M,s("h2",J,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("9、你了解的 web worker？")]),_:1}),l(),L]),s("p",null,[s("strong",null,[l("特点：worker 线程和主线程，"),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("两个线程并行执行")]),_:1}),l("，主线程将一些计算密集型或高延迟的任务交给它处理，它将处理后的结果返给主线程")])]),s("details",null,[s("summary",null,[a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("注意")]),_:1}),l("：")]),R,H]),s("h2",O,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("10、Service worker 是什么？")]),_:1}),l(),$]),s("ul",null,[s("li",null,[s("strong",null,[a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("Srvice worker 主要用来做持久的离线缓存")]),_:1}),l("，也是 Web Worker 的升级版。")])]),W]),s("h2",G,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("11、fetch 与 ajax 的区别？")]),_:1}),l(),X]),s("p",null,[s("strong",null,[l("1）"),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("fetch 基于 promise 实现，它不是 ajax 进一步封装，没有使用 XMLHttpRequest 对象")]),_:1})])]),s("p",null,[s("strong",null,[l("2）fetch "),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("对 400、500 状态码都当成功处理")]),_:1}),l("（400：请求报文语法有误，500：服务器端在执行请求时发生了错误），只有网络错误这些导致请求不能完成时（比如：服务器没有响应而导致浏览器超时 或 违反 CORS 或 没有网络连接、HTTPS 地址错误）才当错误处理")])]),s("p",null,[s("strong",null,[l("3）fetch "),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("不能监测请求进度")]),_:1}),l("，ajax 可以分步监测请求进度(4 步走)")])]),s("h2",z,[a(n,{style:{color:"var(--myStyle-tilte-color)"}},{default:o(()=>[l("12、for...in 和 for...of 有什么区别？")]),_:1}),l(),K]),s("p",null,[s("strong",null,[l("1）for...in "),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("主要是用于遍历对象")]),_:1}),l("，也可以遍历数组, 都可遍历")])]),s("p",null,[s("strong",null,[l("2）for...of "),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("主要用来遍历一个含有迭代器的数据结构")]),_:1}),l("，比如数组、类数组对象，字符串、Set、Map 以及 Generator 对象("),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("它们原型对象上都有一个 Symbol.iterator 方法，该方法可以创建一个迭代器")]),_:1}),l(")，"),a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("不能遍历对象")]),_:1}),l("(除非给对象添加迭代器)")])]),s("p",null,[s("strong",null,[a(n,{style:{color:"var(--myStyle-text-color)"}},{default:o(()=>[l("注意")]),_:1}),l("： for…of 是 ES6 新增的遍历方式，for…in 是 ES3 的遍历方式")])])])}const es=t(y,[["render",Q]]);export{os as __pageData,es as default};
