(()=>{"use strict";(()=>{const e=document.querySelector(".header-modal"),t=document.querySelector(".overlay"),s=document.querySelector("body");s.addEventListener("click",(s=>{s.target.closest("a.btn-block")&&(s.preventDefault(),e.style.display="block",t.style.display="block")})),s.addEventListener("click",(s=>{(s.target.closest(".header-modal__close")||s.target.closest(".overlay"))&&(e.style.display="none",t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".benefits__item"),t=document.querySelector(".benefits-arrows"),s=document.querySelector(".benefits-inner"),o=document.querySelector(".benefits-wrap");let l,r,n=0;const c=(t=1,o=1)=>(l=s.clientWidth/t,r=o*l,e.forEach((e=>{e.style.minWidth=l})),{itemWidth:l,movePosition:r}),a=()=>{o.style.cssText+=`transform: translateX(${n}px)`},i=()=>{(n>0||n<-1080)&&(o.style.cssText="transform: translateX(0px)",n=0)};t.addEventListener("click",(e=>{e.target.closest("button.benefits__arrow--left")?(c(1,1),n+=r,a(),i()):e.target.closest("button.benefits__arrow--right")&&(c(1,1),n-=r,a(),i())})),document.documentElement.clientWidth<576&&(s.style.maxWidth="185px")})()})();