import { BookIntereface } from '../interface/inteface.js';

// Bool class
export default class Book implements BookIntereface {
  constructor(
    public title: string,
    public author: string,
    public isbn: number
  ) {}
}
