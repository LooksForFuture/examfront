import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";

const FAQ = () => {
  const items = [
    {
      q: "چگونه در مسابقه آنلاین شرکت کنم؟",
      a: "ابتدا یک ایمیل حاوی لینک مسابقه برای شما ارسال می‌شود. روی لینک کلیک کرده و وارد صفحه لاگین شوید. پس از ورود، وارد صفحه انتظار برای شروع آزمون می‌شوید.",
    },
    {
      q: "بعد از لاگین کردن چه اتفاقی می‌افتد؟",
      a: "بعد از لاگین، به صفحه‌ای هدایت می‌شوید که باید منتظر بمانید تا ادمین مسابقه اجازه شروع آزمون را صادر کند. تا زمانی که آزمون شروع نشود، امکان پاسخگویی به سوالات را نخواهید داشت.",
    },
    {
      q: "چه زمانی آزمون شروع می‌شود؟",
      a: "زمان شروع آزمون توسط ادمین سیستم تعیین می‌شود. شما باید در صفحه انتظار حضور داشته باشید تا به محض صدور اجازه، آزمون را آغاز کنید.",
    },
    {
      q: "چگونه به سوالات پاسخ دهم؟",
      a: "پس از شروع آزمون، سوالات به صورت تک‌تک به شما نمایش داده می‌شوند. هر سوال را باید پاسخ دهید و سپس به سوال بعدی منتقل شوید.",
    },
    {
      q: "آیا محدودیت زمانی برای پاسخ به سوالات وجود دارد؟",
      a: "بله، محدودیت زمانی برای پاسخ به هر سوال وجود دارد که در صفحه آزمون نمایش داده می‌شود. مطمئن شوید که در زمان مشخص شده به هر سوال پاسخ دهید.",
    },
    {
      q: "اگر ارتباط اینترنتی من قطع شود، چه اتفاقی می‌افتد؟",
      a: "در صورتی که ارتباط اینترنتی شما قطع شود، به محض اتصال مجدد می‌توانید ادامه آزمون را از همان جایی که قطع شده است، ادامه دهید.",
    },
    {
      q: "چگونه از پایان آزمون مطلع می‌شوم؟",
      a: "پس از پاسخ دادن به آخرین سوال، پیامی مبنی بر اتمام آزمون نمایش داده خواهد شد و می‌توانید نتیجه خود را مشاهده کنید.",
    },
    {
      q: "چه کسانی می‌توانند آزمون را مدیریت کنند؟",
      a: "فقط ادمین‌های سیستم قادر به مدیریت و شروع آزمون هستند.",
    },
  ];
  return (
    <WithoutVerticalMenuLayout>
      <div
        className="accordion mt-3 accordion-header-primary"
        id="accordionStyle1"
      >
        {items.map((item, index) => (
          <div className="accordion-item card">
            <h2 className="accordion-header">
              <button
                type="button"
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target={`#accordionStyle1-${index}`}
                aria-expanded="false"
              >
                {item.q}
              </button>
            </h2>

            <div
              key={index}
              id={`accordionStyle1-${index}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionStyle1"
            >
              <div className="accordion-body lh-2">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </WithoutVerticalMenuLayout>
  );
};

export default FAQ;
