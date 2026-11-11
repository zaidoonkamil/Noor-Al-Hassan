# شركة نور الحسان — Landing Page

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Lenis

## التشغيل

```bash
npm install
npm run dev        # http://localhost:3000  (يفتح بالعربي افتراضياً — الإنكليزي على /en)
npm run build && npm start   # نسخة الإنتاج
```

## تعديل المحتوى

- كل النصوص (عربي + إنكليزي): `lib/content.ts`
- الهواتف، واتساب، الخريطة: `lib/i18n.ts` ← `company`
- الصور: `public/images/` (والشعار `public/logo.png`)
