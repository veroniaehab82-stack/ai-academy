"use strict";

// قاموس ترجمة واجهة الداشبورد
const UI_TEXT = {
  en: {
    langBtn: "عربي",
    navModules: "5 Modules (15 Lessons)",
    navStudy: "Study & Exam Room",
    navCert: "Final Certificate",
    ruleTitle: "Mastery Rule: 70%+",
    ruleDesc: "Score at least 7/10 (70%) on each lesson's exam to unlock the next lesson.",
    backHome: "Back to Home",
    trackBadge: "✦ AI MASTERY TRACK • 5 MODULES",
    welcomeWord: "Welcome,",
    overallProgress: "Your Overall Course Progress",
    backModules: "Back to All Modules",
    examNotice: "Finished studying? Complete the 10-question exam below (Minimum passing score: 70%).",
    startExamBtn: "Start 10-Question Exam",
    examBadge: "LESSON ASSESSMENT • 10 QUESTIONS",
    examHeading: "Lesson Mastery Exam",
    passRule: "Pass Score: 70% (7/10)",
    submitExam: "Submit Exam & Check Score",
    certLockedTitle: "Certificate Locked",
    certLockedDesc: "Complete all 5 Modules (15 Lessons) with at least 70% on every exam to unlock your official AI Academy Certificate.",
    continueStudy: "Continue Studying",
    printCert: "Print / Save as PDF",
    startBtn: "Start",
    moduleLabel: (id) => `Module ${id} • 3 Lessons`,
    unlockedLabel: (u) => `${u} / 15 Unlocked`,
    passedBadge: (p, pct) => `${p} / 15 Passed (${pct}%)`,
    allCompletedText: "🎉 All 15 lessons completed! Your Final Certificate is unlocked.",
    currentLessonText: (title) => `Current Lesson: ${title} (Pass 70% exam to unlock next)`,
    answerAllAlert: (ans) => `Please answer all 10 questions first! (${ans}/10 answered)`,
    scoreLine: (s, pct) => `Your Score: ${s} / 10 (${pct}%)`,
    passTitle: "Congratulations! You Passed!",
    passMsg: "You achieved 70% or higher and unlocked the next step.",
    nextLessonBtn: (nextId) => `Next Lesson (${nextId}/15)`,
    viewCertBtn: "View Final Certificate",
    failTitle: "Score Below 70% — Try Again!",
    failMsg: "You need at least 7/10 (70%) to unlock the next lesson. Review the lesson above and retake the exam.",
    retakeBtn: "Retake Exam",
    modalBadge: (id) => `MODULE ${id} COMPLETED!`,
    modalNextMod: (nextMod) => `Continue to Module ${nextMod}`,
    modalOpenCert: "Open My Final Certificate"
  },
  ar: {
    langBtn: "English",
    navModules: "الوحدات الخمس (15 درس)",
    navStudy: "غرفة المذاكرة والامتحان",
    navCert: "شهادة التخرج النهائية",
    ruleTitle: "شرط النجاح: 70% فأكثر",
    ruleDesc: "احصل على 7/10 (70%) على الأقل في امتحان كل درس لفتح الدرس التالي.",
    backHome: "العودة للرئيسية",
    trackBadge: "✦ مسار إتقان الذكاء الاصطناعي • 5 وحدات",
    welcomeWord: "أهلاً بك،",
    overallProgress: "نسبة تقدمك الإجمالية في الكورس",
    backModules: "العودة لجميع الوحدات",
    examNotice: "انتهيتِ من مذاكرة الدرس؟ أكملي الاختبار المكون من 10 أسئلة بالأسفل (الحد الأدنى للنجاح: 70%).",
    startExamBtn: "ابدأ الاختبار (10 أسئلة)",
    examBadge: "تقييم الدرس • 10 أسئلة متنوعة",
    examHeading: "اختبار إتقان الدرس",
    passRule: "درجة النجاح: 70% (7 من 10)",
    submitExam: "تسليم الاختبار وعرض النتيجة",
    certLockedTitle: "الشهادة مقفولة حالياً",
    certLockedDesc: "أتمّي جميع الوحدات الخمس (15 درساً) بنسبة نجاح 70% على الأقل في كل امتحان لفتح شهادتك الرسمية من AI Academy.",
    continueStudy: "متابعة المذاكرة",
    printCert: "طباعة / حفظ الشهادة PDF",
    startBtn: "ابدأ",
    moduleLabel: (id) => `الوحدة ${id} • 3 دروس`,
    unlockedLabel: (u) => `مفتوح ${u} من 15`,
    passedBadge: (p, pct) => `اجتزت ${p} / 15 (${pct}%)`,
    allCompletedText: "🎉 رائع! لقد أتممتِ جميع الدروس الـ 15 بنجاح وشهادتك النهائية مفتوحة الآن.",
    currentLessonText: (title) => `الدرس الحالي: ${title} (اجتزي الامتحان بنسبة 70% لفتح التالي)`,
    answerAllAlert: (ans) => `من فضلك أجيبي على جميع الأسئلة العشرة أولاً! (تمت الإجابة على ${ans}/10)`,
    scoreLine: (s, pct) => `نتيجتك: ${s} من 10 (${pct}%)`,
    passTitle: "مبروك! لقد اجتزتِ الاختبار بنجاح!",
    passMsg: "لقد حققتِ 70% فأكثر وتم فتح الخطوة التالية لكِ.",
    nextLessonBtn: (nextId) => `الدرس التالي (${nextId}/15)`,
    viewCertBtn: "عرض الشهادة النهائية",
    failTitle: "النتيجة أقل من 70% — حاولي مرة أخرى!",
    failMsg: "تحتاجين إلى 7/10 (70%) على الأقل لفتح الدرس التالي. راجعي شرح الدرس بالأعلى وأعيدي الاختبار.",
    retakeBtn: "إعادة الاختبار",
    modalBadge: (id) => `تم إتمام الوحدة ${id} بنجاح!`,
    modalNextMod: (nextMod) => `الانتقال إلى الوحدة ${nextMod}`,
    modalOpenCert: "افتح شهادتي النهائية"
  }
};

