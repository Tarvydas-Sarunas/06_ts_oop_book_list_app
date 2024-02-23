import createHtmlEL from '../helper/createEl.js';

type AlertType = 'success' | 'danger' | 'warning';

export default class MyAlert {
  constructor(public message: string, public type: AlertType) {
    this.render();
  }

  public render() {
    const alertEl = createHtmlEL<HTMLDivElement>('div', { class: `alert alert-${this.type} my-alert position-absolute w-100 `, role: 'alert' }, this.message);
    document.body.prepend(alertEl);

    setTimeout(() => {
      alertEl.remove();
    }, 2000);
  }
}
