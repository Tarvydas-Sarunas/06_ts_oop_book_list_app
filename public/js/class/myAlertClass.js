import createHtmlEL from '../helper/createEl.js';
export default class MyAlert {
    constructor(message, type) {
        this.message = message;
        this.type = type;
        const alertEl = createHtmlEL('div', { class: `alert alert-${type} my-alert position-absolute w-100 `, role: 'alert' }, message);
        document.body.prepend(alertEl);
        setTimeout(() => {
            alertEl.remove();
        }, 2000);
    }
}
//# sourceMappingURL=myAlertClass.js.map