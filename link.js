document.addEventListener("DOMContentLoaded", function() {
    const formTitle = document.getElementById("formTitle");
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    const toggleButton = document.getElementById("toggleButton");
  
    toggleButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      if (formTitle.textContent === "Create Account") {
        formTitle.textContent = "Log In";
        signupForm.style.display = "none";
        loginForm.style.display = "block";
        toggleButton.textContent = "Sign Up";
      } else {
        formTitle.textContent = "Create Account";
        signupForm.style.display = "block";
        loginForm.style.display = "none";
        toggleButton.textContent = "Log In";
      }
    });
  });
