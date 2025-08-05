import React, { ReactNode, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setAuth } from "../../redux/slice/AuthSlice";
import Clickable from "atomic-design/atoms/Clickable";
import { RootState } from "store";
import { setProfile } from "../../redux/slice/ProfileSlice";
import { Link } from "react-router-dom";
import { MyNotification, NotificationService } from "types";
import { useMutation } from "@tanstack/react-query";
import NotificationItem from "atomic-design/atoms/NotificationItem";
import { convertToPersianNumbers as _ } from "helper";
import useSystemTimeAccuracy from "hooks";

interface WithoutVerticalMenuLayoutProps {
  children: ReactNode;
}

const WithoutVerticalMenuLayout: React.FC<WithoutVerticalMenuLayoutProps> = ({ children }) => {
  const isDevelopment = process.env.REACT_APP_DEVELOPMENT === "true";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notificationRefetchInterval = useRef<any>();
  //const timeIsUpdate = useSystemTimeAccuracy();

  const { notificationNotificationList } = NotificationService;
  const { mutate: fetchNotifications, data: notificationsData } = useMutation<Array<MyNotification>>({
    mutationFn: notificationNotificationList,
  });

  const { profile } = useSelector((state: RootState) => state.profile);

  const handleLogout = () => {
    dispatch(setAuth({ access: "", refresh: "" }));
    dispatch(setProfile(null));
    navigate("/login");
  };

  // useEffect(() => {
  //   notificationRefetchInterval.current = setInterval(() => {
  //     fetchNotifications();
  //   }, 60000);

  //   return () => {
  //     clearInterval(notificationRefetchInterval.current);
  //   };
  // }, []);

  return (
    <div className="layout-wrapper layout-content-navbar layout-without-menu">
      <div className="layout-container">
        <div className="layout-page">
          <nav
            className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme navbar-elevated bg-white"
            id="layout-navbar"
          >
            <div className="container-fluid">
              <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                <div className="navbar-nav align-items-center">
                  {/* <div className="nav-item navbar-search-wrapper mb-0">
                    <a className="nav-item nav-link search-toggler px-0" href="javascript:void(0);">
                      <i className="bx bx-search-alt bx-sm"></i>
                      <span className="d-none d-md-inline-block text-muted">جستجو <span className="d-inline-block" dir="ltr">(Ctrl+/)</span></span>
                    </a>
                  </div> */}
                  <div className="d-flex align-items-center">
                    <img
                      className="me-2"
                      src="../../assets/img/branding/logo.png"
                      style={{ width: 35, height: 35, borderRadius: 3 }}
                    />
                    <Link to="/">
                      <h5 className="m-0" data-selenium-id={isDevelopment ? "site-brand" : undefined}>
                        مسابقات امنیت اطلاعات تپسی
                      </h5>
                    </Link>
                  </div>
                </div>

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-2">
                    {/* <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="bx bx-bell bx-sm"></i>
                      {notificationsData && notificationsData.length > 0 ? (
                        <span className="badge bg-danger rounded-pill badge-notifications">
                          {_(notificationsData.length.toString())}
                        </span>
                      ) : null}
                    </a> */}
                    <ul className="dropdown-menu dropdown-menu-end py-0">
                      <li className="dropdown-menu-header border-bottom">
                        <div className="dropdown-header d-flex align-items-center py-3">
                          <h5 className="text-body mb-0 me-auto secondary-font">اعلان‌ها</h5>
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
                          {notificationsData && notificationsData.length > 0 ? (
                            notificationsData?.map((notification: MyNotification, index: number) => (
                              <NotificationItem key={index} notification={notification} />
                            ))
                          ) : (
                            <p className="mt-2 text-center">شما اعلانی ندارید</p>
                          )}
                        </ul>
                      </li>
                      {/* <li className="dropdown-menu-footer border-top">
                        <a href="javascript:void(0);" className="dropdown-item d-flex justify-content-center p-3">
                          مشاهده همه اعلان‌ها
                        </a>
                      </li> */}
                    </ul>
                  </li>

                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                      <div className="avatar avatar-online">
                        <img src="../../assets/img/avatars/1.png" alt="" className="rounded-circle" />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="pages-account-settings-account.html">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <img src="../../assets/img/avatars/1.png" alt="" className="rounded-circle" />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold d-block">{profile?.username}</span>
                              <small>JOB TITLE</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          <i className="bx bx-user me-2"></i>
                          <span className="align-middle">پروفایل من</span>
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pages-help-center-landing.html">
                          <i className="bx bx-support me-2"></i>
                          <span className="align-middle">پشتیبانی</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="pages-faq.html">
                          <i className="bx bx-help-circle me-2"></i>
                          <span className="align-middle">سوالات متداول</span>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Clickable className="dropdown-item" onClick={handleLogout}>
                          <i className="bx bx-power-off me-2"></i>
                          <span className="align-middle">خروج</span>
                        </Clickable>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    {/* <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <span className="avatar-initial rounded-circle">{profile?.username.slice(0, 2)}</span>
                      </div>
                    </a> */}
                    {/* <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <div className="dropdown-item">
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <span className="avatar-initial rounded-circle">{profile?.username.slice(0, 2)}</span>
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold d-block">{profile?.username}</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          <i className="bx bx-user me-2"></i>
                          <span className="align-middle">پروفایل من</span>
                        </Link>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/contact-us">
                          <i className="bx bx-support me-2"></i>
                          <span className="align-middle">تماس با ما</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/faq">
                          <i className="bx bx-help-circle me-2"></i>
                          <span className="align-middle">سوالات متداول</span>
                        </Link>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Clickable className="dropdown-item" onClick={handleLogout}>
                          <i className="bx bx-power-off me-2"></i>
                          <span className="align-middle">خروج</span>
                        </Clickable>
                      </li>
                    </ul> */}
                  </li>
                </ul>
              </div>

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

          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y pt-4 mt-5">
              {/*timeIsUpdate === false && (
                <div className="alert alert-danger" role="alert">
                  زمان سیستم شما به روز نیست. لطفا زمان سیستم خود را به روز کنید!
                </div>
              )*/}
              {children}
            </div>

            <footer className="content-footer footer bg-white">
              <div className="container-fluid d-flex flex-wrap justify-content-between py-3 flex-md-row flex-column">
                <div className="mb-2 mb-md-0">© طراحی و توسعه یافته در تیم امنیت اطلاعات</div>
              </div>
            </footer>

            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>

      <div className="drag-target"></div>
    </div>
  );
};

export default WithoutVerticalMenuLayout;
