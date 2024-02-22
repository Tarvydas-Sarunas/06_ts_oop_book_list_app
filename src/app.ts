import createHtmlEL from './createEl.js';

console.log('Hello from ts');

// const h1 = createHtmlEL<HTMLHeadingElement>(
//   'h1',
//   { class: 'title', href: '/' },
//   'Hello world'
// );

// document.body.prepend(h1);

// bookIntereface

interface BookIntereface {
  title: string;
  author: string;
  isbn: number;
}

// Bool class

class Book implements BookIntereface {
  constructor(
    public title: string,
    public author: string,
    public isbn: number
  ) {}
}

const b1 = new Book('Aplink pasauli', 'Z. Varnas', 542874);
console.log('b1 ===', b1);