// اللغة المحفوظة (الافتراضي إنجليزي ويمكن التبديل للعربي بضغطة واحدة)
let currentLang = localStorage.getItem("ai_academy_lang") || "en";

// استرجاع بيانات الطالب والتقدم
const studentName = localStorage.getItem("ai_student_name") || "Future AI Pioneer";
document.getElementById("studentName").textContent = studentName;
document.getElementById("profileName").textContent = studentName;
document.getElementById("finalCertName").textContent = studentName;

let passedLessons = JSON.parse(localStorage.getItem("ai_passed_lessons_scores")) || {};
let currentLessonId = null;

const modulesContainer = document.getElementById("modulesContainer");

// تطبيق اللغة على الاتجاه والنصوص الثابتة
function applyLanguage() {
  const t = UI_TEXT[currentLang];
  const htmlRoot = document.getElementById("htmlRoot");

  htmlRoot.lang = currentLang;
  htmlRoot.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.getElementById("langBtnLabel").textContent = t.langBtn;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (typeof t[key] === "string") {
      el.textContent = t[key];
    }
  });

  renderDashboard();

  // إذا كان المستخدم داخل درس حالياً، أعد رسمه باللغة المختارة
  if (currentLessonId && document.getElementById("lessonView").classList.contains("active")) {
    openLesson(currentLessonId, false);
  }
}

// زر تبديل اللغة
document.getElementById("langToggleBtn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  localStorage.setItem("ai_academy_lang", currentLang);
  applyLanguage();
});

// التنقل بين الشاشات
function switchView(viewId) {
  document.querySelectorAll(".view-section").forEach((sec) => sec.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");

  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewId);
  });

  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.view;
    if (target === "lessonView" && !currentLessonId) {
      openLesson(getFirstUnpassedLessonId());
      return;
    }
    switchView(target);
  });
});

function getFirstUnpassedLessonId() {
  for (let i = 1; i <= 15; i++) {
    if (!passedLessons[i] || passedLessons[i] < 70) {
      return i;
    }
  }
  return 15;
}

