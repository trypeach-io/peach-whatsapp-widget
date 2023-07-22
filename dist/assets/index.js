var d=Object.defineProperty;var c=(n,t,e)=>t in n?d(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var s=(n,t,e)=>(c(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const l=`
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
        width: 60%;
        z-index: 999;
        transition: transform .3s ease;
    }

    .peach-tooltiptext {
        width: 100%;
        background: #ffffff;
        border: 1px solid var(--brandColor);
        box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.13);
        color: #3a3a3a;
        font-size: 14px !important;
        line-height: 16.72px;
        font-weight: bold;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 4px;
        padding: 5px;
        animation: peachTooltip-slideUp 1s ease forwards 1s;
    }

    .widget__hidden {
        transform: scale(0);
    }
    .button__container {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        align-items: center;
        border: none;
        width: 80px;
        height: 80px;
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

    @keyframes peachTooltip-slideUp {
        from {
          margin-bottom: 20px;
          opacity: 0;
        }
        to {
          margin-bottom: 0px;
          opacity: 1;
        }
      }
`,p=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552">
        <defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163"/><stop offset="1" stop-color="#23b33a"/></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531"/></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"/><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
    </svg>
`;class f{constructor(t){s(this,"position","");s(this,"open",!1);s(this,"widgetContainer",null);this.position=this.getPosition(t.position),this.open=!1,this.config=t,this.initialize(),this.injectStyles()}getPosition(t){const[e,r]=t.split("-");return{[e]:"30px",[r]:"30px"}}async initialize(){const t=document.createElement("div");t.style.position="fixed",t.style.zIndex="999",Object.keys(this.position).forEach(o=>t.style[o]=this.position[o]),document.body.appendChild(t);const e=document.createElement("a");e.href=this.config.destination,e.target="_blank",e.classList.add("button__container");const r=document.createElement("span");r.classList.add("peach-tooltiptext"),r.innerHTML="Chat with us",e.appendChild(r);const i=document.createElement("span");i.innerHTML=p,i.classList.add("widget__icon"),this.widgetIcon=i,e.appendChild(this.widgetIcon),this.widgetContainer=document.createElement("div"),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.createWidgetContent(),t.appendChild(this.widgetContainer),t.appendChild(e)}createWidgetContent(){}injectStyles(){const t=document.createElement("style");var e="";this.config.brandColor&&(e=":root {--brandColor: "+this.config.brandColor+`};
`),e=e+l,t.innerHTML=e.replace(/^\s+|\n/gm,""),document.head.appendChild(t)}}function h(n,t){return Object.assign({},t,n)}function g(){window.PeachWidgetConfig||(window.PeachWidgetConfig={});const n={position:"bottom-right",destination:"https://wa.me/1234567890?text=Hello"},t=h(window.PeachWidgetConfig,n);return console.log("Initializing widget...",t),new f(t)}g();
