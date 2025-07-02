export function convertToPersianNumbers(input: string | undefined) {
  if (input) {
    const englishToPersianMap = {
      "0": "۰",
      "1": "۱",
      "2": "۲",
      "3": "۳",
      "4": "۴",
      "5": "۵",
      "6": "۶",
      "7": "۷",
      "8": "۸",
      "9": "۹",
    };

    // Replace each English digit with its Persian equivalent
    // @ts-ignore
    return input.replace(/\d/g, (digit) => englishToPersianMap[digit]);
  }
  return ''
}


export function diff(inputTime: string) {
  const inputDate = new Date(inputTime); // تبدیل به شیء Date
  const now = new Date(); // زمان فعلی

  // محاسبه اختلاف در میلی‌ثانیه
  const differenceInMilliseconds = inputDate.getTime() - now.getTime();

  // تبدیل میلی‌ثانیه به ثانیه، دقیقه، ساعت، روز
  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  return differenceInSeconds;
}