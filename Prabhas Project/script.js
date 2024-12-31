document.addEventListener('DOMContentLoaded', () => {
    const loginPage = document.getElementById('login-page');
    const registerPage = document.getElementById('register-page');
    const homePage = document.getElementById('home-page');
    const goToLoginButton = document.getElementById('go-to-login');
    const goToRegisterButton = document.getElementById('go-to-register');
    const goToHomeButton = document.getElementById('go-to-home');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const userNameDisplay = document.getElementById('user-name');
  
    let registeredUsers = {};
  
    // Navigation Buttons
    goToLoginButton.addEventListener('click', () => {
      showPage(loginPage);
    });
  
    goToRegisterButton.addEventListener('click', () => {
      showPage(registerPage);
    });
  
    goToHomeButton.addEventListener('click', () => {
      showPage(homePage);
    });
  
    // Login Form
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
  
      if (registeredUsers[username] && registeredUsers[username] === password) {
        userNameDisplay.textContent = username;
        showPage(homePage);
      } else {
        alert('Invalid username or password!');
      }
    });
  
    // Register Form
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('register-username').value;
      const password = document.getElementById('register-password').value;
      const email = document.getElementById('register-email').value;
  
      if (username && password && email) {
        registeredUsers[username] = password;
        alert('Registration successful! Please log in.');
        showPage(loginPage);
      } else {
        alert('Please fill in all fields!');
      }
    });
  
    // Show Page Function
    function showPage(page) {
      loginPage.classList.add('hidden');
      registerPage.classList.add('hidden');
      homePage.classList.add('hidden');
      page.classList.remove('hidden');
      goToHomeButton.classList.toggle('hidden', page === loginPage || page === registerPage);
    }
  });
  