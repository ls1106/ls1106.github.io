import{_ as a,o as s,c,a as e,b as o,w as n,d as t,r as l}from"./app.f1d78d56.js";const k=JSON.parse('{"title":"git revert","description":"","frontmatter":{},"headers":[{"level":2,"title":"revert","slug":"revert","link":"#revert","children":[]}],"relativePath":"content/knowledge/git/revert.md"}'),i={name:"content/knowledge/git/revert.md"},d=e("h1",{id:"git-revert",tabindex:"-1"},[t("git revert "),e("a",{class:"header-anchor",href:"#git-revert","aria-hidden":"true"},"#")],-1),_={id:"revert",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#revert","aria-hidden":"true"},"#",-1),h=e("p",null,[e("strong",null,[e("img",{src:"https://img-blog.csdnimg.cn/a46b32ecb4b84c32892fac59fffd2131.png#pic_center",alt:""})])],-1);function g(p,f,m,u,x,b){const r=l("font");return s(),c("div",null,[d,e("h2",_,[o(r,{style:{color:"var(--myStyle-tilte-color)"}},{default:n(()=>[t("revert")]),_:1}),t(),v]),e("p",null,[e("strong",null,[t("作用：它是一个撤销操作。比如"),o(r,{style:{color:"var(--myStyle-text-color)"}},{default:n(()=>[t("想要撤销版本二的代码，但又不想影响版本三的代码，怎么办？")]),_:1}),t("可以用 git revert -n 'id'命令，生成新的版本四，版本四里会保留版本三的代码，撤销版本二的代码。实战中还是用 git revert 比较多")])]),h])}const w=a(i,[["render",g]]);export{k as __pageData,w as default};
