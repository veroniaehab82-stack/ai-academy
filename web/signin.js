import {
  auth,
  loginWithSocial,
  saveUserToDatabase,
  createUserWithEmailAndPassword,
  updateProfile
} from "./firebase-config.js";

// إظهار وإخفاء كلمة المرور
document.querySelectorAll(".toggle-password").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const input = document.getElementById(targetId);
    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";
    btn.innerHTML = isPassword
      ? '<i class="fa-regular fa-eye"></i>'
      : '<i class="fa-regular fa-eye-slash"></i>';
  });
});

// إنشاء حساب جديد بالإيميل وحفظه في الداتابيز
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const pass = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPassword").value;
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const birthDate = document.getElementById("birthDate").value;
  const phone = document.getElementById("phone").value.trim();

  if (pass !== confirmPass) {
    formMessage.textContent = "Passwords do not match. Please check again.";
    formMessage.className = "form-message show";
    return;
  }

  formMessage.textContent = "Creating your account...";
  formMessage.className = "form-message show success";

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    await updateProfile(cred.user, { displayName: fullName });
    await saveUserToDatabase(cred.user, { fullName, birthDate, phone });
    window.location.href = "dashboard.html";
  } catch (err) {
    formMessage.textContent = "Error: " + err.message;
    formMessage.className = "form-message show";
  }
});

// التسجيل بـ Google / GitHub / Twitter
document.querySelectorAll("[data-provider]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const provider = btn.dataset.provider;
    formMessage.textContent = `Connecting to ${provider}...`;
    formMessage.className = "form-message show success";
    try {
      await loginWithSocial(provider);
    } catch (err) {
      formMessage.textContent = "Sign up failed: " + err.message;
      formMessage.className = "form-message show";
    }
  });
});