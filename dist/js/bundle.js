(()=>{"use strict";(()=>{const e=document.querySelector(".header-modal"),t=document.querySelector(".services-modal"),s=document.querySelector(".overlay"),r=document.querySelector("body"),c=e=>{e.style.display="block",s.style.display="block"};r.addEventListener("click",(s=>{s.target.closest("a.btn-block")?(s.preventDefault(),c(e)):s.target.closest(".service-button")&&c(t)})),r.addEventListener("click",(r=>{r.target.closest(".header-modal__close")||r.target.closest(".overlay")&&"block"==e.style.display?(e.style.display="none",s.style.display="none"):(r.target.closest(".services-modal__close")||r.target.closest(".overlay"))&&(t.style.display="none",s.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".benefits__item"),t=document.querySelector(".benefits-arrows"),s=document.querySelector(".benefits-inner"),r=document.querySelector(".benefits-wrap");let c,l,o=0;const i=(t=1,r=1)=>(c=s.clientWidth/t,l=r*c,e.forEach((e=>{e.style.minWidth=c})),{itemWidth:c,movePosition:l}),a=()=>{r.style.cssText+=`transform: translateX(${o}px)`},n=()=>{(o>0||o<-1080)&&(r.style.cssText="transform: translateX(0px)",o=0)};t.addEventListener("click",(e=>{e.target.closest("button.benefits__arrow--left")?(i(1,1),o+=l,a(),n()):e.target.closest("button.benefits__arrow--right")&&(i(1,1),o-=l,a(),n())})),document.documentElement.clientWidth<576&&(s.style.maxWidth="185px")})(),(()=>{const e=document.getElementById("services").querySelector(".row"),t=e.querySelectorAll(".services__item"),s=e.querySelectorAll(".services-arrows");let r=0;document.documentElement.clientWidth<576&&(t[0].classList.add("services__item--active"),t[1].classList.remove("services__item--active"));s.forEach(((e,s)=>{e.addEventListener("click",(e=>{var s;document.documentElement.clientWidth>576?(e.target.closest(".services__arrow--right")||e.target.closest(".services__arrow--left"))&&t.forEach(((e,s)=>{t[s].classList.toggle("services__item--active")})):e.target.closest(".services__arrow--right")?(s="services__item--active",t[r].classList.remove(s),r++,r>=t.length&&(r=0),t[r].classList.add(s)):e.target.closest(".services__arrow--left")&&0!==r&&((e,s,c)=>{t[r].classList.remove(c),r--,r<t.length&&(r=0),t[r].classList.add(c)})(0,0,"services__item--active")}))}))})()})();