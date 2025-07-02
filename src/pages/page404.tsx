import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";

const Page404 = () => {
  return (
    <WithoutVerticalMenuLayout>
      <div className="misc-wrapper">
        <h1 className="mb-2 mx-2 secondary-font">صفحه یافت نشد :(</h1>
        <p className="mb-4 mx-2">ما قادر به یافتن صفحه‌ای که به دنبال آن بودید نشدیم</p>
        <a href="/" className="btn btn-primary">
          بازگشت به خانه
        </a>
        <div className="mt-3">
          <img
            src="../../assets/img/illustrations/page-misc-error-light.png"
            alt="page-misc-error-light"
            width="500"
            className="img-fluid"
            data-app-light-img="illustrations/page-misc-error-light.png"
            data-app-dark-img="illustrations/page-misc-error-dark.png"
          />
        </div>
      </div>
    </WithoutVerticalMenuLayout>
  );
};

export default Page404;
