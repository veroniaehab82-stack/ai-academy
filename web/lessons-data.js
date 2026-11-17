"use strict";

const COURSE_MODULES = [
  {
    id: 1,
    title: { en: "Introduction to AI", ar: "مقدمة عن الذكاء الاصطناعي" },
    subtitle: { en: "Foundations, History & Types", ar: "الوحدة الأولى: الأساسيات والتاريخ والأنواع" },
    icon: "fa-brain",
    celebration: {
      emoji: "🚀",
      title: { en: "Module 1 Completed!", ar: "لقد أتممت الوحدة الأولى بنجاح!" },
      message: {
        en: "Awesome job! You mastered AI basics, history, and types. Ready to discover how AI systems think in Module 2?",
        ar: "أحسنتِ! لقد أتقنتِ أساسيات الذكاء الاصطناعي وتاريخه وأنواعه. استعدي الآن للوحدة الثانية لاكتشاف كيف تفكر أنظمة الذكاء الاصطناعي!"
      }
    },
    lessons: [
      {
        id: 1,
        title: { en: "1. What is Artificial Intelligence?", ar: "1. ما هو الذكاء الاصطناعي؟" },
        subtitle: { en: "Core Concepts & Human-Like Capabilities", ar: "المفاهيم الأساسية وقدرات الآلة الذكية" },
        icon: "🤖",
        content: {
          en: `
            <p><strong>Artificial Intelligence (AI)</strong> is a branch of computer science focused on building smart machines capable of performing tasks that typically require human intelligence—such as visual perception, speech recognition, decision-making, and language translation.</p>
            <h4>Core Pillars of Human-Like Intelligence in Machines:</h4>
            <ul>
              <li><strong>Learning:</strong> Acquiring rules and information from data to improve performance over time.</li>
              <li><strong>Reasoning:</strong> Using logic and rules to reach approximate or definite conclusions.</li>
              <li><strong>Problem-Solving & Perception:</strong> Analyzing inputs from sensors, cameras, or text to solve real-world challenges.</li>
            </ul>
            <div class="study-highlight">
              <strong>Key Distinction:</strong> Traditional software follows strict, pre-written "if-then" instructions, whereas AI systems adapt and learn patterns directly from examples.
            </div>
          `,
          ar: `
            <p><strong>الذكاء الاصطناعي (AI)</strong> هو فرع من علوم الحاسوب يركز على بناء آلات ذكية قادرة على أداء مهام تتطلب عادةً ذكاءً بشرياً—مثل الإدراك البصري، والتعرف على الصوت، واتخاذ القرارات، وترجمة اللغات.</p>
            <h4>الركائز الأساسية للذكاء في الآلات:</h4>
            <ul>
              <li><strong>التعلم (Learning):</strong> اكتساب القواعد والمعلومات من البيانات لتحسين الأداء بمرور الوقت.</li>
              <li><strong>الاستنتاج المنطقي (Reasoning):</strong> استخدام المنطق للوصول إلى استنتاجات دقيقة أو تقريبية.</li>
              <li><strong>حل المشكلات والإدراك (Perception):</strong> تحليل المدخلات من الكاميرات أو النصوص أو المستشعرات لحل تحديات واقعية.</li>
            </ul>
            <div class="study-highlight">
              <strong>الفرق الجوهري:</strong> البرمجيات التقليدية تتبع أوامر صارمة ومكتوبة مسبقاً (إذا حدث كذا افعل كذا)، بينما تتكيف أنظمة الذكاء الاصطناعي وتتعلم الأنماط مباشرة من الأمثلة.
            </div>
          `
        },
        questions: [
          {
            q: { en: "What is the primary goal of Artificial Intelligence?", ar: "ما هو الهدف الأساسي للذكاء الاصطناعي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: {
              en: ["Replacing computer hardware", "Simulating human intelligence in machines", "Increasing internet speed", "Designing office furniture"],
              ar: ["استبدال مكونات الكمبيوتر الصلبة", "محاكاة الذكاء البشري داخل الآلات", "زيادة سرعة الإنترنت", "تصميم أثاث المكاتب"]
            },
            ans: 1
          },
          {
            q: { en: "Which of the following is a typical task performed by AI?", ar: "أي مما يلي يُعد مهمة نموذجية يقوم بها الذكاء الاصطناعي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: {
              en: ["Speech recognition", "Manufacturing paper", "Manual typing", "Charging batteries"],
              ar: ["التعرف على الصوت والكلام", "تصنيع الورق", "الكتابة اليدوية", "شحن البطاريات"]
            },
            ans: 0
          },
          {
            q: { en: "How does AI differ from traditional computer programs?", ar: "كيف يختلف الذكاء الاصطناعي عن البرامج التقليدية؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: {
              en: ["AI never uses data", "AI only runs on phones", "AI learns patterns rather than relying solely on fixed rules", "Traditional programs think independently"],
              ar: ["الذكاء الاصطناعي لا يستخدم البيانات أبداً", "يعمل على الهواتف فقط", "يتعلم الأنماط بدلاً من الاعتماد فقط على قواعد ثابتة", "البرامج التقليدية تفكر باستقلالية"]
            },
            ans: 2
          },
          {
            q: { en: "Which capability allows an AI system to draw conclusions using logic?", ar: "ما القدرة التي تسمح لنظام الذكاء الاصطناعي باستخلاص النتائج باستخدام المنطق؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: {
              en: ["Storage", "Reasoning", "Formatting", "Printing"],
              ar: ["التخزين", "الاستنتاج المنطقي (Reasoning)", "التنسيق", "الطباعة"]
            },
            ans: 1
          },
          {
            q: { en: "Visual perception in AI enables machines to:", ar: "الإدراك البصري في الذكاء الاصطناعي يمكّن الآلات من:" },
            diff: { en: "Medium", ar: "متوسط" },
            options: {
              en: ["Interpret and understand images and video", "Play audio files louder", "Cool down processors", "Compress ZIP folders"],
              ar: ["تفسير وفهم الصور ومقاطع الفيديو", "تشغيل الصوت بصوت أعلى", "تبريد المعالجات", "ضغط الملفات"]
            },
            ans: 0
          },
          {
            q: { en: "Acquiring information and rules to improve future accuracy is called:", ar: "اكتساب المعلومات والقواعد لتحسين الدقة مستقبلاً يُسمى:" },
            diff: { en: "Medium", ar: "متوسط" },
            options: {
              en: ["Compilation", "Learning", "Encryption", "Debugging"],
              ar: ["الترجمة البرمجية", "التعلم (Learning)", "التشفير", "إصلاح الأخطاء"]
            },
            ans: 1
          },
          {
            q: { en: "Which academic field is Artificial Intelligence a branch of?", ar: "لأي مجال أكاديمي ينتمي الذكاء الاصطناعي كفرع رئيسي؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: {
              en: ["Botany", "Computer Science", "Geology", "Architecture"],
              ar: ["علم النبات", "علوم الحاسوب (Computer Science)", "الجيولوجيا", "الهندسة المعمارية"]
            },
            ans: 1
          },
          {
            q: { en: "Why do traditional 'if-then' scripts struggle with complex tasks like face recognition?", ar: "لماذا تعجز الأكواد التقليدية (if-then) عن أداء مهام معقدة مثل التعرف على الوجوه؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: {
              en: ["Too many lighting, angle, and feature variations exist to code manually", "If-then statements cannot run on modern CPUs", "Cameras cannot capture faces", "Face recognition requires zero data"],
              ar: ["وجود احتمالات لا حصر لها للإضاءة والزوايا والملامح يصعب برمجتها يدوياً", "أوامر if-then لا تعمل على المعالجات الحديثة", "الكاميرات لا تلتقط الوجوه", "التعرف على الوجوه لا يحتاج بيانات"]
            },
            ans: 0
          },
          {
            q: { en: "In an AI system, 'Perception' primarily involves:", ar: "في أنظمة الذكاء الاصطناعي، يشمل 'الإدراك' بشكل أساسي:" },
            diff: { en: "Hard", ar: "متقدم" },
            options: {
              en: ["Deleting old databases", "Processing sensory or environmental inputs like text, audio, and images", "Designing user interfaces", "Restarting servers"],
              ar: ["حذف قواعد البيانات القديمة", "معالجة المدخلات الحسية والبيئية مثل النصوص والصوت والصور", "تصميم واجهات المستخدم", "إعادة تشغيل الخوادم"]
            },
            ans: 1
          },
          {
            q: { en: "Which scenario best illustrates true AI behavior?", ar: "أي سيناريو يوضح سلوك الذكاء الاصطناعي الحقيقي بأفضل شكل؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: {
              en: ["A calculator adding two numbers", "A spam filter adapting to newly invented scam phrases automatically", "A clock ringing at 7:00 AM daily", "A light switch turning on a bulb"],
              ar: ["آلة حاسبة تجمع رقمين", "فلتر رسائل مزعجة يتكيف تلقائياً مع أساليب الاحتيال الجديدة", "منبه يرن الساعة 7 صباحاً يومياً", "مفتاح كهرباء يضيء مصباحاً"]
            },
            ans: 1
          }
        ]
      },
      {
        id: 2,
        title: { en: "2. History & Evolution of AI", ar: "2. تاريخ وتطور الذكاء الاصطناعي" },
        subtitle: { en: "From Alan Turing to Modern Generative AI", ar: "من آلان تورينج إلى الذكاء الاصطناعي التوليدي الحديث" },
        icon: "⏳",
        content: {
          en: `
            <p>The dream of intelligent machines dates back centuries, but modern AI officially began in the mid-20th century with pioneers like <strong>Alan Turing</strong> and <strong>John McCarthy</strong>.</p>
            <h4>Major Milestones in AI History:</h4>
            <ul>
              <li><strong>1950 – The Turing Test:</strong> Alan Turing proposed a test to determine whether a machine can exhibit intelligent behavior indistinguishable from a human.</li>
              <li><strong>1956 – Dartmouth Conference:</strong> John McCarthy officially coined the term <em>"Artificial Intelligence"</em>, launching AI as an academic field.</li>
              <li><strong>1997 – Deep Blue:</strong> IBM's Deep Blue defeated world chess champion Garry Kasparov.</li>
              <li><strong>2010s–Present – Deep Learning & Generative AI:</strong> Massive datasets, powerful GPUs, and Transformer architectures unlocked modern breakthroughs like ChatGPT.</li>
            </ul>
            <div class="study-highlight">
              <strong>AI Winters:</strong> Periods in the 1970s and 1980s when funding and interest dropped due to limited computing power before exploding again in the 21st century.
            </div>
          `,
          ar: `
            <p>يعود حلم بناء آلات ذكية لقرون، لكن الذكاء الاصطناعي الحديث بدأ رسمياً في منتصف القرن العشرين على يد رواد مثل <strong>آلان تورينج (Alan Turing)</strong> و<strong>جون مكارثي (John McCarthy)</strong>.</p>
            <h4>أبرز المحطات التاريخية في الذكاء الاصطناعي:</h4>
            <ul>
              <li><strong>1950 – اختبار تورينج:</strong> اقترح آلان تورينج اختباراً لقياس قدرة الآلة على إظهار سلوك ذكي لا يمكن تمييزه عن الإنسان.</li>
              <li><strong>1956 – مؤتمر دارتموث:</strong> أطلق جون مكارثي رسمياً مصطلح <em>"الذكاء الاصطناعي"</em>، ليبدأ كعلم أكاديمي مستقل.</li>
              <li><strong>1997 – حاسوب Deep Blue:</strong> هزم حاسوب شركة IBM بطل العالم في الشطرنج غاري كاسباروف.</li>
              <li><strong>2010 حتى الآن – التعلم العميق والذكاء التوليدي:</strong> أدت البيانات الضخمة ومعالجات GPUs القوية ومعمارية Transformers إلى طفرات حديثة مثل ChatGPT.</li>
            </ul>
            <div class="study-highlight">
              <strong>شتاء الذكاء الاصطناعي (AI Winters):</strong> فترات في السبعينيات والثمانينيات تراجع فيها التمويل والاهتمام بسبب ضعف قدرات الحوسبة وقتها قبل أن ينطلق بقوة في القرن الحادي والعشرين.
            </div>
          `
        },
        questions: [
          {
            q: { en: "Who proposed the famous test in 1950 to measure machine intelligence?", ar: "من اقترح الاختبار الشهير عام 1950 لقياس ذكاء الآلة؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Bill Gates", "Alan Turing", "Steve Jobs", "Elon Musk"], ar: ["بيل جيتس", "آلان تورينج", "ستيف جوبز", "إيلون ماسك"] },
            ans: 1
          },
          {
            q: { en: "In which year was the term 'Artificial Intelligence' officially coined?", ar: "في أي عام تم إطلاق مصطلح 'الذكاء الاصطناعي' رسمياً؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["1956", "1999", "2005", "1920"], ar: ["1956", "1999", "2005", "1920"] },
            ans: 0
          },
          {
            q: { en: "Who coined the term 'Artificial Intelligence' at the Dartmouth Conference?", ar: "من الذي صاغ مصطلح 'الذكاء الاصطناعي' في مؤتمر دارتموث؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["John McCarthy", "Mark Zuckerberg", "Tim Berners-Lee", "Ada Lovelace"], ar: ["جون مكارثي", "مارك زوكربيرج", "تيم بيرنرز لي", "آدا لوفليس"] },
            ans: 0
          },
          {
            q: { en: "What historic event happened in 1997 involving IBM's Deep Blue?", ar: "ما الحدث التاريخي الذي وقع عام 1997 بطله حاسوب Deep Blue من IBM؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["It landed on Mars", "It defeated world chess champion Garry Kasparov", "It invented the smartphone", "It translated 100 languages"], ar: ["هبط على المريخ", "هزم بطل العالم في الشطرنج غاري كاسباروف", "اخترع الهاتف الذكي", "ترجم 100 لغة"] },
            ans: 1
          },
          {
            q: { en: "What does the term 'AI Winter' refer to?", ar: "إلى ماذا يشير مصطلح 'شتاء الذكاء الاصطناعي' (AI Winter)؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["An AI that predicts snow", "Periods of reduced funding and slower progress in AI history", "Cooling systems for data centers", "A winter coding bootcamp"], ar: ["ذكاء اصطناعي يتنبأ بالثلوج", "فترات تراجع التمويل وبطء التقدم في تاريخ الذكاء الاصطناعي", "أنظمة تبريد مراكز البيانات", "معسكر برمجة شتوي"] },
            ans: 1
          },
          {
            q: { en: "What is the purpose of the Turing Test?", ar: "ما هو الغرض من اختبار تورينج؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["To test internet bandwidth", "To evaluate if a machine's behavior is indistinguishable from a human's", "To measure battery life", "To check screen resolution"], ar: ["اختبار سرعة الإنترنت", "تقييم ما إذا كان سلوك الآلة لا يمكن تمييزه عن سلوك الإنسان", "قياس عمر البطارية", "فحص دقة الشاشة"] },
            ans: 1
          },
          {
            q: { en: "Which hardware advancement heavily accelerated modern Deep Learning in the 2010s?", ar: "أي تطور في العتاد سرّع بشكل كبير التعلم العميق الحديث في العقد الثاني من الألفية؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Floppy disks", "Powerful GPUs (Graphics Processing Units)", "Dot-matrix printers", "Dial-up modems"], ar: ["الأقراص المرنة", "معالجات الرسوميات القوية (GPUs)", "الطابعات النقطية", "أجهزة المودم القديمة"] },
            ans: 1
          },
          {
            q: { en: "Why did early AI systems in the 1970s hit major roadblocks?", ar: "لماذا واجهت أنظمة الذكاء الاصطناعي المبكرة في السبعينيات عقبات كبيرة؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Severe lack of computational power and digital data", "Humans lost interest in computers", "Electricity was unavailable", "Programming languages did not exist"], ar: ["النقص الشديد في القدرة الحاسوبية والبيانات الرقمية", "فقدان البشر الاهتمام بالكمبيوتر", "عدم توفر الكهرباء", "عدم وجود لغات برمجة"] },
            ans: 0
          },
          {
            q: { en: "Which architectural breakthrough paved the way for modern Large Language Models like ChatGPT?", ar: "أي ابتكار معماري مهّد الطريق لنماذج اللغة الكبيرة الحديثة مثل ChatGPT؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Vacuum tubes", "The Transformer architecture", "Punch cards", "Mechanical gears"], ar: ["الأنابيب المفرغة", "معمارية المحولات (Transformer)", "البطاقات المثقوبة", "التروس الميكانيكية"] },
            ans: 1
          },
          {
            q: { en: "How did the 1956 Dartmouth Conference impact computing?", ar: "كيف أثّر مؤتمر دارتموث عام 1956 على علوم الحوسبة؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["It banned robotics", "It established AI as a formal, dedicated research discipline", "It shut down university labs", "It created the first social media site"], ar: ["حظر الروبوتات", "أسس الذكاء الاصطناعي كمجال بحثي أكاديمي رسمي ومستقل", "أغلق مختبرات الجامعات", "أنشأ أول موقع تواصل اجتماعي"] },
            ans: 1
          }
        ]
      },
      {
        id: 3,
        title: { en: "3. Types & Uses of AI", ar: "3. أنواع الذكاء الاصطناعي واستخداماته" },
        subtitle: { en: "Narrow AI, General AI & Super AI", ar: "الذكاء الضيق والعام والفائق وتطبيقاتهم" },
        icon: "🧩",
        content: {
          en: `
            <p>AI researchers classify artificial intelligence into three main categories based on capability:</p>
            <ul>
              <li><strong>1. Narrow AI (Weak AI):</strong> Designed and trained for one specific task (e.g., Siri, Netflix recommendations, facial recognition). <em>All AI currently in existence is Narrow AI.</em></li>
              <li><strong>2. General AI (AGI / Strong AI):</strong> A theoretical form of AI with human-level cognitive abilities across any intellectual task.</li>
              <li><strong>3. Super AI (ASI):</strong> A hypothetical future AI that surpasses human intelligence in every field, including creativity and wisdom.</li>
            </ul>
            <div class="study-highlight">
              <strong>Everyday Uses:</strong> Recommendation engines (YouTube/Spotify), voice assistants, fraud detection in banking, and navigation apps like Google Maps.
            </div>
          `,
          ar: `
            <p>يصنف باحثو الذكاء الاصطناعي أنواعه إلى ثلاث فئات رئيسية بناءً على مستوى القدرة:</p>
            <ul>
              <li><strong>1. الذكاء الاصطناعي الضيق (Narrow / Weak AI):</strong> مصمم ومدرب لأداء مهمة واحدة محددة (مثل Siri، واقتراحات Netflix، والتعرف على الوجه). <em>كل الذكاء الاصطناعي الموجود حالياً هو ذكاء ضيق.</em></li>
              <li><strong>2. الذكاء الاصطناعي العام (AGI / Strong AI):</strong> نوع نظري يمتلك قدرات إدراكية بمستوى الإنسان في أي مهمة فكرية.</li>
              <li><strong>3. الذكاء الاصطناعي الفائق (Super AI):</strong> ذكاء مستقبلي افتراضي يتفوق على الذكاء البشري في كل المجالات بما فيها الإبداع والحكمة.</li>
            </ul>
            <div class="study-highlight">
              <strong>استخدامات يومية:</strong> محركات التوصية (يوتيوب وسبوتيفاي)، المساعدات الصوتية، كشف الاحتيال البنكي، وتطبيقات الملاحة مثل خرائط جوجل.
            </div>
          `
        },
        questions: [
          {
            q: { en: "Which type of AI includes all currently existing AI applications?", ar: "أي نوع من الذكاء الاصطناعي يشمل جميع التطبيقات الموجودة حالياً؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Super AI", "General AI", "Narrow AI (Weak AI)", "Quantum AI"], ar: ["الذكاء الفائق", "الذكاء العام", "الذكاء الاصطناعي الضيق (Narrow AI)", "الذكاء الكمي"] },
            ans: 2
          },
          {
            q: { en: "Voice assistants like Siri and Alexa are examples of:", ar: "المساعدات الصوتية مثل Siri و Alexa تُعد أمثلة على:" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Narrow AI", "Super AI", "Artificial General Intelligence", "Biological intelligence"], ar: ["الذكاء الاصطناعي الضيق", "الذكاء الفائق", "الذكاء العام", "الذكاء البيولوجي"] },
            ans: 0
          },
          {
            q: { en: "What is Artificial General Intelligence (AGI)?", ar: "ما هو الذكاء الاصطناعي العام (AGI)؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["AI that only plays chess", "Theoretical AI capable of performing any intellectual task a human can", "A basic calculator", "An old operating system"], ar: ["ذكاء يلعب الشطرنج فقط", "ذكاء نظري قادر على أداء أي مهمة فكرية يستطيع الإنسان القيام بها", "آلة حاسبة بسيطة", "نظام تشغيل قديم"] },
            ans: 1
          },
          {
            q: { en: "Which category describes a hypothetical AI smarter than the brightest human minds in all fields?", ar: "أي فئة تصف ذكاءً اصطناعياً افتراضياً أذكى من ألمع العقول البشرية في جميع المجالات؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Weak AI", "Super AI (ASI)", "Reactive AI", "Basic Automation"], ar: ["الذكاء الضعيف", "الذكاء الاصطناعي الفائق (ASI)", "الذكاء التفاعلي", "الأتمتة البسيطة"] },
            ans: 1
          },
          {
            q: { en: "How do platforms like YouTube and Netflix use Narrow AI?", ar: "كيف تستخدم منصات مثل YouTube و Netflix الذكاء الاصطناعي الضيق؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["To manufacture TVs", "To recommend personalized videos based on viewing habits", "To repair Wi-Fi routers", "To write laws"], ar: ["لتصنيع أجهزة التلفاز", "لاقتراح فيديوهات مخصصة بناءً على عادات المشاهدة", "لإصلاح أجهزة الراوتر", "لكتابة القوانين"] },
            ans: 1
          },
          {
            q: { en: "Why is Narrow AI called 'Weak AI'?", ar: "لماذا يُسمى الذكاء الاصطناعي الضيق أحياناً 'بالذكاء الضعيف'؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Because it is useless", "Because it operates within a limited, pre-defined scope of tasks", "Because it runs slowly", "Because it has no memory"], ar: ["لأنه عديم الفائدة", "لأنه يعمل ضمن نطاق محدود ومحدد مسبقاً من المهام", "لأنه يعمل ببطء", "لأنه لا يملك ذاكرة"] },
            ans: 1
          },
          {
            q: { en: "Which banking feature relies heavily on Narrow AI?", ar: "أي ميزة مصرفية تعتمد بشكل كبير على الذكاء الاصطناعي الضيق؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Paper check printing", "Real-time fraud detection", "Building vault doors", "Counting physical coins"], ar: ["طباعة الشيكات الورقية", "اكتشاف الاحتيال المالي الفوري", "بناء أبواب الخزائن", "عدّ العملات المعدنية"] },
            ans: 1
          },
          {
            q: { en: "Can a Narrow AI trained to play chess automatically drive a car without retraining?", ar: "هل يستطيع ذكاء ضيق مُدرّب على الشطرنج قيادة سيارة تلقائياً دون إعادة تدريب؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Yes, easily", "No, because Narrow AI cannot transfer knowledge across unrelated domains", "Only on weekends", "Yes, if connected to Wi-Fi"], ar: ["نعم بسهولة", "لا، لأن الذكاء الضيق لا يستطيع نقل المعرفة بين مجالات غير مرتبطة", "في عطلة نهاية الأسبوع فقط", "نعم إذا اتصل بالإنترنت"] },
            ans: 1
          },
          {
            q: { en: "What is the current scientific status of Artificial Super Intelligence (ASI)?", ar: "ما هو الوضع العلمي الحالي للذكاء الاصطناعي الفائق (ASI)؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Deployed in smartphones", "Purely hypothetical and does not exist today", "Used in all schools", "Standard since 1990"], ar: ["مثبت في الهواتف الذكية", "افتراضي بحت وغير موجود في الواقع اليوم", "مستخدم في جميع المدارس", "قياسي منذ عام 1990"] },
            ans: 1
          },
          {
            q: { en: "Which statement accurately compares Narrow AI and General AI?", ar: "أي عبارة تقارن بدقة بين الذكاء الضيق والذكاء العام؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Narrow AI excels at specialized tasks; General AI would possess broad human-like adaptability", "General AI is weaker than Narrow AI", "Both are already installed on laptops", "Neither uses algorithms"], ar: ["الذكاء الضيق يتفوق في مهام متخصصة؛ بينما يمتلك الذكاء العام مرونة شاملة كالبشر", "الذكاء العام أضعف من الضيق", "كلاهما مثبت على اللابتوب حالياً", "كلاهما لا يستخدم الخوارزميات"] },
            ans: 0
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: { en: "How AI Works", ar: "كيف يعمل الذكاء الاصطناعي؟" },
    subtitle: { en: "Data, Machine Learning & Deep Learning", ar: "الوحدة الثانية: البيانات وتعلم الآلة والتعلم العميق" },
    icon: "fa-microchip",
    celebration: {
      emoji: "🧠",
      title: { en: "Module 2 Completed!", ar: "مذهل! لقد أتممت الوحدة الثانية بنجاح!" },
      message: {
        en: "You now understand Machine Learning, Deep Learning, and how data trains models. Let's explore practical AI tools in Module 3!",
        ar: "لقد فهمتِ الآن الفرق بين تعلم الآلة والتعلم العميق وكيف تعالج الأنظمة البيانات. هيا ننتقل إلى الوحدة الثالثة لنتعرف على أقوى أدوات الذكاء الاصطناعي!"
      }
    },
    lessons: [
      {
        id: 4,
        title: { en: "4. How AI Systems Think", ar: "4. كيف تفكر أنظمة الذكاء الاصطناعي؟" },
        subtitle: { en: "Data Pipelines, Training & Inference", ar: "خطوات معالجة البيانات والتدريب والتنبؤ" },
        icon: "⚙️",
        content: {
          en: `
            <p>AI systems don't "think" with emotions or consciousness like humans—instead, they process massive amounts of data using mathematical models and algorithms.</p>
            <h4>The 4-Step AI Pipeline:</h4>
            <ul>
              <li><strong>1. Data Collection:</strong> Gathering raw inputs (images, text, numbers, audio).</li>
              <li><strong>2. Training (Pattern Recognition):</strong> Feeding data into an algorithm so it discovers statistical patterns and relationships.</li>
              <li><strong>3. Inference (Prediction):</strong> Applying the trained model to brand-new, unseen data to make decisions.</li>
              <li><strong>4. Feedback Loop:</strong> Measuring errors and updating weights to become more accurate over time.</li>
            </ul>
            <div class="study-highlight">
              <strong>Garbage In, Garbage Out:</strong> An AI model is only as good as the quality and diversity of the data used to train it.
            </div>
          `,
          ar: `
            <p>لا "تفكر" أنظمة الذكاء الاصطناعي بمشاعر أو وعي مثل البشر—بل تعالج كميات ضخمة من البيانات باستخدام نماذج رياضية وخوارزميات.</p>
            <h4>مراحل عمل نظام الذكاء الاصطناعي (4 خطوات):</h4>
            <ul>
              <li><strong>1. جمع البيانات (Data Collection):</strong> تجميع المدخلات الخام (صور، نصوص، أرقام، صوتيات).</li>
              <li><strong>2. التدريب (Training):</strong> تغذية الخوارزمية بالبيانات لتكتشف الأنماط والعلاقات الإحصائية.</li>
              <li><strong>3. الاستدلال والتنبؤ (Inference):</strong> تطبيق النموذج المُدرّب على بيانات جديدة تماماً لاتخاذ قرارات.</li>
              <li><strong>4. حلقة التغذية الراجعة (Feedback Loop):</strong> قياس الأخطاء وتحديث الأوزان ليصبح النظام أدق بمرور الوقت.</li>
            </ul>
            <div class="study-highlight">
              <strong>قاعدة جودة البيانات (Garbage In, Garbage Out):</strong> كفاءة نموذج الذكاء الاصطناعي تعتمد كلياً على جودة وتنوع البيانات التي تدرب عليها.
            </div>
          `
        },
        questions: [
          {
            q: { en: "What fuels an AI system's ability to learn patterns?", ar: "ما الذي يغذي قدرة نظام الذكاء الاصطناعي على تعلم الأنماط؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Emotions", "Data and algorithms", "Human intuition", "Physical muscles"], ar: ["المشاعر", "البيانات والخوارزميات", "الحدس البشري", "العضلات"] },
            ans: 1
          },
          {
            q: { en: "What is the first step in building an AI pipeline?", ar: "ما هي الخطوة الأولى في بناء نظام ذكاء اصطناعي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Data collection", "Printing certificates", "Deleting files", "Selling hardware"], ar: ["جمع البيانات", "طباعة الشهادات", "حذف الملفات", "بيع الأجهزة"] },
            ans: 0
          },
          {
            q: { en: "What does 'Garbage In, Garbage Out' mean in AI?", ar: "ماذا تعني قاعدة 'Garbage In, Garbage Out' في الذكاء الاصطناعي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["AI recycles trash", "Poor-quality training data leads to inaccurate AI predictions", "AI deletes bad emails", "Computers need cleaning"], ar: ["الذكاء الاصطناعي يعيد تدوير النفايات", "بيانات التدريب رديئة الجودة تؤدي إلى توقعات غير دقيقة", "يحذف الرسائل المزعجة", "الكمبيوتر يحتاج تنظيفاً"] },
            ans: 1
          },
          {
            q: { en: "During which phase does an AI model discover patterns from examples?", ar: "في أي مرحلة يكتشف نموذج الذكاء الاصطناعي الأنماط من الأمثلة؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Training", "Shutdown", "Installation", "Formatting"], ar: ["مرحلة التدريب (Training)", "إيقاف التشغيل", "التثبيت", "التهيئة"] },
            ans: 0
          },
          {
            q: { en: "Using a trained AI model to make predictions on new, unseen data is called:", ar: "استخدام نموذج مُدرّب لتقديم توقعات على بيانات جديدة لم يرها من قبل يُسمى:" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Inference", "Compilation", "Encryption", "Archiving"], ar: ["الاستدلال/التنبؤ (Inference)", "الترجمة البرمجية", "التشفير", "الأرشفة"] },
            ans: 0
          },
          {
            q: { en: "How does an AI system improve its accuracy after making mistakes?", ar: "كيف يحسّن نظام الذكاء الاصطناعي دقته بعد ارتكاب أخطاء؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Through a feedback loop that adjusts its internal parameters", "By turning off the monitor", "By ignoring all errors", "By erasing its code"], ar: ["من خلال حلقة تغذية راجعة تعدّل معاملاته الداخلية", "بإغلاق الشاشة", "بتجاهل الأخطاء", "بمسح الكود"] },
            ans: 0
          },
          {
            q: { en: "Does AI experience human emotions when making decisions?", ar: "هل يشعر الذكاء الاصطناعي بعواطف بشرية عند اتخاذ القرارات؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Yes, always", "No, it relies on mathematical probabilities", "Only during training", "Yes, when connected to audio"], ar: ["نعم دائماً", "لا، بل يعتمد على الاحتمالات الرياضية", "أثناء التدريب فقط", "نعم عند توصيل الصوت"] },
            ans: 1
          },
          {
            q: { en: "Why is data diversity critical when training an AI model?", ar: "لماذا يُعد تنوع البيانات أمراً حاسماً عند تدريب نموذج الذكاء الاصطناعي؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["To prevent bias and ensure the model performs well across varied real-world cases", "To make files take up more disk space", "To slow down training", "To avoid using algorithms"], ar: ["لمنع التحيز وضمان عمل النموذج بكفاءة في مختلف الحالات الواقعية", "لزيادة مساحة الملفات على القرص", "لإبطاء التدريب", "لتجنب استخدام الخوارزميات"] },
            ans: 0
          },
          {
            q: { en: "What happens if an AI model memorizes training examples instead of learning general patterns?", ar: "ماذا يحدث إذا حفظ النموذج أمثلة التدريب عن ظهر قلب بدلاً من تعلم القواعد العامة؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Overfitting—it fails on new, unseen data", "It becomes Super AI", "Its battery doubles", "It runs faster"], ar: ["فرط التخصيص (Overfitting)—فيفشل عند التعامل مع بيانات جديدة", "يتحول لذكاء فائق", "تتضاعف بطاريته", "يعمل أسرع"] },
            ans: 0
          },
          {
            q: { en: "In an AI pipeline, what connects Training to Inference?", ar: "في مراحل عمل الذكاء الاصطناعي، ما الذي يربط مرحلة التدريب بمرحلة التنبؤ؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["A trained mathematical model storing learned weights", "A USB cable", "A PDF reader", "A screen saver"], ar: ["نموذج رياضي مُدرّب يحتفظ بالأوزان والأنماط المكتسبة", "كابل USB", "قارئ ملفات PDF", "شاشة توقف"] },
            ans: 0
          }
        ]
      },
      {
        id: 5,
        title: { en: "5. Machine Learning (ML)", ar: "5. تعلم الآلة (Machine Learning)" },
        subtitle: { en: "Supervised, Unsupervised & Reinforcement Learning", ar: "التعلم الخاضع للإشراف وغير الخاضع للإشراف والتعزيزي" },
        icon: "📈",
        content: {
          en: `
            <p><strong>Machine Learning (ML)</strong> is a core subset of AI that gives computers the ability to learn from data without being explicitly programmed for every rule.</p>
            <h4>Three Main Types of Machine Learning:</h4>
            <ul>
              <li><strong>Supervised Learning:</strong> Training on <em>labeled data</em> (e.g., emails tagged as "Spam" or "Not Spam").</li>
              <li><strong>Unsupervised Learning:</strong> Finding hidden groups or patterns in <em>unlabeled data</em> (e.g., grouping shoppers by purchasing behavior).</li>
              <li><strong>Reinforcement Learning:</strong> Learning by trial and error using <em>rewards and penalties</em> (e.g., teaching an AI to play video games or control robotics).</li>
            </ul>
            <div class="study-highlight">
              <strong>Real-World ML:</strong> Predicting house prices, diagnosing diseases from medical records, and filtering spam emails.
            </div>
          `,
          ar: `
            <p><strong>تعلم الآلة (Machine Learning)</strong> هو فرع أساسي من الذكاء الاصطناعي يمنح الحواسيب القدرة على التعلم من البيانات دون برمجتها صراحةً لكل قاعدة.</p>
            <h4>الأنواع الثلاثة الرئيسية لتعلم الآلة:</h4>
            <ul>
              <li><strong>التعلم الخاضع للإشراف (Supervised Learning):</strong> التدريب على <em>بيانات مصنفة وموسومة</em> (مثل رسائل بريد مصنفة كـ "مزعجة" أو "آمنة").</li>
              <li><strong>التعلم غير الخاضع للإشراف (Unsupervised Learning):</strong> اكتشاف مجموعات وأنماط خفية في <em>بيانات غير مصنفة</em> (مثل تقسيم المتسوقين حسب سلوك الشراء).</li>
              <li><strong>التعلم التعزيزي (Reinforcement Learning):</strong> التعلم بالمحاولة والخطأ باستخدام <em>المكافآت والعقوبات</em> (مثل تعليم الروبوتات المشي أو لعب الألعاب).</li>
            </ul>
            <div class="study-highlight">
              <strong>تطبيقات واقعية:</strong> توقع أسعار العقارات، وتشخيص الأمراض من السجلات الطبية، وتصفية الرسائل المزعجة.
            </div>
          `
        },
        questions: [
          {
            q: { en: "Machine Learning is a subset of which broader field?", ar: "يُعد تعلم الآلة فرعاً من أي مجال أوسع؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Artificial Intelligence", "Civil Engineering", "Astronomy", "Photography"], ar: ["الذكاء الاصطناعي", "الهندسة المدنية", "علم الفلك", "التصوير الفوتوغرافي"] },
            ans: 0
          },
          {
            q: { en: "Which ML type learns from labeled examples with known answers?", ar: "أي نوع من تعلم الآلة يتعلم من أمثلة مصنفة بإجابات معروفة مسبقاً؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Unsupervised Learning", "Supervised Learning", "Random Guessing", "Manual Coding"], ar: ["التعلم غير الخاضع للإشراف", "التعلم الخاضع للإشراف (Supervised)", "التخمين العشوائي", "البرمجة اليدوية"] },
            ans: 1
          },
          {
            q: { en: "Learning through trial, error, rewards, and penalties describes:", ar: "التعلم من خلال المحاولة والخطأ والمكافآت والعقوبات يصف:" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Reinforcement Learning", "Supervised Learning", "Data Entry", "File Compression"], ar: ["التعلم التعزيزي (Reinforcement)", "التعلم الخاضع للإشراف", "إدخال البيانات", "ضغط الملفات"] },
            ans: 0
          },
          {
            q: { en: "Which ML type discovers hidden patterns in unlabeled data?", ar: "أي نوع من تعلم الآلة يكتشف الأنماط الخفية في البيانات غير المصنفة؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Static Programming"], ar: ["التعلم الخاضع للإشراف", "التعلم غير الخاضع للإشراف (Unsupervised)", "التعلم التعزيزي", "البرمجة الثابتة"] },
            ans: 1
          },
          {
            q: { en: "Training a spam filter using thousands of emails marked 'Spam' or 'Safe' is an example of:", ar: "تدريب فلتر بريد إلكتروني باستخدام آلاف الرسائل المصنفة 'مزعجة' أو 'آمنة' هو مثال على:" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Supervised Learning", "Reinforcement Learning", "Unsupervised Learning", "Hardware testing"], ar: ["التعلم الخاضع للإشراف", "التعلم التعزيزي", "التعلم غير الخاضع للإشراف", "اختبار الأجهزة"] },
            ans: 0
          },
          {
            q: { en: "Grouping customers into segments without predefined labels uses:", ar: "تقسيم العملاء إلى شرائح دون تصنيفات محددة مسبقاً يستخدم:" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Unsupervised Learning", "Supervised Learning", "Manual sorting", "Spell checking"], ar: ["التعلم غير الخاضع للإشراف", "التعلم الخاضع للإشراف", "الفرز اليدوي", "التدقيق الإملائي"] },
            ans: 0
          },
          {
            q: { en: "Teaching a robotic arm to walk by rewarding balance and penalizing falls uses:", ar: "تعليم ذراع روبوتية التوازن عبر مكافأة الثبات ومعاقبة السقوط يستخدم:" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Reinforcement Learning", "Supervised Learning", "Text formatting", "Cloud storage"], ar: ["التعلم التعزيزي", "التعلم الخاضع للإشراف", "تنسيق النصوص", "التخزين السحابي"] },
            ans: 0
          },
          {
            q: { en: "What is the key difference between Supervised and Unsupervised Learning?", ar: "ما هو الفرق الأساسي بين التعلم الخاضع للإشراف وغير الخاضع للإشراف؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Supervised uses labeled input-output pairs; Unsupervised explores raw unlabeled data", "Unsupervised uses no data", "Supervised never makes predictions", "They are identical"], ar: ["الخاضع للإشراف يستخدم بيانات مصنفة؛ وغير الخاضع للإشراف يستكشف بيانات خام غير مصنفة", "غير الخاضع للإشراف لا يستخدم بيانات", "الخاضع للإشراف لا يتنبأ أبداً", "كلاهما متطابق تماماً"] },
            ans: 0
          },
          {
            q: { en: "Predicting a continuous number, such as tomorrow's temperature, is a classic ML task called:", ar: "توقع قيمة رقمية مستمرة مثل درجة حرارة الغد يُعد مهمة تعلم آلة تُسمى:" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Regression", "Clustering", "Tokenization", "Encryption"], ar: ["الانحدار (Regression)", "التجميع (Clustering)", "التقسيم اللغوي", "التشفير"] },
            ans: 0
          },
          {
            q: { en: "Why is Machine Learning preferred over manual rule-writing for fraud detection?", ar: "لماذا يُفضّل تعلم الآلة على كتابة القواعد يدوياً في كشف الاحتيال؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Fraud patterns constantly evolve, and ML adapts automatically to new behaviors", "Manual rules are illegal", "ML requires zero computers", "Fraud never changes"], ar: ["أساليب الاحتيال تتغير باستمرار، وتعلم الآلة يتكيف تلقائياً مع الأنماط الجديدة", "القواعد اليدوية غير قانونية", "تعلم الآلة لا يحتاج حواسيب", "الاحتيال لا يتغير أبداً"] },
            ans: 0
          }
        ]
      },
      {
        id: 6,
        title: { en: "6. Deep Learning (DL)", ar: "6. التعلم العميق (Deep Learning)" },
        subtitle: { en: "Artificial Neural Networks & Hidden Layers", ar: "الشبكات العصبية الاصطناعية والطبقات العميقة" },
        icon: "🕸️",
        content: {
          en: `
            <p><strong>Deep Learning (DL)</strong> is an advanced subset of Machine Learning inspired by the structure and function of the human brain, using <strong>Artificial Neural Networks (ANNs)</strong>.</p>
            <h4>How Neural Networks Work:</h4>
            <ul>
              <li><strong>Input Layer:</strong> Receives raw data (such as pixels of an image).</li>
              <li><strong>Hidden Layers:</strong> Multiple "deep" layers that extract increasingly complex features (edges → shapes → faces).</li>
              <li><strong>Output Layer:</strong> Produces the final prediction (e.g., "Cat: 98%").</li>
            </ul>
            <div class="study-highlight">
              <strong>Why "Deep"?</strong> Because the network contains many hidden layers stacked together, enabling breakthroughs in self-driving cars, voice translation, and medical imaging.
            </div>
          `,
          ar: `
            <p><strong>التعلم العميق (Deep Learning)</strong> هو فرع متقدم من تعلم الآلة مستوحى من بنية ووظيفة الدماغ البشري، ويعتمد على <strong>الشبكات العصبية الاصطناعية (ANNs)</strong>.</p>
            <h4>كيف تعمل الشبكات العصبية؟</h4>
            <ul>
              <li><strong>طبقة الإدخال (Input Layer):</strong> تستقبل البيانات الخام (مثل بكسلات الصورة).</li>
              <li><strong>الطبقات المخفية (Hidden Layers):</strong> طبقات متعددة "عميقة" تستخرج سمات أكثر تعقيداً تدريجياً (حواف ← أشكال ← وجوه).</li>
              <li><strong>طبقة الإخراج (Output Layer):</strong> تُنتج التوقع النهائي (مثل: "قطة بنسبة 98%").</li>
            </ul>
            <div class="study-highlight">
              <strong>لماذا سُمي "عميقاً"؟</strong> لأن الشبكة تحتوي على عدد كبير من الطبقات المخفية المتتالية، مما مكّن من تطوير السيارات ذاتية القيادة والترجمة الفورية وتحليل الأشعة الطبية.
            </div>
          `
        },
        questions: [
          {
            q: { en: "Deep Learning is inspired by the structure of what biological organ?", ar: "التعلم العميق مستوحى من بنية أي عضو حيوي في جسم الإنسان؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["The human heart", "The human brain", "The lungs", "The liver"], ar: ["القلب البشري", "الدماغ البشري", "الرئتان", "الكبد"] },
            ans: 1
          },
          {
            q: { en: "What are the core computing structures used in Deep Learning called?", ar: "ماذا تُسمى البنى الحاسوبية الأساسية المستخدمة في التعلم العميق؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Artificial Neural Networks", "Spreadsheets", "Optical cables", "Hard drives"], ar: ["الشبكات العصبية الاصطناعية", "جداول البيانات", "الكابلات الضوئية", "الأقراص الصلبة"] },
            ans: 0
          },
          {
            q: { en: "Why is Deep Learning called 'Deep'?", ar: "لماذا سُمي التعلم العميق بهذا الاسم (Deep)؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["It runs underwater", "It uses many stacked hidden layers in a neural network", "It only works at night", "It requires deep storage"], ar: ["لأنه يعمل تحت الماء", "لأنه يستخدم طبقات مخفية متعددة متتالية داخل الشبكة العصبية", "يعمل ليلاً فقط", "يتطلب تخزيناً عميقاً"] },
            ans: 1
          },
          {
            q: { en: "Which layer in a neural network receives the initial raw data?", ar: "أي طبقة في الشبكة العصبية تستقبل البيانات الخام الأولية؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Output Layer", "Input Layer", "Hidden Layer", "Final Layer"], ar: ["طبقة الإخراج", "طبقة الإدخال (Input Layer)", "الطبقة المخفية", "الطبقة النهائية"] },
            ans: 1
          },
          {
            q: { en: "Where does most feature extraction happen in a Deep Learning model?", ar: "أين تتم معظم عمليات استخراج السمات والخصائص في نموذج التعلم العميق؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["In the Hidden Layers", "In the power cord", "In the monitor", "In the keyboard"], ar: ["في الطبقات المخفية (Hidden Layers)", "في كابل الطاقة", "في الشاشة", "في لوحة المفاتيح"] },
            ans: 0
          },
          {
            q: { en: "Which technology relies heavily on Deep Learning?", ar: "أي تقنية تعتمد بشكل أساسي على التعلم العميق؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Self-driving cars recognizing pedestrians", "Basic pocket calculators", "Mechanical typewriters", "Analog clocks"], ar: ["السيارات ذاتية القيادة التي تتعرف على المشاة", "الآلات الحاسبة البسيطة", "الآلات الكاتبة الميكانيكية", "الساعات التناظرية"] },
            ans: 0
          },
          {
            q: { en: "What is the relationship between AI, Machine Learning, and Deep Learning?", ar: "ما هي العلاقة الصحيحة بين الذكاء الاصطناعي وتعلم الآلة والتعلم العميق؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Deep Learning is a subset of Machine Learning, which is a subset of AI", "AI is a subset of Deep Learning", "They are completely unrelated fields", "Machine Learning is larger than AI"], ar: ["التعلم العميق جزء من تعلم الآلة، وتعلم الآلة جزء من الذكاء الاصطناعي", "الذكاء الاصطناعي جزء من التعلم العميق", "مجالات غير مرتبطة ببعضها", "تعلم الآلة أشمل من الذكاء الاصطناعي"] },
            ans: 0
          },
          {
            q: { en: "In image recognition, how do hidden layers process a photo of a face?", ar: "في التعرف على الصور، كيف تعالج الطبقات المخفية صورة وجه؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Early layers detect simple edges, while deeper layers combine them into eyes, noses, and faces", "All layers do the exact same calculation", "The output layer takes the photo", "It ignores pixel colors"], ar: ["الطبقات الأولى تكتشف الحواف البسيطة، والطبقات الأعمق تدمجها لتكوين العيون والأنف والوجه", "كل الطبقات تقوم بنفس العملية تماماً", "طبقة الإخراج تلتقط الصورة", "تتجاهل ألوان البكسل"] },
            ans: 0
          },
          {
            q: { en: "What major advantage does Deep Learning have over traditional Machine Learning on huge datasets?", ar: "ما الميزة الكبرى للتعلم العميق مقارنة بتعلم الآلة التقليدي مع البيانات الضخمة؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["It automatically learns complex features without manual feature engineering", "It works without electricity", "It requires zero training time", "It only needs 2 data points"], ar: ["يتعلم السمات المعقدة تلقائياً دون الحاجة لاستخراجها يدوياً", "يعمل بدون كهرباء", "لا يحتاج وقتاً للتدريب", "يحتاج نقطتي بيانات فقط"] },
            ans: 0
          },
          {
            q: { en: "Which resource is typically required in large amounts to train Deep Learning models effectively?", ar: "ما المورد الذي يُطلب عادةً بكميات كبيرة لتدريب نماذج التعلم العميق بكفاءة؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Large labeled datasets and high-performance GPUs", "Floppy disks", "Dial-up internet", "Paper notebooks"], ar: ["بيانات ضخمة ومعالجات رسوميات عالية الأداء (GPUs)", "أقراص مرنة", "إنترنت بطيء", "دفاتر ورقية"] },
            ans: 0
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: { en: "AI Tools", ar: "أدوات الذكاء الاصطناعي" },
    subtitle: { en: "ChatGPT, Image Generation & Presentations", ar: "الوحدة الثالثة: شات جي بي تي وتوليد الصور والعروض" },
    icon: "fa-wand-magic-sparkles",
    celebration: {
      emoji: "🎨",
      title: { en: "Module 3 Completed!", ar: "رائع! لقد أتممت الوحدة الثالثة بنجاح!" },
      message: {
        en: "You now know how to use ChatGPT, AI image generators, and presentation builders. Let's see real-world AI applications in Module 4!",
        ar: "أصبحتِ الآن ملمة بأشهر أدوات الذكاء الاصطناعي لتوليد النصوص والصور والعروض التقديمية. هيا بنا إلى الوحدة الرابعة لنرى تطبيقاته في حياتنا!"
      }
    },
    lessons: [
      {
        id: 7,
        title: { en: "7. Getting Started with ChatGPT", ar: "7. التعرف على ChatGPT" },
        subtitle: { en: "Large Language Models & Prompt Engineering", ar: "نماذج اللغة الكبيرة وهندسة الأوامر" },
        icon: "💬",
        content: {
          en: `
            <p><strong>ChatGPT</strong> is a conversational AI powered by a <strong>Large Language Model (LLM)</strong>. It predicts the most helpful next words based on billions of text examples to answer questions, write code, summarize articles, and brainstorm ideas.</p>
            <h4>Secrets of Effective Prompt Engineering:</h4>
            <ul>
              <li><strong>Assign a Role:</strong> e.g., <em>"Act as an experienced biology tutor..."</em></li>
              <li><strong>Provide Context & Constraints:</strong> Specify length, tone, and audience.</li>
              <li><strong>Iterate:</strong> Ask follow-up questions to refine the response.</li>
            </ul>
            <div class="study-highlight">
              <strong>Watch Out for Hallucinations:</strong> LLMs can sometimes generate confident-sounding but inaccurate facts. Always verify critical information!
            </div>
          `,
          ar: `
            <p><strong>ChatGPT</strong> هو نظام ذكاء اصطناعي حواري يعمل بواسطة <strong>نموذج لغوي كبير (LLM)</strong>. يتنبأ بالكلمات التالية الأكثر فائدة بناءً على مليارات النصوص للإجابة عن الأسئلة، وكتابة الأكواد، وتلخيص المقالات، والعصف الذهني.</p>
            <h4>أسرار هندسة الأوامر الفعالة (Prompt Engineering):</h4>
            <ul>
              <li><strong>تحديد الدور (Role):</strong> مثل: <em>"تصرف كمعلم أحياء خبير..."</em></li>
              <li><strong>توضيح السياق والقيود:</strong> حدد الطول المطلوب، والأسلوب، والجمهور المستهدف.</li>
              <li><strong>التحسين المستمر (Iterate):</strong> اطرح أسئلة متابعة لتنقيح الإجابة وتطويرها.</li>
            </ul>
            <div class="study-highlight">
              <strong>انتبه للهلوسة (AI Hallucinations):</strong> قد تؤلف النماذج اللغوية أحياناً معلومات غير دقيقة بأسلوب واثق. تحقق دائماً من المعلومات المهمة!
            </div>
          `
        },
        questions: [
          {
            q: { en: "What type of AI model powers tools like ChatGPT?", ar: "ما نوع نموذج الذكاء الاصطناعي الذي يشغّل أدوات مثل ChatGPT؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Large Language Model (LLM)", "Spreadsheet Macro", "Antivirus Engine", "Photo Filter"], ar: ["نموذج لغوي كبير (LLM)", "معادلة جداول بيانات", "برنامج مكافحة فيروسات", "فلتر صور"] },
            ans: 0
          },
          {
            q: { en: "What is a 'prompt' when using ChatGPT?", ar: "ما هو 'الأمر' (Prompt) عند استخدام ChatGPT؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["The instruction or question you type to the AI", "The computer's power button", "A hardware error", "A type of monitor"], ar: ["التعليمات أو السؤال الذي تكتبه للذكاء الاصطناعي", "زر تشغيل الكمبيوتر", "خطأ في الجهاز", "نوع من الشاشات"] },
            ans: 0
          },
          {
            q: { en: "Which task can ChatGPT perform effectively?", ar: "أي مهمة يستطيع ChatGPT أداءها بكفاءة عالية؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Summarizing long articles and brainstorming ideas", "Physically washing dishes", "Repairing broken screens", "Printing 3D plastic"], ar: ["تلخيص المقالات الطويلة والعصف الذهني", "غسل الأطباق يدوياً", "إصلاح الشاشات المكسورة", "طباعة البلاستيك"] },
            ans: 0
          },
          {
            q: { en: "What is 'Prompt Engineering'?", ar: "ما المقصود بـ 'هندسة الأوامر' (Prompt Engineering)؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Building computer microchips", "Crafting clear, structured instructions to get optimal AI responses", "Fixing internet routers", "Designing fonts"], ar: ["تصنيع الرقائق الإلكترونية", "صياغة تعليمات واضحة ومنظمة للحصول على أفضل إجابة من الذكاء الاصطناعي", "إصلاح أجهزة الراوتر", "تصميم الخطوط"] },
            ans: 1
          },
          {
            q: { en: "What does 'AI Hallucination' mean?", ar: "ماذا يعني مصطلح 'هلوسة الذكاء الاصطناعي' (AI Hallucination)؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["When AI generates false or fabricated facts confidently", "When a screen flickers", "When AI plays music", "When a computer overheats"], ar: ["عندما يولّد الذكاء الاصطناعي معلومات خاطئة أو مختلقة بأسلوب واثق", "عندما تومض الشاشة", "عندما يشغل الموسيقى", "عندما ترتفع حرارة الجهاز"] },
            ans: 0
          },
          {
            q: { en: "How can you improve a vague answer from ChatGPT?", ar: "كيف يمكنك تحسين إجابة غامضة أو عامة من ChatGPT؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Give it a specific role, audience, and format constraints", "Type random letters", "Close the browser", "Lower screen brightness"], ar: ["تحديد دور واضح له، والجمهور المستهدف، وشكل الإجابة المطلوب", "كتابة حروف عشوائية", "إغلاق المتصفح", "خفض إضاءة الشاشة"] },
            ans: 0
          },
          {
            q: { en: "Why should students fact-check answers generated by LLMs?", ar: "لماذا يجب على الطلاب التحقق من صحة الإجابات التي تولدها النماذج اللغوية؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Because LLMs predict likely text and can occasionally state incorrect details", "Because LLMs never use English", "Because LLMs only work offline", "Because fact-checking is illegal"], ar: ["لأنها تتنبأ بالكلمات المرجحة وقد تذكر أحياناً تفاصيل غير صحيحة", "لأنها لا تستخدم الإنجليزية", "لأنها تعمل بدون إنترنت فقط", "لأن التحقق ممنوع"] },
            ans: 0
          },
          {
            q: { en: "Which prompt is best engineered for studying?", ar: "أي أمر (Prompt) مُصاغ بأفضل طريقة للمذاكرة؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Explain photosynthesis", "Act as a science teacher and explain photosynthesis to a 14-year-old in 3 bullet points with an analogy", "Tell me stuff", "Biology"], ar: ["اشرح البناء الضوئي", "تصرف كمعلم علوم واشرح البناء الضوئي لطالب عمره 14 سنة في 3 نقاط مع مثال تشبيهي", "قل لي أشياء", "أحياء"] },
            ans: 1
          },
          {
            q: { en: "How does an LLM generate sentences?", ar: "كيف يولّد النموذج اللغوي الكبير (LLM) الجمل؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["By predicting the most probable next token/word based on context", "By copying and pasting a single book", "By calling a human operator", "By rolling physical dice"], ar: ["بتوقع الكلمة أو المقطع التالي الأكثر احتمالاً بناءً على السياق", "بنسخ ولصق كتاب واحد", "بالاتصال بموظف بشري", "برمي النرد"] },
            ans: 0
          },
          {
            q: { en: "What is 'Iterative Prompting'?", ar: "ما هو 'التوجيه التكراري' (Iterative Prompting)؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Refining AI output step-by-step through follow-up feedback", "Restarting the PC repeatedly", "Deleting your account", "Using only one-word prompts"], ar: ["تحسين مخرجات الذكاء الاصطناعي خطوة بخطوة عبر ملاحظات متتابعة", "إعادة تشغيل الجهاز باستمرار", "حذف حسابك", "استخدام كلمة واحدة فقط"] },
            ans: 0
          }
        ]
      },
      {
        id: 8,
        title: { en: "8. Generating Images with AI", ar: "8. إنشاء الصور باستخدام AI" },
        subtitle: { en: "Diffusion Models & Visual Prompting", ar: "نماذج الانتشار وصياغة أوامر الصور" },
        icon: "🖼️",
        content: {
          en: `
            <p>AI image generators (such as <strong>Midjourney, DALL·E, and Adobe Firefly</strong>) transform text descriptions into original artwork, illustrations, and photorealistic visuals in seconds.</p>
            <h4>How Text-to-Image Works (Diffusion Models):</h4>
            <ul>
              <li>The AI starts with a canvas of random visual noise.</li>
              <li>Guided by your text prompt, it gradually removes noise step-by-step until a clear image emerges.</li>
            </ul>
            <div class="study-highlight">
              <strong>Anatomy of a Great Image Prompt:</strong> Subject + Art Style + Lighting + Mood (e.g., <em>"A cute purple robot reading books, 3D Pixar style, soft studio lighting, dreamy atmosphere"</em>).
            </div>
          `,
          ar: `
            <p>تقوم أدوات توليد الصور بالذكاء الاصطناعي (مثل <strong>Midjourney و DALL·E و Adobe Firefly</strong>) بتحويل الأوصاف النصية إلى لوحات فنية ورسومات وصور واقعية في ثوانٍ معدودة.</p>
            <h4>كيف تعمل تقنية تحويل النص إلى صورة (Diffusion Models)؟</h4>
            <ul>
              <li>يبدأ الذكاء الاصطناعي بلوحة مليئة بالتشويش البصري العشوائي (Noise).</li>
              <li>وبتوجيه من وصفك النصي، يزيل التشويش تدريجياً خطوة بخطوة حتى تظهر صورة واضحة متكاملة.</li>
            </ul>
            <div class="study-highlight">
              <strong>مكونات وصف الصورة الاحترافي:</strong> الموضوع الأساسي + الأسلوب الفني + الإضاءة + الجو العام (مثل: <em>"روبوت بنفسجي لطيف يقرأ كتباً، بأسلوب ثلاثي الأبعاد، إضاءة استوديو ناعمة"</em>).
            </div>
          `
        },
        questions: [
          {
            q: { en: "What do AI tools like DALL·E and Midjourney create from text?", ar: "ماذا تنشئ أدوات مثل DALL·E و Midjourney انطلاقاً من النصوص؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Original images and artwork", "Audio podcasts", "Excel spreadsheets", "Wi-Fi signals"], ar: ["صوراً ورسومات فنية أصلية", "بودكاست صوتي", "جداول إكسل", "إشارات واي فاي"] },
            ans: 0
          },
          {
            q: { en: "Which technology powers most modern AI image generators?", ar: "ما التقنية التي تشغّل معظم مولدات الصور الحديثة بالذكاء الاصطناعي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Diffusion Models", "Steam Engines", "Bluetooth", "Calculators"], ar: ["نماذج الانتشار (Diffusion Models)", "المحركات البخارية", "البلوتوث", "الآلات الحاسبة"] },
            ans: 0
          },
          {
            q: { en: "Which element helps define the visual look of an AI-generated image?", ar: "أي عنصر يساعد في تحديد الشكل البصري للصورة المولّدة بالذكاء الاصطناعي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Specifying art style and lighting in the prompt", "Typing faster", "Using a larger mouse", "Increasing volume"], ar: ["تحديد الأسلوب الفني والإضاءة في الوصف", "الكتابة بسرعة أكبر", "استخدام فأرة أكبر", "رفع الصوت"] },
            ans: 0
          },
          {
            q: { en: "How does a Diffusion Model create an image?", ar: "كيف ينشئ نموذج الانتشار (Diffusion Model) الصورة؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["By starting with random visual noise and gradually refining it into a clear picture", "By searching Google Images and cropping", "By hiring an artist", "By scanning paper"], ar: ["بالبدء بتشويش بصري عشوائي وتنقيته تدريجياً ليصبح صورة واضحة", "بالبحث في صور جوجل وقصها", "بتوظيف رسام", "بمسح الأوراق ضوئياً"] },
            ans: 0
          },
          {
            q: { en: "Which of these is an AI image generation tool?", ar: "أي من هذه الأدوات يُعد أداة لتوليد الصور بالذكاء الاصطناعي؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Adobe Firefly", "Microsoft Excel", "WinRAR", "Notepad"], ar: ["Adobe Firefly", "مايكروسوفت إكسل", "برنامج ضغط الملفات", "المفكرة"] },
            ans: 0
          },
          {
            q: { en: "What is 'Inpainting' in AI image editing?", ar: "ما هو التعديل الموضعي (Inpainting) في تحرير الصور بالذكاء الاصطناعي؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Selecting a specific part of an image to edit or replace using AI", "Printing on canvas", "Turning images black and white", "Deleting photos"], ar: ["تحديد جزء معين من الصورة لتعديله أو استبداله بالذكاء الاصطناعي", "الطباعة على القماش", "تحويل الصور لأبيض وأسود", "حذف الصور"] },
            ans: 0
          },
          {
            q: { en: "Why is adding lighting details (e.g., 'golden hour', 'soft studio light') helpful?", ar: "لماذا تفيد إضافة تفاصيل الإضاءة (مثل 'إضاءة استوديو ناعمة') في وصف الصورة؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["It dramatically improves realism, depth, and mood", "It reduces file size to zero", "It changes the language", "It speeds up Wi-Fi"], ar: ["تحسّن الواقعية والعمق والجو العام للصورة بشكل كبير", "تقلل حجم الملف للصفر", "تغير اللغة", "تسرّع الإنترنت"] },
            ans: 0
          },
          {
            q: { en: "What ethical concern is frequently discussed regarding AI image generators?", ar: "ما القضية الأخلاقية التي تُناقش كثيراً بخصوص مولدات الصور بالذكاء الاصطناعي؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Copyright and artist consent regarding training datasets", "Images taking too much paper", "Cameras becoming too heavy", "Screens running out of color"], ar: ["حقوق الملكية الفكرية وموافقة الفنانين على استخدام أعمالهم في التدريب", "استهلاك الصور للكثير من الورق", "ثقل وزن الكاميرات", "نفاد الألوان من الشاشات"] },
            ans: 0
          },
          {
            q: { en: "What is a 'Negative Prompt' in image generation?", ar: "ما هو 'الوصف السلبي' (Negative Prompt) في توليد الصور؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Listing elements you explicitly do NOT want to appear in the generated image", "Insulting the AI", "Turning off the monitor", "Deleting the prompt"], ar: ["تحديد العناصر التي لا تريد ظهورها إطلاقاً في الصورة الناتجة", "إهانة الذكاء الاصطناعي", "إغلاق الشاشة", "حذف الوصف"] },
            ans: 0
          },
          {
            q: { en: "Which prompt structure gives the most controllable visual result?", ar: "أي هيكل لوصف الصورة يعطي نتيجة بصرية أكثر دقة وتحكماً؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Subject + Environment + Artistic Style + Lighting + Composition", "Just one adjective", "Random numbers", "A blank space"], ar: ["الموضوع + البيئة + الأسلوب الفني + الإضاءة + التكوين", "صفة واحدة فقط", "أرقام عشوائية", "مسافة فارغة"] },
            ans: 0
          }
        ]
      },
      {
        id: 9,
        title: { en: "9. Writing Texts & Presentations with AI", ar: "9. كتابة النصوص والعروض التقديمية بـ AI" },
        subtitle: { en: "Productivity Co-Pilots & Smart Slide Decks", ar: "مساعدو الكتابة وتصميم الشرائح الذكية" },
        icon: "📊",
        content: {
          en: `
            <p>Modern productivity AI tools help students and professionals draft essays, structure reports, and design polished slide decks in minutes instead of hours.</p>
            <h4>Popular AI Productivity & Presentation Tools:</h4>
            <ul>
              <li><strong>Writing & Editing:</strong> ChatGPT, Claude, Grammarly, and Notion AI for outlining, proofreading, and tone adjustment.</li>
              <li><strong>Presentations:</strong> Gamma, Tome, and Canva Magic Design automatically generate slide layouts, bullet points, and matching visuals from a topic outline.</li>
            </ul>
            <div class="study-highlight">
              <strong>Best Practice:</strong> Use AI as a <em>co-pilot</em> to build your structure and first draft, then add your own critical thinking, voice, and verified sources.
            </div>
          `,
          ar: `
            <p>تساعد أدوات الإنتاجية الحديثة المدعومة بالذكاء الاصطناعي الطلاب والمحترفين في صياغة المقالات، وهيكلة التقارير، وتصميم عروض تقديمية جذابة في دقائق بدلاً من ساعات.</p>
            <h4>أشهر أدوات الكتابة والعروض التقديمية:</h4>
            <ul>
              <li><strong>الكتابة والتحرير:</strong> ChatGPT و Claude و Grammarly و Notion AI لوضع الخطوط العريضة، والتدقيق اللغوي، وضبط الأسلوب.</li>
              <li><strong>العروض التقديمية:</strong> أدوات مثل Gamma و Tome و Canva Magic Design تولّد تلقائياً تخطيطات الشرائح والنقاط والصور المناسبة انطلاقاً من فكرة الموضوع.</li>
            </ul>
            <div class="study-highlight">
              <strong>أفضل ممارسة:</strong> استخدم الذكاء الاصطناعي <em>كمساعد (Co-pilot)</em> لبناء الهيكل والمسودة الأولى، ثم أضف لمستك الشخصية وتفكيرك النقدي ومصادرك الموثوقة.
            </div>
          `
        },
        questions: [
          {
            q: { en: "Which tool helps automatically generate slide decks from a text prompt?", ar: "أي أداة تساعد في إنشاء عروض تقديمية تلقائياً من وصف نصي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Gamma / Canva Magic Design", "Windows Calculator", "Paint", "Task Manager"], ar: ["Gamma / Canva Magic Design", "الآلة الحاسبة", "برنامج الرسام", "مدير المهام"] },
            ans: 0
          },
          {
            q: { en: "How can AI writing assistants help with an essay?", ar: "كيف يمكن لمساعدي الكتابة بالذكاء الاصطناعي المساعدة في كتابة مقال؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Creating an outline and checking grammar", "Binding hardcover books", "Delivering mail", "Fixing printers"], ar: ["وضع مخطط للمقال وتدقيق القواعد اللغوية", "تجليد الكتب", "توصيل البريد", "إصلاح الطابعات"] },
            ans: 0
          },
          {
            q: { en: "What is the healthiest way for a student to use AI for writing?", ar: "ما هي الطريقة الأفضل للطالب لاستخدام الذكاء الاصطناعي في الكتابة؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["As a brainstorming and editing co-pilot while adding personal understanding", "Submitting raw AI text without reading it", "Never checking facts", "Copying classmates"], ar: ["كمساعد للعصف الذهني والتحرير مع إضافة فهمه وأسلوبه الشخصي", "تسليم نص الذكاء الاصطناعي دون قراءته", "عدم التحقق من الحقائق", "نسخ أعمال الزملاء"] },
            ans: 0
          },
          {
            q: { en: "Which tool specializes in AI grammar, clarity, and tone improvements?", ar: "أي أداة متخصصة في تحسين القواعد اللغوية ووضوح النص وأسلوبه بالذكاء الاصطناعي؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Grammarly", "VLC Media Player", "Photoshop", "Spotify"], ar: ["Grammarly", "مشغل الفيديو VLC", "فوتوشوب", "سبوتيفاي"] },
            ans: 0
          },
          {
            q: { en: "How do AI presentation tools save time during slide creation?", ar: "كيف توفّر أدوات العروض التقديمية بالذكاء الاصطناعي الوقت أثناء تصميم الشرائح؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["By suggesting layouts, concise bullet points, and relevant imagery automatically", "By turning off the projector", "By deleting slides", "By shrinking fonts"], ar: ["باقتراح التنسيقات والنقاط المختصرة والصور المناسبة تلقائياً", "بإغلاق جهاز العرض", "بحذف الشرائح", "بتصغير الخطوط"] },
            ans: 0
          },
          {
            q: { en: "What should you do before presenting AI-generated slides to an audience?", ar: "ماذا يجب أن تفعل قبل عرض شرائح مولّدة بالذكاء الاصطناعي أمام الجمهور؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Review accuracy, customize examples, and verify statistics", "Present them blindfolded", "Remove all titles", "Delete the conclusion"], ar: ["مراجعة دقة المعلومات وتخصيص الأمثلة والتحقق من الإحصائيات", "عرضها دون قراءتها", "حذف جميع العناوين", "حذف الخاتمة"] },
            ans: 0
          },
          {
            q: { en: "Using AI to convert a long research report into 5 key slides is called:", ar: "استخدام الذكاء الاصطناعي لتحويل تقرير بحثي طويل إلى 5 شرائح رئيسية يُسمى:" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Summarization and structuring", "Encryption", "Hardware acceleration", "Rendering"], ar: ["التلخيص والهيكلة", "التشفير", "تسريع العتاد", "المعالجة الرسومية"] },
            ans: 0
          },
          {
            q: { en: "Why is human oversight essential when using AI for academic or business writing?", ar: "لماذا يُعد الإشراف البشري ضرورياً عند استخدام الذكاء الاصطناعي في الكتابة الأكاديمية أو المهنية؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["To ensure originality, ethical integrity, accurate citations, and authentic voice", "Because AI cannot spell", "Because computers don't support text", "To make documents longer"], ar: ["لضمان الأصالة والأمانة العلمية ودقة المراجع والأسلوب الإنساني الصادق", "لأن الذكاء الاصطناعي لا يجيد الإملاء", "لأن الحواسيب لا تدعم النصوص", "لجعل المستندات أطول"] },
            ans: 0
          },
          {
            q: { en: "What happens if slides contain walls of unedited AI-generated paragraphs?", ar: "ماذا يحدث إذا احتوت الشرائح على فقرات طويلة غير معدلة من الذكاء الاصطناعي؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Audience engagement drops because slides become cluttered and hard to scan", "The presentation becomes automatically better", "Fonts grow larger", "It saves time"], ar: ["ينخفض تفاعل الجمهور لأن الشرائح تصبح مزدحمة وصعبة القراءة", "يصبح العرض أفضل تلقائياً", "تكبر الخطوط", "يوفر الوقت"] },
            ans: 0
          },
          {
            q: { en: "Which workflow combines AI efficiency with high human quality?", ar: "أي خطة عمل تجمع بين كفاءة الذكاء الاصطناعي والجودة البشرية العالية؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Human outline → AI draft expansion → Human fact-check & personalization", "AI prompt → Immediate submission without review", "No planning at all", "Manual typing without spellcheck"], ar: ["تخطيط بشري ← مسودة أولية بالذكاء الاصطناعي ← تدقيق وتخصيص بشري", "أمر للذكاء الاصطناعي ← تسليم فوري دون مراجعة", "بدون أي تخطيط", "كتابة يدوية بدون تدقيق"] },
            ans: 0
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: { en: "AI Applications", ar: "تطبيقات الذكاء الاصطناعي" },
    subtitle: { en: "Education, Healthcare & Daily Life", ar: "الوحدة الرابعة: التعليم والطب والحياة اليومية" },
    icon: "fa-rocket",
    celebration: {
      emoji: "🌟",
      title: { en: "Module 4 Completed!", ar: "إنجاز رائع! أتممت الوحدة الرابعة بنجاح!" },
      message: {
        en: "You've explored how AI transforms education, medicine, and daily routines. Only 1 final module left before your Graduation Certificate!",
        ar: "لقد تعرفتِ على كيف يغيّر الذكاء الاصطناعي التعليم والطب وحياتنا اليومية. بقيت وحدة أخيرة فقط (3 دروس) وتحصلي على شهادة التخرج الكبيرة!"
      }
    },
    lessons: [
      {
        id: 10,
        title: { en: "10. AI in Education", ar: "10. الذكاء الاصطناعي في التعليم" },
        subtitle: { en: "Adaptive Learning & Intelligent Tutors", ar: "التعلم التكيفي والمعلم الذكي" },
        icon: "🎓",
        content: {
          en: `
            <p>AI is transforming education from a "one-size-fits-all" model into <strong>adaptive, personalized learning</strong> tailored to each student's pace and strengths.</p>
            <h4>Key Uses of AI in Education:</h4>
            <ul>
              <li><strong>24/7 Intelligent Tutoring:</strong> AI tutors explain difficult concepts step-by-step anytime a student gets stuck.</li>
              <li><strong>Adaptive Learning Platforms:</strong> Systems that adjust question difficulty automatically based on student performance.</li>
              <li><strong>Teacher Support:</strong> Automating quiz creation, grading objective tests, and identifying students who need extra help.</li>
            </ul>
            <div class="study-highlight">
              <strong>Empowering Learners:</strong> AI breaks language barriers through instant translation and helps students with disabilities via speech-to-text and screen-reading tools.
            </div>
          `,
          ar: `
            <p>يحوّل الذكاء الاصطناعي التعليم من نموذج "قالب واحد يناسب الجميع" إلى <strong>تعلم تكيفي مخصص (Adaptive Learning)</strong> يناسب سرعة كل طالب ونقاط قوته.</p>
            <h4>أبرز تطبيقات الذكاء الاصطناعي في التعليم:</h4>
            <ul>
              <li><strong>المعلم الذكي على مدار الساعة:</strong> يشرح المفاهيم الصعبة خطوة بخطوة في أي وقت يحتاج فيه الطالب للمساعدة.</li>
              <li><strong>منصات التعلم التكيفي:</strong> أنظمة تعدّل مستوى صعوبة الأسئلة تلقائياً بناءً على أداء الطالب.</li>
              <li><strong>دعم المعلمين:</strong> أتمتة إنشاء الاختبارات، وتصحيح الأسئلة الموضوعية، وتحديد الطلاب الذين يحتاجون لدعم إضافي.</li>
            </ul>
            <div class="study-highlight">
              <strong>تمكين المتعلمين:</strong> يكسر الذكاء الاصطناعي حواجز اللغة عبر الترجمة الفورية، ويساعد ذوي الهمم من خلال تحويل الصوت إلى نص وقارئات الشاشة الذكية.
            </div>
          `
        },
        questions: [
          {
            q: { en: "How does AI make learning more personalized for students?", ar: "كيف يجعل الذكاء الاصطناعي التعلم أكثر تخصيصاً لكل طالب؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["By adapting content and difficulty to each student's pace", "By giving everyone the exact same test", "By removing all teachers", "By shortening school days to 5 minutes"], ar: ["بتكييف المحتوى ومستوى الصعوبة ليناسب سرعة كل طالب", "بإعطاء الجميع نفس الاختبار بالضبط", "بإلغاء المعلمين تماماً", "بتقصير اليوم الدراسي لـ 5 دقائق"] },
            ans: 0
          },
          {
            q: { en: "Which AI feature helps students with visual or hearing impairments?", ar: "أي ميزة ذكاء اصطناعي تساعد الطلاب من ذوي الإعاقات البصرية أو السمعية؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Text-to-speech and real-time captioning", "Brighter keyboards", "Heavier laptops", "Offline calculators"], ar: ["تحويل النص إلى كلام والترجمة النصية الفورية", "لوحات مفاتيح مضيئة", "أجهزة لابتوب أثقل", "آلات حاسبة غير متصلة"] },
            ans: 0
          },
          {
            q: { en: "How can AI assist teachers in the classroom?", ar: "كيف يمكن للذكاء الاصطناعي مساعدة المعلمين في العملية التعليمية؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Generating practice quizzes and analyzing class progress", "Cleaning whiteboards", "Locking classroom doors", "Serving lunch"], ar: ["إنشاء اختبارات تدريبية وتحليل مستوى تقدم الفصل", "تنظيف السبورات", "قفل أبواب الفصول", "تقديم الوجبات"] },
            ans: 0
          },
          {
            q: { en: "What is an 'Adaptive Learning System'?", ar: "ما هو 'نظام التعلم التكيفي' (Adaptive Learning System)؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Software that adjusts lesson difficulty based on a learner's real-time answers", "A desk that changes height", "A video player", "A static PDF textbook"], ar: ["برنامج يعدّل صعوبة الدروس والأسئلة بناءً على إجابات المتعلم الفورية", "مكتب يتغير ارتفاعه", "مشغل فيديو", "كتاب PDF ثابت"] },
            ans: 0
          },
          {
            q: { en: "How do language learning apps like Duolingo use AI?", ar: "كيف تستخدم تطبيقات تعلم اللغات مثل Duolingo الذكاء الاصطناعي؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["To customize practice exercises around words you struggle with", "To print passports", "To block microphones", "To change phone wallpapers"], ar: ["لتخصيص تمارين المراجعة حول الكلمات والقواعد التي تواجه صعوبة فيها", "لطباعة جوازات السفر", "لحظر الميكروفون", "لتغيير خلفية الهاتف"] },
            ans: 0
          },
          {
            q: { en: "What is a major benefit of an AI study tutor?", ar: "ما هي الفائدة الرئيسية للمعلم الذكي المساعد في المذاكرة؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Available 24/7 for patient, step-by-step explanations", "It replaces human friendships", "It never uses text", "It only works once a month"], ar: ["متاح على مدار الساعة لتقديم شروحات صبورة خطوة بخطوة", "يستبدل الصداقات البشرية", "لا يستخدم النصوص أبداً", "يعمل مرة واحدة في الشهر"] },
            ans: 0
          },
          {
            q: { en: "Why should AI assist teachers rather than replace them?", ar: "لماذا يجب أن يساعد الذكاء الاصطناعي المعلمين بدلاً من استبدالهم؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Human teachers provide empathy, mentorship, and social guidance that AI lacks", "Teachers are cheaper than software", "AI cannot read", "Schools have no electricity"], ar: ["المعلم البشري يقدم التعاطف والتوجيه التربوي والاجتماعي الذي يفتقده الذكاء الاصطناعي", "المعلمون أرخص من البرمجيات", "الذكاء الاصطناعي لا يقرأ", "المدارس بلا كهرباء"] },
            ans: 0
          },
          {
            q: { en: "What risk arises if students rely on AI to do all their homework?", ar: "ما الخطر الذي ينشأ إذا اعتمد الطلاب على الذكاء الاصطناعي لحل جميع واجباتهم بالكامل؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Loss of critical thinking and genuine skill mastery", "Their laptops overheat", "Internet speeds drop", "Books disappear"], ar: ["فقدان مهارات التفكير النقدي والإتقان الحقيقي للمادة", "ارتفاع حرارة أجهزة اللابتوب", "انخفاض سرعة الإنترنت", "اختفاء الكتب"] },
            ans: 0
          },
          {
            q: { en: "How can learning analytics help educators intervene early?", ar: "كيف تساعد تحليلات التعلم (Learning Analytics) المعلمين على التدخل المبكر؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["By spotting patterns of struggle before a student fails a final exam", "By hiding student grades", "By deleting attendance records", "By disabling quizzes"], ar: ["باكتشاف مؤشرات التعثر مبكراً قبل رسوب الطالب في الاختبار النهائي", "بإخفاء درجات الطلاب", "بحذف سجلات الحضور", "بتعطيل الاختبارات"] },
            ans: 0
          },
          {
            q: { en: "Which educational application best demonstrates inclusive AI?", ar: "أي تطبيق تعليمي يوضح مفهوم الذكاء الاصطناعي الشامل للجميع بأفضل صورة؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Real-time translation and voice-guided reading for diverse learners", "Restricting access to one language", "Removing subtitles", "Using complex jargon only"], ar: ["الترجمة الفورية والقراءة الصوتية الموجهة لمختلف المتعلمين", "قصر الوصول على لغة واحدة", "إزالة الترجمة النصية", "استخدام مصطلحات معقدة فقط"] },
            ans: 0
          }
        ]
      },
      {
        id: 11,
        title: { en: "11. AI in Healthcare & Medicine", ar: "11. الذكاء الاصطناعي في الطب" },
        subtitle: { en: "Medical Imaging, Drug Discovery & Wearables", ar: "تحليل الأشعة واكتشاف الأدوية والأجهزة الذكية" },
        icon: "🩺",
        content: {
          en: `
            <p>In healthcare, AI helps doctors detect diseases earlier, discover new medicines faster, and personalize patient treatments with remarkable precision.</p>
            <h4>Breakthroughs in Medical AI:</h4>
            <ul>
              <li><strong>Medical Imaging Analysis:</strong> Deep Learning models examine X-rays, MRIs, and CT scans to spot early signs of tumors or eye diseases.</li>
              <li><strong>Drug Discovery:</strong> AI predicts how molecules will interact, cutting years off the time needed to develop new medications.</li>
              <li><strong>Wearable Health Monitors:</strong> Smartwatches use AI to detect irregular heartbeats (arrhythmias) and alert users early.</li>
            </ul>
            <div class="study-highlight">
              <strong>Doctor + AI Teamwork:</strong> AI acts as a second pair of eyes for doctors—final medical decisions always remain with qualified healthcare professionals.
            </div>
          `,
          ar: `
            <p>في مجال الرعاية الصحية، يساعد الذكاء الاصطناعي الأطباء على اكتشاف الأمراض مبكراً، وتطوير أدوية جديدة بسرعة أكبر، وتخصيص العلاج بدقة فائقة.</p>
            <h4>أبرز إنجازات الذكاء الاصطناعي في الطب:</h4>
            <ul>
              <li><strong>تحليل الأشعة الطبية:</strong> تفحص نماذج التعلم العميق صور الأشعة السينية والرنين المغناطيسي لاكتشاف العلامات المبكرة للأورام أو أمراض العيون.</li>
              <li><strong>اكتشاف الأدوية (Drug Discovery):</strong> يتنبأ الذكاء الاصطناعي بتفاعل الجزيئات، مما يختصر سنوات من الوقت اللازم لتطوير أدوية جديدة.</li>
              <li><strong>الأجهزة الصحية القابلة للارتداء:</strong> تستخدم الساعات الذكية الذكاء الاصطناعي لرصد عدم انتظام ضربات القلب وتنبيه المستخدم مبكراً.</li>
            </ul>
            <div class="study-highlight">
              <strong>تعاون الطبيب والذكاء الاصطناعي:</strong> يعمل الذكاء الاصطناعي كعين ثانية مساعدة للطبيب—بينما يظل القرار الطبي النهائي دائماً بيد الأطباء المختصين.
            </div>
          `
        },
        questions: [
          {
            q: { en: "How does AI assist radiologists in hospitals?", ar: "كيف يساعد الذكاء الاصطناعي أطباء الأشعة في المستشفيات؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["By analyzing X-rays and MRIs to detect early signs of disease", "By driving ambulances manually", "By painting hospital walls", "By cooking meals"], ar: ["بتحليل صور الأشعة والرنين لاكتشاف العلامات المبكرة للأمراض", "بقيادة سيارات الإسعاف يدوياً", "بطلاء جدران المستشفى", "بطهي الوجبات"] },
            ans: 0
          },
          {
            q: { en: "How do smartwatches use AI for health?", ar: "كيف تستخدم الساعات الذكية الذكاء الاصطناعي للحفاظ على الصحة؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Monitoring heart rate patterns to detect irregularities", "Measuring shoe size", "Replacing sleep", "Printing prescriptions"], ar: ["مراقبة نمط ضربات القلب لاكتشاف أي اضطرابات مبكراً", "قياس مقاس الحذاء", "استبدال النوم", "طباعة الروشتات"] },
            ans: 0
          },
          {
            q: { en: "Who makes the final medical diagnosis when AI is used in a clinic?", ar: "من يتخذ التشخيص الطبي النهائي عند استخدام الذكاء الاصطناعي في العيادة؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Qualified human doctors", "The hospital Wi-Fi", "The patient's phone case", "An automated printer"], ar: ["الأطباء البشريون المؤهلون", "شبكة واي فاي المستشفى", "غطاء هاتف المريض", "طابعة آلية"] },
            ans: 0
          },
          {
            q: { en: "How does AI accelerate Drug Discovery?", ar: "كيف يسرّع الذكاء الاصطناعي عملية اكتشاف الأدوية الجديدة؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["By simulating molecular interactions rapidly before costly lab trials", "By growing plants faster", "By delivering boxes", "By replacing pharmacists"], ar: ["بمحاكاة التفاعلات الجزيئية بسرعة قبل التجارب المعملية المكلفة", "بزراعة النباتات أسرع", "بتوصيل الصناديق", "باستبدال الصيادلة"] },
            ans: 0
          },
          {
            q: { en: "Why is early disease detection via AI imaging so valuable?", ar: "لماذا يُعد الاكتشاف المبكر للأمراض عبر تحليل الصور بالذكاء الاصطناعي ذا قيمة كبيرة؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Treatments are much more effective when diseases are caught early", "It makes X-rays colorful", "It eliminates all hospitals", "It reduces battery usage"], ar: ["لأن العلاج يكون أكثر فاعلية بكثير عند اكتشاف المرض في مراحله الأولى", "يجعل الأشعة ملونة", "يلغي جميع المستشفيات", "يقلل استهلاك البطارية"] },
            ans: 0
          },
          {
            q: { en: "What is 'Personalized Medicine' powered by AI?", ar: "ما هو 'الطب الشخصي المخصص' المدعوم بالذكاء الاصطناعي؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Tailoring treatments based on a patient's unique genetics and health data", "Giving everyone the same pill", "Ignoring medical history", "Using only herbal tea"], ar: ["تفصيل خطط العلاج بناءً على البيانات الجينية والصحية الخاصة بكل مريض", "إعطاء الجميع نفس الدواء", "تجاهل التاريخ المرضي", "استخدام الأعشاب فقط"] },
            ans: 0
          },
          {
            q: { en: "Which AI branch is most used to analyze medical scans?", ar: "أي فرع من فروع الذكاء الاصطناعي يُستخدم بكثرة لتحليل الأشعة الطبية؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Deep Learning (Computer Vision)", "Audio compression", "Web hosting", "Spreadsheets"], ar: ["التعلم العميق (الرؤية الحاسوبية)", "ضغط الصوت", "استضافة المواقع", "جداول البيانات"] },
            ans: 0
          },
          {
            q: { en: "What critical requirement applies to medical data used to train healthcare AI?", ar: "ما الشرط الأساسي الذي ينطبق على البيانات الطبية المستخدمة لتدريب الذكاء الاصطناعي؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Strict patient privacy protection and unbiased representation across populations", "Posting patient names publicly", "Using only data from one person", "Ignoring clinical trials"], ar: ["الحماية الصارمة لخصوصية المرضى وتمثيل مختلف الفئات السكانية دون تحيز", "نشر أسماء المرضى علناً", "استخدام بيانات شخص واحد فقط", "تجاهل التجارب السريرية"] },
            ans: 0
          },
          {
            q: { en: "What could happen if a medical AI is trained on biased, non-diverse patient data?", ar: "ماذا قد يحدث إذا تم تدريب ذكاء اصطناعي طبي على بيانات مرضى غير متنوعة؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["It may perform less accurately for underrepresented demographic groups", "It will run twice as fast", "It will cure all diseases", "Nothing at all"], ar: ["قد يكون أداؤه أقل دقة مع الفئات السكانية غير الممثلة بشكل كافٍ في البيانات", "سيعمل بسرعة مضاعفة", "سيعالج كل الأمراض", "لن يحدث شيء"] },
            ans: 0
          },
          {
            q: { en: "How does AI reduce administrative burnout for doctors?", ar: "كيف يقلل الذكاء الاصطناعي من الإرهاق الإداري للأطباء؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["By transcribing clinical notes accurately so doctors focus more on patients", "By closing clinics early", "By canceling appointments", "By turning off computers"], ar: ["بتفريغ الملاحظات الطبية وتنظيم السجلات بدقة ليتفرغ الطبيب للمريض", "بإغلاق العيادات مبكراً", "بإلغاء المواعيد", "بإغلاق الحواسيب"] },
            ans: 0
          }
        ]
      },
      {
        id: 12,
        title: { en: "12. AI in Daily Life", ar: "12. الذكاء الاصطناعي في الحياة اليومية" },
        subtitle: { en: "Smartphones, Maps, Smart Homes & Shopping", ar: "الهواتف الذكية والخرائط والمنازل الذكية" },
        icon: "📱",
        content: {
          en: `
            <p>Even without realizing it, you likely interact with dozens of AI systems every single day from the moment you wake up.</p>
            <h4>Where AI Lives in Your Daily Routine:</h4>
            <ul>
              <li><strong>Smartphones:</strong> Face ID unlocking, portrait camera blur, autocorrect, and voice assistants.</li>
              <li><strong>Navigation & Commuting:</strong> Google Maps and Waze analyze live traffic data to predict arrival times and suggest faster routes.</li>
              <li><strong>Smart Homes & Shopping:</strong> Smart thermostats saving energy, personalized online store feeds, and instant customer support chatbots.</li>
            </ul>
            <div class="study-highlight">
              <strong>Invisible Convenience:</strong> The best everyday AI works quietly in the background to save time, energy, and effort.
            </div>
          `,
          ar: `
            <p>حتى دون أن تلاحظ، أنت تتفاعل مع عشرات الأنظمة المدعومة بالذكاء الاصطناعي يومياً منذ لحظة استيقاظك من النوم.</p>
            <h4>أين يتواجد الذكاء الاصطناعي في روتينك اليومي؟</h4>
            <ul>
              <li><strong>الهواتف الذكية:</strong> فتح القفل بالوجه (Face ID)، وعزل الخلفية في الكاميرا، والتصحيح التلقائي، والمساعدات الصوتية.</li>
              <li><strong>الملاحة والتنقل:</strong> تحلل تطبيقات مثل خرائط جوجل و Waze حركة المرور الحية لتوقع وقت الوصول واقتراح طرق أسرع.</li>
              <li><strong>المنازل الذكية والتسوق:</strong> منظمات الحرارة الذكية الموفرة للطاقة، واقتراحات المتاجر الإلكترونية، وروبوتات خدمة العملاء الفورية.</li>
            </ul>
            <div class="study-highlight">
              <strong>راحة غير مرئية:</strong> أفضل تطبيقات الذكاء الاصطناعي اليومية تعمل بهدوء في الخلفية لتوفير وقتك وطاقتك وجهدك.
            </div>
          `
        },
        questions: [
          {
            q: { en: "How does Google Maps use AI during your daily commute?", ar: "كيف تستخدم خرائط جوجل الذكاء الاصطناعي أثناء تنقلك اليومي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Analyzing live traffic to predict arrival times and find faster routes", "Paving new roads", "Refueling cars", "Changing traffic lights manually"], ar: ["تحليل حركة المرور الحية لتوقع وقت الوصول واقتراح طرق أسرع", "رصف طرق جديدة", "تزويد السيارات بالوقود", "تغيير إشارات المرور يدوياً"] },
            ans: 0
          },
          {
            q: { en: "Unlocking your smartphone with your face (Face ID) relies on:", ar: "فتح قفل هاتفك الذكي عبر التعرف على وجهك (Face ID) يعتمد على:" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["AI facial recognition", "A physical keyhole", "Thermometers", "Compass magnets"], ar: ["التعرف على الوجوه بالذكاء الاصطناعي", "مفتاح معدني", "مقياس حرارة", "مغناطيس البوصلة"] },
            ans: 0
          },
          {
            q: { en: "Which smartphone camera feature is powered by AI?", ar: "أي ميزة في كاميرا الهاتف الذكي تعمل بالذكاء الاصطناعي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Portrait mode background blur and night-mode enhancement", "Lens glass polishing", "Battery replacement", "SIM card ejection"], ar: ["عزل الخلفية في وضع البورتريه وتحسين التصوير الليلي", "تلميع زجاج العدسة", "استبدال البطارية", "إخراج شريحة الاتصال"] },
            ans: 0
          },
          {
            q: { en: "How do smart thermostats use AI at home?", ar: "كيف تستخدم منظمات الحرارة الذكية (Smart Thermostats) الذكاء الاصطناعي في المنزل؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Learning your schedule to optimize heating/cooling and save energy", "Opening front doors", "Washing windows", "Playing video games"], ar: ["تعلم جدولك اليومي لضبط التدفئة والتبريد وتوفير الطاقة", "فتح الأبواب الأمامية", "غسل النوافذ", "تشغيل ألعاب الفيديو"] },
            ans: 0
          },
          {
            q: { en: "When an online store shows 'Recommended for You', what is working behind the scenes?", ar: "عندما يعرض لك متجر إلكتروني قسم 'مقترح لك'، ما الذي يعمل في الخلفية؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["An AI recommendation algorithm", "A random number generator", "A store clerk typing manually", "A calculator"], ar: ["خوارزمية توصية بالذكاء الاصطناعي", "مولد أرقام عشوائي", "موظف يكتب يدوياً", "آلة حاسبة"] },
            ans: 0
          },
          {
            q: { en: "How does your email inbox keep junk mail out of sight?", ar: "كيف يحافظ بريدك الإلكتروني على إبعاد الرسائل المزعجة تلقائياً؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["AI spam filtering trained on millions of messages", "Deleting all emails daily", "Blocking the internet", "Changing your password"], ar: ["فلتر ذكاء اصطناعي مدرب على ملايين الرسائل لاكتشاف البريد المزعج", "حذف جميع الرسائل يومياً", "حظر الإنترنت", "تغيير كلمة المرور"] },
            ans: 0
          },
          {
            q: { en: "What role do AI chatbots play on websites?", ar: "ما الدور الذي تلعبه روبوتات الدردشة الذكية (Chatbots) على المواقع الإلكترونية؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Answering common customer questions instantly 24/7", "Designing physical buildings", "Shipping packages by drone", "Repairing screens"], ar: ["الإجابة الفورية على استفسارات العملاء الشائعة على مدار الساعة", "تصميم المباني", "شحن الطرود", "إصلاح الشاشات"] },
            ans: 0
          },
          {
            q: { en: "How does predictive text on mobile keyboards work?", ar: "كيف تعمل ميزة التنبؤ بالكلمات على لوحة مفاتيح الهاتف؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["A language model predicts the next word based on your typing context and habits", "It guesses letters randomly", "It reads printed books nearby", "It uses GPS coordinates"], ar: ["نموذج لغوي يتوقع الكلمة التالية بناءً على سياق الجملة وعادات كتابتك", "يخمن الحروف عشوائياً", "يقرأ الكتب القريبة", "يستخدم إحداثيات GPS"] },
            ans: 0
          },
          {
            q: { en: "Why do streaming platforms analyze when you pause or replay a scene?", ar: "لماذا تحلل منصات البث اللحظات التي توقف فيها الفيديو أو تعيد مشاهدتها؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["To refine user preference models and improve future recommendations", "To charge extra fees", "To turn off your TV", "To delete your profile"], ar: ["لتحسين نماذج فهم تفضيلات المستخدم وتقديم اقتراحات أدق مستقبلاً", "لفرض رسوم إضافية", "لإغلاق التلفاز", "لحذف حسابك"] },
            ans: 0
          },
          {
            q: { en: "What makes everyday AI 'invisible' to most users?", ar: "ما الذي يجعل الذكاء الاصطناعي اليومي 'غير مرئي' لمعظم المستخدمين؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["It is seamlessly integrated into familiar apps and devices rather than looking like a robot", "It has no code", "It only runs in outer space", "It never uses data"], ar: ["لأنه مدمج بسلاسة داخل التطبيقات والأجهزة المألوفة بدلاً من ظهوره كروبوت مادي", "لأنه بلا كود برمجي", "يعمل في الفضاء فقط", "لا يستخدم البيانات أبداً"] },
            ans: 0
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: { en: "Future of AI", ar: "مستقبل الذكاء الاصطناعي" },
    subtitle: { en: "Pros & Cons, Safety, Privacy & Careers", ar: "الوحدة الخامسة: المميزات والعيوب والأمان وفرص العمل" },
    icon: "fa-globe",
    celebration: {
      emoji: "🏆",
      title: { en: "Course Graduated! All 15 Lessons Complete!", ar: "مبروك التخرج! أتممت الكورس بالكامل!" },
      message: {
        en: "Extraordinary achievement! You passed all 5 modules and 15 exams. Your official AI Academy Certificate is now unlocked!",
        ar: "إنجاز استثنائي! لقد أنهيتِ جميع الوحدات الخمس والـ 15 درس بنجاح باهر. شهادتك الكبيرة جاهزة الآن باسمك!"
      }
    },
    lessons: [
      {
        id: 13,
        title: { en: "13. Advantages & Disadvantages of AI", ar: "13. مميزات وعيوب الذكاء الاصطناعي" },
        subtitle: { en: "Opportunities vs. Limitations", ar: "الفرص والإيجابيات مقابل التحديات والقيود" },
        icon: "⚖️",
        content: {
          en: `
            <p>Like every transformative technology in human history, Artificial Intelligence brings extraordinary benefits alongside important challenges.</p>
            <h4>Key Advantages:</h4>
            <ul>
              <li><strong>24/7 Availability & Speed:</strong> Machines never tire and process massive data in seconds.</li>
              <li><strong>Precision & Safety:</strong> Reduces human error in repetitive tasks and handles dangerous environments (deep sea, space, hazardous labs).</li>
            </ul>
            <h4>Key Disadvantages:</h4>
            <ul>
              <li><strong>High Development Cost:</strong> Building and running large models requires expensive infrastructure and energy.</li>
              <li><strong>Lack of True Creativity & Empathy:</strong> AI lacks genuine emotional understanding and moral judgment.</li>
            </ul>
            <div class="study-highlight">
              <strong>Balanced View:</strong> Understanding both strengths and limitations allows us to deploy AI responsibly where it helps humans most.
            </div>
          `,
          ar: `
            <p>مثل أي تقنية ثورية في تاريخ البشرية، يجلب الذكاء الاصطناعي فوائد استثنائية جنباً إلى جنب مع تحديات مهمة يجب الوعي بها.</p>
            <h4>أبرز المميزات:</h4>
            <ul>
              <li><strong>العمل المستمر والسرعة الفائقة:</strong> الآلات لا تتعب وتستطيع معالجة بيانات ضخمة في ثوانٍ.</li>
              <li><strong>الدقة والأمان:</strong> يقلل الأخطاء البشرية في المهام المتكررة ويعمل في البيئات الخطرة (أعماق البحار، الفضاء، المختبرات الخطرة).</li>
            </ul>
            <h4>أبرز العيوب والتحديات:</h4>
            <ul>
              <li><strong>التكلفة العالية:</strong> بناء وتشغيل النماذج الضخمة يتطلب بنية تحتية باهظة وطاقة كبيرة.</li>
              <li><strong>غياب التعاطف والإبداع الحقيقي:</strong> يفتقر الذكاء الاصطناعي للفهم العاطفي الصادق والحكم الأخلاقي الذاتي.</li>
            </ul>
            <div class="study-highlight">
              <strong>نظرة متوازنة:</strong> فهم نقاط القوة والقصور معاً يمكّننا من توظيف الذكاء الاصطناعي بمسؤولية حيث يخدم الإنسان بأفضل شكل.
            </div>
          `
        },
        questions: [
          {
            q: { en: "What is a major operational advantage of AI over human workers for repetitive tasks?", ar: "ما الميزة التشغيلية الكبرى للذكاء الاصطناعي مقارنة بالبشر في المهام المتكررة؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["AI can operate 24/7 without fatigue", "AI needs 8 hours of sleep", "AI gets bored easily", "AI requires vacations"], ar: ["يستطيع العمل على مدار الساعة دون تعب أو إرهاق", "يحتاج 8 ساعات نوم", "يشعر بالملل بسرعة", "يطلب إجازات"] },
            ans: 0
          },
          {
            q: { en: "In which hazardous environments is AI-powered robotics especially beneficial?", ar: "في أي بيئات خطرة تكون الروبوتات الذكية مفيدة بشكل خاص؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Deep-sea exploration, space, and toxic cleanup", "Coffee shops only", "Library reading rooms", "Art museums"], ar: ["استكشاف أعماق البحار والفضاء وتنظيف المواد السامة", "المقاهي فقط", "قاعات القراءة بالمكتبات", "المتاحف الفنية"] },
            ans: 0
          },
          {
            q: { en: "What human quality does AI genuinely lack?", ar: "ما الصفة الإنسانية التي يفتقر إليها الذكاء الاصطناعي فعلياً؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["True emotional empathy and moral consciousness", "Fast calculation", "Data storage", "Pattern matching"], ar: ["التعاطف العاطفي الحقيقي والوعي الأخلاقي", "الحساب السريع", "تخزين البيانات", "مطابقة الأنماط"] },
            ans: 0
          },
          {
            q: { en: "What is a notable disadvantage of training massive AI models?", ar: "ما أحد العيوب البارزة لتدريب نماذج الذكاء الاصطناعي الضخمة؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["High financial cost and significant energy consumption", "They take up zero memory", "They work without electricity", "They never need updates"], ar: ["التكلفة المالية المرتفعة والاستهلاك الكبير للطاقة", "لا تشغل أي ذاكرة", "تعمل بدون كهرباء", "لا تحتاج تحديثات أبداً"] },
            ans: 0
          },
          {
            q: { en: "How does AI reduce human error in data-heavy industries?", ar: "كيف يقلل الذكاء الاصطناعي من الأخطاء البشرية في القطاعات كثيفة البيانات؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["By consistently following learned statistical patterns without distraction", "By guessing answers", "By ignoring numbers", "By turning off alerts"], ar: ["باتباع الأنماط الإحصائية بدقة وثبات دون تشتت أو إرهاق", "بتخمين الإجابات", "بتجاهل الأرقام", "بإغلاق التنبيهات"] },
            ans: 0
          },
          {
            q: { en: "Why can over-reliance on AI be risky for society?", ar: "لماذا قد يكون الاعتماد المفرط على الذكاء الاصطناعي محفوفاً بالمخاطر؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["People may lose essential problem-solving skills if they stop thinking critically", "Computers become too light", "Books become heavier", "The internet stops working"], ar: ["قد يفقد الأفراد مهارات التفكير النقدي وحل المشكلات إذا توقفوا عن إعمال عقولهم", "تصبح الحواسيب خفيفة جداً", "تصبح الكتب أثقل", "يتوقف الإنترنت"] },
            ans: 0
          },
          {
            q: { en: "Can AI make ethical or moral judgments independently without human values?", ar: "هل يستطيع الذكاء الاصطناعي إصدار أحكام أخلاقية مستقلة دون توجيه القيم البشرية؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["No, ethical frameworks must be defined and overseen by humans", "Yes, AI is born with morals", "Only on Mondays", "Yes, automatically"], ar: ["لا، يجب أن يحدد البشر الأطر الأخلاقية ويشرفوا عليها", "نعم، يولد بأخلاق فطرية", "يوم الإثنين فقط", "نعم تلقائياً"] },
            ans: 0
          },
          {
            q: { en: "What is the environmental concern associated with giant AI data centers?", ar: "ما القلق البيئي المرتبط بمراكز بيانات الذكاء الاصطناعي العملاقة؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["High electricity and water consumption for computing and cooling", "Too much oxygen production", "Noise pollution in forests", "Paper waste"], ar: ["الاستهلاك المرتفع للكهرباء والمياه لتشغيل الخوادم وتبريدها", "إنتاج كميات زائدة من الأكسجين", "التلوث الضوضائي في الغابات", "نفايات الورق"] },
            ans: 0
          },
          {
            q: { en: "Why is AI considered a 'double-edged sword'?", ar: "لماذا يُعتبر الذكاء الاصطناعي 'سلاحاً ذا حدين'؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["It can boost productivity and cure diseases, or be misused if left unregulated", "It has two physical blades", "It only works for two years", "It splits screens in half"], ar: ["لأنه قادر على تعزيز الإنتاجية وعلاج الأمراض، أو إساءة استخدامه إذا تُرك بلا ضوابط", "لأن له شفرتين", "يعمل لعامين فقط", "يقسم الشاشة لنصفين"] },
            ans: 0
          },
          {
            q: { en: "Which task is better suited for humans than AI?", ar: "أي مهمة تناسب البشر بشكل أفضل من الذكاء الاصطناعي؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Compassionate counseling and nuanced ethical leadership", "Sorting 10 million rows in 1 second", "Scanning barcodes", "Calculating tax tables"], ar: ["الإرشاد النفسي المتعاطف والقيادة الأخلاقية الحكيمة", "فرز 10 ملايين صف بيانات في ثانية", "مسح الباركود", "حساب جداول الضرائب"] },
            ans: 0
          }
        ]
      },
      {
        id: 14,
        title: { en: "14. AI Risks, Safety & Privacy", ar: "14. مخاطر الذكاء الاصطناعي والأمان والخصوصية" },
        subtitle: { en: "Data Protection, Bias & Deepfakes", ar: "حماية البيانات والتحيز والتزييف العميق" },
        icon: "🛡️",
        content: {
          en: `
            <p>As AI becomes more powerful, ensuring <strong>AI Safety, Privacy, and Fairness</strong> is one of the most important priorities for technologists and governments worldwide.</p>
            <h4>Critical Risks to Understand:</h4>
            <ul>
              <li><strong>Data Privacy:</strong> AI systems collect vast personal data; users must protect sensitive personal, financial, and medical details.</li>
              <li><strong>Algorithmic Bias:</strong> If training data contains human prejudices, the AI will repeat and amplify unfair decisions.</li>
              <li><strong>Deepfakes & Misinformation:</strong> AI can generate realistic fake videos or voices used to deceive people.</li>
            </ul>
            <div class="study-highlight">
              <strong>Golden Safety Rule:</strong> Never share passwords, national IDs, or private bank details inside public AI chat tools!
            </div>
          `,
          ar: `
            <p>مع تزايد قوة الذكاء الاصطناعي، أصبح ضمان <strong>الأمان والخصوصية والعدالة</strong> من أهم الأولويات للتقنيين والحكومات حول العالم.</p>
            <h4>أهم المخاطر التي يجب فهمها:</h4>
            <ul>
              <li><strong>خصوصية البيانات (Data Privacy):</strong> تجمع أنظمة الذكاء الاصطناعي بيانات ضخمة؛ لذا يجب حماية البيانات الشخصية والمالية والطبية الحساسة.</li>
              <li><strong>التحيز الخوارزمي (Algorithmic Bias):</strong> إذا احتوت بيانات التدريب على تحيزات بشرية، فسيكرر الذكاء الاصطناعي قرارات غير عادلة ويضخمها.</li>
              <li><strong>التزييف العميق (Deepfakes):</strong> إمكانية توليد مقاطع فيديو أو أصوات مزيفة واقعية للغاية تُستخدم في الخداع ونشر الشائعات.</li>
            </ul>
            <div class="study-highlight">
              <strong>القاعدة الذهبية للأمان:</strong> لا تشارك أبداً كلمات المرور، أو أرقام الهوية، أو بياناتك البنكية الخاصة داخل أدوات الدردشة العامة للذكاء الاصطناعي!
            </div>
          `
        },
        questions: [
          {
            q: { en: "What should you NEVER paste into a public AI chatbot?", ar: "ما الذي يجب ألا تلصقه أبداً داخل محادثة ذكاء اصطناعي عامة؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Passwords, bank details, and private IDs", "A request for a recipe", "A math question", "A study outline"], ar: ["كلمات المرور والبيانات البنكية وأرقام الهوية الخاصة", "طلب وصفة طعام", "مسألة رياضية", "مخطط مذاكرة"] },
            ans: 0
          },
          {
            q: { en: "What is a 'Deepfake'?", ar: "ما هو 'التزييف العميق' (Deepfake)؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["AI-generated synthetic video or audio that falsely mimics a real person", "A deep ocean submarine", "A secure password", "An antivirus program"], ar: ["فيديو أو صوت اصطناعي يولده الذكاء الاصطناعي لتقليد شخص حقيقي بشكل مضلل", "غواصة أعماق", "كلمة مرور آمنة", "برنامج مكافحة فيروسات"] },
            ans: 0
          },
          {
            q: { en: "How does 'Algorithmic Bias' happen?", ar: "كيف يحدث 'التحيز الخوارزمي' (Algorithmic Bias)؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["When an AI learns unfair patterns from biased training data", "When a laptop tilts sideways", "When Wi-Fi disconnects", "When fonts are too small"], ar: ["عندما يتعلم الذكاء الاصطناعي أنماطاً غير عادلة من بيانات تدريب متحيزة", "عندما يميل اللابتوب جانباً", "عند انقطاع الواي فاي", "عندما يكون الخط صغيراً"] },
            ans: 0
          },
          {
            q: { en: "Why is data privacy a major concern in the AI era?", ar: "لماذا تُعد خصوصية البيانات مصدر قلق رئيسي في عصر الذكاء الاصطناعي؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["AI models require massive data, risking exposure of personal user information if mishandled", "AI deletes all public websites", "Phones have no screens", "Data cannot be stored"], ar: ["لأن النماذج تتطلب بيانات ضخمة مما يعرض معلومات المستخدمين للخطر إذا أُسيء التعامل معها", "لأنه يحذف المواقع العامة", "الهواتف بلا شاشات", "لا يمكن تخزين البيانات"] },
            ans: 0
          },
          {
            q: { en: "How can people protect themselves against AI voice/video scams (deepfakes)?", ar: "كيف يحمي الأفراد أنفسهم من عمليات الاحتيال بالصوت أو الفيديو المزيف (Deepfakes)؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Verify urgent requests through a trusted secondary channel and check official sources", "Believe every video immediately", "Share bank PINs online", "Disable all security updates"], ar: ["التحقق من الطلبات العاجلة عبر وسيلة تواصل ثانية موثوقة ومراجعة المصادر الرسمية", "تصديق كل فيديو فوراً", "مشاركة الأرقام السرية للبنك", "تعطيل تحديثات الأمان"] },
            ans: 0
          },
          {
            q: { en: "What does 'Explainable AI (XAI)' aim to solve?", ar: "ما المشكلة التي يهدف 'الذكاء الاصطناعي القابل للتفسير' (Explainable AI) إلى حلها؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Making AI decision-making transparent and understandable to humans", "Hiding how AI works", "Making screens darker", "Speeding up games"], ar: ["جعل طريقة اتخاذ الذكاء الاصطناعي لقراراته شفافة ومفهومة للبشر", "إخفاء طريقة عمل الذكاء الاصطناعي", "تعتيم الشاشات", "تسريع الألعاب"] },
            ans: 0
          },
          {
            q: { en: "How can developers reduce bias in an AI hiring tool?", ar: "كيف يمكن للمطورين تقليل التحيز في أداة توظيف تعمل بالذكاء الاصطناعي؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Audit training datasets for fairness and test outcomes across diverse groups", "Use data from only one candidate", "Hide all test results", "Remove human review"], ar: ["مراجعة بيانات التدريب لضمان العدالة واختبار النتائج عبر فئات متنوعة", "استخدام بيانات مرشح واحد فقط", "إخفاء النتائج", "إلغاء المراجعة البشرية"] },
            ans: 0
          },
          {
            q: { en: "What is a 'Prompt Injection' attack in AI security?", ar: "ما هو هجوم 'حقن الأوامر' (Prompt Injection) في أمن الذكاء الاصطناعي؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Tricking an AI model with hidden malicious instructions to bypass safety rules", "Upgrading RAM", "Cleaning a keyboard", "Charging a phone"], ar: ["خداع نموذج الذكاء الاصطناعي بتعليمات خفية خبيثة لتجاوز قواعد الأمان", "ترقية الذاكرة العشوائية", "تنظيف لوحة المفاتيح", "شحن الهاتف"] },
            ans: 0
          },
          {
            q: { en: "Why do organizations establish 'AI Governance & Ethics Boards'?", ar: "لماذا تنشئ المؤسسات 'مجالس حوكمة وأخلاقيات الذكاء الاصطناعي'؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["To ensure AI systems comply with laws, safety standards, and human rights", "To ban all computers", "To design logos", "To slow down internet speeds"], ar: ["لضمان التزام أنظمة الذكاء الاصطناعي بالقوانين ومعايير السلامة وحقوق الإنسان", "لحظر جميع الحواسيب", "لتصميم الشعارات", "لإبطاء سرعة الإنترنت"] },
            ans: 0
          },
          {
            q: { en: "Which practice best protects personal privacy when using online AI tools?", ar: "أي ممارسة تحمي الخصوصية الشخصية بأفضل شكل عند استخدام أدوات الذكاء الاصطناعي؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Anonymizing sensitive details and reviewing platform data-privacy settings", "Uploading private medical records publicly", "Sharing account logins", "Ignoring privacy policies"], ar: ["إخفاء الهوية والبيانات الحساسة ومراجعة إعدادات خصوصية البيانات في المنصة", "رفع السجلات الطبية علناً", "مشاركة بيانات الدخول", "تجاهل سياسات الخصوصية"] },
            ans: 0
          }
        ]
      },
      {
        id: 15,
        title: { en: "15. Future of AI & Career Opportunities", ar: "15. مستقبل الذكاء الاصطناعي وفرص العمل" },
        subtitle: { en: "Future Careers & Human-AI Collaboration", ar: "وظائف المستقبل والتكامل بين الإنسان والذكاء الاصطناعي" },
        icon: "🚀",
        content: {
          en: `
            <p>AI will not simply eliminate jobs—it will <strong>transform almost every career</strong> and create millions of brand-new opportunities for people who know how to work alongside AI.</p>
            <h4>Emerging Careers & Future-Proof Skills:</h4>
            <ul>
              <li><strong>New AI Roles:</strong> AI Engineer, Data Scientist, Prompt Engineer, AI Ethics Specialist, and AI Product Designer.</li>
              <li><strong>AI-Augmented Careers:</strong> Doctors, teachers, marketers, developers, and designers who use AI tools will outperform those who don't.</li>
              <li><strong>Essential Human Skills:</strong> Critical thinking, creativity, emotional intelligence, adaptability, and lifelong learning.</li>
            </ul>
            <div class="study-highlight">
              <strong>Your Advantage:</strong> By completing this 15-lesson course, you have taken the first step toward shaping the future rather than just watching it happen!
            </div>
          `,
          ar: `
            <p>لن يلغي الذكاء الاصطناعي الوظائف ببساطة—بل <strong>سيُحدث تحولاً في كل مهنة تقريباً</strong> ويخلق ملايين الفرص الجديدة للأشخاص الذين يتقنون العمل جنباً إلى جنب مع الذكاء الاصطناعي.</p>
            <h4>وظائف صاعدة ومهارات المستقبل:</h4>
            <ul>
              <li><strong>وظائف الذكاء الاصطناعي الجديدة:</strong> مهندس ذكاء اصطناعي، عالم بيانات، مهندس أوامر (Prompt Engineer)، أخصائي أخلاقيات AI، ومصمم منتجات ذكية.</li>
              <li><strong>مهن معززة بالذكاء الاصطناعي:</strong> الأطباء والمعلمون والمسوقون والمبرمجون والمصممون الذين يستخدمون أدوات AI سيتفوقون على من لا يستخدمها.</li>
              <li><strong>مهارات بشرية لا غنى عنها:</strong> التفكير النقدي، الإبداع، الذكاء العاطفي، المرونة، والتعلم مدى الحياة.</li>
            </ul>
            <div class="study-highlight">
              <strong>ميزتك التنافسية:</strong> بإتمامك لهذا الكورس المكون من 15 درساً، تكونين قد خطوتِ الخطوة الأولى نحو صناعة المستقبل بدلاً من الاكتفاء بمشاهدته!
            </div>
          `
        },
        questions: [
          {
            q: { en: "How will AI most likely impact the future job market?", ar: "كيف سيؤثر الذكاء الاصطناعي على سوق العمل المستقبلي على الأرجح؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Transform existing roles and create new AI-focused careers", "Eliminate all human creativity", "End all education", "Return society to paper mail"], ar: ["تطوير الوظائف الحالية وخلق مهن جديدة متخصصة في الذكاء الاصطناعي", "القضاء على الإبداع البشري", "إنهاء التعليم", "العودة للبريد الورقي"] },
            ans: 0
          },
          {
            q: { en: "Which is a fast-growing career role in the AI industry?", ar: "أي من هذه الوظائف يُعد دوراً مهنياً سريع النمو في مجال الذكاء الاصطناعي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["AI Engineer & Data Scientist", "Typewriter Repairer", "Telegraph Operator", "VHS Tape Rewinder"], ar: ["مهندس ذكاء اصطناعي وعالم بيانات", "مصلح آلات كاتبة", "عامل تلغراف", "مُعيد أشرطة الفيديو القديمة"] },
            ans: 0
          },
          {
            q: { en: "Which human skill remains irreplaceable in an AI-driven workplace?", ar: "أي مهارة بشرية تظل لا غنى عنها في بيئة العمل المعتمدة على الذكاء الاصطناعي؟" },
            diff: { en: "Easy", ar: "سهل" },
            options: { en: ["Critical thinking, creativity, and emotional intelligence", "Memorizing phonebooks", "Manual arithmetic only", "Ignoring teamwork"], ar: ["التفكير النقدي والإبداع والذكاء العاطفي", "حفظ أدلة الهاتف", "الحساب اليدوي فقط", "تجاهل العمل الجماعي"] },
            ans: 0
          },
          {
            q: { en: "What does the phrase 'AI won't replace you, a person using AI will' mean?", ar: "ماذا تعني مقولة 'الذكاء الاصطناعي لن يستبدلك، بل الشخص الذي يتقن استخدامه هو من سيستبدلك'؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Professionals who master AI tools gain huge productivity advantages in their fields", "AI robots are replacing humans physically", "Nobody needs to learn skills anymore", "Computers work without humans"], ar: ["المحترفون الذين يتقنون أدوات الذكاء الاصطناعي يحققون تفوقاً وإنتاجية هائلة في مجالاتهم", "الروبوتات تستبدل البشر جسدياً", "لا أحد يحتاج لتعلم مهارات بعد الآن", "الحواسيب تعمل بلا بشر"] },
            ans: 0
          },
          {
            q: { en: "What does an 'AI Ethics Specialist' focus on?", ar: "على ماذا يركز 'أخصائي أخلاقيات الذكاء الاصطناعي' (AI Ethics Specialist)؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Ensuring AI products are fair, transparent, safe, and respectful of user rights", "Repairing broken monitors", "Selling cables", "Writing video game music"], ar: ["ضمان أن تكون منتجات الذكاء الاصطناعي عادلة وشفافة وآمنة وتحترم حقوق المستخدمين", "إصلاح الشاشات", "بيع الكابلات", "تأليف موسيقى الألعاب"] },
            ans: 0
          },
          {
            q: { en: "Why is 'Lifelong Learning' essential in the age of AI?", ar: "لماذا يُعد 'التعلم مدى الحياة' ضرورياً في عصر الذكاء الاصطناعي؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Because AI tools evolve rapidly, requiring continuous curiosity and skill updates", "Because school lasts 100 years", "Because books are banned", "Because computers never change"], ar: ["لأن أدوات الذكاء الاصطناعي تتطور بسرعة، مما يتطلب فضولاً مستمراً وتحديثاً للمهارات", "لأن المدرسة تستمر 100 عام", "لأن الكتب محظورة", "لأن الحواسيب لا تتغير"] },
            ans: 0
          },
          {
            q: { en: "How can a graphic designer or developer use AI to boost their career?", ar: "كيف يمكن لمصمم الجرافيك أو المبرمج استخدام الذكاء الاصطناعي لتعزيز مسيرته المهنية؟" },
            diff: { en: "Medium", ar: "متوسط" },
            options: { en: ["Automating routine tasks to focus on high-level strategy and creative direction", "Stopping all design work", "Ignoring client feedback", "Deleting their portfolio"], ar: ["أتمتة المهام الروتينية للتركيز على الاستراتيجية والتوجيه الإبداعي رفيع المستوى", "التوقف عن التصميم", "تجاهل آراء العملاء", "حذف معرض أعماله"] },
            ans: 0
          },
          {
            q: { en: "What combination of skills creates the strongest future career profile?", ar: "أي مزيج من المهارات يصنع أقوى ملف مهني للمستقبل؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Domain expertise (e.g., medicine, education, business) + AI literacy + human leadership", "Only memorizing definitions", "Avoiding all technology", "Working in complete isolation"], ar: ["التخصص المهني (مثل التعليم أو الطب أو الأعمال) + إتقان أدوات AI + القيادة الإنسانية", "حفظ التعريفات فقط", "تجنب التكنولوجيا تماماً", "العمل في عزلة تامة"] },
            ans: 0
          },
          {
            q: { en: "How are AI Agents expected to evolve in the near future?", ar: "كيف يُتوقع أن تتطور 'وكلاء الذكاء الاصطناعي' (AI Agents) في المستقبل القريب؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["From simple chatbots into autonomous assistants capable of planning multi-step workflows", "Into mechanical typewriters", "They will disappear completely", "They will stop processing text"], ar: ["من مجرد روبوتات دردشة بسيطة إلى مساعدين مستقلين قادرين على تخطيط وتنفيذ مهام متعددة الخطوات", "إلى آلات كاتبة ميكانيكية", "ستختفي تماماً", "ستتوقف عن معالجة النصوص"] },
            ans: 0
          },
          {
            q: { en: "What is your biggest takeaway after completing all 15 lessons of AI Academy?", ar: "ما هي أهم خلاصة اكتسبتِها بعد إتمام جميع دروس أكاديمية الذكاء الاصطناعي الـ 15؟" },
            diff: { en: "Hard", ar: "متقدم" },
            options: { en: ["Understanding how AI works, how to use its tools safely, and how to build your future with it", "AI is pure magic with no math", "AI requires zero human guidance", "Technology never changes"], ar: ["فهم كيفية عمل الذكاء الاصطناعي، واستخدام أدواته بأمان، وبناء مستقبلك بواسطته", "الذكاء الاصطناعي سحر بلا رياضيات", "لا يحتاج أي توجيه بشري", "التكنولوجيا لا تتغير أبداً"] },
            ans: 0
          }
        ]
      }
    ]
  }
];