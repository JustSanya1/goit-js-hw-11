import{a as g,S as f,i as o}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function y(a){const t=new URLSearchParams({key:"51438211-e30b649eb0e533720cd6e7900",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return g.get(`https://pixabay.com/api/?${t}`).then(s=>{if(s.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.data.hits})}const c=document.querySelector(".gallery"),h=new f(".gallery-link",{}),m=document.querySelector(".loader");function L(a){let t=a.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:i,comments:p,downloads:d})=>`<li class="gallery-li">
        <a class="gallery-link" href="${n}">
            <img class="gallery-img" src="${s}" alt="${e}"/>
        </a>
        <div class="img-div">
            <p class="img-p">Likes<span class="img-span">${r}</span></p>
            <p class="img-p">Views<span class="img-span">${i}</span></p>
            <p class="img-p">Comments<span class="img-span">${p}</span></p>
            <p class="img-p">Downloads<span class="img-span">${d}</span></p>
            </div>
     </li>`).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function b(){c.innerHTML=""}function v(){m.classList.remove("visually-hidden")}function l(){m.classList.add("visually-hidden")}const u=document.querySelector(".form"),S=a=>{a.preventDefault(),b();let t=u.elements["search-text"].value.trim();t?(v(),y(t).then(s=>{l(),L(s)}).catch(s=>{l(),o.error({title:"Error",message:s.message})})):o.error({title:"Error",message:"Input must not be empty"})};u.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
