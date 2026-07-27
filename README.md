# Teacher Smart Hub — لوحة تحكم المعلم الذكي 🏫

<div align="center">
  <img src="https://img.shields.io/badge/Language-Arabic%20%2F%20English-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Design-Glassmorphism-9b59b6?style=for-the-badge" />
  <img src="https://img.shields.io/badge/AI-Gemini%20API-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Responsive-Mobile%20First-green?style=for-the-badge" />
</div>

---

## 📸 نظرة عامة | Overview

لوحة تحكم متكاملة وذكية للمعلم، مبنية بتقنيات الويب الحديثة مع دعم كامل للغة العربية والإنجليزية، وتصميم زجاجي فاخر (Glassmorphism).

A feature-rich, AI-powered teacher management dashboard built with vanilla HTML, CSS & JS. Supports full Arabic/English bilingual experience with a stunning Glassmorphism visual design.

---

## ✨ المميزات | Features

| الميزة | الوصف |
|--------|-------|
| 🔐 تسجيل دخول متحرك | شاشة دخول تعليمية ثلاثية الأبعاد مع جزيئات تفاعلية |
| 📊 لوحة التحكم | إحصاءات حية، خريطة حرارية للحضور، اقتراحات الذكاء الاصطناعي |
| 🌤️ الطقس المباشر | درجة حرارة الدوحة من Open-Meteo API |
| 📅 التقويم التفاعلي | إدارة الأحداث، الاختبارات، الاجتماعات |
| 👨‍🎓 إدارة الطلاب | رفع قوائم الطلاب، تتبع الحضور والدرجات |
| 🤖 مولّد الأسئلة | توليد اختبارات عشوائية غير محدودة مع رسوم SVG |
| 🔮 Gemini AI | ربط اختياري بـ Gemini API لتوليد أسئلة وصور بيانية |
| 📋 خطط الدروس | توليد خطط درس مفصّلة ومنسّقة |
| 🖥️ توليد العروض | إنشاء شرائح تقديمية تفاعلية |
| 📈 التقارير الذكية | تقارير طلابية مخصصة قابلة للطباعة |
| 🎨 تخصيص الواجهة | تبديل المظهر الداكن/الفاتح، تخصيص الألوان والتخطيط |
| 📱 Mobile-First | تصميم متجاوب 100% مع قائمة جانبية منزلقة للموبايل |

---

## 🛠️ التقنيات المستخدمة | Tech Stack

- **HTML5** — هيكل معنوي نظيف
- **CSS3** — Glassmorphism, CSS Variables, Media Queries, Animations
- **Vanilla JavaScript** — SPA Navigation, Local Storage, Canvas, APIs
- **Open-Meteo API** — بيانات الطقس المباشرة (مجانية بلا مفتاح)
- **Nager.Date API** — الإجازات الرسمية القطرية
- **Google Gemini API** — توليد أسئلة ورسوم (اختياري)
- **Google Fonts** — Cairo, Inter, IBM Plex Mono

---

## 🚀 التشغيل المحلي | Local Setup

```bash
# Clone the repository
git clone https://github.com/mumenmahbuobeh/teacher-smart-hub-dashboard.git

# Enter the folder
cd teacher-smart-hub-dashboard

# Run a local server (Python)
python -m http.server 9500

# Open in browser
# http://localhost:9500
```

### بيانات الدخول الافتراضية | Default Credentials
- **اسم المعلم:** إسماعيل محبوبة (أو أي نص)
- **الرمز السري:** أي نص غير فارغ (123456)

---

## 🌐 العرض المباشر | Live Demo

📡 [**قريباً على GitHub Pages**](https://mumenmahbuobeh.github.io/teacher-smart-hub-dashboard/)

---

## 🔑 Gemini API (اختياري)

لتفعيل توليد الأسئلة والرسومات غير المحدودة بالذكاء الاصطناعي:
1. انتقل إلى **الإعدادات** داخل التطبيق
2. أدخل مفتاح Gemini API الخاص بك
3. يتم حفظ المفتاح محلياً في `localStorage` ولا يُرسَل لأي خادم

---

## 📁 هيكل الملفات | Project Structure

```
teacher-smart-hub-dashboard/
├── index.html      # الهيكل الرئيسي للتطبيق
├── style.css       # التصميم والرسوم المتحركة (Glassmorphism)
├── app.js          # منطق التطبيق الكامل (SPA + APIs + AI)
└── README.md       # هذا الملف
```

---

## 👤 المطوّر | Developer

**مؤمن محبوبة** — [@mumenmahbuobeh](https://github.com/mumenmahbuobeh)

---

<div align="center">
صُنع بـ ❤️ لدعم المعلمين في مدارس دولة قطر 🇶🇦
</div>
