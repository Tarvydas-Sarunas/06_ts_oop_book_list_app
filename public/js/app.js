import createHtmlEL from './createEl.js';
console.log('Hello from ts');
const h1 = createHtmlEL('h1', { class: 'title', href: '/' }, 'Hello world');
document.body.prepend(h1);
//# sourceMappingURL=app.js.map