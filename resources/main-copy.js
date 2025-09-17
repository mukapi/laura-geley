var F0 = Object.defineProperty;
var L0 = (Xr, yn, as) =>
  yn in Xr
    ? F0(Xr, yn, { enumerable: !0, configurable: !0, writable: !0, value: as })
    : (Xr[yn] = as);
var oe = (Xr, yn, as) => L0(Xr, typeof yn != "symbol" ? yn + "" : yn, as);
(function (Xr) {
  typeof define == "function" && define.amd ? define(Xr) : Xr();
})(function () {
  "use strict";
  var Xr = document.createElement("style");
  (Xr.textContent = `.swiper-pagination{position:relative!important;display:flex!important;justify-content:center!important;align-items:center!important;gap:.5rem!important;padding-top:2.5rem!important}.swiper-pagination-bullet{width:.5rem!important;height:.5rem!important;background-color:#fff!important;opacity:.4!important;border-radius:9999px!important;transition:all .6s ease!important;cursor:pointer!important;margin:0!important}.t-team__crew-swiper .swiper-pagination{padding-bottom:3.125rem!important}.t-team__crew-swiper .swiper-pagination-bullet{background-color:#000!important}.swiper-pagination-bullet-active{width:1.5rem!important;opacity:1!important}@media (min-width: 992px){.swiper-pagination{display:none!important}}.button--h-logos.active{background-color:#fff;color:#000}.h-logos__cl-image{transition:opacity .4s ease}.h-logos__cl-image{transition:all .4s ease}.h-logos__interface{opacity:0;transform:rotate(0) scale(0);transition:all .4s ease}.h-logos__cl-item:hover .h-logos__interface{transform:rotate(-12deg) scale(1);opacity:1;transition:all .6s ease}.button--h-logos.active{background-color:(--_2025---content-secondary);color:(--_2025---content-primary)}@media (min-width: 992px){.h-logos__cl-item:hover .h-logos__cl-image{opacity:1;transition:all .6s ease}.h-testimonials__cl.swiper-wrapper{display:flex!important;flex-direction:column!important;align-items:stretch;transform:none!important}.header__toggle-content{transition:opacity .2s ease}.h-team__image{transition:all .6s ease}.h-team__cl-link:hover .h-team__image{transform:scale(1);transition:all .6s ease}}.p-list__cl-item{transition:opacity .2s ease}.p-list__cl-item--disabled{opacity:.2;transition:opacity .2s ease}.button.button--grey{transition:all .2s ease}.button.button--grey.active{background-color:#000;color:#fff;transition:all .2s ease}.split-line{display:block;line-height:inherit}.split-word{display:inline-block;position:relative}.split-word-inner{display:inline-block;will-change:transform}.form__link-wrapper:hover .form__link-divider{transform:scale(1);transition:all .4s ease}.form__link-divider{transition:all .4s ease}.button--header-desktop{position:relative;background-color:#fff;color:#000;cursor:pointer;overflow:hidden;transition:background-color .3s ease,color .3s ease}.button--header-desktop .button__text-wrapper{position:relative;overflow:hidden}.button--header-desktop .button__text{display:block;position:relative;transform:translateY(0)}.button--header-desktop .button__text--duplicate{display:block;position:absolute;top:100%;left:0;width:100%}.button--header-desktop:hover{background-color:#000;color:#fff}html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth [data-lenis-prevent]{overscroll-behavior:contain}.lenis.lenis-stopped{overflow:clip}.lenis.lenis-smooth iframe{pointer-events:none}@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.swiper-virtual .swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper:after{content:"";position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper:after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper:after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:var(--swiper-navigation-top-offset, 50%);width:calc(var(--swiper-navigation-size) / 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-prev svg,.swiper-rtl .swiper-button-next svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset, 10px);right:auto}.swiper-button-lock{display:none}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset, 10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-pagination-fraction,.swiper-pagination-custom,.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal{bottom:var(--swiper-pagination-bottom, 8px);top:var(--swiper-pagination-top, auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));height:var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius, 50%);background:var(--swiper-pagination-bullet-inactive-color, #000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color, var(--swiper-theme-color))}.swiper-vertical>.swiper-pagination-bullets,.swiper-pagination-vertical.swiper-pagination-bullets{right:var(--swiper-pagination-right, 8px);left:var(--swiper-pagination-left, auto);top:50%;transform:translate3d(0,-50%,0)}.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap, 6px) 0;display:block}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap, 4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translate(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color, inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, .25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color, var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size, 4px);left:0;top:0}.swiper-vertical>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite{width:var(--swiper-pagination-progressbar-size, 4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius, 10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, .1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset, 1%);bottom:var(--swiper-scrollbar-bottom, 4px);top:var(--swiper-scrollbar-top, auto);z-index:50;height:var(--swiper-scrollbar-size, 4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-vertical>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-vertical{position:absolute;left:var(--swiper-scrollbar-left, auto);right:var(--swiper-scrollbar-right, 4px);top:var(--swiper-scrollbar-sides-offset, 1%);z-index:50;width:var(--swiper-scrollbar-size, 4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, .5));border-radius:var(--swiper-scrollbar-border-radius, 10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>img,.swiper-zoom-container>svg,.swiper-zoom-container>canvas{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl .swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:"";background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube .swiper-slide-next+.swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper.swiper-flip{overflow:visible}.swiper-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative .swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards .swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}
/*$vite$:1*/`),
    document.head.appendChild(Xr);
  var yn = "1.1.20";
  function as(n, e, t) {
    return Math.max(n, Math.min(e, t));
  }
  function Vf(n, e, t) {
    return (1 - t) * n + t * e;
  }
  function Uf(n, e, t, i) {
    return Vf(n, e, 1 - Math.exp(-t * i));
  }
  function jf(n, e) {
    return ((n % e) + e) % e;
  }
  var Zf = class {
    constructor() {
      oe(this, "isRunning", !1);
      oe(this, "value", 0);
      oe(this, "from", 0);
      oe(this, "to", 0);
      oe(this, "currentTime", 0);
      oe(this, "lerp");
      oe(this, "duration");
      oe(this, "easing");
      oe(this, "onUpdate");
    }
    advance(n) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += n;
        const i = as(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = Uf(this.value, this.to, this.lerp * 60, n)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(),
        (t = this.onUpdate) == null || t.call(this, this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(n, e, { lerp: t, duration: i, easing: r, onStart: s, onUpdate: o }) {
      (this.from = this.value = n),
        (this.to = e),
        (this.lerp = t),
        (this.duration = i),
        (this.easing = r),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = o);
    }
  };
  function Qf(n, e) {
    let t;
    return function (...i) {
      let r = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), n.apply(r, i);
        }, e));
    };
  }
  var Kf = class {
      constructor(n, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
        oe(this, "width", 0);
        oe(this, "height", 0);
        oe(this, "scrollHeight", 0);
        oe(this, "scrollWidth", 0);
        oe(this, "debouncedResize");
        oe(this, "wrapperResizeObserver");
        oe(this, "contentResizeObserver");
        oe(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        oe(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        oe(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = n),
          (this.content = e),
          t &&
            ((this.debouncedResize = Qf(this.resize, i)),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize();
      }
      destroy() {
        var n, e;
        (n = this.wrapperResizeObserver) == null || n.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize, !1);
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    tc = class {
      constructor() {
        oe(this, "events", {});
      }
      emit(n, ...e) {
        var i;
        let t = this.events[n] || [];
        for (let r = 0, s = t.length; r < s; r++)
          (i = t[r]) == null || i.call(t, ...e);
      }
      on(n, e) {
        var t;
        return (
          ((t = this.events[n]) != null && t.push(e)) || (this.events[n] = [e]),
          () => {
            var i;
            this.events[n] =
              (i = this.events[n]) == null ? void 0 : i.filter((r) => e !== r);
          }
        );
      }
      off(n, e) {
        var t;
        this.events[n] =
          (t = this.events[n]) == null ? void 0 : t.filter((i) => e !== i);
      }
      destroy() {
        this.events = {};
      }
    },
    ic = 100 / 6,
    Nn = { passive: !1 },
    Jf = class {
      constructor(n, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        oe(this, "touchStart", { x: 0, y: 0 });
        oe(this, "lastDelta", { x: 0, y: 0 });
        oe(this, "window", { width: 0, height: 0 });
        oe(this, "emitter", new tc());
        oe(this, "onTouchStart", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
            ? n.targetTouches[0]
            : n;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: n });
        });
        oe(this, "onTouchMove", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
              ? n.targetTouches[0]
              : n,
            i = -(e - this.touchStart.x) * this.options.touchMultiplier,
            r = -(t - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: i, y: r }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: n });
        });
        oe(this, "onTouchEnd", (n) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: n,
          });
        });
        oe(this, "onWheel", (n) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = n;
          const r = i === 1 ? ic : i === 2 ? this.window.width : 1,
            s = i === 1 ? ic : i === 2 ? this.window.height : 1;
          (e *= r),
            (t *= s),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: n });
        });
        oe(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = n),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Nn),
          this.element.addEventListener("touchstart", this.onTouchStart, Nn),
          this.element.addEventListener("touchmove", this.onTouchMove, Nn),
          this.element.addEventListener("touchend", this.onTouchEnd, Nn);
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Nn),
          this.element.removeEventListener("touchstart", this.onTouchStart, Nn),
          this.element.removeEventListener("touchmove", this.onTouchMove, Nn),
          this.element.removeEventListener("touchend", this.onTouchEnd, Nn);
      }
    },
    ep = class {
      constructor({
        wrapper: n = window,
        content: e = document.documentElement,
        eventsTarget: t = n,
        smoothWheel: i = !0,
        syncTouch: r = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: a,
        easing: l = (E) => Math.min(1, 1.001 - Math.pow(2, -10 * E)),
        lerp: u = 0.1,
        infinite: c = !1,
        orientation: h = "vertical",
        gestureOrientation: m = "vertical",
        touchMultiplier: p = 1,
        wheelMultiplier: d = 1,
        autoResize: f = !0,
        prevent: g,
        virtualScroll: v,
        overscroll: _ = !0,
        autoRaf: w = !1,
        anchors: b = !1,
        __experimental__naiveDimensions: D = !1,
      } = {}) {
        oe(this, "_isScrolling", !1);
        oe(this, "_isStopped", !1);
        oe(this, "_isLocked", !1);
        oe(this, "_preventNextNativeScrollEvent", !1);
        oe(this, "_resetVelocityTimeout", null);
        oe(this, "__rafID", null);
        oe(this, "isTouching");
        oe(this, "time", 0);
        oe(this, "userData", {});
        oe(this, "lastVelocity", 0);
        oe(this, "velocity", 0);
        oe(this, "direction", 0);
        oe(this, "options");
        oe(this, "targetScroll");
        oe(this, "animatedScroll");
        oe(this, "animate", new Zf());
        oe(this, "emitter", new tc());
        oe(this, "dimensions");
        oe(this, "virtualScroll");
        oe(this, "onScrollEnd", (n) => {
          n instanceof CustomEvent ||
            ((this.isScrolling === "smooth" || this.isScrolling === !1) &&
              n.stopPropagation());
        });
        oe(this, "dispatchScrollendEvent", () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            })
          );
        });
        oe(this, "onClick", (n) => {
          const t = n.composedPath().find((i) => {
            var r;
            return (
              i instanceof HTMLAnchorElement &&
              ((r = i.getAttribute("href")) == null
                ? void 0
                : r.startsWith("#"))
            );
          });
          if (t) {
            const i = t.getAttribute("href");
            if (i) {
              const r =
                typeof this.options.anchors == "object" && this.options.anchors
                  ? this.options.anchors
                  : void 0;
              this.scrollTo(i, r);
            }
          }
        });
        oe(this, "onPointerDown", (n) => {
          n.button === 1 && this.reset();
        });
        oe(this, "onVirtualScroll", (n) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(n) === !1
          )
            return;
          const { deltaX: e, deltaY: t, event: i } = n;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: t,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          const r = i.type.includes("touch"),
            s = i.type.includes("wheel");
          this.isTouching = i.type === "touchstart" || i.type === "touchmove";
          const o = e === 0 && t === 0;
          if (
            this.options.syncTouch &&
            r &&
            i.type === "touchstart" &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          const l =
            (this.options.gestureOrientation === "vertical" && t === 0) ||
            (this.options.gestureOrientation === "horizontal" && e === 0);
          if (o || l) return;
          let u = i.composedPath();
          u = u.slice(0, u.indexOf(this.rootElement));
          const c = this.options.prevent;
          if (
            u.find((g) => {
              var v, _, w;
              return (
                g instanceof HTMLElement &&
                ((typeof c == "function" && (c == null ? void 0 : c(g))) ||
                  ((v = g.hasAttribute) == null
                    ? void 0
                    : v.call(g, "data-lenis-prevent")) ||
                  (r &&
                    ((_ = g.hasAttribute) == null
                      ? void 0
                      : _.call(g, "data-lenis-prevent-touch"))) ||
                  (s &&
                    ((w = g.hasAttribute) == null
                      ? void 0
                      : w.call(g, "data-lenis-prevent-wheel"))))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            i.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && r) || (this.options.smoothWheel && s))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (i.lenisStopPropagation = !0);
            return;
          }
          let m = t;
          this.options.gestureOrientation === "both"
            ? (m = Math.abs(t) > Math.abs(e) ? t : e)
            : this.options.gestureOrientation === "horizontal" && (m = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && t > 0) ||
                  (this.animatedScroll === this.limit && t < 0)))) &&
              (i.lenisStopPropagation = !0),
            i.preventDefault();
          const p = r && this.options.syncTouch,
            f = r && i.type === "touchend" && Math.abs(m) > 5;
          f && (m = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + m, {
              programmatic: !1,
              ...(p
                ? { lerp: f ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            });
        });
        oe(this, "onNativeScroll", () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === "native") {
            const n = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - n),
              (this.direction = Math.sign(this.animatedScroll - n)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        });
        oe(this, "raf", (n) => {
          const e = n - (this.time || n);
          (this.time = n),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = yn),
          (!n || n === document.documentElement) && (n = window),
          (this.options = {
            wrapper: n,
            content: e,
            eventsTarget: t,
            smoothWheel: i,
            syncTouch: r,
            syncTouchLerp: s,
            touchInertiaMultiplier: o,
            duration: a,
            easing: l,
            lerp: u,
            infinite: c,
            gestureOrientation: m,
            orientation: h,
            touchMultiplier: p,
            wheelMultiplier: d,
            autoResize: f,
            prevent: g,
            virtualScroll: v,
            overscroll: _,
            autoRaf: w,
            anchors: b,
            __experimental__naiveDimensions: D,
          }),
          (this.dimensions = new Kf(n, e, { autoResize: f })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
            capture: !0,
          }),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.addEventListener("click", this.onClick, !1),
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          (this.virtualScroll = new Jf(t, {
            touchMultiplier: p,
            wheelMultiplier: d,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.removeEventListener(
            "scrollend",
            this.onScrollEnd,
            { capture: !0 }
          ),
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          this.options.anchors &&
            this.options.wrapper === window &&
            this.options.wrapper.removeEventListener("click", this.onClick, !1),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this.__rafID && cancelAnimationFrame(this.__rafID);
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      off(n, e) {
        return this.emitter.off(n, e);
      }
      setScroll(n) {
        this.isHorizontal
          ? this.options.wrapper.scrollTo({ left: n, behavior: "instant" })
          : this.options.wrapper.scrollTo({ top: n, behavior: "instant" });
      }
      resize() {
        this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop();
      }
      start() {
        this.isStopped && (this.reset(), (this.isStopped = !1));
      }
      stop() {
        this.isStopped || (this.reset(), (this.isStopped = !0));
      }
      scrollTo(
        n,
        {
          offset: e = 0,
          immediate: t = !1,
          lock: i = !1,
          duration: r = this.options.duration,
          easing: s = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: a,
          onComplete: l,
          force: u = !1,
          programmatic: c = !0,
          userData: h,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !u)) {
          if (typeof n == "string" && ["top", "left", "start"].includes(n))
            n = 0;
          else if (
            typeof n == "string" &&
            ["bottom", "right", "end"].includes(n)
          )
            n = this.limit;
          else {
            let m;
            if (
              (typeof n == "string"
                ? (m = document.querySelector(n))
                : n instanceof HTMLElement &&
                  n != null &&
                  n.nodeType &&
                  (m = n),
              m)
            ) {
              if (this.options.wrapper !== window) {
                const d = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? d.left : d.top;
              }
              const p = m.getBoundingClientRect();
              n = (this.isHorizontal ? p.left : p.top) + this.animatedScroll;
            }
          }
          if (typeof n == "number") {
            if (
              ((n += e),
              (n = Math.round(n)),
              this.options.infinite
                ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                : (n = as(0, n, this.limit)),
              n === this.targetScroll)
            ) {
              a == null || a(this), l == null || l(this);
              return;
            }
            if (((this.userData = h ?? {}), t)) {
              (this.animatedScroll = this.targetScroll = n),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l == null || l(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                });
              return;
            }
            c || (this.targetScroll = n),
              this.animate.fromTo(this.animatedScroll, n, {
                duration: r,
                easing: s,
                lerp: o,
                onStart: () => {
                  i && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    a == null || a(this);
                },
                onUpdate: (m, p) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = m - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = m),
                    this.setScroll(this.scroll),
                    c && (this.targetScroll = m),
                    p || this.emit(),
                    p &&
                      (this.reset(),
                      this.emit(),
                      l == null || l(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent());
                },
              });
          }
        }
      }
      preventNextNativeScrollEvent() {
        (this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          });
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.__experimental__naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        const n = this.options.wrapper;
        return this.isHorizontal
          ? n.scrollX ?? n.scrollLeft
          : n.scrollY ?? n.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? jf(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(n) {
        this._isScrolling !== n &&
          ((this._isScrolling = n), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(n) {
        this._isStopped !== n &&
          ((this._isStopped = n), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(n) {
        this._isLocked !== n && ((this._isLocked = n), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let n = "lenis";
        return (
          this.isStopped && (n += " lenis-stopped"),
          this.isLocked && (n += " lenis-locked"),
          this.isScrolling && (n += " lenis-scrolling"),
          this.isScrolling === "smooth" && (n += " lenis-smooth"),
          n
        );
      }
      updateClassName() {
        this.cleanUpClassName(),
          (this.rootElement.className =
            `${this.rootElement.className} ${this.className}`.trim());
      }
      cleanUpClassName() {
        this.rootElement.className = this.rootElement.className
          .replace(/lenis(-\w+)?/g, "")
          .trim();
      }
    };
  function bn(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function rc(n, e) {
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.constructor = n),
      (n.__proto__ = e);
  }
  /*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var cr = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Xs = { duration: 0.5, overwrite: !1, delay: 0 },
    _l,
    Ei,
    Pt,
    rn = 1e8,
    Ti = 1 / rn,
    vl = Math.PI * 2,
    tp = vl / 4,
    ip = 0,
    nc = Math.sqrt,
    rp = Math.cos,
    np = Math.sin,
    ii = function (e) {
      return typeof e == "string";
    },
    kt = function (e) {
      return typeof e == "function";
    },
    Dn = function (e) {
      return typeof e == "number";
    },
    yl = function (e) {
      return typeof e > "u";
    },
    nn = function (e) {
      return typeof e == "object";
    },
    er = function (e) {
      return e !== !1;
    },
    bl = function () {
      return typeof window < "u";
    },
    ca = function (e) {
      return kt(e) || ii(e);
    },
    sc =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Ci = Array.isArray,
    Dl = /(?:-?\.?\d|\.)+/gi,
    oc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Gs = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    xl = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ac = /[+-]=-?[.\d]+/,
    lc = /[^,'"\[\]\s]+/gi,
    sp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Dt,
    Cr,
    Sl,
    El,
    dr = {},
    da = {},
    uc,
    cc = function (e) {
      return (da = us(e, dr)) && nr;
    },
    Tl = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    fa = function (e, t) {
      return !t && console.warn(e);
    },
    dc = function (e, t) {
      return (e && (dr[e] = t) && da && (da[e] = t)) || dr;
    },
    bo = function () {
      return 0;
    },
    op = { suppressEvents: !0, isStart: !0, kill: !1 },
    pa = { suppressEvents: !0, kill: !1 },
    ap = { suppressEvents: !0 },
    Cl = {},
    $n = [],
    Al = {},
    fc,
    fr = {},
    Ml = {},
    pc = 30,
    ha = [],
    Pl = "",
    kl = function (e) {
      var t = e[0],
        i,
        r;
      if ((nn(t) || kt(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = ha.length; r-- && !ha[r].targetTest(t); );
        i = ha[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new qc(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    ls = function (e) {
      return e._gsap || kl(Pr(e))[0]._gsap;
    },
    hc = function (e, t, i) {
      return (i = e[t]) && kt(i)
        ? e[t]()
        : (yl(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    tr = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Lt = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    ci = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    Ws = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    lp = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    ma = function () {
      var e = $n.length,
        t = $n.slice(0),
        i,
        r;
      for (Al = {}, $n.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    mc = function (e, t, i, r) {
      $n.length && !Ei && ma(),
        e.render(t, i, Ei && t < 0 && (e._initted || e._startAt)),
        $n.length && !Ei && ma();
    },
    gc = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(lc).length < 2
        ? t
        : ii(e)
        ? e.trim()
        : e;
    },
    wc = function (e) {
      return e;
    },
    Ar = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    up = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    us = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    _c = function n(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = nn(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    ga = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    Do = function (e) {
      var t = e.parent || Dt,
        i = e.keyframes ? up(Ci(e.keyframes)) : Ar;
      if (er(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    cp = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    vc = function (e, t, i, r, s) {
      var o = e[r],
        a;
      if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
      return (
        o
          ? ((t._next = o._next), (o._next = t))
          : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[r] = t),
        (t._prev = o),
        (t.parent = t._dp = e),
        t
      );
    },
    wa = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var s = t._prev,
        o = t._next;
      s ? (s._next = o) : e[i] === t && (e[i] = o),
        o ? (o._prev = s) : e[r] === t && (e[r] = s),
        (t._next = t._prev = t.parent = null);
    },
    Yn = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    cs = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    dp = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    Fl = function (e, t, i, r) {
      return (
        e._startAt &&
        (Ei
          ? e._startAt.revert(pa)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    fp = function n(e) {
      return !e || (e._ts && n(e.parent));
    },
    yc = function (e) {
      return e._repeat ? Vs(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Vs = function (e, t) {
      var i = Math.floor((e /= t));
      return e && i === e ? i - 1 : i;
    },
    _a = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    va = function (e) {
      return (e._end = ci(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || Ti) || 0)
      ));
    },
    ya = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = ci(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          va(e),
          i._dirty || cs(i, e)),
        e
      );
    },
    bc = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = _a(e.rawTime(), t)),
          (!t._dur || So(0, t.totalDuration(), i) - t._tTime > Ti) &&
            t.render(i, !0)),
        cs(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -1e-8;
      }
    },
    sn = function (e, t, i, r) {
      return (
        t.parent && Yn(t),
        (t._start = ci(
          (Dn(i) ? i : i || e !== Dt ? Mr(e, i, t) : e._time) + t._delay
        )),
        (t._end = ci(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        vc(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Ll(t) || (e._recent = t),
        r || bc(e, t),
        e._ts < 0 && ya(e, e._tTime),
        e
      );
    },
    Dc = function (e, t) {
      return (
        (dr.ScrollTrigger || Tl("scrollTrigger", t)) &&
        dr.ScrollTrigger.create(t, e)
      );
    },
    xc = function (e, t, i, r, s) {
      if ((ql(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Ei &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        fc !== pr.frame
      )
        return $n.push(e), (e._lazy = [s, r]), 1;
    },
    pp = function n(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
    },
    Ll = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    hp = function (e, t, i, r) {
      var s = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && pp(e) && !(!e._initted && Ll(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Ll(e))))
            ? 0
            : 1,
        a = e._rDelay,
        l = 0,
        u,
        c,
        h;
      if (
        (a &&
          e._repeat &&
          ((l = So(0, e._tDur, t)),
          (c = Vs(l, a)),
          e._yoyo && c & 1 && (o = 1 - o),
          c !== Vs(e._tTime, a) &&
            ((s = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== s || Ei || r || e._zTime === Ti || (!t && e._zTime))
      ) {
        if (!e._initted && xc(e, t, r, i, l)) return;
        for (
          h = e._zTime,
            e._zTime = t || (i ? Ti : 0),
            i || (i = t && !h),
            e.ratio = o,
            e._from && (o = 1 - o),
            e._time = 0,
            e._tTime = l,
            u = e._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        t < 0 && Fl(e, t, i, !0),
          e._onUpdate && !i && kr(e, "onUpdate"),
          l && e._repeat && !i && e.parent && kr(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && Yn(e, 1),
            !i &&
              !Ei &&
              (kr(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    mp = function (e, t, i) {
      var r;
      if (i > t)
        for (r = e._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > t) return r;
          r = r._next;
        }
      else
        for (r = e._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < t) return r;
          r = r._prev;
        }
    },
    Us = function (e, t, i, r) {
      var s = e._repeat,
        o = ci(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !r && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = s ? (s < 0 ? 1e10 : ci(o * (s + 1) + e._rDelay * s)) : o),
        a > 0 && !r && ya(e, (e._tTime = e._tDur * a)),
        e.parent && va(e),
        i || cs(e.parent, e),
        e
      );
    },
    Sc = function (e) {
      return e instanceof ir ? cs(e) : Us(e, e._dur);
    },
    gp = { _start: 0, endTime: bo, totalDuration: bo },
    Mr = function n(e, t, i) {
      var r = e.labels,
        s = e._recent || gp,
        o = e.duration() >= rn ? s.endTime(!1) : e._dur,
        a,
        l,
        u;
      return ii(t) && (isNaN(t) || t in r)
        ? ((l = t.charAt(0)),
          (u = t.substr(-1) === "%"),
          (a = t.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (u ? (a < 0 ? s : i).totalDuration() / 100 : 1))
            : a < 0
            ? (t in r || (r[t] = o), r[t])
            : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
              u && i && (l = (l / 100) * (Ci(i) ? i[0] : i).totalDuration()),
              a > 1 ? n(e, t.substr(0, a - 1), i) + l : o + l))
        : t == null
        ? o
        : +t;
    },
    xo = function (e, t, i) {
      var r = Dn(t[1]),
        s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s],
        a,
        l;
      if ((r && (o.duration = t[1]), (o.parent = i), e)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = er(l.vars.inherit) && l.parent);
        (o.immediateRender = er(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return new $t(t[0], o, t[s + 1]);
    },
    qn = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    So = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    Ai = function (e, t) {
      return !ii(e) || !(t = sp.exec(e)) ? "" : t[1];
    },
    wp = function (e, t, i) {
      return qn(i, function (r) {
        return So(e, t, r);
      });
    },
    Ol = [].slice,
    Ec = function (e, t) {
      return (
        e &&
        nn(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && nn(e[0]))) &&
        !e.nodeType &&
        e !== Cr
      );
    },
    _p = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var s;
          return (ii(r) && !t) || Ec(r, 1)
            ? (s = i).push.apply(s, Pr(r))
            : i.push(r);
        }) || i
      );
    },
    Pr = function (e, t, i) {
      return Pt && !t && Pt.selector
        ? Pt.selector(e)
        : ii(e) && !i && (Sl || !Zs())
        ? Ol.call((t || El).querySelectorAll(e), 0)
        : Ci(e)
        ? _p(e, i)
        : Ec(e)
        ? Ol.call(e, 0)
        : e
        ? [e]
        : [];
    },
    zl = function (e) {
      return (
        (e = Pr(e)[0] || fa("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Pr(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? fa("Invalid scope") || El.createElement("div")
              : e
          );
        }
      );
    },
    Tc = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Cc = function (e) {
      if (kt(e)) return e;
      var t = nn(e) ? e : { each: e },
        i = ds(t.ease),
        r = t.from || 0,
        s = parseFloat(t.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        l = isNaN(r) || a,
        u = t.axis,
        c = r,
        h = r;
      return (
        ii(r)
          ? (c = h = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && l && ((c = r[0]), (h = r[1])),
        function (m, p, d) {
          var f = (d || t).length,
            g = o[f],
            v,
            _,
            w,
            b,
            D,
            E,
            T,
            P,
            A;
          if (!g) {
            if (((A = t.grid === "auto" ? 0 : (t.grid || [1, rn])[1]), !A)) {
              for (
                T = -1e8;
                T < (T = d[A++].getBoundingClientRect().left) && A < f;

              );
              A--;
            }
            for (
              g = o[f] = [],
                v = l ? Math.min(A, f) * c - 0.5 : r % A,
                _ = A === rn ? 0 : l ? (f * h) / A - 0.5 : (r / A) | 0,
                T = 0,
                P = rn,
                E = 0;
              E < f;
              E++
            )
              (w = (E % A) - v),
                (b = _ - ((E / A) | 0)),
                (g[E] = D =
                  u ? Math.abs(u === "y" ? b : w) : nc(w * w + b * b)),
                D > T && (T = D),
                D < P && (P = D);
            r === "random" && Tc(g),
              (g.max = T - P),
              (g.min = P),
              (g.v = f =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (A > f
                      ? f - 1
                      : u
                      ? u === "y"
                        ? f / A
                        : A
                      : Math.max(A, f / A)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (g.b = f < 0 ? s - f : s),
              (g.u = Ai(t.amount || t.each) || 0),
              (i = i && f < 0 ? Nc(i) : i);
          }
          return (
            (f = (g[m] - g.min) / g.max || 0),
            ci(g.b + (i ? i(f) : f) * g.v) + g.u
          );
        }
      );
    },
    Il = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = ci(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (Dn(i) ? 0 : Ai(i));
      };
    },
    Ac = function (e, t) {
      var i = Ci(e),
        r,
        s;
      return (
        !i &&
          nn(e) &&
          ((r = i = e.radius || rn),
          e.values
            ? ((e = Pr(e.values)), (s = !Dn(e[0])) && (r *= r))
            : (e = Il(e.increment))),
        qn(
          t,
          i
            ? kt(e)
              ? function (o) {
                  return (s = e(o)), Math.abs(s - o) <= r ? s : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(s ? o.x : o),
                      l = parseFloat(s ? o.y : 0),
                      u = rn,
                      c = 0,
                      h = e.length,
                      m,
                      p;
                    h--;

                  )
                    s
                      ? ((m = e[h].x - a),
                        (p = e[h].y - l),
                        (m = m * m + p * p))
                      : (m = Math.abs(e[h] - a)),
                      m < u && ((u = m), (c = h));
                  return (
                    (c = !r || u <= r ? e[c] : o),
                    s || c === o || Dn(o) ? c : c + Ai(o)
                  );
                }
            : Il(e)
        )
      );
    },
    Mc = function (e, t, i, r) {
      return qn(Ci(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return Ci(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    vp = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (s, o) {
          return o(s);
        }, r);
      };
    },
    yp = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || Ai(i));
      };
    },
    bp = function (e, t, i) {
      return kc(e, t, 0, 1, i);
    },
    Pc = function (e, t, i) {
      return qn(i, function (r) {
        return e[~~t(r)];
      });
    },
    Dp = function n(e, t, i) {
      var r = t - e;
      return Ci(e)
        ? Pc(e, n(0, e.length), t)
        : qn(i, function (s) {
            return ((r + ((s - e) % r)) % r) + e;
          });
    },
    xp = function n(e, t, i) {
      var r = t - e,
        s = r * 2;
      return Ci(e)
        ? Pc(e, n(0, e.length - 1), t)
        : qn(i, function (o) {
            return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o);
          });
    },
    Eo = function (e) {
      for (var t = 0, i = "", r, s, o, a; ~(r = e.indexOf("random(", t)); )
        (o = e.indexOf(")", r)),
          (a = e.charAt(r + 7) === "["),
          (s = e.substr(r + 7, o - r - 7).match(a ? lc : Dl)),
          (i +=
            e.substr(t, r - t) +
            Mc(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
          (t = o + 1);
      return i + e.substr(t, e.length - t);
    },
    kc = function (e, t, i, r, s) {
      var o = t - e,
        a = r - i;
      return qn(s, function (l) {
        return i + (((l - e) / o) * a || 0);
      });
    },
    Sp = function n(e, t, i, r) {
      var s = isNaN(e + t)
        ? 0
        : function (p) {
            return (1 - p) * e + p * t;
          };
      if (!s) {
        var o = ii(e),
          a = {},
          l,
          u,
          c,
          h,
          m;
        if ((i === !0 && (r = 1) && (i = null), o))
          (e = { p: e }), (t = { p: t });
        else if (Ci(e) && !Ci(t)) {
          for (c = [], h = e.length, m = h - 2, u = 1; u < h; u++)
            c.push(n(e[u - 1], e[u]));
          h--,
            (s = function (d) {
              d *= h;
              var f = Math.min(m, ~~d);
              return c[f](d - f);
            }),
            (i = t);
        } else r || (e = us(Ci(e) ? [] : {}, e));
        if (!c) {
          for (l in t) $l.call(a, e, l, "get", t[l]);
          s = function (d) {
            return Gl(d, a) || (o ? e.p : e);
          };
        }
      }
      return qn(i, s);
    },
    Fc = function (e, t, i) {
      var r = e.labels,
        s = rn,
        o,
        a,
        l;
      for (o in r)
        (a = r[o] - t),
          a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
      return l;
    },
    kr = function (e, t, i) {
      var r = e.vars,
        s = r[t],
        o = Pt,
        a = e._ctx,
        l,
        u,
        c;
      if (s)
        return (
          (l = r[t + "Params"]),
          (u = r.callbackScope || e),
          i && $n.length && ma(),
          a && (Pt = a),
          (c = l ? s.apply(u, l) : s.call(u)),
          (Pt = o),
          c
        );
    },
    To = function (e) {
      return (
        Yn(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ei),
        e.progress() < 1 && kr(e, "onInterrupt"),
        e
      );
    },
    js,
    Lc = [],
    Oc = function (e) {
      if (bl() && e) {
        e = (!e.name && e.default) || e;
        var t = e.name,
          i = kt(e),
          r =
            t && !i && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = {
            init: bo,
            render: Gl,
            add: $l,
            kill: $p,
            modifier: Np,
            rawVars: 0,
          },
          o = {
            targetTest: 0,
            get: 0,
            getSetter: Xl,
            aliases: {},
            register: 0,
          };
        if ((Zs(), e !== r)) {
          if (fr[t]) return;
          Ar(r, Ar(ga(e, s), o)),
            us(r.prototype, us(s, ga(e, o))),
            (fr[(r.prop = t)] = r),
            e.targetTest && (ha.push(r), (Cl[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin");
        }
        dc(t, r), e.register && e.register(nr, r, rr);
      } else e && Lc.push(e);
    },
    nt = 255,
    Co = {
      aqua: [0, nt, nt],
      lime: [0, nt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, nt],
      navy: [0, 0, 128],
      white: [nt, nt, nt],
      olive: [128, 128, 0],
      yellow: [nt, nt, 0],
      orange: [nt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [nt, 0, 0],
      pink: [nt, 192, 203],
      cyan: [0, nt, nt],
      transparent: [nt, nt, nt, 0],
    },
    Bl = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          nt +
          0.5) |
          0
      );
    },
    zc = function (e, t, i) {
      var r = e ? (Dn(e) ? [e >> 16, (e >> 8) & nt, e & nt] : 0) : Co.black,
        s,
        o,
        a,
        l,
        u,
        c,
        h,
        m,
        p,
        d;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Co[e]))
          r = Co[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((s = e.charAt(1)),
              (o = e.charAt(2)),
              (a = e.charAt(3)),
              (e =
                "#" +
                s +
                s +
                o +
                o +
                a +
                a +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (r = parseInt(e.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & nt, r & nt, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & nt, e & nt]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = d = e.match(Dl)), !t))
            (l = (+r[0] % 360) / 360),
              (u = +r[1] / 100),
              (c = +r[2] / 100),
              (o = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (s = c * 2 - o),
              r.length > 3 && (r[3] *= 1),
              (r[0] = Bl(l + 1 / 3, s, o)),
              (r[1] = Bl(l, s, o)),
              (r[2] = Bl(l - 1 / 3, s, o));
          else if (~e.indexOf("="))
            return (r = e.match(oc)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(Dl) || Co.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !d &&
          ((s = r[0] / nt),
          (o = r[1] / nt),
          (a = r[2] / nt),
          (h = Math.max(s, o, a)),
          (m = Math.min(s, o, a)),
          (c = (h + m) / 2),
          h === m
            ? (l = u = 0)
            : ((p = h - m),
              (u = c > 0.5 ? p / (2 - h - m) : p / (h + m)),
              (l =
                h === s
                  ? (o - a) / p + (o < a ? 6 : 0)
                  : h === o
                  ? (a - s) / p + 2
                  : (s - o) / p + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(c * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    Ic = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split(Hn).forEach(function (s) {
          var o = s.match(Gs) || [];
          t.push.apply(t, o), i.push((r += o.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Bc = function (e, t, i) {
      var r = "",
        s = (e + r).match(Hn),
        o = t ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        c,
        h;
      if (!s) return e;
      if (
        ((s = s.map(function (m) {
          return (
            (m = zc(m, t, 1)) &&
            o +
              (t
                ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3]
                : m.join(",")) +
              ")"
          );
        })),
        i && ((c = Ic(e)), (l = i.c), l.join(r) !== c.c.join(r)))
      )
        for (u = e.replace(Hn, "1").split(Gs), h = u.length - 1; a < h; a++)
          r +=
            u[a] +
            (~l.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (c.length ? c : s.length ? s : i).shift());
      if (!u)
        for (u = e.split(Hn), h = u.length - 1; a < h; a++) r += u[a] + s[a];
      return r + u[h];
    },
    Hn = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in Co) n += "|" + e + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    Ep = /hsl[a]?\(/,
    Rc = function (e) {
      var t = e.join(" "),
        i;
      if (((Hn.lastIndex = 0), Hn.test(t)))
        return (
          (i = Ep.test(t)),
          (e[1] = Bc(e[1], i)),
          (e[0] = Bc(e[0], i, Ic(e[1]))),
          !0
        );
    },
    Ao,
    pr = (function () {
      var n = Date.now,
        e = 500,
        t = 33,
        i = n(),
        r = i,
        s = 1e3 / 240,
        o = s,
        a = [],
        l,
        u,
        c,
        h,
        m,
        p,
        d = function f(g) {
          var v = n() - r,
            _ = g === !0,
            w,
            b,
            D,
            E;
          if (
            (v > e && (i += v - t),
            (r += v),
            (D = r - i),
            (w = D - o),
            (w > 0 || _) &&
              ((E = ++h.frame),
              (m = D - h.time * 1e3),
              (h.time = D = D / 1e3),
              (o += w + (w >= s ? 4 : s - w)),
              (b = 1)),
            _ || (l = u(f)),
            b)
          )
            for (p = 0; p < a.length; p++) a[p](D, m, E, g);
        };
      return (
        (h = {
          time: 0,
          frame: 0,
          tick: function () {
            d(!0);
          },
          deltaRatio: function (g) {
            return m / (1e3 / (g || 60));
          },
          wake: function () {
            uc &&
              (!Sl &&
                bl() &&
                ((Cr = Sl = window),
                (El = Cr.document || {}),
                (dr.gsap = nr),
                (Cr.gsapVersions || (Cr.gsapVersions = [])).push(nr.version),
                cc(da || Cr.GreenSockGlobals || (!Cr.gsap && Cr) || {}),
                (c = Cr.requestAnimationFrame),
                Lc.forEach(Oc)),
              l && h.sleep(),
              (u =
                c ||
                function (g) {
                  return setTimeout(g, (o - h.time * 1e3 + 1) | 0);
                }),
              (Ao = 1),
              d(2));
          },
          sleep: function () {
            (c ? Cr.cancelAnimationFrame : clearTimeout)(l), (Ao = 0), (u = bo);
          },
          lagSmoothing: function (g, v) {
            (e = g || 1 / 0), (t = Math.min(v || 33, e));
          },
          fps: function (g) {
            (s = 1e3 / (g || 240)), (o = h.time * 1e3 + s);
          },
          add: function (g, v, _) {
            var w = v
              ? function (b, D, E, T) {
                  g(b, D, E, T), h.remove(w);
                }
              : g;
            return h.remove(g), a[_ ? "unshift" : "push"](w), Zs(), w;
          },
          remove: function (g, v) {
            ~(v = a.indexOf(g)) && a.splice(v, 1) && p >= v && p--;
          },
          _listeners: a,
        }),
        h
      );
    })(),
    Zs = function () {
      return !Ao && pr.wake();
    },
    Re = {},
    Tp = /^[\d.\-M][\d.\-,\s]/,
    Cp = /["']/g,
    Ap = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          s = 1,
          o = i.length,
          a,
          l,
          u;
        s < o;
        s++
      )
        (l = i[s]),
          (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, a)),
          (t[r] = isNaN(u) ? u.replace(Cp, "").trim() : +u),
          (r = l.substr(a + 1).trim());
      return t;
    },
    Mp = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    Pp = function (e) {
      var t = (e + "").split("("),
        i = Re[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Ap(t[1])] : Mp(e).split(",").map(gc)
          )
        : Re._CE && Tp.test(e)
        ? Re._CE("", e)
        : i;
    },
    Nc = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    $c = function n(e, t) {
      for (var i = e._first, r; i; )
        i instanceof ir
          ? n(i, t)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== t &&
            (i.timeline
              ? n(i.timeline, t)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = t))),
          (i = i._next);
    },
    ds = function (e, t) {
      return (e && (kt(e) ? e : Re[e] || Pp(e))) || t;
    },
    fs = function (e, t, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - t(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
          });
      var s = { easeIn: t, easeOut: i, easeInOut: r },
        o;
      return (
        tr(e, function (a) {
          (Re[a] = dr[a] = s), (Re[(o = a.toLowerCase())] = i);
          for (var l in s)
            Re[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = Re[a + "." + l] = s[l];
        }),
        s
      );
    },
    Yc = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Rl = function n(e, t, i) {
      var r = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (s / vl) * (Math.asin(1 / r) || 0),
        a = function (c) {
          return c === 1 ? 1 : r * Math.pow(2, -10 * c) * np((c - o) * s) + 1;
        },
        l =
          e === "out"
            ? a
            : e === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : Yc(a);
      return (
        (s = vl / s),
        (l.config = function (u, c) {
          return n(e, u, c);
        }),
        l
      );
    },
    Nl = function n(e, t) {
      t === void 0 && (t = 1.70158);
      var i = function (o) {
          return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
        },
        r =
          e === "out"
            ? i
            : e === "in"
            ? function (s) {
                return 1 - i(1 - s);
              }
            : Yc(i);
      return (
        (r.config = function (s) {
          return n(e, s);
        }),
        r
      );
    };
  tr("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    fs(
      n + ",Power" + (t - 1),
      e
        ? function (i) {
            return Math.pow(i, t);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, t);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, t) / 2
          : 1 - Math.pow((1 - i) * 2, t) / 2;
      }
    );
  }),
    (Re.Linear.easeNone = Re.none = Re.Linear.easeIn),
    fs("Elastic", Rl("in"), Rl("out"), Rl()),
    (function (n, e) {
      var t = 1 / e,
        i = 2 * t,
        r = 2.5 * t,
        s = function (a) {
          return a < t
            ? n * a * a
            : a < i
            ? n * Math.pow(a - 1.5 / e, 2) + 0.75
            : a < r
            ? n * (a -= 2.25 / e) * a + 0.9375
            : n * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
      fs(
        "Bounce",
        function (o) {
          return 1 - s(1 - o);
        },
        s
      );
    })(7.5625, 2.75),
    fs("Expo", function (n) {
      return n ? Math.pow(2, 10 * (n - 1)) : 0;
    }),
    fs("Circ", function (n) {
      return -(nc(1 - n * n) - 1);
    }),
    fs("Sine", function (n) {
      return n === 1 ? 1 : -rp(n * tp) + 1;
    }),
    fs("Back", Nl("in"), Nl("out"), Nl()),
    (Re.SteppedEase =
      Re.steps =
      dr.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              o = 1 - Ti;
            return function (a) {
              return (((r * So(0, o, a)) | 0) + s) * i;
            };
          },
        }),
    (Xs.ease = Re["quad.out"]),
    tr(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (n) {
        return (Pl += n + "," + n + "Params,");
      }
    );
  var qc = function (e, t) {
      (this.id = ip++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : hc),
        (this.set = t ? t.getSetter : Xl);
    },
    Mo = (function () {
      function n(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Us(this, +t.duration, 1, 1),
          (this.data = t.data),
          Pt && ((this._ctx = Pt), Pt.data.push(this)),
          Ao || pr.wake();
      }
      var e = n.prototype;
      return (
        (e.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (e.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              Us(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((Zs(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              ya(this, i), !s._dp || s.parent || bc(s, this);
              s && s.parent;

            )
              s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              sn(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === Ti) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), mc(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + yc(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (e.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (e.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  yc(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (i, r) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * s, r)
            : this._repeat
            ? Vs(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i) {
          if (!arguments.length) return this._rts === -1e-8 ? 0 : this._rts;
          if (this._rts === i) return this;
          var r =
            this.parent && this._ts ? _a(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -1e-8 ? 0 : this._rts),
            this.totalTime(So(-Math.abs(this._delay), this._tDur, r), !0),
            va(this),
            dp(this)
          );
        }),
        (e.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Zs(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== Ti &&
                        (this._tTime -= Ti)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && sn(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (er(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? _a(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = ap);
          var r = Ei;
          return (
            (Ei = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (Ei = r),
            this
          );
        }),
        (e.globalTime = function (i) {
          for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
            (s = r._start + s / (r._ts || 1)), (r = r._dp);
          return !this.parent && this._sat
            ? this._sat.vars.immediateRender
              ? -1 / 0
              : this._sat.globalTime(i)
            : s;
        }),
        (e.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), Sc(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), Sc(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Mr(this, i), er(r));
        }),
        (e.restart = function (i, r) {
          return this.play().totalTime(i ? -this._delay : 0, er(r));
        }),
        (e.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -1e-8 : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
        }),
        (e.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            s;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (s = i.rawTime(!0)) >= r &&
              s < this.endTime(!0) - Ti)
          );
        }),
        (e.eventCallback = function (i, r, s) {
          var o = this.vars;
          return arguments.length > 1
            ? (r
                ? ((o[i] = r),
                  s && (o[i + "Params"] = s),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete o[i],
              this)
            : o[i];
        }),
        (e.then = function (i) {
          var r = this;
          return new Promise(function (s) {
            var o = kt(i) ? i : wc,
              a = function () {
                var u = r.then;
                (r.then = null),
                  kt(o) && (o = o(r)) && (o.then || o === r) && (r.then = u),
                  s(o),
                  (r.then = u);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? a()
              : (r._prom = a);
          });
        }),
        (e.kill = function () {
          To(this);
        }),
        n
      );
    })();
  Ar(Mo.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -1e-8,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var ir = (function (n) {
    rc(e, n);
    function e(i, r) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = n.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = er(i.sortChildren)),
        Dt && sn(i.parent || Dt, bn(s), r),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && Dc(bn(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, s, o) {
        return xo(0, arguments, this), this;
      }),
      (t.from = function (r, s, o) {
        return xo(1, arguments, this), this;
      }),
      (t.fromTo = function (r, s, o, a) {
        return xo(2, arguments, this), this;
      }),
      (t.set = function (r, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Do(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new $t(r, s, Mr(this, o), 1),
          this
        );
      }),
      (t.call = function (r, s, o) {
        return sn(this, $t.delayedCall(0, r, s), o);
      }),
      (t.staggerTo = function (r, s, o, a, l, u, c) {
        return (
          (o.duration = s),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = c),
          (o.parent = this),
          new $t(r, o, Mr(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, s, o, a, l, u, c) {
        return (
          (o.runBackwards = 1),
          (Do(o).immediateRender = er(o.immediateRender)),
          this.staggerTo(r, s, o, a, l, u, c)
        );
      }),
      (t.staggerFromTo = function (r, s, o, a, l, u, c, h) {
        return (
          (a.startAt = o),
          (Do(a).immediateRender = er(a.immediateRender)),
          this.staggerTo(r, s, a, l, u, c, h)
        );
      }),
      (t.render = function (r, s, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = r <= 0 ? 0 : ci(r),
          h = this._zTime < 0 != r < 0 && (this._initted || !u),
          m,
          p,
          d,
          f,
          g,
          v,
          _,
          w,
          b,
          D,
          E,
          T;
        if (
          (this !== Dt && c > l && r >= 0 && (c = l),
          c !== this._tTime || o || h)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((c += this._time - a), (r += this._time - a)),
            (m = c),
            (b = this._start),
            (w = this._ts),
            (v = !w),
            h && (u || (a = this._zTime), (r || !s) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((E = this._yoyo),
              (g = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(g * 100 + r, s, o);
            if (
              ((m = ci(c % g)),
              c === l
                ? ((f = this._repeat), (m = u))
                : ((f = ~~(c / g)),
                  f && f === c / g && ((m = u), f--),
                  m > u && (m = u)),
              (D = Vs(this._tTime, g)),
              !a &&
                this._tTime &&
                D !== f &&
                this._tTime - D * g - this._dur <= 0 &&
                (D = f),
              E && f & 1 && ((m = u - m), (T = 1)),
              f !== D && !this._lock)
            ) {
              var P = E && D & 1,
                A = P === (E && f & 1);
              if (
                (f < D && (P = !P),
                (a = P ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(a || (T ? 0 : ci(f * g)), s, !u)._lock = 0),
                (this._tTime = c),
                !s && this.parent && kr(this, "onRepeat"),
                this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  v !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                A &&
                  ((this._lock = 2),
                  (a = P ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !T && this.invalidate()),
                (this._lock = 0),
                !this._ts && !v)
              )
                return this;
              $c(this, T);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((_ = mp(this, ci(a), ci(m))), _ && (c -= m - (m = _._start))),
            (this._tTime = c),
            (this._time = m),
            (this._act = !w),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && m && !s && !f && (kr(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (m >= a && r >= 0)
            for (p = this._first; p; ) {
              if (
                ((d = p._next), (p._act || m >= p._start) && p._ts && _ !== p)
              ) {
                if (p.parent !== this) return this.render(r, s, o);
                if (
                  (p.render(
                    p._ts > 0
                      ? (m - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (m - p._start) * p._ts,
                    s,
                    o
                  ),
                  m !== this._time || (!this._ts && !v))
                ) {
                  (_ = 0), d && (c += this._zTime = -1e-8);
                  break;
                }
              }
              p = d;
            }
          else {
            p = this._last;
            for (var C = r < 0 ? r : m; p; ) {
              if (
                ((d = p._prev), (p._act || C <= p._end) && p._ts && _ !== p)
              ) {
                if (p.parent !== this) return this.render(r, s, o);
                if (
                  (p.render(
                    p._ts > 0
                      ? (C - p._start) * p._ts
                      : (p._dirty ? p.totalDuration() : p._tDur) +
                          (C - p._start) * p._ts,
                    s,
                    o || (Ei && (p._initted || p._startAt))
                  ),
                  m !== this._time || (!this._ts && !v))
                ) {
                  (_ = 0), d && (c += this._zTime = C ? -1e-8 : Ti);
                  break;
                }
              }
              p = d;
            }
          }
          if (
            _ &&
            !s &&
            (this.pause(),
            (_.render(m >= a ? 0 : -1e-8)._zTime = m >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = b), va(this), this.render(r, s, o);
          this._onUpdate && !s && kr(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && a)) &&
              (b === this._start || Math.abs(w) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  Yn(this, 1),
                !s &&
                  !(r < 0 && !a) &&
                  (c || a || !l) &&
                  (kr(
                    this,
                    c === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, s) {
        var o = this;
        if ((Dn(s) || (s = Mr(this, s, r)), !(r instanceof Mo))) {
          if (Ci(r))
            return (
              r.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (ii(r)) return this.addLabel(r, s);
          if (kt(r)) r = $t.delayedCall(0, r);
          else return this;
        }
        return this !== r ? sn(this, r, s) : this;
      }),
      (t.getChildren = function (r, s, o, a) {
        r === void 0 && (r = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -1e8);
        for (var l = [], u = this._first; u; )
          u._start >= a &&
            (u instanceof $t
              ? s && l.push(u)
              : (o && l.push(u),
                r && l.push.apply(l, u.getChildren(!0, s, o)))),
            (u = u._next);
        return l;
      }),
      (t.getById = function (r) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
          if (s[o].vars.id === r) return s[o];
      }),
      (t.remove = function (r) {
        return ii(r)
          ? this.removeLabel(r)
          : kt(r)
          ? this.killTweensOf(r)
          : (wa(this, r),
            r === this._recent && (this._recent = this._last),
            cs(this));
      }),
      (t.totalTime = function (r, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = ci(
                pr.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            n.prototype.totalTime.call(this, r, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (r, s) {
        return (this.labels[r] = Mr(this, s)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, s, o) {
        var a = $t.delayedCall(0, s || bo, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), sn(this, a, Mr(this, r))
        );
      }),
      (t.removePause = function (r) {
        var s = this._first;
        for (r = Mr(this, r); s; )
          s._start === r && s.data === "isPause" && Yn(s), (s = s._next);
      }),
      (t.killTweensOf = function (r, s, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
          Xn !== a[l] && a[l].kill(r, s);
        return this;
      }),
      (t.getTweensOf = function (r, s) {
        for (var o = [], a = Pr(r), l = this._first, u = Dn(s), c; l; )
          l instanceof $t
            ? lp(l._targets, a) &&
              (u
                ? (!Xn || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              o.push(l)
            : (c = l.getTweensOf(a, s)).length && o.push.apply(o, c),
            (l = l._next);
        return o;
      }),
      (t.tweenTo = function (r, s) {
        s = s || {};
        var o = this,
          a = Mr(o, r),
          l = s,
          u = l.startAt,
          c = l.onStart,
          h = l.onStartParams,
          m = l.immediateRender,
          p,
          d = $t.to(
            o,
            Ar(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                  ) ||
                  Ti,
                onStart: function () {
                  if ((o.pause(), !p)) {
                    var g =
                      s.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    d._dur !== g && Us(d, g, 0, 1).render(d._time, !0, !0),
                      (p = 1);
                  }
                  c && c.apply(d, h || []);
                },
              },
              s
            )
          );
        return m ? d.render(0) : d;
      }),
      (t.tweenFromTo = function (r, s, o) {
        return this.tweenTo(s, Ar({ startAt: { time: Mr(this, r) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), Fc(this, Mr(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), Fc(this, Mr(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + Ti);
      }),
      (t.shiftChildren = function (r, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
        if (s) for (u in l) l[u] >= o && (l[u] += r);
        return cs(this);
      }),
      (t.invalidate = function (r) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
        return n.prototype.invalidate.call(this, r);
      }),
      (t.clear = function (r) {
        r === void 0 && (r = !0);
        for (var s = this._first, o; s; )
          (o = s._next), this.remove(s), (s = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          cs(this)
        );
      }),
      (t.totalDuration = function (r) {
        var s = 0,
          o = this,
          a = o._last,
          l = rn,
          u,
          c,
          h;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -r : r)
          );
        if (o._dirty) {
          for (h = o.parent; a; )
            (u = a._prev),
              a._dirty && a.totalDuration(),
              (c = a._start),
              c > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (sn(o, a, c - a._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                a._ts &&
                ((s -= c),
                ((!h && !o._dp) || (h && h.smoothChildTiming)) &&
                  ((o._start += c / o._ts), (o._time -= c), (o._tTime -= c)),
                o.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = u);
          Us(o, o === Dt && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((Dt._ts && (mc(Dt, _a(r, Dt)), (fc = pr.frame)), pr.frame >= pc)) {
          pc += cr.autoSleep || 120;
          var s = Dt._first;
          if ((!s || !s._ts) && cr.autoSleep && pr._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || pr.sleep();
          }
        }
      }),
      e
    );
  })(Mo);
  Ar(ir.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var kp = function (e, t, i, r, s, o, a) {
      var l = new rr(this._pt, e, t, 0, 1, Uc, null, s),
        u = 0,
        c = 0,
        h,
        m,
        p,
        d,
        f,
        g,
        v,
        _;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (v = ~r.indexOf("random(")) && (r = Eo(r)),
          o && ((_ = [i, r]), o(_, e, t), (i = _[0]), (r = _[1])),
          m = i.match(xl) || [];
        (h = xl.exec(r));

      )
        (d = h[0]),
          (f = r.substring(u, h.index)),
          p ? (p = (p + 1) % 5) : f.substr(-5) === "rgba(" && (p = 1),
          d !== m[c++] &&
            ((g = parseFloat(m[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: f || c === 1 ? f : ",",
              s: g,
              c: d.charAt(1) === "=" ? Ws(g, d) - g : parseFloat(d) - g,
              m: p && p < 4 ? Math.round : 0,
            }),
            (u = xl.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = a),
        (ac.test(r) || v) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    $l = function (e, t, i, r, s, o, a, l, u, c) {
      kt(r) && (r = r(s || 0, e, o));
      var h = e[t],
        m =
          i !== "get"
            ? i
            : kt(h)
            ? u
              ? e[
                  t.indexOf("set") || !kt(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](u)
              : e[t]()
            : h,
        p = kt(h) ? (u ? Ip : Wc) : Hl,
        d;
      if (
        (ii(r) &&
          (~r.indexOf("random(") && (r = Eo(r)),
          r.charAt(1) === "=" &&
            ((d = Ws(m, r) + (Ai(m) || 0)), (d || d === 0) && (r = d))),
        !c || m !== r || Yl)
      )
        return !isNaN(m * r) && r !== ""
          ? ((d = new rr(
              this._pt,
              e,
              t,
              +m || 0,
              r - (m || 0),
              typeof h == "boolean" ? Rp : Vc,
              0,
              p
            )),
            u && (d.fp = u),
            a && d.modifier(a, this, e),
            (this._pt = d))
          : (!h && !(t in e) && Tl(t, r),
            kp.call(this, e, t, m, r, p, l || cr.stringFilter, u));
    },
    Fp = function (e, t, i, r, s) {
      if (
        (kt(e) && (e = Po(e, s, t, i, r)),
        !nn(e) || (e.style && e.nodeType) || Ci(e) || sc(e))
      )
        return ii(e) ? Po(e, s, t, i, r) : e;
      var o = {},
        a;
      for (a in e) o[a] = Po(e[a], s, t, i, r);
      return o;
    },
    Hc = function (e, t, i, r, s, o) {
      var a, l, u, c;
      if (
        fr[e] &&
        (a = new fr[e]()).init(
          s,
          a.rawVars ? t[e] : Fp(t[e], r, s, o, i),
          i,
          r,
          o
        ) !== !1 &&
        ((i._pt = l = new rr(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
        i !== js)
      )
        for (u = i._ptLookup[i._targets.indexOf(s)], c = a._props.length; c--; )
          u[a._props[c]] = l;
      return a;
    },
    Xn,
    Yl,
    ql = function n(e, t, i) {
      var r = e.vars,
        s = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        c = r.onUpdateParams,
        h = r.callbackScope,
        m = r.runBackwards,
        p = r.yoyoEase,
        d = r.keyframes,
        f = r.autoRevert,
        g = e._dur,
        v = e._startAt,
        _ = e._targets,
        w = e.parent,
        b = w && w.data === "nested" ? w.vars.targets : _,
        D = e._overwrite === "auto" && !_l,
        E = e.timeline,
        T,
        P,
        A,
        C,
        R,
        k,
        L,
        B,
        X,
        V,
        z,
        I,
        O;
      if (
        (E && (!d || !s) && (s = "none"),
        (e._ease = ds(s, Xs.ease)),
        (e._yEase = p ? Nc(ds(p === !0 ? s : p, Xs.ease)) : 0),
        p &&
          e._yoyo &&
          !e._repeat &&
          ((p = e._yEase), (e._yEase = e._ease), (e._ease = p)),
        (e._from = !E && !!r.runBackwards),
        !E || (d && !r.stagger))
      ) {
        if (
          ((B = _[0] ? ls(_[0]).harness : 0),
          (I = B && r[B.prop]),
          (T = ga(r, Cl)),
          v &&
            (v._zTime < 0 && v.progress(1),
            t < 0 && m && a && !f
              ? v.render(-1, !0)
              : v.revert(m && g ? pa : op),
            (v._lazy = 0)),
          o)
        ) {
          if (
            (Yn(
              (e._startAt = $t.set(
                _,
                Ar(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: w,
                    immediateRender: !0,
                    lazy: !v && er(l),
                    startAt: null,
                    delay: 0,
                    onUpdate: u,
                    onUpdateParams: c,
                    callbackScope: h,
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ei || (!a && !f)) && e._startAt.revert(pa),
            a && g && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (m && g && !v) {
          if (
            (t && (a = !1),
            (A = Ar(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !v && er(l),
                immediateRender: a,
                stagger: 0,
                parent: w,
              },
              T
            )),
            I && (A[B.prop] = I),
            Yn((e._startAt = $t.set(_, A))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ei ? e._startAt.revert(pa) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            n(e._startAt, Ti, Ti);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (g && er(l)) || (l && !g), P = 0;
          P < _.length;
          P++
        ) {
          if (
            ((R = _[P]),
            (L = R._gsap || kl(_)[P]._gsap),
            (e._ptLookup[P] = V = {}),
            Al[L.id] && $n.length && ma(),
            (z = b === _ ? P : b.indexOf(R)),
            B &&
              (X = new B()).init(R, I || T, e, z, b) !== !1 &&
              ((e._pt = C =
                new rr(e._pt, R, X.name, 0, 1, X.render, X, 0, X.priority)),
              X._props.forEach(function (M) {
                V[M] = C;
              }),
              X.priority && (k = 1)),
            !B || I)
          )
            for (A in T)
              fr[A] && (X = Hc(A, T, e, z, R, b))
                ? X.priority && (k = 1)
                : (V[A] = C =
                    $l.call(e, R, A, "get", T[A], z, b, 0, r.stringFilter));
          e._op && e._op[P] && e.kill(R, e._op[P]),
            D &&
              e._pt &&
              ((Xn = e),
              Dt.killTweensOf(R, V, e.globalTime(t)),
              (O = !e.parent),
              (Xn = 0)),
            e._pt && l && (Al[L.id] = 1);
        }
        k && jc(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !O),
        d && t <= 0 && E.render(rn, !0, !0);
    },
    Lp = function (e, t, i, r, s, o, a) {
      var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        u,
        c,
        h,
        m;
      if (!l)
        for (
          l = e._ptCache[t] = [], h = e._ptLookup, m = e._targets.length;
          m--;

        ) {
          if (((u = h[m][t]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
          if (!u) return (Yl = 1), (e.vars[t] = "+=0"), ql(e, a), (Yl = 0), 1;
          l.push(u);
        }
      for (m = l.length; m--; )
        (c = l[m]),
          (u = c._pt || c),
          (u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + o * u.c),
          (u.c = i - u.s),
          c.e && (c.e = Lt(i) + Ai(c.e)),
          c.b && (c.b = u.s + Ai(c.b));
    },
    Op = function (e, t) {
      var i = e[0] ? ls(e[0]).harness : 0,
        r = i && i.aliases,
        s,
        o,
        a,
        l;
      if (!r) return t;
      s = us({}, t);
      for (o in r)
        if (o in s)
          for (l = r[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
      return s;
    },
    zp = function (e, t, i, r) {
      var s = t.ease || r || "power1.inOut",
        o,
        a;
      if (Ci(t))
        (a = i[e] || (i[e] = [])),
          t.forEach(function (l, u) {
            return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
          });
      else
        for (o in t)
          (a = i[o] || (i[o] = [])),
            o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
    },
    Po = function (e, t, i, r, s) {
      return kt(e)
        ? e.call(t, i, r, s)
        : ii(e) && ~e.indexOf("random(")
        ? Eo(e)
        : e;
    },
    Xc = Pl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Gc = {};
  tr(Xc + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (Gc[n] = 1);
  });
  var $t = (function (n) {
    rc(e, n);
    function e(i, r, s, o) {
      var a;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (a = n.call(this, o ? r : Do(r)) || this);
      var l = a.vars,
        u = l.duration,
        c = l.delay,
        h = l.immediateRender,
        m = l.stagger,
        p = l.overwrite,
        d = l.keyframes,
        f = l.defaults,
        g = l.scrollTrigger,
        v = l.yoyoEase,
        _ = r.parent || Dt,
        w = (Ci(i) || sc(i) ? Dn(i[0]) : "length" in r) ? [i] : Pr(i),
        b,
        D,
        E,
        T,
        P,
        A,
        C,
        R;
      if (
        ((a._targets = w.length
          ? kl(w)
          : fa(
              "GSAP target " + i + " not found. https://greensock.com",
              !cr.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = p),
        d || m || ca(u) || ca(c))
      ) {
        if (
          ((r = a.vars),
          (b = a.timeline =
            new ir({
              data: "nested",
              defaults: f || {},
              targets: _ && _.data === "nested" ? _.vars.targets : w,
            })),
          b.kill(),
          (b.parent = b._dp = bn(a)),
          (b._start = 0),
          m || ca(u) || ca(c))
        ) {
          if (((T = w.length), (C = m && Cc(m)), nn(m)))
            for (P in m) ~Xc.indexOf(P) && (R || (R = {}), (R[P] = m[P]));
          for (D = 0; D < T; D++)
            (E = ga(r, Gc)),
              (E.stagger = 0),
              v && (E.yoyoEase = v),
              R && us(E, R),
              (A = w[D]),
              (E.duration = +Po(u, bn(a), D, A, w)),
              (E.delay = (+Po(c, bn(a), D, A, w) || 0) - a._delay),
              !m &&
                T === 1 &&
                E.delay &&
                ((a._delay = c = E.delay), (a._start += c), (E.delay = 0)),
              b.to(A, E, C ? C(D, A, w) : 0),
              (b._ease = Re.none);
          b.duration() ? (u = c = 0) : (a.timeline = 0);
        } else if (d) {
          Do(Ar(b.vars.defaults, { ease: "none" })),
            (b._ease = ds(d.ease || r.ease || "none"));
          var k = 0,
            L,
            B,
            X;
          if (Ci(d))
            d.forEach(function (V) {
              return b.to(w, V, ">");
            }),
              b.duration();
          else {
            E = {};
            for (P in d)
              P === "ease" || P === "easeEach" || zp(P, d[P], E, d.easeEach);
            for (P in E)
              for (
                L = E[P].sort(function (V, z) {
                  return V.t - z.t;
                }),
                  k = 0,
                  D = 0;
                D < L.length;
                D++
              )
                (B = L[D]),
                  (X = {
                    ease: B.e,
                    duration: ((B.t - (D ? L[D - 1].t : 0)) / 100) * u,
                  }),
                  (X[P] = B.v),
                  b.to(w, X, k),
                  (k += X.duration);
            b.duration() < u && b.to({}, { duration: u - b.duration() });
          }
        }
        u || a.duration((u = b.duration()));
      } else a.timeline = 0;
      return (
        p === !0 && !_l && ((Xn = bn(a)), Dt.killTweensOf(w), (Xn = 0)),
        sn(_, bn(a), s),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (h ||
          (!u &&
            !d &&
            a._start === ci(_._time) &&
            er(h) &&
            fp(bn(a)) &&
            _.data !== "nested")) &&
          ((a._tTime = -1e-8), a.render(Math.max(0, -c) || 0)),
        g && Dc(bn(a), g),
        a
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, s, o) {
        var a = this._time,
          l = this._tDur,
          u = this._dur,
          c = r < 0,
          h = r > l - Ti && !c ? l : r < Ti ? 0 : r,
          m,
          p,
          d,
          f,
          g,
          v,
          _,
          w,
          b;
        if (!u) hp(this, r, s, o);
        else if (
          h !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c)
        ) {
          if (((m = h), (w = this.timeline), this._repeat)) {
            if (((f = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(f * 100 + r, s, o);
            if (
              ((m = ci(h % f)),
              h === l
                ? ((d = this._repeat), (m = u))
                : ((d = ~~(h / f)),
                  d && d === h / f && ((m = u), d--),
                  m > u && (m = u)),
              (v = this._yoyo && d & 1),
              v && ((b = this._yEase), (m = u - m)),
              (g = Vs(this._tTime, f)),
              m === a && !o && this._initted)
            )
              return (this._tTime = h), this;
            d !== g &&
              (w && this._yEase && $c(w, v),
              this.vars.repeatRefresh &&
                !v &&
                !this._lock &&
                ((this._lock = o = 1),
                (this.render(ci(f * d), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (xc(this, c ? r : m, o, s, h)) return (this._tTime = 0), this;
            if (a !== this._time) return this;
            if (u !== this._dur) return this.render(r, s, o);
          }
          if (
            ((this._tTime = h),
            (this._time = m),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = _ = (b || this._ease)(m / u)),
            this._from && (this.ratio = _ = 1 - _),
            m && !a && !s && !d && (kr(this, "onStart"), this._tTime !== h))
          )
            return this;
          for (p = this._pt; p; ) p.r(_, p.d), (p = p._next);
          (w &&
            w.render(
              r < 0 ? r : !m && v ? -1e-8 : w._dur * w._ease(m / this._dur),
              s,
              o
            )) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (c && Fl(this, r, s, o), kr(this, "onUpdate")),
            this._repeat &&
              d !== g &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              kr(this, "onRepeat"),
            (h === this._tDur || !h) &&
              this._tTime === h &&
              (c && !this._onUpdate && Fl(this, r, !0, !0),
              (r || !u) &&
                ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) &&
                Yn(this, 1),
              !s &&
                !(c && !a) &&
                (h || a || v) &&
                (kr(this, h === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(h < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          n.prototype.invalidate.call(this, r)
        );
      }),
      (t.resetTo = function (r, s, o, a) {
        Ao || pr.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || ql(this, l),
          (u = this._ease(l / this._dur)),
          Lp(this, r, s, o, a, u, l)
            ? this.resetTo(r, s, o, a)
            : (ya(this, 0),
              this.parent ||
                vc(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (r, s) {
        if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
          return (this._lazy = this._pt = 0), this.parent ? To(this) : this;
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, s, Xn && Xn.vars.overwrite !== !0)
              ._first || To(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              Us(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = r ? Pr(r) : a,
          u = this._ptLookup,
          c = this._pt,
          h,
          m,
          p,
          d,
          f,
          g,
          v;
        if ((!s || s === "all") && cp(a, l))
          return s === "all" && (this._pt = 0), To(this);
        for (
          h = this._op = this._op || [],
            s !== "all" &&
              (ii(s) &&
                ((f = {}),
                tr(s, function (_) {
                  return (f[_] = 1);
                }),
                (s = f)),
              (s = Op(a, s))),
            v = a.length;
          v--;

        )
          if (~l.indexOf(a[v])) {
            (m = u[v]),
              s === "all"
                ? ((h[v] = s), (d = m), (p = {}))
                : ((p = h[v] = h[v] || {}), (d = s));
            for (f in d)
              (g = m && m[f]),
                g &&
                  ((!("kill" in g.d) || g.d.kill(f) === !0) &&
                    wa(this, g, "_pt"),
                  delete m[f]),
                p !== "all" && (p[f] = 1);
          }
        return this._initted && !this._pt && c && To(this), this;
      }),
      (e.to = function (r, s) {
        return new e(r, s, arguments[2]);
      }),
      (e.from = function (r, s) {
        return xo(1, arguments);
      }),
      (e.delayedCall = function (r, s, o, a) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (e.fromTo = function (r, s, o) {
        return xo(2, arguments);
      }),
      (e.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
      }),
      (e.killTweensOf = function (r, s, o) {
        return Dt.killTweensOf(r, s, o);
      }),
      e
    );
  })(Mo);
  Ar($t.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    tr("staggerTo,staggerFrom,staggerFromTo", function (n) {
      $t[n] = function () {
        var e = new ir(),
          t = Ol.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
      };
    });
  var Hl = function (e, t, i) {
      return (e[t] = i);
    },
    Wc = function (e, t, i) {
      return e[t](i);
    },
    Ip = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    Bp = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    Xl = function (e, t) {
      return kt(e[t]) ? Wc : yl(e[t]) && e.setAttribute ? Bp : Hl;
    },
    Vc = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Rp = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Uc = function (e, t) {
      var i = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (e === 1 && t.e) r = t.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * e)
              : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += t.c;
      }
      t.set(t.t, t.p, r, t);
    },
    Gl = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    Np = function (e, t, i, r) {
      for (var s = this._pt, o; s; )
        (o = s._next), s.p === r && s.modifier(e, t, i), (s = o);
    },
    $p = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? wa(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    Yp = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    jc = function (e) {
      for (var t = e._pt, i, r, s, o; t; ) {
        for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (s = t),
          (t._next = r) ? (r._prev = t) : (o = t),
          (t = i);
      }
      e._pt = s;
    },
    rr = (function () {
      function n(t, i, r, s, o, a, l, u, c) {
        (this.t = i),
          (this.s = s),
          (this.c = o),
          (this.p = r),
          (this.r = a || Vc),
          (this.d = l || this),
          (this.set = u || Hl),
          (this.pr = c || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = n.prototype;
      return (
        (e.modifier = function (i, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = Yp),
            (this.m = i),
            (this.mt = s),
            (this.tween = r);
        }),
        n
      );
    })();
  tr(
    Pl +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return (Cl[n] = 1);
    }
  ),
    (dr.TweenMax = dr.TweenLite = $t),
    (dr.TimelineLite = dr.TimelineMax = ir),
    (Dt = new ir({
      sortChildren: !1,
      defaults: Xs,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (cr.stringFilter = Rc);
  var ps = [],
    ba = {},
    qp = [],
    Zc = 0,
    Hp = 0,
    Wl = function (e) {
      return (ba[e] || qp).map(function (t) {
        return t();
      });
    },
    Vl = function () {
      var e = Date.now(),
        t = [];
      e - Zc > 2 &&
        (Wl("matchMediaInit"),
        ps.forEach(function (i) {
          var r = i.queries,
            s = i.conditions,
            o,
            a,
            l,
            u;
          for (a in r)
            (o = Cr.matchMedia(r[a]).matches),
              o && (l = 1),
              o !== s[a] && ((s[a] = o), (u = 1));
          u && (i.revert(), l && t.push(i));
        }),
        Wl("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i);
        }),
        (Zc = e),
        Wl("matchMedia"));
    },
    Qc = (function () {
      function n(t, i) {
        (this.selector = i && zl(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Hp++),
          t && this.add(t);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          kt(i) && ((s = r), (r = i), (i = kt));
          var o = this,
            a = function () {
              var u = Pt,
                c = o.selector,
                h;
              return (
                u && u !== o && u.data.push(o),
                s && (o.selector = zl(s)),
                (Pt = o),
                (h = r.apply(o, arguments)),
                kt(h) && o._r.push(h),
                (Pt = u),
                (o.selector = c),
                (o.isReverted = !1),
                h
              );
            };
          return (o.last = a), i === kt ? a(o) : i ? (o[i] = a) : a;
        }),
        (e.ignore = function (i) {
          var r = Pt;
          (Pt = null), i(this), (Pt = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof n
                ? i.push.apply(i, r.getTweens())
                : r instanceof $t &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (i, r) {
          var s = this;
          if (i) {
            var o = this.getTweens();
            this.data.forEach(function (l) {
              l.data === "isFlip" &&
                (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function (u) {
                  return o.splice(o.indexOf(u), 1);
                }));
            }),
              o
                .map(function (l) {
                  return { g: l.globalTime(0), t: l };
                })
                .sort(function (l, u) {
                  return u.g - l.g || -1 / 0;
                })
                .forEach(function (l) {
                  return l.t.revert(i);
                }),
              this.data.forEach(function (l) {
                return !(l instanceof $t) && l.revert && l.revert(i);
              }),
              this._r.forEach(function (l) {
                return l(i, s);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (l) {
              return l.kill && l.kill();
            });
          if ((this.clear(), r))
            for (var a = ps.length; a--; )
              ps[a].id === this.id && ps.splice(a, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        n
      );
    })(),
    Xp = (function () {
      function n(t) {
        (this.contexts = []), (this.scope = t);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          nn(i) || (i = { matches: i });
          var o = new Qc(0, s || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            c;
          Pt && !o.selector && (o.selector = Pt.selector),
            this.contexts.push(o),
            (r = o.add("onMatch", r)),
            (o.queries = i);
          for (u in i)
            u === "all"
              ? (c = 1)
              : ((l = Cr.matchMedia(i[u])),
                l &&
                  (ps.indexOf(o) < 0 && ps.push(o),
                  (a[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(Vl)
                    : l.addEventListener("change", Vl)));
          return c && r(o), this;
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        (e.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        n
      );
    })(),
    Da = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return Oc(r);
        });
      },
      timeline: function (e) {
        return new ir(e);
      },
      getTweensOf: function (e, t) {
        return Dt.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        ii(e) && (e = Pr(e)[0]);
        var s = ls(e || {}).get,
          o = i ? wc : gc;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? o(((fr[t] && fr[t].get) || s)(e, t, i, r))
              : function (a, l, u) {
                  return o(((fr[a] && fr[a].get) || s)(e, a, l, u));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Pr(e)), e.length > 1)) {
          var r = e.map(function (c) {
              return nr.quickSetter(c, t, i);
            }),
            s = r.length;
          return function (c) {
            for (var h = s; h--; ) r[h](c);
          };
        }
        e = e[0] || {};
        var o = fr[t],
          a = ls(e),
          l = (a.harness && (a.harness.aliases || {})[t]) || t,
          u = o
            ? function (c) {
                var h = new o();
                (js._pt = 0),
                  h.init(e, i ? c + i : c, js, 0, [e]),
                  h.render(1, h),
                  js._pt && Gl(1, js);
              }
            : a.set(e, l);
        return o
          ? u
          : function (c) {
              return u(e, l, i ? c + i : c, a, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          s = nr.to(
            e,
            us(((r = {}), (r[t] = "+=0.1"), (r.paused = !0), r), i || {})
          ),
          o = function (l, u, c) {
            return s.resetTo(t, l, u, c);
          };
        return (o.tween = s), o;
      },
      isTweening: function (e) {
        return Dt.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = ds(e.ease, Xs.ease)), _c(Xs, e || {});
      },
      config: function (e) {
        return _c(cr, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          s = e.defaults,
          o = e.extendTimeline;
        (r || "").split(",").forEach(function (a) {
          return (
            a &&
            !fr[a] &&
            !dr[a] &&
            fa(t + " effect requires " + a + " plugin.")
          );
        }),
          (Ml[t] = function (a, l, u) {
            return i(Pr(a), Ar(l || {}, s), u);
          }),
          o &&
            (ir.prototype[t] = function (a, l, u) {
              return this.add(Ml[t](a, nn(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (e, t) {
        Re[e] = ds(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? ds(e, t) : Re;
      },
      getById: function (e) {
        return Dt.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new ir(e),
          r,
          s;
        for (
          i.smoothChildTiming = er(e.smoothChildTiming),
            Dt.remove(i),
            i._dp = 0,
            i._time = i._tTime = Dt._time,
            r = Dt._first;
          r;

        )
          (s = r._next),
            (t ||
              !(
                !r._dur &&
                r instanceof $t &&
                r.vars.onComplete === r._targets[0]
              )) &&
              sn(i, r, r._start - r._delay),
            (r = s);
        return sn(Dt, i, 0), i;
      },
      context: function (e, t) {
        return e ? new Qc(e, t) : Pt;
      },
      matchMedia: function (e) {
        return new Xp(e);
      },
      matchMediaRefresh: function () {
        return (
          ps.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || Vl()
        );
      },
      addEventListener: function (e, t) {
        var i = ba[e] || (ba[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = ba[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: Dp,
        wrapYoyo: xp,
        distribute: Cc,
        random: Mc,
        snap: Ac,
        normalize: bp,
        getUnit: Ai,
        clamp: wp,
        splitColor: zc,
        toArray: Pr,
        selector: zl,
        mapRange: kc,
        pipe: vp,
        unitize: yp,
        interpolate: Sp,
        shuffle: Tc,
      },
      install: cc,
      effects: Ml,
      ticker: pr,
      updateRoot: ir.updateRoot,
      plugins: fr,
      globalTimeline: Dt,
      core: {
        PropTween: rr,
        globals: dc,
        Tween: $t,
        Timeline: ir,
        Animation: Mo,
        getCache: ls,
        _removeLinkedListItem: wa,
        reverting: function () {
          return Ei;
        },
        context: function (e) {
          return e && Pt && (Pt.data.push(e), (e._ctx = Pt)), Pt;
        },
        suppressOverwrites: function (e) {
          return (_l = e);
        },
      },
    };
  tr("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (Da[n] = $t[n]);
  }),
    pr.add(ir.updateRoot),
    (js = Da.to({}, { duration: 0 }));
  var Gp = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    Wp = function (e, t) {
      var i = e._targets,
        r,
        s,
        o;
      for (r in t)
        for (s = i.length; s--; )
          (o = e._ptLookup[s][r]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Gp(o, r)),
              o && o.modifier && o.modifier(t[r], e, i[s], r));
    },
    Ul = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, s, o) {
          o._onInit = function (a) {
            var l, u;
            if (
              (ii(s) &&
                ((l = {}),
                tr(s, function (c) {
                  return (l[c] = 1);
                }),
                (s = l)),
              t)
            ) {
              l = {};
              for (u in s) l[u] = t(s[u]);
              s = l;
            }
            Wp(a, s);
          };
        },
      };
    },
    nr =
      Da.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, r, s) {
            var o, a, l;
            this.tween = i;
            for (o in t)
              (l = e.getAttribute(o) || ""),
                (a = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  t[o],
                  r,
                  s,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = l),
                this._props.push(o);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              Ei ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        Ul("roundProps", Il),
        Ul("modifiers"),
        Ul("snap", Ac)
      ) || Da;
  ($t.version = ir.version = nr.version = "3.12.2"),
    (uc = 1),
    bl() && Zs(),
    Re.Power0,
    Re.Power1,
    Re.Power2,
    Re.Power3,
    Re.Power4,
    Re.Linear,
    Re.Quad,
    Re.Cubic,
    Re.Quart,
    Re.Quint,
    Re.Strong,
    Re.Elastic,
    Re.Back,
    Re.SteppedEase,
    Re.Bounce,
    Re.Sine,
    Re.Expo,
    Re.Circ;
  /*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Kc,
    Gn,
    Qs,
    jl,
    hs,
    Jc,
    Zl,
    Vp = function () {
      return typeof window < "u";
    },
    xn = {},
    ms = 180 / Math.PI,
    Ks = Math.PI / 180,
    Js = Math.atan2,
    ed = 1e8,
    Ql = /([A-Z])/g,
    Up = /(left|right|width|margin|padding|x)/i,
    jp = /[\s,\(]\S/,
    on = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Kl = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    Zp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    Qp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    Kp = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    td = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    id = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Jp = function (e, t, i) {
      return (e.style[t] = i);
    },
    eh = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    th = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    ih = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    rh = function (e, t, i, r, s) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
    },
    nh = function (e, t, i, r, s) {
      var o = e._gsap;
      (o[t] = i), o.renderTransform(s, o);
    },
    xt = "transform",
    Gr = xt + "Origin",
    sh = function n(e, t) {
      var i = this,
        r = this.target,
        s = r.style;
      if (e in xn && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = on[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (o) {
                  return (i.tfm[o] = Sn(r, o));
                })
              : (this.tfm[e] = r._gsap.x ? r._gsap[e] : Sn(r, e));
        else
          return on.transform.split(",").forEach(function (o) {
            return n.call(i, o, t);
          });
        if (this.props.indexOf(xt) >= 0) return;
        r._gsap.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Gr, t, "")),
          (e = xt);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    rd = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    oh = function () {
      var e = this.props,
        t = this.target,
        i = t.style,
        r = t._gsap,
        s,
        o;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? (t[e[s]] = e[s + 2])
          : e[s + 2]
          ? (i[e[s]] = e[s + 2])
          : i.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(Ql, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = Zl()),
          (!s || !s.isStart) && !i[xt] && (rd(i), (r.uncache = 1));
      }
    },
    nd = function (e, t) {
      var i = { target: e, props: [], revert: oh, save: sh };
      return (
        e._gsap || nr.core.getCache(e),
        t &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    sd,
    Jl = function (e, t) {
      var i = Gn.createElementNS
        ? Gn.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Gn.createElement(e);
      return i.style ? i : Gn.createElement(e);
    },
    an = function n(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(Ql, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && n(e, eo(t) || t, 1)) ||
        ""
      );
    },
    od = "O,Moz,ms,Ms,Webkit".split(","),
    eo = function (e, t, i) {
      var r = t || hs,
        s = r.style,
        o = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(od[o] + e in s);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? od[o] : "") + e;
    },
    eu = function () {
      Vp() &&
        window.document &&
        ((Kc = window),
        (Gn = Kc.document),
        (Qs = Gn.documentElement),
        (hs = Jl("div") || { style: {} }),
        Jl("div"),
        (xt = eo(xt)),
        (Gr = xt + "Origin"),
        (hs.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (sd = !!eo("perspective")),
        (Zl = nr.core.reverting),
        (jl = 1));
    },
    tu = function n(e) {
      var t = Jl(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        r = this.nextSibling,
        s = this.style.cssText,
        o;
      if (
        (Qs.appendChild(t),
        t.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (o = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = n);
        } catch {}
      else this._gsapBBox && (o = this._gsapBBox());
      return (
        i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        Qs.removeChild(t),
        (this.style.cssText = s),
        o
      );
    },
    ad = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    ld = function (e) {
      var t;
      try {
        t = e.getBBox();
      } catch {
        t = tu.call(e, !0);
      }
      return (
        (t && (t.width || t.height)) ||
          e.getBBox === tu ||
          (t = tu.call(e, !0)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +ad(e, ["x", "cx", "x1"]) || 0,
              y: +ad(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    ud = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ld(e));
    },
    ko = function (e, t) {
      if (t) {
        var i = e.style;
        t in xn && t !== Gr && (t = xt),
          i.removeProperty
            ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") &&
                (t = "-" + t),
              i.removeProperty(t.replace(Ql, "-$1").toLowerCase()))
            : i.removeAttribute(t);
      }
    },
    Wn = function (e, t, i, r, s, o) {
      var a = new rr(e._pt, t, i, 0, 1, o ? id : td);
      return (e._pt = a), (a.b = r), (a.e = s), e._props.push(i), a;
    },
    cd = { deg: 1, rad: 1, turn: 1 },
    ah = { grid: 1, flex: 1 },
    Vn = function n(e, t, i, r) {
      var s = parseFloat(i) || 0,
        o = (i + "").trim().substr((s + "").length) || "px",
        a = hs.style,
        l = Up.test(t),
        u = e.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        h = 100,
        m = r === "px",
        p = r === "%",
        d,
        f,
        g,
        v;
      return r === o || !s || cd[r] || cd[o]
        ? s
        : (o !== "px" && !m && (s = n(e, t, i, "px")),
          (v = e.getCTM && ud(e)),
          (p || o === "%") && (xn[t] || ~t.indexOf("adius"))
            ? ((d = v ? e.getBBox()[l ? "width" : "height"] : e[c]),
              Lt(p ? (s / d) * h : (s / 100) * d))
            : ((a[l ? "width" : "height"] = h + (m ? o : r)),
              (f =
                ~t.indexOf("adius") || (r === "em" && e.appendChild && !u)
                  ? e
                  : e.parentNode),
              v && (f = (e.ownerSVGElement || {}).parentNode),
              (!f || f === Gn || !f.appendChild) && (f = Gn.body),
              (g = f._gsap),
              g && p && g.width && l && g.time === pr.time && !g.uncache
                ? Lt((s / g.width) * h)
                : ((p || o === "%") &&
                    !ah[an(f, "display")] &&
                    (a.position = an(e, "position")),
                  f === e && (a.position = "static"),
                  f.appendChild(hs),
                  (d = hs[c]),
                  f.removeChild(hs),
                  (a.position = "absolute"),
                  l && p && ((g = ls(f)), (g.time = pr.time), (g.width = f[c])),
                  Lt(m ? (d * s) / h : d && s ? (h / d) * s : 0))));
    },
    Sn = function (e, t, i, r) {
      var s;
      return (
        jl || eu(),
        t in on &&
          t !== "transform" &&
          ((t = on[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        xn[t] && t !== "transform"
          ? ((s = Lo(e, r)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : Sa(an(e, Gr)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (xa[t] && xa[t](e, t, i)) ||
                an(e, t) ||
                hc(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Vn(e, t, s, i) + i : s
      );
    },
    lh = function (e, t, i, r) {
      if (!i || i === "none") {
        var s = eo(t, e, 1),
          o = s && an(e, s, 1);
        o && o !== i
          ? ((t = s), (i = o))
          : t === "borderColor" && (i = an(e, "borderTopColor"));
      }
      var a = new rr(this._pt, e.style, t, 0, 1, Uc),
        l = 0,
        u = 0,
        c,
        h,
        m,
        p,
        d,
        f,
        g,
        v,
        _,
        w,
        b,
        D;
      if (
        ((a.b = i),
        (a.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((e.style[t] = r), (r = an(e, t) || r), (e.style[t] = i)),
        (c = [i, r]),
        Rc(c),
        (i = c[0]),
        (r = c[1]),
        (m = i.match(Gs) || []),
        (D = r.match(Gs) || []),
        D.length)
      ) {
        for (; (h = Gs.exec(r)); )
          (g = h[0]),
            (_ = r.substring(l, h.index)),
            d
              ? (d = (d + 1) % 5)
              : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") &&
                (d = 1),
            g !== (f = m[u++] || "") &&
              ((p = parseFloat(f) || 0),
              (b = f.substr((p + "").length)),
              g.charAt(1) === "=" && (g = Ws(p, g) + b),
              (v = parseFloat(g)),
              (w = g.substr((v + "").length)),
              (l = Gs.lastIndex - w.length),
              w ||
                ((w = w || cr.units[t] || b),
                l === r.length && ((r += w), (a.e += w))),
              b !== w && (p = Vn(e, t, f, w) || 0),
              (a._pt = {
                _next: a._pt,
                p: _ || u === 1 ? _ : ",",
                s: p,
                c: v - p,
                m: (d && d < 4) || t === "zIndex" ? Math.round : 0,
              }));
        a.c = l < r.length ? r.substring(l, r.length) : "";
      } else a.r = t === "display" && r === "none" ? id : td;
      return ac.test(r) && (a.e = 0), (this._pt = a), a;
    },
    dd = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    uh = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = dd[i] || i),
        (t[1] = dd[r] || r),
        t.join(" ")
      );
    },
    ch = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          s = t.u,
          o = i._gsap,
          a,
          l,
          u;
        if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
        else
          for (s = s.split(","), u = s.length; --u > -1; )
            (a = s[u]),
              xn[a] && ((l = 1), (a = a === "transformOrigin" ? Gr : xt)),
              ko(i, a);
        l &&
          (ko(i, xt),
          o &&
            (o.svg && i.removeAttribute("transform"),
            Lo(i, 1),
            (o.uncache = 1),
            rd(r)));
      }
    },
    xa = {
      clearProps: function (e, t, i, r, s) {
        if (s.data !== "isFromStart") {
          var o = (e._pt = new rr(e._pt, t, i, 0, 0, ch));
          return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
        }
      },
    },
    Fo = [1, 0, 0, 1, 0, 0],
    fd = {},
    pd = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    hd = function (e) {
      var t = an(e, xt);
      return pd(t) ? Fo : t.substr(7).match(oc).map(Lt);
    },
    iu = function (e, t) {
      var i = e._gsap || ls(e),
        r = e.style,
        s = hd(e),
        o,
        a,
        l,
        u;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Fo : s)
        : (s === Fo &&
            !e.offsetParent &&
            e !== Qs &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (o = e.parentNode),
            (!o || !e.offsetParent) &&
              ((u = 1), (a = e.nextElementSibling), Qs.appendChild(e)),
            (s = hd(e)),
            l ? (r.display = l) : ko(e, "display"),
            u &&
              (a
                ? o.insertBefore(e, a)
                : o
                ? o.appendChild(e)
                : Qs.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    ru = function (e, t, i, r, s, o) {
      var a = e._gsap,
        l = s || iu(e, !0),
        u = a.xOrigin || 0,
        c = a.yOrigin || 0,
        h = a.xOffset || 0,
        m = a.yOffset || 0,
        p = l[0],
        d = l[1],
        f = l[2],
        g = l[3],
        v = l[4],
        _ = l[5],
        w = t.split(" "),
        b = parseFloat(w[0]) || 0,
        D = parseFloat(w[1]) || 0,
        E,
        T,
        P,
        A;
      i
        ? l !== Fo &&
          (T = p * g - d * f) &&
          ((P = b * (g / T) + D * (-f / T) + (f * _ - g * v) / T),
          (A = b * (-d / T) + D * (p / T) - (p * _ - d * v) / T),
          (b = P),
          (D = A))
        : ((E = ld(e)),
          (b = E.x + (~w[0].indexOf("%") ? (b / 100) * E.width : b)),
          (D =
            E.y + (~(w[1] || w[0]).indexOf("%") ? (D / 100) * E.height : D))),
        r || (r !== !1 && a.smooth)
          ? ((v = b - u),
            (_ = D - c),
            (a.xOffset = h + (v * p + _ * f) - v),
            (a.yOffset = m + (v * d + _ * g) - _))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = b),
        (a.yOrigin = D),
        (a.smooth = !!r),
        (a.origin = t),
        (a.originIsAbsolute = !!i),
        (e.style[Gr] = "0px 0px"),
        o &&
          (Wn(o, a, "xOrigin", u, b),
          Wn(o, a, "yOrigin", c, D),
          Wn(o, a, "xOffset", h, a.xOffset),
          Wn(o, a, "yOffset", m, a.yOffset)),
        e.setAttribute("data-svg-origin", b + " " + D);
    },
    Lo = function (e, t) {
      var i = e._gsap || new qc(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        s = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(e),
        u = an(e, Gr) || "0",
        c,
        h,
        m,
        p,
        d,
        f,
        g,
        v,
        _,
        w,
        b,
        D,
        E,
        T,
        P,
        A,
        C,
        R,
        k,
        L,
        B,
        X,
        V,
        z,
        I,
        O,
        M,
        re,
        we,
        Ke,
        Se,
        Y;
      return (
        (c = h = m = f = g = v = _ = w = b = 0),
        (p = d = 1),
        (i.svg = !!(e.getCTM && ud(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[xt] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[xt] !== "none" ? l[xt] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (T = iu(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((I = e.getBBox()),
              (u = i.xOrigin - I.x + "px " + (i.yOrigin - I.y) + "px"),
              (z = ""))
            : (z = !t && e.getAttribute("data-svg-origin")),
          ru(e, z || u, !!z || i.originIsAbsolute, i.smooth !== !1, T)),
        (D = i.xOrigin || 0),
        (E = i.yOrigin || 0),
        T !== Fo &&
          ((R = T[0]),
          (k = T[1]),
          (L = T[2]),
          (B = T[3]),
          (c = X = T[4]),
          (h = V = T[5]),
          T.length === 6
            ? ((p = Math.sqrt(R * R + k * k)),
              (d = Math.sqrt(B * B + L * L)),
              (f = R || k ? Js(k, R) * ms : 0),
              (_ = L || B ? Js(L, B) * ms + f : 0),
              _ && (d *= Math.abs(Math.cos(_ * Ks))),
              i.svg && ((c -= D - (D * R + E * L)), (h -= E - (D * k + E * B))))
            : ((Y = T[6]),
              (Ke = T[7]),
              (M = T[8]),
              (re = T[9]),
              (we = T[10]),
              (Se = T[11]),
              (c = T[12]),
              (h = T[13]),
              (m = T[14]),
              (P = Js(Y, we)),
              (g = P * ms),
              P &&
                ((A = Math.cos(-P)),
                (C = Math.sin(-P)),
                (z = X * A + M * C),
                (I = V * A + re * C),
                (O = Y * A + we * C),
                (M = X * -C + M * A),
                (re = V * -C + re * A),
                (we = Y * -C + we * A),
                (Se = Ke * -C + Se * A),
                (X = z),
                (V = I),
                (Y = O)),
              (P = Js(-L, we)),
              (v = P * ms),
              P &&
                ((A = Math.cos(-P)),
                (C = Math.sin(-P)),
                (z = R * A - M * C),
                (I = k * A - re * C),
                (O = L * A - we * C),
                (Se = B * C + Se * A),
                (R = z),
                (k = I),
                (L = O)),
              (P = Js(k, R)),
              (f = P * ms),
              P &&
                ((A = Math.cos(P)),
                (C = Math.sin(P)),
                (z = R * A + k * C),
                (I = X * A + V * C),
                (k = k * A - R * C),
                (V = V * A - X * C),
                (R = z),
                (X = I)),
              g &&
                Math.abs(g) + Math.abs(f) > 359.9 &&
                ((g = f = 0), (v = 180 - v)),
              (p = Lt(Math.sqrt(R * R + k * k + L * L))),
              (d = Lt(Math.sqrt(V * V + Y * Y))),
              (P = Js(X, V)),
              (_ = Math.abs(P) > 2e-4 ? P * ms : 0),
              (b = Se ? 1 / (Se < 0 ? -Se : Se) : 0)),
          i.svg &&
            ((z = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !pd(an(e, xt))),
            z && e.setAttribute("transform", z))),
        Math.abs(_) > 90 &&
          Math.abs(_) < 270 &&
          (s
            ? ((p *= -1),
              (_ += f <= 0 ? 180 : -180),
              (f += f <= 0 ? 180 : -180))
            : ((d *= -1), (_ += _ <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          c -
          ((i.xPercent =
            c &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (e.offsetWidth * i.xPercent) / 100
            : 0) +
          o),
        (i.y =
          h -
          ((i.yPercent =
            h &&
            ((!t && i.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
            ? (e.offsetHeight * i.yPercent) / 100
            : 0) +
          o),
        (i.z = m + o),
        (i.scaleX = Lt(p)),
        (i.scaleY = Lt(d)),
        (i.rotation = Lt(f) + a),
        (i.rotationX = Lt(g) + a),
        (i.rotationY = Lt(v) + a),
        (i.skewX = _ + a),
        (i.skewY = w + a),
        (i.transformPerspective = b + o),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (r[Gr] = Sa(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = cr.force3D),
        (i.renderTransform = i.svg ? fh : sd ? md : dh),
        (i.uncache = 0),
        i
      );
    },
    Sa = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    nu = function (e, t, i) {
      var r = Ai(t);
      return Lt(parseFloat(t) + parseFloat(Vn(e, "x", i + "px", r))) + r;
    },
    dh = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        md(e, t);
    },
    gs = "0deg",
    Oo = "0px",
    ws = ") ",
    md = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.z,
        u = i.rotation,
        c = i.rotationY,
        h = i.rotationX,
        m = i.skewX,
        p = i.skewY,
        d = i.scaleX,
        f = i.scaleY,
        g = i.transformPerspective,
        v = i.force3D,
        _ = i.target,
        w = i.zOrigin,
        b = "",
        D = (v === "auto" && e && e !== 1) || v === !0;
      if (w && (h !== gs || c !== gs)) {
        var E = parseFloat(c) * Ks,
          T = Math.sin(E),
          P = Math.cos(E),
          A;
        (E = parseFloat(h) * Ks),
          (A = Math.cos(E)),
          (o = nu(_, o, T * A * -w)),
          (a = nu(_, a, -Math.sin(E) * -w)),
          (l = nu(_, l, P * A * -w + w));
      }
      g !== Oo && (b += "perspective(" + g + ws),
        (r || s) && (b += "translate(" + r + "%, " + s + "%) "),
        (D || o !== Oo || a !== Oo || l !== Oo) &&
          (b +=
            l !== Oo || D
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + ws),
        u !== gs && (b += "rotate(" + u + ws),
        c !== gs && (b += "rotateY(" + c + ws),
        h !== gs && (b += "rotateX(" + h + ws),
        (m !== gs || p !== gs) && (b += "skew(" + m + ", " + p + ws),
        (d !== 1 || f !== 1) && (b += "scale(" + d + ", " + f + ws),
        (_.style[xt] = b || "translate(0, 0)");
    },
    fh = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.rotation,
        u = i.skewX,
        c = i.skewY,
        h = i.scaleX,
        m = i.scaleY,
        p = i.target,
        d = i.xOrigin,
        f = i.yOrigin,
        g = i.xOffset,
        v = i.yOffset,
        _ = i.forceCSS,
        w = parseFloat(o),
        b = parseFloat(a),
        D,
        E,
        T,
        P,
        A;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= Ks),
            (u *= Ks),
            (D = Math.cos(l) * h),
            (E = Math.sin(l) * h),
            (T = Math.sin(l - u) * -m),
            (P = Math.cos(l - u) * m),
            u &&
              ((c *= Ks),
              (A = Math.tan(u - c)),
              (A = Math.sqrt(1 + A * A)),
              (T *= A),
              (P *= A),
              c &&
                ((A = Math.tan(c)),
                (A = Math.sqrt(1 + A * A)),
                (D *= A),
                (E *= A))),
            (D = Lt(D)),
            (E = Lt(E)),
            (T = Lt(T)),
            (P = Lt(P)))
          : ((D = h), (P = m), (E = T = 0)),
        ((w && !~(o + "").indexOf("px")) || (b && !~(a + "").indexOf("px"))) &&
          ((w = Vn(p, "x", o, "px")), (b = Vn(p, "y", a, "px"))),
        (d || f || g || v) &&
          ((w = Lt(w + d - (d * D + f * T) + g)),
          (b = Lt(b + f - (d * E + f * P) + v))),
        (r || s) &&
          ((A = p.getBBox()),
          (w = Lt(w + (r / 100) * A.width)),
          (b = Lt(b + (s / 100) * A.height))),
        (A =
          "matrix(" +
          D +
          "," +
          E +
          "," +
          T +
          "," +
          P +
          "," +
          w +
          "," +
          b +
          ")"),
        p.setAttribute("transform", A),
        _ && (p.style[xt] = A);
    },
    ph = function (e, t, i, r, s) {
      var o = 360,
        a = ii(s),
        l = parseFloat(s) * (a && ~s.indexOf("rad") ? ms : 1),
        u = l - r,
        c = r + u + "deg",
        h,
        m;
      return (
        a &&
          ((h = s.split("_")[1]),
          h === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -360)),
          h === "cw" && u < 0
            ? (u = ((u + o * ed) % o) - ~~(u / o) * o)
            : h === "ccw" && u > 0 && (u = ((u - o * ed) % o) - ~~(u / o) * o)),
        (e._pt = m = new rr(e._pt, t, i, r, u, Zp)),
        (m.e = c),
        (m.u = "deg"),
        e._props.push(i),
        m
      );
    },
    gd = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    hh = function (e, t, i) {
      var r = gd({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        o = i.style,
        a,
        l,
        u,
        c,
        h,
        m,
        p,
        d;
      r.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (o[xt] = t),
          (a = Lo(i, 1)),
          ko(i, xt),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[xt]),
          (o[xt] = t),
          (a = Lo(i, 1)),
          (o[xt] = u));
      for (l in xn)
        (u = r[l]),
          (c = a[l]),
          u !== c &&
            s.indexOf(l) < 0 &&
            ((p = Ai(u)),
            (d = Ai(c)),
            (h = p !== d ? Vn(i, l, u, d) : parseFloat(u)),
            (m = parseFloat(c)),
            (e._pt = new rr(e._pt, a, l, h, m - h, Kl)),
            (e._pt.u = d || 0),
            e._props.push(l));
      gd(a, r);
    };
  tr("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      s = "Left",
      o = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (
        a
      ) {
        return e < 2 ? n + a : "border" + a + n;
      });
    xa[e > 1 ? "border" + n : n] = function (a, l, u, c, h) {
      var m, p;
      if (arguments.length < 4)
        return (
          (m = o.map(function (d) {
            return Sn(a, d, u);
          })),
          (p = m.join(" ")),
          p.split(m[0]).length === 5 ? m[0] : p
        );
      (m = (c + "").split(" ")),
        (p = {}),
        o.forEach(function (d, f) {
          return (p[d] = m[f] = m[f] || m[((f - 1) / 2) | 0]);
        }),
        a.init(l, p, h);
    };
  });
  var wd = {
    name: "css",
    register: eu,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, s) {
      var o = this._props,
        a = e.style,
        l = i.vars.startAt,
        u,
        c,
        h,
        m,
        p,
        d,
        f,
        g,
        v,
        _,
        w,
        b,
        D,
        E,
        T,
        P;
      jl || eu(),
        (this.styles = this.styles || nd(e)),
        (P = this.styles.props),
        (this.tween = i);
      for (f in t)
        if (
          f !== "autoRound" &&
          ((c = t[f]), !(fr[f] && Hc(f, t, i, r, e, s)))
        ) {
          if (
            ((p = typeof c),
            (d = xa[f]),
            p === "function" && ((c = c.call(i, r, e, s)), (p = typeof c)),
            p === "string" && ~c.indexOf("random(") && (c = Eo(c)),
            d)
          )
            d(this, e, f, c, i) && (T = 1);
          else if (f.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(f) + "").trim()),
              (c += ""),
              (Hn.lastIndex = 0),
              Hn.test(u) || ((g = Ai(u)), (v = Ai(c))),
              v ? g !== v && (u = Vn(e, f, u, v) + v) : g && (c += g),
              this.add(a, "setProperty", u, c, r, s, 0, 0, f),
              o.push(f),
              P.push(f, 0, a[f]);
          else if (p !== "undefined") {
            if (
              (l && f in l
                ? ((u =
                    typeof l[f] == "function" ? l[f].call(i, r, e, s) : l[f]),
                  ii(u) && ~u.indexOf("random(") && (u = Eo(u)),
                  Ai(u + "") || (u += cr.units[f] || Ai(Sn(e, f)) || ""),
                  (u + "").charAt(1) === "=" && (u = Sn(e, f)))
                : (u = Sn(e, f)),
              (m = parseFloat(u)),
              (_ = p === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              _ && (c = c.substr(2)),
              (h = parseFloat(c)),
              f in on &&
                (f === "autoAlpha" &&
                  (m === 1 && Sn(e, "visibility") === "hidden" && h && (m = 0),
                  P.push("visibility", 0, a.visibility),
                  Wn(
                    this,
                    a,
                    "visibility",
                    m ? "inherit" : "hidden",
                    h ? "inherit" : "hidden",
                    !h
                  )),
                f !== "scale" &&
                  f !== "transform" &&
                  ((f = on[f]), ~f.indexOf(",") && (f = f.split(",")[0]))),
              (w = f in xn),
              w)
            ) {
              if (
                (this.styles.save(f),
                b ||
                  ((D = e._gsap),
                  (D.renderTransform && !t.parseTransform) ||
                    Lo(e, t.parseTransform),
                  (E = t.smoothOrigin !== !1 && D.smooth),
                  (b = this._pt =
                    new rr(this._pt, a, xt, 0, 1, D.renderTransform, D, 0, -1)),
                  (b.dep = 1)),
                f === "scale")
              )
                (this._pt = new rr(
                  this._pt,
                  D,
                  "scaleY",
                  D.scaleY,
                  (_ ? Ws(D.scaleY, _ + h) : h) - D.scaleY || 0,
                  Kl
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", f),
                  (f += "X");
              else if (f === "transformOrigin") {
                P.push(Gr, 0, a[Gr]),
                  (c = uh(c)),
                  D.svg
                    ? ru(e, c, 0, E, 0, this)
                    : ((v = parseFloat(c.split(" ")[2]) || 0),
                      v !== D.zOrigin && Wn(this, D, "zOrigin", D.zOrigin, v),
                      Wn(this, a, f, Sa(u), Sa(c)));
                continue;
              } else if (f === "svgOrigin") {
                ru(e, c, 1, E, 0, this);
                continue;
              } else if (f in fd) {
                ph(this, D, f, m, _ ? Ws(m, _ + c) : c);
                continue;
              } else if (f === "smoothOrigin") {
                Wn(this, D, "smooth", D.smooth, c);
                continue;
              } else if (f === "force3D") {
                D[f] = c;
                continue;
              } else if (f === "transform") {
                hh(this, c, e);
                continue;
              }
            } else f in a || (f = eo(f) || f);
            if (
              w ||
              ((h || h === 0) && (m || m === 0) && !jp.test(c) && f in a)
            )
              (g = (u + "").substr((m + "").length)),
                h || (h = 0),
                (v = Ai(c) || (f in cr.units ? cr.units[f] : g)),
                g !== v && (m = Vn(e, f, u, v)),
                (this._pt = new rr(
                  this._pt,
                  w ? D : a,
                  f,
                  m,
                  (_ ? Ws(m, _ + h) : h) - m,
                  !w && (v === "px" || f === "zIndex") && t.autoRound !== !1
                    ? Kp
                    : Kl
                )),
                (this._pt.u = v || 0),
                g !== v && v !== "%" && ((this._pt.b = u), (this._pt.r = Qp));
            else if (f in a) lh.call(this, e, f, u, _ ? _ + c : c);
            else if (f in e) this.add(e, f, u || e[f], _ ? _ + c : c, r, s);
            else if (f !== "parseTransform") {
              Tl(f, c);
              continue;
            }
            w || (f in a ? P.push(f, 0, a[f]) : P.push(f, 1, u || e[f])),
              o.push(f);
          }
        }
      T && jc(this);
    },
    render: function (e, t) {
      if (t.tween._time || !Zl())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Sn,
    aliases: on,
    getSetter: function (e, t, i) {
      var r = on[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in xn && t !== Gr && (e._gsap.x || Sn(e, "x"))
          ? i && Jc === i
            ? t === "scale"
              ? ih
              : th
            : (Jc = i || {}) && (t === "scale" ? rh : nh)
          : e.style && !yl(e.style[t])
          ? Jp
          : ~t.indexOf("-")
          ? eh
          : Xl(e, t)
      );
    },
    core: { _removeProperty: ko, _getMatrix: iu },
  };
  (nr.utils.checkPrefix = eo),
    (nr.core.getStyleSaver = nd),
    (function (n, e, t, i) {
      var r = tr(n + "," + e + "," + t, function (s) {
        xn[s] = 1;
      });
      tr(e, function (s) {
        (cr.units[s] = "deg"), (fd[s] = 1);
      }),
        (on[r[13]] = n + "," + e),
        tr(i, function (s) {
          var o = s.split(":");
          on[o[1]] = r[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    tr(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (n) {
        cr.units[n] = "px";
      }
    ),
    nr.registerPlugin(wd);
  var $ = nr.registerPlugin(wd) || nr;
  $.core.Tween;
  function mh(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function gh(n, e, t) {
    return mh(n.prototype, e), n;
  }
  /*!
   * Observer 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var di,
    su,
    hr,
    Un,
    jn,
    to,
    _d,
    _s,
    zo,
    vd,
    En,
    Wr,
    yd,
    bd = function () {
      return (
        di ||
        (typeof window < "u" && (di = window.gsap) && di.registerPlugin && di)
      );
    },
    Dd = 1,
    io = [],
    ke = [],
    ln = [],
    Io = Date.now,
    ou = function (e, t) {
      return t;
    },
    wh = function () {
      var e = zo.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, ke),
        r.push.apply(r, ln),
        (ke = i),
        (ln = r),
        (ou = function (o, a) {
          return t[o](a);
        });
    },
    Zn = function (e, t) {
      return ~ln.indexOf(e) && ln[ln.indexOf(e) + 1][t];
    },
    Bo = function (e) {
      return !!~vd.indexOf(e);
    },
    Ii = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: !r, capture: !!s });
    },
    Bi = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Ea = "scrollLeft",
    Ta = "scrollTop",
    au = function () {
      return (En && En.isPressed) || ke.cache++;
    },
    Ca = function (e, t) {
      var i = function r(s) {
        if (s || s === 0) {
          Dd && (hr.history.scrollRestoration = "manual");
          var o = En && En.isPressed;
          (s = r.v = Math.round(s) || (En && En.iOS ? 1 : 0)),
            e(s),
            (r.cacheID = ke.cache),
            o && ou("ss", s);
        } else
          (t || ke.cache !== r.cacheID || ou("ref")) &&
            ((r.cacheID = ke.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    Ri = {
      s: Ea,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: Ca(function (n) {
        return arguments.length
          ? hr.scrollTo(n, Zt.sc())
          : hr.pageXOffset || Un[Ea] || jn[Ea] || to[Ea] || 0;
      }),
    },
    Zt = {
      s: Ta,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ri,
      sc: Ca(function (n) {
        return arguments.length
          ? hr.scrollTo(Ri.sc(), n)
          : hr.pageYOffset || Un[Ta] || jn[Ta] || to[Ta] || 0;
      }),
    },
    sr = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || di.utils.toArray)(e)[0] ||
        (typeof e == "string" && di.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Qn = function (e, t) {
      var i = t.s,
        r = t.sc;
      Bo(e) && (e = Un.scrollingElement || jn);
      var s = ke.indexOf(e),
        o = r === Zt.sc ? 1 : 2;
      !~s && (s = ke.push(e) - 1), ke[s + o] || Ii(e, "scroll", au);
      var a = ke[s + o],
        l =
          a ||
          (ke[s + o] =
            Ca(Zn(e, i), !0) ||
            (Bo(e)
              ? r
              : Ca(function (u) {
                  return arguments.length ? (e[i] = u) : e[i];
                })));
      return (
        (l.target = e),
        a || (l.smooth = di.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    lu = function (e, t, i) {
      var r = e,
        s = e,
        o = Io(),
        a = o,
        l = t || 50,
        u = Math.max(500, l * 3),
        c = function (d, f) {
          var g = Io();
          f || g - o > l
            ? ((s = r), (r = d), (a = o), (o = g))
            : i
            ? (r += d)
            : (r = s + ((d - s) / (g - a)) * (o - a));
        },
        h = function () {
          (s = r = i ? 0 : r), (a = o = 0);
        },
        m = function (d) {
          var f = a,
            g = s,
            v = Io();
          return (
            (d || d === 0) && d !== r && c(d),
            o === a || v - a > u
              ? 0
              : ((r + (i ? g : -g)) / ((i ? v : o) - f)) * 1e3
          );
        };
      return { update: c, reset: h, getVelocity: m };
    },
    Ro = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    xd = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    Sd = function () {
      (zo = di.core.globals().ScrollTrigger), zo && zo.core && wh();
    },
    Ed = function (e) {
      return (
        (di = e || bd()),
        di &&
          typeof document < "u" &&
          document.body &&
          ((hr = window),
          (Un = document),
          (jn = Un.documentElement),
          (to = Un.body),
          (vd = [hr, Un, jn, to]),
          di.utils.clamp,
          (yd = di.core.context || function () {}),
          (_s = "onpointerenter" in to ? "pointer" : "mouse"),
          (_d = Yt.isTouch =
            hr.matchMedia &&
            hr.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in hr ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Wr = Yt.eventTypes =
            (
              "ontouchstart" in jn
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in jn
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Dd = 0);
          }, 500),
          Sd(),
          (su = 1)),
        su
      );
    };
  (Ri.op = Zt), (ke.cache = 0);
  var Yt = (function () {
    function n(t) {
      this.init(t);
    }
    var e = n.prototype;
    return (
      (e.init = function (i) {
        su || Ed(di) || console.warn("Please gsap.registerPlugin(Observer)"),
          zo || Sd();
        var r = i.tolerance,
          s = i.dragMinimum,
          o = i.type,
          a = i.target,
          l = i.lineHeight,
          u = i.debounce,
          c = i.preventDefault,
          h = i.onStop,
          m = i.onStopDelay,
          p = i.ignore,
          d = i.wheelSpeed,
          f = i.event,
          g = i.onDragStart,
          v = i.onDragEnd,
          _ = i.onDrag,
          w = i.onPress,
          b = i.onRelease,
          D = i.onRight,
          E = i.onLeft,
          T = i.onUp,
          P = i.onDown,
          A = i.onChangeX,
          C = i.onChangeY,
          R = i.onChange,
          k = i.onToggleX,
          L = i.onToggleY,
          B = i.onHover,
          X = i.onHoverEnd,
          V = i.onMove,
          z = i.ignoreCheck,
          I = i.isNormalizer,
          O = i.onGestureStart,
          M = i.onGestureEnd,
          re = i.onWheel,
          we = i.onEnable,
          Ke = i.onDisable,
          Se = i.onClick,
          Y = i.scrollSpeed,
          K = i.capture,
          Z = i.allowClicks,
          Q = i.lockAxis,
          Ce = i.onLockAxis;
        (this.target = a = sr(a) || jn),
          (this.vars = i),
          p && (p = di.utils.toArray(p)),
          (r = r || 1e-9),
          (s = s || 0),
          (d = d || 1),
          (Y = Y || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(hr.getComputedStyle(to).lineHeight) || 22);
        var ae,
          me,
          Ve,
          ie,
          Me,
          et,
          gt,
          W = this,
          wt = 0,
          Ht = 0,
          tt = Qn(a, Ri),
          Je = Qn(a, Zt),
          Hi = tt(),
          st = Je(),
          Ir =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Wr[0] === "pointerdown",
          _t = Bo(a),
          Ye = a.ownerDocument || Un,
          hi = [0, 0, 0],
          Ot = [0, 0, 0],
          dn = 0,
          Et = function () {
            return (dn = Io());
          },
          yr = function (le, qe) {
            return (
              ((W.event = le) && p && ~p.indexOf(le.target)) ||
              (qe && Ir && le.pointerType !== "touch") ||
              (z && z(le, qe))
            );
          },
          mi = function () {
            W._vx.reset(), W._vy.reset(), me.pause(), h && h(W);
          },
          fn = function () {
            var le = (W.deltaX = xd(hi)),
              qe = (W.deltaY = xd(Ot)),
              Xe = Math.abs(le) >= r,
              ee = Math.abs(qe) >= r;
            R && (Xe || ee) && R(W, le, qe, hi, Ot),
              Xe &&
                (D && W.deltaX > 0 && D(W),
                E && W.deltaX < 0 && E(W),
                A && A(W),
                k && W.deltaX < 0 != wt < 0 && k(W),
                (wt = W.deltaX),
                (hi[0] = hi[1] = hi[2] = 0)),
              ee &&
                (P && W.deltaY > 0 && P(W),
                T && W.deltaY < 0 && T(W),
                C && C(W),
                L && W.deltaY < 0 != Ht < 0 && L(W),
                (Ht = W.deltaY),
                (Ot[0] = Ot[1] = Ot[2] = 0)),
              (ie || Ve) && (V && V(W), Ve && (_(W), (Ve = !1)), (ie = !1)),
              et && !(et = !1) && Ce && Ce(W),
              Me && (re(W), (Me = !1)),
              (ae = 0);
          },
          Xi = function (le, qe, Xe) {
            (hi[Xe] += le),
              (Ot[Xe] += qe),
              W._vx.update(le),
              W._vy.update(qe),
              u ? ae || (ae = requestAnimationFrame(fn)) : fn();
          },
          pn = function (le, qe) {
            Q &&
              !gt &&
              ((W.axis = gt = Math.abs(le) > Math.abs(qe) ? "x" : "y"),
              (et = !0)),
              gt !== "y" && ((hi[2] += le), W._vx.update(le, !0)),
              gt !== "x" && ((Ot[2] += qe), W._vy.update(qe, !0)),
              u ? ae || (ae = requestAnimationFrame(fn)) : fn();
          },
          Ur = function (le) {
            if (!yr(le, 1)) {
              le = Ro(le, c);
              var qe = le.clientX,
                Xe = le.clientY,
                ee = qe - W.x,
                Oe = Xe - W.y,
                fe = W.isDragging;
              (W.x = qe),
                (W.y = Xe),
                (fe ||
                  Math.abs(W.startX - qe) >= s ||
                  Math.abs(W.startY - Xe) >= s) &&
                  (_ && (Ve = !0),
                  fe || (W.isDragging = !0),
                  pn(ee, Oe),
                  fe || (g && g(W)));
            }
          },
          Gi = (W.onPress = function (De) {
            yr(De, 1) ||
              (De && De.button) ||
              ((W.axis = gt = null),
              me.pause(),
              (W.isPressed = !0),
              (De = Ro(De)),
              (wt = Ht = 0),
              (W.startX = W.x = De.clientX),
              (W.startY = W.y = De.clientY),
              W._vx.reset(),
              W._vy.reset(),
              Ii(I ? a : Ye, Wr[1], Ur, c, !0),
              (W.deltaX = W.deltaY = 0),
              w && w(W));
          }),
          Br = (W.onRelease = function (De) {
            if (!yr(De, 1)) {
              Bi(I ? a : Ye, Wr[1], Ur, !0);
              var le = !isNaN(W.y - W.startY),
                qe =
                  W.isDragging &&
                  (Math.abs(W.x - W.startX) > 3 ||
                    Math.abs(W.y - W.startY) > 3),
                Xe = Ro(De);
              !qe &&
                le &&
                (W._vx.reset(),
                W._vy.reset(),
                c &&
                  Z &&
                  di.delayedCall(0.08, function () {
                    if (Io() - dn > 300 && !De.defaultPrevented) {
                      if (De.target.click) De.target.click();
                      else if (Ye.createEvent) {
                        var ee = Ye.createEvent("MouseEvents");
                        ee.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          hr,
                          1,
                          Xe.screenX,
                          Xe.screenY,
                          Xe.clientX,
                          Xe.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          De.target.dispatchEvent(ee);
                      }
                    }
                  })),
                (W.isDragging = W.isGesturing = W.isPressed = !1),
                h && !I && me.restart(!0),
                v && qe && v(W),
                b && b(W, qe);
            }
          }),
          Le = function (le) {
            return (
              le.touches &&
              le.touches.length > 1 &&
              (W.isGesturing = !0) &&
              O(le, W.isDragging)
            );
          },
          Rr = function () {
            return (W.isGesturing = !1) || M(W);
          },
          ot = function (le) {
            if (!yr(le)) {
              var qe = tt(),
                Xe = Je();
              Xi((qe - Hi) * Y, (Xe - st) * Y, 1),
                (Hi = qe),
                (st = Xe),
                h && me.restart(!0);
            }
          },
          Wi = function (le) {
            if (!yr(le)) {
              (le = Ro(le, c)), re && (Me = !0);
              var qe =
                (le.deltaMode === 1
                  ? l
                  : le.deltaMode === 2
                  ? hr.innerHeight
                  : 1) * d;
              Xi(le.deltaX * qe, le.deltaY * qe, 0), h && !I && me.restart(!0);
            }
          },
          vt = function (le) {
            if (!yr(le)) {
              var qe = le.clientX,
                Xe = le.clientY,
                ee = qe - W.x,
                Oe = Xe - W.y;
              (W.x = qe), (W.y = Xe), (ie = !0), (ee || Oe) && pn(ee, Oe);
            }
          },
          br = function (le) {
            (W.event = le), B(W);
          },
          Pn = function (le) {
            (W.event = le), X(W);
          },
          Nr = function (le) {
            return yr(le) || (Ro(le, c) && Se(W));
          };
        (me = W._dc = di.delayedCall(m || 0.25, mi).pause()),
          (W.deltaX = W.deltaY = 0),
          (W._vx = lu(0, 50, !0)),
          (W._vy = lu(0, 50, !0)),
          (W.scrollX = tt),
          (W.scrollY = Je),
          (W.isDragging = W.isGesturing = W.isPressed = !1),
          yd(this),
          (W.enable = function (De) {
            return (
              W.isEnabled ||
                (Ii(_t ? Ye : a, "scroll", au),
                o.indexOf("scroll") >= 0 && Ii(_t ? Ye : a, "scroll", ot, c, K),
                o.indexOf("wheel") >= 0 && Ii(a, "wheel", Wi, c, K),
                ((o.indexOf("touch") >= 0 && _d) ||
                  o.indexOf("pointer") >= 0) &&
                  (Ii(a, Wr[0], Gi, c, K),
                  Ii(Ye, Wr[2], Br),
                  Ii(Ye, Wr[3], Br),
                  Z && Ii(a, "click", Et, !1, !0),
                  Se && Ii(a, "click", Nr),
                  O && Ii(Ye, "gesturestart", Le),
                  M && Ii(Ye, "gestureend", Rr),
                  B && Ii(a, _s + "enter", br),
                  X && Ii(a, _s + "leave", Pn),
                  V && Ii(a, _s + "move", vt)),
                (W.isEnabled = !0),
                De && De.type && Gi(De),
                we && we(W)),
              W
            );
          }),
          (W.disable = function () {
            W.isEnabled &&
              (io.filter(function (De) {
                return De !== W && Bo(De.target);
              }).length || Bi(_t ? Ye : a, "scroll", au),
              W.isPressed &&
                (W._vx.reset(), W._vy.reset(), Bi(I ? a : Ye, Wr[1], Ur, !0)),
              Bi(_t ? Ye : a, "scroll", ot, K),
              Bi(a, "wheel", Wi, K),
              Bi(a, Wr[0], Gi, K),
              Bi(Ye, Wr[2], Br),
              Bi(Ye, Wr[3], Br),
              Bi(a, "click", Et, !0),
              Bi(a, "click", Nr),
              Bi(Ye, "gesturestart", Le),
              Bi(Ye, "gestureend", Rr),
              Bi(a, _s + "enter", br),
              Bi(a, _s + "leave", Pn),
              Bi(a, _s + "move", vt),
              (W.isEnabled = W.isPressed = W.isDragging = !1),
              Ke && Ke(W));
          }),
          (W.kill = W.revert =
            function () {
              W.disable();
              var De = io.indexOf(W);
              De >= 0 && io.splice(De, 1), En === W && (En = 0);
            }),
          io.push(W),
          I && Bo(a) && (En = W),
          W.enable(f);
      }),
      gh(n, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      n
    );
  })();
  (Yt.version = "3.12.2"),
    (Yt.create = function (n) {
      return new Yt(n);
    }),
    (Yt.register = Ed),
    (Yt.getAll = function () {
      return io.slice();
    }),
    (Yt.getById = function (n) {
      return io.filter(function (e) {
        return e.vars.id === n;
      })[0];
    }),
    bd() && di.registerPlugin(Yt);
  /*!
   * ScrollTrigger 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ne,
    ro,
    Ne,
    St,
    Vr,
    pt,
    Td,
    Aa,
    Ma,
    no,
    Pa,
    ka,
    Mi,
    Fa,
    uu,
    Ni,
    Cd,
    Ad,
    so,
    Md,
    cu,
    Pd,
    mr,
    kd,
    Fd,
    Ld,
    Kn,
    du,
    fu,
    oo,
    pu,
    hu,
    La = 1,
    $i = Date.now,
    mu = $i(),
    Fr = 0,
    No = 0,
    Od = function (e, t, i) {
      var r = gr(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    zd = function (e, t) {
      return t && (!gr(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    _h = function n() {
      return No && requestAnimationFrame(n);
    },
    Id = function () {
      return (Fa = 1);
    },
    Bd = function () {
      return (Fa = 0);
    },
    un = function (e) {
      return e;
    },
    $o = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Rd = function () {
      return typeof window < "u";
    },
    Nd = function () {
      return ne || (Rd() && (ne = window.gsap) && ne.registerPlugin && ne);
    },
    vs = function (e) {
      return !!~Td.indexOf(e);
    },
    $d = function (e) {
      return (
        (e === "Height" ? pu : Ne["inner" + e]) ||
        Vr["client" + e] ||
        pt["client" + e]
      );
    },
    Yd = function (e) {
      return (
        Zn(e, "getBoundingClientRect") ||
        (vs(e)
          ? function () {
              return (Wa.width = Ne.innerWidth), (Wa.height = pu), Wa;
            }
          : function () {
              return Cn(e);
            })
      );
    },
    vh = function (e, t, i) {
      var r = i.d,
        s = i.d2,
        o = i.a;
      return (o = Zn(e, "getBoundingClientRect"))
        ? function () {
            return o()[r];
          }
        : function () {
            return (t ? $d(s) : e["client" + s]) || 0;
          };
    },
    yh = function (e, t) {
      return !t || ~ln.indexOf(e)
        ? Yd(e)
        : function () {
            return Wa;
          };
    },
    Tn = function (e, t) {
      var i = t.s,
        r = t.d2,
        s = t.d,
        o = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (o = Zn(e, i))
          ? o() - Yd(e)()[s]
          : vs(e)
          ? (Vr[i] || pt[i]) - $d(r)
          : e[i] - e["offset" + r]
      );
    },
    Oa = function (e, t) {
      for (var i = 0; i < so.length; i += 3)
        (!t || ~t.indexOf(so[i + 1])) && e(so[i], so[i + 1], so[i + 2]);
    },
    gr = function (e) {
      return typeof e == "string";
    },
    Yi = function (e) {
      return typeof e == "function";
    },
    za = function (e) {
      return typeof e == "number";
    },
    ys = function (e) {
      return typeof e == "object";
    },
    Yo = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    gu = function (e, t) {
      if (e.enabled) {
        var i = t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    ao = Math.abs,
    qd = "left",
    Hd = "top",
    wu = "right",
    _u = "bottom",
    bs = "width",
    Ds = "height",
    qo = "Right",
    Ho = "Left",
    Xo = "Top",
    Go = "Bottom",
    qt = "padding",
    Lr = "margin",
    lo = "Width",
    vu = "Height",
    fi = "px",
    Or = function (e) {
      return Ne.getComputedStyle(e);
    },
    bh = function (e) {
      var t = Or(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    Xd = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Cn = function (e, t) {
      var i =
          t &&
          Or(e)[uu] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          ne
            .to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
        r = e.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    yu = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    Gd = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        s;
      for (s in i) t.push(i[s] / r);
      return t;
    },
    Dh = function (e) {
      return function (t) {
        return ne.utils.snap(Gd(e), t);
      };
    },
    bu = function (e) {
      var t = ne.utils.snap(e),
        i =
          Array.isArray(e) &&
          e.slice(0).sort(function (r, s) {
            return r - s;
          });
      return i
        ? function (r, s, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!s) return t(r);
            if (s > 0) {
              for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a];
              return i[a - 1];
            } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a];
            return i[0];
          }
        : function (r, s, o) {
            o === void 0 && (o = 0.001);
            var a = t(r);
            return !s || Math.abs(a - r) < o || a - r < 0 == s < 0
              ? a
              : t(s < 0 ? r - e : r + e);
          };
    },
    xh = function (e) {
      return function (t, i) {
        return bu(Gd(e))(t, i.direction);
      };
    },
    Ia = function (e, t, i, r) {
      return i.split(",").forEach(function (s) {
        return e(t, s, r);
      });
    },
    ri = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: !r, capture: !!s });
    },
    ni = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Ba = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Wd = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Ra = { toggleActions: "play", anticipatePin: 0 },
    Na = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    $a = function (e, t) {
      if (gr(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in Na
              ? Na[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    Ya = function (e, t, i, r, s, o, a, l) {
      var u = s.startColor,
        c = s.endColor,
        h = s.fontSize,
        m = s.indent,
        p = s.fontWeight,
        d = St.createElement("div"),
        f = vs(i) || Zn(i, "pinType") === "fixed",
        g = e.indexOf("scroller") !== -1,
        v = f ? pt : i,
        _ = e.indexOf("start") !== -1,
        w = _ ? u : c,
        b =
          "border-color:" +
          w +
          ";font-size:" +
          h +
          ";color:" +
          w +
          ";font-weight:" +
          p +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (b += "position:" + ((g || l) && f ? "fixed;" : "absolute;")),
        (g || l || !f) &&
          (b += (r === Zt ? wu : _u) + ":" + (o + parseFloat(m)) + "px;"),
        a &&
          (b +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (d._isStart = _),
        d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (d.style.cssText = b),
        (d.innerText = t || t === 0 ? e + "-" + t : e),
        v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d),
        (d._offset = d["offset" + r.op.d2]),
        qa(d, 0, r, _),
        d
      );
    },
    qa = function (e, t, i, r) {
      var s = { display: "block" },
        o = i[r ? "os2" : "p2"],
        a = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (s[i.a + "Percent"] = r ? -100 : 0),
        (s[i.a] = r ? "1px" : 0),
        (s["border" + o + lo] = 1),
        (s["border" + a + lo] = 0),
        (s[i.p] = t + "px"),
        ne.set(e, s);
    },
    Ae = [],
    Du = {},
    Wo,
    Vd = function () {
      return $i() - Fr > 34 && (Wo || (Wo = requestAnimationFrame(An)));
    },
    uo = function () {
      (!mr || !mr.isPressed || mr.startX > pt.clientWidth) &&
        (ke.cache++,
        mr ? Wo || (Wo = requestAnimationFrame(An)) : An(),
        Fr || Ss("scrollStart"),
        (Fr = $i()));
    },
    xu = function () {
      (Ld = Ne.innerWidth), (Fd = Ne.innerHeight);
    },
    Vo = function () {
      ke.cache++,
        !Mi &&
          !Pd &&
          !St.fullscreenElement &&
          !St.webkitFullscreenElement &&
          (!kd ||
            Ld !== Ne.innerWidth ||
            Math.abs(Ne.innerHeight - Fd) > Ne.innerHeight * 0.25) &&
          Aa.restart(!0);
    },
    xs = {},
    Sh = [],
    Ud = function n() {
      return ni(he, "scrollEnd", n) || Ts(!0);
    },
    Ss = function (e) {
      return (
        (xs[e] &&
          xs[e].map(function (t) {
            return t();
          })) ||
        Sh
      );
    },
    wr = [],
    jd = function (e) {
      for (var t = 0; t < wr.length; t += 5)
        (!e || (wr[t + 4] && wr[t + 4].query === e)) &&
          ((wr[t].style.cssText = wr[t + 1]),
          wr[t].getBBox && wr[t].setAttribute("transform", wr[t + 2] || ""),
          (wr[t + 3].uncache = 1));
    },
    Su = function (e, t) {
      var i;
      for (Ni = 0; Ni < Ae.length; Ni++)
        (i = Ae[Ni]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      t && jd(t), t || Ss("revert");
    },
    Zd = function (e, t) {
      ke.cache++,
        (t || !qi) &&
          ke.forEach(function (i) {
            return Yi(i) && i.cacheID++ && (i.rec = 0);
          }),
        gr(e) && (Ne.history.scrollRestoration = fu = e);
    },
    qi,
    Es = 0,
    Qd,
    Eh = function () {
      if (Qd !== Es) {
        var e = (Qd = Es);
        requestAnimationFrame(function () {
          return e === Es && Ts(!0);
        });
      }
    },
    Kd = function () {
      pt.appendChild(oo),
        (pu = oo.offsetHeight || Ne.innerHeight),
        pt.removeChild(oo);
    },
    Ts = function (e, t) {
      if (Fr && !e) {
        ri(he, "scrollEnd", Ud);
        return;
      }
      Kd(),
        (qi = he.isRefreshing = !0),
        ke.forEach(function (r) {
          return Yi(r) && ++r.cacheID && (r.rec = r());
        });
      var i = Ss("refreshInit");
      Md && he.sort(),
        t || Su(),
        ke.forEach(function (r) {
          Yi(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        Ae.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        Ae.forEach(function (r, s) {
          if (r._subPinOffset && r.pin) {
            var o = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              a = r.pin[o];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[o] - a), r.refresh();
          }
        }),
        Ae.forEach(function (r) {
          var s = Tn(r.scroller, r._dir);
          (r.vars.end === "max" || (r._endClamp && r.end > s)) &&
            r.setPositions(r.start, Math.max(r.start + 1, s), !0);
        }),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        ke.forEach(function (r) {
          Yi(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        Zd(fu, 1),
        Aa.pause(),
        Es++,
        (qi = 2),
        An(2),
        Ae.forEach(function (r) {
          return Yi(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (qi = he.isRefreshing = !1),
        Ss("refresh");
    },
    Eu = 0,
    Ha = 1,
    Uo,
    An = function (e) {
      if (!qi || e === 2) {
        (he.isUpdating = !0), Uo && Uo.update(0);
        var t = Ae.length,
          i = $i(),
          r = i - mu >= 50,
          s = t && Ae[0].scroll();
        if (
          ((Ha = Eu > s ? -1 : 1),
          qi || (Eu = s),
          r &&
            (Fr && !Fa && i - Fr > 200 && ((Fr = 0), Ss("scrollEnd")),
            (Pa = mu),
            (mu = i)),
          Ha < 0)
        ) {
          for (Ni = t; Ni-- > 0; ) Ae[Ni] && Ae[Ni].update(0, r);
          Ha = 1;
        } else for (Ni = 0; Ni < t; Ni++) Ae[Ni] && Ae[Ni].update(0, r);
        he.isUpdating = !1;
      }
      Wo = 0;
    },
    Tu = [
      qd,
      Hd,
      _u,
      wu,
      Lr + Go,
      Lr + qo,
      Lr + Xo,
      Lr + Ho,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Xa = Tu.concat([
      bs,
      Ds,
      "boxSizing",
      "max" + lo,
      "max" + vu,
      "position",
      Lr,
      qt,
      qt + Xo,
      qt + qo,
      qt + Go,
      qt + Ho,
    ]),
    Th = function (e, t, i) {
      co(i);
      var r = e._gsap;
      if (r.spacerIsNative) co(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    Cu = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var s = Tu.length, o = t.style, a = e.style, l; s--; )
          (l = Tu[s]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[_u] = a[wu] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[bs] = yu(e, Ri) + fi),
          (o[Ds] = yu(e, Zt) + fi),
          (o[qt] = a[Lr] = a[Hd] = a[qd] = "0"),
          co(r),
          (a[bs] = a["max" + lo] = i[bs]),
          (a[Ds] = a["max" + vu] = i[Ds]),
          (a[qt] = i[qt]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Ch = /([A-Z])/g,
    co = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          r = 0,
          s,
          o;
        for ((e.t._gsap || ne.core.getCache(e.t)).uncache = 1; r < i; r += 2)
          (o = e[r + 1]),
            (s = e[r]),
            o
              ? (t[s] = o)
              : t[s] && t.removeProperty(s.replace(Ch, "-$1").toLowerCase());
      }
    },
    Ga = function (e) {
      for (var t = Xa.length, i = e.style, r = [], s = 0; s < t; s++)
        r.push(Xa[s], i[Xa[s]]);
      return (r.t = e), r;
    },
    Ah = function (e, t, i) {
      for (var r = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
        (a = e[o]), r.push(a, a in t ? t[a] : e[o + 1]);
      return (r.t = e.t), r;
    },
    Wa = { left: 0, top: 0 },
    Jd = function (e, t, i, r, s, o, a, l, u, c, h, m, p, d) {
      Yi(e) && (e = e(l)),
        gr(e) &&
          e.substr(0, 3) === "max" &&
          (e = m + (e.charAt(4) === "=" ? $a("0" + e.substr(3), i) : 0));
      var f = p ? p.time() : 0,
        g,
        v,
        _;
      if ((p && p.seek(0), isNaN(e) || (e = +e), za(e)))
        p &&
          (e = ne.utils.mapRange(
            p.scrollTrigger.start,
            p.scrollTrigger.end,
            0,
            m,
            e
          )),
          a && qa(a, i, r, !0);
      else {
        Yi(t) && (t = t(l));
        var w = (e || "0").split(" "),
          b,
          D,
          E,
          T;
        (_ = sr(t, l) || pt),
          (b = Cn(_) || {}),
          (!b || (!b.left && !b.top)) &&
            Or(_).display === "none" &&
            ((T = _.style.display),
            (_.style.display = "block"),
            (b = Cn(_)),
            T ? (_.style.display = T) : _.style.removeProperty("display")),
          (D = $a(w[0], b[r.d])),
          (E = $a(w[1] || "0", i)),
          (e = b[r.p] - u[r.p] - c + D + s - E),
          a && qa(a, E, r, i - E < 20 || (a._isStart && E > 20)),
          (i -= i - E);
      }
      if ((d && ((l[d] = e || -0.001), e < 0 && (e = 0)), o)) {
        var P = e + i,
          A = o._isStart;
        (g = "scroll" + r.d2),
          qa(
            o,
            P,
            r,
            (A && P > 20) ||
              (!A && (h ? Math.max(pt[g], Vr[g]) : o.parentNode[g]) <= P + 1)
          ),
          h &&
            ((u = Cn(a)),
            h && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + fi));
      }
      return (
        p &&
          _ &&
          ((g = Cn(_)),
          p.seek(m),
          (v = Cn(_)),
          (p._caScrollDist = g[r.p] - v[r.p]),
          (e = (e / p._caScrollDist) * m)),
        p && p.seek(f),
        p ? e : Math.round(e)
      );
    },
    Mh = /(webkit|moz|length|cssText|inset)/i,
    ef = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var s = e.style,
          o,
          a;
        if (t === pt) {
          (e._stOrig = s.cssText), (a = Or(e));
          for (o in a)
            !+o &&
              !Mh.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          (s.top = i), (s.left = r);
        } else s.cssText = e._stOrig;
        (ne.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    tf = function (e, t, i) {
      var r = t,
        s = r;
      return function (o) {
        var a = Math.round(e());
        return (
          a !== r &&
            a !== s &&
            Math.abs(a - r) > 3 &&
            Math.abs(a - s) > 3 &&
            ((o = a), i && i()),
          (s = r),
          (r = o),
          o
        );
      };
    },
    Va = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), ne.set(e, r);
    },
    rf = function (e, t) {
      var i = Qn(e, t),
        r = "_scroll" + t.p2,
        s = function o(a, l, u, c, h) {
          var m = o.tween,
            p = l.onComplete,
            d = {};
          u = u || i();
          var f = tf(i, u, function () {
            m.kill(), (o.tween = 0);
          });
          return (
            (h = (c && h) || 0),
            (c = c || a - u),
            m && m.kill(),
            (l[r] = a),
            (l.modifiers = d),
            (d[r] = function () {
              return f(u + c * m.ratio + h * m.ratio * m.ratio);
            }),
            (l.onUpdate = function () {
              ke.cache++, An();
            }),
            (l.onComplete = function () {
              (o.tween = 0), p && p.call(m);
            }),
            (m = o.tween = ne.to(e, l)),
            m
          );
        };
      return (
        (e[r] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        ri(e, "wheel", i.wheelHandler),
        he.isTouch && ri(e, "touchmove", i.wheelHandler),
        s
      );
    },
    he = (function () {
      function n(t, i) {
        ro ||
          n.register(ne) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          du(this),
          this.init(t, i);
      }
      var e = n.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !No)
          ) {
            this.update = this.refresh = this.kill = un;
            return;
          }
          i = Xd(gr(i) || za(i) || i.nodeType ? { trigger: i } : i, Ra);
          var s = i,
            o = s.onUpdate,
            a = s.toggleClass,
            l = s.id,
            u = s.onToggle,
            c = s.onRefresh,
            h = s.scrub,
            m = s.trigger,
            p = s.pin,
            d = s.pinSpacing,
            f = s.invalidateOnRefresh,
            g = s.anticipatePin,
            v = s.onScrubComplete,
            _ = s.onSnapComplete,
            w = s.once,
            b = s.snap,
            D = s.pinReparent,
            E = s.pinSpacer,
            T = s.containerAnimation,
            P = s.fastScrollEnd,
            A = s.preventOverlaps,
            C =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? Ri
                : Zt,
            R = !h && h !== 0,
            k = sr(i.scroller || Ne),
            L = ne.core.getCache(k),
            B = vs(k),
            X =
              ("pinType" in i
                ? i.pinType
                : Zn(k, "pinType") || (B && "fixed")) === "fixed",
            V = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            z = R && i.toggleActions.split(" "),
            I = "markers" in i ? i.markers : Ra.markers,
            O = B ? 0 : parseFloat(Or(k)["border" + C.p2 + lo]) || 0,
            M = this,
            re =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(M);
              },
            we = vh(k, B, C),
            Ke = yh(k, B),
            Se = 0,
            Y = 0,
            K = 0,
            Z = Qn(k, C),
            Q,
            Ce,
            ae,
            me,
            Ve,
            ie,
            Me,
            et,
            gt,
            W,
            wt,
            Ht,
            tt,
            Je,
            Hi,
            st,
            Ir,
            _t,
            Ye,
            hi,
            Ot,
            dn,
            Et,
            yr,
            mi,
            fn,
            Xi,
            pn,
            Ur,
            Gi,
            Br,
            Le,
            Rr,
            ot,
            Wi,
            vt,
            br,
            Pn,
            Nr;
          if (
            ((M._startClamp = M._endClamp = !1),
            (M._dir = C),
            (g *= 45),
            (M.scroller = k),
            (M.scroll = T ? T.time.bind(T) : Z),
            (me = Z()),
            (M.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((Md = 1), i.refreshPriority === -9999 && (Uo = M)),
            (L.tweenScroll = L.tweenScroll || {
              top: rf(k, Zt),
              left: rf(k, Ri),
            }),
            (M.tweenTo = Q = L.tweenScroll[C.p]),
            (M.scrubDuration = function (ee) {
              (Rr = za(ee) && ee),
                Rr
                  ? Le
                    ? Le.duration(ee)
                    : (Le = ne.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        duration: Rr,
                        paused: !0,
                        onComplete: function () {
                          return v && v(M);
                        },
                      }))
                  : (Le && Le.progress(1).kill(), (Le = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !M.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (M.animation = r.pause()),
              (r.scrollTrigger = M),
              M.scrubDuration(h),
              (Gi = 0),
              l || (l = r.vars.id)),
            b &&
              ((!ys(b) || b.push) && (b = { snapTo: b }),
              "scrollBehavior" in pt.style &&
                ne.set(B ? [pt, Vr] : k, { scrollBehavior: "auto" }),
              ke.forEach(function (ee) {
                return (
                  Yi(ee) &&
                  ee.target === (B ? St.scrollingElement || Vr : k) &&
                  (ee.smooth = !1)
                );
              }),
              (ae = Yi(b.snapTo)
                ? b.snapTo
                : b.snapTo === "labels"
                ? Dh(r)
                : b.snapTo === "labelsDirectional"
                ? xh(r)
                : b.directional !== !1
                ? function (ee, Oe) {
                    return bu(b.snapTo)(ee, $i() - Y < 500 ? 0 : Oe.direction);
                  }
                : ne.utils.snap(b.snapTo)),
              (ot = b.duration || { min: 0.1, max: 2 }),
              (ot = ys(ot) ? no(ot.min, ot.max) : no(ot, ot)),
              (Wi = ne
                .delayedCall(b.delay || Rr / 2 || 0.1, function () {
                  var ee = Z(),
                    Oe = $i() - Y < 500,
                    fe = Q.tween;
                  if (
                    (Oe || Math.abs(M.getVelocity()) < 10) &&
                    !fe &&
                    !Fa &&
                    Se !== ee
                  ) {
                    var _e = (ee - ie) / Je,
                      zt = r && !R ? r.totalProgress() : _e,
                      Be = Oe ? 0 : ((zt - Br) / ($i() - Pa)) * 1e3 || 0,
                      Tt = ne.utils.clamp(
                        -_e,
                        1 - _e,
                        (ao(Be / 2) * Be) / 0.185
                      ),
                      gi = _e + (b.inertia === !1 ? 0 : Tt),
                      at = no(0, 1, ae(gi, M)),
                      it = Math.round(ie + at * Je),
                      Ee = b,
                      lt = Ee.onStart,
                      rt = Ee.onInterrupt,
                      It = Ee.onComplete;
                    if (ee <= Me && ee >= ie && it !== ee) {
                      if (fe && !fe._initted && fe.data <= ao(it - ee)) return;
                      b.inertia === !1 && (Tt = at - _e),
                        Q(
                          it,
                          {
                            duration: ot(
                              ao(
                                (Math.max(ao(gi - zt), ao(at - zt)) * 0.185) /
                                  Be /
                                  0.05 || 0
                              )
                            ),
                            ease: b.ease || "power3",
                            data: ao(it - ee),
                            onInterrupt: function () {
                              return Wi.restart(!0) && rt && rt(M);
                            },
                            onComplete: function () {
                              M.update(),
                                (Se = Z()),
                                (Gi = Br =
                                  r && !R ? r.totalProgress() : M.progress),
                                _ && _(M),
                                It && It(M);
                            },
                          },
                          ee,
                          Tt * Je,
                          it - ee - Tt * Je
                        ),
                        lt && lt(M, Q.tween);
                    }
                  } else M.isActive && Se !== ee && Wi.restart(!0);
                })
                .pause())),
            l && (Du[l] = M),
            (m = M.trigger = sr(m || (p !== !0 && p))),
            (Nr = m && m._gsap && m._gsap.stRevert),
            Nr && (Nr = Nr(M)),
            (p = p === !0 ? m : sr(p)),
            gr(a) && (a = { targets: m, className: a }),
            p &&
              (d === !1 ||
                d === Lr ||
                (d =
                  !d &&
                  p.parentNode &&
                  p.parentNode.style &&
                  Or(p.parentNode).display === "flex"
                    ? !1
                    : qt),
              (M.pin = p),
              (Ce = ne.core.getCache(p)),
              Ce.spacer
                ? (Hi = Ce.pinState)
                : (E &&
                    ((E = sr(E)),
                    E && !E.nodeType && (E = E.current || E.nativeElement),
                    (Ce.spacerIsNative = !!E),
                    E && (Ce.spacerState = Ga(E))),
                  (Ce.spacer = _t = E || St.createElement("div")),
                  _t.classList.add("pin-spacer"),
                  l && _t.classList.add("pin-spacer-" + l),
                  (Ce.pinState = Hi = Ga(p))),
              i.force3D !== !1 && ne.set(p, { force3D: !0 }),
              (M.spacer = _t = Ce.spacer),
              (Ur = Or(p)),
              (yr = Ur[d + C.os2]),
              (hi = ne.getProperty(p)),
              (Ot = ne.quickSetter(p, C.a, fi)),
              Cu(p, _t, Ur),
              (Ir = Ga(p))),
            I)
          ) {
            (Ht = ys(I) ? Xd(I, Wd) : Wd),
              (W = Ya("scroller-start", l, k, C, Ht, 0)),
              (wt = Ya("scroller-end", l, k, C, Ht, 0, W)),
              (Ye = W["offset" + C.op.d2]);
            var De = sr(Zn(k, "content") || k);
            (et = this.markerStart = Ya("start", l, De, C, Ht, Ye, 0, T)),
              (gt = this.markerEnd = Ya("end", l, De, C, Ht, Ye, 0, T)),
              T && (Pn = ne.quickSetter([et, gt], C.a, fi)),
              !X &&
                !(ln.length && Zn(k, "fixedMarkers") === !0) &&
                (bh(B ? pt : k),
                ne.set([W, wt], { force3D: !0 }),
                (fn = ne.quickSetter(W, C.a, fi)),
                (pn = ne.quickSetter(wt, C.a, fi)));
          }
          if (T) {
            var le = T.vars.onUpdate,
              qe = T.vars.onUpdateParams;
            T.eventCallback("onUpdate", function () {
              M.update(0, 0, 1), le && le.apply(T, qe || []);
            });
          }
          if (
            ((M.previous = function () {
              return Ae[Ae.indexOf(M) - 1];
            }),
            (M.next = function () {
              return Ae[Ae.indexOf(M) + 1];
            }),
            (M.revert = function (ee, Oe) {
              if (!Oe) return M.kill(!0);
              var fe = ee !== !1 || !M.enabled,
                _e = Mi;
              fe !== M.isReverted &&
                (fe &&
                  ((vt = Math.max(Z(), M.scroll.rec || 0)),
                  (K = M.progress),
                  (br = r && r.progress())),
                et &&
                  [et, gt, W, wt].forEach(function (zt) {
                    return (zt.style.display = fe ? "none" : "block");
                  }),
                fe && ((Mi = M), M.update(fe)),
                p &&
                  (!D || !M.isActive) &&
                  (fe ? Th(p, _t, Hi) : Cu(p, _t, Or(p), mi)),
                fe || M.update(fe),
                (Mi = _e),
                (M.isReverted = fe));
            }),
            (M.refresh = function (ee, Oe, fe, _e) {
              if (!((Mi || !M.enabled) && !Oe)) {
                if (p && ee && Fr) {
                  ri(n, "scrollEnd", Ud);
                  return;
                }
                !qi && re && re(M),
                  (Mi = M),
                  Q.tween && !fe && (Q.tween.kill(), (Q.tween = 0)),
                  Le && Le.pause(),
                  f && r && r.revert({ kill: !1 }).invalidate(),
                  M.isReverted || M.revert(!0, !0),
                  (M._subPinOffset = !1);
                var zt = we(),
                  Be = Ke(),
                  Tt = T ? T.duration() : Tn(k, C),
                  gi = Je <= 0.01,
                  at = 0,
                  it = _e || 0,
                  Ee = ys(fe) ? fe.end : i.end,
                  lt = i.endTrigger || m,
                  rt = ys(fe)
                    ? fe.start
                    : i.start ||
                      (i.start === 0 || !m ? 0 : p ? "0 0" : "0 100%"),
                  It = (M.pinnedContainer =
                    i.pinnedContainer && sr(i.pinnedContainer, M)),
                  ki = (m && Math.max(0, Ae.indexOf(M))) || 0,
                  wi = ki,
                  yt,
                  Qt,
                  hn,
                  ts,
                  Xt,
                  ut,
                  oi,
                  kn,
                  is,
                  jr,
                  Fi,
                  ft,
                  _i;
                for (
                  I &&
                  ys(fe) &&
                  ((ft = ne.getProperty(W, C.p)),
                  (_i = ne.getProperty(wt, C.p)));
                  wi--;

                )
                  (ut = Ae[wi]),
                    ut.end || ut.refresh(0, 1) || (Mi = M),
                    (oi = ut.pin),
                    oi &&
                      (oi === m || oi === p || oi === It) &&
                      !ut.isReverted &&
                      (jr || (jr = []), jr.unshift(ut), ut.revert(!0, !0)),
                    ut !== Ae[wi] && (ki--, wi--);
                for (
                  Yi(rt) && (rt = rt(M)),
                    rt = Od(rt, "start", M),
                    ie =
                      Jd(
                        rt,
                        m,
                        zt,
                        C,
                        Z(),
                        et,
                        W,
                        M,
                        Be,
                        O,
                        X,
                        Tt,
                        T,
                        M._startClamp && "_startClamp"
                      ) || (p ? -0.001 : 0),
                    Yi(Ee) && (Ee = Ee(M)),
                    gr(Ee) &&
                      !Ee.indexOf("+=") &&
                      (~Ee.indexOf(" ")
                        ? (Ee = (gr(rt) ? rt.split(" ")[0] : "") + Ee)
                        : ((at = $a(Ee.substr(2), zt)),
                          (Ee = gr(rt)
                            ? rt
                            : (T
                                ? ne.utils.mapRange(
                                    0,
                                    T.duration(),
                                    T.scrollTrigger.start,
                                    T.scrollTrigger.end,
                                    ie
                                  )
                                : ie) + at),
                          (lt = m))),
                    Ee = Od(Ee, "end", M),
                    Me =
                      Math.max(
                        ie,
                        Jd(
                          Ee || (lt ? "100% 0" : Tt),
                          lt,
                          zt,
                          C,
                          Z() + at,
                          gt,
                          wt,
                          M,
                          Be,
                          O,
                          X,
                          Tt,
                          T,
                          M._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    at = 0,
                    wi = ki;
                  wi--;

                )
                  (ut = Ae[wi]),
                    (oi = ut.pin),
                    oi &&
                      ut.start - ut._pinPush <= ie &&
                      !T &&
                      ut.end > 0 &&
                      ((yt =
                        ut.end -
                        (M._startClamp ? Math.max(0, ut.start) : ut.start)),
                      ((oi === m && ut.start - ut._pinPush < ie) ||
                        oi === It) &&
                        isNaN(rt) &&
                        (at += yt * (1 - ut.progress)),
                      oi === p && (it += yt));
                if (
                  ((ie += at),
                  (Me += at),
                  M._startClamp && (M._startClamp += at),
                  M._endClamp &&
                    !qi &&
                    ((M._endClamp = Me || -0.001),
                    (Me = Math.min(Me, Tn(k, C)))),
                  (Je = Me - ie || ((ie -= 0.01) && 0.001)),
                  gi &&
                    (K = ne.utils.clamp(0, 1, ne.utils.normalize(ie, Me, vt))),
                  (M._pinPush = it),
                  et &&
                    at &&
                    ((yt = {}),
                    (yt[C.a] = "+=" + at),
                    It && (yt[C.p] = "-=" + Z()),
                    ne.set([et, gt], yt)),
                  p)
                )
                  (yt = Or(p)),
                    (ts = C === Zt),
                    (hn = Z()),
                    (dn = parseFloat(hi(C.a)) + it),
                    !Tt &&
                      Me > 1 &&
                      ((Fi = (B ? St.scrollingElement || Vr : k).style),
                      (Fi = {
                        style: Fi,
                        value: Fi["overflow" + C.a.toUpperCase()],
                      }),
                      B &&
                        Or(pt)["overflow" + C.a.toUpperCase()] !== "scroll" &&
                        (Fi.style["overflow" + C.a.toUpperCase()] = "scroll")),
                    Cu(p, _t, yt),
                    (Ir = Ga(p)),
                    (Qt = Cn(p, !0)),
                    (kn = X && Qn(k, ts ? Ri : Zt)()),
                    d &&
                      ((mi = [d + C.os2, Je + it + fi]),
                      (mi.t = _t),
                      (wi = d === qt ? yu(p, C) + Je + it : 0),
                      wi && mi.push(C.d, wi + fi),
                      co(mi),
                      It &&
                        Ae.forEach(function ($r) {
                          $r.pin === It &&
                            $r.vars.pinSpacing !== !1 &&
                            ($r._subPinOffset = !0);
                        }),
                      X && Z(vt)),
                    X &&
                      ((Xt = {
                        top: Qt.top + (ts ? hn - ie : kn) + fi,
                        left: Qt.left + (ts ? kn : hn - ie) + fi,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (Xt[bs] = Xt["max" + lo] = Math.ceil(Qt.width) + fi),
                      (Xt[Ds] = Xt["max" + vu] = Math.ceil(Qt.height) + fi),
                      (Xt[Lr] =
                        Xt[Lr + Xo] =
                        Xt[Lr + qo] =
                        Xt[Lr + Go] =
                        Xt[Lr + Ho] =
                          "0"),
                      (Xt[qt] = yt[qt]),
                      (Xt[qt + Xo] = yt[qt + Xo]),
                      (Xt[qt + qo] = yt[qt + qo]),
                      (Xt[qt + Go] = yt[qt + Go]),
                      (Xt[qt + Ho] = yt[qt + Ho]),
                      (st = Ah(Hi, Xt, D)),
                      qi && Z(0)),
                    r
                      ? ((is = r._initted),
                        cu(1),
                        r.render(r.duration(), !0, !0),
                        (Et = hi(C.a) - dn + Je + it),
                        (Xi = Math.abs(Je - Et) > 1),
                        X && Xi && st.splice(st.length - 2, 2),
                        r.render(0, !0, !0),
                        is || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        cu(0))
                      : (Et = Je),
                    Fi &&
                      (Fi.value
                        ? (Fi.style["overflow" + C.a.toUpperCase()] = Fi.value)
                        : Fi.style.removeProperty("overflow-" + C.a));
                else if (m && Z() && !T)
                  for (Qt = m.parentNode; Qt && Qt !== pt; )
                    Qt._pinOffset &&
                      ((ie -= Qt._pinOffset), (Me -= Qt._pinOffset)),
                      (Qt = Qt.parentNode);
                jr &&
                  jr.forEach(function ($r) {
                    return $r.revert(!1, !0);
                  }),
                  (M.start = ie),
                  (M.end = Me),
                  (me = Ve = qi ? vt : Z()),
                  !T && !qi && (me < vt && Z(vt), (M.scroll.rec = 0)),
                  M.revert(!1, !0),
                  (Y = $i()),
                  Wi && ((Se = -1), Wi.restart(!0)),
                  (Mi = 0),
                  r &&
                    R &&
                    (r._initted || br) &&
                    r.progress() !== br &&
                    r.progress(br || 0, !0).render(r.time(), !0, !0),
                  (gi || K !== M.progress || T) &&
                    (r &&
                      !R &&
                      r.totalProgress(
                        T && ie < -0.001 && !K
                          ? ne.utils.normalize(ie, Me, 0)
                          : K,
                        !0
                      ),
                    (M.progress = gi || (me - ie) / Je === K ? 0 : K)),
                  p && d && (_t._pinOffset = Math.round(M.progress * Et)),
                  Le && Le.invalidate(),
                  isNaN(ft) ||
                    ((ft -= ne.getProperty(W, C.p)),
                    (_i -= ne.getProperty(wt, C.p)),
                    Va(W, C, ft),
                    Va(et, C, ft - (_e || 0)),
                    Va(wt, C, _i),
                    Va(gt, C, _i - (_e || 0))),
                  gi && !qi && M.update(),
                  c && !qi && !tt && ((tt = !0), c(M), (tt = !1));
              }
            }),
            (M.getVelocity = function () {
              return ((Z() - Ve) / ($i() - Pa)) * 1e3 || 0;
            }),
            (M.endAnimation = function () {
              Yo(M.callbackAnimation),
                r &&
                  (Le
                    ? Le.progress(1)
                    : r.paused()
                    ? R || Yo(r, M.direction < 0, 1)
                    : Yo(r, r.reversed()));
            }),
            (M.labelToScroll = function (ee) {
              return (
                (r &&
                  r.labels &&
                  (ie || M.refresh() || ie) +
                    (r.labels[ee] / r.duration()) * Je) ||
                0
              );
            }),
            (M.getTrailing = function (ee) {
              var Oe = Ae.indexOf(M),
                fe =
                  M.direction > 0
                    ? Ae.slice(0, Oe).reverse()
                    : Ae.slice(Oe + 1);
              return (
                gr(ee)
                  ? fe.filter(function (_e) {
                      return _e.vars.preventOverlaps === ee;
                    })
                  : fe
              ).filter(function (_e) {
                return M.direction > 0 ? _e.end <= ie : _e.start >= Me;
              });
            }),
            (M.update = function (ee, Oe, fe) {
              if (!(T && !fe && !ee)) {
                var _e = qi === !0 ? vt : M.scroll(),
                  zt = ee ? 0 : (_e - ie) / Je,
                  Be = zt < 0 ? 0 : zt > 1 ? 1 : zt || 0,
                  Tt = M.progress,
                  gi,
                  at,
                  it,
                  Ee,
                  lt,
                  rt,
                  It,
                  ki;
                if (
                  (Oe &&
                    ((Ve = me),
                    (me = T ? Z() : _e),
                    b && ((Br = Gi), (Gi = r && !R ? r.totalProgress() : Be))),
                  g &&
                    !Be &&
                    p &&
                    !Mi &&
                    !La &&
                    Fr &&
                    ie < _e + ((_e - Ve) / ($i() - Pa)) * g &&
                    (Be = 1e-4),
                  Be !== Tt && M.enabled)
                ) {
                  if (
                    ((gi = M.isActive = !!Be && Be < 1),
                    (at = !!Tt && Tt < 1),
                    (rt = gi !== at),
                    (lt = rt || !!Be != !!Tt),
                    (M.direction = Be > Tt ? 1 : -1),
                    (M.progress = Be),
                    lt &&
                      !Mi &&
                      ((it = Be && !Tt ? 0 : Be === 1 ? 1 : Tt === 1 ? 2 : 3),
                      R &&
                        ((Ee =
                          (!rt && z[it + 1] !== "none" && z[it + 1]) || z[it]),
                        (ki =
                          r &&
                          (Ee === "complete" || Ee === "reset" || Ee in r)))),
                    A &&
                      (rt || ki) &&
                      (ki || h || !r) &&
                      (Yi(A)
                        ? A(M)
                        : M.getTrailing(A).forEach(function (hn) {
                            return hn.endAnimation();
                          })),
                    R ||
                      (Le && !Mi && !La
                        ? (Le._dp._time - Le._start !== Le._time &&
                            Le.render(Le._dp._time - Le._start),
                          Le.resetTo
                            ? Le.resetTo(
                                "totalProgress",
                                Be,
                                r._tTime / r._tDur
                              )
                            : ((Le.vars.totalProgress = Be),
                              Le.invalidate().restart()))
                        : r && r.totalProgress(Be, !!(Mi && (Y || ee)))),
                    p)
                  ) {
                    if ((ee && d && (_t.style[d + C.os2] = yr), !X))
                      Ot($o(dn + Et * Be));
                    else if (lt) {
                      if (
                        ((It =
                          !ee && Be > Tt && Me + 1 > _e && _e + 1 >= Tn(k, C)),
                        D)
                      )
                        if (!ee && (gi || It)) {
                          var wi = Cn(p, !0),
                            yt = _e - ie;
                          ef(
                            p,
                            pt,
                            wi.top + (C === Zt ? yt : 0) + fi,
                            wi.left + (C === Zt ? 0 : yt) + fi
                          );
                        } else ef(p, _t);
                      co(gi || It ? st : Ir),
                        (Xi && Be < 1 && gi) ||
                          Ot(dn + (Be === 1 && !It ? Et : 0));
                    }
                  }
                  b && !Q.tween && !Mi && !La && Wi.restart(!0),
                    a &&
                      (rt || (w && Be && (Be < 1 || !hu))) &&
                      Ma(a.targets).forEach(function (hn) {
                        return hn.classList[gi || w ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !R && !ee && o(M),
                    lt && !Mi
                      ? (R &&
                          (ki &&
                            (Ee === "complete"
                              ? r.pause().totalProgress(1)
                              : Ee === "reset"
                              ? r.restart(!0).pause()
                              : Ee === "restart"
                              ? r.restart(!0)
                              : r[Ee]()),
                          o && o(M)),
                        (rt || !hu) &&
                          (u && rt && gu(M, u),
                          V[it] && gu(M, V[it]),
                          w && (Be === 1 ? M.kill(!1, 1) : (V[it] = 0)),
                          rt ||
                            ((it = Be === 1 ? 1 : 3), V[it] && gu(M, V[it]))),
                        P &&
                          !gi &&
                          Math.abs(M.getVelocity()) > (za(P) ? P : 2500) &&
                          (Yo(M.callbackAnimation),
                          Le
                            ? Le.progress(1)
                            : Yo(r, Ee === "reverse" ? 1 : !Be, 1)))
                      : R && o && !Mi && o(M);
                }
                if (pn) {
                  var Qt = T
                    ? (_e / T.duration()) * (T._caScrollDist || 0)
                    : _e;
                  fn(Qt + (W._isFlipped ? 1 : 0)), pn(Qt);
                }
                Pn && Pn((-_e / T.duration()) * (T._caScrollDist || 0));
              }
            }),
            (M.enable = function (ee, Oe) {
              M.enabled ||
                ((M.enabled = !0),
                ri(k, "resize", Vo),
                B || ri(k, "scroll", uo),
                re && ri(n, "refreshInit", re),
                ee !== !1 && ((M.progress = K = 0), (me = Ve = Se = Z())),
                Oe !== !1 && M.refresh());
            }),
            (M.getTween = function (ee) {
              return ee && Q ? Q.tween : Le;
            }),
            (M.setPositions = function (ee, Oe, fe, _e) {
              if (T) {
                var zt = T.scrollTrigger,
                  Be = T.duration(),
                  Tt = zt.end - zt.start;
                (ee = zt.start + (Tt * ee) / Be),
                  (Oe = zt.start + (Tt * Oe) / Be);
              }
              M.refresh(
                !1,
                !1,
                {
                  start: zd(ee, fe && !!M._startClamp),
                  end: zd(Oe, fe && !!M._endClamp),
                },
                _e
              ),
                M.update();
            }),
            (M.adjustPinSpacing = function (ee) {
              if (mi && ee) {
                var Oe = mi.indexOf(C.d) + 1;
                (mi[Oe] = parseFloat(mi[Oe]) + ee + fi),
                  (mi[1] = parseFloat(mi[1]) + ee + fi),
                  co(mi);
              }
            }),
            (M.disable = function (ee, Oe) {
              if (
                M.enabled &&
                (ee !== !1 && M.revert(!0, !0),
                (M.enabled = M.isActive = !1),
                Oe || (Le && Le.pause()),
                (vt = 0),
                Ce && (Ce.uncache = 1),
                re && ni(n, "refreshInit", re),
                Wi && (Wi.pause(), Q.tween && Q.tween.kill() && (Q.tween = 0)),
                !B)
              ) {
                for (var fe = Ae.length; fe--; )
                  if (Ae[fe].scroller === k && Ae[fe] !== M) return;
                ni(k, "resize", Vo), B || ni(k, "scroll", uo);
              }
            }),
            (M.kill = function (ee, Oe) {
              M.disable(ee, Oe), Le && !Oe && Le.kill(), l && delete Du[l];
              var fe = Ae.indexOf(M);
              fe >= 0 && Ae.splice(fe, 1),
                fe === Ni && Ha > 0 && Ni--,
                (fe = 0),
                Ae.forEach(function (_e) {
                  return _e.scroller === M.scroller && (fe = 1);
                }),
                fe || qi || (M.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  ee && r.revert({ kill: !1 }),
                  Oe || r.kill()),
                et &&
                  [et, gt, W, wt].forEach(function (_e) {
                    return _e.parentNode && _e.parentNode.removeChild(_e);
                  }),
                Uo === M && (Uo = 0),
                p &&
                  (Ce && (Ce.uncache = 1),
                  (fe = 0),
                  Ae.forEach(function (_e) {
                    return _e.pin === p && fe++;
                  }),
                  fe || (Ce.spacer = 0)),
                i.onKill && i.onKill(M);
            }),
            Ae.push(M),
            M.enable(!1, !1),
            Nr && Nr(M),
            r && r.add && !Je)
          ) {
            var Xe = M.update;
            (M.update = function () {
              (M.update = Xe), ie || Me || M.refresh();
            }),
              ne.delayedCall(0.01, M.update),
              (Je = 0.01),
              (ie = Me = 0);
          } else M.refresh();
          p && Eh();
        }),
        (n.register = function (i) {
          return (
            ro ||
              ((ne = i || Nd()),
              Rd() && window.document && n.enable(),
              (ro = No)),
            ro
          );
        }),
        (n.defaults = function (i) {
          if (i) for (var r in i) Ra[r] = i[r];
          return Ra;
        }),
        (n.disable = function (i, r) {
          (No = 0),
            Ae.forEach(function (o) {
              return o[r ? "kill" : "disable"](i);
            }),
            ni(Ne, "wheel", uo),
            ni(St, "scroll", uo),
            clearInterval(ka),
            ni(St, "touchcancel", un),
            ni(pt, "touchstart", un),
            Ia(ni, St, "pointerdown,touchstart,mousedown", Id),
            Ia(ni, St, "pointerup,touchend,mouseup", Bd),
            Aa.kill(),
            Oa(ni);
          for (var s = 0; s < ke.length; s += 3)
            Ba(ni, ke[s], ke[s + 1]), Ba(ni, ke[s], ke[s + 2]);
        }),
        (n.enable = function () {
          if (
            ((Ne = window),
            (St = document),
            (Vr = St.documentElement),
            (pt = St.body),
            ne &&
              ((Ma = ne.utils.toArray),
              (no = ne.utils.clamp),
              (du = ne.core.context || un),
              (cu = ne.core.suppressOverwrites || un),
              (fu = Ne.history.scrollRestoration || "auto"),
              (Eu = Ne.pageYOffset),
              ne.core.globals("ScrollTrigger", n),
              pt))
          ) {
            (No = 1),
              (oo = document.createElement("div")),
              (oo.style.height = "100vh"),
              (oo.style.position = "absolute"),
              Kd(),
              _h(),
              Yt.register(ne),
              (n.isTouch = Yt.isTouch),
              (Kn =
                Yt.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              ri(Ne, "wheel", uo),
              (Td = [Ne, St, Vr, pt]),
              ne.matchMedia
                ? ((n.matchMedia = function (l) {
                    var u = ne.matchMedia(),
                      c;
                    for (c in l) u.add(c, l[c]);
                    return u;
                  }),
                  ne.addEventListener("matchMediaInit", function () {
                    return Su();
                  }),
                  ne.addEventListener("matchMediaRevert", function () {
                    return jd();
                  }),
                  ne.addEventListener("matchMedia", function () {
                    Ts(0, 1), Ss("matchMedia");
                  }),
                  ne.matchMedia("(orientation: portrait)", function () {
                    return xu(), xu;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              xu(),
              ri(St, "scroll", uo);
            var i = pt.style,
              r = i.borderTopStyle,
              s = ne.core.Animation.prototype,
              o,
              a;
            for (
              s.revert ||
                Object.defineProperty(s, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                o = Cn(pt),
                Zt.m = Math.round(o.top + Zt.sc()) || 0,
                Ri.m = Math.round(o.left + Ri.sc()) || 0,
                r
                  ? (i.borderTopStyle = r)
                  : i.removeProperty("border-top-style"),
                ka = setInterval(Vd, 250),
                ne.delayedCall(0.5, function () {
                  return (La = 0);
                }),
                ri(St, "touchcancel", un),
                ri(pt, "touchstart", un),
                Ia(ri, St, "pointerdown,touchstart,mousedown", Id),
                Ia(ri, St, "pointerup,touchend,mouseup", Bd),
                uu = ne.utils.checkPrefix("transform"),
                Xa.push(uu),
                ro = $i(),
                Aa = ne.delayedCall(0.2, Ts).pause(),
                so = [
                  St,
                  "visibilitychange",
                  function () {
                    var l = Ne.innerWidth,
                      u = Ne.innerHeight;
                    St.hidden
                      ? ((Cd = l), (Ad = u))
                      : (Cd !== l || Ad !== u) && Vo();
                  },
                  St,
                  "DOMContentLoaded",
                  Ts,
                  Ne,
                  "load",
                  Ts,
                  Ne,
                  "resize",
                  Vo,
                ],
                Oa(ri),
                Ae.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                a = 0;
              a < ke.length;
              a += 3
            )
              Ba(ni, ke[a], ke[a + 1]), Ba(ni, ke[a], ke[a + 2]);
          }
        }),
        (n.config = function (i) {
          "limitCallbacks" in i && (hu = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(ka)) || ((ka = r) && setInterval(Vd, r)),
            "ignoreMobileResize" in i &&
              (kd = n.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (Oa(ni) || Oa(ri, i.autoRefreshEvents || "none"),
              (Pd = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (n.scrollerProxy = function (i, r) {
          var s = sr(i),
            o = ke.indexOf(s),
            a = vs(s);
          ~o && ke.splice(o, a ? 6 : 2),
            r && (a ? ln.unshift(Ne, r, pt, r, Vr, r) : ln.unshift(s, r));
        }),
        (n.clearMatchMedia = function (i) {
          Ae.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (i, r, s) {
          var o = (gr(i) ? sr(i) : i).getBoundingClientRect(),
            a = o[s ? bs : Ds] * r || 0;
          return s
            ? o.right - a > 0 && o.left + a < Ne.innerWidth
            : o.bottom - a > 0 && o.top + a < Ne.innerHeight;
        }),
        (n.positionInViewport = function (i, r, s) {
          gr(i) && (i = sr(i));
          var o = i.getBoundingClientRect(),
            a = o[s ? bs : Ds],
            l =
              r == null
                ? a / 2
                : r in Na
                ? Na[r] * a
                : ~r.indexOf("%")
                ? (parseFloat(r) * a) / 100
                : parseFloat(r) || 0;
          return s
            ? (o.left + l) / Ne.innerWidth
            : (o.top + l) / Ne.innerHeight;
        }),
        (n.killAll = function (i) {
          if (
            (Ae.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            i !== !0)
          ) {
            var r = xs.killAll || [];
            (xs = {}),
              r.forEach(function (s) {
                return s();
              });
          }
        }),
        n
      );
    })();
  (he.version = "3.12.2"),
    (he.saveStyles = function (n) {
      return n
        ? Ma(n).forEach(function (e) {
            if (e && e.style) {
              var t = wr.indexOf(e);
              t >= 0 && wr.splice(t, 5),
                wr.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  ne.core.getCache(e),
                  du()
                );
            }
          })
        : wr;
    }),
    (he.revert = function (n, e) {
      return Su(!n, e);
    }),
    (he.create = function (n, e) {
      return new he(n, e);
    }),
    (he.refresh = function (n) {
      return n ? Vo() : (ro || he.register()) && Ts(!0);
    }),
    (he.update = function (n) {
      return ++ke.cache && An(n === !0 ? 2 : 0);
    }),
    (he.clearScrollMemory = Zd),
    (he.maxScroll = function (n, e) {
      return Tn(n, e ? Ri : Zt);
    }),
    (he.getScrollFunc = function (n, e) {
      return Qn(sr(n), e ? Ri : Zt);
    }),
    (he.getById = function (n) {
      return Du[n];
    }),
    (he.getAll = function () {
      return Ae.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
      });
    }),
    (he.isScrolling = function () {
      return !!Fr;
    }),
    (he.snapDirectional = bu),
    (he.addEventListener = function (n, e) {
      var t = xs[n] || (xs[n] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    (he.removeEventListener = function (n, e) {
      var t = xs[n],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    (he.batch = function (n, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        s = e.batchMax || 1e9,
        o = function (u, c) {
          var h = [],
            m = [],
            p = ne
              .delayedCall(r, function () {
                c(h, m), (h = []), (m = []);
              })
              .pause();
          return function (d) {
            h.length || p.restart(!0),
              h.push(d.trigger),
              m.push(d),
              s <= h.length && p.progress(1);
          };
        },
        a;
      for (a in e)
        i[a] =
          a.substr(0, 2) === "on" && Yi(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        Yi(s) &&
          ((s = s()),
          ri(he, "refresh", function () {
            return (s = e.batchMax());
          })),
        Ma(n).forEach(function (l) {
          var u = {};
          for (a in i) u[a] = i[a];
          (u.trigger = l), t.push(he.create(u));
        }),
        t
      );
    });
  var nf = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    Au = function n(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (Yt.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Vr && n(pt, t);
    },
    Ua = { auto: 1, scroll: 1 },
    Ph = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = s._gsap || ne.core.getCache(s),
        a = $i(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== pt &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(Ua[(l = Or(s)).overflowY] || Ua[l.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== i &&
          !vs(s) &&
          (Ua[(l = Or(s)).overflowY] || Ua[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    sf = function (e, t, i, r) {
      return Yt.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && Ph),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && ri(St, Yt.eventTypes[0], af, !1, !0);
        },
        onDisable: function () {
          return ni(St, Yt.eventTypes[0], af, !0);
        },
      });
    },
    kh = /(input|label|select|textarea)/i,
    of,
    af = function (e) {
      var t = kh.test(e.target.tagName);
      (t || of) && ((e._gsapAllow = !0), (of = t));
    },
    Fh = function (e) {
      ys(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t = e,
        i = t.normalizeScrollX,
        r = t.momentum,
        s = t.allowNestedScroll,
        o = t.onRelease,
        a,
        l,
        u = sr(e.target) || Vr,
        c = ne.core.globals().ScrollSmoother,
        h = c && c.get(),
        m =
          Kn &&
          ((e.content && sr(e.content)) ||
            (h && e.content !== !1 && !h.smooth() && h.content())),
        p = Qn(u, Zt),
        d = Qn(u, Ri),
        f = 1,
        g =
          (Yt.isTouch && Ne.visualViewport
            ? Ne.visualViewport.scale * Ne.visualViewport.width
            : Ne.outerWidth) / Ne.innerWidth,
        v = 0,
        _ = Yi(r)
          ? function () {
              return r(a);
            }
          : function () {
              return r || 2.8;
            },
        w,
        b,
        D = sf(u, e.type, !0, s),
        E = function () {
          return (b = !1);
        },
        T = un,
        P = un,
        A = function () {
          (l = Tn(u, Zt)),
            (P = no(Kn ? 1 : 0, l)),
            i && (T = no(0, Tn(u, Ri))),
            (w = Es);
        },
        C = function () {
          (m._gsap.y = $o(parseFloat(m._gsap.y) + p.offset) + "px"),
            (m.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(m._gsap.y) +
              ", 0, 1)"),
            (p.offset = p.cacheID = 0);
        },
        R = function () {
          if (b) {
            requestAnimationFrame(E);
            var I = $o(a.deltaY / 2),
              O = P(p.v - I);
            if (m && O !== p.v + p.offset) {
              p.offset = O - p.v;
              var M = $o((parseFloat(m && m._gsap.y) || 0) - p.offset);
              (m.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                M +
                ", 0, 1)"),
                (m._gsap.y = M + "px"),
                (p.cacheID = ke.cache),
                An();
            }
            return !0;
          }
          p.offset && C(), (b = !0);
        },
        k,
        L,
        B,
        X,
        V = function () {
          A(),
            k.isActive() &&
              k.vars.scrollY > l &&
              (p() > l ? k.progress(1) && p(l) : k.resetTo("scrollY", l));
        };
      return (
        m && ne.set(m, { y: "+=0" }),
        (e.ignoreCheck = function (z) {
          return (
            (Kn && z.type === "touchmove" && R()) ||
            (f > 1.05 && z.type !== "touchstart") ||
            a.isGesturing ||
            (z.touches && z.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          b = !1;
          var z = f;
          (f = $o(((Ne.visualViewport && Ne.visualViewport.scale) || 1) / g)),
            k.pause(),
            z !== f && Au(u, f > 1.01 ? !0 : i ? !1 : "x"),
            (L = d()),
            (B = p()),
            A(),
            (w = Es);
        }),
        (e.onRelease = e.onGestureStart =
          function (z, I) {
            if ((p.offset && C(), !I)) X.restart(!0);
            else {
              ke.cache++;
              var O = _(),
                M,
                re;
              i &&
                ((M = d()),
                (re = M + (O * 0.05 * -z.velocityX) / 0.227),
                (O *= nf(d, M, re, Tn(u, Ri))),
                (k.vars.scrollX = T(re))),
                (M = p()),
                (re = M + (O * 0.05 * -z.velocityY) / 0.227),
                (O *= nf(p, M, re, Tn(u, Zt))),
                (k.vars.scrollY = P(re)),
                k.invalidate().duration(O).play(0.01),
                ((Kn && k.vars.scrollY >= l) || M >= l - 1) &&
                  ne.to({}, { onUpdate: V, duration: O });
            }
            o && o(z);
          }),
        (e.onWheel = function () {
          k._ts && k.pause(), $i() - v > 1e3 && ((w = 0), (v = $i()));
        }),
        (e.onChange = function (z, I, O, M, re) {
          if (
            (Es !== w && A(),
            I && i && d(T(M[2] === I ? L + (z.startX - z.x) : d() + I - M[1])),
            O)
          ) {
            p.offset && C();
            var we = re[2] === O,
              Ke = we ? B + z.startY - z.y : p() + O - re[1],
              Se = P(Ke);
            we && Ke !== Se && (B += Se - Ke), p(Se);
          }
          (O || I) && An();
        }),
        (e.onEnable = function () {
          Au(u, i ? !1 : "x"),
            he.addEventListener("refresh", V),
            ri(Ne, "resize", V),
            p.smooth &&
              ((p.target.style.scrollBehavior = "auto"),
              (p.smooth = d.smooth = !1)),
            D.enable();
        }),
        (e.onDisable = function () {
          Au(u, !0),
            ni(Ne, "resize", V),
            he.removeEventListener("refresh", V),
            D.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new Yt(e)),
        (a.iOS = Kn),
        Kn && !p() && p(1),
        Kn && ne.ticker.add(un),
        (X = a._dc),
        (k = ne.to(a, {
          ease: "power4",
          paused: !0,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: tf(p, p(), function () {
              return k.pause();
            }),
          },
          onUpdate: An,
          onComplete: X.vars.onComplete,
        })),
        a
      );
    };
  (he.sort = function (n) {
    return Ae.sort(
      n ||
        function (e, t) {
          return (
            (e.vars.refreshPriority || 0) * -1e6 +
            e.start -
            (t.start + (t.vars.refreshPriority || 0) * -1e6)
          );
        }
    );
  }),
    (he.observe = function (n) {
      return new Yt(n);
    }),
    (he.normalizeScroll = function (n) {
      if (typeof n > "u") return mr;
      if (n === !0 && mr) return mr.enable();
      if (n === !1) return mr && mr.kill();
      var e = n instanceof Yt ? n : Fh(n);
      return (
        mr && mr.target === e.target && mr.kill(), vs(e.target) && (mr = e), e
      );
    }),
    (he.core = {
      _getVelocityProp: lu,
      _inputObserver: sf,
      _scrollers: ke,
      _proxies: ln,
      bridge: {
        ss: function () {
          Fr || Ss("scrollStart"), (Fr = $i());
        },
        ref: function () {
          return Mi;
        },
      },
    }),
    Nd() && ne.registerPlugin(he);
  function Lh() {
    const n = [480, 992];
    let e = window.innerWidth;
    function t(r, s) {
      let o;
      return function (...l) {
        const u = () => {
          clearTimeout(o), r(...l);
        };
        clearTimeout(o), (o = setTimeout(u, s));
      };
    }
    const i = t(() => {
      const r = window.innerWidth;
      n.some((o) => (e < o && r >= o) || (e >= o && r < o)) &&
        window.location.reload(),
        (e = r);
    }, 250);
    return (
      window.addEventListener("resize", i),
      () => {
        window.removeEventListener("resize", i);
      }
    );
  }
  function Oh() {
    const n = $.matchMedia();
    n.add("(min-width: 992px)", () => {
      const e = document.querySelectorAll(".header__toggle-wrapper"),
        t = document.querySelector(".header__col--center"),
        i = document.querySelector(".header__wrapper"),
        r = document.querySelectorAll(".button--header-desktop");
      if (!i || !t || e.length === 0) return () => {};
      $.set(".header__col--center", { clearProps: "all" }),
        $.set(".header__toggle-content", {
          clearProps: "all",
          display: "none",
        }),
        r.forEach((o) => {
          const a = o.querySelector(".button__text-wrapper"),
            l = o.querySelector(".button__text");
          if (a && l) {
            const u = l.cloneNode(!0);
            u.classList.add("button__text--duplicate"),
              a.appendChild(u),
              $.set(a, {
                position: "relative",
                overflow: "hidden",
                height: l.offsetHeight,
              }),
              $.set(l, { position: "relative", top: 0, y: 0 }),
              $.set(u, { position: "absolute", top: "100%", left: 0, y: 0 });
            const c = $.timeline({ paused: !0 });
            c
              .to(l, { y: "-100%", duration: 0.4, ease: "power3.inOut" }, 0)
              .to(u, { y: "-100%", duration: 0.4, ease: "power3.inOut" }, 0)
              .to(
                o,
                {
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  duration: 0.3,
                  ease: "power4.inOut",
                },
                0
              ),
              o.addEventListener("mouseenter", () => c.play()),
              o.addEventListener("mouseleave", () => c.reverse());
          }
        });
      const s = () => {
        document.querySelectorAll(".header__toggle-content").forEach((o) => {
          (o.style.opacity = "0"), (o.style.pointerEvents = "none");
        }),
          document.querySelectorAll(".header__nav-link").forEach((o) => {
            (o.style.backgroundColor = ""), (o.style.color = "");
          });
      };
      return (
        e.forEach((o) => {
          o.addEventListener("mouseenter", () => {
            s();
            const a = o.querySelector(".header__toggle-content"),
              l = o.querySelector(".header__nav-link");
            a && ((a.style.opacity = "1"), (a.style.pointerEvents = "auto")),
              l &&
                ((l.style.backgroundColor = "#FFFFFF"),
                (l.style.color = "#000000"));
          });
        }),
        i.addEventListener("mouseleave", () => {
          s();
        }),
        () => {
          e.forEach((o) => {
            o.removeEventListener("mouseenter", () => {});
          }),
            i.removeEventListener("mouseleave", () => {}),
            document.querySelectorAll(".header__nav-link").forEach((o) => {
              (o.style.backgroundColor = ""), (o.style.color = "");
            });
        }
      );
    }),
      n.add("(max-width: 991px)", () => {
        let e = !1;
        const t = document.querySelector(".header__button"),
          i = document.querySelector(".header__col--center"),
          r = document.querySelector(".header__wrapper"),
          s = document.querySelectorAll(".header__button-line"),
          o = document.querySelectorAll(".header__toggle-wrapper");
        if (!t || !i || !r || s.length !== 3 || o.length === 0)
          return (
            console.warn("Critical header elements missing for mobile layout"),
            () => {}
          );
        const a = $.timeline({
          paused: !0,
          defaults: { duration: 0.6, ease: "expo.inOut" },
        });
        $.set(i, { yPercent: -100, display: "none" }),
          $.set(".header__toggle-content", { height: 0 }),
          a
            .to(i, { display: "block", yPercent: 0 })
            .to(s[0], { rotate: 45, y: 8 }, 0)
            .to(s[2], { rotate: -45, y: -3.5 }, 0)
            .to(s[1], { opacity: 0 }, 0);
        const l = () => {
            (e = !e),
              e
                ? (r.classList.add("header__wrapper--opened"), a.play())
                : (r.classList.remove("header__wrapper--opened"),
                  a.reverse(),
                  document
                    .querySelectorAll(".header__toggle-content")
                    .forEach((c) => {
                      const h = c.closest(".header__toggle-wrapper"),
                        m =
                          h == null
                            ? void 0
                            : h.querySelector(".header__nav-icon");
                      $.to(c, { height: 0, duration: 1, ease: "power3.inOut" }),
                        $.to(h, {
                          backgroundColor: "#f1f1f1",
                          duration: 1,
                          ease: "power3.inOut",
                        }),
                        m &&
                          $.to(m, {
                            rotation: 0,
                            duration: 1,
                            ease: "power3.inOut",
                          });
                    }));
          },
          u = (c) => {
            const h = c.currentTarget,
              m = h.querySelector(".header__toggle-content"),
              p = h.querySelector(".header__nav-icon");
            if (!m) return;
            const d = $.timeline({
              defaults: { duration: 0.6, ease: "power2.inOut" },
            });
            m.style.height === "0px" || !m.style.height
              ? (d
                  .to(h, { backgroundColor: "#FFFFFF" })
                  .to(m, { height: "auto" }, 0),
                p && d.to(p, { rotation: 180 }, 0))
              : (d
                  .to(h, { backgroundColor: "#f1f1f1" })
                  .to(m, { height: 0 }, 0),
                p && d.to(p, { rotation: 0 }, 0));
          };
        return (
          o.forEach((c) => {
            c.querySelector(".header__toggle-content") &&
              c.addEventListener("click", u);
          }),
          t.addEventListener("click", l),
          () => {
            t.removeEventListener("click", l),
              o.forEach((c) => {
                c.removeEventListener("click", u);
              }),
              $.set([i, ...s, ".header__toggle-content"], {
                clearProps: "all",
              }),
              r.classList.remove("header__wrapper--opened"),
              (e = !1);
          }
        );
      });
  }
  function zh() {
    $.matchMedia().add("(min-width: 992px)", () => {
      const t = document.querySelector(".footer-cursor__cursor"),
        i = document.querySelector(".footer__row");
      if (t && i) {
        i.addEventListener("click", () => {
          t.click();
        });
        const r = $.timeline({ paused: !0 }).to(t, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          }),
          s = $.quickTo(t, "x", { duration: 0.75, ease: "power2.out" }),
          o = $.quickTo(t, "y", { duration: 0.75, ease: "power2.out" });
        i.addEventListener("mouseenter", () => {
          r.play();
        }),
          i.addEventListener("mouseleave", () => {
            r.reverse();
          }),
          window.addEventListener("mousemove", (a) => {
            s(a.clientX), o(a.clientY);
          });
      }
    });
    const e = document.querySelectorAll(".c-team__carousel");
    e.length &&
      e.forEach((t) => {
        const i = t.querySelectorAll(".c-team__carousel-cl-item");
        i.length > 0 &&
          i.forEach((r, s) => {
            r &&
              $.timeline({
                scrollTrigger: {
                  trigger: r,
                  start: "bottom bottom",
                  toggleActions: "play none none reverse",
                },
              }).fromTo(
                r,
                { xPercent: 200, opacity: 0 },
                {
                  xPercent: -30 * s,
                  opacity: 1,
                  ease: "power4.inOut",
                  delay: 0.05 * s,
                  duration: 1.4,
                  rotate: (Math.random() - 0.5) * 10,
                }
              );
          });
      });
  }
  /*!
   * strings: 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Ih =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function lf(n) {
    var e = n.nodeType,
      t = "";
    if (e === 1 || e === 9 || e === 11) {
      if (typeof n.textContent == "string") return n.textContent;
      for (n = n.firstChild; n; n = n.nextSibling) t += lf(n);
    } else if (e === 3 || e === 4) return n.nodeValue;
    return t;
  }
  /*!
   * SplitText: 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var fo,
    Mu,
    uf,
    jo,
    cf,
    ja,
    Bh = /(?:\r|\n|\t\t)/g,
    Rh = /(?:\s\s+)/g,
    df = function (e) {
      (fo = document),
        (Mu = window),
        (jo =
          jo ||
          e ||
          Mu.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")),
        jo &&
          ((ja = jo.utils.toArray),
          (cf = jo.core.context || function () {}),
          (uf = 1));
    },
    ff = function (e) {
      return Mu.getComputedStyle(e);
    },
    Pu = function (e) {
      return e.position === "absolute" || e.absolute === !0;
    },
    Nh = function (e, t) {
      for (var i = t.length, r; --i > -1; )
        if (((r = t[i]), e.substr(0, r.length) === r)) return r.length;
    },
    $h = " style='position:relative;display:inline-block;'",
    pf = function (e, t) {
      e === void 0 && (e = "");
      var i = ~e.indexOf("++"),
        r = 1;
      return (
        i && (e = e.split("++").join("")),
        function () {
          return (
            "<" + t + $h + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
          );
        }
      );
    },
    hf = function n(e, t, i) {
      var r = e.nodeType;
      if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling) n(e, t, i);
      else (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(t).join(i));
    },
    ku = function (e, t) {
      for (var i = t.length; --i > -1; ) e.push(t[i]);
    },
    mf = function (e, t, i) {
      for (var r; e && e !== t; ) {
        if (((r = e._next || e.nextSibling), r))
          return r.textContent.charAt(0) === i;
        e = e.parentNode || e._parent;
      }
    },
    Yh = function n(e) {
      var t = ja(e.childNodes),
        i = t.length,
        r,
        s;
      for (r = 0; r < i; r++)
        (s = t[r]),
          s._isSplit
            ? n(s)
            : r && s.previousSibling && s.previousSibling.nodeType === 3
            ? ((s.previousSibling.nodeValue +=
                s.nodeType === 3 ? s.nodeValue : s.firstChild.nodeValue),
              e.removeChild(s))
            : s.nodeType !== 3 &&
              (e.insertBefore(s.firstChild, s), e.removeChild(s));
    },
    cn = function (e, t) {
      return parseFloat(t[e]) || 0;
    },
    qh = function (e, t, i, r, s, o, a) {
      var l = ff(e),
        u = cn("paddingLeft", l),
        c = -999,
        h = cn("borderBottomWidth", l) + cn("borderTopWidth", l),
        m = cn("borderLeftWidth", l) + cn("borderRightWidth", l),
        p = cn("paddingTop", l) + cn("paddingBottom", l),
        d = cn("paddingLeft", l) + cn("paddingRight", l),
        f = cn("fontSize", l) * (t.lineThreshold || 0.2),
        g = l.textAlign,
        v = [],
        _ = [],
        w = [],
        b = t.wordDelimiter || " ",
        D = t.tag ? t.tag : t.span ? "span" : "div",
        E = t.type || t.split || "chars,words,lines",
        T = s && ~E.indexOf("lines") ? [] : null,
        P = ~E.indexOf("words"),
        A = ~E.indexOf("chars"),
        C = Pu(t),
        R = t.linesClass,
        k = ~(R || "").indexOf("++"),
        L = [],
        B = l.display === "flex",
        X = e.style.display,
        V,
        z,
        I,
        O,
        M,
        re,
        we,
        Ke,
        Se,
        Y,
        K,
        Z;
      for (
        k && (R = R.split("++").join("")),
          B && (e.style.display = "block"),
          z = e.getElementsByTagName("*"),
          I = z.length,
          M = [],
          V = 0;
        V < I;
        V++
      )
        M[V] = z[V];
      if (T || C)
        for (V = 0; V < I; V++)
          (O = M[V]),
            (re = O.parentNode === e),
            (re || C || (A && !P)) &&
              ((Z = O.offsetTop),
              T &&
                re &&
                Math.abs(Z - c) > f &&
                (O.nodeName !== "BR" || V === 0) &&
                ((we = []), T.push(we), (c = Z)),
              C &&
                ((O._x = O.offsetLeft),
                (O._y = Z),
                (O._w = O.offsetWidth),
                (O._h = O.offsetHeight)),
              T &&
                (((O._isSplit && re) ||
                  (!A && re) ||
                  (P && re) ||
                  (!P &&
                    O.parentNode.parentNode === e &&
                    !O.parentNode._isSplit)) &&
                  (we.push(O), (O._x -= u), mf(O, e, b) && (O._wordEnd = !0)),
                O.nodeName === "BR" &&
                  ((O.nextSibling && O.nextSibling.nodeName === "BR") ||
                    V === 0) &&
                  T.push([])));
      for (V = 0; V < I; V++) {
        if (((O = M[V]), (re = O.parentNode === e), O.nodeName === "BR")) {
          T || C
            ? (O.parentNode && O.parentNode.removeChild(O),
              M.splice(V--, 1),
              I--)
            : P || e.appendChild(O);
          continue;
        }
        if (
          (C &&
            ((Se = O.style),
            !P && !re && ((O._x += O.parentNode._x), (O._y += O.parentNode._y)),
            (Se.left = O._x + "px"),
            (Se.top = O._y + "px"),
            (Se.position = "absolute"),
            (Se.display = "block"),
            (Se.width = O._w + 1 + "px"),
            (Se.height = O._h + "px")),
          !P && A)
        )
          if (O._isSplit)
            for (
              O._next = z = O.nextSibling, O.parentNode.appendChild(O);
              z && z.nodeType === 3 && z.textContent === " ";

            )
              (O._next = z.nextSibling),
                O.parentNode.appendChild(z),
                (z = z.nextSibling);
          else
            O.parentNode._isSplit
              ? ((O._parent = O.parentNode),
                !O.previousSibling &&
                  O.firstChild &&
                  (O.firstChild._isFirst = !0),
                O.nextSibling &&
                  O.nextSibling.textContent === " " &&
                  !O.nextSibling.nextSibling &&
                  L.push(O.nextSibling),
                (O._next =
                  O.nextSibling && O.nextSibling._isFirst
                    ? null
                    : O.nextSibling),
                O.parentNode.removeChild(O),
                M.splice(V--, 1),
                I--)
              : re ||
                ((Z = !O.nextSibling && mf(O.parentNode, e, b)),
                O.parentNode._parent && O.parentNode._parent.appendChild(O),
                Z && O.parentNode.appendChild(fo.createTextNode(" ")),
                D === "span" && (O.style.display = "inline"),
                v.push(O));
        else
          O.parentNode._isSplit && !O._isSplit && O.innerHTML !== ""
            ? _.push(O)
            : A &&
              !O._isSplit &&
              (D === "span" && (O.style.display = "inline"), v.push(O));
      }
      for (V = L.length; --V > -1; ) L[V].parentNode.removeChild(L[V]);
      if (T) {
        for (
          C &&
            ((Y = fo.createElement(D)),
            e.appendChild(Y),
            (K = Y.offsetWidth + "px"),
            (Z = Y.offsetParent === e ? 0 : e.offsetLeft),
            e.removeChild(Y)),
            Se = e.style.cssText,
            e.style.cssText = "display:none;";
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (Ke = b === " " && (!C || (!P && !A)), V = 0; V < T.length; V++) {
          for (
            we = T[V],
              Y = fo.createElement(D),
              Y.style.cssText =
                "display:block;text-align:" +
                g +
                ";position:" +
                (C ? "absolute;" : "relative;"),
              R && (Y.className = R + (k ? V + 1 : "")),
              w.push(Y),
              I = we.length,
              z = 0;
            z < I;
            z++
          )
            we[z].nodeName !== "BR" &&
              ((O = we[z]),
              Y.appendChild(O),
              Ke && O._wordEnd && Y.appendChild(fo.createTextNode(" ")),
              C &&
                (z === 0 &&
                  ((Y.style.top = O._y + "px"), (Y.style.left = u + Z + "px")),
                (O.style.top = "0px"),
                Z && (O.style.left = O._x - Z + "px")));
          I === 0
            ? (Y.innerHTML = "&nbsp;")
            : !P && !A && (Yh(Y), hf(Y, " ", " ")),
            C && ((Y.style.width = K), (Y.style.height = O._h + "px")),
            e.appendChild(Y);
        }
        e.style.cssText = Se;
      }
      C &&
        (a > e.clientHeight &&
          ((e.style.height = a - p + "px"),
          e.clientHeight < a && (e.style.height = a + h + "px")),
        o > e.clientWidth &&
          ((e.style.width = o - d + "px"),
          e.clientWidth < o && (e.style.width = o + m + "px"))),
        B && (X ? (e.style.display = X) : e.style.removeProperty("display")),
        ku(i, v),
        P && ku(r, _),
        ku(s, w);
    },
    Hh = function (e, t, i, r) {
      var s = t.tag ? t.tag : t.span ? "span" : "div",
        o = t.type || t.split || "chars,words,lines",
        a = ~o.indexOf("chars"),
        l = Pu(t),
        u = t.wordDelimiter || " ",
        c = u !== " " ? "" : l ? "&#173; " : " ",
        h = "</" + s + ">",
        m = 1,
        p = t.specialChars
          ? typeof t.specialChars == "function"
            ? t.specialChars
            : Nh
          : null,
        d,
        f,
        g,
        v,
        _,
        w,
        b,
        D,
        E = fo.createElement("div"),
        T = e.parentNode;
      for (
        T.insertBefore(E, e),
          E.textContent = e.nodeValue,
          T.removeChild(e),
          e = E,
          d = lf(e),
          b = d.indexOf("<") !== -1,
          t.reduceWhiteSpace !== !1 && (d = d.replace(Rh, " ").replace(Bh, "")),
          b && (d = d.split("<").join("{{LT}}")),
          _ = d.length,
          f = (d.charAt(0) === " " ? c : "") + i(),
          g = 0;
        g < _;
        g++
      )
        if (((w = d.charAt(g)), p && (D = p(d.substr(g), t.specialChars))))
          (w = d.substr(g, D || 1)),
            (f += a && w !== " " ? r() + w + "</" + s + ">" : w),
            (g += D - 1);
        else if (w === u && d.charAt(g - 1) !== u && g) {
          for (f += m ? h : "", m = 0; d.charAt(g + 1) === u; ) (f += c), g++;
          g === _ - 1
            ? (f += c)
            : d.charAt(g + 1) !== ")" && ((f += c + i()), (m = 1));
        } else
          w === "{" && d.substr(g, 6) === "{{LT}}"
            ? ((f += a ? r() + "{{LT}}</" + s + ">" : "{{LT}}"), (g += 5))
            : (w.charCodeAt(0) >= 55296 && w.charCodeAt(0) <= 56319) ||
              (d.charCodeAt(g + 1) >= 65024 && d.charCodeAt(g + 1) <= 65039)
            ? ((v = ((d.substr(g, 12).split(Ih) || [])[1] || "").length || 2),
              (f +=
                a && w !== " "
                  ? r() + d.substr(g, v) + "</" + s + ">"
                  : d.substr(g, v)),
              (g += v - 1))
            : (f += a && w !== " " ? r() + w + "</" + s + ">" : w);
      (e.outerHTML = f + (m ? h : "")), b && hf(T, "{{LT}}", "<");
    },
    Xh = function n(e, t, i, r) {
      var s = ja(e.childNodes),
        o = s.length,
        a = Pu(t),
        l,
        u;
      if (e.nodeType !== 3 || o > 1) {
        for (t.absolute = !1, l = 0; l < o; l++)
          (u = s[l]),
            (u._next = u._isFirst = u._parent = u._wordEnd = null),
            (u.nodeType !== 3 || /\S+/.test(u.nodeValue)) &&
              (a &&
                u.nodeType !== 3 &&
                ff(u).display === "inline" &&
                ((u.style.display = "inline-block"),
                (u.style.position = "relative")),
              (u._isSplit = !0),
              n(u, t, i, r));
        (t.absolute = a), (e._isSplit = !0);
        return;
      }
      Hh(e, t, i, r);
    },
    $e = (function () {
      function n(t, i) {
        uf || df(),
          (this.elements = ja(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = i || {}),
          cf(this),
          this.split(i);
      }
      var e = n.prototype;
      return (
        (e.split = function (i) {
          this.isSplit && this.revert(),
            (this.vars = i = i || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var r = this.elements.length,
              s = i.tag ? i.tag : i.span ? "span" : "div",
              o = pf(i.wordsClass, s),
              a = pf(i.charsClass, s),
              l,
              u,
              c;
            --r > -1;

          )
            (c = this.elements[r]),
              (this._originals[r] = c.innerHTML),
              (l = c.clientHeight),
              (u = c.clientWidth),
              Xh(c, i, o, a),
              qh(c, i, this.chars, this.words, this.lines, u, l);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (e.revert = function () {
          var i = this._originals;
          if (!i) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (r, s) {
              return (r.innerHTML = i[s]);
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (n.create = function (i, r) {
          return new n(i, r);
        }),
        n
      );
    })();
  ($e.version = "3.12.2"), ($e.register = df), $.registerPlugin(he, $e);
  function Gh() {
    const n = document.querySelectorAll("[data-split-text]");
    n.length &&
      n.forEach((e) => {
        const t = new $e(e, { type: "words" });
        $.from(t.words, {
          scrollTrigger: {
            trigger: e,
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          },
          duration: 1.2,
          yPercent: 30,
          opacity: 0,
          stagger: 0.1,
          ease: "power3.out",
        });
      });
  }
  $.registerPlugin(he);
  function Wh() {
    $.matchMedia().add("(min-width: 992px)", () => {
      const e = document.querySelectorAll(".h-cards__card"),
        t = document.querySelector(".h-cards__wrapper");
      !e.length ||
        !t ||
        (e.forEach((i, r) => {
          i.style.zIndex = r + 1;
        }),
        e.forEach((i, r) => {
          if (r < e.length - 1) {
            const s = e[r + 1],
              o = s.querySelector(".h-cards__card-title");
            $.timeline({
              scrollTrigger: {
                trigger: i,
                start: "center center",
                endTrigger: s,
                end: "center center",
                scrub: !0,
                pin: !0,
                pinSpacing: !1,
                invalidateOnRefresh: !0,
              },
            })
              .fromTo(
                i,
                { scale: 1, opacity: 1 },
                { scale: 0.9, opacity: 0, y: 50 * r, ease: "none" },
                0
              )
              .to(s, { backgroundColor: "#FFFFFF", ease: "none" }, 0)
              .to(o, { color: "#000000", ease: "none" }, 0);
          } else
            he.create({
              trigger: i,
              start: "top top+=20%",
              end: "center center",
              pin: !0,
              pinSpacing: !1,
              invalidateOnRefresh: !0,
            });
        }));
    });
  }
  function Vh() {
    document.querySelectorAll(".c-modal__cta-link").forEach((h) => {
      const m = h.querySelector(".c-modal__cta-circle"),
        p = h.querySelector(".c-modal__cta-arrow"),
        d = h.querySelector(".c-modal__cta-arrow--duplicate");
      if (!m || !p || !d) {
        console.warn("Missing required elements for CTA animation");
        return;
      }
      $.set(d, { left: "50%", xPercent: -250, opacity: 0, duration: 0 }),
        h.addEventListener("mouseenter", () => {
          $.to(m, {
            backgroundColor: "white",
            color: "black",
            duration: 0.6,
            ease: "power2.out",
          }),
            $.to(p, {
              x: "6.25rem",
              duration: 0.7,
              opacity: 0,
              ease: "power2.out",
            }),
            $.to(d, {
              xPercent: -50,
              duration: 0.7,
              opacity: 1,
              ease: "power2.out",
            });
        }),
        h.addEventListener("mouseleave", () => {
          $.to(m, {
            backgroundColor: "black",
            color: "white",
            duration: 0.6,
            ease: "power2.out",
          }),
            $.to(p, { x: "0", duration: 0.7, opacity: 1, ease: "power2.out" }),
            $.to(d, {
              xPercent: -250,
              opacity: 0,
              duration: 0.7,
              ease: "power2.out",
            });
        });
    });
    const e = { y: "30rem", scale: 0.75, duration: 0.8, ease: "power2.inOut" },
      t = document.querySelectorAll(".h-cards__card"),
      i = document.querySelectorAll(".section--modal"),
      r = document.querySelectorAll(".c-modal__close-icon"),
      s = document.querySelectorAll(".c-cards__card"),
      o = document.createElement("div");
    (o.style.position = "fixed"),
      (o.style.inset = "0"),
      (o.style.backgroundColor = "rgba(0, 0, 0, 0.65)"),
      (o.style.backdropFilter = "blur(8px)"),
      (o.style.WebkitBackdropFilter = "blur(8px)"),
      (o.style.opacity = "0"),
      (o.style.display = "none"),
      (o.style.zIndex = "998"),
      document.body.appendChild(o);
    function a(h) {
      h && (h.scrollTop = 0);
    }
    function l(h) {
      h &&
        ((o.style.display = "block"),
        (o.style.opacity = "0"),
        (h.style.display = "block"),
        (h.style.opacity = "0"),
        (h.style.transform = `translateY(${e.y}) scale(${e.scale})`),
        requestAnimationFrame(() => {
          (o.style.transition = `opacity ${e.duration}s cubic-bezier(0.87, 0, 0.13, 1)`),
            (o.style.opacity = "1"),
            (h.style.transition = `opacity ${e.duration}s cubic-bezier(0.87, 0, 0.13, 1), transform ${e.duration}s cubic-bezier(0.87, 0, 0.13, 1)`),
            (h.style.opacity = "1"),
            (h.style.transform = "translateY(0) scale(1)");
        }));
    }
    function u(h) {
      return new Promise((m) => {
        (o.style.transition = `opacity ${e.duration}s cubic-bezier(0.87, 0, 0.13, 1)`),
          (o.style.opacity = "0"),
          (h.style.transition = `opacity ${e.duration}s cubic-bezier(0.87, 0, 0.13, 1), transform ${e.duration}s cubic-bezier(0.87, 0, 0.13, 1)`),
          (h.style.opacity = "0"),
          (h.style.transform = `translateY(${e.y}) scale(${e.scale})`),
          setTimeout(() => {
            (o.style.display = "none"),
              (h.style.transition = "none"),
              (h.style.transform = "translateY(0) scale(1)"),
              a(h),
              (h.style.display = "none"),
              (h.style.transform = ""),
              m();
          }, e.duration * 1e3);
      });
    }
    function c(h, m) {
      (h.style.transition = `opacity ${e.duration}s cubic-bezier(0.87, 0, 0.13, 1)`),
        (h.style.opacity = "0"),
        (m.style.display = "block"),
        (m.style.opacity = "0"),
        (m.style.transform = `translateY(${e.y}) scale(${e.scale})`),
        requestAnimationFrame(() => {
          (m.style.transition = `opacity ${e.duration}s cubic-bezier(0.87, 0, 0.13, 1), transform ${e.duration}s cubic-bezier(0.87, 0, 0.13, 1)`),
            (m.style.opacity = "1"),
            (m.style.transform = "translateY(0) scale(1)");
        }),
        setTimeout(() => {
          (h.style.transition = "none"),
            a(h),
            (h.style.display = "none"),
            (h.style.transform = "");
        }, e.duration * 1e3);
    }
    t.forEach((h, m) => {
      h.addEventListener("click", () => {
        l(i[m]);
      });
    }),
      s.forEach((h, m) => {
        h.addEventListener("click", () => {
          const p = h.closest(".section--modal");
          if (!p) return;
          const d = (m + 1) % i.length;
          c(p, i[d]);
        });
      }),
      r.forEach((h) => {
        h.addEventListener("click", async () => {
          const m = h.closest(".section--modal");
          m && (await u(m));
        });
      });
  }
  function Uh(n) {
    return n &&
      n.__esModule &&
      Object.prototype.hasOwnProperty.call(n, "default")
      ? n.default
      : n;
  }
  var Zo = { exports: {} },
    jh = Zo.exports,
    gf;
  function Zh() {
    return (
      gf ||
        ((gf = 1),
        (function (n, e) {
          (function (t, i) {
            i(e);
          })(jh, function (t) {
            function i(q, y) {
              for (var F = 0; F < y.length; F++) {
                var x = y[F];
                (x.enumerable = x.enumerable || !1),
                  (x.configurable = !0),
                  "value" in x && (x.writable = !0),
                  Object.defineProperty(q, x.key, x);
              }
            }
            function r(q, y, F) {
              return i(q.prototype, y), q;
            }
            /*!
             * Observer 3.12.2
             * https://greensock.com
             *
             * @license Copyright 2008-2023, GreenSock. All rights reserved.
             * Subject to the terms at https://greensock.com/standard-license or for
             * Club GreenSock members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */ var s,
              o,
              a,
              l,
              u,
              c,
              h,
              m,
              p,
              d,
              f,
              g,
              v,
              _ = function () {
                return (
                  s ||
                  (typeof window < "u" &&
                    (s = window.gsap) &&
                    s.registerPlugin &&
                    s)
                );
              },
              w = 1,
              b = [],
              D = [],
              E = [],
              T = Date.now,
              P = function (y, F) {
                return F;
              },
              A = function () {
                var y = p.core,
                  F = y.bridge || {},
                  x = y._scrollers,
                  S = y._proxies;
                x.push.apply(x, D),
                  S.push.apply(S, E),
                  (D = x),
                  (E = S),
                  (P = function (U, G) {
                    return F[U](G);
                  });
              },
              C = function (y, F) {
                return ~E.indexOf(y) && E[E.indexOf(y) + 1][F];
              },
              R = function (y) {
                return !!~d.indexOf(y);
              },
              k = function (y, F, x, S, N) {
                return y.addEventListener(F, x, { passive: !S, capture: !!N });
              },
              L = function (y, F, x, S) {
                return y.removeEventListener(F, x, !!S);
              },
              B = "scrollLeft",
              X = "scrollTop",
              V = function () {
                return (f && f.isPressed) || D.cache++;
              },
              z = function (y, F) {
                var x = function S(N) {
                  if (N || N === 0) {
                    w && (a.history.scrollRestoration = "manual");
                    var U = f && f.isPressed;
                    (N = S.v = Math.round(N) || (f && f.iOS ? 1 : 0)),
                      y(N),
                      (S.cacheID = D.cache),
                      U && P("ss", N);
                  } else
                    (F || D.cache !== S.cacheID || P("ref")) &&
                      ((S.cacheID = D.cache), (S.v = y()));
                  return S.v + S.offset;
                };
                return (x.offset = 0), y && x;
              },
              I = {
                s: B,
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: z(function (q) {
                  return arguments.length
                    ? a.scrollTo(q, O.sc())
                    : a.pageXOffset || l[B] || u[B] || c[B] || 0;
                }),
              },
              O = {
                s: X,
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: I,
                sc: z(function (q) {
                  return arguments.length
                    ? a.scrollTo(I.sc(), q)
                    : a.pageYOffset || l[X] || u[X] || c[X] || 0;
                }),
              },
              M = function (y, F) {
                return (
                  ((F && F._ctx && F._ctx.selector) || s.utils.toArray)(y)[0] ||
                  (typeof y == "string" && s.config().nullTargetWarn !== !1
                    ? console.warn("Element not found:", y)
                    : null)
                );
              },
              re = function (y, F) {
                var x = F.s,
                  S = F.sc;
                R(y) && (y = l.scrollingElement || u);
                var N = D.indexOf(y),
                  U = S === O.sc ? 1 : 2;
                !~N && (N = D.push(y) - 1), D[N + U] || k(y, "scroll", V);
                var G = D[N + U],
                  te =
                    G ||
                    (D[N + U] =
                      z(C(y, x), !0) ||
                      (R(y)
                        ? S
                        : z(function (ve) {
                            return arguments.length ? (y[x] = ve) : y[x];
                          })));
                return (
                  (te.target = y),
                  G ||
                    (te.smooth =
                      s.getProperty(y, "scrollBehavior") === "smooth"),
                  te
                );
              },
              we = function (y, F, x) {
                var S = y,
                  N = y,
                  U = T(),
                  G = U,
                  te = F || 50,
                  ve = Math.max(500, te * 3),
                  Ue = function (de, Bt) {
                    var ht = T();
                    Bt || ht - U > te
                      ? ((N = S), (S = de), (G = U), (U = ht))
                      : x
                      ? (S += de)
                      : (S = N + ((de - N) / (ht - G)) * (U - G));
                  },
                  je = function () {
                    (N = S = x ? 0 : S), (G = U = 0);
                  },
                  ue = function (de) {
                    var Bt = G,
                      ht = N,
                      Kt = T();
                    return (
                      (de || de === 0) && de !== S && Ue(de),
                      U === G || Kt - G > ve
                        ? 0
                        : ((S + (x ? ht : -ht)) / ((x ? Kt : U) - Bt)) * 1e3
                    );
                  };
                return { update: Ue, reset: je, getVelocity: ue };
              },
              Ke = function (y, F) {
                return (
                  F && !y._gsapAllow && y.preventDefault(),
                  y.changedTouches ? y.changedTouches[0] : y
                );
              },
              Se = function (y) {
                var F = Math.max.apply(Math, y),
                  x = Math.min.apply(Math, y);
                return Math.abs(F) >= Math.abs(x) ? F : x;
              },
              Y = function () {
                (p = s.core.globals().ScrollTrigger), p && p.core && A();
              },
              K = function (y) {
                return (
                  (s = y || _()),
                  s &&
                    typeof document < "u" &&
                    document.body &&
                    ((a = window),
                    (l = document),
                    (u = l.documentElement),
                    (c = l.body),
                    (d = [a, l, u, c]),
                    s.utils.clamp,
                    (v = s.core.context || function () {}),
                    (m = "onpointerenter" in c ? "pointer" : "mouse"),
                    (h = Z.isTouch =
                      a.matchMedia &&
                      a.matchMedia("(hover: none), (pointer: coarse)").matches
                        ? 1
                        : "ontouchstart" in a ||
                          navigator.maxTouchPoints > 0 ||
                          navigator.msMaxTouchPoints > 0
                        ? 2
                        : 0),
                    (g = Z.eventTypes =
                      (
                        "ontouchstart" in u
                          ? "touchstart,touchmove,touchcancel,touchend"
                          : "onpointerdown" in u
                          ? "pointerdown,pointermove,pointercancel,pointerup"
                          : "mousedown,mousemove,mouseup,mouseup"
                      ).split(",")),
                    setTimeout(function () {
                      return (w = 0);
                    }, 500),
                    Y(),
                    (o = 1)),
                  o
                );
              };
            (I.op = O), (D.cache = 0);
            var Z = (function () {
              function q(F) {
                this.init(F);
              }
              var y = q.prototype;
              return (
                (y.init = function (x) {
                  o ||
                    K(s) ||
                    console.warn("Please gsap.registerPlugin(Observer)"),
                    p || Y();
                  var S = x.tolerance,
                    N = x.dragMinimum,
                    U = x.type,
                    G = x.target,
                    te = x.lineHeight,
                    ve = x.debounce,
                    Ue = x.preventDefault,
                    je = x.onStop,
                    ue = x.onStopDelay,
                    J = x.ignore,
                    de = x.wheelSpeed,
                    Bt = x.event,
                    ht = x.onDragStart,
                    Kt = x.onDragEnd,
                    Ct = x.onDrag,
                    yi = x.onPress,
                    Te = x.onRelease,
                    qr = x.onRight,
                    bt = x.onLeft,
                    ye = x.onUp,
                    Ui = x.onDown,
                    or = x.onChangeX,
                    ce = x.onChangeY,
                    bi = x.onChange,
                    be = x.onToggleX,
                    On = x.onToggleY,
                    Jt = x.onHover,
                    ji = x.onHoverEnd,
                    Zi = x.onMove,
                    ct = x.ignoreCheck,
                    Gt = x.isNormalizer,
                    Wt = x.onGestureStart,
                    H = x.onGestureEnd,
                    ei = x.onWheel,
                    Os = x.onEnable,
                    rs = x.onDisable,
                    Hr = x.onClick,
                    zn = x.scrollSpeed,
                    Qi = x.capture,
                    Vt = x.allowClicks,
                    Ki = x.lockAxis,
                    Li = x.onLockAxis;
                  (this.target = G = M(G) || u),
                    (this.vars = x),
                    J && (J = s.utils.toArray(J)),
                    (S = S || 1e-9),
                    (N = N || 0),
                    (de = de || 1),
                    (zn = zn || 1),
                    (U = U || "wheel,touch,pointer"),
                    (ve = ve !== !1),
                    te ||
                      (te = parseFloat(a.getComputedStyle(c).lineHeight) || 22);
                  var ns,
                    ar,
                    mn,
                    Ze,
                    Ut,
                    lr,
                    xr,
                    j = this,
                    Sr = 0,
                    In = 0,
                    zs = re(G, I),
                    jt = re(G, O),
                    Is = zs(),
                    Bs = jt(),
                    oa =
                      ~U.indexOf("touch") &&
                      !~U.indexOf("pointer") &&
                      g[0] === "pointerdown",
                    Di = R(G),
                    Rt = G.ownerDocument || l,
                    Zr = [0, 0, 0],
                    Qr = [0, 0, 0],
                    Rs = 0,
                    Bn = function () {
                      return (Rs = T());
                    },
                    gn = function (pe, Qe) {
                      return (
                        ((j.event = pe) && J && ~J.indexOf(pe.target)) ||
                        (Qe && oa && pe.pointerType !== "touch") ||
                        (ct && ct(pe, Qe))
                      );
                    },
                    ur = function () {
                      j._vx.reset(), j._vy.reset(), ar.pause(), je && je(j);
                    },
                    Ns = function () {
                      var pe = (j.deltaX = Se(Zr)),
                        Qe = (j.deltaY = Se(Qr)),
                        Ft = Math.abs(pe) >= S,
                        se = Math.abs(Qe) >= S;
                      bi && (Ft || se) && bi(j, pe, Qe, Zr, Qr),
                        Ft &&
                          (qr && j.deltaX > 0 && qr(j),
                          bt && j.deltaX < 0 && bt(j),
                          or && or(j),
                          be && j.deltaX < 0 != Sr < 0 && be(j),
                          (Sr = j.deltaX),
                          (Zr[0] = Zr[1] = Zr[2] = 0)),
                        se &&
                          (Ui && j.deltaY > 0 && Ui(j),
                          ye && j.deltaY < 0 && ye(j),
                          ce && ce(j),
                          On && j.deltaY < 0 != In < 0 && On(j),
                          (In = j.deltaY),
                          (Qr[0] = Qr[1] = Qr[2] = 0)),
                        (Ze || mn) &&
                          (Zi && Zi(j), mn && (Ct(j), (mn = !1)), (Ze = !1)),
                        lr && !(lr = !1) && Li && Li(j),
                        Ut && (ei(j), (Ut = !1)),
                        (ns = 0);
                    },
                    _o = function (pe, Qe, Ft) {
                      (Zr[Ft] += pe),
                        (Qr[Ft] += Qe),
                        j._vx.update(pe),
                        j._vy.update(Qe),
                        ve ? ns || (ns = requestAnimationFrame(Ns)) : Ns();
                    },
                    vo = function (pe, Qe) {
                      Ki &&
                        !xr &&
                        ((j.axis = xr =
                          Math.abs(pe) > Math.abs(Qe) ? "x" : "y"),
                        (lr = !0)),
                        xr !== "y" && ((Zr[2] += pe), j._vx.update(pe, !0)),
                        xr !== "x" && ((Qr[2] += Qe), j._vy.update(Qe, !0)),
                        ve ? ns || (ns = requestAnimationFrame(Ns)) : Ns();
                    },
                    $s = function (pe) {
                      if (!gn(pe, 1)) {
                        pe = Ke(pe, Ue);
                        var Qe = pe.clientX,
                          Ft = pe.clientY,
                          se = Qe - j.x,
                          He = Ft - j.y,
                          ge = j.isDragging;
                        (j.x = Qe),
                          (j.y = Ft),
                          (ge ||
                            Math.abs(j.startX - Qe) >= N ||
                            Math.abs(j.startY - Ft) >= N) &&
                            (Ct && (mn = !0),
                            ge || (j.isDragging = !0),
                            vo(se, He),
                            ge || (ht && ht(j)));
                      }
                    },
                    ss = (j.onPress = function (xe) {
                      gn(xe, 1) ||
                        (xe && xe.button) ||
                        ((j.axis = xr = null),
                        ar.pause(),
                        (j.isPressed = !0),
                        (xe = Ke(xe)),
                        (Sr = In = 0),
                        (j.startX = j.x = xe.clientX),
                        (j.startY = j.y = xe.clientY),
                        j._vx.reset(),
                        j._vy.reset(),
                        k(Gt ? G : Rt, g[1], $s, Ue, !0),
                        (j.deltaX = j.deltaY = 0),
                        yi && yi(j));
                    }),
                    os = (j.onRelease = function (xe) {
                      if (!gn(xe, 1)) {
                        L(Gt ? G : Rt, g[1], $s, !0);
                        var pe = !isNaN(j.y - j.startY),
                          Qe =
                            j.isDragging &&
                            (Math.abs(j.x - j.startX) > 3 ||
                              Math.abs(j.y - j.startY) > 3),
                          Ft = Ke(xe);
                        !Qe &&
                          pe &&
                          (j._vx.reset(),
                          j._vy.reset(),
                          Ue &&
                            Vt &&
                            s.delayedCall(0.08, function () {
                              if (T() - Rs > 300 && !xe.defaultPrevented) {
                                if (xe.target.click) xe.target.click();
                                else if (Rt.createEvent) {
                                  var se = Rt.createEvent("MouseEvents");
                                  se.initMouseEvent(
                                    "click",
                                    !0,
                                    !0,
                                    a,
                                    1,
                                    Ft.screenX,
                                    Ft.screenY,
                                    Ft.clientX,
                                    Ft.clientY,
                                    !1,
                                    !1,
                                    !1,
                                    !1,
                                    0,
                                    null
                                  ),
                                    xe.target.dispatchEvent(se);
                                }
                              }
                            })),
                          (j.isDragging = j.isGesturing = j.isPressed = !1),
                          je && !Gt && ar.restart(!0),
                          Kt && Qe && Kt(j),
                          Te && Te(j, Qe);
                      }
                    }),
                    Ge = function (pe) {
                      return (
                        pe.touches &&
                        pe.touches.length > 1 &&
                        (j.isGesturing = !0) &&
                        Wt(pe, j.isDragging)
                      );
                    },
                    Ys = function () {
                      return (j.isGesturing = !1) || H(j);
                    },
                    Kr = function (pe) {
                      if (!gn(pe)) {
                        var Qe = zs(),
                          Ft = jt();
                        _o((Qe - Is) * zn, (Ft - Bs) * zn, 1),
                          (Is = Qe),
                          (Bs = Ft),
                          je && ar.restart(!0);
                      }
                    },
                    Jr = function (pe) {
                      if (!gn(pe)) {
                        (pe = Ke(pe, Ue)), ei && (Ut = !0);
                        var Qe =
                          (pe.deltaMode === 1
                            ? te
                            : pe.deltaMode === 2
                            ? a.innerHeight
                            : 1) * de;
                        _o(pe.deltaX * Qe, pe.deltaY * Qe, 0),
                          je && !Gt && ar.restart(!0);
                      }
                    },
                    en = function (pe) {
                      if (!gn(pe)) {
                        var Qe = pe.clientX,
                          Ft = pe.clientY,
                          se = Qe - j.x,
                          He = Ft - j.y;
                        (j.x = Qe),
                          (j.y = Ft),
                          (Ze = !0),
                          (se || He) && vo(se, He);
                      }
                    },
                    qs = function (pe) {
                      (j.event = pe), Jt(j);
                    },
                    yo = function (pe) {
                      (j.event = pe), ji(j);
                    },
                    Rn = function (pe) {
                      return gn(pe) || (Ke(pe, Ue) && Hr(j));
                    };
                  (ar = j._dc = s.delayedCall(ue || 0.25, ur).pause()),
                    (j.deltaX = j.deltaY = 0),
                    (j._vx = we(0, 50, !0)),
                    (j._vy = we(0, 50, !0)),
                    (j.scrollX = zs),
                    (j.scrollY = jt),
                    (j.isDragging = j.isGesturing = j.isPressed = !1),
                    v(this),
                    (j.enable = function (xe) {
                      return (
                        j.isEnabled ||
                          (k(Di ? Rt : G, "scroll", V),
                          U.indexOf("scroll") >= 0 &&
                            k(Di ? Rt : G, "scroll", Kr, Ue, Qi),
                          U.indexOf("wheel") >= 0 && k(G, "wheel", Jr, Ue, Qi),
                          ((U.indexOf("touch") >= 0 && h) ||
                            U.indexOf("pointer") >= 0) &&
                            (k(G, g[0], ss, Ue, Qi),
                            k(Rt, g[2], os),
                            k(Rt, g[3], os),
                            Vt && k(G, "click", Bn, !1, !0),
                            Hr && k(G, "click", Rn),
                            Wt && k(Rt, "gesturestart", Ge),
                            H && k(Rt, "gestureend", Ys),
                            Jt && k(G, m + "enter", qs),
                            ji && k(G, m + "leave", yo),
                            Zi && k(G, m + "move", en)),
                          (j.isEnabled = !0),
                          xe && xe.type && ss(xe),
                          Os && Os(j)),
                        j
                      );
                    }),
                    (j.disable = function () {
                      j.isEnabled &&
                        (b.filter(function (xe) {
                          return xe !== j && R(xe.target);
                        }).length || L(Di ? Rt : G, "scroll", V),
                        j.isPressed &&
                          (j._vx.reset(),
                          j._vy.reset(),
                          L(Gt ? G : Rt, g[1], $s, !0)),
                        L(Di ? Rt : G, "scroll", Kr, Qi),
                        L(G, "wheel", Jr, Qi),
                        L(G, g[0], ss, Qi),
                        L(Rt, g[2], os),
                        L(Rt, g[3], os),
                        L(G, "click", Bn, !0),
                        L(G, "click", Rn),
                        L(Rt, "gesturestart", Ge),
                        L(Rt, "gestureend", Ys),
                        L(G, m + "enter", qs),
                        L(G, m + "leave", yo),
                        L(G, m + "move", en),
                        (j.isEnabled = j.isPressed = j.isDragging = !1),
                        rs && rs(j));
                    }),
                    (j.kill = j.revert =
                      function () {
                        j.disable();
                        var xe = b.indexOf(j);
                        xe >= 0 && b.splice(xe, 1), f === j && (f = 0);
                      }),
                    b.push(j),
                    Gt && R(G) && (f = j),
                    j.enable(Bt);
                }),
                r(q, [
                  {
                    key: "velocityX",
                    get: function () {
                      return this._vx.getVelocity();
                    },
                  },
                  {
                    key: "velocityY",
                    get: function () {
                      return this._vy.getVelocity();
                    },
                  },
                ]),
                q
              );
            })();
            (Z.version = "3.12.2"),
              (Z.create = function (q) {
                return new Z(q);
              }),
              (Z.register = K),
              (Z.getAll = function () {
                return b.slice();
              }),
              (Z.getById = function (q) {
                return b.filter(function (y) {
                  return y.vars.id === q;
                })[0];
              }),
              _() && s.registerPlugin(Z);
            /*!
             * ScrollTrigger 3.12.2
             * https://greensock.com
             *
             * @license Copyright 2008-2023, GreenSock. All rights reserved.
             * Subject to the terms at https://greensock.com/standard-license or for
             * Club GreenSock members, the agreement issued with that membership.
             * @author: Jack Doyle, jack@greensock.com
             */ var Q,
              Ce,
              ae,
              me,
              Ve,
              ie,
              Me,
              et,
              gt,
              W,
              wt,
              Ht,
              tt,
              Je,
              Hi,
              st,
              Ir,
              _t,
              Ye,
              hi,
              Ot,
              dn,
              Et,
              yr,
              mi,
              fn,
              Xi,
              pn,
              Ur,
              Gi,
              Br,
              Le,
              Rr = 1,
              ot = Date.now,
              Wi = ot(),
              vt = 0,
              br = 0,
              Pn = function (y, F, x) {
                var S =
                  Ee(y) &&
                  (y.substr(0, 6) === "clamp(" || y.indexOf("max") > -1);
                return (
                  (x["_" + F + "Clamp"] = S), S ? y.substr(6, y.length - 7) : y
                );
              },
              Nr = function (y, F) {
                return F && (!Ee(y) || y.substr(0, 6) !== "clamp(")
                  ? "clamp(" + y + ")"
                  : y;
              },
              De = function q() {
                return br && requestAnimationFrame(q);
              },
              le = function () {
                return (Je = 1);
              },
              qe = function () {
                return (Je = 0);
              },
              Xe = function (y) {
                return y;
              },
              ee = function (y) {
                return Math.round(y * 1e5) / 1e5 || 0;
              },
              Oe = function () {
                return typeof window < "u";
              },
              fe = function () {
                return (
                  Q || (Oe() && (Q = window.gsap) && Q.registerPlugin && Q)
                );
              },
              _e = function (y) {
                return !!~Me.indexOf(y);
              },
              zt = function (y) {
                return (
                  (y === "Height" ? Br : ae["inner" + y]) ||
                  Ve["client" + y] ||
                  ie["client" + y]
                );
              },
              Be = function (y) {
                return (
                  C(y, "getBoundingClientRect") ||
                  (_e(y)
                    ? function () {
                        return (pl.width = ae.innerWidth), (pl.height = Br), pl;
                      }
                    : function () {
                        return Fn(y);
                      })
                );
              },
              Tt = function (y, F, x) {
                var S = x.d,
                  N = x.d2,
                  U = x.a;
                return (U = C(y, "getBoundingClientRect"))
                  ? function () {
                      return U()[S];
                    }
                  : function () {
                      return (F ? zt(N) : y["client" + N]) || 0;
                    };
              },
              gi = function (y, F) {
                return !F || ~E.indexOf(y)
                  ? Be(y)
                  : function () {
                      return pl;
                    };
              },
              at = function (y, F) {
                var x = F.s,
                  S = F.d2,
                  N = F.d,
                  U = F.a;
                return Math.max(
                  0,
                  (x = "scroll" + S) && (U = C(y, x))
                    ? U() - Be(y)()[N]
                    : _e(y)
                    ? (Ve[x] || ie[x]) - zt(S)
                    : y[x] - y["offset" + S]
                );
              },
              it = function (y, F) {
                for (var x = 0; x < Ye.length; x += 3)
                  (!F || ~F.indexOf(Ye[x + 1])) &&
                    y(Ye[x], Ye[x + 1], Ye[x + 2]);
              },
              Ee = function (y) {
                return typeof y == "string";
              },
              lt = function (y) {
                return typeof y == "function";
              },
              rt = function (y) {
                return typeof y == "number";
              },
              It = function (y) {
                return typeof y == "object";
              },
              ki = function (y, F, x) {
                return y && y.progress(F ? 0 : 1) && x && y.pause();
              },
              wi = function (y, F) {
                if (y.enabled) {
                  var x = F(y);
                  x && x.totalTime && (y.callbackAnimation = x);
                }
              },
              yt = Math.abs,
              Qt = "left",
              hn = "top",
              ts = "right",
              Xt = "bottom",
              ut = "width",
              oi = "height",
              kn = "Right",
              is = "Left",
              jr = "Top",
              Fi = "Bottom",
              ft = "padding",
              _i = "margin",
              $r = "Width",
              Xu = "Height",
              vi = "px",
              Yr = function (y) {
                return ae.getComputedStyle(y);
              },
              y0 = function (y) {
                var F = Yr(y).position;
                y.style.position =
                  F === "absolute" || F === "fixed" ? F : "relative";
              },
              Mf = function (y, F) {
                for (var x in F) x in y || (y[x] = F[x]);
                return y;
              },
              Fn = function (y, F) {
                var x =
                    F &&
                    Yr(y)[Hi] !== "matrix(1, 0, 0, 1, 0, 0)" &&
                    Q.to(y, {
                      x: 0,
                      y: 0,
                      xPercent: 0,
                      yPercent: 0,
                      rotation: 0,
                      rotationX: 0,
                      rotationY: 0,
                      scale: 1,
                      skewX: 0,
                      skewY: 0,
                    }).progress(1),
                  S = y.getBoundingClientRect();
                return x && x.progress(0).kill(), S;
              },
              Gu = function (y, F) {
                var x = F.d2;
                return y["offset" + x] || y["client" + x] || 0;
              },
              Pf = function (y) {
                var F = [],
                  x = y.labels,
                  S = y.duration(),
                  N;
                for (N in x) F.push(x[N] / S);
                return F;
              },
              b0 = function (y) {
                return function (F) {
                  return Q.utils.snap(Pf(y), F);
                };
              },
              Wu = function (y) {
                var F = Q.utils.snap(y),
                  x =
                    Array.isArray(y) &&
                    y.slice(0).sort(function (S, N) {
                      return S - N;
                    });
                return x
                  ? function (S, N, U) {
                      U === void 0 && (U = 0.001);
                      var G;
                      if (!N) return F(S);
                      if (N > 0) {
                        for (S -= U, G = 0; G < x.length; G++)
                          if (x[G] >= S) return x[G];
                        return x[G - 1];
                      } else
                        for (G = x.length, S += U; G--; )
                          if (x[G] <= S) return x[G];
                      return x[0];
                    }
                  : function (S, N, U) {
                      U === void 0 && (U = 0.001);
                      var G = F(S);
                      return !N || Math.abs(G - S) < U || G - S < 0 == N < 0
                        ? G
                        : F(N < 0 ? S - y : S + y);
                    };
              },
              D0 = function (y) {
                return function (F, x) {
                  return Wu(Pf(y))(F, x.direction);
                };
              },
              rl = function (y, F, x, S) {
                return x.split(",").forEach(function (N) {
                  return y(F, N, S);
                });
              },
              ai = function (y, F, x, S, N) {
                return y.addEventListener(F, x, { passive: !S, capture: !!N });
              },
              li = function (y, F, x, S) {
                return y.removeEventListener(F, x, !!S);
              },
              nl = function (y, F, x) {
                (x = x && x.wheelHandler),
                  x && (y(F, "wheel", x), y(F, "touchmove", x));
              },
              kf = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal",
              },
              sl = { toggleActions: "play", anticipatePin: 0 },
              ol = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
              al = function (y, F) {
                if (Ee(y)) {
                  var x = y.indexOf("="),
                    S = ~x
                      ? +(y.charAt(x - 1) + 1) * parseFloat(y.substr(x + 1))
                      : 0;
                  ~x &&
                    (y.indexOf("%") > x && (S *= F / 100),
                    (y = y.substr(0, x - 1))),
                    (y =
                      S +
                      (y in ol
                        ? ol[y] * F
                        : ~y.indexOf("%")
                        ? (parseFloat(y) * F) / 100
                        : parseFloat(y) || 0));
                }
                return y;
              },
              ll = function (y, F, x, S, N, U, G, te) {
                var ve = N.startColor,
                  Ue = N.endColor,
                  je = N.fontSize,
                  ue = N.indent,
                  J = N.fontWeight,
                  de = me.createElement("div"),
                  Bt = _e(x) || C(x, "pinType") === "fixed",
                  ht = y.indexOf("scroller") !== -1,
                  Kt = Bt ? ie : x,
                  Ct = y.indexOf("start") !== -1,
                  yi = Ct ? ve : Ue,
                  Te =
                    "border-color:" +
                    yi +
                    ";font-size:" +
                    je +
                    ";color:" +
                    yi +
                    ";font-weight:" +
                    J +
                    ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return (
                  (Te +=
                    "position:" + ((ht || te) && Bt ? "fixed;" : "absolute;")),
                  (ht || te || !Bt) &&
                    (Te +=
                      (S === O ? ts : Xt) + ":" + (U + parseFloat(ue)) + "px;"),
                  G &&
                    (Te +=
                      "box-sizing:border-box;text-align:left;width:" +
                      G.offsetWidth +
                      "px;"),
                  (de._isStart = Ct),
                  de.setAttribute(
                    "class",
                    "gsap-marker-" + y + (F ? " marker-" + F : "")
                  ),
                  (de.style.cssText = Te),
                  (de.innerText = F || F === 0 ? y + "-" + F : y),
                  Kt.children[0]
                    ? Kt.insertBefore(de, Kt.children[0])
                    : Kt.appendChild(de),
                  (de._offset = de["offset" + S.op.d2]),
                  ul(de, 0, S, Ct),
                  de
                );
              },
              ul = function (y, F, x, S) {
                var N = { display: "block" },
                  U = x[S ? "os2" : "p2"],
                  G = x[S ? "p2" : "os2"];
                (y._isFlipped = S),
                  (N[x.a + "Percent"] = S ? -100 : 0),
                  (N[x.a] = S ? "1px" : 0),
                  (N["border" + U + $r] = 1),
                  (N["border" + G + $r] = 0),
                  (N[x.p] = F + "px"),
                  Q.set(y, N);
              },
              Pe = [],
              Vu = {},
              ra,
              Ff = function () {
                return (
                  ot() - vt > 34 && (ra || (ra = requestAnimationFrame(Ln)))
                );
              },
              go = function () {
                (!Et || !Et.isPressed || Et.startX > ie.clientWidth) &&
                  (D.cache++,
                  Et ? ra || (ra = requestAnimationFrame(Ln)) : Ln(),
                  vt || ks("scrollStart"),
                  (vt = ot()));
              },
              Uu = function () {
                (fn = ae.innerWidth), (mi = ae.innerHeight);
              },
              na = function () {
                D.cache++,
                  !tt &&
                    !dn &&
                    !me.fullscreenElement &&
                    !me.webkitFullscreenElement &&
                    (!yr ||
                      fn !== ae.innerWidth ||
                      Math.abs(ae.innerHeight - mi) > ae.innerHeight * 0.25) &&
                    et.restart(!0);
              },
              Ps = {},
              x0 = [],
              Lf = function q() {
                return li(ze, "scrollEnd", q) || Ls(!0);
              },
              ks = function (y) {
                return (
                  (Ps[y] &&
                    Ps[y].map(function (F) {
                      return F();
                    })) ||
                  x0
                );
              },
              Dr = [],
              Of = function (y) {
                for (var F = 0; F < Dr.length; F += 5)
                  (!y || (Dr[F + 4] && Dr[F + 4].query === y)) &&
                    ((Dr[F].style.cssText = Dr[F + 1]),
                    Dr[F].getBBox &&
                      Dr[F].setAttribute("transform", Dr[F + 2] || ""),
                    (Dr[F + 3].uncache = 1));
              },
              ju = function (y, F) {
                var x;
                for (st = 0; st < Pe.length; st++)
                  (x = Pe[st]),
                    x &&
                      (!F || x._ctx === F) &&
                      (y ? x.kill(1) : x.revert(!0, !0));
                F && Of(F), F || ks("revert");
              },
              zf = function (y, F) {
                D.cache++,
                  (F || !Vi) &&
                    D.forEach(function (x) {
                      return lt(x) && x.cacheID++ && (x.rec = 0);
                    }),
                  Ee(y) && (ae.history.scrollRestoration = Ur = y);
              },
              Vi,
              Fs = 0,
              If,
              S0 = function () {
                if (If !== Fs) {
                  var y = (If = Fs);
                  requestAnimationFrame(function () {
                    return y === Fs && Ls(!0);
                  });
                }
              },
              Bf = function () {
                ie.appendChild(Gi),
                  (Br = Gi.offsetHeight || ae.innerHeight),
                  ie.removeChild(Gi);
              },
              Ls = function (y, F) {
                if (vt && !y) {
                  ai(ze, "scrollEnd", Lf);
                  return;
                }
                Bf(),
                  (Vi = ze.isRefreshing = !0),
                  D.forEach(function (S) {
                    return lt(S) && ++S.cacheID && (S.rec = S());
                  });
                var x = ks("refreshInit");
                hi && ze.sort(),
                  F || ju(),
                  D.forEach(function (S) {
                    lt(S) &&
                      (S.smooth && (S.target.style.scrollBehavior = "auto"),
                      S(0));
                  }),
                  Pe.slice(0).forEach(function (S) {
                    return S.refresh();
                  }),
                  Pe.forEach(function (S, N) {
                    if (S._subPinOffset && S.pin) {
                      var U = S.vars.horizontal
                          ? "offsetWidth"
                          : "offsetHeight",
                        G = S.pin[U];
                      S.revert(!0, 1),
                        S.adjustPinSpacing(S.pin[U] - G),
                        S.refresh();
                    }
                  }),
                  Pe.forEach(function (S) {
                    var N = at(S.scroller, S._dir);
                    (S.vars.end === "max" || (S._endClamp && S.end > N)) &&
                      S.setPositions(S.start, Math.max(S.start + 1, N), !0);
                  }),
                  x.forEach(function (S) {
                    return S && S.render && S.render(-1);
                  }),
                  D.forEach(function (S) {
                    lt(S) &&
                      (S.smooth &&
                        requestAnimationFrame(function () {
                          return (S.target.style.scrollBehavior = "smooth");
                        }),
                      S.rec && S(S.rec));
                  }),
                  zf(Ur, 1),
                  et.pause(),
                  Fs++,
                  (Vi = 2),
                  Ln(2),
                  Pe.forEach(function (S) {
                    return lt(S.vars.onRefresh) && S.vars.onRefresh(S);
                  }),
                  (Vi = ze.isRefreshing = !1),
                  ks("refresh");
              },
              Zu = 0,
              cl = 1,
              sa,
              Ln = function (y) {
                if (!Vi || y === 2) {
                  (ze.isUpdating = !0), sa && sa.update(0);
                  var F = Pe.length,
                    x = ot(),
                    S = x - Wi >= 50,
                    N = F && Pe[0].scroll();
                  if (
                    ((cl = Zu > N ? -1 : 1),
                    Vi || (Zu = N),
                    S &&
                      (vt && !Je && x - vt > 200 && ((vt = 0), ks("scrollEnd")),
                      (wt = Wi),
                      (Wi = x)),
                    cl < 0)
                  ) {
                    for (st = F; st-- > 0; ) Pe[st] && Pe[st].update(0, S);
                    cl = 1;
                  } else
                    for (st = 0; st < F; st++) Pe[st] && Pe[st].update(0, S);
                  ze.isUpdating = !1;
                }
                ra = 0;
              },
              Qu = [
                Qt,
                hn,
                Xt,
                ts,
                _i + Fi,
                _i + kn,
                _i + jr,
                _i + is,
                "display",
                "flexShrink",
                "float",
                "zIndex",
                "gridColumnStart",
                "gridColumnEnd",
                "gridRowStart",
                "gridRowEnd",
                "gridArea",
                "justifySelf",
                "alignSelf",
                "placeSelf",
                "order",
              ],
              dl = Qu.concat([
                ut,
                oi,
                "boxSizing",
                "max" + $r,
                "max" + Xu,
                "position",
                _i,
                ft,
                ft + jr,
                ft + kn,
                ft + Fi,
                ft + is,
              ]),
              E0 = function (y, F, x) {
                wo(x);
                var S = y._gsap;
                if (S.spacerIsNative) wo(S.spacerState);
                else if (y._gsap.swappedIn) {
                  var N = F.parentNode;
                  N && (N.insertBefore(y, F), N.removeChild(F));
                }
                y._gsap.swappedIn = !1;
              },
              Ku = function (y, F, x, S) {
                if (!y._gsap.swappedIn) {
                  for (var N = Qu.length, U = F.style, G = y.style, te; N--; )
                    (te = Qu[N]), (U[te] = x[te]);
                  (U.position =
                    x.position === "absolute" ? "absolute" : "relative"),
                    x.display === "inline" && (U.display = "inline-block"),
                    (G[Xt] = G[ts] = "auto"),
                    (U.flexBasis = x.flexBasis || "auto"),
                    (U.overflow = "visible"),
                    (U.boxSizing = "border-box"),
                    (U[ut] = Gu(y, I) + vi),
                    (U[oi] = Gu(y, O) + vi),
                    (U[ft] = G[_i] = G[hn] = G[Qt] = "0"),
                    wo(S),
                    (G[ut] = G["max" + $r] = x[ut]),
                    (G[oi] = G["max" + Xu] = x[oi]),
                    (G[ft] = x[ft]),
                    y.parentNode !== F &&
                      (y.parentNode.insertBefore(F, y), F.appendChild(y)),
                    (y._gsap.swappedIn = !0);
                }
              },
              T0 = /([A-Z])/g,
              wo = function (y) {
                if (y) {
                  var F = y.t.style,
                    x = y.length,
                    S = 0,
                    N,
                    U;
                  for (
                    (y.t._gsap || Q.core.getCache(y.t)).uncache = 1;
                    S < x;
                    S += 2
                  )
                    (U = y[S + 1]),
                      (N = y[S]),
                      U
                        ? (F[N] = U)
                        : F[N] &&
                          F.removeProperty(N.replace(T0, "-$1").toLowerCase());
                }
              },
              fl = function (y) {
                for (var F = dl.length, x = y.style, S = [], N = 0; N < F; N++)
                  S.push(dl[N], x[dl[N]]);
                return (S.t = y), S;
              },
              C0 = function (y, F, x) {
                for (var S = [], N = y.length, U = x ? 8 : 0, G; U < N; U += 2)
                  (G = y[U]), S.push(G, G in F ? F[G] : y[U + 1]);
                return (S.t = y.t), S;
              },
              pl = { left: 0, top: 0 },
              Rf = function (y, F, x, S, N, U, G, te, ve, Ue, je, ue, J, de) {
                lt(y) && (y = y(te)),
                  Ee(y) &&
                    y.substr(0, 3) === "max" &&
                    (y =
                      ue +
                      (y.charAt(4) === "=" ? al("0" + y.substr(3), x) : 0));
                var Bt = J ? J.time() : 0,
                  ht,
                  Kt,
                  Ct;
                if ((J && J.seek(0), isNaN(y) || (y = +y), rt(y)))
                  J &&
                    (y = Q.utils.mapRange(
                      J.scrollTrigger.start,
                      J.scrollTrigger.end,
                      0,
                      ue,
                      y
                    )),
                    G && ul(G, x, S, !0);
                else {
                  lt(F) && (F = F(te));
                  var yi = (y || "0").split(" "),
                    Te,
                    qr,
                    bt,
                    ye;
                  (Ct = M(F, te) || ie),
                    (Te = Fn(Ct) || {}),
                    (!Te || (!Te.left && !Te.top)) &&
                      Yr(Ct).display === "none" &&
                      ((ye = Ct.style.display),
                      (Ct.style.display = "block"),
                      (Te = Fn(Ct)),
                      ye
                        ? (Ct.style.display = ye)
                        : Ct.style.removeProperty("display")),
                    (qr = al(yi[0], Te[S.d])),
                    (bt = al(yi[1] || "0", x)),
                    (y = Te[S.p] - ve[S.p] - Ue + qr + N - bt),
                    G && ul(G, bt, S, x - bt < 20 || (G._isStart && bt > 20)),
                    (x -= x - bt);
                }
                if ((de && ((te[de] = y || -0.001), y < 0 && (y = 0)), U)) {
                  var Ui = y + x,
                    or = U._isStart;
                  (ht = "scroll" + S.d2),
                    ul(
                      U,
                      Ui,
                      S,
                      (or && Ui > 20) ||
                        (!or &&
                          (je ? Math.max(ie[ht], Ve[ht]) : U.parentNode[ht]) <=
                            Ui + 1)
                    ),
                    je &&
                      ((ve = Fn(G)),
                      je &&
                        (U.style[S.op.p] =
                          ve[S.op.p] - S.op.m - U._offset + vi));
                }
                return (
                  J &&
                    Ct &&
                    ((ht = Fn(Ct)),
                    J.seek(ue),
                    (Kt = Fn(Ct)),
                    (J._caScrollDist = ht[S.p] - Kt[S.p]),
                    (y = (y / J._caScrollDist) * ue)),
                  J && J.seek(Bt),
                  J ? y : Math.round(y)
                );
              },
              A0 = /(webkit|moz|length|cssText|inset)/i,
              Nf = function (y, F, x, S) {
                if (y.parentNode !== F) {
                  var N = y.style,
                    U,
                    G;
                  if (F === ie) {
                    (y._stOrig = N.cssText), (G = Yr(y));
                    for (U in G)
                      !+U &&
                        !A0.test(U) &&
                        G[U] &&
                        typeof N[U] == "string" &&
                        U !== "0" &&
                        (N[U] = G[U]);
                    (N.top = x), (N.left = S);
                  } else N.cssText = y._stOrig;
                  (Q.core.getCache(y).uncache = 1), F.appendChild(y);
                }
              },
              $f = function (y, F, x) {
                var S = F,
                  N = S;
                return function (U) {
                  var G = Math.round(y());
                  return (
                    G !== S &&
                      G !== N &&
                      Math.abs(G - S) > 3 &&
                      Math.abs(G - N) > 3 &&
                      ((U = G), x && x()),
                    (N = S),
                    (S = U),
                    U
                  );
                };
              },
              hl = function (y, F, x) {
                var S = {};
                (S[F.p] = "+=" + x), Q.set(y, S);
              },
              Yf = function (y, F) {
                var x = re(y, F),
                  S = "_scroll" + F.p2,
                  N = function U(G, te, ve, Ue, je) {
                    var ue = U.tween,
                      J = te.onComplete,
                      de = {};
                    ve = ve || x();
                    var Bt = $f(x, ve, function () {
                      ue.kill(), (U.tween = 0);
                    });
                    return (
                      (je = (Ue && je) || 0),
                      (Ue = Ue || G - ve),
                      ue && ue.kill(),
                      (te[S] = G),
                      (te.modifiers = de),
                      (de[S] = function () {
                        return Bt(
                          ve + Ue * ue.ratio + je * ue.ratio * ue.ratio
                        );
                      }),
                      (te.onUpdate = function () {
                        D.cache++, Ln();
                      }),
                      (te.onComplete = function () {
                        (U.tween = 0), J && J.call(ue);
                      }),
                      (ue = U.tween = Q.to(y, te)),
                      ue
                    );
                  };
                return (
                  (y[S] = x),
                  (x.wheelHandler = function () {
                    return N.tween && N.tween.kill() && (N.tween = 0);
                  }),
                  ai(y, "wheel", x.wheelHandler),
                  ze.isTouch && ai(y, "touchmove", x.wheelHandler),
                  N
                );
              },
              ze = (function () {
                function q(F, x) {
                  Ce ||
                    q.register(Q) ||
                    console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                    pn(this),
                    this.init(F, x);
                }
                var y = q.prototype;
                return (
                  (y.init = function (x, S) {
                    if (
                      ((this.progress = this.start = 0),
                      this.vars && this.kill(!0, !0),
                      !br)
                    ) {
                      this.update = this.refresh = this.kill = Xe;
                      return;
                    }
                    x = Mf(
                      Ee(x) || rt(x) || x.nodeType ? { trigger: x } : x,
                      sl
                    );
                    var N = x,
                      U = N.onUpdate,
                      G = N.toggleClass,
                      te = N.id,
                      ve = N.onToggle,
                      Ue = N.onRefresh,
                      je = N.scrub,
                      ue = N.trigger,
                      J = N.pin,
                      de = N.pinSpacing,
                      Bt = N.invalidateOnRefresh,
                      ht = N.anticipatePin,
                      Kt = N.onScrubComplete,
                      Ct = N.onSnapComplete,
                      yi = N.once,
                      Te = N.snap,
                      qr = N.pinReparent,
                      bt = N.pinSpacer,
                      ye = N.containerAnimation,
                      Ui = N.fastScrollEnd,
                      or = N.preventOverlaps,
                      ce =
                        x.horizontal ||
                        (x.containerAnimation && x.horizontal !== !1)
                          ? I
                          : O,
                      bi = !je && je !== 0,
                      be = M(x.scroller || ae),
                      On = Q.core.getCache(be),
                      Jt = _e(be),
                      ji =
                        ("pinType" in x
                          ? x.pinType
                          : C(be, "pinType") || (Jt && "fixed")) === "fixed",
                      Zi = [x.onEnter, x.onLeave, x.onEnterBack, x.onLeaveBack],
                      ct = bi && x.toggleActions.split(" "),
                      Gt = "markers" in x ? x.markers : sl.markers,
                      Wt = Jt
                        ? 0
                        : parseFloat(Yr(be)["border" + ce.p2 + $r]) || 0,
                      H = this,
                      ei =
                        x.onRefreshInit &&
                        function () {
                          return x.onRefreshInit(H);
                        },
                      Os = Tt(be, Jt, ce),
                      rs = gi(be, Jt),
                      Hr = 0,
                      zn = 0,
                      Qi = 0,
                      Vt = re(be, ce),
                      Ki,
                      Li,
                      ns,
                      ar,
                      mn,
                      Ze,
                      Ut,
                      lr,
                      xr,
                      j,
                      Sr,
                      In,
                      zs,
                      jt,
                      Is,
                      Bs,
                      oa,
                      Di,
                      Rt,
                      Zr,
                      Qr,
                      Rs,
                      Bn,
                      gn,
                      ur,
                      Ns,
                      _o,
                      vo,
                      $s,
                      ss,
                      os,
                      Ge,
                      Ys,
                      Kr,
                      Jr,
                      en,
                      qs,
                      yo,
                      Rn;
                    if (
                      ((H._startClamp = H._endClamp = !1),
                      (H._dir = ce),
                      (ht *= 45),
                      (H.scroller = be),
                      (H.scroll = ye ? ye.time.bind(ye) : Vt),
                      (ar = Vt()),
                      (H.vars = x),
                      (S = S || x.animation),
                      "refreshPriority" in x &&
                        ((hi = 1), x.refreshPriority === -9999 && (sa = H)),
                      (On.tweenScroll = On.tweenScroll || {
                        top: Yf(be, O),
                        left: Yf(be, I),
                      }),
                      (H.tweenTo = Ki = On.tweenScroll[ce.p]),
                      (H.scrubDuration = function (se) {
                        (Ys = rt(se) && se),
                          Ys
                            ? Ge
                              ? Ge.duration(se)
                              : (Ge = Q.to(S, {
                                  ease: "expo",
                                  totalProgress: "+=0",
                                  duration: Ys,
                                  paused: !0,
                                  onComplete: function () {
                                    return Kt && Kt(H);
                                  },
                                }))
                            : (Ge && Ge.progress(1).kill(), (Ge = 0));
                      }),
                      S &&
                        ((S.vars.lazy = !1),
                        (S._initted && !H.isReverted) ||
                          (S.vars.immediateRender !== !1 &&
                            x.immediateRender !== !1 &&
                            S.duration() &&
                            S.render(0, !0, !0)),
                        (H.animation = S.pause()),
                        (S.scrollTrigger = H),
                        H.scrubDuration(je),
                        (ss = 0),
                        te || (te = S.vars.id)),
                      Te &&
                        ((!It(Te) || Te.push) && (Te = { snapTo: Te }),
                        "scrollBehavior" in ie.style &&
                          Q.set(Jt ? [ie, Ve] : be, { scrollBehavior: "auto" }),
                        D.forEach(function (se) {
                          return (
                            lt(se) &&
                            se.target ===
                              (Jt ? me.scrollingElement || Ve : be) &&
                            (se.smooth = !1)
                          );
                        }),
                        (ns = lt(Te.snapTo)
                          ? Te.snapTo
                          : Te.snapTo === "labels"
                          ? b0(S)
                          : Te.snapTo === "labelsDirectional"
                          ? D0(S)
                          : Te.directional !== !1
                          ? function (se, He) {
                              return Wu(Te.snapTo)(
                                se,
                                ot() - zn < 500 ? 0 : He.direction
                              );
                            }
                          : Q.utils.snap(Te.snapTo)),
                        (Kr = Te.duration || { min: 0.1, max: 2 }),
                        (Kr = It(Kr) ? W(Kr.min, Kr.max) : W(Kr, Kr)),
                        (Jr = Q.delayedCall(
                          Te.delay || Ys / 2 || 0.1,
                          function () {
                            var se = Vt(),
                              He = ot() - zn < 500,
                              ge = Ki.tween;
                            if (
                              (He || Math.abs(H.getVelocity()) < 10) &&
                              !ge &&
                              !Je &&
                              Hr !== se
                            ) {
                              var Ie = (se - Ze) / jt,
                                ui = S && !bi ? S.totalProgress() : Ie,
                                We = He
                                  ? 0
                                  : ((ui - os) / (ot() - wt)) * 1e3 || 0,
                                Nt = Q.utils.clamp(
                                  -Ie,
                                  1 - Ie,
                                  (yt(We / 2) * We) / 0.185
                                ),
                                Ji = Ie + (Te.inertia === !1 ? 0 : Nt),
                                xi = W(0, 1, ns(Ji, H)),
                                At = Math.round(Ze + xi * jt),
                                dt = Te,
                                tn = dt.onStart,
                                Mt = dt.onInterrupt,
                                Er = dt.onComplete;
                              if (se <= Ut && se >= Ze && At !== se) {
                                if (
                                  ge &&
                                  !ge._initted &&
                                  ge.data <= yt(At - se)
                                )
                                  return;
                                Te.inertia === !1 && (Nt = xi - Ie),
                                  Ki(
                                    At,
                                    {
                                      duration: Kr(
                                        yt(
                                          (Math.max(yt(Ji - ui), yt(xi - ui)) *
                                            0.185) /
                                            We /
                                            0.05 || 0
                                        )
                                      ),
                                      ease: Te.ease || "power3",
                                      data: yt(At - se),
                                      onInterrupt: function () {
                                        return Jr.restart(!0) && Mt && Mt(H);
                                      },
                                      onComplete: function () {
                                        H.update(),
                                          (Hr = Vt()),
                                          (ss = os =
                                            S && !bi
                                              ? S.totalProgress()
                                              : H.progress),
                                          Ct && Ct(H),
                                          Er && Er(H);
                                      },
                                    },
                                    se,
                                    Nt * jt,
                                    At - se - Nt * jt
                                  ),
                                  tn && tn(H, Ki.tween);
                              }
                            } else H.isActive && Hr !== se && Jr.restart(!0);
                          }
                        ).pause())),
                      te && (Vu[te] = H),
                      (ue = H.trigger = M(ue || (J !== !0 && J))),
                      (Rn = ue && ue._gsap && ue._gsap.stRevert),
                      Rn && (Rn = Rn(H)),
                      (J = J === !0 ? ue : M(J)),
                      Ee(G) && (G = { targets: ue, className: G }),
                      J &&
                        (de === !1 ||
                          de === _i ||
                          (de =
                            !de &&
                            J.parentNode &&
                            J.parentNode.style &&
                            Yr(J.parentNode).display === "flex"
                              ? !1
                              : ft),
                        (H.pin = J),
                        (Li = Q.core.getCache(J)),
                        Li.spacer
                          ? (Is = Li.pinState)
                          : (bt &&
                              ((bt = M(bt)),
                              bt &&
                                !bt.nodeType &&
                                (bt = bt.current || bt.nativeElement),
                              (Li.spacerIsNative = !!bt),
                              bt && (Li.spacerState = fl(bt))),
                            (Li.spacer = Di = bt || me.createElement("div")),
                            Di.classList.add("pin-spacer"),
                            te && Di.classList.add("pin-spacer-" + te),
                            (Li.pinState = Is = fl(J))),
                        x.force3D !== !1 && Q.set(J, { force3D: !0 }),
                        (H.spacer = Di = Li.spacer),
                        ($s = Yr(J)),
                        (gn = $s[de + ce.os2]),
                        (Zr = Q.getProperty(J)),
                        (Qr = Q.quickSetter(J, ce.a, vi)),
                        Ku(J, Di, $s),
                        (oa = fl(J))),
                      Gt)
                    ) {
                      (In = It(Gt) ? Mf(Gt, kf) : kf),
                        (j = ll("scroller-start", te, be, ce, In, 0)),
                        (Sr = ll("scroller-end", te, be, ce, In, 0, j)),
                        (Rt = j["offset" + ce.op.d2]);
                      var xe = M(C(be, "content") || be);
                      (lr = this.markerStart =
                        ll("start", te, xe, ce, In, Rt, 0, ye)),
                        (xr = this.markerEnd =
                          ll("end", te, xe, ce, In, Rt, 0, ye)),
                        ye && (yo = Q.quickSetter([lr, xr], ce.a, vi)),
                        !ji &&
                          !(E.length && C(be, "fixedMarkers") === !0) &&
                          (y0(Jt ? ie : be),
                          Q.set([j, Sr], { force3D: !0 }),
                          (Ns = Q.quickSetter(j, ce.a, vi)),
                          (vo = Q.quickSetter(Sr, ce.a, vi)));
                    }
                    if (ye) {
                      var pe = ye.vars.onUpdate,
                        Qe = ye.vars.onUpdateParams;
                      ye.eventCallback("onUpdate", function () {
                        H.update(0, 0, 1), pe && pe.apply(ye, Qe || []);
                      });
                    }
                    if (
                      ((H.previous = function () {
                        return Pe[Pe.indexOf(H) - 1];
                      }),
                      (H.next = function () {
                        return Pe[Pe.indexOf(H) + 1];
                      }),
                      (H.revert = function (se, He) {
                        if (!He) return H.kill(!0);
                        var ge = se !== !1 || !H.enabled,
                          Ie = tt;
                        ge !== H.isReverted &&
                          (ge &&
                            ((en = Math.max(Vt(), H.scroll.rec || 0)),
                            (Qi = H.progress),
                            (qs = S && S.progress())),
                          lr &&
                            [lr, xr, j, Sr].forEach(function (ui) {
                              return (ui.style.display = ge ? "none" : "block");
                            }),
                          ge && ((tt = H), H.update(ge)),
                          J &&
                            (!qr || !H.isActive) &&
                            (ge ? E0(J, Di, Is) : Ku(J, Di, Yr(J), ur)),
                          ge || H.update(ge),
                          (tt = Ie),
                          (H.isReverted = ge));
                      }),
                      (H.refresh = function (se, He, ge, Ie) {
                        if (!((tt || !H.enabled) && !He)) {
                          if (J && se && vt) {
                            ai(q, "scrollEnd", Lf);
                            return;
                          }
                          !Vi && ei && ei(H),
                            (tt = H),
                            Ki.tween &&
                              !ge &&
                              (Ki.tween.kill(), (Ki.tween = 0)),
                            Ge && Ge.pause(),
                            Bt && S && S.revert({ kill: !1 }).invalidate(),
                            H.isReverted || H.revert(!0, !0),
                            (H._subPinOffset = !1);
                          var ui = Os(),
                            We = rs(),
                            Nt = ye ? ye.duration() : at(be, ce),
                            Ji = jt <= 0.01,
                            xi = 0,
                            At = Ie || 0,
                            dt = It(ge) ? ge.end : x.end,
                            tn = x.endTrigger || ue,
                            Mt = It(ge)
                              ? ge.start
                              : x.start ||
                                (x.start === 0 || !ue
                                  ? 0
                                  : J
                                  ? "0 0"
                                  : "0 100%"),
                            Er = (H.pinnedContainer =
                              x.pinnedContainer && M(x.pinnedContainer, H)),
                            wn = (ue && Math.max(0, Pe.indexOf(H))) || 0,
                            Tr = wn,
                            Si,
                            Oi,
                            Hs,
                            gl,
                            zi,
                            ti,
                            _n,
                            ec,
                            Wf,
                            aa,
                            vn,
                            la,
                            wl;
                          for (
                            Gt &&
                            It(ge) &&
                            ((la = Q.getProperty(j, ce.p)),
                            (wl = Q.getProperty(Sr, ce.p)));
                            Tr--;

                          )
                            (ti = Pe[Tr]),
                              ti.end || ti.refresh(0, 1) || (tt = H),
                              (_n = ti.pin),
                              _n &&
                                (_n === ue || _n === J || _n === Er) &&
                                !ti.isReverted &&
                                (aa || (aa = []),
                                aa.unshift(ti),
                                ti.revert(!0, !0)),
                              ti !== Pe[Tr] && (wn--, Tr--);
                          for (
                            lt(Mt) && (Mt = Mt(H)),
                              Mt = Pn(Mt, "start", H),
                              Ze =
                                Rf(
                                  Mt,
                                  ue,
                                  ui,
                                  ce,
                                  Vt(),
                                  lr,
                                  j,
                                  H,
                                  We,
                                  Wt,
                                  ji,
                                  Nt,
                                  ye,
                                  H._startClamp && "_startClamp"
                                ) || (J ? -0.001 : 0),
                              lt(dt) && (dt = dt(H)),
                              Ee(dt) &&
                                !dt.indexOf("+=") &&
                                (~dt.indexOf(" ")
                                  ? (dt = (Ee(Mt) ? Mt.split(" ")[0] : "") + dt)
                                  : ((xi = al(dt.substr(2), ui)),
                                    (dt = Ee(Mt)
                                      ? Mt
                                      : (ye
                                          ? Q.utils.mapRange(
                                              0,
                                              ye.duration(),
                                              ye.scrollTrigger.start,
                                              ye.scrollTrigger.end,
                                              Ze
                                            )
                                          : Ze) + xi),
                                    (tn = ue))),
                              dt = Pn(dt, "end", H),
                              Ut =
                                Math.max(
                                  Ze,
                                  Rf(
                                    dt || (tn ? "100% 0" : Nt),
                                    tn,
                                    ui,
                                    ce,
                                    Vt() + xi,
                                    xr,
                                    Sr,
                                    H,
                                    We,
                                    Wt,
                                    ji,
                                    Nt,
                                    ye,
                                    H._endClamp && "_endClamp"
                                  )
                                ) || -0.001,
                              xi = 0,
                              Tr = wn;
                            Tr--;

                          )
                            (ti = Pe[Tr]),
                              (_n = ti.pin),
                              _n &&
                                ti.start - ti._pinPush <= Ze &&
                                !ye &&
                                ti.end > 0 &&
                                ((Si =
                                  ti.end -
                                  (H._startClamp
                                    ? Math.max(0, ti.start)
                                    : ti.start)),
                                ((_n === ue && ti.start - ti._pinPush < Ze) ||
                                  _n === Er) &&
                                  isNaN(Mt) &&
                                  (xi += Si * (1 - ti.progress)),
                                _n === J && (At += Si));
                          if (
                            ((Ze += xi),
                            (Ut += xi),
                            H._startClamp && (H._startClamp += xi),
                            H._endClamp &&
                              !Vi &&
                              ((H._endClamp = Ut || -0.001),
                              (Ut = Math.min(Ut, at(be, ce)))),
                            (jt = Ut - Ze || ((Ze -= 0.01) && 0.001)),
                            Ji &&
                              (Qi = Q.utils.clamp(
                                0,
                                1,
                                Q.utils.normalize(Ze, Ut, en)
                              )),
                            (H._pinPush = At),
                            lr &&
                              xi &&
                              ((Si = {}),
                              (Si[ce.a] = "+=" + xi),
                              Er && (Si[ce.p] = "-=" + Vt()),
                              Q.set([lr, xr], Si)),
                            J)
                          )
                            (Si = Yr(J)),
                              (gl = ce === O),
                              (Hs = Vt()),
                              (Rs = parseFloat(Zr(ce.a)) + At),
                              !Nt &&
                                Ut > 1 &&
                                ((vn = (Jt ? me.scrollingElement || Ve : be)
                                  .style),
                                (vn = {
                                  style: vn,
                                  value: vn["overflow" + ce.a.toUpperCase()],
                                }),
                                Jt &&
                                  Yr(ie)["overflow" + ce.a.toUpperCase()] !==
                                    "scroll" &&
                                  (vn.style["overflow" + ce.a.toUpperCase()] =
                                    "scroll")),
                              Ku(J, Di, Si),
                              (oa = fl(J)),
                              (Oi = Fn(J, !0)),
                              (ec = ji && re(be, gl ? I : O)()),
                              de &&
                                ((ur = [de + ce.os2, jt + At + vi]),
                                (ur.t = Di),
                                (Tr = de === ft ? Gu(J, ce) + jt + At : 0),
                                Tr && ur.push(ce.d, Tr + vi),
                                wo(ur),
                                Er &&
                                  Pe.forEach(function (ua) {
                                    ua.pin === Er &&
                                      ua.vars.pinSpacing !== !1 &&
                                      (ua._subPinOffset = !0);
                                  }),
                                ji && Vt(en)),
                              ji &&
                                ((zi = {
                                  top: Oi.top + (gl ? Hs - Ze : ec) + vi,
                                  left: Oi.left + (gl ? ec : Hs - Ze) + vi,
                                  boxSizing: "border-box",
                                  position: "fixed",
                                }),
                                (zi[ut] = zi["max" + $r] =
                                  Math.ceil(Oi.width) + vi),
                                (zi[oi] = zi["max" + Xu] =
                                  Math.ceil(Oi.height) + vi),
                                (zi[_i] =
                                  zi[_i + jr] =
                                  zi[_i + kn] =
                                  zi[_i + Fi] =
                                  zi[_i + is] =
                                    "0"),
                                (zi[ft] = Si[ft]),
                                (zi[ft + jr] = Si[ft + jr]),
                                (zi[ft + kn] = Si[ft + kn]),
                                (zi[ft + Fi] = Si[ft + Fi]),
                                (zi[ft + is] = Si[ft + is]),
                                (Bs = C0(Is, zi, qr)),
                                Vi && Vt(0)),
                              S
                                ? ((Wf = S._initted),
                                  Ot(1),
                                  S.render(S.duration(), !0, !0),
                                  (Bn = Zr(ce.a) - Rs + jt + At),
                                  (_o = Math.abs(jt - Bn) > 1),
                                  ji && _o && Bs.splice(Bs.length - 2, 2),
                                  S.render(0, !0, !0),
                                  Wf || S.invalidate(!0),
                                  S.parent || S.totalTime(S.totalTime()),
                                  Ot(0))
                                : (Bn = jt),
                              vn &&
                                (vn.value
                                  ? (vn.style["overflow" + ce.a.toUpperCase()] =
                                      vn.value)
                                  : vn.style.removeProperty(
                                      "overflow-" + ce.a
                                    ));
                          else if (ue && Vt() && !ye)
                            for (Oi = ue.parentNode; Oi && Oi !== ie; )
                              Oi._pinOffset &&
                                ((Ze -= Oi._pinOffset), (Ut -= Oi._pinOffset)),
                                (Oi = Oi.parentNode);
                          aa &&
                            aa.forEach(function (ua) {
                              return ua.revert(!1, !0);
                            }),
                            (H.start = Ze),
                            (H.end = Ut),
                            (ar = mn = Vi ? en : Vt()),
                            !ye &&
                              !Vi &&
                              (ar < en && Vt(en), (H.scroll.rec = 0)),
                            H.revert(!1, !0),
                            (zn = ot()),
                            Jr && ((Hr = -1), Jr.restart(!0)),
                            (tt = 0),
                            S &&
                              bi &&
                              (S._initted || qs) &&
                              S.progress() !== qs &&
                              S.progress(qs || 0, !0).render(S.time(), !0, !0),
                            (Ji || Qi !== H.progress || ye) &&
                              (S &&
                                !bi &&
                                S.totalProgress(
                                  ye && Ze < -0.001 && !Qi
                                    ? Q.utils.normalize(Ze, Ut, 0)
                                    : Qi,
                                  !0
                                ),
                              (H.progress =
                                Ji || (ar - Ze) / jt === Qi ? 0 : Qi)),
                            J &&
                              de &&
                              (Di._pinOffset = Math.round(H.progress * Bn)),
                            Ge && Ge.invalidate(),
                            isNaN(la) ||
                              ((la -= Q.getProperty(j, ce.p)),
                              (wl -= Q.getProperty(Sr, ce.p)),
                              hl(j, ce, la),
                              hl(lr, ce, la - (Ie || 0)),
                              hl(Sr, ce, wl),
                              hl(xr, ce, wl - (Ie || 0))),
                            Ji && !Vi && H.update(),
                            Ue && !Vi && !zs && ((zs = !0), Ue(H), (zs = !1));
                        }
                      }),
                      (H.getVelocity = function () {
                        return ((Vt() - mn) / (ot() - wt)) * 1e3 || 0;
                      }),
                      (H.endAnimation = function () {
                        ki(H.callbackAnimation),
                          S &&
                            (Ge
                              ? Ge.progress(1)
                              : S.paused()
                              ? bi || ki(S, H.direction < 0, 1)
                              : ki(S, S.reversed()));
                      }),
                      (H.labelToScroll = function (se) {
                        return (
                          (S &&
                            S.labels &&
                            (Ze || H.refresh() || Ze) +
                              (S.labels[se] / S.duration()) * jt) ||
                          0
                        );
                      }),
                      (H.getTrailing = function (se) {
                        var He = Pe.indexOf(H),
                          ge =
                            H.direction > 0
                              ? Pe.slice(0, He).reverse()
                              : Pe.slice(He + 1);
                        return (
                          Ee(se)
                            ? ge.filter(function (Ie) {
                                return Ie.vars.preventOverlaps === se;
                              })
                            : ge
                        ).filter(function (Ie) {
                          return H.direction > 0
                            ? Ie.end <= Ze
                            : Ie.start >= Ut;
                        });
                      }),
                      (H.update = function (se, He, ge) {
                        if (!(ye && !ge && !se)) {
                          var Ie = Vi === !0 ? en : H.scroll(),
                            ui = se ? 0 : (Ie - Ze) / jt,
                            We = ui < 0 ? 0 : ui > 1 ? 1 : ui || 0,
                            Nt = H.progress,
                            Ji,
                            xi,
                            At,
                            dt,
                            tn,
                            Mt,
                            Er,
                            wn;
                          if (
                            (He &&
                              ((mn = ar),
                              (ar = ye ? Vt() : Ie),
                              Te &&
                                ((os = ss),
                                (ss = S && !bi ? S.totalProgress() : We))),
                            ht &&
                              !We &&
                              J &&
                              !tt &&
                              !Rr &&
                              vt &&
                              Ze < Ie + ((Ie - mn) / (ot() - wt)) * ht &&
                              (We = 1e-4),
                            We !== Nt && H.enabled)
                          ) {
                            if (
                              ((Ji = H.isActive = !!We && We < 1),
                              (xi = !!Nt && Nt < 1),
                              (Mt = Ji !== xi),
                              (tn = Mt || !!We != !!Nt),
                              (H.direction = We > Nt ? 1 : -1),
                              (H.progress = We),
                              tn &&
                                !tt &&
                                ((At =
                                  We && !Nt
                                    ? 0
                                    : We === 1
                                    ? 1
                                    : Nt === 1
                                    ? 2
                                    : 3),
                                bi &&
                                  ((dt =
                                    (!Mt &&
                                      ct[At + 1] !== "none" &&
                                      ct[At + 1]) ||
                                    ct[At]),
                                  (wn =
                                    S &&
                                    (dt === "complete" ||
                                      dt === "reset" ||
                                      dt in S)))),
                              or &&
                                (Mt || wn) &&
                                (wn || je || !S) &&
                                (lt(or)
                                  ? or(H)
                                  : H.getTrailing(or).forEach(function (Hs) {
                                      return Hs.endAnimation();
                                    })),
                              bi ||
                                (Ge && !tt && !Rr
                                  ? (Ge._dp._time - Ge._start !== Ge._time &&
                                      Ge.render(Ge._dp._time - Ge._start),
                                    Ge.resetTo
                                      ? Ge.resetTo(
                                          "totalProgress",
                                          We,
                                          S._tTime / S._tDur
                                        )
                                      : ((Ge.vars.totalProgress = We),
                                        Ge.invalidate().restart()))
                                  : S &&
                                    S.totalProgress(We, !!(tt && (zn || se)))),
                              J)
                            ) {
                              if (
                                (se && de && (Di.style[de + ce.os2] = gn), !ji)
                              )
                                Qr(ee(Rs + Bn * We));
                              else if (tn) {
                                if (
                                  ((Er =
                                    !se &&
                                    We > Nt &&
                                    Ut + 1 > Ie &&
                                    Ie + 1 >= at(be, ce)),
                                  qr)
                                )
                                  if (!se && (Ji || Er)) {
                                    var Tr = Fn(J, !0),
                                      Si = Ie - Ze;
                                    Nf(
                                      J,
                                      ie,
                                      Tr.top + (ce === O ? Si : 0) + vi,
                                      Tr.left + (ce === O ? 0 : Si) + vi
                                    );
                                  } else Nf(J, Di);
                                wo(Ji || Er ? Bs : oa),
                                  (_o && We < 1 && Ji) ||
                                    Qr(Rs + (We === 1 && !Er ? Bn : 0));
                              }
                            }
                            Te && !Ki.tween && !tt && !Rr && Jr.restart(!0),
                              G &&
                                (Mt || (yi && We && (We < 1 || !Le))) &&
                                gt(G.targets).forEach(function (Hs) {
                                  return Hs.classList[
                                    Ji || yi ? "add" : "remove"
                                  ](G.className);
                                }),
                              U && !bi && !se && U(H),
                              tn && !tt
                                ? (bi &&
                                    (wn &&
                                      (dt === "complete"
                                        ? S.pause().totalProgress(1)
                                        : dt === "reset"
                                        ? S.restart(!0).pause()
                                        : dt === "restart"
                                        ? S.restart(!0)
                                        : S[dt]()),
                                    U && U(H)),
                                  (Mt || !Le) &&
                                    (ve && Mt && wi(H, ve),
                                    Zi[At] && wi(H, Zi[At]),
                                    yi &&
                                      (We === 1 ? H.kill(!1, 1) : (Zi[At] = 0)),
                                    Mt ||
                                      ((At = We === 1 ? 1 : 3),
                                      Zi[At] && wi(H, Zi[At]))),
                                  Ui &&
                                    !Ji &&
                                    Math.abs(H.getVelocity()) >
                                      (rt(Ui) ? Ui : 2500) &&
                                    (ki(H.callbackAnimation),
                                    Ge
                                      ? Ge.progress(1)
                                      : ki(S, dt === "reverse" ? 1 : !We, 1)))
                                : bi && U && !tt && U(H);
                          }
                          if (vo) {
                            var Oi = ye
                              ? (Ie / ye.duration()) * (ye._caScrollDist || 0)
                              : Ie;
                            Ns(Oi + (j._isFlipped ? 1 : 0)), vo(Oi);
                          }
                          yo &&
                            yo((-Ie / ye.duration()) * (ye._caScrollDist || 0));
                        }
                      }),
                      (H.enable = function (se, He) {
                        H.enabled ||
                          ((H.enabled = !0),
                          ai(be, "resize", na),
                          Jt || ai(be, "scroll", go),
                          ei && ai(q, "refreshInit", ei),
                          se !== !1 &&
                            ((H.progress = Qi = 0), (ar = mn = Hr = Vt())),
                          He !== !1 && H.refresh());
                      }),
                      (H.getTween = function (se) {
                        return se && Ki ? Ki.tween : Ge;
                      }),
                      (H.setPositions = function (se, He, ge, Ie) {
                        if (ye) {
                          var ui = ye.scrollTrigger,
                            We = ye.duration(),
                            Nt = ui.end - ui.start;
                          (se = ui.start + (Nt * se) / We),
                            (He = ui.start + (Nt * He) / We);
                        }
                        H.refresh(
                          !1,
                          !1,
                          {
                            start: Nr(se, ge && !!H._startClamp),
                            end: Nr(He, ge && !!H._endClamp),
                          },
                          Ie
                        ),
                          H.update();
                      }),
                      (H.adjustPinSpacing = function (se) {
                        if (ur && se) {
                          var He = ur.indexOf(ce.d) + 1;
                          (ur[He] = parseFloat(ur[He]) + se + vi),
                            (ur[1] = parseFloat(ur[1]) + se + vi),
                            wo(ur);
                        }
                      }),
                      (H.disable = function (se, He) {
                        if (
                          H.enabled &&
                          (se !== !1 && H.revert(!0, !0),
                          (H.enabled = H.isActive = !1),
                          He || (Ge && Ge.pause()),
                          (en = 0),
                          Li && (Li.uncache = 1),
                          ei && li(q, "refreshInit", ei),
                          Jr &&
                            (Jr.pause(),
                            Ki.tween && Ki.tween.kill() && (Ki.tween = 0)),
                          !Jt)
                        ) {
                          for (var ge = Pe.length; ge--; )
                            if (Pe[ge].scroller === be && Pe[ge] !== H) return;
                          li(be, "resize", na), Jt || li(be, "scroll", go);
                        }
                      }),
                      (H.kill = function (se, He) {
                        H.disable(se, He),
                          Ge && !He && Ge.kill(),
                          te && delete Vu[te];
                        var ge = Pe.indexOf(H);
                        ge >= 0 && Pe.splice(ge, 1),
                          ge === st && cl > 0 && st--,
                          (ge = 0),
                          Pe.forEach(function (Ie) {
                            return Ie.scroller === H.scroller && (ge = 1);
                          }),
                          ge || Vi || (H.scroll.rec = 0),
                          S &&
                            ((S.scrollTrigger = null),
                            se && S.revert({ kill: !1 }),
                            He || S.kill()),
                          lr &&
                            [lr, xr, j, Sr].forEach(function (Ie) {
                              return (
                                Ie.parentNode && Ie.parentNode.removeChild(Ie)
                              );
                            }),
                          sa === H && (sa = 0),
                          J &&
                            (Li && (Li.uncache = 1),
                            (ge = 0),
                            Pe.forEach(function (Ie) {
                              return Ie.pin === J && ge++;
                            }),
                            ge || (Li.spacer = 0)),
                          x.onKill && x.onKill(H);
                      }),
                      Pe.push(H),
                      H.enable(!1, !1),
                      Rn && Rn(H),
                      S && S.add && !jt)
                    ) {
                      var Ft = H.update;
                      (H.update = function () {
                        (H.update = Ft), Ze || Ut || H.refresh();
                      }),
                        Q.delayedCall(0.01, H.update),
                        (jt = 0.01),
                        (Ze = Ut = 0);
                    } else H.refresh();
                    J && S0();
                  }),
                  (q.register = function (x) {
                    return (
                      Ce ||
                        ((Q = x || fe()),
                        Oe() && window.document && q.enable(),
                        (Ce = br)),
                      Ce
                    );
                  }),
                  (q.defaults = function (x) {
                    if (x) for (var S in x) sl[S] = x[S];
                    return sl;
                  }),
                  (q.disable = function (x, S) {
                    (br = 0),
                      Pe.forEach(function (U) {
                        return U[S ? "kill" : "disable"](x);
                      }),
                      li(ae, "wheel", go),
                      li(me, "scroll", go),
                      clearInterval(Ht),
                      li(me, "touchcancel", Xe),
                      li(ie, "touchstart", Xe),
                      rl(li, me, "pointerdown,touchstart,mousedown", le),
                      rl(li, me, "pointerup,touchend,mouseup", qe),
                      et.kill(),
                      it(li);
                    for (var N = 0; N < D.length; N += 3)
                      nl(li, D[N], D[N + 1]), nl(li, D[N], D[N + 2]);
                  }),
                  (q.enable = function () {
                    if (
                      ((ae = window),
                      (me = document),
                      (Ve = me.documentElement),
                      (ie = me.body),
                      Q &&
                        ((gt = Q.utils.toArray),
                        (W = Q.utils.clamp),
                        (pn = Q.core.context || Xe),
                        (Ot = Q.core.suppressOverwrites || Xe),
                        (Ur = ae.history.scrollRestoration || "auto"),
                        (Zu = ae.pageYOffset),
                        Q.core.globals("ScrollTrigger", q),
                        ie))
                    ) {
                      (br = 1),
                        (Gi = document.createElement("div")),
                        (Gi.style.height = "100vh"),
                        (Gi.style.position = "absolute"),
                        Bf(),
                        De(),
                        Z.register(Q),
                        (q.isTouch = Z.isTouch),
                        (Xi =
                          Z.isTouch &&
                          /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                        ai(ae, "wheel", go),
                        (Me = [ae, me, Ve, ie]),
                        Q.matchMedia
                          ? ((q.matchMedia = function (te) {
                              var ve = Q.matchMedia(),
                                Ue;
                              for (Ue in te) ve.add(Ue, te[Ue]);
                              return ve;
                            }),
                            Q.addEventListener("matchMediaInit", function () {
                              return ju();
                            }),
                            Q.addEventListener("matchMediaRevert", function () {
                              return Of();
                            }),
                            Q.addEventListener("matchMedia", function () {
                              Ls(0, 1), ks("matchMedia");
                            }),
                            Q.matchMedia(
                              "(orientation: portrait)",
                              function () {
                                return Uu(), Uu;
                              }
                            ))
                          : console.warn("Requires GSAP 3.11.0 or later"),
                        Uu(),
                        ai(me, "scroll", go);
                      var x = ie.style,
                        S = x.borderTopStyle,
                        N = Q.core.Animation.prototype,
                        U,
                        G;
                      for (
                        N.revert ||
                          Object.defineProperty(N, "revert", {
                            value: function () {
                              return this.time(-0.01, !0);
                            },
                          }),
                          x.borderTopStyle = "solid",
                          U = Fn(ie),
                          O.m = Math.round(U.top + O.sc()) || 0,
                          I.m = Math.round(U.left + I.sc()) || 0,
                          S
                            ? (x.borderTopStyle = S)
                            : x.removeProperty("border-top-style"),
                          Ht = setInterval(Ff, 250),
                          Q.delayedCall(0.5, function () {
                            return (Rr = 0);
                          }),
                          ai(me, "touchcancel", Xe),
                          ai(ie, "touchstart", Xe),
                          rl(ai, me, "pointerdown,touchstart,mousedown", le),
                          rl(ai, me, "pointerup,touchend,mouseup", qe),
                          Hi = Q.utils.checkPrefix("transform"),
                          dl.push(Hi),
                          Ce = ot(),
                          et = Q.delayedCall(0.2, Ls).pause(),
                          Ye = [
                            me,
                            "visibilitychange",
                            function () {
                              var te = ae.innerWidth,
                                ve = ae.innerHeight;
                              me.hidden
                                ? ((Ir = te), (_t = ve))
                                : (Ir !== te || _t !== ve) && na();
                            },
                            me,
                            "DOMContentLoaded",
                            Ls,
                            ae,
                            "load",
                            Ls,
                            ae,
                            "resize",
                            na,
                          ],
                          it(ai),
                          Pe.forEach(function (te) {
                            return te.enable(0, 1);
                          }),
                          G = 0;
                        G < D.length;
                        G += 3
                      )
                        nl(li, D[G], D[G + 1]), nl(li, D[G], D[G + 2]);
                    }
                  }),
                  (q.config = function (x) {
                    "limitCallbacks" in x && (Le = !!x.limitCallbacks);
                    var S = x.syncInterval;
                    (S && clearInterval(Ht)) ||
                      ((Ht = S) && setInterval(Ff, S)),
                      "ignoreMobileResize" in x &&
                        (yr = q.isTouch === 1 && x.ignoreMobileResize),
                      "autoRefreshEvents" in x &&
                        (it(li) || it(ai, x.autoRefreshEvents || "none"),
                        (dn =
                          (x.autoRefreshEvents + "").indexOf("resize") === -1));
                  }),
                  (q.scrollerProxy = function (x, S) {
                    var N = M(x),
                      U = D.indexOf(N),
                      G = _e(N);
                    ~U && D.splice(U, G ? 6 : 2),
                      S &&
                        (G ? E.unshift(ae, S, ie, S, Ve, S) : E.unshift(N, S));
                  }),
                  (q.clearMatchMedia = function (x) {
                    Pe.forEach(function (S) {
                      return (
                        S._ctx && S._ctx.query === x && S._ctx.kill(!0, !0)
                      );
                    });
                  }),
                  (q.isInViewport = function (x, S, N) {
                    var U = (Ee(x) ? M(x) : x).getBoundingClientRect(),
                      G = U[N ? ut : oi] * S || 0;
                    return N
                      ? U.right - G > 0 && U.left + G < ae.innerWidth
                      : U.bottom - G > 0 && U.top + G < ae.innerHeight;
                  }),
                  (q.positionInViewport = function (x, S, N) {
                    Ee(x) && (x = M(x));
                    var U = x.getBoundingClientRect(),
                      G = U[N ? ut : oi],
                      te =
                        S == null
                          ? G / 2
                          : S in ol
                          ? ol[S] * G
                          : ~S.indexOf("%")
                          ? (parseFloat(S) * G) / 100
                          : parseFloat(S) || 0;
                    return N
                      ? (U.left + te) / ae.innerWidth
                      : (U.top + te) / ae.innerHeight;
                  }),
                  (q.killAll = function (x) {
                    if (
                      (Pe.slice(0).forEach(function (N) {
                        return N.vars.id !== "ScrollSmoother" && N.kill();
                      }),
                      x !== !0)
                    ) {
                      var S = Ps.killAll || [];
                      (Ps = {}),
                        S.forEach(function (N) {
                          return N();
                        });
                    }
                  }),
                  q
                );
              })();
            (ze.version = "3.12.2"),
              (ze.saveStyles = function (q) {
                return q
                  ? gt(q).forEach(function (y) {
                      if (y && y.style) {
                        var F = Dr.indexOf(y);
                        F >= 0 && Dr.splice(F, 5),
                          Dr.push(
                            y,
                            y.style.cssText,
                            y.getBBox && y.getAttribute("transform"),
                            Q.core.getCache(y),
                            pn()
                          );
                      }
                    })
                  : Dr;
              }),
              (ze.revert = function (q, y) {
                return ju(!q, y);
              }),
              (ze.create = function (q, y) {
                return new ze(q, y);
              }),
              (ze.refresh = function (q) {
                return q ? na() : (Ce || ze.register()) && Ls(!0);
              }),
              (ze.update = function (q) {
                return ++D.cache && Ln(q === !0 ? 2 : 0);
              }),
              (ze.clearScrollMemory = zf),
              (ze.maxScroll = function (q, y) {
                return at(q, y ? I : O);
              }),
              (ze.getScrollFunc = function (q, y) {
                return re(M(q), y ? I : O);
              }),
              (ze.getById = function (q) {
                return Vu[q];
              }),
              (ze.getAll = function () {
                return Pe.filter(function (q) {
                  return q.vars.id !== "ScrollSmoother";
                });
              }),
              (ze.isScrolling = function () {
                return !!vt;
              }),
              (ze.snapDirectional = Wu),
              (ze.addEventListener = function (q, y) {
                var F = Ps[q] || (Ps[q] = []);
                ~F.indexOf(y) || F.push(y);
              }),
              (ze.removeEventListener = function (q, y) {
                var F = Ps[q],
                  x = F && F.indexOf(y);
                x >= 0 && F.splice(x, 1);
              }),
              (ze.batch = function (q, y) {
                var F = [],
                  x = {},
                  S = y.interval || 0.016,
                  N = y.batchMax || 1e9,
                  U = function (ve, Ue) {
                    var je = [],
                      ue = [],
                      J = Q.delayedCall(S, function () {
                        Ue(je, ue), (je = []), (ue = []);
                      }).pause();
                    return function (de) {
                      je.length || J.restart(!0),
                        je.push(de.trigger),
                        ue.push(de),
                        N <= je.length && J.progress(1);
                    };
                  },
                  G;
                for (G in y)
                  x[G] =
                    G.substr(0, 2) === "on" && lt(y[G]) && G !== "onRefreshInit"
                      ? U(G, y[G])
                      : y[G];
                return (
                  lt(N) &&
                    ((N = N()),
                    ai(ze, "refresh", function () {
                      return (N = y.batchMax());
                    })),
                  gt(q).forEach(function (te) {
                    var ve = {};
                    for (G in x) ve[G] = x[G];
                    (ve.trigger = te), F.push(ze.create(ve));
                  }),
                  F
                );
              });
            var qf = function (y, F, x, S) {
                return (
                  F > S ? y(S) : F < 0 && y(0),
                  x > S ? (S - F) / (x - F) : x < 0 ? F / (F - x) : 1
                );
              },
              Ju = function q(y, F) {
                F === !0
                  ? y.style.removeProperty("touch-action")
                  : (y.style.touchAction =
                      F === !0
                        ? "auto"
                        : F
                        ? "pan-" + F + (Z.isTouch ? " pinch-zoom" : "")
                        : "none"),
                  y === Ve && q(ie, F);
              },
              ml = { auto: 1, scroll: 1 },
              M0 = function (y) {
                var F = y.event,
                  x = y.target,
                  S = y.axis,
                  N = (F.changedTouches ? F.changedTouches[0] : F).target,
                  U = N._gsap || Q.core.getCache(N),
                  G = ot(),
                  te;
                if (!U._isScrollT || G - U._isScrollT > 2e3) {
                  for (
                    ;
                    N &&
                    N !== ie &&
                    ((N.scrollHeight <= N.clientHeight &&
                      N.scrollWidth <= N.clientWidth) ||
                      !(ml[(te = Yr(N)).overflowY] || ml[te.overflowX]));

                  )
                    N = N.parentNode;
                  (U._isScroll =
                    N &&
                    N !== x &&
                    !_e(N) &&
                    (ml[(te = Yr(N)).overflowY] || ml[te.overflowX])),
                    (U._isScrollT = G);
                }
                (U._isScroll || S === "x") &&
                  (F.stopPropagation(), (F._gsapAllow = !0));
              },
              Hf = function (y, F, x, S) {
                return Z.create({
                  target: y,
                  capture: !0,
                  debounce: !1,
                  lockAxis: !0,
                  type: F,
                  onWheel: (S = S && M0),
                  onPress: S,
                  onDrag: S,
                  onScroll: S,
                  onEnable: function () {
                    return x && ai(me, Z.eventTypes[0], Gf, !1, !0);
                  },
                  onDisable: function () {
                    return li(me, Z.eventTypes[0], Gf, !0);
                  },
                });
              },
              P0 = /(input|label|select|textarea)/i,
              Xf,
              Gf = function (y) {
                var F = P0.test(y.target.tagName);
                (F || Xf) && ((y._gsapAllow = !0), (Xf = F));
              },
              k0 = function (y) {
                It(y) || (y = {}),
                  (y.preventDefault = y.isNormalizer = y.allowClicks = !0),
                  y.type || (y.type = "wheel,touch"),
                  (y.debounce = !!y.debounce),
                  (y.id = y.id || "normalizer");
                var F = y,
                  x = F.normalizeScrollX,
                  S = F.momentum,
                  N = F.allowNestedScroll,
                  U = F.onRelease,
                  G,
                  te,
                  ve = M(y.target) || Ve,
                  Ue = Q.core.globals().ScrollSmoother,
                  je = Ue && Ue.get(),
                  ue =
                    Xi &&
                    ((y.content && M(y.content)) ||
                      (je && y.content !== !1 && !je.smooth() && je.content())),
                  J = re(ve, O),
                  de = re(ve, I),
                  Bt = 1,
                  ht =
                    (Z.isTouch && ae.visualViewport
                      ? ae.visualViewport.scale * ae.visualViewport.width
                      : ae.outerWidth) / ae.innerWidth,
                  Kt = 0,
                  Ct = lt(S)
                    ? function () {
                        return S(G);
                      }
                    : function () {
                        return S || 2.8;
                      },
                  yi,
                  Te,
                  qr = Hf(ve, y.type, !0, N),
                  bt = function () {
                    return (Te = !1);
                  },
                  ye = Xe,
                  Ui = Xe,
                  or = function () {
                    (te = at(ve, O)),
                      (Ui = W(Xi ? 1 : 0, te)),
                      x && (ye = W(0, at(ve, I))),
                      (yi = Fs);
                  },
                  ce = function () {
                    (ue._gsap.y = ee(parseFloat(ue._gsap.y) + J.offset) + "px"),
                      (ue.style.transform =
                        "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        parseFloat(ue._gsap.y) +
                        ", 0, 1)"),
                      (J.offset = J.cacheID = 0);
                  },
                  bi = function () {
                    if (Te) {
                      requestAnimationFrame(bt);
                      var Gt = ee(G.deltaY / 2),
                        Wt = Ui(J.v - Gt);
                      if (ue && Wt !== J.v + J.offset) {
                        J.offset = Wt - J.v;
                        var H = ee(
                          (parseFloat(ue && ue._gsap.y) || 0) - J.offset
                        );
                        (ue.style.transform =
                          "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                          H +
                          ", 0, 1)"),
                          (ue._gsap.y = H + "px"),
                          (J.cacheID = D.cache),
                          Ln();
                      }
                      return !0;
                    }
                    J.offset && ce(), (Te = !0);
                  },
                  be,
                  On,
                  Jt,
                  ji,
                  Zi = function () {
                    or(),
                      be.isActive() &&
                        be.vars.scrollY > te &&
                        (J() > te
                          ? be.progress(1) && J(te)
                          : be.resetTo("scrollY", te));
                  };
                return (
                  ue && Q.set(ue, { y: "+=0" }),
                  (y.ignoreCheck = function (ct) {
                    return (
                      (Xi && ct.type === "touchmove" && bi()) ||
                      (Bt > 1.05 && ct.type !== "touchstart") ||
                      G.isGesturing ||
                      (ct.touches && ct.touches.length > 1)
                    );
                  }),
                  (y.onPress = function () {
                    Te = !1;
                    var ct = Bt;
                    (Bt = ee(
                      ((ae.visualViewport && ae.visualViewport.scale) || 1) / ht
                    )),
                      be.pause(),
                      ct !== Bt && Ju(ve, Bt > 1.01 ? !0 : x ? !1 : "x"),
                      (On = de()),
                      (Jt = J()),
                      or(),
                      (yi = Fs);
                  }),
                  (y.onRelease = y.onGestureStart =
                    function (ct, Gt) {
                      if ((J.offset && ce(), !Gt)) ji.restart(!0);
                      else {
                        D.cache++;
                        var Wt = Ct(),
                          H,
                          ei;
                        x &&
                          ((H = de()),
                          (ei = H + (Wt * 0.05 * -ct.velocityX) / 0.227),
                          (Wt *= qf(de, H, ei, at(ve, I))),
                          (be.vars.scrollX = ye(ei))),
                          (H = J()),
                          (ei = H + (Wt * 0.05 * -ct.velocityY) / 0.227),
                          (Wt *= qf(J, H, ei, at(ve, O))),
                          (be.vars.scrollY = Ui(ei)),
                          be.invalidate().duration(Wt).play(0.01),
                          ((Xi && be.vars.scrollY >= te) || H >= te - 1) &&
                            Q.to({}, { onUpdate: Zi, duration: Wt });
                      }
                      U && U(ct);
                    }),
                  (y.onWheel = function () {
                    be._ts && be.pause(),
                      ot() - Kt > 1e3 && ((yi = 0), (Kt = ot()));
                  }),
                  (y.onChange = function (ct, Gt, Wt, H, ei) {
                    if (
                      (Fs !== yi && or(),
                      Gt &&
                        x &&
                        de(
                          ye(
                            H[2] === Gt
                              ? On + (ct.startX - ct.x)
                              : de() + Gt - H[1]
                          )
                        ),
                      Wt)
                    ) {
                      J.offset && ce();
                      var Os = ei[2] === Wt,
                        rs = Os ? Jt + ct.startY - ct.y : J() + Wt - ei[1],
                        Hr = Ui(rs);
                      Os && rs !== Hr && (Jt += Hr - rs), J(Hr);
                    }
                    (Wt || Gt) && Ln();
                  }),
                  (y.onEnable = function () {
                    Ju(ve, x ? !1 : "x"),
                      ze.addEventListener("refresh", Zi),
                      ai(ae, "resize", Zi),
                      J.smooth &&
                        ((J.target.style.scrollBehavior = "auto"),
                        (J.smooth = de.smooth = !1)),
                      qr.enable();
                  }),
                  (y.onDisable = function () {
                    Ju(ve, !0),
                      li(ae, "resize", Zi),
                      ze.removeEventListener("refresh", Zi),
                      qr.kill();
                  }),
                  (y.lockAxis = y.lockAxis !== !1),
                  (G = new Z(y)),
                  (G.iOS = Xi),
                  Xi && !J() && J(1),
                  Xi && Q.ticker.add(Xe),
                  (ji = G._dc),
                  (be = Q.to(G, {
                    ease: "power4",
                    paused: !0,
                    scrollX: x ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    modifiers: {
                      scrollY: $f(J, J(), function () {
                        return be.pause();
                      }),
                    },
                    onUpdate: Ln,
                    onComplete: ji.vars.onComplete,
                  })),
                  G
                );
              };
            (ze.sort = function (q) {
              return Pe.sort(
                q ||
                  function (y, F) {
                    return (
                      (y.vars.refreshPriority || 0) * -1e6 +
                      y.start -
                      (F.start + (F.vars.refreshPriority || 0) * -1e6)
                    );
                  }
              );
            }),
              (ze.observe = function (q) {
                return new Z(q);
              }),
              (ze.normalizeScroll = function (q) {
                if (typeof q > "u") return Et;
                if (q === !0 && Et) return Et.enable();
                if (q === !1) return Et && Et.kill();
                var y = q instanceof Z ? q : k0(q);
                return (
                  Et && Et.target === y.target && Et.kill(),
                  _e(y.target) && (Et = y),
                  y
                );
              }),
              (ze.core = {
                _getVelocityProp: we,
                _inputObserver: Hf,
                _scrollers: D,
                _proxies: E,
                bridge: {
                  ss: function () {
                    vt || ks("scrollStart"), (vt = ot());
                  },
                  ref: function () {
                    return tt;
                  },
                },
              }),
              fe() && Q.registerPlugin(ze),
              (t.ScrollTrigger = ze),
              (t.default = ze),
              typeof window > "u" || window !== t
                ? Object.defineProperty(t, "__esModule", { value: !0 })
                : delete window.default;
          });
        })(Zo, Zo.exports)),
      Zo.exports
    );
  }
  var Qh = Zh();
  const Kh = Uh(Qh);
  function po(n, e) {
    $.registerPlugin(Kh),
      $.matchMedia().add("(min-width: 992px)", () => {
        $.to(n, {
          y: "60vh",
          ease: "none",
          scrollTrigger: {
            trigger: e,
            start: "bottom bottom",
            end: "bottom top",
            scrub: !0,
          },
        });
      });
  }
  $.registerPlugin(he, $e);
  function Jh() {
    const n = document.querySelector(".h-team__wrapper"),
      e = document.querySelector(".section--team");
    n && e && po(n, e);
    const t = document.querySelector(".h-text__wrapper"),
      i = document.querySelector(".section--h-text");
    t && i && po(t, i);
    let r = null,
      s = null;
    const o = () => {
      const g = document.querySelector(".h-text__title");
      g &&
        (r && r.revert(),
        s && s.kill(),
        (r = new $e(g, { type: "words" })),
        (s = $.from(r.words, {
          color: "#808080",
          ease: "none",
          duration: 0.1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".h-text__wrapper",
            start: "top center",
            end: "top top",
            scrub: !0,
          },
        })));
    };
    o();
    let a;
    window.addEventListener("resize", () => {
      clearTimeout(a),
        (a = setTimeout(() => {
          o(), he.refresh();
        }, 250));
    });
    const l = document.querySelector(".h-projects__col--right"),
      u = document.querySelector(".h-projects__circle"),
      c = document.querySelector(".h-projects__arrow"),
      h = document.querySelector(".h-projects__arrow--duplicate");
    if (!l || !u || !c || !h) return;
    $.set(h, { left: "50%", xPercent: -250, opacity: 0, duration: 0 }),
      l.addEventListener("mouseenter", () => {
        $.to(u, {
          backgroundColor: "white",
          color: "black",
          duration: 0.6,
          ease: "power2.out",
        }),
          $.to(c, {
            x: "6.25rem",
            duration: 0.7,
            opacity: 0,
            ease: "power2.out",
          }),
          $.to(h, {
            xPercent: -50,
            duration: 0.7,
            opacity: 1,
            ease: "power2.out",
          });
      }),
      l.addEventListener("mouseleave", () => {
        $.to(u, {
          backgroundColor: "transparent",
          color: "white",
          duration: 0.6,
          ease: "power2.out",
        }),
          $.to(c, { x: "0", duration: 0.7, opacity: 1, ease: "power2.out" }),
          $.to(h, {
            xPercent: -250,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
          });
      });
    const m = document.querySelector(".h-team__cta-wrapper"),
      p = document.querySelector(".h-team__cta-circle"),
      d = document.querySelector(".h-team__cta-arrow"),
      f = document.querySelector(".h-team__cta-arrow--duplicate");
    !m ||
      !p ||
      !d ||
      !f ||
      ($.set(f, { left: "50%", xPercent: -250, opacity: 0, duration: 0 }),
      m.addEventListener("mouseenter", () => {
        $.to(p, {
          backgroundColor: "white",
          color: "black",
          duration: 0.6,
          ease: "power2.out",
        }),
          $.to(d, {
            x: "6.25rem",
            duration: 0.7,
            opacity: 0,
            ease: "power2.out",
          }),
          $.to(f, {
            xPercent: -50,
            duration: 0.7,
            opacity: 1,
            ease: "power2.out",
          });
      }),
      m.addEventListener("mouseleave", () => {
        $.to(p, {
          backgroundColor: "black",
          color: "white",
          duration: 0.6,
          ease: "power2.out",
        }),
          $.to(d, { x: "0", duration: 0.7, opacity: 1, ease: "power2.out" }),
          $.to(f, {
            xPercent: -250,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
          });
      }));
  }
  function em() {
    let n = $.matchMedia(),
      e = 992;
    n.add(
      { isDesktop: `(min-width: ${e}px)`, isMobile: `(max-width: ${e - 1}px)` },
      (t) => {
        let { isDesktop: i } = t.conditions;
        const r = document.querySelector(".h-cursor__cursor"),
          s = document.querySelector(".h-hero__slider-wrapper"),
          o = document.querySelectorAll(".h-hero__cl-wrapper"),
          a = document.querySelector(".h-hero__wrapper");
        if (!r || o.length === 0 || !a) return;
        const l = $.quickTo(r, "x", { duration: 0.75, ease: "power2.out" }),
          u = $.quickTo(r, "y", { duration: 0.75, ease: "power2.out" }),
          c = () => {
            $.set(o, { clearProps: "all" });
            const g = o[0].offsetWidth;
            $.set(o[0], { left: 0 }), $.set(o[1], { left: g });
            const v = $.timeline({ repeat: -1, paused: !0 });
            return v.to(o, { x: -g, ease: "none", duration: i ? 45 : 20 }), v;
          },
          h = (g) => {
            l(g.clientX), u(g.clientY);
            const v = document.elementFromPoint(g.clientX, g.clientY);
            s.contains(v) &&
              $.to(r, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
          },
          m = () => {
            $.to(r, {
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          },
          p = () => {
            $.to(r, {
              opacity: 0,
              scale: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          };
        window.addEventListener("mousemove", h),
          s.addEventListener("mouseenter", m),
          s.addEventListener("mouseleave", p);
        let d = null;
        return (
          (() => {
            const g = a.querySelectorAll("img"),
              v = a.querySelectorAll("video"),
              _ = [...g, ...v];
            if (_.length === 0) {
              (d = c()), d.play();
              return;
            }
            let w = 0;
            const b = _.length,
              D = () => {
                w++, w === b && ((d = c()), d.play());
              };
            _.forEach((E) => {
              E.complete || E.readyState >= 3
                ? D()
                : (E.addEventListener("load", D, { once: !0 }),
                  E.addEventListener("loadeddata", D, { once: !0 }),
                  E.addEventListener("error", D, { once: !0 }));
            }),
              setTimeout(() => {
                d || ((d = c()), d.play());
              }, 5e3);
          })(),
          () => {
            window.removeEventListener("mousemove", h),
              s.removeEventListener("mouseenter", m),
              s.removeEventListener("mouseleave", p),
              d && d.kill();
          }
        );
      }
    );
  }
  function wf(n) {
    return (
      n !== null &&
      typeof n == "object" &&
      "constructor" in n &&
      n.constructor === Object
    );
  }
  function Fu(n, e) {
    n === void 0 && (n = {}),
      e === void 0 && (e = {}),
      Object.keys(e).forEach((t) => {
        typeof n[t] > "u"
          ? (n[t] = e[t])
          : wf(e[t]) &&
            wf(n[t]) &&
            Object.keys(e[t]).length > 0 &&
            Fu(n[t], e[t]);
      });
  }
  const _f = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return { initEvent() {} };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName() {
          return [];
        },
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function si() {
    const n = typeof document < "u" ? document : {};
    return Fu(n, _f), n;
  }
  const tm = {
    document: _f,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        },
      };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
      return {};
    },
    requestAnimationFrame(n) {
      return typeof setTimeout > "u" ? (n(), null) : setTimeout(n, 0);
    },
    cancelAnimationFrame(n) {
      typeof setTimeout > "u" || clearTimeout(n);
    },
  };
  function mt() {
    const n = typeof window < "u" ? window : {};
    return Fu(n, tm), n;
  }
  function Jn(n) {
    return (
      n === void 0 && (n = ""),
      n
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function im(n) {
    const e = n;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch {}
      try {
        delete e[t];
      } catch {}
    });
  }
  function Cs(n, e) {
    return e === void 0 && (e = 0), setTimeout(n, e);
  }
  function zr() {
    return Date.now();
  }
  function rm(n) {
    const e = mt();
    let t;
    return (
      e.getComputedStyle && (t = e.getComputedStyle(n, null)),
      !t && n.currentStyle && (t = n.currentStyle),
      t || (t = n.style),
      t
    );
  }
  function Lu(n, e) {
    e === void 0 && (e = "x");
    const t = mt();
    let i, r, s;
    const o = rm(n);
    return (
      t.WebKitCSSMatrix
        ? ((r = o.transform || o.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((a) => a.replace(",", "."))
              .join(", ")),
          (s = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
        : ((s =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = s.toString().split(","))),
      e === "x" &&
        (t.WebKitCSSMatrix
          ? (r = s.m41)
          : i.length === 16
          ? (r = parseFloat(i[12]))
          : (r = parseFloat(i[4]))),
      e === "y" &&
        (t.WebKitCSSMatrix
          ? (r = s.m42)
          : i.length === 16
          ? (r = parseFloat(i[13]))
          : (r = parseFloat(i[5]))),
      r || 0
    );
  }
  function Qo(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      n.constructor &&
      Object.prototype.toString.call(n).slice(8, -1) === "Object"
    );
  }
  function nm(n) {
    return typeof window < "u" && typeof window.HTMLElement < "u"
      ? n instanceof HTMLElement
      : n && (n.nodeType === 1 || n.nodeType === 11);
  }
  function _r() {
    const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !nm(i)) {
        const r = Object.keys(Object(i)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, o = r.length; s < o; s += 1) {
          const a = r[s],
            l = Object.getOwnPropertyDescriptor(i, a);
          l !== void 0 &&
            l.enumerable &&
            (Qo(n[a]) && Qo(i[a])
              ? i[a].__swiper__
                ? (n[a] = i[a])
                : _r(n[a], i[a])
              : !Qo(n[a]) && Qo(i[a])
              ? ((n[a] = {}), i[a].__swiper__ ? (n[a] = i[a]) : _r(n[a], i[a]))
              : (n[a] = i[a]));
        }
      }
    }
    return n;
  }
  function Ko(n, e, t) {
    n.style.setProperty(e, t);
  }
  function vf(n) {
    let { swiper: e, targetPosition: t, side: i } = n;
    const r = mt(),
      s = -e.translate;
    let o = null,
      a;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const u = t > s ? "next" : "prev",
      c = (m, p) => (u === "next" && m >= p) || (u === "prev" && m <= p),
      h = () => {
        (a = new Date().getTime()), o === null && (o = a);
        const m = Math.max(Math.min((a - o) / l, 1), 0),
          p = 0.5 - Math.cos(m * Math.PI) / 2;
        let d = s + p * (t - s);
        if ((c(d, t) && (d = t), e.wrapperEl.scrollTo({ [i]: d }), c(d, t))) {
          (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [i]: d });
            }),
            r.cancelAnimationFrame(e.cssModeFrameID);
          return;
        }
        e.cssModeFrameID = r.requestAnimationFrame(h);
      };
    h();
  }
  function As(n) {
    return (
      n.querySelector(".swiper-slide-transform") ||
      (n.shadowRoot && n.shadowRoot.querySelector(".swiper-slide-transform")) ||
      n
    );
  }
  function pi(n, e) {
    e === void 0 && (e = "");
    const t = mt(),
      i = [...n.children];
    return (
      t.HTMLSlotElement &&
        n instanceof HTMLSlotElement &&
        i.push(...n.assignedElements()),
      e ? i.filter((r) => r.matches(e)) : i
    );
  }
  function sm(n, e) {
    var i, r;
    const t = [e];
    for (; t.length > 0; ) {
      const s = t.shift();
      if (n === s) return !0;
      t.push(
        ...s.children,
        ...(((i = s.shadowRoot) == null ? void 0 : i.children) || []),
        ...(((r = s.assignedElements) == null ? void 0 : r.call(s)) || [])
      );
    }
  }
  function om(n, e) {
    const t = mt();
    let i = e.contains(n);
    return (
      !i &&
        t.HTMLSlotElement &&
        e instanceof HTMLSlotElement &&
        ((i = [...e.assignedElements()].includes(n)), i || (i = sm(n, e))),
      i
    );
  }
  function Za(n) {
    try {
      console.warn(n);
      return;
    } catch {}
  }
  function vr(n, e) {
    e === void 0 && (e = []);
    const t = document.createElement(n);
    return t.classList.add(...(Array.isArray(e) ? e : Jn(e))), t;
  }
  function Qa(n) {
    const e = mt(),
      t = si(),
      i = n.getBoundingClientRect(),
      r = t.body,
      s = n.clientTop || r.clientTop || 0,
      o = n.clientLeft || r.clientLeft || 0,
      a = n === e ? e.scrollY : n.scrollTop,
      l = n === e ? e.scrollX : n.scrollLeft;
    return { top: i.top + a - s, left: i.left + l - o };
  }
  function am(n, e) {
    const t = [];
    for (; n.previousElementSibling; ) {
      const i = n.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function lm(n, e) {
    const t = [];
    for (; n.nextElementSibling; ) {
      const i = n.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), (n = i);
    }
    return t;
  }
  function es(n, e) {
    return mt().getComputedStyle(n, null).getPropertyValue(e);
  }
  function Jo(n) {
    let e = n,
      t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Ms(n, e) {
    const t = [];
    let i = n.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), (i = i.parentElement);
    return t;
  }
  function ea(n, e) {
    function t(i) {
      i.target === n &&
        (e.call(n, i), n.removeEventListener("transitionend", t));
    }
    e && n.addEventListener("transitionend", t);
  }
  function Ou(n, e, t) {
    const i = mt();
    return (
      n[e === "width" ? "offsetWidth" : "offsetHeight"] +
      parseFloat(
        i
          .getComputedStyle(n, null)
          .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
      ) +
      parseFloat(
        i
          .getComputedStyle(n, null)
          .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
      )
    );
  }
  function Fe(n) {
    return (Array.isArray(n) ? n : [n]).filter((e) => !!e);
  }
  function Ka(n) {
    return (e) =>
      Math.abs(e) > 0 &&
      n.browser &&
      n.browser.need3dFix &&
      Math.abs(e) % 90 === 0
        ? e + 0.001
        : e;
  }
  let zu;
  function um() {
    const n = mt(),
      e = si();
    return {
      smoothScroll:
        e.documentElement &&
        e.documentElement.style &&
        "scrollBehavior" in e.documentElement.style,
      touch: !!(
        "ontouchstart" in n ||
        (n.DocumentTouch && e instanceof n.DocumentTouch)
      ),
    };
  }
  function yf() {
    return zu || (zu = um()), zu;
  }
  let Iu;
  function cm(n) {
    let { userAgent: e } = n === void 0 ? {} : n;
    const t = yf(),
      i = mt(),
      r = i.navigator.platform,
      s = e || i.navigator.userAgent,
      o = { ios: !1, android: !1 },
      a = i.screen.width,
      l = i.screen.height,
      u = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = s.match(/(iPad).*OS\s([\d_]+)/);
    const h = s.match(/(iPod)(.*OS\s([\d_]+))?/),
      m = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
      p = r === "Win32";
    let d = r === "MacIntel";
    const f = [
      "1024x1366",
      "1366x1024",
      "834x1194",
      "1194x834",
      "834x1112",
      "1112x834",
      "768x1024",
      "1024x768",
      "820x1180",
      "1180x820",
      "810x1080",
      "1080x810",
    ];
    return (
      !c &&
        d &&
        t.touch &&
        f.indexOf(`${a}x${l}`) >= 0 &&
        ((c = s.match(/(Version)\/([\d.]+)/)),
        c || (c = [0, 1, "13_0_0"]),
        (d = !1)),
      u && !p && ((o.os = "android"), (o.android = !0)),
      (c || m || h) && ((o.os = "ios"), (o.ios = !0)),
      o
    );
  }
  function bf(n) {
    return n === void 0 && (n = {}), Iu || (Iu = cm(n)), Iu;
  }
  let Bu;
  function dm() {
    const n = mt(),
      e = bf();
    let t = !1;
    function i() {
      const a = n.navigator.userAgent.toLowerCase();
      return (
        a.indexOf("safari") >= 0 &&
        a.indexOf("chrome") < 0 &&
        a.indexOf("android") < 0
      );
    }
    if (i()) {
      const a = String(n.navigator.userAgent);
      if (a.includes("Version/")) {
        const [l, u] = a
          .split("Version/")[1]
          .split(" ")[0]
          .split(".")
          .map((c) => Number(c));
        t = l < 16 || (l === 16 && u < 2);
      }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        n.navigator.userAgent
      ),
      s = i(),
      o = s || (r && e.ios);
    return {
      isSafari: t || s,
      needPerspectiveFix: t,
      need3dFix: o,
      isWebView: r,
    };
  }
  function fm() {
    return Bu || (Bu = dm()), Bu;
  }
  function pm(n) {
    let { swiper: e, on: t, emit: i } = n;
    const r = mt();
    let s = null,
      o = null;
    const a = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
      },
      l = () => {
        !e ||
          e.destroyed ||
          !e.initialized ||
          ((s = new ResizeObserver((h) => {
            o = r.requestAnimationFrame(() => {
              const { width: m, height: p } = e;
              let d = m,
                f = p;
              h.forEach((g) => {
                let { contentBoxSize: v, contentRect: _, target: w } = g;
                (w && w !== e.el) ||
                  ((d = _ ? _.width : (v[0] || v).inlineSize),
                  (f = _ ? _.height : (v[0] || v).blockSize));
              }),
                (d !== m || f !== p) && a();
            });
          })),
          s.observe(e.el));
      },
      u = () => {
        o && r.cancelAnimationFrame(o),
          s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
      },
      c = () => {
        !e || e.destroyed || !e.initialized || i("orientationchange");
      };
    t("init", () => {
      if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
        l();
        return;
      }
      r.addEventListener("resize", a),
        r.addEventListener("orientationchange", c);
    }),
      t("destroy", () => {
        u(),
          r.removeEventListener("resize", a),
          r.removeEventListener("orientationchange", c);
      });
  }
  function hm(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = [],
      o = mt(),
      a = function (c, h) {
        h === void 0 && (h = {});
        const m = o.MutationObserver || o.WebkitMutationObserver,
          p = new m((d) => {
            if (e.__preventObserver__) return;
            if (d.length === 1) {
              r("observerUpdate", d[0]);
              return;
            }
            const f = function () {
              r("observerUpdate", d[0]);
            };
            o.requestAnimationFrame
              ? o.requestAnimationFrame(f)
              : o.setTimeout(f, 0);
          });
        p.observe(c, {
          attributes: typeof h.attributes > "u" ? !0 : h.attributes,
          childList:
            e.isElement || (typeof h.childList > "u" ? !0 : h).childList,
          characterData: typeof h.characterData > "u" ? !0 : h.characterData,
        }),
          s.push(p);
      },
      l = () => {
        if (e.params.observer) {
          if (e.params.observeParents) {
            const c = Ms(e.hostEl);
            for (let h = 0; h < c.length; h += 1) a(c[h]);
          }
          a(e.hostEl, { childList: e.params.observeSlideChildren }),
            a(e.wrapperEl, { attributes: !1 });
        }
      },
      u = () => {
        s.forEach((c) => {
          c.disconnect();
        }),
          s.splice(0, s.length);
      };
    t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
      i("init", l),
      i("destroy", u);
  }
  var mm = {
    on(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const r = t ? "unshift" : "push";
      return (
        n.split(" ").forEach((s) => {
          i.eventsListeners[s] || (i.eventsListeners[s] = []),
            i.eventsListeners[s][r](e);
        }),
        i
      );
    },
    once(n, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      function r() {
        i.off(n, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
          o[a] = arguments[a];
        e.apply(i, o);
      }
      return (r.__emitterProxy = e), i.on(n, r, t);
    },
    onAny(n, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof n != "function") return t;
      const i = e ? "unshift" : "push";
      return (
        t.eventsAnyListeners.indexOf(n) < 0 && t.eventsAnyListeners[i](n), t
      );
    },
    offAny(n) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(n);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(n, e) {
      const t = this;
      return (
        !t.eventsListeners ||
          t.destroyed ||
          !t.eventsListeners ||
          n.split(" ").forEach((i) => {
            typeof e > "u"
              ? (t.eventsListeners[i] = [])
              : t.eventsListeners[i] &&
                t.eventsListeners[i].forEach((r, s) => {
                  (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                    t.eventsListeners[i].splice(s, 1);
                });
          }),
        t
      );
    },
    emit() {
      const n = this;
      if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
      let e, t, i;
      for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
        s[o] = arguments[o];
      return (
        typeof s[0] == "string" || Array.isArray(s[0])
          ? ((e = s[0]), (t = s.slice(1, s.length)), (i = n))
          : ((e = s[0].events), (t = s[0].data), (i = s[0].context || n)),
        t.unshift(i),
        (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
          n.eventsAnyListeners &&
            n.eventsAnyListeners.length &&
            n.eventsAnyListeners.forEach((u) => {
              u.apply(i, [l, ...t]);
            }),
            n.eventsListeners &&
              n.eventsListeners[l] &&
              n.eventsListeners[l].forEach((u) => {
                u.apply(i, t);
              });
        }),
        n
      );
    },
  };
  function gm() {
    const n = this;
    let e, t;
    const i = n.el;
    typeof n.params.width < "u" && n.params.width !== null
      ? (e = n.params.width)
      : (e = i.clientWidth),
      typeof n.params.height < "u" && n.params.height !== null
        ? (t = n.params.height)
        : (t = i.clientHeight),
      !((e === 0 && n.isHorizontal()) || (t === 0 && n.isVertical())) &&
        ((e =
          e -
          parseInt(es(i, "padding-left") || 0, 10) -
          parseInt(es(i, "padding-right") || 0, 10)),
        (t =
          t -
          parseInt(es(i, "padding-top") || 0, 10) -
          parseInt(es(i, "padding-bottom") || 0, 10)),
        Number.isNaN(e) && (e = 0),
        Number.isNaN(t) && (t = 0),
        Object.assign(n, {
          width: e,
          height: t,
          size: n.isHorizontal() ? e : t,
        }));
  }
  function wm() {
    const n = this;
    function e(C, R) {
      return parseFloat(C.getPropertyValue(n.getDirectionLabel(R)) || 0);
    }
    const t = n.params,
      { wrapperEl: i, slidesEl: r, size: s, rtlTranslate: o, wrongRTL: a } = n,
      l = n.virtual && t.virtual.enabled,
      u = l ? n.virtual.slides.length : n.slides.length,
      c = pi(r, `.${n.params.slideClass}, swiper-slide`),
      h = l ? n.virtual.slides.length : c.length;
    let m = [];
    const p = [],
      d = [];
    let f = t.slidesOffsetBefore;
    typeof f == "function" && (f = t.slidesOffsetBefore.call(n));
    let g = t.slidesOffsetAfter;
    typeof g == "function" && (g = t.slidesOffsetAfter.call(n));
    const v = n.snapGrid.length,
      _ = n.slidesGrid.length;
    let w = t.spaceBetween,
      b = -f,
      D = 0,
      E = 0;
    if (typeof s > "u") return;
    typeof w == "string" && w.indexOf("%") >= 0
      ? (w = (parseFloat(w.replace("%", "")) / 100) * s)
      : typeof w == "string" && (w = parseFloat(w)),
      (n.virtualSize = -w),
      c.forEach((C) => {
        o ? (C.style.marginLeft = "") : (C.style.marginRight = ""),
          (C.style.marginBottom = ""),
          (C.style.marginTop = "");
      }),
      t.centeredSlides &&
        t.cssMode &&
        (Ko(i, "--swiper-centered-offset-before", ""),
        Ko(i, "--swiper-centered-offset-after", ""));
    const T = t.grid && t.grid.rows > 1 && n.grid;
    T ? n.grid.initSlides(c) : n.grid && n.grid.unsetSlides();
    let P;
    const A =
      t.slidesPerView === "auto" &&
      t.breakpoints &&
      Object.keys(t.breakpoints).filter(
        (C) => typeof t.breakpoints[C].slidesPerView < "u"
      ).length > 0;
    for (let C = 0; C < h; C += 1) {
      P = 0;
      let R;
      if (
        (c[C] && (R = c[C]),
        T && n.grid.updateSlide(C, R, c),
        !(c[C] && es(R, "display") === "none"))
      ) {
        if (t.slidesPerView === "auto") {
          A && (c[C].style[n.getDirectionLabel("width")] = "");
          const k = getComputedStyle(R),
            L = R.style.transform,
            B = R.style.webkitTransform;
          if (
            (L && (R.style.transform = "none"),
            B && (R.style.webkitTransform = "none"),
            t.roundLengths)
          )
            P = n.isHorizontal() ? Ou(R, "width") : Ou(R, "height");
          else {
            const X = e(k, "width"),
              V = e(k, "padding-left"),
              z = e(k, "padding-right"),
              I = e(k, "margin-left"),
              O = e(k, "margin-right"),
              M = k.getPropertyValue("box-sizing");
            if (M && M === "border-box") P = X + I + O;
            else {
              const { clientWidth: re, offsetWidth: we } = R;
              P = X + V + z + I + O + (we - re);
            }
          }
          L && (R.style.transform = L),
            B && (R.style.webkitTransform = B),
            t.roundLengths && (P = Math.floor(P));
        } else
          (P = (s - (t.slidesPerView - 1) * w) / t.slidesPerView),
            t.roundLengths && (P = Math.floor(P)),
            c[C] && (c[C].style[n.getDirectionLabel("width")] = `${P}px`);
        c[C] && (c[C].swiperSlideSize = P),
          d.push(P),
          t.centeredSlides
            ? ((b = b + P / 2 + D / 2 + w),
              D === 0 && C !== 0 && (b = b - s / 2 - w),
              C === 0 && (b = b - s / 2 - w),
              Math.abs(b) < 1 / 1e3 && (b = 0),
              t.roundLengths && (b = Math.floor(b)),
              E % t.slidesPerGroup === 0 && m.push(b),
              p.push(b))
            : (t.roundLengths && (b = Math.floor(b)),
              (E - Math.min(n.params.slidesPerGroupSkip, E)) %
                n.params.slidesPerGroup ===
                0 && m.push(b),
              p.push(b),
              (b = b + P + w)),
          (n.virtualSize += P + w),
          (D = P),
          (E += 1);
      }
    }
    if (
      ((n.virtualSize = Math.max(n.virtualSize, s) + g),
      o &&
        a &&
        (t.effect === "slide" || t.effect === "coverflow") &&
        (i.style.width = `${n.virtualSize + w}px`),
      t.setWrapperSize &&
        (i.style[n.getDirectionLabel("width")] = `${n.virtualSize + w}px`),
      T && n.grid.updateWrapperSize(P, m),
      !t.centeredSlides)
    ) {
      const C = [];
      for (let R = 0; R < m.length; R += 1) {
        let k = m[R];
        t.roundLengths && (k = Math.floor(k)),
          m[R] <= n.virtualSize - s && C.push(k);
      }
      (m = C),
        Math.floor(n.virtualSize - s) - Math.floor(m[m.length - 1]) > 1 &&
          m.push(n.virtualSize - s);
    }
    if (l && t.loop) {
      const C = d[0] + w;
      if (t.slidesPerGroup > 1) {
        const R = Math.ceil(
            (n.virtual.slidesBefore + n.virtual.slidesAfter) / t.slidesPerGroup
          ),
          k = C * t.slidesPerGroup;
        for (let L = 0; L < R; L += 1) m.push(m[m.length - 1] + k);
      }
      for (
        let R = 0;
        R < n.virtual.slidesBefore + n.virtual.slidesAfter;
        R += 1
      )
        t.slidesPerGroup === 1 && m.push(m[m.length - 1] + C),
          p.push(p[p.length - 1] + C),
          (n.virtualSize += C);
    }
    if ((m.length === 0 && (m = [0]), w !== 0)) {
      const C =
        n.isHorizontal() && o
          ? "marginLeft"
          : n.getDirectionLabel("marginRight");
      c.filter((R, k) =>
        !t.cssMode || t.loop ? !0 : k !== c.length - 1
      ).forEach((R) => {
        R.style[C] = `${w}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let C = 0;
      d.forEach((k) => {
        C += k + (w || 0);
      }),
        (C -= w);
      const R = C > s ? C - s : 0;
      m = m.map((k) => (k <= 0 ? -f : k > R ? R + g : k));
    }
    if (t.centerInsufficientSlides) {
      let C = 0;
      d.forEach((k) => {
        C += k + (w || 0);
      }),
        (C -= w);
      const R = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (C + R < s) {
        const k = (s - C - R) / 2;
        m.forEach((L, B) => {
          m[B] = L - k;
        }),
          p.forEach((L, B) => {
            p[B] = L + k;
          });
      }
    }
    if (
      (Object.assign(n, {
        slides: c,
        snapGrid: m,
        slidesGrid: p,
        slidesSizesGrid: d,
      }),
      t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
    ) {
      Ko(i, "--swiper-centered-offset-before", `${-m[0]}px`),
        Ko(
          i,
          "--swiper-centered-offset-after",
          `${n.size / 2 - d[d.length - 1] / 2}px`
        );
      const C = -n.snapGrid[0],
        R = -n.slidesGrid[0];
      (n.snapGrid = n.snapGrid.map((k) => k + C)),
        (n.slidesGrid = n.slidesGrid.map((k) => k + R));
    }
    if (
      (h !== u && n.emit("slidesLengthChange"),
      m.length !== v &&
        (n.params.watchOverflow && n.checkOverflow(),
        n.emit("snapGridLengthChange")),
      p.length !== _ && n.emit("slidesGridLengthChange"),
      t.watchSlidesProgress && n.updateSlidesOffset(),
      n.emit("slidesUpdated"),
      !l && !t.cssMode && (t.effect === "slide" || t.effect === "fade"))
    ) {
      const C = `${t.containerModifierClass}backface-hidden`,
        R = n.el.classList.contains(C);
      h <= t.maxBackfaceHiddenSlides
        ? R || n.el.classList.add(C)
        : R && n.el.classList.remove(C);
    }
  }
  function _m(n) {
    const e = this,
      t = [],
      i = e.virtual && e.params.virtual.enabled;
    let r = 0,
      s;
    typeof n == "number"
      ? e.setTransition(n)
      : n === !0 && e.setTransition(e.params.speed);
    const o = (a) => (i ? e.slides[e.getSlideIndexByData(a)] : e.slides[a]);
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((a) => {
          t.push(a);
        });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const a = e.activeIndex + s;
          if (a > e.slides.length && !i) break;
          t.push(o(a));
        }
    else t.push(o(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
      if (typeof t[s] < "u") {
        const a = t[s].offsetHeight;
        r = a > r ? a : r;
      }
    (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
  }
  function vm() {
    const n = this,
      e = n.slides,
      t = n.isElement
        ? n.isHorizontal()
          ? n.wrapperEl.offsetLeft
          : n.wrapperEl.offsetTop
        : 0;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset =
        (n.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
        t -
        n.cssOverflowAdjustment();
  }
  const Df = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function ym(n) {
    n === void 0 && (n = (this && this.translate) || 0);
    const e = this,
      t = e.params,
      { slides: i, rtlTranslate: r, snapGrid: s } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -n;
    r && (o = n), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
    let a = t.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0
      ? (a = (parseFloat(a.replace("%", "")) / 100) * e.size)
      : typeof a == "string" && (a = parseFloat(a));
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l];
      let c = u.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (c -= i[0].swiperSlideOffset);
      const h =
          (o + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (u.swiperSlideSize + a),
        m =
          (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) /
          (u.swiperSlideSize + a),
        p = -(o - c),
        d = p + e.slidesSizesGrid[l],
        f = p >= 0 && p <= e.size - e.slidesSizesGrid[l],
        g =
          (p >= 0 && p < e.size - 1) ||
          (d > 1 && d <= e.size) ||
          (p <= 0 && d >= e.size);
      g && (e.visibleSlides.push(u), e.visibleSlidesIndexes.push(l)),
        Df(u, g, t.slideVisibleClass),
        Df(u, f, t.slideFullyVisibleClass),
        (u.progress = r ? -h : h),
        (u.originalProgress = r ? -m : m);
    }
  }
  function bm(n) {
    const e = this;
    if (typeof n > "u") {
      const c = e.rtlTranslate ? -1 : 1;
      n = (e && e.translate && e.translate * c) || 0;
    }
    const t = e.params,
      i = e.maxTranslate() - e.minTranslate();
    let { progress: r, isBeginning: s, isEnd: o, progressLoop: a } = e;
    const l = s,
      u = o;
    if (i === 0) (r = 0), (s = !0), (o = !0);
    else {
      r = (n - e.minTranslate()) / i;
      const c = Math.abs(n - e.minTranslate()) < 1,
        h = Math.abs(n - e.maxTranslate()) < 1;
      (s = c || r <= 0), (o = h || r >= 1), c && (r = 0), h && (r = 1);
    }
    if (t.loop) {
      const c = e.getSlideIndexByData(0),
        h = e.getSlideIndexByData(e.slides.length - 1),
        m = e.slidesGrid[c],
        p = e.slidesGrid[h],
        d = e.slidesGrid[e.slidesGrid.length - 1],
        f = Math.abs(n);
      f >= m ? (a = (f - m) / d) : (a = (f + d - p) / d), a > 1 && (a -= 1);
    }
    Object.assign(e, {
      progress: r,
      progressLoop: a,
      isBeginning: s,
      isEnd: o,
    }),
      (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
        e.updateSlidesProgress(n),
      s && !l && e.emit("reachBeginning toEdge"),
      o && !u && e.emit("reachEnd toEdge"),
      ((l && !s) || (u && !o)) && e.emit("fromEdge"),
      e.emit("progress", r);
  }
  const Ru = (n, e, t) => {
    e && !n.classList.contains(t)
      ? n.classList.add(t)
      : !e && n.classList.contains(t) && n.classList.remove(t);
  };
  function Dm() {
    const n = this,
      { slides: e, params: t, slidesEl: i, activeIndex: r } = n,
      s = n.virtual && t.virtual.enabled,
      o = n.grid && t.grid && t.grid.rows > 1,
      a = (h) => pi(i, `.${t.slideClass}${h}, swiper-slide${h}`)[0];
    let l, u, c;
    if (s)
      if (t.loop) {
        let h = r - n.virtual.slidesBefore;
        h < 0 && (h = n.virtual.slides.length + h),
          h >= n.virtual.slides.length && (h -= n.virtual.slides.length),
          (l = a(`[data-swiper-slide-index="${h}"]`));
      } else l = a(`[data-swiper-slide-index="${r}"]`);
    else
      o
        ? ((l = e.find((h) => h.column === r)),
          (c = e.find((h) => h.column === r + 1)),
          (u = e.find((h) => h.column === r - 1)))
        : (l = e[r]);
    l &&
      (o ||
        ((c = lm(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !c && (c = e[0]),
        (u = am(l, `.${t.slideClass}, swiper-slide`)[0]),
        t.loop && !u === 0 && (u = e[e.length - 1]))),
      e.forEach((h) => {
        Ru(h, h === l, t.slideActiveClass),
          Ru(h, h === c, t.slideNextClass),
          Ru(h, h === u, t.slidePrevClass);
      }),
      n.emitSlidesClasses();
  }
  const Ja = (n, e) => {
      if (!n || n.destroyed || !n.params) return;
      const t = () =>
          n.isElement ? "swiper-slide" : `.${n.params.slideClass}`,
        i = e.closest(t());
      if (i) {
        let r = i.querySelector(`.${n.params.lazyPreloaderClass}`);
        !r &&
          n.isElement &&
          (i.shadowRoot
            ? (r = i.shadowRoot.querySelector(
                `.${n.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                i.shadowRoot &&
                  ((r = i.shadowRoot.querySelector(
                    `.${n.params.lazyPreloaderClass}`
                  )),
                  r && r.remove());
              })),
          r && r.remove();
      }
    },
    Nu = (n, e) => {
      if (!n.slides[e]) return;
      const t = n.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    $u = (n) => {
      if (!n || n.destroyed || !n.params) return;
      let e = n.params.lazyPreloadPrevNext;
      const t = n.slides.length;
      if (!t || !e || e < 0) return;
      e = Math.min(e, t);
      const i =
          n.params.slidesPerView === "auto"
            ? n.slidesPerViewDynamic()
            : Math.ceil(n.params.slidesPerView),
        r = n.activeIndex;
      if (n.params.grid && n.params.grid.rows > 1) {
        const o = r,
          a = [o - e];
        a.push(...Array.from({ length: e }).map((l, u) => o + i + u)),
          n.slides.forEach((l, u) => {
            a.includes(l.column) && Nu(n, u);
          });
        return;
      }
      const s = r + i - 1;
      if (n.params.rewind || n.params.loop)
        for (let o = r - e; o <= s + e; o += 1) {
          const a = ((o % t) + t) % t;
          (a < r || a > s) && Nu(n, a);
        }
      else
        for (let o = Math.max(r - e, 0); o <= Math.min(s + e, t - 1); o += 1)
          o !== r && (o > s || o < r) && Nu(n, o);
    };
  function xm(n) {
    const { slidesGrid: e, params: t } = n,
      i = n.rtlTranslate ? n.translate : -n.translate;
    let r;
    for (let s = 0; s < e.length; s += 1)
      typeof e[s + 1] < "u"
        ? i >= e[s] && i < e[s + 1] - (e[s + 1] - e[s]) / 2
          ? (r = s)
          : i >= e[s] && i < e[s + 1] && (r = s + 1)
        : i >= e[s] && (r = s);
    return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
  }
  function Sm(n) {
    const e = this,
      t = e.rtlTranslate ? e.translate : -e.translate,
      {
        snapGrid: i,
        params: r,
        activeIndex: s,
        realIndex: o,
        snapIndex: a,
      } = e;
    let l = n,
      u;
    const c = (p) => {
      let d = p - e.virtual.slidesBefore;
      return (
        d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        d
      );
    };
    if ((typeof l > "u" && (l = xm(e)), i.indexOf(t) >= 0)) u = i.indexOf(t);
    else {
      const p = Math.min(r.slidesPerGroupSkip, l);
      u = p + Math.floor((l - p) / r.slidesPerGroup);
    }
    if ((u >= i.length && (u = i.length - 1), l === s && !e.params.loop)) {
      u !== a && ((e.snapIndex = u), e.emit("snapIndexChange"));
      return;
    }
    if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = c(l);
      return;
    }
    const h = e.grid && r.grid && r.grid.rows > 1;
    let m;
    if (e.virtual && r.virtual.enabled && r.loop) m = c(l);
    else if (h) {
      const p = e.slides.find((f) => f.column === l);
      let d = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(d) && (d = Math.max(e.slides.indexOf(p), 0)),
        (m = Math.floor(d / r.grid.rows));
    } else if (e.slides[l]) {
      const p = e.slides[l].getAttribute("data-swiper-slide-index");
      p ? (m = parseInt(p, 10)) : (m = l);
    } else m = l;
    Object.assign(e, {
      previousSnapIndex: a,
      snapIndex: u,
      previousRealIndex: o,
      realIndex: m,
      previousIndex: s,
      activeIndex: l,
    }),
      e.initialized && $u(e),
      e.emit("activeIndexChange"),
      e.emit("snapIndexChange"),
      (e.initialized || e.params.runCallbacksOnInit) &&
        (o !== m && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function Em(n, e) {
    const t = this,
      i = t.params;
    let r = n.closest(`.${i.slideClass}, swiper-slide`);
    !r &&
      t.isElement &&
      e &&
      e.length > 1 &&
      e.includes(n) &&
      [...e.slice(e.indexOf(n) + 1, e.length)].forEach((a) => {
        !r &&
          a.matches &&
          a.matches(`.${i.slideClass}, swiper-slide`) &&
          (r = a);
      });
    let s = !1,
      o;
    if (r) {
      for (let a = 0; a < t.slides.length; a += 1)
        if (t.slides[a] === r) {
          (s = !0), (o = a);
          break;
        }
    }
    if (r && s)
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              r.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = o);
    else {
      (t.clickedSlide = void 0), (t.clickedIndex = void 0);
      return;
    }
    i.slideToClickedSlide &&
      t.clickedIndex !== void 0 &&
      t.clickedIndex !== t.activeIndex &&
      t.slideToClickedSlide();
  }
  var Tm = {
    updateSize: gm,
    updateSlides: wm,
    updateAutoHeight: _m,
    updateSlidesOffset: vm,
    updateSlidesProgress: ym,
    updateProgress: bm,
    updateSlidesClasses: Dm,
    updateActiveIndex: Sm,
    updateClickedSlide: Em,
  };
  function Cm(n) {
    n === void 0 && (n = this.isHorizontal() ? "x" : "y");
    const e = this,
      { params: t, rtlTranslate: i, translate: r, wrapperEl: s } = e;
    if (t.virtualTranslate) return i ? -r : r;
    if (t.cssMode) return r;
    let o = Lu(s, n);
    return (o += e.cssOverflowAdjustment()), i && (o = -o), o || 0;
  }
  function Am(n, e) {
    const t = this,
      { rtlTranslate: i, params: r, wrapperEl: s, progress: o } = t;
    let a = 0,
      l = 0;
    const u = 0;
    t.isHorizontal() ? (a = i ? -n : n) : (l = n),
      r.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
      (t.previousTranslate = t.translate),
      (t.translate = t.isHorizontal() ? a : l),
      r.cssMode
        ? (s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
            ? -a
            : -l)
        : r.virtualTranslate ||
          (t.isHorizontal()
            ? (a -= t.cssOverflowAdjustment())
            : (l -= t.cssOverflowAdjustment()),
          (s.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`));
    let c;
    const h = t.maxTranslate() - t.minTranslate();
    h === 0 ? (c = 0) : (c = (n - t.minTranslate()) / h),
      c !== o && t.updateProgress(n),
      t.emit("setTranslate", t.translate, e);
  }
  function Mm() {
    return -this.snapGrid[0];
  }
  function Pm() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function km(n, e, t, i, r) {
    n === void 0 && (n = 0),
      e === void 0 && (e = this.params.speed),
      t === void 0 && (t = !0),
      i === void 0 && (i = !0);
    const s = this,
      { params: o, wrapperEl: a } = s;
    if (s.animating && o.preventInteractionOnTransition) return !1;
    const l = s.minTranslate(),
      u = s.maxTranslate();
    let c;
    if (
      (i && n > l ? (c = l) : i && n < u ? (c = u) : (c = n),
      s.updateProgress(c),
      o.cssMode)
    ) {
      const h = s.isHorizontal();
      if (e === 0) a[h ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!s.support.smoothScroll)
          return (
            vf({ swiper: s, targetPosition: -c, side: h ? "left" : "top" }), !0
          );
        a.scrollTo({ [h ? "left" : "top"]: -c, behavior: "smooth" });
      }
      return !0;
    }
    return (
      e === 0
        ? (s.setTransition(0),
          s.setTranslate(c),
          t && (s.emit("beforeTransitionStart", e, r), s.emit("transitionEnd")))
        : (s.setTransition(e),
          s.setTranslate(c),
          t &&
            (s.emit("beforeTransitionStart", e, r), s.emit("transitionStart")),
          s.animating ||
            ((s.animating = !0),
            s.onTranslateToWrapperTransitionEnd ||
              (s.onTranslateToWrapperTransitionEnd = function (m) {
                !s ||
                  s.destroyed ||
                  (m.target === this &&
                    (s.wrapperEl.removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd = null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    (s.animating = !1),
                    t && s.emit("transitionEnd")));
              }),
            s.wrapperEl.addEventListener(
              "transitionend",
              s.onTranslateToWrapperTransitionEnd
            ))),
      !0
    );
  }
  var Fm = {
    getTranslate: Cm,
    setTranslate: Am,
    minTranslate: Mm,
    maxTranslate: Pm,
    translateTo: km,
  };
  function Lm(n, e) {
    const t = this;
    t.params.cssMode ||
      ((t.wrapperEl.style.transitionDuration = `${n}ms`),
      (t.wrapperEl.style.transitionDelay = n === 0 ? "0ms" : "")),
      t.emit("setTransition", n, e);
  }
  function xf(n) {
    let { swiper: e, runCallbacks: t, direction: i, step: r } = n;
    const { activeIndex: s, previousIndex: o } = e;
    let a = i;
    if (
      (a || (s > o ? (a = "next") : s < o ? (a = "prev") : (a = "reset")),
      e.emit(`transition${r}`),
      t && s !== o)
    ) {
      if (a === "reset") {
        e.emit(`slideResetTransition${r}`);
        return;
      }
      e.emit(`slideChangeTransition${r}`),
        a === "next"
          ? e.emit(`slideNextTransition${r}`)
          : e.emit(`slidePrevTransition${r}`);
    }
  }
  function Om(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    i.cssMode ||
      (i.autoHeight && t.updateAutoHeight(),
      xf({ swiper: t, runCallbacks: n, direction: e, step: "Start" }));
  }
  function zm(n, e) {
    n === void 0 && (n = !0);
    const t = this,
      { params: i } = t;
    (t.animating = !1),
      !i.cssMode &&
        (t.setTransition(0),
        xf({ swiper: t, runCallbacks: n, direction: e, step: "End" }));
  }
  var Im = { setTransition: Lm, transitionStart: Om, transitionEnd: zm };
  function Bm(n, e, t, i, r) {
    n === void 0 && (n = 0),
      t === void 0 && (t = !0),
      typeof n == "string" && (n = parseInt(n, 10));
    const s = this;
    let o = n;
    o < 0 && (o = 0);
    const {
      params: a,
      snapGrid: l,
      slidesGrid: u,
      previousIndex: c,
      activeIndex: h,
      rtlTranslate: m,
      wrapperEl: p,
      enabled: d,
    } = s;
    if (
      (!d && !i && !r) ||
      s.destroyed ||
      (s.animating && a.preventInteractionOnTransition)
    )
      return !1;
    typeof e > "u" && (e = s.params.speed);
    const f = Math.min(s.params.slidesPerGroupSkip, o);
    let g = f + Math.floor((o - f) / s.params.slidesPerGroup);
    g >= l.length && (g = l.length - 1);
    const v = -l[g];
    if (a.normalizeSlideIndex)
      for (let D = 0; D < u.length; D += 1) {
        const E = -Math.floor(v * 100),
          T = Math.floor(u[D] * 100),
          P = Math.floor(u[D + 1] * 100);
        typeof u[D + 1] < "u"
          ? E >= T && E < P - (P - T) / 2
            ? (o = D)
            : E >= T && E < P && (o = D + 1)
          : E >= T && (o = D);
      }
    if (
      s.initialized &&
      o !== h &&
      ((!s.allowSlideNext &&
        (m
          ? v > s.translate && v > s.minTranslate()
          : v < s.translate && v < s.minTranslate())) ||
        (!s.allowSlidePrev &&
          v > s.translate &&
          v > s.maxTranslate() &&
          (h || 0) !== o))
    )
      return !1;
    o !== (c || 0) && t && s.emit("beforeSlideChangeStart"),
      s.updateProgress(v);
    let _;
    o > h ? (_ = "next") : o < h ? (_ = "prev") : (_ = "reset");
    const w = s.virtual && s.params.virtual.enabled;
    if (!(w && r) && ((m && -v === s.translate) || (!m && v === s.translate)))
      return (
        s.updateActiveIndex(o),
        a.autoHeight && s.updateAutoHeight(),
        s.updateSlidesClasses(),
        a.effect !== "slide" && s.setTranslate(v),
        _ !== "reset" && (s.transitionStart(t, _), s.transitionEnd(t, _)),
        !1
      );
    if (a.cssMode) {
      const D = s.isHorizontal(),
        E = m ? v : -v;
      if (e === 0)
        w &&
          ((s.wrapperEl.style.scrollSnapType = "none"),
          (s._immediateVirtual = !0)),
          w && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
            ? ((s._cssModeVirtualInitialSet = !0),
              requestAnimationFrame(() => {
                p[D ? "scrollLeft" : "scrollTop"] = E;
              }))
            : (p[D ? "scrollLeft" : "scrollTop"] = E),
          w &&
            requestAnimationFrame(() => {
              (s.wrapperEl.style.scrollSnapType = ""),
                (s._immediateVirtual = !1);
            });
      else {
        if (!s.support.smoothScroll)
          return (
            vf({ swiper: s, targetPosition: E, side: D ? "left" : "top" }), !0
          );
        p.scrollTo({ [D ? "left" : "top"]: E, behavior: "smooth" });
      }
      return !0;
    }
    return (
      s.setTransition(e),
      s.setTranslate(v),
      s.updateActiveIndex(o),
      s.updateSlidesClasses(),
      s.emit("beforeTransitionStart", e, i),
      s.transitionStart(t, _),
      e === 0
        ? s.transitionEnd(t, _)
        : s.animating ||
          ((s.animating = !0),
          s.onSlideToWrapperTransitionEnd ||
            (s.onSlideToWrapperTransitionEnd = function (E) {
              !s ||
                s.destroyed ||
                (E.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd = null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(t, _)));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onSlideToWrapperTransitionEnd
          )),
      !0
    );
  }
  function Rm(n, e, t, i) {
    n === void 0 && (n = 0),
      t === void 0 && (t = !0),
      typeof n == "string" && (n = parseInt(n, 10));
    const r = this;
    if (r.destroyed) return;
    typeof e > "u" && (e = r.params.speed);
    const s = r.grid && r.params.grid && r.params.grid.rows > 1;
    let o = n;
    if (r.params.loop)
      if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore;
      else {
        let a;
        if (s) {
          const m = o * r.params.grid.rows;
          a = r.slides.find(
            (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
          ).column;
        } else a = r.getSlideIndexByData(o);
        const l = s
            ? Math.ceil(r.slides.length / r.params.grid.rows)
            : r.slides.length,
          { centeredSlides: u } = r.params;
        let c = r.params.slidesPerView;
        c === "auto"
          ? (c = r.slidesPerViewDynamic())
          : ((c = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
            u && c % 2 === 0 && (c = c + 1));
        let h = l - a < c;
        if (
          (u && (h = h || a < Math.ceil(c / 2)),
          i && u && r.params.slidesPerView !== "auto" && !s && (h = !1),
          h)
        ) {
          const m = u
            ? a < r.activeIndex
              ? "prev"
              : "next"
            : a - r.activeIndex - 1 < r.params.slidesPerView
            ? "next"
            : "prev";
          r.loopFix({
            direction: m,
            slideTo: !0,
            activeSlideIndex: m === "next" ? a + 1 : a - l + 1,
            slideRealIndex: m === "next" ? r.realIndex : void 0,
          });
        }
        if (s) {
          const m = o * r.params.grid.rows;
          o = r.slides.find(
            (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
          ).column;
        } else o = r.getSlideIndexByData(o);
      }
    return (
      requestAnimationFrame(() => {
        r.slideTo(o, e, t, i);
      }),
      r
    );
  }
  function Nm(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      { enabled: r, params: s, animating: o } = i;
    if (!r || i.destroyed) return i;
    typeof n > "u" && (n = i.params.speed);
    let a = s.slidesPerGroup;
    s.slidesPerView === "auto" &&
      s.slidesPerGroup === 1 &&
      s.slidesPerGroupAuto &&
      (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const l = i.activeIndex < s.slidesPerGroupSkip ? 1 : a,
      u = i.virtual && s.virtual.enabled;
    if (s.loop) {
      if (o && !u && s.loopPreventsSliding) return !1;
      if (
        (i.loopFix({ direction: "next" }),
        (i._clientLeft = i.wrapperEl.clientLeft),
        i.activeIndex === i.slides.length - 1 && s.cssMode)
      )
        return (
          requestAnimationFrame(() => {
            i.slideTo(i.activeIndex + l, n, e, t);
          }),
          !0
        );
    }
    return s.rewind && i.isEnd
      ? i.slideTo(0, n, e, t)
      : i.slideTo(i.activeIndex + l, n, e, t);
  }
  function $m(n, e, t) {
    e === void 0 && (e = !0);
    const i = this,
      {
        params: r,
        snapGrid: s,
        slidesGrid: o,
        rtlTranslate: a,
        enabled: l,
        animating: u,
      } = i;
    if (!l || i.destroyed) return i;
    typeof n > "u" && (n = i.params.speed);
    const c = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (u && !c && r.loopPreventsSliding) return !1;
      i.loopFix({ direction: "prev" }),
        (i._clientLeft = i.wrapperEl.clientLeft);
    }
    const h = a ? i.translate : -i.translate;
    function m(v) {
      return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v);
    }
    const p = m(h),
      d = s.map((v) => m(v));
    let f = s[d.indexOf(p) - 1];
    if (typeof f > "u" && r.cssMode) {
      let v;
      s.forEach((_, w) => {
        p >= _ && (v = w);
      }),
        typeof v < "u" && (f = s[v > 0 ? v - 1 : v]);
    }
    let g = 0;
    if (
      (typeof f < "u" &&
        ((g = o.indexOf(f)),
        g < 0 && (g = i.activeIndex - 1),
        r.slidesPerView === "auto" &&
          r.slidesPerGroup === 1 &&
          r.slidesPerGroupAuto &&
          ((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
          (g = Math.max(g, 0)))),
      r.rewind && i.isBeginning)
    ) {
      const v =
        i.params.virtual && i.params.virtual.enabled && i.virtual
          ? i.virtual.slides.length - 1
          : i.slides.length - 1;
      return i.slideTo(v, n, e, t);
    } else if (r.loop && i.activeIndex === 0 && r.cssMode)
      return (
        requestAnimationFrame(() => {
          i.slideTo(g, n, e, t);
        }),
        !0
      );
    return i.slideTo(g, n, e, t);
  }
  function Ym(n, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return (
        typeof n > "u" && (n = i.params.speed),
        i.slideTo(i.activeIndex, n, e, t)
      );
  }
  function qm(n, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const r = this;
    if (r.destroyed) return;
    typeof n > "u" && (n = r.params.speed);
    let s = r.activeIndex;
    const o = Math.min(r.params.slidesPerGroupSkip, s),
      a = o + Math.floor((s - o) / r.params.slidesPerGroup),
      l = r.rtlTranslate ? r.translate : -r.translate;
    if (l >= r.snapGrid[a]) {
      const u = r.snapGrid[a],
        c = r.snapGrid[a + 1];
      l - u > (c - u) * i && (s += r.params.slidesPerGroup);
    } else {
      const u = r.snapGrid[a - 1],
        c = r.snapGrid[a];
      l - u <= (c - u) * i && (s -= r.params.slidesPerGroup);
    }
    return (
      (s = Math.max(s, 0)),
      (s = Math.min(s, r.slidesGrid.length - 1)),
      r.slideTo(s, n, e, t)
    );
  }
  function Hm() {
    const n = this;
    if (n.destroyed) return;
    const { params: e, slidesEl: t } = n,
      i =
        e.slidesPerView === "auto" ? n.slidesPerViewDynamic() : e.slidesPerView;
    let r = n.clickedIndex,
      s;
    const o = n.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (n.animating) return;
      (s = parseInt(
        n.clickedSlide.getAttribute("data-swiper-slide-index"),
        10
      )),
        e.centeredSlides
          ? r < n.loopedSlides - i / 2 ||
            r > n.slides.length - n.loopedSlides + i / 2
            ? (n.loopFix(),
              (r = n.getSlideIndex(
                pi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
              )),
              Cs(() => {
                n.slideTo(r);
              }))
            : n.slideTo(r)
          : r > n.slides.length - i
          ? (n.loopFix(),
            (r = n.getSlideIndex(
              pi(t, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            Cs(() => {
              n.slideTo(r);
            }))
          : n.slideTo(r);
    } else n.slideTo(r);
  }
  var Xm = {
    slideTo: Bm,
    slideToLoop: Rm,
    slideNext: Nm,
    slidePrev: $m,
    slideReset: Ym,
    slideToClosest: qm,
    slideToClickedSlide: Hm,
  };
  function Gm(n) {
    const e = this,
      { params: t, slidesEl: i } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    const r = () => {
        pi(i, `.${t.slideClass}, swiper-slide`).forEach((h, m) => {
          h.setAttribute("data-swiper-slide-index", m);
        });
      },
      s = e.grid && t.grid && t.grid.rows > 1,
      o = t.slidesPerGroup * (s ? t.grid.rows : 1),
      a = e.slides.length % o !== 0,
      l = s && e.slides.length % t.grid.rows !== 0,
      u = (c) => {
        for (let h = 0; h < c; h += 1) {
          const m = e.isElement
            ? vr("swiper-slide", [t.slideBlankClass])
            : vr("div", [t.slideClass, t.slideBlankClass]);
          e.slidesEl.append(m);
        }
      };
    if (a) {
      if (t.loopAddBlankSlides) {
        const c = o - (e.slides.length % o);
        u(c), e.recalcSlides(), e.updateSlides();
      } else
        Za(
          "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else if (l) {
      if (t.loopAddBlankSlides) {
        const c = t.grid.rows - (e.slides.length % t.grid.rows);
        u(c), e.recalcSlides(), e.updateSlides();
      } else
        Za(
          "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
        );
      r();
    } else r();
    e.loopFix({
      slideRealIndex: n,
      direction: t.centeredSlides ? void 0 : "next",
    });
  }
  function Wm(n) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: r,
      activeSlideIndex: s,
      byController: o,
      byMousewheel: a,
    } = n === void 0 ? {} : n;
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const {
        slides: u,
        allowSlidePrev: c,
        allowSlideNext: h,
        slidesEl: m,
        params: p,
      } = l,
      { centeredSlides: d } = p;
    if (
      ((l.allowSlidePrev = !0),
      (l.allowSlideNext = !0),
      l.virtual && p.virtual.enabled)
    ) {
      t &&
        (!p.centeredSlides && l.snapIndex === 0
          ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
          : p.centeredSlides && l.snapIndex < p.slidesPerView
          ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
          : l.snapIndex === l.snapGrid.length - 1 &&
            l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
        (l.allowSlidePrev = c),
        (l.allowSlideNext = h),
        l.emit("loopFix");
      return;
    }
    let f = p.slidesPerView;
    f === "auto"
      ? (f = l.slidesPerViewDynamic())
      : ((f = Math.ceil(parseFloat(p.slidesPerView, 10))),
        d && f % 2 === 0 && (f = f + 1));
    const g = p.slidesPerGroupAuto ? f : p.slidesPerGroup;
    let v = g;
    v % g !== 0 && (v += g - (v % g)),
      (v += p.loopAdditionalSlides),
      (l.loopedSlides = v);
    const _ = l.grid && p.grid && p.grid.rows > 1;
    u.length < f + v
      ? Za(
          "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
        )
      : _ &&
        p.grid.fill === "row" &&
        Za(
          "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
        );
    const w = [],
      b = [];
    let D = l.activeIndex;
    typeof s > "u"
      ? (s = l.getSlideIndex(
          u.find((L) => L.classList.contains(p.slideActiveClass))
        ))
      : (D = s);
    const E = i === "next" || !i,
      T = i === "prev" || !i;
    let P = 0,
      A = 0;
    const C = _ ? Math.ceil(u.length / p.grid.rows) : u.length,
      k = (_ ? u[s].column : s) + (d && typeof r > "u" ? -f / 2 + 0.5 : 0);
    if (k < v) {
      P = Math.max(v - k, g);
      for (let L = 0; L < v - k; L += 1) {
        const B = L - Math.floor(L / C) * C;
        if (_) {
          const X = C - B - 1;
          for (let V = u.length - 1; V >= 0; V -= 1)
            u[V].column === X && w.push(V);
        } else w.push(C - B - 1);
      }
    } else if (k + f > C - v) {
      A = Math.max(k - (C - v * 2), g);
      for (let L = 0; L < A; L += 1) {
        const B = L - Math.floor(L / C) * C;
        _
          ? u.forEach((X, V) => {
              X.column === B && b.push(V);
            })
          : b.push(B);
      }
    }
    if (
      ((l.__preventObserver__ = !0),
      requestAnimationFrame(() => {
        l.__preventObserver__ = !1;
      }),
      T &&
        w.forEach((L) => {
          (u[L].swiperLoopMoveDOM = !0),
            m.prepend(u[L]),
            (u[L].swiperLoopMoveDOM = !1);
        }),
      E &&
        b.forEach((L) => {
          (u[L].swiperLoopMoveDOM = !0),
            m.append(u[L]),
            (u[L].swiperLoopMoveDOM = !1);
        }),
      l.recalcSlides(),
      p.slidesPerView === "auto"
        ? l.updateSlides()
        : _ &&
          ((w.length > 0 && T) || (b.length > 0 && E)) &&
          l.slides.forEach((L, B) => {
            l.grid.updateSlide(B, L, l.slides);
          }),
      p.watchSlidesProgress && l.updateSlidesOffset(),
      t)
    ) {
      if (w.length > 0 && T) {
        if (typeof e > "u") {
          const L = l.slidesGrid[D],
            X = l.slidesGrid[D + P] - L;
          a
            ? l.setTranslate(l.translate - X)
            : (l.slideTo(D + Math.ceil(P), 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - X),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - X)));
        } else if (r) {
          const L = _ ? w.length / p.grid.rows : w.length;
          l.slideTo(l.activeIndex + L, 0, !1, !0),
            (l.touchEventsData.currentTranslate = l.translate);
        }
      } else if (b.length > 0 && E)
        if (typeof e > "u") {
          const L = l.slidesGrid[D],
            X = l.slidesGrid[D - A] - L;
          a
            ? l.setTranslate(l.translate - X)
            : (l.slideTo(D - A, 0, !1, !0),
              r &&
                ((l.touchEventsData.startTranslate =
                  l.touchEventsData.startTranslate - X),
                (l.touchEventsData.currentTranslate =
                  l.touchEventsData.currentTranslate - X)));
        } else {
          const L = _ ? b.length / p.grid.rows : b.length;
          l.slideTo(l.activeIndex - L, 0, !1, !0);
        }
    }
    if (
      ((l.allowSlidePrev = c),
      (l.allowSlideNext = h),
      l.controller && l.controller.control && !o)
    ) {
      const L = {
        slideRealIndex: e,
        direction: i,
        setTranslate: r,
        activeSlideIndex: s,
        byController: !0,
      };
      Array.isArray(l.controller.control)
        ? l.controller.control.forEach((B) => {
            !B.destroyed &&
              B.params.loop &&
              B.loopFix({
                ...L,
                slideTo: B.params.slidesPerView === p.slidesPerView ? t : !1,
              });
          })
        : l.controller.control instanceof l.constructor &&
          l.controller.control.params.loop &&
          l.controller.control.loopFix({
            ...L,
            slideTo:
              l.controller.control.params.slidesPerView === p.slidesPerView
                ? t
                : !1,
          });
    }
    l.emit("loopFix");
  }
  function Vm() {
    const n = this,
      { params: e, slidesEl: t } = n;
    if (!e.loop || (n.virtual && n.params.virtual.enabled)) return;
    n.recalcSlides();
    const i = [];
    n.slides.forEach((r) => {
      const s =
        typeof r.swiperSlideIndex > "u"
          ? r.getAttribute("data-swiper-slide-index") * 1
          : r.swiperSlideIndex;
      i[s] = r;
    }),
      n.slides.forEach((r) => {
        r.removeAttribute("data-swiper-slide-index");
      }),
      i.forEach((r) => {
        t.append(r);
      }),
      n.recalcSlides(),
      n.slideTo(n.realIndex, 0);
  }
  var Um = { loopCreate: Gm, loopFix: Wm, loopDestroy: Vm };
  function jm(n) {
    const e = this;
    if (
      !e.params.simulateTouch ||
      (e.params.watchOverflow && e.isLocked) ||
      e.params.cssMode
    )
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0),
      (t.style.cursor = "move"),
      (t.style.cursor = n ? "grabbing" : "grab"),
      e.isElement &&
        requestAnimationFrame(() => {
          e.__preventObserver__ = !1;
        });
  }
  function Zm() {
    const n = this;
    (n.params.watchOverflow && n.isLocked) ||
      n.params.cssMode ||
      (n.isElement && (n.__preventObserver__ = !0),
      (n[
        n.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
      ].style.cursor = ""),
      n.isElement &&
        requestAnimationFrame(() => {
          n.__preventObserver__ = !1;
        }));
  }
  var Qm = { setGrabCursor: jm, unsetGrabCursor: Zm };
  function Km(n, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === si() || i === mt()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const r = i.closest(n);
      return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
    }
    return t(e);
  }
  function Sf(n, e, t) {
    const i = mt(),
      { params: r } = n,
      s = r.edgeSwipeDetection,
      o = r.edgeSwipeThreshold;
    return s && (t <= o || t >= i.innerWidth - o)
      ? s === "prevent"
        ? (e.preventDefault(), !0)
        : !1
      : !0;
  }
  function Jm(n) {
    const e = this,
      t = si();
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    const r = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== i.pointerId) return;
      r.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      Sf(e, i, i.targetTouches[0].pageX);
      return;
    }
    const { params: s, touches: o, enabled: a } = e;
    if (
      !a ||
      (!s.simulateTouch && i.pointerType === "mouse") ||
      (e.animating && s.preventInteractionOnTransition)
    )
      return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let l = i.target;
    if (
      (s.touchEventsTarget === "wrapper" && !om(l, e.wrapperEl)) ||
      ("which" in i && i.which === 3) ||
      ("button" in i && i.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const u = !!s.noSwipingClass && s.noSwipingClass !== "",
      c = i.composedPath ? i.composedPath() : i.path;
    u && i.target && i.target.shadowRoot && c && (l = c[0]);
    const h = s.noSwipingSelector
        ? s.noSwipingSelector
        : `.${s.noSwipingClass}`,
      m = !!(i.target && i.target.shadowRoot);
    if (s.noSwiping && (m ? Km(h, l) : l.closest(h))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
    (o.currentX = i.pageX), (o.currentY = i.pageY);
    const p = o.currentX,
      d = o.currentY;
    if (!Sf(e, i, p)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (o.startX = p),
      (o.startY = d),
      (r.touchStartTime = zr()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      s.threshold > 0 && (r.allowThresholdMove = !1);
    let f = !0;
    l.matches(r.focusableElements) &&
      ((f = !1), l.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== l &&
        (i.pointerType === "mouse" ||
          (i.pointerType !== "mouse" && !l.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const g = f && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || g) &&
      !l.isContentEditable &&
      i.preventDefault(),
      s.freeMode &&
        s.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !s.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", i);
  }
  function eg(n) {
    const e = si(),
      t = this,
      i = t.touchEventsData,
      { params: r, touches: s, rtlTranslate: o, enabled: a } = t;
    if (!a || (!r.simulateTouch && n.pointerType === "mouse")) return;
    let l = n;
    if (
      (l.originalEvent && (l = l.originalEvent),
      l.type === "pointermove" &&
        (i.touchId !== null || l.pointerId !== i.pointerId))
    )
      return;
    let u;
    if (l.type === "touchmove") {
      if (
        ((u = [...l.changedTouches].find((D) => D.identifier === i.touchId)),
        !u || u.identifier !== i.touchId)
      )
        return;
    } else u = l;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l);
      return;
    }
    const c = u.pageX,
      h = u.pageY;
    if (l.preventedByNestedSwiper) {
      (s.startX = c), (s.startY = h);
      return;
    }
    if (!t.allowTouchMove) {
      l.target.matches(i.focusableElements) || (t.allowClick = !1),
        i.isTouched &&
          (Object.assign(s, { startX: c, startY: h, currentX: c, currentY: h }),
          (i.touchStartTime = zr()));
      return;
    }
    if (r.touchReleaseOnEdges && !r.loop) {
      if (t.isVertical()) {
        if (
          (h < s.startY && t.translate <= t.maxTranslate()) ||
          (h > s.startY && t.translate >= t.minTranslate())
        ) {
          (i.isTouched = !1), (i.isMoved = !1);
          return;
        }
      } else if (
        (c < s.startX && t.translate <= t.maxTranslate()) ||
        (c > s.startX && t.translate >= t.minTranslate())
      )
        return;
    }
    if (
      (e.activeElement &&
        e.activeElement.matches(i.focusableElements) &&
        e.activeElement !== l.target &&
        l.pointerType !== "mouse" &&
        e.activeElement.blur(),
      e.activeElement &&
        l.target === e.activeElement &&
        l.target.matches(i.focusableElements))
    ) {
      (i.isMoved = !0), (t.allowClick = !1);
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", l),
      (s.previousX = s.currentX),
      (s.previousY = s.currentY),
      (s.currentX = c),
      (s.currentY = h);
    const m = s.currentX - s.startX,
      p = s.currentY - s.startY;
    if (t.params.threshold && Math.sqrt(m ** 2 + p ** 2) < t.params.threshold)
      return;
    if (typeof i.isScrolling > "u") {
      let D;
      (t.isHorizontal() && s.currentY === s.startY) ||
      (t.isVertical() && s.currentX === s.startX)
        ? (i.isScrolling = !1)
        : m * m + p * p >= 25 &&
          ((D = (Math.atan2(Math.abs(p), Math.abs(m)) * 180) / Math.PI),
          (i.isScrolling = t.isHorizontal()
            ? D > r.touchAngle
            : 90 - D > r.touchAngle));
    }
    if (
      (i.isScrolling && t.emit("touchMoveOpposite", l),
      typeof i.startMoving > "u" &&
        (s.currentX !== s.startX || s.currentY !== s.startY) &&
        (i.startMoving = !0),
      i.isScrolling ||
        (l.type === "touchmove" && i.preventTouchMoveFromPointerMove))
    ) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving) return;
    (t.allowClick = !1),
      !r.cssMode && l.cancelable && l.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
    let d = t.isHorizontal() ? m : p,
      f = t.isHorizontal()
        ? s.currentX - s.previousX
        : s.currentY - s.previousY;
    r.oneWayMovement &&
      ((d = Math.abs(d) * (o ? 1 : -1)), (f = Math.abs(f) * (o ? 1 : -1))),
      (s.diff = d),
      (d *= r.touchRatio),
      o && ((d = -d), (f = -f));
    const g = t.touchesDirection;
    (t.swipeDirection = d > 0 ? "prev" : "next"),
      (t.touchesDirection = f > 0 ? "prev" : "next");
    const v = t.params.loop && !r.cssMode,
      _ =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!i.isMoved) {
      if (
        (v && _ && t.loopFix({ direction: t.swipeDirection }),
        (i.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const D = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(D);
      }
      (i.allowMomentumBounce = !1),
        r.grabCursor &&
          (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
          t.setGrabCursor(!0),
        t.emit("sliderFirstMove", l);
    }
    if (
      (new Date().getTime(),
      i.isMoved &&
        i.allowThresholdMove &&
        g !== t.touchesDirection &&
        v &&
        _ &&
        Math.abs(d) >= 1)
    ) {
      Object.assign(s, {
        startX: c,
        startY: h,
        currentX: c,
        currentY: h,
        startTranslate: i.currentTranslate,
      }),
        (i.loopSwapReset = !0),
        (i.startTranslate = i.currentTranslate);
      return;
    }
    t.emit("sliderMove", l),
      (i.isMoved = !0),
      (i.currentTranslate = d + i.startTranslate);
    let w = !0,
      b = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (b = 0),
      d > 0
        ? (v &&
            _ &&
            i.allowThresholdMove &&
            i.currentTranslate >
              (r.centeredSlides
                ? t.minTranslate() -
                  t.slidesSizesGrid[t.activeIndex + 1] -
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.activeIndex + 1] +
                      t.params.spaceBetween
                    : 0) -
                  t.params.spaceBetween
                : t.minTranslate()) &&
            t.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > t.minTranslate() &&
            ((w = !1),
            r.resistance &&
              (i.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + i.startTranslate + d) ** b)))
        : d < 0 &&
          (v &&
            _ &&
            i.allowThresholdMove &&
            i.currentTranslate <
              (r.centeredSlides
                ? t.maxTranslate() +
                  t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                  t.params.spaceBetween +
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                      t.params.spaceBetween
                    : 0)
                : t.maxTranslate()) &&
            t.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                t.slides.length -
                (r.slidesPerView === "auto"
                  ? t.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          i.currentTranslate < t.maxTranslate() &&
            ((w = !1),
            r.resistance &&
              (i.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - i.startTranslate - d) ** b))),
      w && (l.preventedByNestedSwiper = !0),
      !t.allowSlideNext &&
        t.swipeDirection === "next" &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        t.swipeDirection === "prev" &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !t.allowSlidePrev &&
        !t.allowSlideNext &&
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    )
      if (Math.abs(d) > r.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          (i.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (i.currentTranslate = i.startTranslate),
            (s.diff = t.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY);
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !r.followFinger ||
      r.cssMode ||
      (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
        r.watchSlidesProgress) &&
        (t.updateActiveIndex(), t.updateSlidesClasses()),
      r.freeMode &&
        r.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(i.currentTranslate),
      t.setTranslate(i.currentTranslate));
  }
  function tg(n) {
    const e = this,
      t = e.touchEventsData;
    let i = n;
    i.originalEvent && (i = i.originalEvent);
    let r;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (
        ((r = [...i.changedTouches].find((D) => D.identifier === t.touchId)),
        !r || r.identifier !== t.touchId)
      )
        return;
    } else {
      if (t.touchId !== null || i.pointerId !== t.pointerId) return;
      r = i;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        i.type
      ) &&
      !(
        ["pointercancel", "contextmenu"].includes(i.type) &&
        (e.browser.isSafari || e.browser.isWebView)
      )
    )
      return;
    (t.pointerId = null), (t.touchId = null);
    const {
      params: o,
      touches: a,
      rtlTranslate: l,
      slidesGrid: u,
      enabled: c,
    } = e;
    if (!c || (!o.simulateTouch && i.pointerType === "mouse")) return;
    if (
      (t.allowTouchCallbacks && e.emit("touchEnd", i),
      (t.allowTouchCallbacks = !1),
      !t.isTouched)
    ) {
      t.isMoved && o.grabCursor && e.setGrabCursor(!1),
        (t.isMoved = !1),
        (t.startMoving = !1);
      return;
    }
    o.grabCursor &&
      t.isMoved &&
      t.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const h = zr(),
      m = h - t.touchStartTime;
    if (e.allowClick) {
      const D = i.path || (i.composedPath && i.composedPath());
      e.updateClickedSlide((D && D[0]) || i.target, D),
        e.emit("tap click", i),
        m < 300 &&
          h - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", i);
    }
    if (
      ((t.lastClickTime = zr()),
      Cs(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !t.isTouched ||
        !t.isMoved ||
        !e.swipeDirection ||
        (a.diff === 0 && !t.loopSwapReset) ||
        (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
    ) {
      (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
      return;
    }
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    let p;
    if (
      (o.followFinger
        ? (p = l ? e.translate : -e.translate)
        : (p = -t.currentTranslate),
      o.cssMode)
    )
      return;
    if (o.freeMode && o.freeMode.enabled) {
      e.freeMode.onTouchEnd({ currentPos: p });
      return;
    }
    const d = p >= -e.maxTranslate() && !e.params.loop;
    let f = 0,
      g = e.slidesSizesGrid[0];
    for (
      let D = 0;
      D < u.length;
      D += D < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
      const E = D < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof u[D + E] < "u"
        ? (d || (p >= u[D] && p < u[D + E])) && ((f = D), (g = u[D + E] - u[D]))
        : (d || p >= u[D]) &&
          ((f = D), (g = u[u.length - 1] - u[u.length - 2]));
    }
    let v = null,
      _ = null;
    o.rewind &&
      (e.isBeginning
        ? (_ =
            o.virtual && o.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (v = 0));
    const w = (p - u[f]) / g,
      b = f < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (m > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" &&
        (w >= o.longSwipesRatio
          ? e.slideTo(o.rewind && e.isEnd ? v : f + b)
          : e.slideTo(f)),
        e.swipeDirection === "prev" &&
          (w > 1 - o.longSwipesRatio
            ? e.slideTo(f + b)
            : _ !== null && w < 0 && Math.abs(w) > o.longSwipesRatio
            ? e.slideTo(_)
            : e.slideTo(f));
    } else {
      if (!o.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation &&
      (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl)
        ? i.target === e.navigation.nextEl
          ? e.slideTo(f + b)
          : e.slideTo(f)
        : (e.swipeDirection === "next" && e.slideTo(v !== null ? v : f + b),
          e.swipeDirection === "prev" && e.slideTo(_ !== null ? _ : f));
    }
  }
  function Ef() {
    const n = this,
      { params: e, el: t } = n;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && n.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = n,
      o = n.virtual && n.params.virtual.enabled;
    (n.allowSlideNext = !0),
      (n.allowSlidePrev = !0),
      n.updateSize(),
      n.updateSlides(),
      n.updateSlidesClasses();
    const a = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    n.isEnd &&
    !n.isBeginning &&
    !n.params.centeredSlides &&
    !a
      ? n.slideTo(n.slides.length - 1, 0, !1, !0)
      : n.params.loop && !o
      ? n.slideToLoop(n.realIndex, 0, !1, !0)
      : n.slideTo(n.activeIndex, 0, !1, !0),
      n.autoplay &&
        n.autoplay.running &&
        n.autoplay.paused &&
        (clearTimeout(n.autoplay.resizeTimeout),
        (n.autoplay.resizeTimeout = setTimeout(() => {
          n.autoplay &&
            n.autoplay.running &&
            n.autoplay.paused &&
            n.autoplay.resume();
        }, 500))),
      (n.allowSlidePrev = r),
      (n.allowSlideNext = i),
      n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow();
  }
  function ig(n) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && n.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (n.stopPropagation(), n.stopImmediatePropagation())));
  }
  function rg() {
    const n = this,
      { wrapperEl: e, rtlTranslate: t, enabled: i } = n;
    if (!i) return;
    (n.previousTranslate = n.translate),
      n.isHorizontal()
        ? (n.translate = -e.scrollLeft)
        : (n.translate = -e.scrollTop),
      n.translate === 0 && (n.translate = 0),
      n.updateActiveIndex(),
      n.updateSlidesClasses();
    let r;
    const s = n.maxTranslate() - n.minTranslate();
    s === 0 ? (r = 0) : (r = (n.translate - n.minTranslate()) / s),
      r !== n.progress && n.updateProgress(t ? -n.translate : n.translate),
      n.emit("setTranslate", n.translate, !1);
  }
  function ng(n) {
    const e = this;
    Ja(e, n.target),
      !(
        e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
      ) && e.update();
  }
  function sg() {
    const n = this;
    n.documentTouchHandlerProceeded ||
      ((n.documentTouchHandlerProceeded = !0),
      n.params.touchReleaseOnEdges && (n.el.style.touchAction = "auto"));
  }
  const Tf = (n, e) => {
    const t = si(),
      { params: i, el: r, wrapperEl: s, device: o } = n,
      a = !!i.nested,
      l = e === "on" ? "addEventListener" : "removeEventListener",
      u = e;
    !r ||
      typeof r == "string" ||
      (t[l]("touchstart", n.onDocumentTouchStart, { passive: !1, capture: a }),
      r[l]("touchstart", n.onTouchStart, { passive: !1 }),
      r[l]("pointerdown", n.onTouchStart, { passive: !1 }),
      t[l]("touchmove", n.onTouchMove, { passive: !1, capture: a }),
      t[l]("pointermove", n.onTouchMove, { passive: !1, capture: a }),
      t[l]("touchend", n.onTouchEnd, { passive: !0 }),
      t[l]("pointerup", n.onTouchEnd, { passive: !0 }),
      t[l]("pointercancel", n.onTouchEnd, { passive: !0 }),
      t[l]("touchcancel", n.onTouchEnd, { passive: !0 }),
      t[l]("pointerout", n.onTouchEnd, { passive: !0 }),
      t[l]("pointerleave", n.onTouchEnd, { passive: !0 }),
      t[l]("contextmenu", n.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        r[l]("click", n.onClick, !0),
      i.cssMode && s[l]("scroll", n.onScroll),
      i.updateOnWindowResize
        ? n[u](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            Ef,
            !0
          )
        : n[u]("observerUpdate", Ef, !0),
      r[l]("load", n.onLoad, { capture: !0 }));
  };
  function og() {
    const n = this,
      { params: e } = n;
    (n.onTouchStart = Jm.bind(n)),
      (n.onTouchMove = eg.bind(n)),
      (n.onTouchEnd = tg.bind(n)),
      (n.onDocumentTouchStart = sg.bind(n)),
      e.cssMode && (n.onScroll = rg.bind(n)),
      (n.onClick = ig.bind(n)),
      (n.onLoad = ng.bind(n)),
      Tf(n, "on");
  }
  function ag() {
    Tf(this, "off");
  }
  var lg = { attachEvents: og, detachEvents: ag };
  const Cf = (n, e) => n.grid && e.grid && e.grid.rows > 1;
  function ug() {
    const n = this,
      { realIndex: e, initialized: t, params: i, el: r } = n,
      s = i.breakpoints;
    if (!s || (s && Object.keys(s).length === 0)) return;
    const o = si(),
      a =
        i.breakpointsBase === "window" || !i.breakpointsBase
          ? i.breakpointsBase
          : "container",
      l =
        ["window", "container"].includes(i.breakpointsBase) ||
        !i.breakpointsBase
          ? n.el
          : o.querySelector(i.breakpointsBase),
      u = n.getBreakpoint(s, a, l);
    if (!u || n.currentBreakpoint === u) return;
    const h = (u in s ? s[u] : void 0) || n.originalParams,
      m = Cf(n, i),
      p = Cf(n, h),
      d = n.params.grabCursor,
      f = h.grabCursor,
      g = i.enabled;
    m && !p
      ? (r.classList.remove(
          `${i.containerModifierClass}grid`,
          `${i.containerModifierClass}grid-column`
        ),
        n.emitContainerClasses())
      : !m &&
        p &&
        (r.classList.add(`${i.containerModifierClass}grid`),
        ((h.grid.fill && h.grid.fill === "column") ||
          (!h.grid.fill && i.grid.fill === "column")) &&
          r.classList.add(`${i.containerModifierClass}grid-column`),
        n.emitContainerClasses()),
      d && !f ? n.unsetGrabCursor() : !d && f && n.setGrabCursor(),
      ["navigation", "pagination", "scrollbar"].forEach((E) => {
        if (typeof h[E] > "u") return;
        const T = i[E] && i[E].enabled,
          P = h[E] && h[E].enabled;
        T && !P && n[E].disable(), !T && P && n[E].enable();
      });
    const v = h.direction && h.direction !== i.direction,
      _ = i.loop && (h.slidesPerView !== i.slidesPerView || v),
      w = i.loop;
    v && t && n.changeDirection(), _r(n.params, h);
    const b = n.params.enabled,
      D = n.params.loop;
    Object.assign(n, {
      allowTouchMove: n.params.allowTouchMove,
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
    }),
      g && !b ? n.disable() : !g && b && n.enable(),
      (n.currentBreakpoint = u),
      n.emit("_beforeBreakpoint", h),
      t &&
        (_
          ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides())
          : !w && D
          ? (n.loopCreate(e), n.updateSlides())
          : w && !D && n.loopDestroy()),
      n.emit("breakpoint", h);
  }
  function cg(n, e, t) {
    if ((e === void 0 && (e = "window"), !n || (e === "container" && !t)))
      return;
    let i = !1;
    const r = mt(),
      s = e === "window" ? r.innerHeight : t.clientHeight,
      o = Object.keys(n).map((a) => {
        if (typeof a == "string" && a.indexOf("@") === 0) {
          const l = parseFloat(a.substr(1));
          return { value: s * l, point: a };
        }
        return { value: a, point: a };
      });
    o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < o.length; a += 1) {
      const { point: l, value: u } = o[a];
      e === "window"
        ? r.matchMedia(`(min-width: ${u}px)`).matches && (i = l)
        : u <= t.clientWidth && (i = l);
    }
    return i || "max";
  }
  var dg = { setBreakpoint: ug, getBreakpoint: cg };
  function fg(n, e) {
    const t = [];
    return (
      n.forEach((i) => {
        typeof i == "object"
          ? Object.keys(i).forEach((r) => {
              i[r] && t.push(e + r);
            })
          : typeof i == "string" && t.push(e + i);
      }),
      t
    );
  }
  function pg() {
    const n = this,
      { classNames: e, params: t, rtl: i, el: r, device: s } = n,
      o = fg(
        [
          "initialized",
          t.direction,
          { "free-mode": n.params.freeMode && t.freeMode.enabled },
          { autoheight: t.autoHeight },
          { rtl: i },
          { grid: t.grid && t.grid.rows > 1 },
          {
            "grid-column":
              t.grid && t.grid.rows > 1 && t.grid.fill === "column",
          },
          { android: s.android },
          { ios: s.ios },
          { "css-mode": t.cssMode },
          { centered: t.cssMode && t.centeredSlides },
          { "watch-progress": t.watchSlidesProgress },
        ],
        t.containerModifierClass
      );
    e.push(...o), r.classList.add(...e), n.emitContainerClasses();
  }
  function hg() {
    const n = this,
      { el: e, classNames: t } = n;
    !e ||
      typeof e == "string" ||
      (e.classList.remove(...t), n.emitContainerClasses());
  }
  var mg = { addClasses: pg, removeClasses: hg };
  function gg() {
    const n = this,
      { isLocked: e, params: t } = n,
      { slidesOffsetBefore: i } = t;
    if (i) {
      const r = n.slides.length - 1,
        s = n.slidesGrid[r] + n.slidesSizesGrid[r] + i * 2;
      n.isLocked = n.size > s;
    } else n.isLocked = n.snapGrid.length === 1;
    t.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
      t.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
      e && e !== n.isLocked && (n.isEnd = !1),
      e !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
  }
  var wg = { checkOverflow: gg },
    Af = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      swiperElementNodeName: "SWIPER-CONTAINER",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      eventsPrefix: "swiper",
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopAddBlankSlides: !0,
      loopAdditionalSlides: 0,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-blank",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideFullyVisibleClass: "swiper-slide-fully-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      lazyPreloadPrevNext: 0,
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
  function _g(n, e) {
    return function (i) {
      i === void 0 && (i = {});
      const r = Object.keys(i)[0],
        s = i[r];
      if (typeof s != "object" || s === null) {
        _r(e, i);
        return;
      }
      if (
        (n[r] === !0 && (n[r] = { enabled: !0 }),
        r === "navigation" &&
          n[r] &&
          n[r].enabled &&
          !n[r].prevEl &&
          !n[r].nextEl &&
          (n[r].auto = !0),
        ["pagination", "scrollbar"].indexOf(r) >= 0 &&
          n[r] &&
          n[r].enabled &&
          !n[r].el &&
          (n[r].auto = !0),
        !(r in n && "enabled" in s))
      ) {
        _r(e, i);
        return;
      }
      typeof n[r] == "object" && !("enabled" in n[r]) && (n[r].enabled = !0),
        n[r] || (n[r] = { enabled: !1 }),
        _r(e, i);
    };
  }
  const Yu = {
      eventsEmitter: mm,
      update: Tm,
      translate: Fm,
      transition: Im,
      slide: Xm,
      loop: Um,
      grabCursor: Qm,
      events: lg,
      breakpoints: dg,
      checkOverflow: wg,
      classes: mg,
    },
    qu = {};
  class Pi {
    constructor() {
      let e, t;
      for (var i = arguments.length, r = new Array(i), s = 0; s < i; s++)
        r[s] = arguments[s];
      r.length === 1 &&
      r[0].constructor &&
      Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
        ? (t = r[0])
        : ([e, t] = r),
        t || (t = {}),
        (t = _r({}, t)),
        e && !t.el && (t.el = e);
      const o = si();
      if (
        t.el &&
        typeof t.el == "string" &&
        o.querySelectorAll(t.el).length > 1
      ) {
        const c = [];
        return (
          o.querySelectorAll(t.el).forEach((h) => {
            const m = _r({}, t, { el: h });
            c.push(new Pi(m));
          }),
          c
        );
      }
      const a = this;
      (a.__swiper__ = !0),
        (a.support = yf()),
        (a.device = bf({ userAgent: t.userAgent })),
        (a.browser = fm()),
        (a.eventsListeners = {}),
        (a.eventsAnyListeners = []),
        (a.modules = [...a.__modules__]),
        t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
      const l = {};
      a.modules.forEach((c) => {
        c({
          params: t,
          swiper: a,
          extendParams: _g(t, l),
          on: a.on.bind(a),
          once: a.once.bind(a),
          off: a.off.bind(a),
          emit: a.emit.bind(a),
        });
      });
      const u = _r({}, Af, l);
      return (
        (a.params = _r({}, u, qu, t)),
        (a.originalParams = _r({}, a.params)),
        (a.passedParams = _r({}, t)),
        a.params &&
          a.params.on &&
          Object.keys(a.params.on).forEach((c) => {
            a.on(c, a.params.on[c]);
          }),
        a.params && a.params.onAny && a.onAny(a.params.onAny),
        Object.assign(a, {
          enabled: a.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal() {
            return a.params.direction === "horizontal";
          },
          isVertical() {
            return a.params.direction === "vertical";
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: a.params.allowSlideNext,
          allowSlidePrev: a.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: a.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: a.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        a.emit("_swiper"),
        a.params.init && a.init(),
        a
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: i } = this,
        r = pi(t, `.${i.slideClass}, swiper-slide`),
        s = Jo(r[0]);
      return Jo(e) - s;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.find(
          (t) => t.getAttribute("data-swiper-slide-index") * 1 === e
        )
      );
    }
    recalcSlides() {
      const e = this,
        { slidesEl: t, params: i } = e;
      e.slides = pi(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = i.minTranslate(),
        o = (i.maxTranslate() - r) * e + r;
      i.translateTo(o, typeof t > "u" ? 0 : t),
        i.updateActiveIndex(),
        i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (i) =>
            i.indexOf("swiper") === 0 ||
            i.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (i) =>
                i.indexOf("swiper-slide") === 0 ||
                i.indexOf(t.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const r = e.getSlideClasses(i);
        t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const i = this,
        {
          params: r,
          slides: s,
          slidesGrid: o,
          slidesSizesGrid: a,
          size: l,
          activeIndex: u,
        } = i;
      let c = 1;
      if (typeof r.slidesPerView == "number") return r.slidesPerView;
      if (r.centeredSlides) {
        let h = s[u] ? Math.ceil(s[u].swiperSlideSize) : 0,
          m;
        for (let p = u + 1; p < s.length; p += 1)
          s[p] &&
            !m &&
            ((h += Math.ceil(s[p].swiperSlideSize)),
            (c += 1),
            h > l && (m = !0));
        for (let p = u - 1; p >= 0; p -= 1)
          s[p] &&
            !m &&
            ((h += s[p].swiperSlideSize), (c += 1), h > l && (m = !0));
      } else if (e === "current")
        for (let h = u + 1; h < s.length; h += 1)
          (t ? o[h] + a[h] - o[u] < l : o[h] - o[u] < l) && (c += 1);
      else for (let h = u - 1; h >= 0; h -= 1) o[u] - o[h] < l && (c += 1);
      return c;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: i } = e;
      i.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
          o.complete && Ja(e, o);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses();
      function r() {
        const o = e.rtlTranslate ? e.translate * -1 : e.translate,
          a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
        e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
        r(), i.autoHeight && e.updateAutoHeight();
      else {
        if (
          (i.slidesPerView === "auto" || i.slidesPerView > 1) &&
          e.isEnd &&
          !i.centeredSlides
        ) {
          const o =
            e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          s = e.slideTo(o.length - 1, 0, !1, !0);
        } else s = e.slideTo(e.activeIndex, 0, !1, !0);
        s || r();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const i = this,
        r = i.params.direction;
      return (
        e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r ||
          (e !== "horizontal" && e !== "vertical") ||
          (i.el.classList.remove(`${i.params.containerModifierClass}${r}`),
          i.el.classList.add(`${i.params.containerModifierClass}${e}`),
          i.emitContainerClasses(),
          (i.params.direction = e),
          i.slides.forEach((s) => {
            e === "vertical" ? (s.style.width = "") : (s.style.height = "");
          }),
          i.emit("changeDirection"),
          t && i.update()),
        i
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && e === "rtl") ||
        (!t.rtl && e === "ltr") ||
        ((t.rtl = e === "rtl"),
        (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if ((typeof i == "string" && (i = document.querySelector(i)), !i))
        return !1;
      (i.swiper = t),
        i.parentNode &&
          i.parentNode.host &&
          i.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const r = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let o =
        i && i.shadowRoot && i.shadowRoot.querySelector
          ? i.shadowRoot.querySelector(r())
          : pi(i, r())[0];
      return (
        !o &&
          t.params.createElements &&
          ((o = vr("div", t.params.wrapperClass)),
          i.append(o),
          pi(i, `.${t.params.slideClass}`).forEach((a) => {
            o.append(a);
          })),
        Object.assign(t, {
          el: i,
          wrapperEl: o,
          slidesEl:
            t.isElement && !i.parentNode.host.slideSlots
              ? i.parentNode.host
              : o,
          hostEl: t.isElement ? i.parentNode.host : i,
          mounted: !0,
          rtl: i.dir.toLowerCase() === "rtl" || es(i, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (i.dir.toLowerCase() === "rtl" || es(i, "direction") === "rtl"),
          wrongRTL: es(o, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
      const r = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        r.forEach((s) => {
          s.complete
            ? Ja(t, s)
            : s.addEventListener("load", (o) => {
                Ja(t, o.target);
              });
        }),
        $u(t),
        (t.initialized = !0),
        $u(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const i = this,
        { params: r, el: s, wrapperEl: o, slides: a } = i;
      return (
        typeof i.params > "u" ||
          i.destroyed ||
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          r.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            s && typeof s != "string" && s.removeAttribute("style"),
            o && o.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((l) => {
                l.classList.remove(
                  r.slideVisibleClass,
                  r.slideFullyVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  l.removeAttribute("style"),
                  l.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((l) => {
            i.off(l);
          }),
          e !== !1 &&
            (i.el && typeof i.el != "string" && (i.el.swiper = null), im(i)),
          (i.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      _r(qu, e);
    }
    static get extendedDefaults() {
      return qu;
    }
    static get defaults() {
      return Af;
    }
    static installModule(e) {
      Pi.prototype.__modules__ || (Pi.prototype.__modules__ = []);
      const t = Pi.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Pi.installModule(t)), Pi)
        : (Pi.installModule(e), Pi);
    }
  }
  Object.keys(Yu).forEach((n) => {
    Object.keys(Yu[n]).forEach((e) => {
      Pi.prototype[e] = Yu[n][e];
    });
  }),
    Pi.use([pm, hm]);
  function vg(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    t({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0,
      },
    });
    let s;
    const o = si();
    e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: [],
    };
    const a = o.createElement("div");
    function l(d, f) {
      const g = e.params.virtual;
      if (g.cache && e.virtual.cache[f]) return e.virtual.cache[f];
      let v;
      return (
        g.renderSlide
          ? ((v = g.renderSlide.call(e, d, f)),
            typeof v == "string" && ((a.innerHTML = v), (v = a.children[0])))
          : e.isElement
          ? (v = vr("swiper-slide"))
          : (v = vr("div", e.params.slideClass)),
        v.setAttribute("data-swiper-slide-index", f),
        g.renderSlide || (v.innerHTML = d),
        g.cache && (e.virtual.cache[f] = v),
        v
      );
    }
    function u(d, f) {
      const {
        slidesPerView: g,
        slidesPerGroup: v,
        centeredSlides: _,
        loop: w,
        initialSlide: b,
      } = e.params;
      if (f && !w && b > 0) return;
      const { addSlidesBefore: D, addSlidesAfter: E } = e.params.virtual,
        { from: T, to: P, slides: A, slidesGrid: C, offset: R } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const k = e.activeIndex || 0;
      let L;
      e.rtlTranslate ? (L = "right") : (L = e.isHorizontal() ? "left" : "top");
      let B, X;
      _
        ? ((B = Math.floor(g / 2) + v + E), (X = Math.floor(g / 2) + v + D))
        : ((B = g + (v - 1) + E), (X = (w ? g : v) + D));
      let V = k - X,
        z = k + B;
      w || ((V = Math.max(V, 0)), (z = Math.min(z, A.length - 1)));
      let I = (e.slidesGrid[V] || 0) - (e.slidesGrid[0] || 0);
      w && k >= X
        ? ((V -= X), _ || (I += e.slidesGrid[0]))
        : w && k < X && ((V = -X), _ && (I += e.slidesGrid[0])),
        Object.assign(e.virtual, {
          from: V,
          to: z,
          offset: I,
          slidesGrid: e.slidesGrid,
          slidesBefore: X,
          slidesAfter: B,
        });
      function O() {
        e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          r("virtualUpdate");
      }
      if (T === V && P === z && !d) {
        e.slidesGrid !== C &&
          I !== R &&
          e.slides.forEach((Y) => {
            Y.style[L] = `${I - Math.abs(e.cssOverflowAdjustment())}px`;
          }),
          e.updateProgress(),
          r("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: I,
          from: V,
          to: z,
          slides: (function () {
            const K = [];
            for (let Z = V; Z <= z; Z += 1) K.push(A[Z]);
            return K;
          })(),
        }),
          e.params.virtual.renderExternalUpdate ? O() : r("virtualUpdate");
        return;
      }
      const M = [],
        re = [],
        we = (Y) => {
          let K = Y;
          return (
            Y < 0 ? (K = A.length + Y) : K >= A.length && (K = K - A.length), K
          );
        };
      if (d)
        e.slides
          .filter((Y) => Y.matches(`.${e.params.slideClass}, swiper-slide`))
          .forEach((Y) => {
            Y.remove();
          });
      else
        for (let Y = T; Y <= P; Y += 1)
          if (Y < V || Y > z) {
            const K = we(Y);
            e.slides
              .filter((Z) =>
                Z.matches(
                  `.${e.params.slideClass}[data-swiper-slide-index="${K}"], swiper-slide[data-swiper-slide-index="${K}"]`
                )
              )
              .forEach((Z) => {
                Z.remove();
              });
          }
      const Ke = w ? -A.length : 0,
        Se = w ? A.length * 2 : A.length;
      for (let Y = Ke; Y < Se; Y += 1)
        if (Y >= V && Y <= z) {
          const K = we(Y);
          typeof P > "u" || d
            ? re.push(K)
            : (Y > P && re.push(K), Y < T && M.push(K));
        }
      if (
        (re.forEach((Y) => {
          e.slidesEl.append(l(A[Y], Y));
        }),
        w)
      )
        for (let Y = M.length - 1; Y >= 0; Y -= 1) {
          const K = M[Y];
          e.slidesEl.prepend(l(A[K], K));
        }
      else
        M.sort((Y, K) => K - Y),
          M.forEach((Y) => {
            e.slidesEl.prepend(l(A[Y], Y));
          });
      pi(e.slidesEl, ".swiper-slide, swiper-slide").forEach((Y) => {
        Y.style[L] = `${I - Math.abs(e.cssOverflowAdjustment())}px`;
      }),
        O();
    }
    function c(d) {
      if (typeof d == "object" && "length" in d)
        for (let f = 0; f < d.length; f += 1)
          d[f] && e.virtual.slides.push(d[f]);
      else e.virtual.slides.push(d);
      u(!0);
    }
    function h(d) {
      const f = e.activeIndex;
      let g = f + 1,
        v = 1;
      if (Array.isArray(d)) {
        for (let _ = 0; _ < d.length; _ += 1)
          d[_] && e.virtual.slides.unshift(d[_]);
        (g = f + d.length), (v = d.length);
      } else e.virtual.slides.unshift(d);
      if (e.params.virtual.cache) {
        const _ = e.virtual.cache,
          w = {};
        Object.keys(_).forEach((b) => {
          const D = _[b],
            E = D.getAttribute("data-swiper-slide-index");
          E && D.setAttribute("data-swiper-slide-index", parseInt(E, 10) + v),
            (w[parseInt(b, 10) + v] = D);
        }),
          (e.virtual.cache = w);
      }
      u(!0), e.slideTo(g, 0);
    }
    function m(d) {
      if (typeof d > "u" || d === null) return;
      let f = e.activeIndex;
      if (Array.isArray(d))
        for (let g = d.length - 1; g >= 0; g -= 1)
          e.params.virtual.cache &&
            (delete e.virtual.cache[d[g]],
            Object.keys(e.virtual.cache).forEach((v) => {
              v > d &&
                ((e.virtual.cache[v - 1] = e.virtual.cache[v]),
                e.virtual.cache[v - 1].setAttribute(
                  "data-swiper-slide-index",
                  v - 1
                ),
                delete e.virtual.cache[v]);
            })),
            e.virtual.slides.splice(d[g], 1),
            d[g] < f && (f -= 1),
            (f = Math.max(f, 0));
      else
        e.params.virtual.cache &&
          (delete e.virtual.cache[d],
          Object.keys(e.virtual.cache).forEach((g) => {
            g > d &&
              ((e.virtual.cache[g - 1] = e.virtual.cache[g]),
              e.virtual.cache[g - 1].setAttribute(
                "data-swiper-slide-index",
                g - 1
              ),
              delete e.virtual.cache[g]);
          })),
          e.virtual.slides.splice(d, 1),
          d < f && (f -= 1),
          (f = Math.max(f, 0));
      u(!0), e.slideTo(f, 0);
    }
    function p() {
      (e.virtual.slides = []),
        e.params.virtual.cache && (e.virtual.cache = {}),
        u(!0),
        e.slideTo(0, 0);
    }
    i("beforeInit", () => {
      if (!e.params.virtual.enabled) return;
      let d;
      if (typeof e.passedParams.virtual.slides > "u") {
        const f = [...e.slidesEl.children].filter((g) =>
          g.matches(`.${e.params.slideClass}, swiper-slide`)
        );
        f.length &&
          ((e.virtual.slides = [...f]),
          (d = !0),
          f.forEach((g, v) => {
            g.setAttribute("data-swiper-slide-index", v),
              (e.virtual.cache[v] = g),
              g.remove();
          }));
      }
      d || (e.virtual.slides = e.params.virtual.slides),
        e.classNames.push(`${e.params.containerModifierClass}virtual`),
        (e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0),
        u(!1, !0);
    }),
      i("setTranslate", () => {
        e.params.virtual.enabled &&
          (e.params.cssMode && !e._immediateVirtual
            ? (clearTimeout(s),
              (s = setTimeout(() => {
                u();
              }, 100)))
            : u());
      }),
      i("init update resize", () => {
        e.params.virtual.enabled &&
          e.params.cssMode &&
          Ko(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
      }),
      Object.assign(e.virtual, {
        appendSlide: c,
        prependSlide: h,
        removeSlide: m,
        removeAllSlides: p,
        update: u,
      });
  }
  function yg(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = si(),
      o = mt();
    (e.keyboard = { enabled: !1 }),
      t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
    function a(c) {
      if (!e.enabled) return;
      const { rtlTranslate: h } = e;
      let m = c;
      m.originalEvent && (m = m.originalEvent);
      const p = m.keyCode || m.charCode,
        d = e.params.keyboard.pageUpDown,
        f = d && p === 33,
        g = d && p === 34,
        v = p === 37,
        _ = p === 39,
        w = p === 38,
        b = p === 40;
      if (
        (!e.allowSlideNext &&
          ((e.isHorizontal() && _) || (e.isVertical() && b) || g)) ||
        (!e.allowSlidePrev &&
          ((e.isHorizontal() && v) || (e.isVertical() && w) || f))
      )
        return !1;
      if (
        !(m.shiftKey || m.altKey || m.ctrlKey || m.metaKey) &&
        !(
          s.activeElement &&
          s.activeElement.nodeName &&
          (s.activeElement.nodeName.toLowerCase() === "input" ||
            s.activeElement.nodeName.toLowerCase() === "textarea")
        )
      ) {
        if (e.params.keyboard.onlyInViewport && (f || g || v || _ || w || b)) {
          let D = !1;
          if (
            Ms(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
            Ms(e.el, `.${e.params.slideActiveClass}`).length === 0
          )
            return;
          const E = e.el,
            T = E.clientWidth,
            P = E.clientHeight,
            A = o.innerWidth,
            C = o.innerHeight,
            R = Qa(E);
          h && (R.left -= E.scrollLeft);
          const k = [
            [R.left, R.top],
            [R.left + T, R.top],
            [R.left, R.top + P],
            [R.left + T, R.top + P],
          ];
          for (let L = 0; L < k.length; L += 1) {
            const B = k[L];
            if (B[0] >= 0 && B[0] <= A && B[1] >= 0 && B[1] <= C) {
              if (B[0] === 0 && B[1] === 0) continue;
              D = !0;
            }
          }
          if (!D) return;
        }
        e.isHorizontal()
          ? ((f || g || v || _) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (((g || _) && !h) || ((f || v) && h)) && e.slideNext(),
            (((f || v) && !h) || ((g || _) && h)) && e.slidePrev())
          : ((f || g || w || b) &&
              (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
            (g || b) && e.slideNext(),
            (f || w) && e.slidePrev()),
          r("keyPress", p);
      }
    }
    function l() {
      e.keyboard.enabled ||
        (s.addEventListener("keydown", a), (e.keyboard.enabled = !0));
    }
    function u() {
      e.keyboard.enabled &&
        (s.removeEventListener("keydown", a), (e.keyboard.enabled = !1));
    }
    i("init", () => {
      e.params.keyboard.enabled && l();
    }),
      i("destroy", () => {
        e.keyboard.enabled && u();
      }),
      Object.assign(e.keyboard, { enable: l, disable: u });
  }
  function bg(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = mt();
    t({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel",
      },
    }),
      (e.mousewheel = { enabled: !1 });
    let o,
      a = zr(),
      l;
    const u = [];
    function c(w) {
      let T = 0,
        P = 0,
        A = 0,
        C = 0;
      return (
        "detail" in w && (P = w.detail),
        "wheelDelta" in w && (P = -w.wheelDelta / 120),
        "wheelDeltaY" in w && (P = -w.wheelDeltaY / 120),
        "wheelDeltaX" in w && (T = -w.wheelDeltaX / 120),
        "axis" in w && w.axis === w.HORIZONTAL_AXIS && ((T = P), (P = 0)),
        (A = T * 10),
        (C = P * 10),
        "deltaY" in w && (C = w.deltaY),
        "deltaX" in w && (A = w.deltaX),
        w.shiftKey && !A && ((A = C), (C = 0)),
        (A || C) &&
          w.deltaMode &&
          (w.deltaMode === 1
            ? ((A *= 40), (C *= 40))
            : ((A *= 800), (C *= 800))),
        A && !T && (T = A < 1 ? -1 : 1),
        C && !P && (P = C < 1 ? -1 : 1),
        { spinX: T, spinY: P, pixelX: A, pixelY: C }
      );
    }
    function h() {
      e.enabled && (e.mouseEntered = !0);
    }
    function m() {
      e.enabled && (e.mouseEntered = !1);
    }
    function p(w) {
      return (e.params.mousewheel.thresholdDelta &&
        w.delta < e.params.mousewheel.thresholdDelta) ||
        (e.params.mousewheel.thresholdTime &&
          zr() - a < e.params.mousewheel.thresholdTime)
        ? !1
        : w.delta >= 6 && zr() - a < 60
        ? !0
        : (w.direction < 0
            ? (!e.isEnd || e.params.loop) &&
              !e.animating &&
              (e.slideNext(), r("scroll", w.raw))
            : (!e.isBeginning || e.params.loop) &&
              !e.animating &&
              (e.slidePrev(), r("scroll", w.raw)),
          (a = new s.Date().getTime()),
          !1);
    }
    function d(w) {
      const b = e.params.mousewheel;
      if (w.direction < 0) {
        if (e.isEnd && !e.params.loop && b.releaseOnEdges) return !0;
      } else if (e.isBeginning && !e.params.loop && b.releaseOnEdges) return !0;
      return !1;
    }
    function f(w) {
      let b = w,
        D = !0;
      if (
        !e.enabled ||
        w.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
      )
        return;
      const E = e.params.mousewheel;
      e.params.cssMode && b.preventDefault();
      let T = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (T = document.querySelector(e.params.mousewheel.eventsTarget));
      const P = T && T.contains(b.target);
      if (!e.mouseEntered && !P && !E.releaseOnEdges) return !0;
      b.originalEvent && (b = b.originalEvent);
      let A = 0;
      const C = e.rtlTranslate ? -1 : 1,
        R = c(b);
      if (E.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(R.pixelX) > Math.abs(R.pixelY)) A = -R.pixelX * C;
          else return !0;
        else if (Math.abs(R.pixelY) > Math.abs(R.pixelX)) A = -R.pixelY;
        else return !0;
      else
        A = Math.abs(R.pixelX) > Math.abs(R.pixelY) ? -R.pixelX * C : -R.pixelY;
      if (A === 0) return !0;
      E.invert && (A = -A);
      let k = e.getTranslate() + A * E.sensitivity;
      if (
        (k >= e.minTranslate() && (k = e.minTranslate()),
        k <= e.maxTranslate() && (k = e.maxTranslate()),
        (D = e.params.loop
          ? !0
          : !(k === e.minTranslate() || k === e.maxTranslate())),
        D && e.params.nested && b.stopPropagation(),
        !e.params.freeMode || !e.params.freeMode.enabled)
      ) {
        const L = {
          time: zr(),
          delta: Math.abs(A),
          direction: Math.sign(A),
          raw: w,
        };
        u.length >= 2 && u.shift();
        const B = u.length ? u[u.length - 1] : void 0;
        if (
          (u.push(L),
          B
            ? (L.direction !== B.direction ||
                L.delta > B.delta ||
                L.time > B.time + 150) &&
              p(L)
            : p(L),
          d(L))
        )
          return !0;
      } else {
        const L = { time: zr(), delta: Math.abs(A), direction: Math.sign(A) },
          B =
            l &&
            L.time < l.time + 500 &&
            L.delta <= l.delta &&
            L.direction === l.direction;
        if (!B) {
          l = void 0;
          let X = e.getTranslate() + A * E.sensitivity;
          const V = e.isBeginning,
            z = e.isEnd;
          if (
            (X >= e.minTranslate() && (X = e.minTranslate()),
            X <= e.maxTranslate() && (X = e.maxTranslate()),
            e.setTransition(0),
            e.setTranslate(X),
            e.updateProgress(),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            ((!V && e.isBeginning) || (!z && e.isEnd)) &&
              e.updateSlidesClasses(),
            e.params.loop &&
              e.loopFix({
                direction: L.direction < 0 ? "next" : "prev",
                byMousewheel: !0,
              }),
            e.params.freeMode.sticky)
          ) {
            clearTimeout(o), (o = void 0), u.length >= 15 && u.shift();
            const I = u.length ? u[u.length - 1] : void 0,
              O = u[0];
            if (
              (u.push(L),
              I && (L.delta > I.delta || L.direction !== I.direction))
            )
              u.splice(0);
            else if (
              u.length >= 15 &&
              L.time - O.time < 500 &&
              O.delta - L.delta >= 1 &&
              L.delta <= 6
            ) {
              const M = A > 0 ? 0.8 : 0.2;
              (l = L),
                u.splice(0),
                (o = Cs(() => {
                  e.destroyed ||
                    !e.params ||
                    e.slideToClosest(e.params.speed, !0, void 0, M);
                }, 0));
            }
            o ||
              (o = Cs(() => {
                if (e.destroyed || !e.params) return;
                const M = 0.5;
                (l = L),
                  u.splice(0),
                  e.slideToClosest(e.params.speed, !0, void 0, M);
              }, 500));
          }
          if (
            (B || r("scroll", b),
            e.params.autoplay &&
              e.params.autoplay.disableOnInteraction &&
              e.autoplay.stop(),
            E.releaseOnEdges &&
              (X === e.minTranslate() || X === e.maxTranslate()))
          )
            return !0;
        }
      }
      return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), !1;
    }
    function g(w) {
      let b = e.el;
      e.params.mousewheel.eventsTarget !== "container" &&
        (b = document.querySelector(e.params.mousewheel.eventsTarget)),
        b[w]("mouseenter", h),
        b[w]("mouseleave", m),
        b[w]("wheel", f);
    }
    function v() {
      return e.params.cssMode
        ? (e.wrapperEl.removeEventListener("wheel", f), !0)
        : e.mousewheel.enabled
        ? !1
        : (g("addEventListener"), (e.mousewheel.enabled = !0), !0);
    }
    function _() {
      return e.params.cssMode
        ? (e.wrapperEl.addEventListener(event, f), !0)
        : e.mousewheel.enabled
        ? (g("removeEventListener"), (e.mousewheel.enabled = !1), !0)
        : !1;
    }
    i("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && _(),
        e.params.mousewheel.enabled && v();
    }),
      i("destroy", () => {
        e.params.cssMode && v(), e.mousewheel.enabled && _();
      }),
      Object.assign(e.mousewheel, { enable: v, disable: _ });
  }
  function Hu(n, e, t, i) {
    return (
      n.params.createElements &&
        Object.keys(i).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let s = pi(n.el, `.${i[r]}`)[0];
            s || ((s = vr("div", i[r])), (s.className = i[r]), n.el.append(s)),
              (t[r] = s),
              (e[r] = s);
          }
        }),
      t
    );
  }
  function Dg(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    function s(d) {
      let f;
      return d &&
        typeof d == "string" &&
        e.isElement &&
        ((f = e.el.querySelector(d) || e.hostEl.querySelector(d)), f)
        ? f
        : (d &&
            (typeof d == "string" && (f = [...document.querySelectorAll(d)]),
            e.params.uniqueNavElements &&
            typeof d == "string" &&
            f &&
            f.length > 1 &&
            e.el.querySelectorAll(d).length === 1
              ? (f = e.el.querySelector(d))
              : f && f.length === 1 && (f = f[0])),
          d && !f ? d : f);
    }
    function o(d, f) {
      const g = e.params.navigation;
      (d = Fe(d)),
        d.forEach((v) => {
          v &&
            (v.classList[f ? "add" : "remove"](...g.disabledClass.split(" ")),
            v.tagName === "BUTTON" && (v.disabled = f),
            e.params.watchOverflow &&
              e.enabled &&
              v.classList[e.isLocked ? "add" : "remove"](g.lockClass));
        });
    }
    function a() {
      const { nextEl: d, prevEl: f } = e.navigation;
      if (e.params.loop) {
        o(f, !1), o(d, !1);
        return;
      }
      o(f, e.isBeginning && !e.params.rewind),
        o(d, e.isEnd && !e.params.rewind);
    }
    function l(d) {
      d.preventDefault(),
        !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
          (e.slidePrev(), r("navigationPrev"));
    }
    function u(d) {
      d.preventDefault(),
        !(e.isEnd && !e.params.loop && !e.params.rewind) &&
          (e.slideNext(), r("navigationNext"));
    }
    function c() {
      const d = e.params.navigation;
      if (
        ((e.params.navigation = Hu(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !(d.nextEl || d.prevEl))
      )
        return;
      let f = s(d.nextEl),
        g = s(d.prevEl);
      Object.assign(e.navigation, { nextEl: f, prevEl: g }),
        (f = Fe(f)),
        (g = Fe(g));
      const v = (_, w) => {
        _ && _.addEventListener("click", w === "next" ? u : l),
          !e.enabled && _ && _.classList.add(...d.lockClass.split(" "));
      };
      f.forEach((_) => v(_, "next")), g.forEach((_) => v(_, "prev"));
    }
    function h() {
      let { nextEl: d, prevEl: f } = e.navigation;
      (d = Fe(d)), (f = Fe(f));
      const g = (v, _) => {
        v.removeEventListener("click", _ === "next" ? u : l),
          v.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      d.forEach((v) => g(v, "next")), f.forEach((v) => g(v, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? p() : (c(), a());
    }),
      i("toEdge fromEdge lock unlock", () => {
        a();
      }),
      i("destroy", () => {
        h();
      }),
      i("enable disable", () => {
        let { nextEl: d, prevEl: f } = e.navigation;
        if (((d = Fe(d)), (f = Fe(f)), e.enabled)) {
          a();
          return;
        }
        [...d, ...f]
          .filter((g) => !!g)
          .forEach((g) => g.classList.add(e.params.navigation.lockClass));
      }),
      i("click", (d, f) => {
        let { nextEl: g, prevEl: v } = e.navigation;
        (g = Fe(g)), (v = Fe(v));
        const _ = f.target;
        let w = v.includes(_) || g.includes(_);
        if (e.isElement && !w) {
          const b = f.path || (f.composedPath && f.composedPath());
          b && (w = b.find((D) => g.includes(D) || v.includes(D)));
        }
        if (e.params.navigation.hideOnClick && !w) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === _ || e.pagination.el.contains(_))
          )
            return;
          let b;
          g.length
            ? (b = g[0].classList.contains(e.params.navigation.hiddenClass))
            : v.length &&
              (b = v[0].classList.contains(e.params.navigation.hiddenClass)),
            r(b === !0 ? "navigationShow" : "navigationHide"),
            [...g, ...v]
              .filter((D) => !!D)
              .forEach((D) =>
                D.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const m = () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          c(),
          a();
      },
      p = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          h();
      };
    Object.assign(e.navigation, {
      enable: m,
      disable: p,
      update: a,
      init: c,
      destroy: h,
    });
  }
  function Mn(n) {
    return (
      n === void 0 && (n = ""),
      `.${n
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function el(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = "swiper-pagination";
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (_) => _,
        formatFractionTotal: (_) => _,
        bulletClass: `${s}-bullet`,
        bulletActiveClass: `${s}-bullet-active`,
        modifierClass: `${s}-`,
        currentClass: `${s}-current`,
        totalClass: `${s}-total`,
        hiddenClass: `${s}-hidden`,
        progressbarFillClass: `${s}-progressbar-fill`,
        progressbarOppositeClass: `${s}-progressbar-opposite`,
        clickableClass: `${s}-clickable`,
        lockClass: `${s}-lock`,
        horizontalClass: `${s}-horizontal`,
        verticalClass: `${s}-vertical`,
        paginationDisabledClass: `${s}-disabled`,
      },
    }),
      (e.pagination = { el: null, bullets: [] });
    let o,
      a = 0;
    function l() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
      );
    }
    function u(_, w) {
      const { bulletActiveClass: b } = e.params.pagination;
      _ &&
        ((_ = _[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
        _ &&
          (_.classList.add(`${b}-${w}`),
          (_ = _[`${w === "prev" ? "previous" : "next"}ElementSibling`]),
          _ && _.classList.add(`${b}-${w}-${w}`)));
    }
    function c(_, w, b) {
      if (((_ = _ % b), (w = w % b), w === _ + 1)) return "next";
      if (w === _ - 1) return "previous";
    }
    function h(_) {
      const w = _.target.closest(Mn(e.params.pagination.bulletClass));
      if (!w) return;
      _.preventDefault();
      const b = Jo(w) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === b) return;
        const D = c(e.realIndex, b, e.slides.length);
        D === "next"
          ? e.slideNext()
          : D === "previous"
          ? e.slidePrev()
          : e.slideToLoop(b);
      } else e.slideTo(b);
    }
    function m() {
      const _ = e.rtl,
        w = e.params.pagination;
      if (l()) return;
      let b = e.pagination.el;
      b = Fe(b);
      let D, E;
      const T =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        P = e.params.loop
          ? Math.ceil(T / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((E = e.previousRealIndex || 0),
            (D =
              e.params.slidesPerGroup > 1
                ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                : e.realIndex))
          : typeof e.snapIndex < "u"
          ? ((D = e.snapIndex), (E = e.previousSnapIndex))
          : ((E = e.previousIndex || 0), (D = e.activeIndex || 0)),
        w.type === "bullets" &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const A = e.pagination.bullets;
        let C, R, k;
        if (
          (w.dynamicBullets &&
            ((o = Ou(A[0], e.isHorizontal() ? "width" : "height")),
            b.forEach((L) => {
              L.style[e.isHorizontal() ? "width" : "height"] = `${
                o * (w.dynamicMainBullets + 4)
              }px`;
            }),
            w.dynamicMainBullets > 1 &&
              E !== void 0 &&
              ((a += D - (E || 0)),
              a > w.dynamicMainBullets - 1
                ? (a = w.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (C = Math.max(D - a, 0)),
            (R = C + (Math.min(A.length, w.dynamicMainBullets) - 1)),
            (k = (R + C) / 2)),
          A.forEach((L) => {
            const B = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((X) => `${w.bulletActiveClass}${X}`),
            ]
              .map((X) =>
                typeof X == "string" && X.includes(" ") ? X.split(" ") : X
              )
              .flat();
            L.classList.remove(...B);
          }),
          b.length > 1)
        )
          A.forEach((L) => {
            const B = Jo(L);
            B === D
              ? L.classList.add(...w.bulletActiveClass.split(" "))
              : e.isElement && L.setAttribute("part", "bullet"),
              w.dynamicBullets &&
                (B >= C &&
                  B <= R &&
                  L.classList.add(...`${w.bulletActiveClass}-main`.split(" ")),
                B === C && u(L, "prev"),
                B === R && u(L, "next"));
          });
        else {
          const L = A[D];
          if (
            (L && L.classList.add(...w.bulletActiveClass.split(" ")),
            e.isElement &&
              A.forEach((B, X) => {
                B.setAttribute("part", X === D ? "bullet-active" : "bullet");
              }),
            w.dynamicBullets)
          ) {
            const B = A[C],
              X = A[R];
            for (let V = C; V <= R; V += 1)
              A[V] &&
                A[V].classList.add(...`${w.bulletActiveClass}-main`.split(" "));
            u(B, "prev"), u(X, "next");
          }
        }
        if (w.dynamicBullets) {
          const L = Math.min(A.length, w.dynamicMainBullets + 4),
            B = (o * L - o) / 2 - k * o,
            X = _ ? "right" : "left";
          A.forEach((V) => {
            V.style[e.isHorizontal() ? X : "top"] = `${B}px`;
          });
        }
      }
      b.forEach((A, C) => {
        if (
          (w.type === "fraction" &&
            (A.querySelectorAll(Mn(w.currentClass)).forEach((R) => {
              R.textContent = w.formatFractionCurrent(D + 1);
            }),
            A.querySelectorAll(Mn(w.totalClass)).forEach((R) => {
              R.textContent = w.formatFractionTotal(P);
            })),
          w.type === "progressbar")
        ) {
          let R;
          w.progressbarOpposite
            ? (R = e.isHorizontal() ? "vertical" : "horizontal")
            : (R = e.isHorizontal() ? "horizontal" : "vertical");
          const k = (D + 1) / P;
          let L = 1,
            B = 1;
          R === "horizontal" ? (L = k) : (B = k),
            A.querySelectorAll(Mn(w.progressbarFillClass)).forEach((X) => {
              (X.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${B})`),
                (X.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        w.type === "custom" && w.renderCustom
          ? ((A.innerHTML = w.renderCustom(e, D + 1, P)),
            C === 0 && r("paginationRender", A))
          : (C === 0 && r("paginationRender", A), r("paginationUpdate", A)),
          e.params.watchOverflow &&
            e.enabled &&
            A.classList[e.isLocked ? "add" : "remove"](w.lockClass);
      });
    }
    function p() {
      const _ = e.params.pagination;
      if (l()) return;
      const w =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.grid && e.params.grid.rows > 1
          ? e.slides.length / Math.ceil(e.params.grid.rows)
          : e.slides.length;
      let b = e.pagination.el;
      b = Fe(b);
      let D = "";
      if (_.type === "bullets") {
        let E = e.params.loop
          ? Math.ceil(w / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && E > w && (E = w);
        for (let T = 0; T < E; T += 1)
          _.renderBullet
            ? (D += _.renderBullet.call(e, T, _.bulletClass))
            : (D += `<${_.bulletElement} ${
                e.isElement ? 'part="bullet"' : ""
              } class="${_.bulletClass}"></${_.bulletElement}>`);
      }
      _.type === "fraction" &&
        (_.renderFraction
          ? (D = _.renderFraction.call(e, _.currentClass, _.totalClass))
          : (D = `<span class="${_.currentClass}"></span> / <span class="${_.totalClass}"></span>`)),
        _.type === "progressbar" &&
          (_.renderProgressbar
            ? (D = _.renderProgressbar.call(e, _.progressbarFillClass))
            : (D = `<span class="${_.progressbarFillClass}"></span>`)),
        (e.pagination.bullets = []),
        b.forEach((E) => {
          _.type !== "custom" && (E.innerHTML = D || ""),
            _.type === "bullets" &&
              e.pagination.bullets.push(
                ...E.querySelectorAll(Mn(_.bulletClass))
              );
        }),
        _.type !== "custom" && r("paginationRender", b[0]);
    }
    function d() {
      e.params.pagination = Hu(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const _ = e.params.pagination;
      if (!_.el) return;
      let w;
      typeof _.el == "string" && e.isElement && (w = e.el.querySelector(_.el)),
        !w &&
          typeof _.el == "string" &&
          (w = [...document.querySelectorAll(_.el)]),
        w || (w = _.el),
        !(!w || w.length === 0) &&
          (e.params.uniqueNavElements &&
            typeof _.el == "string" &&
            Array.isArray(w) &&
            w.length > 1 &&
            ((w = [...e.el.querySelectorAll(_.el)]),
            w.length > 1 && (w = w.find((b) => Ms(b, ".swiper")[0] === e.el))),
          Array.isArray(w) && w.length === 1 && (w = w[0]),
          Object.assign(e.pagination, { el: w }),
          (w = Fe(w)),
          w.forEach((b) => {
            _.type === "bullets" &&
              _.clickable &&
              b.classList.add(...(_.clickableClass || "").split(" ")),
              b.classList.add(_.modifierClass + _.type),
              b.classList.add(
                e.isHorizontal() ? _.horizontalClass : _.verticalClass
              ),
              _.type === "bullets" &&
                _.dynamicBullets &&
                (b.classList.add(`${_.modifierClass}${_.type}-dynamic`),
                (a = 0),
                _.dynamicMainBullets < 1 && (_.dynamicMainBullets = 1)),
              _.type === "progressbar" &&
                _.progressbarOpposite &&
                b.classList.add(_.progressbarOppositeClass),
              _.clickable && b.addEventListener("click", h),
              e.enabled || b.classList.add(_.lockClass);
          }));
    }
    function f() {
      const _ = e.params.pagination;
      if (l()) return;
      let w = e.pagination.el;
      w &&
        ((w = Fe(w)),
        w.forEach((b) => {
          b.classList.remove(_.hiddenClass),
            b.classList.remove(_.modifierClass + _.type),
            b.classList.remove(
              e.isHorizontal() ? _.horizontalClass : _.verticalClass
            ),
            _.clickable &&
              (b.classList.remove(...(_.clickableClass || "").split(" ")),
              b.removeEventListener("click", h));
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((b) =>
            b.classList.remove(..._.bulletActiveClass.split(" "))
          );
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const _ = e.params.pagination;
      let { el: w } = e.pagination;
      (w = Fe(w)),
        w.forEach((b) => {
          b.classList.remove(_.horizontalClass, _.verticalClass),
            b.classList.add(
              e.isHorizontal() ? _.horizontalClass : _.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.pagination.enabled === !1 ? v() : (d(), p(), m());
      }),
      i("activeIndexChange", () => {
        typeof e.snapIndex > "u" && m();
      }),
      i("snapIndexChange", () => {
        m();
      }),
      i("snapGridLengthChange", () => {
        p(), m();
      }),
      i("destroy", () => {
        f();
      }),
      i("enable disable", () => {
        let { el: _ } = e.pagination;
        _ &&
          ((_ = Fe(_)),
          _.forEach((w) =>
            w.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      i("lock unlock", () => {
        m();
      }),
      i("click", (_, w) => {
        const b = w.target,
          D = Fe(e.pagination.el);
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          D &&
          D.length > 0 &&
          !b.classList.contains(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && b === e.navigation.nextEl) ||
              (e.navigation.prevEl && b === e.navigation.prevEl))
          )
            return;
          const E = D[0].classList.contains(e.params.pagination.hiddenClass);
          r(E === !0 ? "paginationShow" : "paginationHide"),
            D.forEach((T) =>
              T.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const g = () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: _ } = e.pagination;
        _ &&
          ((_ = Fe(_)),
          _.forEach((w) =>
            w.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          d(),
          p(),
          m();
      },
      v = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: _ } = e.pagination;
        _ &&
          ((_ = Fe(_)),
          _.forEach((w) =>
            w.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          f();
      };
    Object.assign(e.pagination, {
      enable: g,
      disable: v,
      render: p,
      update: m,
      init: d,
      destroy: f,
    });
  }
  function xg(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = si();
    let o = !1,
      a = null,
      l = null,
      u,
      c,
      h,
      m;
    t({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical",
      },
    }),
      (e.scrollbar = { el: null, dragEl: null });
    function p() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: k, rtlTranslate: L } = e,
        { dragEl: B, el: X } = k,
        V = e.params.scrollbar,
        z = e.params.loop ? e.progressLoop : e.progress;
      let I = c,
        O = (h - c) * z;
      L
        ? ((O = -O), O > 0 ? ((I = c - O), (O = 0)) : -O + c > h && (I = h + O))
        : O < 0
        ? ((I = c + O), (O = 0))
        : O + c > h && (I = h - O),
        e.isHorizontal()
          ? ((B.style.transform = `translate3d(${O}px, 0, 0)`),
            (B.style.width = `${I}px`))
          : ((B.style.transform = `translate3d(0px, ${O}px, 0)`),
            (B.style.height = `${I}px`)),
        V.hide &&
          (clearTimeout(a),
          (X.style.opacity = 1),
          (a = setTimeout(() => {
            (X.style.opacity = 0), (X.style.transitionDuration = "400ms");
          }, 1e3)));
    }
    function d(k) {
      !e.params.scrollbar.el ||
        !e.scrollbar.el ||
        (e.scrollbar.dragEl.style.transitionDuration = `${k}ms`);
    }
    function f() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const { scrollbar: k } = e,
        { dragEl: L, el: B } = k;
      (L.style.width = ""),
        (L.style.height = ""),
        (h = e.isHorizontal() ? B.offsetWidth : B.offsetHeight),
        (m =
          e.size /
          (e.virtualSize +
            e.params.slidesOffsetBefore -
            (e.params.centeredSlides ? e.snapGrid[0] : 0))),
        e.params.scrollbar.dragSize === "auto"
          ? (c = h * m)
          : (c = parseInt(e.params.scrollbar.dragSize, 10)),
        e.isHorizontal()
          ? (L.style.width = `${c}px`)
          : (L.style.height = `${c}px`),
        m >= 1 ? (B.style.display = "none") : (B.style.display = ""),
        e.params.scrollbar.hide && (B.style.opacity = 0),
        e.params.watchOverflow &&
          e.enabled &&
          k.el.classList[e.isLocked ? "add" : "remove"](
            e.params.scrollbar.lockClass
          );
    }
    function g(k) {
      return e.isHorizontal() ? k.clientX : k.clientY;
    }
    function v(k) {
      const { scrollbar: L, rtlTranslate: B } = e,
        { el: X } = L;
      let V;
      (V =
        (g(k) -
          Qa(X)[e.isHorizontal() ? "left" : "top"] -
          (u !== null ? u : c / 2)) /
        (h - c)),
        (V = Math.max(Math.min(V, 1), 0)),
        B && (V = 1 - V);
      const z = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * V;
      e.updateProgress(z),
        e.setTranslate(z),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    }
    function _(k) {
      const L = e.params.scrollbar,
        { scrollbar: B, wrapperEl: X } = e,
        { el: V, dragEl: z } = B;
      (o = !0),
        (u =
          k.target === z
            ? g(k) -
              k.target.getBoundingClientRect()[
                e.isHorizontal() ? "left" : "top"
              ]
            : null),
        k.preventDefault(),
        k.stopPropagation(),
        (X.style.transitionDuration = "100ms"),
        (z.style.transitionDuration = "100ms"),
        v(k),
        clearTimeout(l),
        (V.style.transitionDuration = "0ms"),
        L.hide && (V.style.opacity = 1),
        e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
        r("scrollbarDragStart", k);
    }
    function w(k) {
      const { scrollbar: L, wrapperEl: B } = e,
        { el: X, dragEl: V } = L;
      o &&
        (k.preventDefault && k.cancelable
          ? k.preventDefault()
          : (k.returnValue = !1),
        v(k),
        (B.style.transitionDuration = "0ms"),
        (X.style.transitionDuration = "0ms"),
        (V.style.transitionDuration = "0ms"),
        r("scrollbarDragMove", k));
    }
    function b(k) {
      const L = e.params.scrollbar,
        { scrollbar: B, wrapperEl: X } = e,
        { el: V } = B;
      o &&
        ((o = !1),
        e.params.cssMode &&
          ((e.wrapperEl.style["scroll-snap-type"] = ""),
          (X.style.transitionDuration = "")),
        L.hide &&
          (clearTimeout(l),
          (l = Cs(() => {
            (V.style.opacity = 0), (V.style.transitionDuration = "400ms");
          }, 1e3))),
        r("scrollbarDragEnd", k),
        L.snapOnRelease && e.slideToClosest());
    }
    function D(k) {
      const { scrollbar: L, params: B } = e,
        X = L.el;
      if (!X) return;
      const V = X,
        z = B.passiveListeners ? { passive: !1, capture: !1 } : !1,
        I = B.passiveListeners ? { passive: !0, capture: !1 } : !1;
      if (!V) return;
      const O = k === "on" ? "addEventListener" : "removeEventListener";
      V[O]("pointerdown", _, z),
        s[O]("pointermove", w, z),
        s[O]("pointerup", b, I);
    }
    function E() {
      !e.params.scrollbar.el || !e.scrollbar.el || D("on");
    }
    function T() {
      !e.params.scrollbar.el || !e.scrollbar.el || D("off");
    }
    function P() {
      const { scrollbar: k, el: L } = e;
      e.params.scrollbar = Hu(
        e,
        e.originalParams.scrollbar,
        e.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const B = e.params.scrollbar;
      if (!B.el) return;
      let X;
      if (
        (typeof B.el == "string" &&
          e.isElement &&
          (X = e.el.querySelector(B.el)),
        !X && typeof B.el == "string")
      ) {
        if (((X = s.querySelectorAll(B.el)), !X.length)) return;
      } else X || (X = B.el);
      e.params.uniqueNavElements &&
        typeof B.el == "string" &&
        X.length > 1 &&
        L.querySelectorAll(B.el).length === 1 &&
        (X = L.querySelector(B.el)),
        X.length > 0 && (X = X[0]),
        X.classList.add(e.isHorizontal() ? B.horizontalClass : B.verticalClass);
      let V;
      X &&
        ((V = X.querySelector(Mn(e.params.scrollbar.dragClass))),
        V || ((V = vr("div", e.params.scrollbar.dragClass)), X.append(V))),
        Object.assign(k, { el: X, dragEl: V }),
        B.draggable && E(),
        X &&
          X.classList[e.enabled ? "remove" : "add"](
            ...Jn(e.params.scrollbar.lockClass)
          );
    }
    function A() {
      const k = e.params.scrollbar,
        L = e.scrollbar.el;
      L &&
        L.classList.remove(
          ...Jn(e.isHorizontal() ? k.horizontalClass : k.verticalClass)
        ),
        T();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const k = e.params.scrollbar;
      let { el: L } = e.scrollbar;
      (L = Fe(L)),
        L.forEach((B) => {
          B.classList.remove(k.horizontalClass, k.verticalClass),
            B.classList.add(
              e.isHorizontal() ? k.horizontalClass : k.verticalClass
            );
        });
    }),
      i("init", () => {
        e.params.scrollbar.enabled === !1 ? R() : (P(), f(), p());
      }),
      i("update resize observerUpdate lock unlock changeDirection", () => {
        f();
      }),
      i("setTranslate", () => {
        p();
      }),
      i("setTransition", (k, L) => {
        d(L);
      }),
      i("enable disable", () => {
        const { el: k } = e.scrollbar;
        k &&
          k.classList[e.enabled ? "remove" : "add"](
            ...Jn(e.params.scrollbar.lockClass)
          );
      }),
      i("destroy", () => {
        A();
      });
    const C = () => {
        e.el.classList.remove(...Jn(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.remove(
              ...Jn(e.params.scrollbar.scrollbarDisabledClass)
            ),
          P(),
          f(),
          p();
      },
      R = () => {
        e.el.classList.add(...Jn(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...Jn(e.params.scrollbar.scrollbarDisabledClass)
            ),
          A();
      };
    Object.assign(e.scrollbar, {
      enable: C,
      disable: R,
      updateSize: f,
      setTranslate: p,
      init: P,
      destroy: A,
    });
  }
  function Sg(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ parallax: { enabled: !1 } });
    const r =
        "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
      s = (l, u) => {
        const { rtl: c } = e,
          h = c ? -1 : 1,
          m = l.getAttribute("data-swiper-parallax") || "0";
        let p = l.getAttribute("data-swiper-parallax-x"),
          d = l.getAttribute("data-swiper-parallax-y");
        const f = l.getAttribute("data-swiper-parallax-scale"),
          g = l.getAttribute("data-swiper-parallax-opacity"),
          v = l.getAttribute("data-swiper-parallax-rotate");
        if (
          (p || d
            ? ((p = p || "0"), (d = d || "0"))
            : e.isHorizontal()
            ? ((p = m), (d = "0"))
            : ((d = m), (p = "0")),
          p.indexOf("%") >= 0
            ? (p = `${parseInt(p, 10) * u * h}%`)
            : (p = `${p * u * h}px`),
          d.indexOf("%") >= 0
            ? (d = `${parseInt(d, 10) * u}%`)
            : (d = `${d * u}px`),
          typeof g < "u" && g !== null)
        ) {
          const w = g - (g - 1) * (1 - Math.abs(u));
          l.style.opacity = w;
        }
        let _ = `translate3d(${p}, ${d}, 0px)`;
        if (typeof f < "u" && f !== null) {
          const w = f - (f - 1) * (1 - Math.abs(u));
          _ += ` scale(${w})`;
        }
        if (v && typeof v < "u" && v !== null) {
          const w = v * u * -1;
          _ += ` rotate(${w}deg)`;
        }
        l.style.transform = _;
      },
      o = () => {
        const { el: l, slides: u, progress: c, snapGrid: h, isElement: m } = e,
          p = pi(l, r);
        e.isElement && p.push(...pi(e.hostEl, r)),
          p.forEach((d) => {
            s(d, c);
          }),
          u.forEach((d, f) => {
            let g = d.progress;
            e.params.slidesPerGroup > 1 &&
              e.params.slidesPerView !== "auto" &&
              (g += Math.ceil(f / 2) - c * (h.length - 1)),
              (g = Math.min(Math.max(g, -1), 1)),
              d
                .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
                .forEach((v) => {
                  s(v, g);
                });
          });
      },
      a = function (l) {
        l === void 0 && (l = e.params.speed);
        const { el: u, hostEl: c } = e,
          h = [...u.querySelectorAll(r)];
        e.isElement && h.push(...c.querySelectorAll(r)),
          h.forEach((m) => {
            let p =
              parseInt(m.getAttribute("data-swiper-parallax-duration"), 10) ||
              l;
            l === 0 && (p = 0), (m.style.transitionDuration = `${p}ms`);
          });
      };
    i("beforeInit", () => {
      e.params.parallax.enabled &&
        ((e.params.watchSlidesProgress = !0),
        (e.originalParams.watchSlidesProgress = !0));
    }),
      i("init", () => {
        e.params.parallax.enabled && o();
      }),
      i("setTranslate", () => {
        e.params.parallax.enabled && o();
      }),
      i("setTransition", (l, u) => {
        e.params.parallax.enabled && a(u);
      });
  }
  function Eg(n) {
    let { swiper: e, extendParams: t, on: i, emit: r } = n;
    const s = mt();
    t({
      zoom: {
        enabled: !1,
        limitToOriginalSize: !1,
        maxRatio: 3,
        minRatio: 1,
        panOnMouseMove: !1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      },
    }),
      (e.zoom = { enabled: !1 });
    let o = 1,
      a = !1,
      l = !1,
      u = { x: 0, y: 0 };
    const c = -3;
    let h, m;
    const p = [],
      d = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3,
      },
      f = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {},
      },
      g = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0,
      };
    let v = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return v;
      },
      set(Y) {
        if (v !== Y) {
          const K = d.imageEl,
            Z = d.slideEl;
          r("zoomChange", Y, K, Z);
        }
        v = Y;
      },
    });
    function _() {
      if (p.length < 2) return 1;
      const Y = p[0].pageX,
        K = p[0].pageY,
        Z = p[1].pageX,
        Q = p[1].pageY;
      return Math.sqrt((Z - Y) ** 2 + (Q - K) ** 2);
    }
    function w() {
      const Y = e.params.zoom,
        K = d.imageWrapEl.getAttribute("data-swiper-zoom") || Y.maxRatio;
      if (Y.limitToOriginalSize && d.imageEl && d.imageEl.naturalWidth) {
        const Z = d.imageEl.naturalWidth / d.imageEl.offsetWidth;
        return Math.min(Z, K);
      }
      return K;
    }
    function b() {
      if (p.length < 2) return { x: null, y: null };
      const Y = d.imageEl.getBoundingClientRect();
      return [
        (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - Y.x - s.scrollX) / o,
        (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - Y.y - s.scrollY) / o,
      ];
    }
    function D() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function E(Y) {
      const K = D();
      return !!(
        Y.target.matches(K) ||
        e.slides.filter((Z) => Z.contains(Y.target)).length > 0
      );
    }
    function T(Y) {
      const K = `.${e.params.zoom.containerClass}`;
      return !!(
        Y.target.matches(K) ||
        [...e.hostEl.querySelectorAll(K)].filter((Z) => Z.contains(Y.target))
          .length > 0
      );
    }
    function P(Y) {
      if ((Y.pointerType === "mouse" && p.splice(0, p.length), !E(Y))) return;
      const K = e.params.zoom;
      if (((h = !1), (m = !1), p.push(Y), !(p.length < 2))) {
        if (((h = !0), (d.scaleStart = _()), !d.slideEl)) {
          (d.slideEl = Y.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
            d.slideEl || (d.slideEl = e.slides[e.activeIndex]);
          let Z = d.slideEl.querySelector(`.${K.containerClass}`);
          if (
            (Z &&
              (Z = Z.querySelectorAll(
                "picture, img, svg, canvas, .swiper-zoom-target"
              )[0]),
            (d.imageEl = Z),
            Z
              ? (d.imageWrapEl = Ms(d.imageEl, `.${K.containerClass}`)[0])
              : (d.imageWrapEl = void 0),
            !d.imageWrapEl)
          ) {
            d.imageEl = void 0;
            return;
          }
          d.maxRatio = w();
        }
        if (d.imageEl) {
          const [Z, Q] = b();
          (d.originX = Z),
            (d.originY = Q),
            (d.imageEl.style.transitionDuration = "0ms");
        }
        a = !0;
      }
    }
    function A(Y) {
      if (!E(Y)) return;
      const K = e.params.zoom,
        Z = e.zoom,
        Q = p.findIndex((Ce) => Ce.pointerId === Y.pointerId);
      Q >= 0 && (p[Q] = Y),
        !(p.length < 2) &&
          ((m = !0),
          (d.scaleMove = _()),
          d.imageEl &&
            ((Z.scale = (d.scaleMove / d.scaleStart) * o),
            Z.scale > d.maxRatio &&
              (Z.scale = d.maxRatio - 1 + (Z.scale - d.maxRatio + 1) ** 0.5),
            Z.scale < K.minRatio &&
              (Z.scale = K.minRatio + 1 - (K.minRatio - Z.scale + 1) ** 0.5),
            (d.imageEl.style.transform = `translate3d(0,0,0) scale(${Z.scale})`)));
    }
    function C(Y) {
      if (!E(Y) || (Y.pointerType === "mouse" && Y.type === "pointerout"))
        return;
      const K = e.params.zoom,
        Z = e.zoom,
        Q = p.findIndex((Ce) => Ce.pointerId === Y.pointerId);
      Q >= 0 && p.splice(Q, 1),
        !(!h || !m) &&
          ((h = !1),
          (m = !1),
          d.imageEl &&
            ((Z.scale = Math.max(Math.min(Z.scale, d.maxRatio), K.minRatio)),
            (d.imageEl.style.transitionDuration = `${e.params.speed}ms`),
            (d.imageEl.style.transform = `translate3d(0,0,0) scale(${Z.scale})`),
            (o = Z.scale),
            (a = !1),
            Z.scale > 1 && d.slideEl
              ? d.slideEl.classList.add(`${K.zoomedSlideClass}`)
              : Z.scale <= 1 &&
                d.slideEl &&
                d.slideEl.classList.remove(`${K.zoomedSlideClass}`),
            Z.scale === 1 &&
              ((d.originX = 0), (d.originY = 0), (d.slideEl = void 0))));
    }
    let R;
    function k() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function L() {
      clearTimeout(R),
        (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
        (R = setTimeout(() => {
          e.destroyed || k();
        }));
    }
    function B(Y) {
      const K = e.device;
      if (!d.imageEl || f.isTouched) return;
      K.android && Y.cancelable && Y.preventDefault(), (f.isTouched = !0);
      const Z = p.length > 0 ? p[0] : Y;
      (f.touchesStart.x = Z.pageX), (f.touchesStart.y = Z.pageY);
    }
    function X(Y) {
      const Z = Y.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
      if (!E(Y) || !T(Y)) return;
      const Q = e.zoom;
      if (!d.imageEl) return;
      if (!f.isTouched || !d.slideEl) {
        Z && I(Y);
        return;
      }
      if (Z) {
        I(Y);
        return;
      }
      f.isMoved ||
        ((f.width = d.imageEl.offsetWidth || d.imageEl.clientWidth),
        (f.height = d.imageEl.offsetHeight || d.imageEl.clientHeight),
        (f.startX = Lu(d.imageWrapEl, "x") || 0),
        (f.startY = Lu(d.imageWrapEl, "y") || 0),
        (d.slideWidth = d.slideEl.offsetWidth),
        (d.slideHeight = d.slideEl.offsetHeight),
        (d.imageWrapEl.style.transitionDuration = "0ms"));
      const Ce = f.width * Q.scale,
        ae = f.height * Q.scale;
      if (
        ((f.minX = Math.min(d.slideWidth / 2 - Ce / 2, 0)),
        (f.maxX = -f.minX),
        (f.minY = Math.min(d.slideHeight / 2 - ae / 2, 0)),
        (f.maxY = -f.minY),
        (f.touchesCurrent.x = p.length > 0 ? p[0].pageX : Y.pageX),
        (f.touchesCurrent.y = p.length > 0 ? p[0].pageY : Y.pageY),
        Math.max(
          Math.abs(f.touchesCurrent.x - f.touchesStart.x),
          Math.abs(f.touchesCurrent.y - f.touchesStart.y)
        ) > 5 && (e.allowClick = !1),
        !f.isMoved && !a)
      ) {
        if (
          e.isHorizontal() &&
          ((Math.floor(f.minX) === Math.floor(f.startX) &&
            f.touchesCurrent.x < f.touchesStart.x) ||
            (Math.floor(f.maxX) === Math.floor(f.startX) &&
              f.touchesCurrent.x > f.touchesStart.x))
        ) {
          (f.isTouched = !1), k();
          return;
        }
        if (
          !e.isHorizontal() &&
          ((Math.floor(f.minY) === Math.floor(f.startY) &&
            f.touchesCurrent.y < f.touchesStart.y) ||
            (Math.floor(f.maxY) === Math.floor(f.startY) &&
              f.touchesCurrent.y > f.touchesStart.y))
        ) {
          (f.isTouched = !1), k();
          return;
        }
      }
      Y.cancelable && Y.preventDefault(),
        Y.stopPropagation(),
        L(),
        (f.isMoved = !0);
      const Ve = (Q.scale - o) / (d.maxRatio - e.params.zoom.minRatio),
        { originX: ie, originY: Me } = d;
      (f.currentX =
        f.touchesCurrent.x -
        f.touchesStart.x +
        f.startX +
        Ve * (f.width - ie * 2)),
        (f.currentY =
          f.touchesCurrent.y -
          f.touchesStart.y +
          f.startY +
          Ve * (f.height - Me * 2)),
        f.currentX < f.minX &&
          (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
        f.currentX > f.maxX &&
          (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
        f.currentY < f.minY &&
          (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
        f.currentY > f.maxY &&
          (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
        g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
        g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
        g.prevTime || (g.prevTime = Date.now()),
        (g.x =
          (f.touchesCurrent.x - g.prevPositionX) /
          (Date.now() - g.prevTime) /
          2),
        (g.y =
          (f.touchesCurrent.y - g.prevPositionY) /
          (Date.now() - g.prevTime) /
          2),
        Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
        Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
        (g.prevPositionX = f.touchesCurrent.x),
        (g.prevPositionY = f.touchesCurrent.y),
        (g.prevTime = Date.now()),
        (d.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
    }
    function V() {
      const Y = e.zoom;
      if (((p.length = 0), !d.imageEl)) return;
      if (!f.isTouched || !f.isMoved) {
        (f.isTouched = !1), (f.isMoved = !1);
        return;
      }
      (f.isTouched = !1), (f.isMoved = !1);
      let K = 300,
        Z = 300;
      const Q = g.x * K,
        Ce = f.currentX + Q,
        ae = g.y * Z,
        me = f.currentY + ae;
      g.x !== 0 && (K = Math.abs((Ce - f.currentX) / g.x)),
        g.y !== 0 && (Z = Math.abs((me - f.currentY) / g.y));
      const Ve = Math.max(K, Z);
      (f.currentX = Ce), (f.currentY = me);
      const ie = f.width * Y.scale,
        Me = f.height * Y.scale;
      (f.minX = Math.min(d.slideWidth / 2 - ie / 2, 0)),
        (f.maxX = -f.minX),
        (f.minY = Math.min(d.slideHeight / 2 - Me / 2, 0)),
        (f.maxY = -f.minY),
        (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
        (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
        (d.imageWrapEl.style.transitionDuration = `${Ve}ms`),
        (d.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
    }
    function z() {
      const Y = e.zoom;
      d.slideEl &&
        e.activeIndex !== e.slides.indexOf(d.slideEl) &&
        (d.imageEl &&
          (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        d.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
        (Y.scale = 1),
        (o = 1),
        (d.slideEl = void 0),
        (d.imageEl = void 0),
        (d.imageWrapEl = void 0),
        (d.originX = 0),
        (d.originY = 0));
    }
    function I(Y) {
      if (o <= 1 || !d.imageWrapEl || !E(Y) || !T(Y)) return;
      const K = s.getComputedStyle(d.imageWrapEl).transform,
        Z = new s.DOMMatrix(K);
      if (!l) {
        (l = !0),
          (u.x = Y.clientX),
          (u.y = Y.clientY),
          (f.startX = Z.e),
          (f.startY = Z.f),
          (f.width = d.imageEl.offsetWidth || d.imageEl.clientWidth),
          (f.height = d.imageEl.offsetHeight || d.imageEl.clientHeight),
          (d.slideWidth = d.slideEl.offsetWidth),
          (d.slideHeight = d.slideEl.offsetHeight);
        return;
      }
      const Q = (Y.clientX - u.x) * c,
        Ce = (Y.clientY - u.y) * c,
        ae = f.width * o,
        me = f.height * o,
        Ve = d.slideWidth,
        ie = d.slideHeight,
        Me = Math.min(Ve / 2 - ae / 2, 0),
        et = -Me,
        gt = Math.min(ie / 2 - me / 2, 0),
        W = -gt,
        wt = Math.max(Math.min(f.startX + Q, et), Me),
        Ht = Math.max(Math.min(f.startY + Ce, W), gt);
      (d.imageWrapEl.style.transitionDuration = "0ms"),
        (d.imageWrapEl.style.transform = `translate3d(${wt}px, ${Ht}px, 0)`),
        (u.x = Y.clientX),
        (u.y = Y.clientY),
        (f.startX = wt),
        (f.startY = Ht);
    }
    function O(Y) {
      const K = e.zoom,
        Z = e.params.zoom;
      if (!d.slideEl) {
        Y &&
          Y.target &&
          (d.slideEl = Y.target.closest(
            `.${e.params.slideClass}, swiper-slide`
          )),
          d.slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (d.slideEl = pi(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
              : (d.slideEl = e.slides[e.activeIndex]));
        let Ot = d.slideEl.querySelector(`.${Z.containerClass}`);
        Ot &&
          (Ot = Ot.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (d.imageEl = Ot),
          Ot
            ? (d.imageWrapEl = Ms(d.imageEl, `.${Z.containerClass}`)[0])
            : (d.imageWrapEl = void 0);
      }
      if (!d.imageEl || !d.imageWrapEl) return;
      e.params.cssMode &&
        ((e.wrapperEl.style.overflow = "hidden"),
        (e.wrapperEl.style.touchAction = "none")),
        d.slideEl.classList.add(`${Z.zoomedSlideClass}`);
      let Q, Ce, ae, me, Ve, ie, Me, et, gt, W, wt, Ht, tt, Je, Hi, st, Ir, _t;
      typeof f.touchesStart.x > "u" && Y
        ? ((Q = Y.pageX), (Ce = Y.pageY))
        : ((Q = f.touchesStart.x), (Ce = f.touchesStart.y));
      const Ye = typeof Y == "number" ? Y : null;
      o === 1 &&
        Ye &&
        ((Q = void 0),
        (Ce = void 0),
        (f.touchesStart.x = void 0),
        (f.touchesStart.y = void 0));
      const hi = w();
      (K.scale = Ye || hi),
        (o = Ye || hi),
        Y && !(o === 1 && Ye)
          ? ((Ir = d.slideEl.offsetWidth),
            (_t = d.slideEl.offsetHeight),
            (ae = Qa(d.slideEl).left + s.scrollX),
            (me = Qa(d.slideEl).top + s.scrollY),
            (Ve = ae + Ir / 2 - Q),
            (ie = me + _t / 2 - Ce),
            (gt = d.imageEl.offsetWidth || d.imageEl.clientWidth),
            (W = d.imageEl.offsetHeight || d.imageEl.clientHeight),
            (wt = gt * K.scale),
            (Ht = W * K.scale),
            (tt = Math.min(Ir / 2 - wt / 2, 0)),
            (Je = Math.min(_t / 2 - Ht / 2, 0)),
            (Hi = -tt),
            (st = -Je),
            (Me = Ve * K.scale),
            (et = ie * K.scale),
            Me < tt && (Me = tt),
            Me > Hi && (Me = Hi),
            et < Je && (et = Je),
            et > st && (et = st))
          : ((Me = 0), (et = 0)),
        Ye && K.scale === 1 && ((d.originX = 0), (d.originY = 0)),
        (d.imageWrapEl.style.transitionDuration = "300ms"),
        (d.imageWrapEl.style.transform = `translate3d(${Me}px, ${et}px,0)`),
        (d.imageEl.style.transitionDuration = "300ms"),
        (d.imageEl.style.transform = `translate3d(0,0,0) scale(${K.scale})`);
    }
    function M() {
      const Y = e.zoom,
        K = e.params.zoom;
      if (!d.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual
          ? (d.slideEl = pi(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
          : (d.slideEl = e.slides[e.activeIndex]);
        let Z = d.slideEl.querySelector(`.${K.containerClass}`);
        Z &&
          (Z = Z.querySelectorAll(
            "picture, img, svg, canvas, .swiper-zoom-target"
          )[0]),
          (d.imageEl = Z),
          Z
            ? (d.imageWrapEl = Ms(d.imageEl, `.${K.containerClass}`)[0])
            : (d.imageWrapEl = void 0);
      }
      !d.imageEl ||
        !d.imageWrapEl ||
        (e.params.cssMode &&
          ((e.wrapperEl.style.overflow = ""),
          (e.wrapperEl.style.touchAction = "")),
        (Y.scale = 1),
        (o = 1),
        (f.touchesStart.x = void 0),
        (f.touchesStart.y = void 0),
        (d.imageWrapEl.style.transitionDuration = "300ms"),
        (d.imageWrapEl.style.transform = "translate3d(0,0,0)"),
        (d.imageEl.style.transitionDuration = "300ms"),
        (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
        d.slideEl.classList.remove(`${K.zoomedSlideClass}`),
        (d.slideEl = void 0),
        (d.originX = 0),
        (d.originY = 0),
        e.params.zoom.panOnMouseMove &&
          ((u = { x: 0, y: 0 }),
          l && ((l = !1), (f.startX = 0), (f.startY = 0))));
    }
    function re(Y) {
      const K = e.zoom;
      K.scale && K.scale !== 1 ? M() : O(Y);
    }
    function we() {
      const Y = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
        K = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
      return { passiveListener: Y, activeListenerWithCapture: K };
    }
    function Ke() {
      const Y = e.zoom;
      if (Y.enabled) return;
      Y.enabled = !0;
      const { passiveListener: K, activeListenerWithCapture: Z } = we();
      e.wrapperEl.addEventListener("pointerdown", P, K),
        e.wrapperEl.addEventListener("pointermove", A, Z),
        ["pointerup", "pointercancel", "pointerout"].forEach((Q) => {
          e.wrapperEl.addEventListener(Q, C, K);
        }),
        e.wrapperEl.addEventListener("pointermove", X, Z);
    }
    function Se() {
      const Y = e.zoom;
      if (!Y.enabled) return;
      Y.enabled = !1;
      const { passiveListener: K, activeListenerWithCapture: Z } = we();
      e.wrapperEl.removeEventListener("pointerdown", P, K),
        e.wrapperEl.removeEventListener("pointermove", A, Z),
        ["pointerup", "pointercancel", "pointerout"].forEach((Q) => {
          e.wrapperEl.removeEventListener(Q, C, K);
        }),
        e.wrapperEl.removeEventListener("pointermove", X, Z);
    }
    i("init", () => {
      e.params.zoom.enabled && Ke();
    }),
      i("destroy", () => {
        Se();
      }),
      i("touchStart", (Y, K) => {
        e.zoom.enabled && B(K);
      }),
      i("touchEnd", (Y, K) => {
        e.zoom.enabled && V();
      }),
      i("doubleTap", (Y, K) => {
        !e.animating &&
          e.params.zoom.enabled &&
          e.zoom.enabled &&
          e.params.zoom.toggle &&
          re(K);
      }),
      i("transitionEnd", () => {
        e.zoom.enabled && e.params.zoom.enabled && z();
      }),
      i("slideChange", () => {
        e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && z();
      }),
      Object.assign(e.zoom, {
        enable: Ke,
        disable: Se,
        in: O,
        out: M,
        toggle: re,
      });
  }
  function Tg(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
      (e.controller = { control: void 0 });
    function r(u, c) {
      const h = (function () {
        let f, g, v;
        return (_, w) => {
          for (g = -1, f = _.length; f - g > 1; )
            (v = (f + g) >> 1), _[v] <= w ? (g = v) : (f = v);
          return f;
        };
      })();
      (this.x = u), (this.y = c), (this.lastIndex = u.length - 1);
      let m, p;
      return (
        (this.interpolate = function (f) {
          return f
            ? ((p = h(this.x, f)),
              (m = p - 1),
              ((f - this.x[m]) * (this.y[p] - this.y[m])) /
                (this.x[p] - this.x[m]) +
                this.y[m])
            : 0;
        }),
        this
      );
    }
    function s(u) {
      e.controller.spline = e.params.loop
        ? new r(e.slidesGrid, u.slidesGrid)
        : new r(e.snapGrid, u.snapGrid);
    }
    function o(u, c) {
      const h = e.controller.control;
      let m, p;
      const d = e.constructor;
      function f(g) {
        if (g.destroyed) return;
        const v = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" &&
          (s(g), (p = -e.controller.spline.interpolate(-v))),
          (!p || e.params.controller.by === "container") &&
            ((m =
              (g.maxTranslate() - g.minTranslate()) /
              (e.maxTranslate() - e.minTranslate())),
            (Number.isNaN(m) || !Number.isFinite(m)) && (m = 1),
            (p = (v - e.minTranslate()) * m + g.minTranslate())),
          e.params.controller.inverse && (p = g.maxTranslate() - p),
          g.updateProgress(p),
          g.setTranslate(p, e),
          g.updateActiveIndex(),
          g.updateSlidesClasses();
      }
      if (Array.isArray(h))
        for (let g = 0; g < h.length; g += 1)
          h[g] !== c && h[g] instanceof d && f(h[g]);
      else h instanceof d && c !== h && f(h);
    }
    function a(u, c) {
      const h = e.constructor,
        m = e.controller.control;
      let p;
      function d(f) {
        f.destroyed ||
          (f.setTransition(u, e),
          u !== 0 &&
            (f.transitionStart(),
            f.params.autoHeight &&
              Cs(() => {
                f.updateAutoHeight();
              }),
            ea(f.wrapperEl, () => {
              m && f.transitionEnd();
            })));
      }
      if (Array.isArray(m))
        for (p = 0; p < m.length; p += 1)
          m[p] !== c && m[p] instanceof h && d(m[p]);
      else m instanceof h && c !== m && d(m);
    }
    function l() {
      e.controller.control &&
        e.controller.spline &&
        ((e.controller.spline = void 0), delete e.controller.spline);
    }
    i("beforeInit", () => {
      if (
        typeof window < "u" &&
        (typeof e.params.controller.control == "string" ||
          e.params.controller.control instanceof HTMLElement)
      ) {
        (typeof e.params.controller.control == "string"
          ? [...document.querySelectorAll(e.params.controller.control)]
          : [e.params.controller.control]
        ).forEach((c) => {
          if (
            (e.controller.control || (e.controller.control = []), c && c.swiper)
          )
            e.controller.control.push(c.swiper);
          else if (c) {
            const h = `${e.params.eventsPrefix}init`,
              m = (p) => {
                e.controller.control.push(p.detail[0]),
                  e.update(),
                  c.removeEventListener(h, m);
              };
            c.addEventListener(h, m);
          }
        });
        return;
      }
      e.controller.control = e.params.controller.control;
    }),
      i("update", () => {
        l();
      }),
      i("resize", () => {
        l();
      }),
      i("observerUpdate", () => {
        l();
      }),
      i("setTranslate", (u, c, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTranslate(c, h);
      }),
      i("setTransition", (u, c, h) => {
        !e.controller.control ||
          e.controller.control.destroyed ||
          e.controller.setTransition(c, h);
      }),
      Object.assign(e.controller, { setTranslate: o, setTransition: a });
  }
  function Cg(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        containerRole: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
        scrollOnFocus: !0,
      },
    }),
      (e.a11y = { clicked: !1 });
    let r = null,
      s,
      o,
      a = new Date().getTime();
    function l(z) {
      const I = r;
      I.length !== 0 && ((I.innerHTML = ""), (I.innerHTML = z));
    }
    function u(z) {
      const I = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(z).replace(/x/g, I);
    }
    function c(z) {
      (z = Fe(z)),
        z.forEach((I) => {
          I.setAttribute("tabIndex", "0");
        });
    }
    function h(z) {
      (z = Fe(z)),
        z.forEach((I) => {
          I.setAttribute("tabIndex", "-1");
        });
    }
    function m(z, I) {
      (z = Fe(z)),
        z.forEach((O) => {
          O.setAttribute("role", I);
        });
    }
    function p(z, I) {
      (z = Fe(z)),
        z.forEach((O) => {
          O.setAttribute("aria-roledescription", I);
        });
    }
    function d(z, I) {
      (z = Fe(z)),
        z.forEach((O) => {
          O.setAttribute("aria-controls", I);
        });
    }
    function f(z, I) {
      (z = Fe(z)),
        z.forEach((O) => {
          O.setAttribute("aria-label", I);
        });
    }
    function g(z, I) {
      (z = Fe(z)),
        z.forEach((O) => {
          O.setAttribute("id", I);
        });
    }
    function v(z, I) {
      (z = Fe(z)),
        z.forEach((O) => {
          O.setAttribute("aria-live", I);
        });
    }
    function _(z) {
      (z = Fe(z)),
        z.forEach((I) => {
          I.setAttribute("aria-disabled", !0);
        });
    }
    function w(z) {
      (z = Fe(z)),
        z.forEach((I) => {
          I.setAttribute("aria-disabled", !1);
        });
    }
    function b(z) {
      if (z.keyCode !== 13 && z.keyCode !== 32) return;
      const I = e.params.a11y,
        O = z.target;
      if (
        !(
          e.pagination &&
          e.pagination.el &&
          (O === e.pagination.el || e.pagination.el.contains(z.target)) &&
          !z.target.matches(Mn(e.params.pagination.bulletClass))
        )
      ) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const M = Fe(e.navigation.prevEl);
          Fe(e.navigation.nextEl).includes(O) &&
            ((e.isEnd && !e.params.loop) || e.slideNext(),
            e.isEnd ? l(I.lastSlideMessage) : l(I.nextSlideMessage)),
            M.includes(O) &&
              ((e.isBeginning && !e.params.loop) || e.slidePrev(),
              e.isBeginning ? l(I.firstSlideMessage) : l(I.prevSlideMessage));
        }
        e.pagination &&
          O.matches(Mn(e.params.pagination.bulletClass)) &&
          O.click();
      }
    }
    function D() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const { nextEl: z, prevEl: I } = e.navigation;
      I && (e.isBeginning ? (_(I), h(I)) : (w(I), c(I))),
        z && (e.isEnd ? (_(z), h(z)) : (w(z), c(z)));
    }
    function E() {
      return (
        e.pagination && e.pagination.bullets && e.pagination.bullets.length
      );
    }
    function T() {
      return E() && e.params.pagination.clickable;
    }
    function P() {
      const z = e.params.a11y;
      E() &&
        e.pagination.bullets.forEach((I) => {
          e.params.pagination.clickable &&
            (c(I),
            e.params.pagination.renderBullet ||
              (m(I, "button"),
              f(
                I,
                z.paginationBulletMessage.replace(/\{\{index\}\}/, Jo(I) + 1)
              ))),
            I.matches(Mn(e.params.pagination.bulletActiveClass))
              ? I.setAttribute("aria-current", "true")
              : I.removeAttribute("aria-current");
        });
    }
    const A = (z, I, O) => {
        c(z),
          z.tagName !== "BUTTON" &&
            (m(z, "button"), z.addEventListener("keydown", b)),
          f(z, O),
          d(z, I);
      },
      C = (z) => {
        o && o !== z.target && !o.contains(z.target) && (s = !0),
          (e.a11y.clicked = !0);
      },
      R = () => {
        (s = !1),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              e.destroyed || (e.a11y.clicked = !1);
            });
          });
      },
      k = (z) => {
        a = new Date().getTime();
      },
      L = (z) => {
        if (
          e.a11y.clicked ||
          !e.params.a11y.scrollOnFocus ||
          new Date().getTime() - a < 100
        )
          return;
        const I = z.target.closest(`.${e.params.slideClass}, swiper-slide`);
        if (!I || !e.slides.includes(I)) return;
        o = I;
        const O = e.slides.indexOf(I) === e.activeIndex,
          M =
            e.params.watchSlidesProgress &&
            e.visibleSlides &&
            e.visibleSlides.includes(I);
        O ||
          M ||
          (z.sourceCapabilities && z.sourceCapabilities.firesTouchEvents) ||
          (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
          requestAnimationFrame(() => {
            s ||
              (e.params.loop
                ? e.slideToLoop(
                    parseInt(I.getAttribute("data-swiper-slide-index")),
                    0
                  )
                : e.slideTo(e.slides.indexOf(I), 0),
              (s = !1));
          }));
      },
      B = () => {
        const z = e.params.a11y;
        z.itemRoleDescriptionMessage &&
          p(e.slides, z.itemRoleDescriptionMessage),
          z.slideRole && m(e.slides, z.slideRole);
        const I = e.slides.length;
        z.slideLabelMessage &&
          e.slides.forEach((O, M) => {
            const re = e.params.loop
                ? parseInt(O.getAttribute("data-swiper-slide-index"), 10)
                : M,
              we = z.slideLabelMessage
                .replace(/\{\{index\}\}/, re + 1)
                .replace(/\{\{slidesLength\}\}/, I);
            f(O, we);
          });
      },
      X = () => {
        const z = e.params.a11y;
        e.el.append(r);
        const I = e.el;
        z.containerRoleDescriptionMessage &&
          p(I, z.containerRoleDescriptionMessage),
          z.containerMessage && f(I, z.containerMessage),
          z.containerRole && m(I, z.containerRole);
        const O = e.wrapperEl,
          M = z.id || O.getAttribute("id") || `swiper-wrapper-${u(16)}`,
          re =
            e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        g(O, M), v(O, re), B();
        let { nextEl: we, prevEl: Ke } = e.navigation ? e.navigation : {};
        (we = Fe(we)),
          (Ke = Fe(Ke)),
          we && we.forEach((Y) => A(Y, M, z.nextSlideMessage)),
          Ke && Ke.forEach((Y) => A(Y, M, z.prevSlideMessage)),
          T() &&
            Fe(e.pagination.el).forEach((K) => {
              K.addEventListener("keydown", b);
            }),
          si().addEventListener("visibilitychange", k),
          e.el.addEventListener("focus", L, !0),
          e.el.addEventListener("focus", L, !0),
          e.el.addEventListener("pointerdown", C, !0),
          e.el.addEventListener("pointerup", R, !0);
      };
    function V() {
      r && r.remove();
      let { nextEl: z, prevEl: I } = e.navigation ? e.navigation : {};
      (z = Fe(z)),
        (I = Fe(I)),
        z && z.forEach((M) => M.removeEventListener("keydown", b)),
        I && I.forEach((M) => M.removeEventListener("keydown", b)),
        T() &&
          Fe(e.pagination.el).forEach((re) => {
            re.removeEventListener("keydown", b);
          }),
        si().removeEventListener("visibilitychange", k),
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("focus", L, !0),
          e.el.removeEventListener("pointerdown", C, !0),
          e.el.removeEventListener("pointerup", R, !0));
    }
    i("beforeInit", () => {
      (r = vr("span", e.params.a11y.notificationClass)),
        r.setAttribute("aria-live", "assertive"),
        r.setAttribute("aria-atomic", "true");
    }),
      i("afterInit", () => {
        e.params.a11y.enabled && X();
      }),
      i(
        "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
        () => {
          e.params.a11y.enabled && B();
        }
      ),
      i("fromEdge toEdge afterInit lock unlock", () => {
        e.params.a11y.enabled && D();
      }),
      i("paginationUpdate", () => {
        e.params.a11y.enabled && P();
      }),
      i("destroy", () => {
        e.params.a11y.enabled && V();
      });
  }
  function Ag(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1,
      },
    });
    let r = !1,
      s = {};
    const o = (p) =>
        p
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, ""),
      a = (p) => {
        const d = mt();
        let f;
        p ? (f = new URL(p)) : (f = d.location);
        const g = f.pathname
            .slice(1)
            .split("/")
            .filter((b) => b !== ""),
          v = g.length,
          _ = g[v - 2],
          w = g[v - 1];
        return { key: _, value: w };
      },
      l = (p, d) => {
        const f = mt();
        if (!r || !e.params.history.enabled) return;
        let g;
        e.params.url ? (g = new URL(e.params.url)) : (g = f.location);
        const v =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(`[data-swiper-slide-index="${d}"]`)
            : e.slides[d];
        let _ = o(v.getAttribute("data-history"));
        if (e.params.history.root.length > 0) {
          let b = e.params.history.root;
          b[b.length - 1] === "/" && (b = b.slice(0, b.length - 1)),
            (_ = `${b}/${p ? `${p}/` : ""}${_}`);
        } else g.pathname.includes(p) || (_ = `${p ? `${p}/` : ""}${_}`);
        e.params.history.keepQuery && (_ += g.search);
        const w = f.history.state;
        (w && w.value === _) ||
          (e.params.history.replaceState
            ? f.history.replaceState({ value: _ }, null, _)
            : f.history.pushState({ value: _ }, null, _));
      },
      u = (p, d, f) => {
        if (d)
          for (let g = 0, v = e.slides.length; g < v; g += 1) {
            const _ = e.slides[g];
            if (o(_.getAttribute("data-history")) === d) {
              const b = e.getSlideIndex(_);
              e.slideTo(b, p, f);
            }
          }
        else e.slideTo(0, p, f);
      },
      c = () => {
        (s = a(e.params.url)), u(e.params.speed, s.value, !1);
      },
      h = () => {
        const p = mt();
        if (e.params.history) {
          if (!p.history || !p.history.pushState) {
            (e.params.history.enabled = !1),
              (e.params.hashNavigation.enabled = !0);
            return;
          }
          if (((r = !0), (s = a(e.params.url)), !s.key && !s.value)) {
            e.params.history.replaceState || p.addEventListener("popstate", c);
            return;
          }
          u(0, s.value, e.params.runCallbacksOnInit),
            e.params.history.replaceState || p.addEventListener("popstate", c);
        }
      },
      m = () => {
        const p = mt();
        e.params.history.replaceState || p.removeEventListener("popstate", c);
      };
    i("init", () => {
      e.params.history.enabled && h();
    }),
      i("destroy", () => {
        e.params.history.enabled && m();
      }),
      i("transitionEnd _freeModeNoMomentumRelease", () => {
        r && l(e.params.history.key, e.activeIndex);
      }),
      i("slideChange", () => {
        r && e.params.cssMode && l(e.params.history.key, e.activeIndex);
      });
  }
  function Mg(n) {
    let { swiper: e, extendParams: t, emit: i, on: r } = n,
      s = !1;
    const o = si(),
      a = mt();
    t({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
        getSlideIndex(m, p) {
          if (e.virtual && e.params.virtual.enabled) {
            const d = e.slides.find((g) => g.getAttribute("data-hash") === p);
            return d
              ? parseInt(d.getAttribute("data-swiper-slide-index"), 10)
              : 0;
          }
          return e.getSlideIndex(
            pi(
              e.slidesEl,
              `.${e.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`
            )[0]
          );
        },
      },
    });
    const l = () => {
        i("hashChange");
        const m = o.location.hash.replace("#", ""),
          p =
            e.virtual && e.params.virtual.enabled
              ? e.slidesEl.querySelector(
                  `[data-swiper-slide-index="${e.activeIndex}"]`
                )
              : e.slides[e.activeIndex],
          d = p ? p.getAttribute("data-hash") : "";
        if (m !== d) {
          const f = e.params.hashNavigation.getSlideIndex(e, m);
          if (typeof f > "u" || Number.isNaN(f)) return;
          e.slideTo(f);
        }
      },
      u = () => {
        if (!s || !e.params.hashNavigation.enabled) return;
        const m =
            e.virtual && e.params.virtual.enabled
              ? e.slidesEl.querySelector(
                  `[data-swiper-slide-index="${e.activeIndex}"]`
                )
              : e.slides[e.activeIndex],
          p = m
            ? m.getAttribute("data-hash") || m.getAttribute("data-history")
            : "";
        e.params.hashNavigation.replaceState &&
        a.history &&
        a.history.replaceState
          ? (a.history.replaceState(null, null, `#${p}` || ""), i("hashSet"))
          : ((o.location.hash = p || ""), i("hashSet"));
      },
      c = () => {
        if (
          !e.params.hashNavigation.enabled ||
          (e.params.history && e.params.history.enabled)
        )
          return;
        s = !0;
        const m = o.location.hash.replace("#", "");
        if (m) {
          const d = e.params.hashNavigation.getSlideIndex(e, m);
          e.slideTo(d || 0, 0, e.params.runCallbacksOnInit, !0);
        }
        e.params.hashNavigation.watchState &&
          a.addEventListener("hashchange", l);
      },
      h = () => {
        e.params.hashNavigation.watchState &&
          a.removeEventListener("hashchange", l);
      };
    r("init", () => {
      e.params.hashNavigation.enabled && c();
    }),
      r("destroy", () => {
        e.params.hashNavigation.enabled && h();
      }),
      r("transitionEnd _freeModeNoMomentumRelease", () => {
        s && u();
      }),
      r("slideChange", () => {
        s && e.params.cssMode && u();
      });
  }
  function tl(n) {
    let { swiper: e, extendParams: t, on: i, emit: r, params: s } = n;
    (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
      t({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !1,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      });
    let o,
      a,
      l = s && s.autoplay ? s.autoplay.delay : 3e3,
      u = s && s.autoplay ? s.autoplay.delay : 3e3,
      c,
      h = new Date().getTime(),
      m,
      p,
      d,
      f,
      g,
      v,
      _;
    function w(I) {
      !e ||
        e.destroyed ||
        !e.wrapperEl ||
        (I.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", w),
          !(_ || (I.detail && I.detail.bySwiperTouchMove)) && C()));
    }
    const b = () => {
        if (e.destroyed || !e.autoplay.running) return;
        e.autoplay.paused ? (m = !0) : m && ((u = c), (m = !1));
        const I = e.autoplay.paused ? c : h + u - new Date().getTime();
        (e.autoplay.timeLeft = I),
          r("autoplayTimeLeft", I, I / l),
          (a = requestAnimationFrame(() => {
            b();
          }));
      },
      D = () => {
        let I;
        return (
          e.virtual && e.params.virtual.enabled
            ? (I = e.slides.find((M) =>
                M.classList.contains("swiper-slide-active")
              ))
            : (I = e.slides[e.activeIndex]),
          I ? parseInt(I.getAttribute("data-swiper-autoplay"), 10) : void 0
        );
      },
      E = (I) => {
        if (e.destroyed || !e.autoplay.running) return;
        cancelAnimationFrame(a), b();
        let O = typeof I > "u" ? e.params.autoplay.delay : I;
        (l = e.params.autoplay.delay), (u = e.params.autoplay.delay);
        const M = D();
        !Number.isNaN(M) &&
          M > 0 &&
          typeof I > "u" &&
          ((O = M), (l = M), (u = M)),
          (c = O);
        const re = e.params.speed,
          we = () => {
            !e ||
              e.destroyed ||
              (e.params.autoplay.reverseDirection
                ? !e.isBeginning || e.params.loop || e.params.rewind
                  ? (e.slidePrev(re, !0, !0), r("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(e.slides.length - 1, re, !0, !0), r("autoplay"))
                : !e.isEnd || e.params.loop || e.params.rewind
                ? (e.slideNext(re, !0, !0), r("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(0, re, !0, !0), r("autoplay")),
              e.params.cssMode &&
                ((h = new Date().getTime()),
                requestAnimationFrame(() => {
                  E();
                })));
          };
        return (
          O > 0
            ? (clearTimeout(o),
              (o = setTimeout(() => {
                we();
              }, O)))
            : requestAnimationFrame(() => {
                we();
              }),
          O
        );
      },
      T = () => {
        (h = new Date().getTime()),
          (e.autoplay.running = !0),
          E(),
          r("autoplayStart");
      },
      P = () => {
        (e.autoplay.running = !1),
          clearTimeout(o),
          cancelAnimationFrame(a),
          r("autoplayStop");
      },
      A = (I, O) => {
        if (e.destroyed || !e.autoplay.running) return;
        clearTimeout(o), I || (v = !0);
        const M = () => {
          r("autoplayPause"),
            e.params.autoplay.waitForTransition
              ? e.wrapperEl.addEventListener("transitionend", w)
              : C();
        };
        if (((e.autoplay.paused = !0), O)) {
          g && (c = e.params.autoplay.delay), (g = !1), M();
          return;
        }
        (c = (c || e.params.autoplay.delay) - (new Date().getTime() - h)),
          !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), M());
      },
      C = () => {
        (e.isEnd && c < 0 && !e.params.loop) ||
          e.destroyed ||
          !e.autoplay.running ||
          ((h = new Date().getTime()),
          v ? ((v = !1), E(c)) : E(),
          (e.autoplay.paused = !1),
          r("autoplayResume"));
      },
      R = () => {
        if (e.destroyed || !e.autoplay.running) return;
        const I = si();
        I.visibilityState === "hidden" && ((v = !0), A(!0)),
          I.visibilityState === "visible" && C();
      },
      k = (I) => {
        I.pointerType === "mouse" &&
          ((v = !0), (_ = !0), !(e.animating || e.autoplay.paused) && A(!0));
      },
      L = (I) => {
        I.pointerType === "mouse" && ((_ = !1), e.autoplay.paused && C());
      },
      B = () => {
        e.params.autoplay.pauseOnMouseEnter &&
          (e.el.addEventListener("pointerenter", k),
          e.el.addEventListener("pointerleave", L));
      },
      X = () => {
        e.el &&
          typeof e.el != "string" &&
          (e.el.removeEventListener("pointerenter", k),
          e.el.removeEventListener("pointerleave", L));
      },
      V = () => {
        si().addEventListener("visibilitychange", R);
      },
      z = () => {
        si().removeEventListener("visibilitychange", R);
      };
    i("init", () => {
      e.params.autoplay.enabled && (B(), V(), T());
    }),
      i("destroy", () => {
        X(), z(), e.autoplay.running && P();
      }),
      i("_freeModeStaticRelease", () => {
        (d || v) && C();
      }),
      i("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? P() : A(!0, !0);
      }),
      i("beforeTransitionStart", (I, O, M) => {
        e.destroyed ||
          !e.autoplay.running ||
          (M || !e.params.autoplay.disableOnInteraction ? A(!0, !0) : P());
      }),
      i("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
          if (e.params.autoplay.disableOnInteraction) {
            P();
            return;
          }
          (p = !0),
            (d = !1),
            (v = !1),
            (f = setTimeout(() => {
              (v = !0), (d = !0), A(!0);
            }, 200));
        }
      }),
      i("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !p)) {
          if (
            (clearTimeout(f),
            clearTimeout(o),
            e.params.autoplay.disableOnInteraction)
          ) {
            (d = !1), (p = !1);
            return;
          }
          d && e.params.cssMode && C(), (d = !1), (p = !1);
        }
      }),
      i("slideChange", () => {
        e.destroyed || !e.autoplay.running || (g = !0);
      }),
      Object.assign(e.autoplay, { start: T, stop: P, pause: A, resume: C });
  }
  function Pg(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs",
      },
    });
    let r = !1,
      s = !1;
    e.thumbs = { swiper: null };
    function o() {
      const u = e.thumbs.swiper;
      if (!u || u.destroyed) return;
      const c = u.clickedIndex,
        h = u.clickedSlide;
      if (
        (h && h.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
        typeof c > "u" ||
        c === null
      )
        return;
      let m;
      u.params.loop
        ? (m = parseInt(
            u.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (m = c),
        e.params.loop ? e.slideToLoop(m) : e.slideTo(m);
    }
    function a() {
      const { thumbs: u } = e.params;
      if (r) return !1;
      r = !0;
      const c = e.constructor;
      if (u.swiper instanceof c)
        (e.thumbs.swiper = u.swiper),
          Object.assign(e.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          Object.assign(e.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
          e.thumbs.swiper.update();
      else if (Qo(u.swiper)) {
        const h = Object.assign({}, u.swiper);
        Object.assign(h, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
          (e.thumbs.swiper = new c(h)),
          (s = !0);
      }
      return (
        e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on("tap", o),
        !0
      );
    }
    function l(u) {
      const c = e.thumbs.swiper;
      if (!c || c.destroyed) return;
      const h =
        c.params.slidesPerView === "auto"
          ? c.slidesPerViewDynamic()
          : c.params.slidesPerView;
      let m = 1;
      const p = e.params.thumbs.slideThumbActiveClass;
      if (
        (e.params.slidesPerView > 1 &&
          !e.params.centeredSlides &&
          (m = e.params.slidesPerView),
        e.params.thumbs.multipleActiveThumbs || (m = 1),
        (m = Math.floor(m)),
        c.slides.forEach((g) => g.classList.remove(p)),
        c.params.loop || (c.params.virtual && c.params.virtual.enabled))
      )
        for (let g = 0; g < m; g += 1)
          pi(
            c.slidesEl,
            `[data-swiper-slide-index="${e.realIndex + g}"]`
          ).forEach((v) => {
            v.classList.add(p);
          });
      else
        for (let g = 0; g < m; g += 1)
          c.slides[e.realIndex + g] &&
            c.slides[e.realIndex + g].classList.add(p);
      const d = e.params.thumbs.autoScrollOffset,
        f = d && !c.params.loop;
      if (e.realIndex !== c.realIndex || f) {
        const g = c.activeIndex;
        let v, _;
        if (c.params.loop) {
          const w = c.slides.find(
            (b) =>
              b.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
          );
          (v = c.slides.indexOf(w)),
            (_ = e.activeIndex > e.previousIndex ? "next" : "prev");
        } else (v = e.realIndex), (_ = v > e.previousIndex ? "next" : "prev");
        f && (v += _ === "next" ? d : -1 * d),
          c.visibleSlidesIndexes &&
            c.visibleSlidesIndexes.indexOf(v) < 0 &&
            (c.params.centeredSlides
              ? v > g
                ? (v = v - Math.floor(h / 2) + 1)
                : (v = v + Math.floor(h / 2) - 1)
              : v > g && c.params.slidesPerGroup,
            c.slideTo(v, u ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const { thumbs: u } = e.params;
      if (!(!u || !u.swiper))
        if (typeof u.swiper == "string" || u.swiper instanceof HTMLElement) {
          const c = si(),
            h = () => {
              const p =
                typeof u.swiper == "string"
                  ? c.querySelector(u.swiper)
                  : u.swiper;
              if (p && p.swiper) (u.swiper = p.swiper), a(), l(!0);
              else if (p) {
                const d = `${e.params.eventsPrefix}init`,
                  f = (g) => {
                    (u.swiper = g.detail[0]),
                      p.removeEventListener(d, f),
                      a(),
                      l(!0),
                      u.swiper.update(),
                      e.update();
                  };
                p.addEventListener(d, f);
              }
              return p;
            },
            m = () => {
              if (e.destroyed) return;
              h() || requestAnimationFrame(m);
            };
          requestAnimationFrame(m);
        } else a(), l(!0);
    }),
      i("slideChange update resize observerUpdate", () => {
        l();
      }),
      i("setTransition", (u, c) => {
        const h = e.thumbs.swiper;
        !h || h.destroyed || h.setTransition(c);
      }),
      i("beforeDestroy", () => {
        const u = e.thumbs.swiper;
        !u || u.destroyed || (s && u.destroy());
      }),
      Object.assign(e.thumbs, { init: a, update: l });
  }
  function kg(n) {
    let { swiper: e, extendParams: t, emit: i, once: r } = n;
    t({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: 0.02,
      },
    });
    function s() {
      if (e.params.cssMode) return;
      const l = e.getTranslate();
      e.setTranslate(l),
        e.setTransition(0),
        (e.touchEventsData.velocities.length = 0),
        e.freeMode.onTouchEnd({
          currentPos: e.rtl ? e.translate : -e.translate,
        });
    }
    function o() {
      if (e.params.cssMode) return;
      const { touchEventsData: l, touches: u } = e;
      l.velocities.length === 0 &&
        l.velocities.push({
          position: u[e.isHorizontal() ? "startX" : "startY"],
          time: l.touchStartTime,
        }),
        l.velocities.push({
          position: u[e.isHorizontal() ? "currentX" : "currentY"],
          time: zr(),
        });
    }
    function a(l) {
      let { currentPos: u } = l;
      if (e.params.cssMode) return;
      const {
          params: c,
          wrapperEl: h,
          rtlTranslate: m,
          snapGrid: p,
          touchEventsData: d,
        } = e,
        g = zr() - d.touchStartTime;
      if (u < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (u > -e.maxTranslate()) {
        e.slides.length < p.length
          ? e.slideTo(p.length - 1)
          : e.slideTo(e.slides.length - 1);
        return;
      }
      if (c.freeMode.momentum) {
        if (d.velocities.length > 1) {
          const P = d.velocities.pop(),
            A = d.velocities.pop(),
            C = P.position - A.position,
            R = P.time - A.time;
          (e.velocity = C / R),
            (e.velocity /= 2),
            Math.abs(e.velocity) < c.freeMode.minimumVelocity &&
              (e.velocity = 0),
            (R > 150 || zr() - P.time > 300) && (e.velocity = 0);
        } else e.velocity = 0;
        (e.velocity *= c.freeMode.momentumVelocityRatio),
          (d.velocities.length = 0);
        let v = 1e3 * c.freeMode.momentumRatio;
        const _ = e.velocity * v;
        let w = e.translate + _;
        m && (w = -w);
        let b = !1,
          D;
        const E = Math.abs(e.velocity) * 20 * c.freeMode.momentumBounceRatio;
        let T;
        if (w < e.maxTranslate())
          c.freeMode.momentumBounce
            ? (w + e.maxTranslate() < -E && (w = e.maxTranslate() - E),
              (D = e.maxTranslate()),
              (b = !0),
              (d.allowMomentumBounce = !0))
            : (w = e.maxTranslate()),
            c.loop && c.centeredSlides && (T = !0);
        else if (w > e.minTranslate())
          c.freeMode.momentumBounce
            ? (w - e.minTranslate() > E && (w = e.minTranslate() + E),
              (D = e.minTranslate()),
              (b = !0),
              (d.allowMomentumBounce = !0))
            : (w = e.minTranslate()),
            c.loop && c.centeredSlides && (T = !0);
        else if (c.freeMode.sticky) {
          let P;
          for (let A = 0; A < p.length; A += 1)
            if (p[A] > -w) {
              P = A;
              break;
            }
          Math.abs(p[P] - w) < Math.abs(p[P - 1] - w) ||
          e.swipeDirection === "next"
            ? (w = p[P])
            : (w = p[P - 1]),
            (w = -w);
        }
        if (
          (T &&
            r("transitionEnd", () => {
              e.loopFix();
            }),
          e.velocity !== 0)
        ) {
          if (
            (m
              ? (v = Math.abs((-w - e.translate) / e.velocity))
              : (v = Math.abs((w - e.translate) / e.velocity)),
            c.freeMode.sticky)
          ) {
            const P = Math.abs((m ? -w : w) - e.translate),
              A = e.slidesSizesGrid[e.activeIndex];
            P < A
              ? (v = c.speed)
              : P < 2 * A
              ? (v = c.speed * 1.5)
              : (v = c.speed * 2.5);
          }
        } else if (c.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        c.freeMode.momentumBounce && b
          ? (e.updateProgress(D),
            e.setTransition(v),
            e.setTranslate(w),
            e.transitionStart(!0, e.swipeDirection),
            (e.animating = !0),
            ea(h, () => {
              !e ||
                e.destroyed ||
                !d.allowMomentumBounce ||
                (i("momentumBounce"),
                e.setTransition(c.speed),
                setTimeout(() => {
                  e.setTranslate(D),
                    ea(h, () => {
                      !e || e.destroyed || e.transitionEnd();
                    });
                }, 0));
            }))
          : e.velocity
          ? (i("_freeModeNoMomentumRelease"),
            e.updateProgress(w),
            e.setTransition(v),
            e.setTranslate(w),
            e.transitionStart(!0, e.swipeDirection),
            e.animating ||
              ((e.animating = !0),
              ea(h, () => {
                !e || e.destroyed || e.transitionEnd();
              })))
          : e.updateProgress(w),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      } else if (c.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else c.freeMode && i("_freeModeNoMomentumRelease");
      (!c.freeMode.momentum || g >= c.longSwipesMs) &&
        (i("_freeModeStaticRelease"),
        e.updateProgress(),
        e.updateActiveIndex(),
        e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: { onTouchStart: s, onTouchMove: o, onTouchEnd: a },
    });
  }
  function Fg(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ grid: { rows: 1, fill: "column" } });
    let r, s, o, a;
    const l = () => {
        let f = e.params.spaceBetween;
        return (
          typeof f == "string" && f.indexOf("%") >= 0
            ? (f = (parseFloat(f.replace("%", "")) / 100) * e.size)
            : typeof f == "string" && (f = parseFloat(f)),
          f
        );
      },
      u = (f) => {
        const { slidesPerView: g } = e.params,
          { rows: v, fill: _ } = e.params.grid,
          w =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : f.length;
        (o = Math.floor(w / v)),
          Math.floor(w / v) === w / v ? (r = w) : (r = Math.ceil(w / v) * v),
          g !== "auto" && _ === "row" && (r = Math.max(r, g * v)),
          (s = r / v);
      },
      c = () => {
        e.slides &&
          e.slides.forEach((f) => {
            f.swiperSlideGridSet &&
              ((f.style.height = ""),
              (f.style[e.getDirectionLabel("margin-top")] = ""));
          });
      },
      h = (f, g, v) => {
        const { slidesPerGroup: _ } = e.params,
          w = l(),
          { rows: b, fill: D } = e.params.grid,
          E =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : v.length;
        let T, P, A;
        if (D === "row" && _ > 1) {
          const C = Math.floor(f / (_ * b)),
            R = f - b * _ * C,
            k = C === 0 ? _ : Math.min(Math.ceil((E - C * b * _) / b), _);
          (A = Math.floor(R / k)),
            (P = R - A * k + C * _),
            (T = P + (A * r) / b),
            (g.style.order = T);
        } else
          D === "column"
            ? ((P = Math.floor(f / b)),
              (A = f - P * b),
              (P > o || (P === o && A === b - 1)) &&
                ((A += 1), A >= b && ((A = 0), (P += 1))))
            : ((A = Math.floor(f / s)), (P = f - A * s));
        (g.row = A),
          (g.column = P),
          (g.style.height = `calc((100% - ${(b - 1) * w}px) / ${b})`),
          (g.style[e.getDirectionLabel("margin-top")] =
            A !== 0 ? w && `${w}px` : ""),
          (g.swiperSlideGridSet = !0);
      },
      m = (f, g) => {
        const { centeredSlides: v, roundLengths: _ } = e.params,
          w = l(),
          { rows: b } = e.params.grid;
        if (
          ((e.virtualSize = (f + w) * r),
          (e.virtualSize = Math.ceil(e.virtualSize / b) - w),
          e.params.cssMode ||
            (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
              e.virtualSize + w
            }px`),
          v)
        ) {
          const D = [];
          for (let E = 0; E < g.length; E += 1) {
            let T = g[E];
            _ && (T = Math.floor(T)), g[E] < e.virtualSize + g[0] && D.push(T);
          }
          g.splice(0, g.length), g.push(...D);
        }
      },
      p = () => {
        a = e.params.grid && e.params.grid.rows > 1;
      },
      d = () => {
        const { params: f, el: g } = e,
          v = f.grid && f.grid.rows > 1;
        a && !v
          ? (g.classList.remove(
              `${f.containerModifierClass}grid`,
              `${f.containerModifierClass}grid-column`
            ),
            (o = 1),
            e.emitContainerClasses())
          : !a &&
            v &&
            (g.classList.add(`${f.containerModifierClass}grid`),
            f.grid.fill === "column" &&
              g.classList.add(`${f.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
          (a = v);
      };
    i("init", p),
      i("update", d),
      (e.grid = {
        initSlides: u,
        unsetSlides: c,
        updateSlide: h,
        updateWrapperSize: m,
      });
  }
  function Lg(n) {
    const e = this,
      { params: t, slidesEl: i } = e;
    t.loop && e.loopDestroy();
    const r = (s) => {
      if (typeof s == "string") {
        const o = document.createElement("div");
        (o.innerHTML = s), i.append(o.children[0]), (o.innerHTML = "");
      } else i.append(s);
    };
    if (typeof n == "object" && "length" in n)
      for (let s = 0; s < n.length; s += 1) n[s] && r(n[s]);
    else r(n);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update();
  }
  function Og(n) {
    const e = this,
      { params: t, activeIndex: i, slidesEl: r } = e;
    t.loop && e.loopDestroy();
    let s = i + 1;
    const o = (a) => {
      if (typeof a == "string") {
        const l = document.createElement("div");
        (l.innerHTML = a), r.prepend(l.children[0]), (l.innerHTML = "");
      } else r.prepend(a);
    };
    if (typeof n == "object" && "length" in n) {
      for (let a = 0; a < n.length; a += 1) n[a] && o(n[a]);
      s = i + n.length;
    } else o(n);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update(),
      e.slideTo(s, 0, !1);
  }
  function zg(n, e) {
    const t = this,
      { params: i, activeIndex: r, slidesEl: s } = t;
    let o = r;
    i.loop && ((o -= t.loopedSlides), t.loopDestroy(), t.recalcSlides());
    const a = t.slides.length;
    if (n <= 0) {
      t.prependSlide(e);
      return;
    }
    if (n >= a) {
      t.appendSlide(e);
      return;
    }
    let l = o > n ? o + 1 : o;
    const u = [];
    for (let c = a - 1; c >= n; c -= 1) {
      const h = t.slides[c];
      h.remove(), u.unshift(h);
    }
    if (typeof e == "object" && "length" in e) {
      for (let c = 0; c < e.length; c += 1) e[c] && s.append(e[c]);
      l = o > n ? o + e.length : o;
    } else s.append(e);
    for (let c = 0; c < u.length; c += 1) s.append(u[c]);
    t.recalcSlides(),
      i.loop && t.loopCreate(),
      (!i.observer || t.isElement) && t.update(),
      i.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function Ig(n) {
    const e = this,
      { params: t, activeIndex: i } = e;
    let r = i;
    t.loop && ((r -= e.loopedSlides), e.loopDestroy());
    let s = r,
      o;
    if (typeof n == "object" && "length" in n) {
      for (let a = 0; a < n.length; a += 1)
        (o = n[a]), e.slides[o] && e.slides[o].remove(), o < s && (s -= 1);
      s = Math.max(s, 0);
    } else (o = n), e.slides[o] && e.slides[o].remove(), o < s && (s -= 1), (s = Math.max(s, 0));
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (!t.observer || e.isElement) && e.update(),
      t.loop ? e.slideTo(s + e.loopedSlides, 0, !1) : e.slideTo(s, 0, !1);
  }
  function Bg() {
    const n = this,
      e = [];
    for (let t = 0; t < n.slides.length; t += 1) e.push(t);
    n.removeSlide(e);
  }
  function Rg(n) {
    let { swiper: e } = n;
    Object.assign(e, {
      appendSlide: Lg.bind(e),
      prependSlide: Og.bind(e),
      addSlide: zg.bind(e),
      removeSlide: Ig.bind(e),
      removeAllSlides: Bg.bind(e),
    });
  }
  function ho(n) {
    const {
      effect: e,
      swiper: t,
      on: i,
      setTranslate: r,
      setTransition: s,
      overwriteParams: o,
      perspective: a,
      recreateShadows: l,
      getEffectParams: u,
    } = n;
    i("beforeInit", () => {
      if (t.params.effect !== e) return;
      t.classNames.push(`${t.params.containerModifierClass}${e}`),
        a && a() && t.classNames.push(`${t.params.containerModifierClass}3d`);
      const h = o ? o() : {};
      Object.assign(t.params, h), Object.assign(t.originalParams, h);
    }),
      i("setTranslate", () => {
        t.params.effect === e && r();
      }),
      i("setTransition", (h, m) => {
        t.params.effect === e && s(m);
      }),
      i("transitionEnd", () => {
        if (t.params.effect === e && l) {
          if (!u || !u().slideShadows) return;
          t.slides.forEach((h) => {
            h.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((m) => m.remove());
          }),
            l();
        }
      });
    let c;
    i("virtualUpdate", () => {
      t.params.effect === e &&
        (t.slides.length || (c = !0),
        requestAnimationFrame(() => {
          c && t.slides && t.slides.length && (r(), (c = !1));
        }));
    });
  }
  function ta(n, e) {
    const t = As(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function il(n) {
    let { swiper: e, duration: t, transformElements: i, allSlides: r } = n;
    const { activeIndex: s } = e,
      o = (a) =>
        a.parentElement
          ? a.parentElement
          : e.slides.find((u) => u.shadowRoot && u.shadowRoot === a.parentNode);
    if (e.params.virtualTranslate && t !== 0) {
      let a = !1,
        l;
      r
        ? (l = i)
        : (l = i.filter((u) => {
            const c = u.classList.contains("swiper-slide-transform") ? o(u) : u;
            return e.getSlideIndex(c) === s;
          })),
        l.forEach((u) => {
          ea(u, () => {
            if (a || !e || e.destroyed) return;
            (a = !0), (e.animating = !1);
            const c = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            e.wrapperEl.dispatchEvent(c);
          });
        });
    }
  }
  function Ng(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ fadeEffect: { crossFade: !1 } }),
      ho({
        effect: "fade",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: o } = e,
            a = e.params.fadeEffect;
          for (let l = 0; l < o.length; l += 1) {
            const u = e.slides[l];
            let h = -u.swiperSlideOffset;
            e.params.virtualTranslate || (h -= e.translate);
            let m = 0;
            e.isHorizontal() || ((m = h), (h = 0));
            const p = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(u.progress), 0)
                : 1 + Math.min(Math.max(u.progress, -1), 0),
              d = ta(a, u);
            (d.style.opacity = p),
              (d.style.transform = `translate3d(${h}px, ${m}px, 0px)`);
          }
        },
        setTransition: (o) => {
          const a = e.slides.map((l) => As(l));
          a.forEach((l) => {
            l.style.transitionDuration = `${o}ms`;
          }),
            il({ swiper: e, duration: o, transformElements: a, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  function $g(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    });
    const r = (l, u, c) => {
      let h = c
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        m = c
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      h ||
        ((h = vr(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            c ? "left" : "top"
          }`.split(" ")
        )),
        l.append(h)),
        m ||
          ((m = vr(
            "div",
            `swiper-slide-shadow-cube swiper-slide-shadow-${
              c ? "right" : "bottom"
            }`.split(" ")
          )),
          l.append(m)),
        h && (h.style.opacity = Math.max(-u, 0)),
        m && (m.style.opacity = Math.max(u, 0));
    };
    ho({
      effect: "cube",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
            el: l,
            wrapperEl: u,
            slides: c,
            width: h,
            height: m,
            rtlTranslate: p,
            size: d,
            browser: f,
          } = e,
          g = Ka(e),
          v = e.params.cubeEffect,
          _ = e.isHorizontal(),
          w = e.virtual && e.params.virtual.enabled;
        let b = 0,
          D;
        v.shadow &&
          (_
            ? ((D = e.wrapperEl.querySelector(".swiper-cube-shadow")),
              D ||
                ((D = vr("div", "swiper-cube-shadow")), e.wrapperEl.append(D)),
              (D.style.height = `${h}px`))
            : ((D = l.querySelector(".swiper-cube-shadow")),
              D || ((D = vr("div", "swiper-cube-shadow")), l.append(D))));
        for (let T = 0; T < c.length; T += 1) {
          const P = c[T];
          let A = T;
          w && (A = parseInt(P.getAttribute("data-swiper-slide-index"), 10));
          let C = A * 90,
            R = Math.floor(C / 360);
          p && ((C = -C), (R = Math.floor(-C / 360)));
          const k = Math.max(Math.min(P.progress, 1), -1);
          let L = 0,
            B = 0,
            X = 0;
          A % 4 === 0
            ? ((L = -R * 4 * d), (X = 0))
            : (A - 1) % 4 === 0
            ? ((L = 0), (X = -R * 4 * d))
            : (A - 2) % 4 === 0
            ? ((L = d + R * 4 * d), (X = d))
            : (A - 3) % 4 === 0 && ((L = -d), (X = 3 * d + d * 4 * R)),
            p && (L = -L),
            _ || ((B = L), (L = 0));
          const V = `rotateX(${g(_ ? 0 : -C)}deg) rotateY(${g(
            _ ? C : 0
          )}deg) translate3d(${L}px, ${B}px, ${X}px)`;
          k <= 1 &&
            k > -1 &&
            ((b = A * 90 + k * 90), p && (b = -A * 90 - k * 90)),
            (P.style.transform = V),
            v.slideShadows && r(P, k, _);
        }
        if (
          ((u.style.transformOrigin = `50% 50% -${d / 2}px`),
          (u.style["-webkit-transform-origin"] = `50% 50% -${d / 2}px`),
          v.shadow)
        )
          if (_)
            D.style.transform = `translate3d(0px, ${
              h / 2 + v.shadowOffset
            }px, ${-h / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
              v.shadowScale
            })`;
          else {
            const T = Math.abs(b) - Math.floor(Math.abs(b) / 90) * 90,
              P =
                1.5 -
                (Math.sin((T * 2 * Math.PI) / 360) / 2 +
                  Math.cos((T * 2 * Math.PI) / 360) / 2),
              A = v.shadowScale,
              C = v.shadowScale / P,
              R = v.shadowOffset;
            D.style.transform = `scale3d(${A}, 1, ${C}) translate3d(0px, ${
              m / 2 + R
            }px, ${-m / 2 / C}px) rotateX(-89.99deg)`;
          }
        const E =
          (f.isSafari || f.isWebView) && f.needPerspectiveFix ? -d / 2 : 0;
        (u.style.transform = `translate3d(0px,0,${E}px) rotateX(${g(
          e.isHorizontal() ? 0 : b
        )}deg) rotateY(${g(e.isHorizontal() ? -b : 0)}deg)`),
          u.style.setProperty("--swiper-cube-translate-z", `${E}px`);
      },
      setTransition: (l) => {
        const { el: u, slides: c } = e;
        if (
          (c.forEach((h) => {
            (h.style.transitionDuration = `${l}ms`),
              h
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((m) => {
                  m.style.transitionDuration = `${l}ms`;
                });
          }),
          e.params.cubeEffect.shadow && !e.isHorizontal())
        ) {
          const h = u.querySelector(".swiper-cube-shadow");
          h && (h.style.transitionDuration = `${l}ms`);
        }
      },
      recreateShadows: () => {
        const l = e.isHorizontal();
        e.slides.forEach((u) => {
          const c = Math.max(Math.min(u.progress, 1), -1);
          r(u, c, l);
        });
      },
      getEffectParams: () => e.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0,
      }),
    });
  }
  function mo(n, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${
        n ? ` swiper-slide-shadow-${n}` : ""
      }`,
      r = As(e);
    let s = r.querySelector(`.${i.split(" ").join(".")}`);
    return s || ((s = vr("div", i.split(" "))), r.append(s)), s;
  }
  function Yg(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
    const r = (l, u) => {
      let c = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-left")
          : l.querySelector(".swiper-slide-shadow-top"),
        h = e.isHorizontal()
          ? l.querySelector(".swiper-slide-shadow-right")
          : l.querySelector(".swiper-slide-shadow-bottom");
      c || (c = mo("flip", l, e.isHorizontal() ? "left" : "top")),
        h || (h = mo("flip", l, e.isHorizontal() ? "right" : "bottom")),
        c && (c.style.opacity = Math.max(-u, 0)),
        h && (h.style.opacity = Math.max(u, 0));
    };
    ho({
      effect: "flip",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: l, rtlTranslate: u } = e,
          c = e.params.flipEffect,
          h = Ka(e);
        for (let m = 0; m < l.length; m += 1) {
          const p = l[m];
          let d = p.progress;
          e.params.flipEffect.limitRotation &&
            (d = Math.max(Math.min(p.progress, 1), -1));
          const f = p.swiperSlideOffset;
          let v = -180 * d,
            _ = 0,
            w = e.params.cssMode ? -f - e.translate : -f,
            b = 0;
          e.isHorizontal()
            ? u && (v = -v)
            : ((b = w), (w = 0), (_ = -v), (v = 0)),
            (p.style.zIndex = -Math.abs(Math.round(d)) + l.length),
            c.slideShadows && r(p, d);
          const D = `translate3d(${w}px, ${b}px, 0px) rotateX(${h(
              _
            )}deg) rotateY(${h(v)}deg)`,
            E = ta(c, p);
          E.style.transform = D;
        }
      },
      setTransition: (l) => {
        const u = e.slides.map((c) => As(c));
        u.forEach((c) => {
          (c.style.transitionDuration = `${l}ms`),
            c
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((h) => {
                h.style.transitionDuration = `${l}ms`;
              });
        }),
          il({ swiper: e, duration: l, transformElements: u });
      },
      recreateShadows: () => {
        e.params.flipEffect,
          e.slides.forEach((l) => {
            let u = l.progress;
            e.params.flipEffect.limitRotation &&
              (u = Math.max(Math.min(l.progress, 1), -1)),
              r(l, u);
          });
      },
      getEffectParams: () => e.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function qg(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0,
      },
    }),
      ho({
        effect: "coverflow",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { width: o, height: a, slides: l, slidesSizesGrid: u } = e,
            c = e.params.coverflowEffect,
            h = e.isHorizontal(),
            m = e.translate,
            p = h ? -m + o / 2 : -m + a / 2,
            d = h ? c.rotate : -c.rotate,
            f = c.depth,
            g = Ka(e);
          for (let v = 0, _ = l.length; v < _; v += 1) {
            const w = l[v],
              b = u[v],
              D = w.swiperSlideOffset,
              E = (p - D - b / 2) / b,
              T =
                typeof c.modifier == "function"
                  ? c.modifier(E)
                  : E * c.modifier;
            let P = h ? d * T : 0,
              A = h ? 0 : d * T,
              C = -f * Math.abs(T),
              R = c.stretch;
            typeof R == "string" &&
              R.indexOf("%") !== -1 &&
              (R = (parseFloat(c.stretch) / 100) * b);
            let k = h ? 0 : R * T,
              L = h ? R * T : 0,
              B = 1 - (1 - c.scale) * Math.abs(T);
            Math.abs(L) < 0.001 && (L = 0),
              Math.abs(k) < 0.001 && (k = 0),
              Math.abs(C) < 0.001 && (C = 0),
              Math.abs(P) < 0.001 && (P = 0),
              Math.abs(A) < 0.001 && (A = 0),
              Math.abs(B) < 0.001 && (B = 0);
            const X = `translate3d(${L}px,${k}px,${C}px)  rotateX(${g(
                A
              )}deg) rotateY(${g(P)}deg) scale(${B})`,
              V = ta(c, w);
            if (
              ((V.style.transform = X),
              (w.style.zIndex = -Math.abs(Math.round(T)) + 1),
              c.slideShadows)
            ) {
              let z = h
                  ? w.querySelector(".swiper-slide-shadow-left")
                  : w.querySelector(".swiper-slide-shadow-top"),
                I = h
                  ? w.querySelector(".swiper-slide-shadow-right")
                  : w.querySelector(".swiper-slide-shadow-bottom");
              z || (z = mo("coverflow", w, h ? "left" : "top")),
                I || (I = mo("coverflow", w, h ? "right" : "bottom")),
                z && (z.style.opacity = T > 0 ? T : 0),
                I && (I.style.opacity = -T > 0 ? -T : 0);
            }
          }
        },
        setTransition: (o) => {
          e.slides
            .map((l) => As(l))
            .forEach((l) => {
              (l.style.transitionDuration = `${o}ms`),
                l
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((u) => {
                    u.style.transitionDuration = `${o}ms`;
                  });
            });
        },
        perspective: () => !0,
        overwriteParams: () => ({ watchSlidesProgress: !0 }),
      });
  }
  function Hg(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
        next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
      },
    });
    const r = (a) => (typeof a == "string" ? a : `${a}px`);
    ho({
      effect: "creative",
      swiper: e,
      on: i,
      setTranslate: () => {
        const { slides: a, wrapperEl: l, slidesSizesGrid: u } = e,
          c = e.params.creativeEffect,
          { progressMultiplier: h } = c,
          m = e.params.centeredSlides,
          p = Ka(e);
        if (m) {
          const d = u[0] / 2 - e.params.slidesOffsetBefore || 0;
          l.style.transform = `translateX(calc(50% - ${d}px))`;
        }
        for (let d = 0; d < a.length; d += 1) {
          const f = a[d],
            g = f.progress,
            v = Math.min(
              Math.max(f.progress, -c.limitProgress),
              c.limitProgress
            );
          let _ = v;
          m ||
            (_ = Math.min(
              Math.max(f.originalProgress, -c.limitProgress),
              c.limitProgress
            ));
          const w = f.swiperSlideOffset,
            b = [e.params.cssMode ? -w - e.translate : -w, 0, 0],
            D = [0, 0, 0];
          let E = !1;
          e.isHorizontal() || ((b[1] = b[0]), (b[0] = 0));
          let T = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          };
          v < 0 ? ((T = c.next), (E = !0)) : v > 0 && ((T = c.prev), (E = !0)),
            b.forEach((B, X) => {
              b[X] = `calc(${B}px + (${r(T.translate[X])} * ${Math.abs(
                v * h
              )}))`;
            }),
            D.forEach((B, X) => {
              let V = T.rotate[X] * Math.abs(v * h);
              D[X] = V;
            }),
            (f.style.zIndex = -Math.abs(Math.round(g)) + a.length);
          const P = b.join(", "),
            A = `rotateX(${p(D[0])}deg) rotateY(${p(D[1])}deg) rotateZ(${p(
              D[2]
            )}deg)`,
            C =
              _ < 0
                ? `scale(${1 + (1 - T.scale) * _ * h})`
                : `scale(${1 - (1 - T.scale) * _ * h})`,
            R =
              _ < 0 ? 1 + (1 - T.opacity) * _ * h : 1 - (1 - T.opacity) * _ * h,
            k = `translate3d(${P}) ${A} ${C}`;
          if ((E && T.shadow) || !E) {
            let B = f.querySelector(".swiper-slide-shadow");
            if ((!B && T.shadow && (B = mo("creative", f)), B)) {
              const X = c.shadowPerProgress ? v * (1 / c.limitProgress) : v;
              B.style.opacity = Math.min(Math.max(Math.abs(X), 0), 1);
            }
          }
          const L = ta(c, f);
          (L.style.transform = k),
            (L.style.opacity = R),
            T.origin && (L.style.transformOrigin = T.origin);
        }
      },
      setTransition: (a) => {
        const l = e.slides.map((u) => As(u));
        l.forEach((u) => {
          (u.style.transitionDuration = `${a}ms`),
            u.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
              c.style.transitionDuration = `${a}ms`;
            });
        }),
          il({ swiper: e, duration: a, transformElements: l, allSlides: !0 });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
  }
  function Xg(n) {
    let { swiper: e, extendParams: t, on: i } = n;
    t({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8,
      },
    }),
      ho({
        effect: "cards",
        swiper: e,
        on: i,
        setTranslate: () => {
          const { slides: o, activeIndex: a, rtlTranslate: l } = e,
            u = e.params.cardsEffect,
            { startTranslate: c, isTouched: h } = e.touchEventsData,
            m = l ? -e.translate : e.translate;
          for (let p = 0; p < o.length; p += 1) {
            const d = o[p],
              f = d.progress,
              g = Math.min(Math.max(f, -4), 4);
            let v = d.swiperSlideOffset;
            e.params.centeredSlides &&
              !e.params.cssMode &&
              (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
              e.params.centeredSlides &&
                e.params.cssMode &&
                (v -= o[0].swiperSlideOffset);
            let _ = e.params.cssMode ? -v - e.translate : -v,
              w = 0;
            const b = -100 * Math.abs(g);
            let D = 1,
              E = -u.perSlideRotate * g,
              T = u.perSlideOffset - Math.abs(g) * 0.75;
            const P =
                e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p,
              A =
                (P === a || P === a - 1) &&
                g > 0 &&
                g < 1 &&
                (h || e.params.cssMode) &&
                m < c,
              C =
                (P === a || P === a + 1) &&
                g < 0 &&
                g > -1 &&
                (h || e.params.cssMode) &&
                m > c;
            if (A || C) {
              const B = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5;
              (E += -28 * g * B),
                (D += -0.5 * B),
                (T += 96 * B),
                (w = `${-25 * B * Math.abs(g)}%`);
            }
            if (
              (g < 0
                ? (_ = `calc(${_}px ${l ? "-" : "+"} (${T * Math.abs(g)}%))`)
                : g > 0
                ? (_ = `calc(${_}px ${l ? "-" : "+"} (-${T * Math.abs(g)}%))`)
                : (_ = `${_}px`),
              !e.isHorizontal())
            ) {
              const B = w;
              (w = _), (_ = B);
            }
            const R = g < 0 ? `${1 + (1 - D) * g}` : `${1 - (1 - D) * g}`,
              k = `
        translate3d(${_}, ${w}, ${b}px)
        rotateZ(${u.rotate ? (l ? -E : E) : 0}deg)
        scale(${R})
      `;
            if (u.slideShadows) {
              let B = d.querySelector(".swiper-slide-shadow");
              B || (B = mo("cards", d)),
                B &&
                  (B.style.opacity = Math.min(
                    Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                    1
                  ));
            }
            d.style.zIndex = -Math.abs(Math.round(f)) + o.length;
            const L = ta(u, d);
            L.style.transform = k;
          }
        },
        setTransition: (o) => {
          const a = e.slides.map((l) => As(l));
          a.forEach((l) => {
            (l.style.transitionDuration = `${o}ms`),
              l.querySelectorAll(".swiper-slide-shadow").forEach((u) => {
                u.style.transitionDuration = `${o}ms`;
              });
          }),
            il({ swiper: e, duration: o, transformElements: a });
        },
        perspective: () => !0,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
  }
  $.registerPlugin($e);
  function Gg() {
    const n = $.matchMedia();
    let e = null;
    n.add("(min-width: 992px)", () => {
      e && (e.destroy(!0, !0), (e = null));
      const t = document.querySelectorAll(".h-testimonials__cl-item");
      if (!t.length) return;
      const i = document.querySelector(".h-testimonials__cl-wrapper");
      if (i) {
        i.classList.remove("swiper");
        const o = i.querySelector(".h-testimonials__cl-inner");
        o && o.classList.remove("swiper-wrapper"),
          t.forEach((a) => a.classList.remove("swiper-slide"));
      }
      const r = document.querySelector(".swiper-pagination");
      r && r.parentNode && r.parentNode.removeChild(r);
      const s = Array.from(
        document.querySelectorAll(".h-testimonials__info-content")
      ).map((o) => new $e(o, { type: "lines" }));
      t.forEach((o, a) => {
        const l = o.querySelector(".h-testimonials__info-name");
        o.querySelector(".h-testimonials__info-content");
        const u = s[a],
          c = $.timeline({ paused: !0 })
            .to(o, {
              backgroundColor: "#FFFFFF",
              duration: 0.5,
              ease: "power2.inOut",
            })
            .to(
              l,
              { color: "#000000", duration: 0.5, ease: "power2.inOut" },
              "<"
            )
            .to(
              u.lines,
              {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.inOut",
              },
              "<"
            );
        $.set(u.lines, { opacity: 0, yPercent: 50 }),
          $.set(o, { backgroundColor: "transparent" }),
          o.addEventListener("mouseenter", () => {
            c.play();
          }),
          o.addEventListener("mouseleave", () => {
            c.reverse();
          });
      });
    }),
      n.add("(max-width: 480px)", () => {
        const t = document.querySelector(".h-testimonials__cl-wrapper");
        if (!t) return;
        let i = t.querySelector(".swiper-pagination");
        i ||
          ((i = document.createElement("div")),
          (i.className = "swiper-pagination"),
          t.appendChild(i)),
          (e = new Pi(".h-testimonials__swiper", {
            modules: [el, tl],
            direction: "horizontal",
            slidesPerView: 1,
            loop: !0,
            speed: 1e3,
            autoplay: { delay: 15e3, disableOnInteraction: !1 },
            pagination: {
              el: ".swiper-pagination",
              clickable: !0,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            },
          }));
      });
  }
  function Wg() {
    const n = document.querySelectorAll(".h-team__cl-wrapper");
    n.length > 0 &&
      $.timeline().to(n, {
        xPercent: -100,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
  }
  const Vg = [
    vg,
    yg,
    bg,
    Dg,
    el,
    xg,
    Sg,
    Eg,
    Tg,
    Cg,
    Ag,
    Mg,
    tl,
    Pg,
    kg,
    Fg,
    Rg,
    Ng,
    $g,
    Yg,
    qg,
    Hg,
    Xg,
  ];
  Pi.use(Vg);
  function Ug() {
    var t, i;
    const n = document.querySelectorAll(".h-logos__filters-item"),
      e = document.querySelector(".h-logos__swiper");
    if (n.length > 0 && e) {
      const r = new Pi(".h-logos__swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        speed: 750,
        easing: "ease-out",
      });
      n.forEach((s, o) => {
        s.addEventListener("click", () => {
          var a;
          n.forEach((l) => {
            var u;
            return (u = l.querySelector(".button--h-logos")) == null
              ? void 0
              : u.classList.remove("active");
          }),
            (a = s.querySelector(".button--h-logos")) == null ||
              a.classList.add("active"),
            r.slideTo(o);
        });
      }),
        (i =
          (t = n[0]) == null ? void 0 : t.querySelector(".button--h-logos")) ==
          null || i.classList.add("active");
    }
  }
  $.registerPlugin(he, $e);
  function jg() {
    const n = document.querySelectorAll("[data-animate-title]");
    n.length &&
      n.forEach((e) => {
        const t = new $e(e, { type: "lines", linesClass: "split-line" });
        t.lines.forEach((i) => {
          const r = document.createElement("div");
          (r.style.overflow = "hidden"),
            i.parentNode.insertBefore(r, i),
            r.appendChild(i);
        }),
          $.from(t.lines, {
            scrollTrigger: {
              trigger: e,
              start: "bottom bottom",
              toggleActions: "play none none reverse",
            },
            duration: 1.4,
            yPercent: 100,
            opacity: 0,
            stagger: 0.15,
            ease: "expo.out",
          });
      });
  }
  $.registerPlugin(he, $e);
  function Zg() {
    $.matchMedia().add("(min-width: 992px)", () => {
      const e = document.querySelectorAll("[data-animate-text]");
      e.length &&
        e.forEach((t) => {
          const i = new $e(t, {
            type: ["lines", "words"],
            linesClass: "split-line",
            wordsClass: "split-word",
          });
          i.lines
            .map((s) => i.words.filter((o) => s.contains(o)))
            .forEach((s, o) => {
              $.from(s, {
                scrollTrigger: {
                  trigger: t,
                  start: "bottom bottom",
                  toggleActions: "play none none reverse",
                },
                duration: 0.8,
                opacity: 0.2,
                stagger: 0.025,
                delay: o * 0.1,
                ease: "power2.inOut",
              });
            });
        });
    });
  }
  $.registerPlugin(he);
  function Qg() {
    const n = document.querySelectorAll("[data-animate-image]");
    n.length &&
      n.forEach((e) => {
        $.to(e, {
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: e,
            start: "top bottom",
            end: "bottom top",
            scrub: !0,
          },
        });
      });
  }
  $.registerPlugin(he);
  function Kg() {
    $.matchMedia().add("(min-width: 992px)", () => {
      const e = document.querySelectorAll(
        ".us-splitcontent__image-wrapper--animate"
      );
      e.length &&
        Array.from(e)
          .slice(0, 4)
          .forEach((i, r) => {
            const s = { 0: 100, 1: -100, 2: 150, 3: -150 };
            $.from(i, {
              scrollTrigger: {
                trigger: i,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
                toggleActions: "play none none reverse",
              },
              y: s[r] || 0,
              ease: "none",
            });
          });
    });
  }
  $.registerPlugin($e);
  function Jg() {
    const n = $.matchMedia(),
      e = document.querySelectorAll(".p-grid__link"),
      t = document.querySelectorAll(".p-list__cl-item"),
      i = document.querySelector("#featured-num"),
      r = document.querySelector("#all-num");
    e && i && (i.textContent = `(${e.length})`),
      t && r && (r.textContent = `(${t.length})`),
      n.add("(min-width: 992px)", () => {
        e.length &&
          e.forEach((u) => {
            const c = u.querySelector(".p-grid__info-text"),
              h = u.querySelector(".p-grid__image-wrapper"),
              m = u.querySelector(".p-grid__image");
            if (c && h && m) {
              const p = new $e(c, { type: ["words"] }),
                d = $.timeline({ paused: !0 })
                  .from(p.words, {
                    duration: 1,
                    opacity: 0,
                    yPercent: 70,
                    stagger: 0.015,
                    ease: "expo.inOut",
                  })
                  .to(
                    m,
                    { duration: 1, scale: 1.15, ease: "power2.inOut" },
                    "<"
                  );
              h.addEventListener("mouseenter", () => {
                d.play();
              }),
                h.addEventListener("mouseleave", () => {
                  d.reverse();
                });
            }
          });
        const l = document.querySelectorAll(".p-list__cl-link");
        l.length > 0 &&
          l.forEach((u) => {
            const c = u.querySelector(".p-list__title"),
              h = u.querySelector(".p-list__cl-text--right"),
              m = $.timeline({ paused: !0 })
                .to(c, {
                  color: "#808080",
                  x: "-1.25rem",
                  duration: 0.8,
                  ease: "power2.inOut",
                })
                .to(
                  h,
                  { x: "1.25rem", duration: 0.8, ease: "power2.inOut" },
                  "<"
                );
            u.addEventListener("mouseenter", () => {
              m.play();
            }),
              u.addEventListener("mouseleave", () => {
                m.reverse();
              });
          });
      });
    const s = document.querySelectorAll("[data-filter]"),
      o = document.querySelectorAll("[data-category]");
    let a = null;
    s.length > 0 &&
      o.length > 0 &&
      s.forEach((l) => {
        l.addEventListener("click", () => {
          const u = l.getAttribute("data-filter");
          a === u
            ? ((a = null),
              o.forEach((c) => {
                c.classList.remove("p-list__cl-item--disabled");
              }),
              l.classList.remove("active"))
            : (s.forEach((c) => c.classList.remove("active")),
              l.classList.add("active"),
              (a = u),
              u === "all"
                ? o.forEach((c) => {
                    c.classList.remove("p-list__cl-item--disabled");
                  })
                : o.forEach((c) => {
                    c.getAttribute("data-category") !== u
                      ? c.classList.add("p-list__cl-item--disabled")
                      : c.classList.remove("p-list__cl-item--disabled");
                  }));
        });
      });
  }
  function e0() {
    $.matchMedia().add("(min-width: 992px)", () => {
      const e = document.querySelector(".p-cursor__cl"),
        t = document.querySelectorAll(".p-cursor__cl-item"),
        i = document.querySelector(".p-list__cl-wrapper"),
        r = document.querySelectorAll(".p-list__cl-item");
      if (!e || !i || !t.length || !r.length) return () => {};
      let s = -1;
      $.set(e, { opacity: 0, scale: 0, rotation: -45 }),
        $.set(t, { yPercent: 100 });
      function o(c) {
        e &&
          $.to(e, {
            x: c.clientX,
            y: c.clientY,
            duration: 1,
            ease: "power1.out",
          });
      }
      function a() {
        e &&
          $.to(e, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
      }
      function l() {
        e &&
          ($.to(e, {
            opacity: 0,
            scale: 0,
            rotation: -45,
            duration: 0.4,
            ease: "power2.inOut",
          }),
          (s = -1));
      }
      function u(c) {
        if (!t || !t[c]) return;
        const h = c > s ? 1 : -1,
          m = t[c],
          p = $.timeline({ defaults: { duration: 1.6, ease: "expo.out" } });
        s >= 0 && t[s]
          ? ($.set(m, { yPercent: 100 * h }),
            p.to(t[s], { yPercent: -100 * h }).to(m, { yPercent: 0 }, "<"))
          : p.fromTo(m, { yPercent: 100 * h }, { yPercent: 0 }),
          (s = c);
      }
      return (
        document.addEventListener("mousemove", o),
        i.addEventListener("mouseenter", a),
        i.addEventListener("mouseleave", l),
        r.forEach((c, h) => {
          if (c) {
            const m = () => u(h);
            c.addEventListener("mouseenter", m), (c._hoverHandler = m);
          }
        }),
        () => {
          document.removeEventListener("mousemove", o),
            i &&
              (i.removeEventListener("mouseenter", a),
              i.removeEventListener("mouseleave", l)),
            r.forEach((c) => {
              c &&
                c._hoverHandler &&
                (c.removeEventListener("mouseenter", c._hoverHandler),
                delete c._hoverHandler);
            }),
            document.body && (document.body.style.cursor = "auto");
        }
      );
    });
  }
  function t0() {
    const n = document.querySelector(".p-list__warpper"),
      e = document.querySelector(".section--p-list");
    n && e && po(n, e);
    const t = document.querySelector(".p-grid__wrapper"),
      i = document.querySelector(".section--p-grid");
    t && i && po(t, i);
  }
  $.registerPlugin(he);
  function i0() {
    const n = $.matchMedia();
    n.add("(min-width: 992px)", () => {
      const e = document.querySelectorAll(".t-cards__card"),
        t = document.querySelectorAll(".t-cards__card-wrapper"),
        i = document.querySelector(".t-cards__wrapper");
      e.length > 0 &&
        $.from(e, {
          xPercent: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: e,
            start: "top center",
            toggleActions: "play none none reverse",
          },
        }),
        t.length > 0 &&
          i &&
          $.to(t, {
            xPercent: -e.length * 100,
            ease: "none",
            scrollTrigger: {
              trigger: i,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
            },
          });
    }),
      n.add("(max-width: 991px)", () => {
        const e = document.querySelector(".t-cards__swiper");
        if (!e) return;
        let t = e.querySelector(".swiper-pagination");
        t ||
          ((t = document.createElement("div")),
          (t.className = "swiper-pagination"),
          e.appendChild(t)),
          new Pi(".t-cards__swiper", {
            modules: [el, tl],
            direction: "horizontal",
            slidesPerView: 1,
            spaceBetween: 16,
            loop: !0,
            speed: 1e3,
            autoplay: { delay: 15e3, disableOnInteraction: !1 },
            pagination: {
              el: ".swiper-pagination",
              clickable: !0,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            },
          });
      });
  }
  $.registerPlugin($e);
  function r0() {
    if (window.innerWidth < 992) return () => {};
    const n = {
      duration: { color: 0.3, content: 1 },
      ease: { in: "power3.inOut", out: "power3.inOut" },
      stagger: { images: 0.1, text: 0.05 },
      offset: { black: 0, grey: 0.1 },
    };
    let e = null,
      t = null,
      i = !1,
      r = new Map();
    const s = document.querySelectorAll(".t-team__list-item"),
      o = document.querySelectorAll(".t-team__cl-item");
    function a() {
      o.forEach((d, f) => {
        const g = {},
          v = d.querySelector(".t-team__cl-title--black"),
          _ = d.querySelector(".t-team__cl-title--grey"),
          w = d.querySelectorAll(
            ".t-team__title--small, .t-team__content-text"
          );
        if (v) {
          const b = new $e(v, { type: "lines" });
          b.lines.forEach((D) => {
            const E = document.createElement("div");
            (E.style.overflow = "hidden"),
              D.parentNode.insertBefore(E, D),
              E.appendChild(D);
          }),
            (g.blackTitle = b);
        }
        if (_) {
          const b = new $e(_, { type: "lines" });
          b.lines.forEach((D) => {
            const E = document.createElement("div");
            (E.style.overflow = "hidden"),
              D.parentNode.insertBefore(E, D),
              E.appendChild(D);
          }),
            (g.greyTitle = b);
        }
        w.forEach((b, D) => {
          const E = new $e(b, { type: "lines" });
          E.lines.forEach((T) => {
            const P = document.createElement("div");
            (P.style.overflow = "hidden"),
              T.parentNode.insertBefore(P, T),
              P.appendChild(T);
          }),
            (g[`simple${D}`] = E);
        }),
          r.set(f, g);
      });
    }
    function l() {
      o.forEach((d, f) => {
        $.set(d, { autoAlpha: 0 });
        const g = d.querySelectorAll(
            ".t-team__portrait, .t-team__cl-image:not(.t-team__cl-image--top):not(.t-team__cl-image--bottom)"
          ),
          v = d.querySelector(".t-team__cl-image--top"),
          _ = d.querySelector(".t-team__cl-image--bottom"),
          w = d.querySelector(".t-team__position");
        $.set(g, { yPercent: 100 }),
          $.set(v, { xPercent: 100 }),
          $.set(_, { xPercent: -100 }),
          $.set(w, { opacity: 0 });
        const b = r.get(f);
        b &&
          Object.values(b).forEach((D) => {
            $.set(D.lines, { yPercent: 100 });
          });
      }),
        s.forEach((d) => {
          $.set(d, { color: "#ababab" });
        });
    }
    function u(d, f) {
      const g = o[d],
        v = $.timeline(),
        _ = r.get(d);
      $.set(g, { autoAlpha: 1 }), v.addLabel("contentAnimations", 0);
      const w = g.querySelectorAll(
        ".t-team__portrait, .t-team__cl-image:not(.t-team__cl-image--top):not(.t-team__cl-image--bottom)"
      );
      v.fromTo(
        w,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: n.duration.content,
          ease: n.ease.out,
          stagger: n.stagger.images,
        },
        "contentAnimations"
      );
      const b = g.querySelector(".t-team__cl-image--top");
      v.fromTo(
        b,
        { xPercent: 100 },
        { xPercent: 0, duration: n.duration.content, ease: n.ease.out },
        "contentAnimations"
      );
      const D = g.querySelector(".t-team__cl-image--bottom");
      v.fromTo(
        D,
        { xPercent: -100 },
        { xPercent: 0, duration: n.duration.content, ease: n.ease.out },
        "contentAnimations"
      );
      const E = g.querySelector(".t-team__position");
      return (
        v.fromTo(
          E,
          { opacity: 0 },
          { opacity: 1, duration: n.duration.content, ease: n.ease.out },
          "contentAnimations"
        ),
        _ &&
          (_.blackTitle &&
            v.fromTo(
              _.blackTitle.lines,
              { yPercent: 100 },
              {
                yPercent: 0,
                duration: n.duration.content,
                ease: n.ease.out,
                stagger: n.stagger.text,
              },
              "contentAnimations+=" + n.offset.black
            ),
          _.greyTitle &&
            v.fromTo(
              _.greyTitle.lines,
              { yPercent: 100 },
              {
                yPercent: 0,
                duration: n.duration.content,
                ease: n.ease.out,
                stagger: n.stagger.text,
              },
              "contentAnimations+=" + n.offset.grey
            ),
          Object.entries(_).forEach(([T, P]) => {
            T.startsWith("simple") &&
              v.fromTo(
                P.lines,
                { yPercent: 100 },
                {
                  yPercent: 0,
                  duration: n.duration.content,
                  ease: n.ease.out,
                  stagger: n.stagger.text,
                },
                "contentAnimations"
              );
          })),
        v
      );
    }
    function c(d, f) {
      const g = o[d],
        v = $.timeline({
          onComplete: () => {
            $.set(g, { autoAlpha: 0 });
            const T = g.querySelectorAll(
                ".t-team__portrait, .t-team__cl-image:not(.t-team__cl-image--top):not(.t-team__cl-image--bottom)"
              ),
              P = g.querySelector(".t-team__cl-image--top"),
              A = g.querySelector(".t-team__cl-image--bottom"),
              C = g.querySelector(".t-team__position");
            $.set(T, { yPercent: 100 }),
              $.set(P, { xPercent: 100 }),
              $.set(A, { xPercent: -100 }),
              $.set(C, { opacity: 0 });
            const R = r.get(d);
            R &&
              Object.values(R).forEach((k) => {
                $.set(k.lines, { yPercent: 100 });
              });
          },
        });
      v.addLabel("contentAnimationsOut", 0);
      const _ = g.querySelectorAll(
        ".t-team__portrait, .t-team__cl-image:not(.t-team__cl-image--top):not(.t-team__cl-image--bottom)"
      );
      v.to(
        _,
        {
          yPercent: -100,
          duration: n.duration.content,
          ease: n.ease.in,
          stagger: n.stagger.images,
        },
        "contentAnimationsOut"
      );
      const w = g.querySelector(".t-team__cl-image--top");
      v.to(
        w,
        { xPercent: -100, duration: n.duration.content, ease: n.ease.in },
        "contentAnimationsOut"
      );
      const b = g.querySelector(".t-team__cl-image--bottom");
      v.to(
        b,
        { xPercent: 100, duration: n.duration.content, ease: n.ease.in },
        "contentAnimationsOut"
      );
      const D = g.querySelector(".t-team__position");
      v.to(
        D,
        { opacity: 0, duration: n.duration.content, ease: n.ease.in },
        "contentAnimationsOut"
      );
      const E = r.get(d);
      return (
        E &&
          (E.blackTitle &&
            v.to(
              E.blackTitle.lines,
              {
                yPercent: -100,
                duration: n.duration.content,
                ease: n.ease.in,
                stagger: n.stagger.text,
              },
              "contentAnimationsOut+=" + n.offset.black
            ),
          E.greyTitle &&
            v.to(
              E.greyTitle.lines,
              {
                yPercent: -100,
                duration: n.duration.content,
                ease: n.ease.in,
                stagger: n.stagger.text,
              },
              "contentAnimationsOut+=" + n.offset.grey
            ),
          Object.entries(E).forEach(([T, P]) => {
            T.startsWith("simple") &&
              v.to(
                P.lines,
                {
                  yPercent: -100,
                  duration: n.duration.content,
                  ease: n.ease.in,
                  stagger: n.stagger.text,
                },
                "contentAnimationsOut"
              );
          })),
        v
      );
    }
    async function h(d, f) {
      if (!(i || d === e)) {
        i = !0;
        try {
          $.to(f, { color: "#000000", duration: 0.15, ease: "none" });
          const g = $.timeline();
          if (e !== null && t) {
            $.to(t, { color: "#ababab", duration: 0.15, ease: "none" });
            const _ = c(e, t);
            g.add(_), g.addLabel("switchPoint", "+=0.2");
          }
          const v = u(d, f);
          g.add(v, e !== null ? "switchPoint" : 0),
            (e = d),
            (t = f),
            await g.play();
        } catch (g) {
          console.error("Animation error:", g);
        } finally {
          i = !1;
        }
      }
    }
    function m() {
      a(),
        l(),
        s.forEach((d, f) => {
          d.addEventListener("click", () => h(f, d)),
            (d.style.cursor = "pointer");
        }),
        s.length > 0 && h(0, s[0]);
    }
    m();
    function p() {
      r.forEach((d) => {
        Object.values(d).forEach((f) => {
          f.revert();
        });
      });
    }
    return p;
  }
  function n0() {
    const n = document.querySelector(".t-team__wrapper"),
      e = document.querySelector(".section--t-team");
    n && e && po(n, e);
    const t = document.querySelector(".t-team__studio__wrapper"),
      i = document.querySelector(".t-team__studio-sticky");
    t && i && po(t, i);
  }
  $.registerPlugin($e);
  function s0() {
    const n = $.matchMedia();
    let e = null;
    n.add("(min-width: 992px)", () => {
      e && (e.destroy(!0, !0), (e = null));
      const t = document.querySelectorAll(".t-team__crew-list-item"),
        i = document.querySelector(".t-team__crew-swiper");
      if (i) {
        i.classList.remove("swiper");
        const o = i.querySelector(".t-team__crew-list");
        o && o.classList.remove("swiper-wrapper"),
          t.forEach((a) => a.classList.remove("swiper-slide"));
      }
      const r = document.querySelector(".swiper-pagination");
      r && r.parentNode && r.parentNode.removeChild(r);
      const s = Array.from(document.querySelectorAll(".t-team__crew-text")).map(
        (o) => new $e(o, { type: "lines" })
      );
      t.forEach((o, a) => {
        const l = o.querySelector(".t-team__crew-subtitle"),
          u = s[a],
          c = $.timeline({ paused: !0 })
            .to(o, {
              backgroundColor: "#f2f2f2",
              duration: 0.5,
              ease: "power2.inOut",
            })
            .to(
              l,
              { color: "#000000", duration: 0.5, ease: "power2.inOut" },
              "<"
            )
            .to(
              u.lines,
              {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.inOut",
              },
              "<"
            );
        $.set(u.lines, { opacity: 0, yPercent: 50 }),
          $.set(o, { backgroundColor: "#ffffff" }),
          o.addEventListener("mouseenter", () => {
            c.play();
          }),
          o.addEventListener("mouseleave", () => {
            c.reverse();
          });
      });
    }),
      n.add("(max-width: 992px)", () => {
        const t = document.querySelector(".t-team__crew-swiper");
        if (!t) return;
        let i = t.querySelector(".swiper-pagination");
        i ||
          ((i = document.createElement("div")),
          (i.className = "swiper-pagination"),
          t.appendChild(i)),
          (e = new Pi(".t-team__crew-swiper", {
            modules: [el, tl],
            direction: "horizontal",
            slidesPerView: 1,
            loop: !0,
            speed: 1e3,
            autoplay: { delay: 15e3, disableOnInteraction: !1 },
            pagination: {
              el: ".swiper-pagination",
              clickable: !0,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            },
          }));
      });
  }
  $.registerPlugin(he, $e);
  function o0() {
    const n = document.querySelector(".t-team__span"),
      e = document.querySelector(".t-team__studio-sticky"),
      t = document.querySelectorAll(".t-team__studio-image");
    let i;
    n && e && (i = new $e(n, { type: "words" }));
    let r = $.matchMedia();
    return (
      r.add("(min-width: 480px)", () => {
        n &&
          e &&
          i &&
          $.from(i.words, {
            color: "#808080",
            ease: "none",
            duration: 0.1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: e,
              start: "top top",
              end: "90% bottom",
              scrub: !0,
            },
          }),
          t.length > 0 &&
            e &&
            $.from(t, {
              yPercent: 110,
              duration: 1.8,
              ease: "expo.inOut",
              stagger: 0.2,
              scrollTrigger: {
                trigger: e,
                start: "55% bottom",
                toggleActions: "play none none reverse",
              },
            });
      }),
      r.add("(max-width: 479px)", () => {
        if (
          (n &&
            e &&
            i &&
            $.from(i.words, {
              color: "#808080",
              ease: "none",
              duration: 0.1,
              stagger: 0.1,
              scrollTrigger: {
                trigger: e,
                start: "top bottom",
                end: "top top",
                scrub: !0,
              },
            }),
          t.length > 0 && e)
        ) {
          const s = [-10, -5, -20];
          t.forEach((o, a) => {
            $.to(o, {
              yPercent: s[a],
              ease: "none",
              scrollTrigger: {
                trigger: o,
                start: "top bottom",
                end: "bottom top",
                scrub: !0,
              },
            });
          });
        }
      }),
      () => {
        r.revert(), i && i.revert();
      }
    );
  }
  function a0() {
    $.matchMedia().add("(min-width: 992px)", () => {
      const e = document.querySelector(".p-cursor__cl--home"),
        t = document.querySelectorAll(".p-cursor__cl-item--home"),
        i = document.querySelector(".h-testimonials__cl-wrapper"),
        r = document.querySelectorAll(".h-testimonials__cl-item");
      if (!e || !i || !t.length || !r.length) return () => {};
      let s = -1;
      $.set(e, {
        opacity: 0,
        scale: 0,
        rotation: -45,
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 999,
      }),
        $.set(t, { yPercent: 100, opacity: 1 });
      function o(c) {
        e &&
          $.to(e, {
            x: c.clientX,
            y: c.clientY,
            duration: 1,
            ease: "power1.out",
          });
      }
      function a() {
        e &&
          $.to(e, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
      }
      function l() {
        e &&
          ($.to(e, {
            opacity: 0,
            scale: 0,
            rotation: -45,
            duration: 0.4,
            ease: "power2.inOut",
          }),
          (s = -1));
      }
      function u(c) {
        if (!t || !t[c]) return;
        const h = c > s ? 1 : -1,
          m = t[c],
          p = $.timeline({ defaults: { duration: 1.6, ease: "expo.out" } });
        s >= 0 && t[s]
          ? ($.set(m, { yPercent: 100 * h, opacity: 1 }),
            p
              .to(t[s], { yPercent: -100 * h, opacity: 1 })
              .to(m, { yPercent: 0, opacity: 1 }, "<"))
          : p.fromTo(
              m,
              { yPercent: 100 * h, opacity: 0 },
              { yPercent: 0, opacity: 1 }
            ),
          (s = c);
      }
      return (
        document.addEventListener("mousemove", o),
        i.addEventListener("mouseenter", a),
        i.addEventListener("mouseleave", l),
        r.forEach((c, h) => {
          if (c) {
            const m = () => u(h);
            c.addEventListener("mouseenter", m), (c._hoverHandler = m);
          }
        }),
        () => {
          document.removeEventListener("mousemove", o),
            i &&
              (i.removeEventListener("mouseenter", a),
              i.removeEventListener("mouseleave", l)),
            r.forEach((c) => {
              c &&
                c._hoverHandler &&
                (c.removeEventListener("mouseenter", c._hoverHandler),
                delete c._hoverHandler);
            }),
            document.body && (document.body.style.cursor = "auto");
        }
      );
    });
  }
  function l0() {
    if (
      ((...e) => e.every((t) => document.querySelector(t) !== null))(
        ".loader__embed",
        ".loader__pannel",
        ".loader__wrapper"
      )
    ) {
      let e = $.timeline();
      document.querySelector(".loader__embed") &&
        e.to(
          ".loader__embed",
          { yPercent: -100, duration: 1.2, ease: "expo.inOut" },
          0
        ),
        document.querySelector(".loader__pannel") &&
          e.to(
            ".loader__pannel",
            {
              yPercent: -100,
              duration: 1.2,
              stagger: 0.05,
              ease: "expo.inOut",
            },
            0
          ),
        document.querySelector(".loader__wrapper") &&
          e
            .to(".loader__wrapper", { display: "none" })
            .to(".loader__embed", { yPercent: 100, duration: 0 });
      let t = $.timeline({ paused: !0 });
      document.querySelector(".loader__wrapper") &&
        t.to(".loader__wrapper", { display: "flex" }),
        document.querySelector(".loader__pannel") &&
          t
            .to(".loader__pannel", { yPercent: 100, duration: 0 })
            .to(".loader__pannel", {
              yPercent: 0,
              duration: 1.2,
              stagger: -0.05,
              ease: "expo.inOut",
            }),
        document.querySelector(".loader__embed") &&
          t.to(
            ".loader__embed",
            { yPercent: 0, duration: 1.2, ease: "expo.inOut" },
            "<"
          );
      let i = 1200,
        r = 1200,
        s = "no-transition";
      document.addEventListener("click", function (o) {
        let a = o.target.closest("a");
        if (!a) return;
        let l = a.hostname,
          u = a.getAttribute("href"),
          c = a.getAttribute("target");
        if (
          l == window.location.hostname &&
          u.indexOf("#") === -1 &&
          !a.classList.contains(s) &&
          c !== "_blank"
        ) {
          o.preventDefault(), t.play();
          let h = u;
          setTimeout(function () {
            window.location = h;
          }, r);
        }
      }),
        (window.onpageshow = function (o) {
          o.persisted && window.location.reload();
        }),
        setTimeout(() => {
          window.addEventListener("resize", function () {
            setTimeout(() => {
              document
                .querySelectorAll(".transition")
                .forEach((o) => (o.style.display = "none"));
            }, 50);
          });
        }, i);
    }
  }
  $.registerPlugin($e);
  function u0() {
    $.matchMedia().add("(min-width: 480px)", () => {
      const e = [
          ".uc-hero__title",
          ".uc-hero__category",
          ".uc-hero__date",
          ".uc-hero__text",
        ],
        t = document.querySelector(".uc-hero__image-wrapper");
      if (!t || !e.length) return;
      const i = $.timeline();
      return (
        i.fromTo(
          t,
          { y: "4rem", opacity: 0 },
          {
            y: "0rem",
            opacity: 1,
            ease: "expo.inOut",
            delay: 2,
            duration: 1.8,
          },
          0
        ),
        e.forEach((s) => {
          const o = document.querySelector(s);
          if (!o) return;
          const a = new $e(o, { type: "lines", linesClass: "split-line" }),
            l = new $e(a.lines, {
              type: "lines",
              linesClass: "split-line-inner",
            });
          i.fromTo(
            l.lines,
            { yPercent: 100, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 1.8,
              ease: "expo.inOut",
              stagger: 0.1,
            },
            2
          );
        }),
        () => {
          e.forEach((s) => {
            const o = document.querySelector(s);
            if (!o) return;
            $e.getAll().forEach((l) => {
              l.target === o && l.revert();
            });
          });
        }
      );
    });
  }
  $.registerPlugin($e);
  function c0() {
    $.matchMedia().add("(min-width: 480px)", () => {
      const e = document.querySelectorAll(".t-hero__title-text"),
        t = document.querySelector(".t-hero__image");
      if (!t || !e.length) return;
      const i = $.timeline();
      return (
        i.fromTo(
          t,
          { y: "4rem", opacity: 0 },
          {
            y: "0rem",
            opacity: 1,
            ease: "expo.inOut",
            delay: 0.4,
            duration: 1.8,
          },
          0
        ),
        e.forEach((s, o) => {
          if (!s) return;
          const a = document.createElement("div");
          (a.style.overflow = "hidden"),
            s.parentNode.insertBefore(a, s),
            a.appendChild(s);
          const l = new $e(s, { type: "lines", linesClass: "split-line" }),
            u = new $e(l.lines, {
              type: "lines",
              linesClass: "split-line-inner",
            });
          l.lines.forEach((c) => {
            c.style.overflow = "hidden";
          }),
            i.fromTo(
              u.lines,
              { yPercent: 100 },
              { yPercent: 0, duration: 1.8, ease: "expo.inOut", stagger: 0.1 },
              0.4 + o * 0.15
            );
        }),
        () => {
          e.forEach((s) => {
            if (!s) return;
            $e.getAll().forEach((a) => {
              a.target === s && a.revert();
            });
          });
        }
      );
    });
  }
  $.registerPlugin($e);
  function d0() {
    $.matchMedia().add("(min-width: 480px)", () => {
      const e = document.querySelector(".p-hero__title"),
        t = document.querySelectorAll(".p-grid__cl-item"),
        i = document.querySelector(".p-grid__title-wrapper");
      if (!e || !t.length || !i) return;
      const r = $.timeline(),
        s = new $e(e, {
          type: "lines,words",
          linesClass: "split-line",
          wordsClass: "split-word",
        });
      s.lines.forEach((l) => {
        const u = document.createElement("div");
        (u.style.overflow = "hidden"),
          (u.style.height = "auto"),
          (u.style.display = "block"),
          l.parentNode.insertBefore(u, l),
          u.appendChild(l);
      });
      const o = new $e(s.words, {
        type: "words",
        wordsClass: "split-word-inner",
      });
      return (
        s.words.forEach((l) => {
          (l.style.display = "inline-block"), (l.style.verticalAlign = "top");
        }),
        r.fromTo(
          o.words,
          { yPercent: 100, opacity: 0 },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.8,
            ease: "expo.inOut",
            stagger: 0.05,
            delay: 0.4,
          },
          0
        ),
        r.fromTo(
          t,
          { opacity: 0, y: "15rem" },
          {
            opacity: 1,
            y: "0rem",
            duration: 1.2,
            ease: "power4.inOut",
            stagger: 0.1,
          },
          0.6
        ),
        r.fromTo(
          i,
          { opacity: 0, y: "5rem" },
          { opacity: 1, y: "0rem", duration: 1.2, ease: "power4.inOut" },
          0.8
        ),
        () => {
          $e.getAll().forEach((u) => {
            u.target === e && u.revert();
          });
        }
      );
    });
  }
  function f0() {
    $.matchMedia().add("(min-width: 992px)", () => {
      const e = document.querySelector(".p-cursor__cl"),
        t = document.querySelectorAll(".p-cursor__cl-item"),
        i = document.querySelector(".h-logos__cl-wrapper"),
        r = document.querySelectorAll(".h-logos__cl-item--animate");
      if (!e || !i || !t.length || !r.length) return () => {};
      let s = -1;
      $.set(e, { opacity: 0, scale: 0, rotation: -45 }),
        $.set(t, { yPercent: 100 });
      function o(c) {
        e &&
          $.to(e, {
            x: c.clientX,
            y: c.clientY,
            duration: 1,
            ease: "power1.out",
          });
      }
      function a() {
        e &&
          $.to(e, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
      }
      function l() {
        e &&
          ($.to(e, {
            opacity: 0,
            scale: 0,
            rotation: -45,
            duration: 0.4,
            ease: "power2.inOut",
          }),
          (s = -1));
      }
      function u(c) {
        if (!t || !t[c]) return;
        const h = c > s ? 1 : -1,
          m = t[c],
          p = $.timeline({ defaults: { duration: 1.6, ease: "expo.out" } });
        s >= 0 && t[s]
          ? ($.set(m, { yPercent: 100 * h }),
            p.to(t[s], { yPercent: -100 * h }).to(m, { yPercent: 0 }, "<"))
          : p.fromTo(m, { yPercent: 100 * h }, { yPercent: 0 }),
          (s = c);
      }
      return (
        document.addEventListener("mousemove", o),
        i.addEventListener("mouseenter", a),
        i.addEventListener("mouseleave", l),
        r.forEach((c, h) => {
          if (c) {
            const m = () => u(h);
            c.addEventListener("mouseenter", m), (c._hoverHandler = m);
          }
        }),
        () => {
          document.removeEventListener("mousemove", o),
            i &&
              (i.removeEventListener("mouseenter", a),
              i.removeEventListener("mouseleave", l)),
            r.forEach((c) => {
              c &&
                c._hoverHandler &&
                (c.removeEventListener("mouseenter", c._hoverHandler),
                delete c._hoverHandler);
            }),
            document.body && (document.body.style.cursor = "auto");
        }
      );
    });
  }
  function p0() {
    document.querySelectorAll(".c-modal__content").forEach((e) => {
      const t = e.querySelectorAll(".c-modal__content-list-item"),
        i = e.querySelectorAll(".c-modal__image");
      if (!t.length || !i.length) return;
      let r = 0,
        s = !1;
      $.set(i, { yPercent: 100, visibility: "hidden" }),
        i[0] && $.set(i[0], { yPercent: 0, visibility: "visible" }),
        t.forEach((o, a) => {
          a < i.length &&
            (o.addEventListener("mouseenter", () => {
              if (((s = !0), a === r)) return;
              const l = a > r ? 1 : -1,
                u = i[a],
                c = i[r];
              $.set(u, { yPercent: 100 * l, visibility: "visible" }),
                $.timeline({ defaults: { duration: 1.6, ease: "expo.out" } })
                  .to(c, { yPercent: -100 * l })
                  .to(u, { yPercent: 0 }, "<"),
                (r = a);
            }),
            o.addEventListener("mouseleave", () => {
              (s = !1),
                setTimeout(() => {
                  if (!s && r !== 0) {
                    const l = i[0],
                      u = i[r];
                    $.set(l, { yPercent: -100, visibility: "visible" }),
                      $.timeline({
                        defaults: { duration: 1.6, ease: "expo.out" },
                      })
                        .to(u, { yPercent: 100 })
                        .to(l, { yPercent: 0 }, "<"),
                      (r = 0);
                  }
                }, 50);
            }));
        });
    });
  }
  function h0() {
    $.matchMedia().add("(max-width: 480px)", () => {
      const e = document.querySelectorAll(".t-team__cl-item");
      e.length > 0 &&
        e.forEach((t) => {
          const i = t.querySelector(".t-team__cl-col--toggle"),
            r = $.timeline({ paused: !0, reversed: !0 }).to(i, {
              height: "auto",
              duration: 1,
              ease: "power3.inOut",
            });
          t.addEventListener("click", () => {
            r.reversed() ? r.play() : r.reverse();
          });
        });
    });
  }
  function m0() {
    $.matchMedia().add("(max-width: 480px)", () => {
      const e = document.querySelectorAll(".p-list__cl-item");
      e.length > 0 &&
        e.forEach((t) => {
          const i = t.querySelector(".p-list__cl-toggle"),
            r = $.timeline({ paused: !0, reversed: !0 }).to(i, {
              height: "auto",
              duration: 1,
              ease: "power3.inOut",
            });
          t.addEventListener("click", () => {
            r.reversed() ? r.play() : r.reverse();
          });
        });
    });
  }
  function g0() {
    $.matchMedia().add("(min-width: 992px)", () => {
      const e = document.querySelectorAll(".ct-visual__background-text--left"),
        t = document.querySelectorAll(".ct-visual__background-text--right");
      e.length > 0 &&
        $.timeline({ repeat: -1 }).to(e, {
          xPercent: -100,
          ease: "none",
          duration: 50,
        }),
        t.length > 0 &&
          $.timeline({ repeat: -1 }).to(t, {
            xPercent: 100,
            ease: "none",
            duration: 50,
          });
    });
  }
  function w0() {
    $.matchMedia().add("(min-width: 992px)", () => {
      const e = document.querySelector(".h-cursor__cursor--modal"),
        t = document.querySelectorAll(".h-cards__card");
      if (e && t.length > 0) {
        $.set(e, { scale: 0 });
        const i = $.timeline({ paused: !0 }).to(e, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          }),
          r = $.quickTo(e, "x", { duration: 0.75, ease: "power2.out" }),
          s = $.quickTo(e, "y", { duration: 0.75, ease: "power2.out" });
        t.forEach((o) => {
          o.addEventListener("mouseenter", () => {
            i.play();
          }),
            o.addEventListener("mouseleave", () => {
              i.reverse();
            });
        }),
          window.addEventListener("mousemove", (o) => {
            r(o.clientX), s(o.clientY);
          });
      }
    });
  }
  let ia = null;
  const _0 = () => {
      const n = document.querySelector("body");
      n.hasAttribute("data-smooth-scroll") &&
        ((ia = new ep()),
        ia.on("scroll", he.update),
        $.ticker.add((e) => {
          ia.raf(e * 1e3);
        }),
        $.ticker.lagSmoothing(0),
        document.querySelectorAll("[data-lenis-toggle]").forEach((e) => {
          e.addEventListener("click", function () {
            n.classList.toggle("stop-scroll"),
              n.classList.contains("stop-scroll") ? ia.stop() : ia.start();
          });
        }));
    },
    v0 = () => {
      he.config({ autoRefreshEvents: "DOMContentLoaded,load, resize" }),
        _0(),
        Lh(),
        l0(),
        Oh(),
        zh(),
        Gh(),
        Wh(),
        Vh(),
        p0(),
        f0(),
        Jh(),
        em(),
        w0(),
        Ug(),
        Gg(),
        a0(),
        Wg(),
        c0(),
        n0(),
        i0(),
        r0(),
        h0(),
        s0(),
        o0(),
        d0(),
        t0(),
        m0(),
        Jg(),
        e0(),
        u0(),
        jg(),
        Zg(),
        Qg(),
        Kg(),
        g0();
    };
  document.addEventListener("DOMContentLoaded", () => {
    v0();
  });
});
