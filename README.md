<<<<<<< HEAD
# School Smart — Interactive Demo

A portfolio-ready interactive demo of a school management platform.

## Why this version exists

This repository is intentionally **backend-free** for public GitHub / LinkedIn presentation. It is not a static mockup: the main workflows are functional and persist changes in the browser.

### Demo architecture

- Vanilla JavaScript UI and business logic
- `localStorage` as a temporary demo data store
- Cookie-based demo session with LocalStorage fallback when opened directly as `file://`
- Mock repository/API layer in `assets/js/api.js`
- Seed data in `data/demo-data.js`
- No MySQL / PostgreSQL
- No PHP
- No server-side authentication
- No real user data
- No uploaded/private files

The frontend is structured so a future production version can replace the local `DemoAPI` implementation with a real HTTP API without redesigning the UI flows.

## Functional demo flows

- Login with four roles: Admin, Teacher, Student, Parent
- Role-based navigation
- Dashboard metrics
- Student CRUD
- Teacher CRUD
- Parent CRUD
- Class CRUD
- Grade creation/deletion
- Attendance updates
- Assignment creation/deletion
- Announcement creation/deletion
- Search and filtering
- Browser persistence after refresh
- Demo reset to seed state
- Responsive RTL interface

## Demo accounts

| Role | Username | Password |
|---|---|---|
| Admin | `admin` | `demo123` |
| Teacher | `teacher` | `demo123` |
| Student | `student` | `demo123` |
| Parent | `parent` | `demo123` |

## Run locally

No build step is required.

1. Open `index.html` directly in a browser **or** serve the folder with any static web server. Direct `file://` opening is supported; the demo uses a LocalStorage fallback if the browser blocks cookies on local files.
2. Log in using one of the demo accounts.
3. Change data, refresh the page, and verify that changes persist.
4. Use **Reset Demo** to restore the original seed data.

For GitHub Pages, publish the repository as a static site. The application does not require a backend server.

## Production path

For a paid/production edition, replace the implementation behind `DemoAPI` with a real API and database layer:

```text
Current Demo
UI → DemoAPI → LocalStorage/Cookie

Production
UI → API → Auth + Database + File Storage
```

The current demo is therefore a product showcase layer, not a replacement for production security or persistence.

## Privacy note

This public demo contains fictional sample data only. Do not add real customer/student information to this repository.
=======
# 🎓 School Smart

### سامانه مدیریت هوشمند مدرسه

> یک راهکار یکپارچه برای مدیریت دانش‌آموزان، معلمان، کلاس‌ها، نمرات، حضور و غیاب، تکالیف و ارتباطات مدرسه.

**School Smart** یک سامانه مدیریت مدرسه با رابط کاربری مدرن و فارسی است که با هدف ساده‌تر کردن مدیریت اطلاعات و فرایندهای آموزشی طراحی شده است.

این پروژه در حال حاضر به صورت یک **نسخه Demo تعاملی** ارائه شده و قابلیت توسعه به یک سامانه کامل و قابل استفاده در مدارس را دارد.

---

## 📌 چرا به چنین سامانه‌ای نیاز داریم؟

مدیریت اطلاعات یک مدرسه، با افزایش تعداد دانش‌آموزان و کلاس‌ها، به‌سرعت پیچیده می‌شود.

در بسیاری از مجموعه‌های آموزشی هنوز بخشی از اطلاعات در Excel، بخشی در پیام‌رسان‌ها، بخشی در فایل‌های مختلف و گاهی حتی به صورت دستی مدیریت می‌شود.

این روش با بزرگ‌تر شدن مجموعه مشکلاتی مثل موارد زیر ایجاد می‌کند:

* اطلاعات در چند محل مختلف پراکنده می‌شوند.
* احتمال اشتباه در ثبت یا انتقال اطلاعات افزایش پیدا می‌کند.
* پیدا کردن سوابق یک دانش‌آموز زمان‌بر می‌شود.
* گزارش‌گیری برای مدیر مدرسه دشوار می‌شود.
* پیگیری وضعیت تحصیلی دانش‌آموزان سخت‌تر می‌شود.
* ارتباط بین مدرسه، معلم، دانش‌آموز و والدین منسجم نیست.
* انجام کارهای تکراری، زمان زیادی از کارکنان مدرسه می‌گیرد.

### School Smart برای حل همین مشکل طراحی شده است.

ایده اصلی ساده است:

