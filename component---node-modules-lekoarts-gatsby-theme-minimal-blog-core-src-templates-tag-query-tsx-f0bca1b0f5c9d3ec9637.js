(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"ET/+":function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return m}));var n=a("q1tI"),s=a.n(n),c=(a("f3/d"),a("txSG")),o=a("izhR"),r=a("Wbzz"),u=a("Q3iF"),i=a("dq5L"),l=a("b+HC"),b=a("n/Q7"),h=a("GIzu"),g=function(t){var e=t.posts,a=t.pageContext,n=Object(i.a)(),s=n.tagsPath,g=n.basePath;return Object(c.h)(u.a,null,Object(c.h)(h.a,{title:"Tag: "+a.name}),Object(c.h)(o.b,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},Object(c.h)(c.d.h2,null,a.name),Object(c.h)(c.d.a,{as:r.Link,sx:{variant:"links.secondary"},to:Object(b.a)("/"+g+"/"+s)},"View all tags")),Object(c.h)(l.a,{posts:e,sx:{mt:[4,5]}}))},m=(e.default=function(t){var e=t.data,a=t.pageContext,n=e.allPost;return s.a.createElement(g,{posts:n.nodes,pageContext:a})},"4062104895")},TI0m:function(t,e,a){"use strict";a("f3/d");var n=a("q1tI"),s=a.n(n),c=a("txSG"),o=a("Wbzz"),r=a("dq5L"),u=a("n/Q7");e.a=function(t){var e=t.tags,a=Object(r.a)(),n=a.tagsPath,i=a.basePath;return s.a.createElement(s.a.Fragment,null,e.map((function(t,e){return s.a.createElement(s.a.Fragment,{key:t.slug},!!e&&", ",s.a.createElement(c.d.a,{as:o.Link,to:Object(u.a)("/"+i+"/"+n+"/"+t.slug)},t.name))})))}},"b+HC":function(t,e,a){"use strict";var n=a("txSG"),s=a("q1tI"),c=a.n(s),o=a("izhR"),r=a("Wbzz"),u=a("TI0m"),i=function(t){var e=t.post,a=t.showTags,s=void 0===a||a;return Object(n.h)(o.a,{mb:4},Object(n.h)(n.d.a,{as:r.Link,to:e.slug,sx:{fontSize:[1,2,3],color:"text"}},e.title),Object(n.h)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},Object(n.h)("time",null,e.date),e.tags&&s&&Object(n.h)(c.a.Fragment,null," — ",Object(n.h)(u.a,{tags:e.tags}))))};e.a=function(t){var e=t.posts,a=t.className,s=t.showTags,c=void 0===s||s;return Object(n.h)("section",{sx:{mb:[5,6,7]},className:a},e.map((function(t){return Object(n.h)(i,{key:t.slug,post:t,showTags:c})})))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tag-query-tsx-f0bca1b0f5c9d3ec9637.js.map