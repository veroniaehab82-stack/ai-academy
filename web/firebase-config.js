// استيراد مكتبات Firebase الحديثة (v10)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// بيانات مشروع AI Academy الخاصة بكِ
const firebaseConfig = {
  apiKey: "AIzaSyBA0JXgTRRpEgA83mxW4a4mKN3g5JqPQ5Q",
  authDomain: "ai-academy-a590b.firebaseapp.com",
  projectId: "ai-academy-a590b",
  storageBucket: "ai-academy-a590b.firebasestorage.app",
  messagingSenderId: "769427118846",
  appId: "1:769427118846:web:7c7d056adf76cc4e23e3af",
  measurementId: "G-T2VWH9BBMT"
};

// تهيئة التطبيق والمصادقة وقاعدة البيانات
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// تعريف مزودي تسجيل الدخول (Google, GitHub, Twitter)
const providers = {
  google: new GoogleAuthProvider(),
  github: new GithubAuthProvider(),
  twitter: new TwitterAuthProvider()
};

// دالة حفظ أو تحديث بيانات الطالب في Firestore
export async function saveUserToDatabase(user, extraData = {}) {
  const userRef = doc(db, "students", user.uid);
  const snap = await getDoc(userRef);

  const displayName =
    extraData.fullName ||
    user.displayName ||
    (user.email ? user.email.split("@")[0] : "AI Student");

  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      fullName: displayName,
      email: user.email || "",
      phone: extraData.phone || "",
      birthDate: extraData.birthDate || "",
      provider: user.providerData[0]?.providerId || "password",
      passedLessons: {},
      createdAt: serverTimestamp()
    });
  }

  localStorage.setItem("ai_student_name", displayName);
  localStorage.setItem("ai_student_uid", user.uid);
}

// دالة تسجيل الدخول عبر السوشيال ميديا
export async function loginWithSocial(providerName) {
  const provider = providers[providerName];
  if (!provider) throw new Error("Unsupported provider");

  const result = await signInWithPopup(auth, provider);
  await saveUserToDatabase(result.user);
  window.location.href = "dashboard.html";
}

// تصدير دوال الإيميل والباسورد
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
};