**اطلاعات و فرایندهای اصلی مدرسه در یک سیستم واحد قرار بگیرند.**

مدیر، معلم، دانش‌آموز و والدین هرکدام پنل و دسترسی متناسب با نیاز خودشان را داشته باشند و اطلاعات موردنیازشان را سریع و ساده دریافت کنند.

---

# 💡 School Smart چه کاری انجام می‌دهد؟

این سامانه می‌تواند بخش‌های مختلف مدیریت مدرسه را در یک محیط یکپارچه جمع کند:

```text
                    School Smart
                         │
       ┌─────────────────┼─────────────────┐
       │                 │                 │
     مدیریت            آموزش            ارتباط
       │                 │                 │
       ▼                 ▼                 ▼
   دانش‌آموزان         نمرات             اطلاعیه‌ها
   معلمان              تکالیف            والدین
   کلاس‌ها             حضور و غیاب        دانش‌آموزان
   دروس                کارنامه
```

هدف، حذف پیچیدگی‌های غیرضروری و ایجاد یک تجربه ساده برای کاربران مدرسه است.

---

# ✨ امکانات اصلی

## 👨‍💼 پنل مدیریت

* مدیریت دانش‌آموزان
* مدیریت معلمان
* مدیریت کلاس‌ها
* مدیریت دروس
* مشاهده آمار مدرسه
* مشاهده فعالیت‌های اخیر
* مدیریت اطلاعیه‌ها
* مشاهده وضعیت تحصیلی
* جستجو و فیلتر اطلاعات

## 👩‍🏫 پنل معلم

* مشاهده کلاس‌ها
* مشاهده دانش‌آموزان
* ثبت نمرات
* ثبت حضور و غیاب
* مدیریت تکالیف
* مشاهده اطلاعیه‌ها
* پیگیری وضعیت دانش‌آموزان

## 👨‍🎓 پنل دانش‌آموز

* مشاهده نمرات
* مشاهده معدل
* مشاهده وضعیت حضور و غیاب
* مشاهده تکالیف
* مشاهده اطلاعیه‌های مدرسه
* مشاهده وضعیت کلی تحصیلی

## 👨‍👩‍👧 پنل والدین

* مشاهده نمرات
* مشاهده معدل
* مشاهده حضور و غیاب
* مشاهده تکالیف
* مشاهده اطلاعیه‌ها
* پیگیری وضعیت تحصیلی فرزند

---

# 🔗 قابلیت اتصال به پروژه‌های مکمل

یکی از مزیت‌های School Smart این است که برای مدیریت مدرسه لازم نیست همه ابزارها از ابتدا داخل یک پروژه پیاده‌سازی شوند.

می‌توان قابلیت‌های تخصصی موردنیاز را از پروژه‌های مکمل دریافت و در School Smart یکپارچه کرد.

## 📅 برنامه هفتگی مدرسه

برای مدیریت و تولید **برنامه هفتگی کلاس‌ها** می‌توان School Smart را با پروژه زیر ادغام کرد:

### Persian School Scheduler

