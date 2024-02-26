import createHtmlEL from '../helper/createEl.js';
export default class MyAlert {
    constructor(message, type) {
        this.message = message;
        this.type = type;
        this.render();
    }
    render() {
        const alertEl = createHtmlEL('div', { class: `alert alert-${this.type} my-alert position-absolute w-100 t-0`, role: 'alert' }, this.message);
        document.body.prepend(alertEl);
        setTimeout(() => {
            alertEl.remove();
        }, 3000);
    }
}
//# sourceMappingURL=myAlertClass.js.map