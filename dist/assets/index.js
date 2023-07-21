var d=Object.defineProperty;var c=(n,e,i)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i;var s=(n,e,i)=>(c(n,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const l=`
    .widget__container * {
        box-sizing: border-box;
    }        
    h3, p, input {
        margin: 0;
        padding: 0;
    }
    .widget__container {
        width: 400px;
        overflow: auto;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        border-radius: 10px;
        box-sizing: border-box;
    }
    .widget__icon {
        cursor: pointer;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 999;
        transition: transform .3s ease;
    }
    .widget__hidden {
        transform: scale(0);
    }
    .button__container {
        display: block;
        border: none;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }
    .widget__container.hidden {
        max-height: 0px;
    }
    .widget__header {
        padding: 1rem 2rem 1.5rem;
        background-color: #000;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }
    .widget__header h3 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 8px;
    }
`,p=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552">
        <defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"/><stop offset="1" stop-color="#23b33a"/></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"/></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"/><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
    </svg>
`;class f{constructor(e){s(this,"position","");s(this,"open",!1);s(this,"widgetContainer",null);this.position=this.getPosition(e.position),this.open=!1,this.config=e,this.initialize(),this.injectStyles()}getPosition(e){const[i,r]=e.split("-");return{[i]:"30px",[r]:"30px"}}async initialize(){const e=document.createElement("div");e.style.position="fixed",e.style.zIndex="999",Object.keys(this.position).forEach(t=>e.style[t]=this.position[t]),document.body.appendChild(e);const i=document.createElement("a");i.href=this.config.destination,i.target="_blank",i.classList.add("button__container");const r=document.createElement("span");r.innerHTML=p,r.classList.add("widget__icon"),this.widgetIcon=r,i.appendChild(this.widgetIcon),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.createWidgetContent(),e.appendChild(this.widgetContainer),e.appendChild(i)}createWidgetContent(){}injectStyles(){const e=document.createElement("style");e.innerHTML=l.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}}function h(n,e){return Object.assign({},e,n)}function g(){window.PeachWidgetConfig||(window.PeachWidgetConfig={});const n={position:"bottom-right",destination:"https://wa.me/1234567890?text=Hello"},e=h(window.PeachWidgetConfig,n);return console.log("Initializing widget...",e),new f(e)}g();
