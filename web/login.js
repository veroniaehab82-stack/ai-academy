import {
  auth,
  loginWithSocial,
  saveUserToDatabase,
  signInWithEmailAndPassword
} from "./firebase-config.js";

const authForm = document.getElementById("authForm");
const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");
const formMessage = document.getElementById("formMessage");
const forgotLink = document.getElementById("forgotLink");

// إظهار وإخفاء كلمة المرور
togglePassword.addEventListener("click", () => {
  const showPassword = passwordInput.type === "password";
  passwordInput.type = showPassword ? "text" : "password";
  togglePassword.innerHTML = showPassword
    ? '<i class="fa-regular fa-eye"></i>'
    : '<i class="fa-regular fa-eye-slash"></i>';
});

forgotLink.addEventListener("click", (e) => {
  e.preventDefault();
  formMessage.textContent = "Enter your email above to receive a reset link.";
});

// تسجيل الدخول بالإيميل والباسورد
authForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!authForm.reportValidity()) return;

  const email = document.getElementById("emailInput").value.trim();
  const password = passwordInput.value;

  formMessage.textContent = "Signing in...";

  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    await saveUserToDatabase(cred.user);
    window.location.href = "dashboard.html";
  } catch (err) {
    formMessage.textContent = "Error: " + err.message;
  }
});

// تسجيل الدخول بـ Google / GitHub / Twitter
document.querySelectorAll("[data-provider]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const provider = btn.dataset.provider;
    formMessage.textContent = `Connecting to ${provider}...`;
    try {
      await loginWithSocial(provider);
    } catch (err) {
      formMessage.textContent = "Login failed: " + err.message;
    }
  });
});