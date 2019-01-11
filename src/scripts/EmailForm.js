import LoginForm from './LoginForm';

class EmailForm extends LoginForm {
    constructor(element) {
        super(element);
        this.email = element.querySelector('#email');
        this.emailError = element.querySelector('#email-error');
        this.email.addEventListener('invalid', this.showError.bind(this));
    }

    showError(e) {
        e.preventDefault();
        this.email.classList.add('input-field--error');
        this.emailError.classList.remove('hidden');
    }
}

export default EmailForm;