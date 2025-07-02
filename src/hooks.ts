import { useState, useEffect } from 'react';

export const useIsDevelopment = () => process.env.REACT_APP_DEVELOPMENT === 'true';

export const useSystemTimeAccuracy = () => {
  const [isAccurate, setIsAccurate] = useState<boolean | null>(null); // حالت اولیه null است تا زمانی که بررسی انجام شود
  const allowedDifference: number = 1000; // حداکثر اختلاف مجاز در میلی‌ثانیه (اینجا 5 ثانیه است)

  useEffect(() => {
    async function checkSystemTime() {
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
      } catch (error) {
        console.error('Error checking system time:', error);
        setIsAccurate(false); // در صورت بروز خطا فرض می‌کنیم که زمان سیستم ناهماهنگ است
      }
    }

    // اجرای تابع بررسی زمان سیستم
    checkSystemTime();
  }, []);

  return isAccurate; // true یا false یا null برمی‌گرداند
}

export default useSystemTimeAccuracy;
