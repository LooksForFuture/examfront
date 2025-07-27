import { useState, useEffect } from 'react';

export const useIsDevelopment = () => process.env.REACT_APP_DEVELOPMENT === 'true';

export const useSystemTimeAccuracy = () => {
  const [isAccurate, setIsAccurate] = useState<boolean | null>(null); // حالت اولیه null است تا زمانی که بررسی انجام شود
  const allowedDifference: number = 1000; // حداکثر اختلاف مجاز در میلی‌ثانیه (اینجا 1 ثانیه است)
  const maxAttempts: number = 10; // حداکثر تعداد تلاش‌ها برای دریافت داده‌ها
  const retryDelay: number = 200; // فاصله زمانی بین تلاش‌ها (200 میلی‌ثانیه)

  useEffect(() => {
    async function checkSystemTime() {
      let attempts = 0;
      let success = false;

      // تابعی برای ایجاد تأخیر
      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

      while (attempts < maxAttempts && !success) {
        try {
          // دریافت زمان سیستم کاربر
          const userTime = Date.now();

          // درخواست به یک API برای دریافت زمان سرور
          const response = await fetch('https://worldtimeapi.org/api/ip');
          const data = await response.json();
          const serverTime = new Date(data.utc_datetime).getTime();

          // محاسبه تفاوت زمانی بین سیستم کاربر و سرور
          const timeDifference: number = Math.abs(userTime - serverTime);

          // اگر تفاوت کمتر از حد مجاز باشد، زمان سیستم به‌روز است
          setIsAccurate(timeDifference <= allowedDifference);
          success = true; // موفقیت در دریافت داده
        } catch (error) {
          console.error('Error checking system time:', error);
          attempts += 1;

          // در صورت بروز خطا و تلاش مجدد
          if (attempts < maxAttempts) {
            console.log(`Retrying... attempt #${attempts}`);
            await delay(retryDelay); // صبر 0.2 ثانیه قبل از تلاش مجدد
          } else {
            setIsAccurate(false); // در صورت عدم موفقیت بعد از 10 بار تلاش
          }
        }
      }
    }

    // اجرای تابع بررسی زمان سیستم
    checkSystemTime();
  }, []);

  return isAccurate; // true یا false یا null برمی‌گرداند
}

export default useSystemTimeAccuracy;