// رسم الكروت الخاصة بالـ 5 وحدات والـ 15 درس
function renderDashboard() {
  const t = UI_TEXT[currentLang];
  modulesContainer.innerHTML = "";
  const passedCount = Object.keys(passedLessons).filter((id) => passedLessons[id] >= 70).length;
  const unlockedLimit = Math.min(passedCount + 1, 15);
  const percent = Math.round((passedCount / 15) * 100);

  document.getElementById("headerPercent").textContent = `${percent}%`;
  document.getElementById("unlockedCountLabel").textContent = t.unlockedLabel(unlockedLimit);
  document.getElementById("progressBadge").textContent = t.passedBadge(passedCount, percent);
  document.getElementById("progressFill").style.width = `${percent}%`;

  if (passedCount === 15) {
    document.getElementById("nextStepText").textContent = t.allCompletedText;
    document.getElementById("certLockedBanner").hidden = true;
    document.getElementById("bigCertWrapper").hidden = false;
    document.getElementById("certDate").textContent = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } else {
    const nextLessonObj = findLessonById(unlockedLimit);
    document.getElementById("nextStepText").textContent = t.currentLessonText(nextLessonObj.lesson.title[currentLang]);
    document.getElementById("certLockedBanner").hidden = false;
    document.getElementById("bigCertWrapper").hidden = true;
  }

  COURSE_MODULES.forEach((mod) => {
    const card = document.createElement("article");
    card.className = "module-card";

    const lessonsHTML = mod.lessons
      .map((lesson) => {
        const isPassed = passedLessons[lesson.id] >= 70;
        const isUnlocked = lesson.id <= unlockedLimit;
        const isCurrent = lesson.id === unlockedLimit && !isPassed;

        let statusClass = "locked";
        let iconHTML = '<i class="fa-solid fa-lock"></i>';
        let badgeHTML = "";

        if (isPassed) {
          statusClass = "passed";
          iconHTML = '<i class="fa-solid fa-check"></i>';
          badgeHTML = `<span class="score-pill">${passedLessons[lesson.id]}%</span>`;
        } else if (isUnlocked) {
          statusClass = "open";
          iconHTML = '<i class="fa-solid fa-play"></i>';
          badgeHTML = `<span class="start-pill">${t.startBtn}</span>`;
        }

        return `
          <button
            type="button"
            class="lesson-row-btn ${isPassed ? "passed" : ""} ${isCurrent ? "current" : ""}"
            ${!isUnlocked ? "disabled" : ""}
            onclick="openLesson(${lesson.id})"
          >
            <span class="lesson-left">
              <span class="status-dot ${statusClass}">${iconHTML}</span>
              <span>${lesson.title[currentLang]}</span>
            </span>
            ${badgeHTML}
          </button>
        `;
      })
      .join("");

    card.innerHTML = `
      <div class="module-top">
        <div>
          <span class="module-num">${t.moduleLabel(mod.id)}</span>
          <h3>${mod.title[currentLang]}</h3>
          <small>${mod.subtitle[currentLang]}</small>
        </div>
        <div class="module-icon">
          <i class="fa-solid ${mod.icon}"></i>
        </div>
      </div>
      <div class="lessons-stack">${lessonsHTML}</div>
    `;

    modulesContainer.appendChild(card);
  });
}

function findLessonById(lessonId) {
  for (const mod of COURSE_MODULES) {
    const found = mod.lessons.find((l) => l.id === lessonId);
    if (found) return { module: mod, lesson: found };
  }
  return null;
}

// فتح صفحة مذاكرة الدرس + الامتحان المكون من 10 أسئلة
function openLesson(lessonId, shouldSwitch = true) {
  const data = findLessonById(lessonId);
  if (!data) return;

  currentLessonId = lessonId;
  const { module: mod, lesson } = data;

  document.getElementById("activeModuleTag").textContent = `${mod.title[currentLang]}`;
  document.getElementById("activeLessonIcon").textContent = lesson.icon;
  document.getElementById("activeLessonTitle").textContent = lesson.title[currentLang];
  document.getElementById("activeLessonSubtitle").textContent = lesson.subtitle[currentLang];
  document.getElementById("activeLessonContent").innerHTML = lesson.content[currentLang];

  const resultBox = document.getElementById("examResultBox");
  resultBox.hidden = true;

  const examForm = document.getElementById("lessonExamForm");
  examForm.innerHTML = "";

  lesson.questions.forEach((qObj, qIdx) => {
    const qBlock = document.createElement("div");
    qBlock.className = "question-block";

    const optionsHTML = qObj.options[currentLang]
      .map(
        (opt, optIdx) => `
        <label class="option-label">
          <input type="radio" name="q_${qIdx}" value="${optIdx}">
          <span>${opt}</span>
        </label>
      `
      )
      .join("");

    qBlock.innerHTML = `
      <div class="question-title">
        ${qIdx + 1}. ${qObj.q[currentLang]}
        <span class="difficulty-tag">${qObj.diff[currentLang]}</span>
      </div>
      <div class="options-grid">${optionsHTML}</div>
    `;

    examForm.appendChild(qBlock);
  });

  if (shouldSwitch) {
    switchView("lessonView");
  }
}

