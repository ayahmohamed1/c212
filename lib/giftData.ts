// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `I really hope this message conveys just how happy I am that I got to know you, and how much you mean to me, Saif. ♥️
I'm so grateful for all the beautiful things we've experienced together, all the lovely moments, and all the new things I've gotten to experience with you. Every little detail and every big one, the feeling of safety I found in you, I'll never be able to forget any of it. ♥️ Every single detail has been special, and you truly are such a special person in my life. I swear. ♥️
شكرا لكل حاجة شاركتها معايا وشكرا لوجودك في يومي ولوجودك عامة ♥️
اتمني تبقي عارف اد اي انت غالي علي قلبي يا حبيبي والله ♥️
From the bottom of my heart, I wish you endless happiness. I hope the years ahead are even more beautiful than you could ever wish for, and that you achieve everything you've ever wanted, surrounded by people who love you and genuinely care about you.
اتمنالك كل خطواتك تبقي worth it مهما كانت وتبقي مرتاح ومبسوط في أيا كان ♥️
There's nothing I could do today that would fully express just how much I care about you, but I hope this little effort of mine managed to make you even a tiny bit happy ♥️ 
كل سنة وانت طيب يا حبيب عيوني ♥️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;