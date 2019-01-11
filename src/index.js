import 'normalize.css';
import './styles/index.scss';
import LoginForm from './scripts/LoginForm';
import EmailForm from './scripts/EmailForm';
import PasswordForm from './scripts/PasswordForm';

const emailForm = new EmailForm(document.getElementById("email-form"));
const passwordForm = new PasswordForm(document.getElementById("password-form"));


emailForm.el.addEventListener('submit', (e) => {
    e.preventDefault();

    // Do backend validation here

    emailForm.hide();
    passwordForm.show();
});