// تصحيح الامتحان (شرط النجاح 70% = 7 من 10)
document.getElementById("submitExamBtn").addEventListener("click", () => {
  const t = UI_TEXT[currentLang];
  const data = findLessonById(currentLessonId);
  if (!data) return;

  const questions = data.lesson.questions;
  let score = 0;
  let answeredCount = 0;

  questions.forEach((qObj, idx) => {
    const selected = document.querySelector(`input[name="q_${idx}"]:checked`);
    if (selected) {
      answeredCount++;
      if (Number(selected.value) === qObj.ans) {
        score++;
      }
    }
  });

  if (answeredCount < questions.length) {
    alert(t.answerAllAlert(answeredCount));
    return;
  }

  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= 70;

  const resultBox = document.getElementById("examResultBox");
  const resultIcon = document.getElementById("resultIcon");
  const resultTitle = document.getElementById("resultTitle");
  const resultScoreText = document.getElementById("resultScoreText");
  const resultMessage = document.getElementById("resultMessage");
  const resultButtons = document.getElementById("resultButtons");

  resultBox.hidden = false;
  resultBox.className = `exam-result-box ${passed ? "pass" : "fail"}`;
  resultScoreText.textContent = t.scoreLine(score, percentage);
  resultButtons.innerHTML = "";

  if (passed) {
    const prevBest = passedLessons[currentLessonId] || 0;
    passedLessons[currentLessonId] = Math.max(prevBest, percentage);
    localStorage.setItem("ai_passed_lessons_scores", JSON.stringify(passedLessons));

    resultIcon.textContent = "🎉";
    resultTitle.textContent = t.passTitle;
    resultMessage.textContent = t.passMsg;

    renderDashboard();

    if (currentLessonId % 3 === 0) {
      showModuleCelebration(data.module);
    }

    if (currentLessonId < 15) {
      const nextBtn = document.createElement("button");
      nextBtn.type = "button";
      nextBtn.className = "primary-btn";
      nextBtn.innerHTML = `${t.nextLessonBtn(currentLessonId + 1)} <i class="fa-solid fa-arrow-right"></i>`;
      nextBtn.onclick = () => openLesson(currentLessonId + 1);
      resultButtons.appendChild(nextBtn);
    } else {
      const certBtn = document.createElement("button");
      certBtn.type = "button";
      certBtn.className = "primary-btn";
      certBtn.innerHTML = `<i class="fa-solid fa-award"></i> ${t.viewCertBtn}`;
      certBtn.onclick = () => switchView("certificateView");
      resultButtons.appendChild(certBtn);
    }
  } else {
    resultIcon.textContent = "🔄";
    resultTitle.textContent = t.failTitle;
    resultMessage.textContent = t.failMsg;

    const retryBtn = document.createElement("button");
    retryBtn.type = "button";
    retryBtn.className = "primary-btn";
    retryBtn.innerHTML = `<i class="fa-solid fa-rotate-right"></i> ${t.retakeBtn}`;
    retryBtn.onclick = () => {
      document.getElementById("lessonExamForm").reset();
      resultBox.hidden = true;
      document.getElementById("examSection").scrollIntoView({ behavior: "smooth" });
    };
    resultButtons.appendChild(retryBtn);
  }

  resultBox.scrollIntoView({ behavior: "smooth", block: "center" });
});

// نافذة التهنئة التشجيعية عند إنهاء كل وحدة
const moduleModal = document.getElementById("moduleModal");
const modalNextBtn = document.getElementById("modalNextBtn");

function showModuleCelebration(mod) {
  const t = UI_TEXT[currentLang];
  document.getElementById("modalIllustration").textContent = mod.celebration.emoji;
  document.getElementById("modalBadge").textContent = t.modalBadge(mod.id);
  document.getElementById("modalTitle").textContent = mod.celebration.title[currentLang];
  document.getElementById("modalText").textContent = mod.celebration.message[currentLang];

  if (mod.id < 5) {
    modalNextBtn.innerHTML = `${t.modalNextMod(mod.id + 1)} <i class="fa-solid fa-arrow-right"></i>`;
    modalNextBtn.onclick = () => {
      moduleModal.close();
      openLesson(currentLessonId + 1);
    };
  } else {
    modalNextBtn.innerHTML = `<i class="fa-solid fa-award"></i> ${t.modalOpenCert}`;
    modalNextBtn.onclick = () => {
      moduleModal.close();
      switchView("certificateView");
    };
  }

  moduleModal.showModal();
}

// أزرار مساعدة
document.getElementById("backToModulesBtn").addEventListener("click", () => switchView("curriculumView"));
document.getElementById("goStudyBtn").addEventListener("click", () => switchView("curriculumView"));
document.getElementById("scrollToExamBtn").addEventListener("click", () => {
  document.getElementById("examSection").scrollIntoView({ behavior: "smooth" });
});

// القائمة الجانبية للموبايل
const sidebar = document.getElementById("sidebar");
document.getElementById("menuToggle").addEventListener("click", () => sidebar.classList.add("open"));
document.getElementById("closeSidebar").addEventListener("click", () => sidebar.classList.remove("open"));

// تشغيل مبدئي باللغة المحفوظة
applyLanguage();