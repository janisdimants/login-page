class LoginForm {
    constructor (element) {
        this.el = element;
        this.avatar = element.querySelector('.avatar');
    }

    hide() {
        this.el.classList.add('hidden');
    }

    show() {
        this.el.classList.remove('hidden');
    }
}

export default LoginForm;