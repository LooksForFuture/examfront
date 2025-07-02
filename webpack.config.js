const path = require('path');

module.exports = {
  // دیگر تنظیمات webpack...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // یا هر مسیر دیگری که می‌خواهید
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // پسوندهای فایل‌هایی که می‌خواهید پشتیبانی شوند
  },
};