[persian-school-scheduler در GitHub](https://github.com/faezedrx/persian-school-schaduler?utm_source=chatgpt.com)

این ادغام می‌تواند امکان ایجاد و مدیریت برنامه هفتگی مدرسه را در کنار سایر اطلاعات سامانه فراهم کند.

برای مثال:

```text
School Smart
     │
     ├── دانش‌آموزان
     ├── معلمان
     ├── کلاس‌ها
     ├── دروس
     │
     └── 📅 برنامه هفتگی
             │
             ▼
     Persian School Scheduler
```

به این ترتیب برنامه هفتگی می‌تواند بر اساس کلاس، معلم، درس و سایر اطلاعات مدرسه مدیریت شود.

---

## 🎫 کارت ورود به جلسه و کارت‌های مشابه

برای تولید **کارت‌های ورود به جلسه، کارت‌های دانش‌آموزی و سایر کارت‌های قابل چاپ** نیز می‌توان از پروژه زیر در کنار School Smart استفاده کرد:

### Session Cards

[session-cards در GitHub](https://github.com/faezedrx/session-cards?utm_source=chatgpt.com)

به عنوان مثال می‌توان اطلاعات دانش‌آموزان یا آزمون‌ها را از School Smart دریافت و برای تولید کارت‌های موردنیاز به این بخش منتقل کرد.

```text
School Smart
     │
     ├── اطلاعات دانش‌آموز
     ├── اطلاعات آزمون
     ├── کلاس
     └── شماره / مشخصات
              │
              ▼
        Session Cards
              │
              ▼
       کارت قابل چاپ
```

این مدل باعث می‌شود School Smart بتواند به جای پیاده‌سازی مجدد ابزارهای تخصصی، از پروژه‌های مکمل استفاده کرده و آن‌ها را در یک سیستم واحد در اختیار مدرسه قرار دهد.

> توجه: این Repositoryها پروژه‌های مستقل هستند و استفاده از آن‌ها بسته به نیاز و نحوه پیاده‌سازی نسخه نهایی می‌تواند به صورت جداگانه انجام شود.

---

# 🔐 سیستم نقش‌ها

یکی از بخش‌های مهم School Smart، تفکیک کاربران بر اساس نقش است.

```text
                    Login
                      │
          ┌───────────┼───────────┐
          │           │           │
        Admin       Teacher     Student
                                  │
                               Parent
```

هر نقش می‌تواند رابط کاربری و امکانات متناسب با خودش را داشته باشد.

در نسخه Demo می‌توانید با حساب‌های زیر وارد شوید:

| نقش             | نام کاربری | رمز عبور  |
| --------------- | ---------- | --------- |
| 👨‍💼 مدیر      | `admin`    | `demo123` |
| 👩‍🏫 معلم      | `teacher`  | `demo123` |
| 👨‍🎓 دانش‌آموز | `student`  | `demo123` |
| 👨‍👩‍👧 والد   | `parent`   | `demo123` |

> این حساب‌ها صرفاً برای Demo هستند و برای استفاده واقعی طراحی نشده‌اند.

---

# ⚡ Demo تعاملی

نسخه موجود در این Repository فقط یک طرح گرافیکی نیست.

بخش‌هایی از سیستم به صورت تعاملی پیاده‌سازی شده‌اند و می‌توان عملیات‌هایی مانند مشاهده، ایجاد و ویرایش اطلاعات را در محیط Demo تجربه کرد.

اطلاعات Demo نیز با استفاده از `LocalStorage` در مرورگر ذخیره می‌شوند.

```text
User
  ↓
Interface
  ↓
Demo API
  ↓
LocalStorage
```

این ساختار در آینده می‌تواند با یک Backend واقعی جایگزین شود.

---

# 🛠 تکنولوژی‌ها

نسخه فعلی با تمرکز روی سادگی و قابلیت اجرا ساخته شده است:

* HTML5
* CSS3
* Vanilla JavaScript
* LocalStorage
* Responsive Design
* RTL
* رابط کاربری فارسی

در نسخه Demo نیازی به نصب Framework یا Dependency خاصی وجود ندارد.

---

# 🚀 اجرای پروژه

پروژه را Clone یا Download کنید و `index.html` را اجرا کنید.

یا برای اجرای بهتر، یک Static Server ساده اجرا کنید:

```bash
python -m http.server 8000
```

سپس وارد:

```text
http://localhost:8000
```

شوید.

---

# 🏗 نسخه کامل و Production

نسخه موجود در GitHub یک **Demo / Prototype** است.

برای استفاده واقعی در یک مدرسه، می‌توان این پروژه را به یک سیستم کامل تبدیل کرد.

### Backend و زیرساخت

* Backend اختصاصی
* Database واقعی
* REST API
* احراز هویت واقعی
* Role & Permission Management
* مدیریت Session
* Backup و Restore
* Log و Audit

### بخش آموزشی

* کارنامه
* ثبت نمرات
* حضور و غیاب
* تکالیف
* برنامه هفتگی
* تقویم آموزشی
* مدیریت کلاس‌ها
* مدیریت دروس
* اتصال به سیستم برنامه‌ریزی هفتگی

### کارت و چاپ

* کارت ورود به جلسه
* کارت دانش‌آموزی
* کارت‌های آزمون
* خروجی‌های قابل چاپ
* تولید گروهی کارت‌ها
* اتصال به سیستم `Session Cards`

### ارتباطات

* سیستم پیام‌رسانی
* اعلان‌ها
* اطلاع‌رسانی به والدین
* Notification
* اتصال به SMS

### مدیریت مدرسه

* مدیریت کامل کاربران
* گزارش‌های مدیریتی
* گزارش عملکرد دانش‌آموزان
* گزارش حضور و غیاب
* مدیریت شهریه
* امور مالی
* خروجی PDF و Excel

---

# 🔄 معماری پیشنهادی نسخه کامل

در نسخه کامل می‌توان بخش‌های مختلف را به شکل ماژولار در کنار یکدیگر قرار داد:

```text
                         School Smart
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
          ▼                   ▼                   ▼
     School Core          Education          Communication
          │                   │                   │
          │                   ├── Grades           ├── Notifications
          │                   ├── Attendance       ├── Messages
          │                   ├── Assignments      └── SMS
          │                   └── Schedule
          │                         │
          │                         ▼
          │              Persian School Scheduler
          │
          └───────────────┐
                          │
                          ▼
                    Session Cards
                          │
                          ▼
                    Printable Cards
```

این ساختار باعث می‌شود هر بخش بتواند مستقل توسعه پیدا کند و در عین حال اطلاعات موردنیاز را از هسته اصلی School Smart دریافت کند.

---

# 🔒 نکات امنیتی

این پروژه در وضعیت فعلی یک نسخه Demo است.

بنابراین:

* اطلاعات کاربران واقعی نیست.
* رمزهای ورود صرفاً برای Demo هستند.
* احراز هویت سمت سرور وجود ندارد.
* LocalStorage جایگزین Database واقعی نیست.
* اطلاعات حساس نباید در این نسخه قرار داده شوند.

برای استفاده Production باید موارد امنیتی در Backend به صورت کامل پیاده‌سازی شوند.

---

# 📦 تهیه نسخه کامل

اگر به دنبال یک **سامانه مدیریت مدرسه اختصاصی** هستید و می‌خواهید این پروژه را برای مجموعه آموزشی خودتان توسعه دهید، امکان تهیه و شخصی‌سازی نسخه کامل وجود دارد.

نسخه کامل می‌تواند متناسب با نیاز مجموعه شما توسعه داده شود؛ از طراحی Backend و Database گرفته تا اتصال ابزارهای جانبی مانند **برنامه هفتگی، کارت ورود به جلسه و سیستم‌های چاپی**.

### امکانات قابل ارائه در نسخه اختصاصی

* نصب و راه‌اندازی
* Backend و Database
* احراز هویت و سطح دسترسی
* پنل مدیریت
* پنل معلم
* پنل دانش‌آموز
* پنل والدین
* مدیریت کلاس و دروس
* نمرات و کارنامه
* حضور و غیاب
* تکالیف
* برنامه هفتگی
* کارت ورود به جلسه
* گزارش‌گیری
* خروجی PDF / Excel
* SMS و Notification
* امکانات مالی و شهریه
* شخصی‌سازی ظاهر و امکانات
* اتصال به سرویس‌ها و پروژه‌های موردنیاز مجموعه

---

# 💼 مناسب برای

School Smart می‌تواند برای مجموعه‌های مختلف آموزشی شخصی‌سازی شود:

* مدارس
* مدارس غیرانتفاعی
* مجتمع‌های آموزشی
* آموزشگاه‌ها
* مؤسسات آموزشی
* مراکز برگزاری آزمون

---

# 📞 سفارش و همکاری

اگر قصد دارید School Smart را برای مدرسه یا مجموعه آموزشی خودتان راه‌اندازی کنید، برای **دریافت نسخه کامل، مشاهده Demo، استعلام قیمت یا توسعه امکانات اختصاصی** می‌توانید با من در ارتباط باشید.

📩 **ایمیل:** `faezeh.darbeheshti@gmail.com`

> امکان شخصی‌سازی پروژه و اتصال آن به ابزارهای موردنیاز مجموعه، از جمله **Persian School Scheduler** و **Session Cards** نیز وجود دارد.

---

# ⭐ حمایت از پروژه

اگر این پروژه برایتان مفید بود، خوشحال می‌شوم با یک **Star ⭐** از آن حمایت کنید.

اگر ایده یا پیشنهادی برای توسعه پروژه دارید، می‌توانید Issue ایجاد کنید یا Pull Request ارسال کنید.

---

## 🚀 School Smart

**یک سیستم برای مدیریت مدرسه؛
از اطلاعات دانش‌آموز تا برنامه هفتگی و کارت ورود به جلسه.**

ساخته شده با ❤️ برای ساده‌تر کردن مدیریت مجموعه‌های آموزشی.
>>>>>>> 18e9cfb6341c3bf72161506a1ed6f3c119a2f773
