!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var u=r("6JpON");const l={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btnPromises:document.querySelector('button[type="submit"]')};function i(e){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({delay:e}):n({delay:e})}),parseInt(l.delay.value))}))}l.btnPromises.addEventListener("click",(t=>{t.preventDefault();let n=Number(l.delay.value),o=Number(l.step.value);for(let t=0;t<l.amount.value;t+=1)i(n+t*o).then((n=>{const o=t+1;e(u).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((n=>{const o=t+1;e(u).Notify.failure(` Rejected promise ${o} in ${n}ms`)}));l.form.reset()}))}();
//# sourceMappingURL=03-promises.7df974c5.js.map
