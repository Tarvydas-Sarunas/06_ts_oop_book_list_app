import createHtmlEL from '../helper/createEl.js';

type AlertType = 'success' | 'danger' | 'warning';

export default class MyAlert {
  constructor(public message: string, public type: AlertType) {
    const alertEl = createHtmlEL<HTMLDivElement>('div', { class: `alert alert-${type} my-alert position-absolute w-100 `, role: 'alert' }, message);
    document.body.prepend(alertEl);

    setTimeout(() => {
      alertEl.remove();
    }, 2000);
  }
}
