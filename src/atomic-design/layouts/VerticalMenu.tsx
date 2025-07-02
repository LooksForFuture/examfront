import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuth } from "../../redux/slice/AuthSlice";
import Clickable from "atomic-design/atoms/Clickable";

interface VerticalMenuLayoutProps {
  children: ReactNode;
}

const VerticalMenuLayout: React.FC<VerticalMenuLayoutProps> = ({
  children,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isActive = (itemPath: string) => {
    return location.pathname === itemPath ? "active" : "";
  };

  const handleLogout = () => {
    dispatch(setAuth({ access: "", refresh: "" }));
    navigate("/login");
  };

  return (
    <>
      <>
        {/* <!-- Layout wrapper --> */}
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* <!-- Menu --> */}

            <aside
              id="layout-menu"
              className="layout-menu menu-vertical menu bg-menu-theme"
            >
              <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                  <span className="app-brand-logo demo">
                    <img
                      src="../../assets/img/branding/logo.png"
                      style={{ width: 30, borderRadius: 3 }}
                    />
                  </span>
                  <span className="app-brand-text demo menu-text fw-bold ms-2">
                    TAPSI
                  </span>
                </a>

                <a
                  href="javascript:void(0);"
                  className="layout-menu-toggle menu-link text-large ms-auto"
                >
                  <i className="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
                  <i className="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
                </a>
              </div>

              <div className="menu-divider mt-0"></div>

              <div className="menu-inner-shadow"></div>

              <ul className="menu-inner py-1">
                <li className={`menu-item ${isActive("/")}`}>
                  <Link to="/" className="menu-link">
                    <i className="menu-icon tf-icons bx bxs-file-doc"></i>
                    سامانه مسابقات
                  </Link>
                </li>
                <li className={`menu-item ${isActive("/shop")}`}>
                  <Link to="/shop" className="menu-link">
                    <i className="menu-icon tf-icons bx bxs-file-doc"></i>
                    فروشگاه
                  </Link>
                </li>
                <li className={`menu-item ${isActive("/document")}`}>
                  <Link to="/document" className="menu-link">
                    <i className="menu-icon tf-icons bx bxs-file-doc"></i>
                    سفارش‌ها
                  </Link>
                </li>
                <li className={`menu-item ${isActive("/document")}`}>
                  <Link to="/document" className="menu-link">
                    <i className="menu-icon tf-icons bx bxs-file-doc"></i>
                    تاریخچه فعالیت ها
                  </Link>
                </li>
                <li className={`menu-item ${isActive("/profile")}`}>
                  <Link to="/profile" className="menu-link">
                    <i className="menu-icon tf-icons bx bxs-file-doc"></i>
                    پروفایل من
                  </Link>
                </li>
                <li className={`menu-item ${isActive("/faq")}`}>
                  <Link to="/faq" className="menu-link">
                    <i className="menu-icon tf-icons bx bxs-file-doc"></i>
                    پرسش‌های متداول
                  </Link>
                </li>
                <li className={`menu-item ${isActive("/contact-us")}`}>
                  <Link to="/contact-us" className="menu-link">
                    <i className="menu-icon tf-icons bx bxs-file-doc"></i>
                    تماس با پشتیبانی
                  </Link>
                </li>
              </ul>
            </aside>
            {/* <!-- / Menu --> */}

            {/* <!-- Layout container --> */}
            <div className="layout-page">
              {/* <!-- Navbar --> */}

              <nav
                className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme"
                id="layout-navbar"
              >
                <div className="container-fluid">
                  <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a
                      className="nav-item nav-link px-0 me-xl-4"
                      href="javascript:void(0)"
                    >
                      <i className="bx bx-menu bx-sm"></i>
                    </a>
                  </div>

                  <div
                    className="navbar-nav-right d-flex align-items-center"
                    id="navbar-collapse"
                  >
                    {/* <!-- Search --> */}
                    <div className="navbar-nav align-items-center">
                      <div className="nav-item navbar-search-wrapper mb-0">
                        <a
                          className="nav-item nav-link search-toggler px-0"
                          href="javascript:void(0);"
                        >
                          <i className="bx bx-search-alt bx-sm"></i>
                          <span className="d-none d-md-inline-block text-muted">
                            Search{" "}
                            <span className="d-inline-block" dir="ltr">
                              (Ctrl+/)
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    {/* <!-- /Search --> */}

                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                      {/* <!-- Language --> */}
                      <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                        <a
                          className="nav-link dropdown-toggle hide-arrow"
                          // href="javascript:void(0);"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fi fi-us fis rounded-circle fs-4 me-1"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-language="en"
                            >
                              <i className="fi fi-us fis rounded-circle fs-4 me-1"></i>
                              <span className="align-middle">انگلیسی</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-language="fa"
                            >
                              <i className="fi fi-ir fis rounded-circle fs-4 me-1"></i>
                              <span className="align-middle">فارسی</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-language="fr"
                            >
                              <i className="fi fi-fr fis rounded-circle fs-4 me-1"></i>
                              <span className="align-middle">فرانسوی</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-language="de"
                            >
                              <i className="fi fi-de fis rounded-circle fs-4 me-1"></i>
                              <span className="align-middle">آلمانی</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-language="pt"
                            >
                              <i className="fi fi-pt fis rounded-circle fs-4 me-1"></i>
                              <span className="align-middle">پرتغالی</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* <!--/ Language --> */}

                      {/* <!-- Style Switcher --> */}
                      <li className="nav-item me-2 me-xl-0">
                        <a
                          className="nav-link style-switcher-toggle hide-arrow"
                          href="javascript:void(0);"
                        >
                          <i className="bx bx-sm bx-moon"></i>
                        </a>
                      </li>
                      {/* <!--/ Style Switcher --> */}

                      {/* <!-- Quick links  --> */}
                      <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                        <a
                          className="nav-link dropdown-toggle hide-arrow"
                          href="javascript:void(0);"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          <i className="bx bx-grid-alt bx-sm"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end py-0">
                          <div className="dropdown-menu-header border-bottom">
                            <div className="dropdown-header d-flex align-items-center py-3">
                              <h5 className="text-body mb-0 me-auto secondary-font">
                                Shortcuts
                              </h5>
                              <a
                                href="javascript:void(0)"
                                className="dropdown-shortcuts-add text-body"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Add Shortcut"
                              >
                                <i className="bx bx-sm bx-plus-circle"></i>
                              </a>
                            </div>
                          </div>
                          <div className="dropdown-shortcuts-list scrollable-container">
                            <div className="row row-bordered overflow-visible g-0">
                              <div className="dropdown-shortcuts-item col">
                                <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                  <i className="bx bx-calendar fs-4"></i>
                                </span>
                                <a
                                  href="app-calendar.html"
                                  className="stretched-link"
                                >
                                  تقویم
                                </a>
                                <small className="text-muted mb-0">
                                  قرارهای ملاقات
                                </small>
                              </div>
                              <div className="dropdown-shortcuts-item col">
                                <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                  <i className="bx bx-food-menu fs-4"></i>
                                </span>
                                <a
                                  href="app-invoice-list.html"
                                  className="stretched-link"
                                >
                                  برنامه صورتحساب
                                </a>
                                <small className="text-muted mb-0">
                                  مدیریت حساب‌ها
                                </small>
                              </div>
                            </div>
                            <div className="row row-bordered overflow-visible g-0">
                              <div className="dropdown-shortcuts-item col">
                                <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                  <i className="bx bx-user fs-4"></i>
                                </span>
                                <a
                                  href="app-user-list.html"
                                  className="stretched-link"
                                >
                                  برنامه کاربر
                                </a>
                                <small className="text-muted mb-0">
                                  مدیریت کاربران
                                </small>
                              </div>
                              <div className="dropdown-shortcuts-item col">
                                <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                  <i className="bx bx-check-shield fs-4"></i>
                                </span>
                                <a
                                  href="app-access-roles.html"
                                  className="stretched-link"
                                >
                                  مدیریت نقش‌‌ها
                                </a>
                                <small className="text-muted mb-0">
                                  مجوزها
                                </small>
                              </div>
                            </div>
                            <div className="row row-bordered overflow-visible g-0">
                              <div className="dropdown-shortcuts-item col">
                                <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                  <i className="bx bx-pie-chart-alt-2 fs-4"></i>
                                </span>
                                <a href="index.html" className="stretched-link">
                                  داشبورد
                                </a>
                                <small className="text-muted mb-0">
                                  پروفایل کاربر
                                </small>
                              </div>
                            </div>
                            <div className="row row-bordered overflow-visible g-0">
                              <div className="dropdown-shortcuts-item col">
                                <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                  <i className="bx bx-help-circle fs-4"></i>
                                </span>
                                <a
                                  href="pages-help-center-landing.html"
                                  className="stretched-link"
                                >
                                  مرکز راهنمایی
                                </a>
                                <small className="text-muted mb-0">
                                  سوالات متداول و مقالات
                                </small>
                              </div>
                              <div className="dropdown-shortcuts-item col">
                                <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                  <i className="bx bx-window-open fs-4"></i>
                                </span>
                                <a
                                  href="modal-examples.html"
                                  className="stretched-link"
                                >
                                  مودال‌ها
                                </a>
                                <small className="text-muted mb-0">
                                  پاپ‌آپ‌های کاربردی
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- Quick links --> */}

                      {/* <!-- Notification --> */}
                      <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                        <a
                          className="nav-link dropdown-toggle hide-arrow"
                          href="javascript:void(0);"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                          aria-expanded="false"
                        >
                          <i className="bx bx-bell bx-sm"></i>
                          <span className="badge bg-danger rounded-pill badge-notifications">
                            5
                          </span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end py-0">
                          <li className="dropdown-menu-header border-bottom">
                            <div className="dropdown-header d-flex align-items-center py-3">
                              <h5 className="text-body mb-0 me-auto secondary-font">
                                Notifications
                              </h5>
                              <a
                                href="javascript:void(0)"
                                className="dropdown-notifications-all text-body"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Mark all as read"
                              >
                                <i className="bx fs-4 bx-envelope-open"></i>
                              </a>
                            </div>
                          </li>
                          <li className="dropdown-notifications-list scrollable-container">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="octa"
                                        className="w-px-40 h-auto rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mb-1">
                                      تبریک می‌گوییم کلارک
                                    </h6>
                                    <p className="mb-1">
                                      شما نشان فروشنده برتر ماه را برنده شدید
                                    </p>
                                    <small className="text-muted">
                                      1 ساعت قبل
                                    </small>
                                  </div>
                                  <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-read"
                                    >
                                      <span className="badge badge-dot"></span>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-archive"
                                    >
                                      <span className="bx bx-x"></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                      <span className="avatar-initial rounded-circle bg-label-danger">
                                        اک
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mb-1">دیوید بکهام</h6>
                                    <p className="mb-1">
                                      درخواست شما را قبول کرد.
                                    </p>
                                    <small className="text-muted">
                                      12 ساعت قبل
                                    </small>
                                  </div>
                                  <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-read"
                                    >
                                      <span className="badge badge-dot"></span>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-archive"
                                    >
                                      <span className="bx bx-x"></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="octa"
                                        className="w-px-40 h-auto rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mb-1">پیام جدید</h6>
                                    <p className="mb-1">
                                      شما پیام جدید از ناتالی دارید
                                    </p>
                                    <small className="text-muted">
                                      1 ساعت قبل
                                    </small>
                                  </div>
                                  <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-read"
                                    >
                                      <span className="badge badge-dot"></span>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-archive"
                                    >
                                      <span className="bx bx-x"></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                      <span className="avatar-initial rounded-circle bg-label-success">
                                        <i className="bx bx-cart"></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mb-1">
                                      هورا! شما سفارش جدید دارید
                                    </h6>
                                    <p className="mb-1">
                                      شرکت گوگل یک سفارش جدید ثبت کرد
                                    </p>
                                    <small className="text-muted">
                                      1 روز قبل
                                    </small>
                                  </div>
                                  <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-read"
                                    >
                                      <span className="badge badge-dot"></span>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-archive"
                                    >
                                      <span className="bx bx-x"></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                      <img
                                        src="../../assets/img/avatars/9.png"
                                        alt="octa"
                                        className="w-px-40 h-auto rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mb-1">
                                      برنامه مورد تایید قرار گرفت
                                    </h6>
                                    <p className="mb-1">
                                      برنامه پروژه مدیریت شما پذیرفته شد.
                                    </p>
                                    <small className="text-muted">
                                      2 روز قبل
                                    </small>
                                  </div>
                                  <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-read"
                                    >
                                      <span className="badge badge-dot"></span>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-archive"
                                    >
                                      <span className="bx bx-x"></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                      <span className="avatar-initial rounded-circle bg-label-success">
                                        <i className="bx bx-pie-chart-alt"></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mb-1">
                                      گزارش ماهانه ایجاد شد
                                    </h6>
                                    <p className="mb-1">
                                      گزارش ماهانه ماه خرداد ایجاد شد
                                    </p>
                                    <small className="text-muted">
                                      3 روز قبل
                                    </small>
                                  </div>
                                  <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-read"
                                    >
                                      <span className="badge badge-dot"></span>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-archive"
                                    >
                                      <span className="bx bx-x"></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                      <img
                                        src="../../assets/img/avatars/5.png"
                                        alt="octa"
                                        className="w-px-40 h-auto rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mb-1">
                                      ارسال درخواست ارتباط
                                    </h6>
                                    <p className="mb-1">
                                      پیتر یک درخواست ارتباط برای شما ارسال کرد
                                    </p>
                                    <small className="text-muted">
                                      4 روز قبل
                                    </small>
                                  </div>
                                  <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-read"
                                    >
                                      <span className="badge badge-dot"></span>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-archive"
                                    >
                                      <span className="bx bx-x"></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                      <img
                                        src="../../assets/img/avatars/6.png"
                                        alt="octa"
                                        className="w-px-40 h-auto rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mb-1">پیام جدید از جین</h6>
                                    <p className="mb-1">
                                      شما پیام جدید از سمت جین دارید
                                    </p>
                                    <small className="text-muted">
                                      5 روز قبل
                                    </small>
                                  </div>
                                  <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-read"
                                    >
                                      <span className="badge badge-dot"></span>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-archive"
                                    >
                                      <span className="bx bx-x"></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                <div className="d-flex">
                                  <div className="flex-shrink-0 me-3">
                                    <div className="avatar">
                                      <span className="avatar-initial rounded-circle bg-label-warning">
                                        <i className="bx bx-error"></i>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex-grow-1">
                                    <h6 className="mb-1">
                                      میزان مصرف CPU بالاست
                                    </h6>
                                    <p className="mb-1">
                                      میران مصرف CPU در حال حاضر 88.63% است
                                    </p>
                                    <small className="text-muted">
                                      5 روز قبل
                                    </small>
                                  </div>
                                  <div className="flex-shrink-0 dropdown-notifications-actions">
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-read"
                                    >
                                      <span className="badge badge-dot"></span>
                                    </a>
                                    <a
                                      href="javascript:void(0)"
                                      className="dropdown-notifications-archive"
                                    >
                                      <span className="bx bx-x"></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown-menu-footer border-top">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item d-flex justify-content-center p-3"
                            >
                              Show all notifications
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* <!--/ Notification --> */}

                      {/* <!-- User --> */}
                      <li className="nav-item navbar-dropdown dropdown-user dropdown">
                        <a
                          className="nav-link dropdown-toggle hide-arrow"
                          href="javascript:void(0);"
                          data-bs-toggle="dropdown"
                        >
                          <div className="avatar avatar-online">
                            <img
                              src="../../assets/img/avatars/1.png"
                              alt="octa"
                              className="rounded-circle"
                            />
                          </div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a
                              className="dropdown-item"
                              href="pages-account-settings-account.html"
                            >
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar avatar-online">
                                    <img
                                      src="../../assets/img/avatars/1.png"
                                      alt="octa"
                                      className="rounded-circle"
                                    />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <span className="fw-semibold d-block">
                                    جان اسنو
                                  </span>
                                  <small>مدیر</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <div className="dropdown-divider"></div>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/my-profile"
                            >
                              <i className="bx bx-user me-2"></i>
                              <span className="align-middle">پروفایل من</span>
                            </Link>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="pages-account-settings-account.html"
                            >
                              <i className="bx bx-cog me-2"></i>
                              <span className="align-middle">تنظیمات</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="pages-account-settings-billing.html"
                            >
                              <span className="d-flex align-items-center align-middle">
                                <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                <span className="flex-grow-1 align-middle">
                                  صورتحساب
                                </span>
                                <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                                  4
                                </span>
                              </span>
                            </a>
                          </li>
                          <li>
                            <div className="dropdown-divider"></div>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="pages-help-center-landing.html"
                            >
                              <i className="bx bx-support me-2"></i>
                              <span className="align-middle">راهنمایی</span>
                            </a>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/faq">
                              <i className="bx bx-help-circle me-2"></i>
                              <span className="align-middle">
                                سوالات متداول
                              </span>
                            </Link>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="pages-pricing.html"
                            >
                              <i className="bx bx-dollar me-2"></i>
                              <span className="align-middle">قیمت گذاری</span>
                            </a>
                          </li>
                          <li>
                            <div className="dropdown-divider"></div>
                          </li>
                          <li>
                            <Clickable
                              className="dropdown-item"
                              onClick={handleLogout}
                            >
                              <i className="bx bx-power-off me-2"></i>
                              <span className="align-middle">خروج</span>
                            </Clickable>
                          </li>
                        </ul>
                      </li>
                      {/* <!--/ User --> */}
                    </ul>
                  </div>

                  {/* <!-- Search Small Screens --> */}
                  <div className="navbar-search-wrapper search-input-wrapper d-none">
                    <input
                      type="text"
                      className="form-control search-input container-fluid border-0"
                      placeholder="جستجو ..."
                      aria-label="Search..."
                    />
                    <i className="bx bx-x bx-sm search-toggler cursor-pointer"></i>
                  </div>
                </div>
              </nav>

              {/* <!-- / Navbar --> */}

              {/* <!-- Content wrapper --> */}
              <div className="content-wrapper">
                {/* <!-- Content --> */}

                <div className="container-xxl flex-grow-1 container-p-y">
                  {children}
                </div>
                {/* <!-- / Content --> */}

                {/* <!-- Footer --> */}
                <footer className="content-footer footer bg-footer-theme">
                  <div className="container-fluid d-flex flex-wrap justify-content-between py-3 flex-md-row flex-column">
                    <div>
                      <Link to="/coming-soon" className="footer-link me-4">
                        Documents
                      </Link>
                      <Link
                        to="/coming-soon"
                        className="footer-link d-none d-sm-inline-block"
                      >
                        Support
                      </Link>
                    </div>
                    <div className="mb-2 mb-md-0">
                      Developed in Tapsi Secutiry Team
                    </div>
                  </div>
                </footer>
                {/* <!-- / Footer --> */}

                <div className="content-backdrop fade"></div>
              </div>
              {/* <!-- Content wrapper --> */}
            </div>
            {/* <!-- / Layout page --> */}
          </div>

          {/* <!-- Overlay --> */}
          <div className="layout-overlay layout-menu-toggle"></div>

          {/* <!-- Drag Target Area To SlideIn Menu On Small Screens --> */}
          <div className="drag-target"></div>
        </div>
        {/* <!-- / Layout wrapper --> */}
      </>
    </>
  );
};

export default VerticalMenuLayout;
