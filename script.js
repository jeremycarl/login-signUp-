document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const showForgotPassword = document.getElementById('show-forgot-password');
    const showSignUp = document.getElementById('show-sign-up');
    const showLoginFromForgot = document.getElementById('show-login-from-forgot');
    const showLogin = document.getElementById('show-login');

    themeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', themeSwitch.checked);
    });

    showForgotPassword.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('login-form').classList.remove('active');
        document.getElementById('forgot-password-form').classList.add('active');
    });

    showSignUp.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('login-form').classList.remove('active');
        document.getElementById('signup-form').classList.add('active');
    });

    showLoginFromForgot.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('forgot-password-form').classList.remove('active');
        document.getElementById('login-form').classList.add('active');
    });

    showLogin.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('signup-form').classList.remove('active');
        document.getElementById('login-form').classList.add('active');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        const errorMessage = document.getElementById('login-error-message');

        // Example hardcoded credentials
        const validUsername = 'user';
        const validPassword = 'password';

        if (username === validUsername && password === validPassword) {
            if (rememberMe) {
                localStorage.setItem('username', username);
            } else {
                localStorage.removeItem('username');
            }
            alert('Login successful!');
            // Redirect to another page or perform other actions
        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const errorMessage = document.getElementById('signup-error-message');

        // Perform sign-up logic (e.g., store user credentials securely)
        alert('Sign-up successful! You can now log in.');
        showLogin.click();
    });

    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('forgot-password-username').value;
        const errorMessage = document.getElementById('forgot-password-error-message');

        // Perform forgot password logic (e.g., send password reset email)
        alert('Password reset instructions have been sent to your email.');
        showLoginFromForgot.click();
    });

    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('login-username').value = savedUsername;
        document.getElementById('remember-me').checked = true;
    }
});