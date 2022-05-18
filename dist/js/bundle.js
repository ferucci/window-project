(()=>{"use strict";const e=({formsEl:e,calcElem:t=[]})=>{const o=document.querySelector(e),s=document.createElement("div"),n="Ошибка";try{if(!o)throw new Error("Данная форма не существует.");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),c=new FormData(o),l={};var r;t.forEach((e=>{const t=document.getElementById(e.id);"input"===e.type&&""!==t.value&&"0"!==t.value&&(l[e.id]=t.value)})),s.textContent="Загрузка",o.append(s),c.forEach(((e,t)=>{l[t]=e})),(e=>{let t=!0;return e.forEach((e=>{e.classList.contains("success")&&""!==e.value||(t=!1)})),t})(e)?(r=l,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{s.style.color="#eee",s.textContent="Данные отправлены. Наш менеджер с вами свяжится в ближайшее время.",e.forEach(((e,t)=>{t<2&&(e.value="")}))})).catch((e=>{s.textContent=n})):(s.textContent=n,s.style.color="red",console.log("Данные не валидны"))})(),setTimeout((()=>s.remove()),4e3)}))}catch(e){console.log(e.message)}};(()=>{const e=document.querySelector(".header-modal"),t=document.querySelector(".services-modal"),o=document.querySelector(".overlay"),s=document.querySelector("body"),n=e=>{e.style.display="block",o.style.display="block"};s.addEventListener("click",(o=>{o.target.closest("a.btn-block")?(o.preventDefault(),n(e)):o.target.closest(".service-button")&&n(t)})),s.addEventListener("click",(s=>{s.target.closest(".header-modal__close")||s.target.closest(".overlay")&&"block"==e.style.display?(e.style.display="none",o.style.display="none"):(s.target.closest(".services-modal__close")||s.target.closest(".overlay"))&&(t.style.display="none",o.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".benefits__item"),t=document.querySelector(".benefits-arrows"),o=document.querySelector(".benefits-inner"),s=document.querySelector(".benefits-wrap");let n,c,l=0;const r=(t=1,s=1)=>(n=o.clientWidth/t,c=s*n,e.forEach((e=>{e.style.minWidth=n})),{itemWidth:n,movePosition:c}),a=()=>{s.style.cssText+=`transform: translateX(${l}px)`},i=()=>{(l>0||l<-1080)&&(s.style.cssText="transform: translateX(0px)",l=0)};t.addEventListener("click",(e=>{e.target.closest("button.benefits__arrow--left")?(r(1,1),l+=c,a(),i()):e.target.closest("button.benefits__arrow--right")&&(r(1,1),l-=c,a(),i())})),document.documentElement.clientWidth<576&&(o.style.maxWidth="185px")})(),(()=>{const e=document.getElementById("services").querySelector(".row"),t=e.querySelectorAll(".services__item"),o=e.querySelectorAll(".services-arrows");let s=0;document.documentElement.clientWidth<576&&(t[0].classList.add("services__item--active"),t[1].classList.remove("services__item--active"));o.forEach(((e,o)=>{e.addEventListener("click",(e=>{document.documentElement.clientWidth>576?(e.target.closest(".services__arrow--right")||e.target.closest(".services__arrow--left"))&&t.forEach(((e,o)=>{t[o].classList.toggle("services__item--active")})):e.target.closest(".services__arrow--right")?(t[s].classList.remove("services__item--active"),s++,s>=t.length&&(s=0),t[s].classList.add("services__item--active")):e.target.closest(".services__arrow--left")&&0!==s&&(t[s].classList.remove("services__item--active"),s--,s<0&&(s=t.length-1),t[s].classList.add("services__item--active"))}))}))})(),(()=>{const e=document.querySelector(".smooth-scroll"),t=()=>{window.pageYOffset>0&&(window.scrollBy(0,-70),setTimeout(t,0))};window.addEventListener("scroll",(()=>{let t=window.pageYOffset,o=document.documentElement.clientHeight;e.style.opacity=t>o?1:0})),e.addEventListener("click",t)})(),(e=>{const t=document.getElementById("calc"),o=document.getElementById("calc-type"),s=document.getElementById("calc-type-material"),n=document.getElementById("calc-input");let c=document.getElementById("calc-total");t.addEventListener("change",(t=>(()=>{const t=+o.options[o.selectedIndex].value,l=n.value;let r=+s.options[s.selectedIndex].value,a=0,i=1;n.value>99&&(i=1.7),s.value>0||(r=1),a=o.value>0&&n.value&&/\d+/g.test(n.value)?e*t*r*l*i:0,c.value=Math.round(a),(({timing:e,draw:t,duration:o})=>{let s=performance.now();requestAnimationFrame((function n(c){let l=(c-s)/o;l>1&&(l=1);let r=e(l);t(r),l<1&&requestAnimationFrame(n)}))})({duration:333,timing:e=>e,draw(e){c=document.getElementById("calc-total"),c.value=Math.round(a/(1/e))}})})()))})(300),(e=>{const t=document.querySelectorAll(".count-wrap"),o=()=>{let s=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60)%24,minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.forEach(((e,t)=>{e.querySelector(".count_1>span").textContent=("0"+s.days).slice(-2),e.querySelector(".count_2>span").textContent=("0"+s.hours).slice(-2),e.querySelector(".count_3>span").textContent=("0"+s.minutes).slice(-2),e.querySelector(".count_4>span").textContent=("0"+s.seconds).slice(-2)})),s.timeRemaining>0?setTimeout(o,1e3):s.timeRemaining<=0&&t.forEach(((e,t)=>{e.querySelector(".count_1>span").textContent="00",e.querySelector(".count_2>span").textContent="00",e.querySelector(".count_3>span").textContent="00",e.querySelector(".count_4>span").textContent="00"}))};o()})("20 may 2022"),document.querySelectorAll("form").forEach((e=>{const t=e.querySelectorAll("input"),o=e=>{e.classList.remove("false"),e.classList.add("success")},s=e=>{e.classList.add("false"),e.classList.remove("success")};t.forEach((e=>{let t=e.parentNode,n=document.createElement("p");n.style.cssText="font-weight: bold; color: red; margin: 7px 0px 0px 7px;",e===e.closest('input[name="fio"]')?e.addEventListener("blur",(c=>{c.target.value=c.target.value.replace(/(?:^|\s|[-"'([{])+\S/g,(e=>e.toUpperCase())).replace(/[^а-яА-ЯёЁA-Za-z\-\s]/g,"").replace(/\s+/g," "),/[а-яА-Я]/g.test(e.value)||/[A-Za-z]/g.test(e.value)?(o(e),n&&n.remove()):(s(e),n.textContent="Неправильно заполнено Имя",t.append(n))})):e===e.closest('input[name="phone"]')?e.addEventListener("blur",(c=>{c.target.value=c.target.value.replace(/[^\d\+]+/g,"").replace(/\s+/g," "),/^[\+\d]{5,16}$/.test(e.value)?(o(e),n&&n.remove()):(s(e),n.textContent="Неправильно заполнен Телефон",t.append(n))})):e===e.closest('input[type="hidden"]')&&o(e)}))})),e({formsEl:'form[name="action-form2"]',calcElem:[{type:"input",id:"calc-total"}]}),e({formsEl:'form[name="action-form"]',calcElem:[{type:"input",id:"calc-total"}]})})();