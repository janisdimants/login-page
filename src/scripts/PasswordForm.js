import LoginForm from './LoginForm';

class PasswordForm extends LoginForm {
    constructor(element) {
        super(element);
        this.avatar = document.querySelector('#avatar');
        this.email = element.querySelector('#email-submitted');
        this.password = element.querySelector('#password');
        this.showPasswordButton = element.querySelector('#show-password');
        this.passwordError = element.querySelector('#password-error');
        this.capsLockHint = element.querySelector('#capslock-hint');
        this.password.addEventListener('invalid', this.showError.bind(this));
        this.password.addEventListener('keydown', this.showCapsHint.bind(this));
        this.showPasswordButton.addEventListener('click', this.togglePassword.bind(this));
        this.passwordVisible = false;
        console.log(this.showPasswordButton);
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

    togglePassword(e) {
        e.preventDefault();
        this.passwordVisible = !this.passwordVisible;

        if (this.passwordVisible) {
            this.password.type = 'text';
            this.showPasswordButton.classList.add('input-field__show-password--closed');
            return;
        }

        this.password.type = 'password';
        this.showPasswordButton.classList.remove('input-field__show-password--closed');
    }
}

export default PasswordForm;