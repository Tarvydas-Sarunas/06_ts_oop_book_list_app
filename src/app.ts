import createHtmlEL from './createEl.js';

console.log('Hello from ts');

const h1 = createHtmlEL<HTMLHeadingElement>(
  'h1',
  { class: 'title', href: '/' },
  'Hello world'
);

document.body.prepend(h1);
