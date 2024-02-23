import createHtmlEL from '../helper/createEl.js';
export default class MyAlert {
    constructor(message, type) {
        this.message = message;
        this.type = type;
        const alertEl = createHtmlEL('div', { class: `alert alert-${type} my-alert`, role: 'alert' }, message);
        document.body.prepend(alertEl);
    }
}
//# sourceMappingURL=myAlertClass.js.map