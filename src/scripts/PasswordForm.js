import LoginForm from './LoginForm';

class PasswordForm extends LoginForm {
    constructor(element) {
        super(element);
        this.avatar = document.querySelector('#avatar');
        this.email = element.querySelector('#email-submitted');
        this.password = element.querySelector('#password');
        this.passwordError = element.querySelector('#password-error');
        this.capsLockHint = element.querySelector('#capslock-hint');
        this.password.addEventListener('invalid', this.showError.bind(this));
        this.password.addEventListener('keydown', this.showCapsHint.bind(this))
    }

    show() {
        super.show();
        this.avatar.classList.add('animate');
        this.email.classList.add('input-field--success');
        this.password.classList.remove('hidden');
        this.email.innerHTML = document.getElementById('email').value;
    }

    showError(e) {
        e.preventDefault();
        this.password.classList.add('input-field--error');
        this.passwordError.classList.remove('hidden');
    }

    showCapsHint(e) {
        const capsEnabled = e.getModifierState('CapsLock');
        if (capsEnabled) {
            this.capsLockHint.classList.remove('hidden');
            return;
        }
        this.capsLockHint.classList.add('hidden');
    }
}

export default PasswordForm;