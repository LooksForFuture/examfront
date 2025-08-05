import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/slice/AuthSlice";
import useToastr from "../hooks/toastr";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { TestService } from "types";
import { setProfile } from "../redux/slice/ProfileSlice";
import { useSearchParam } from "react-use";
import { useIsDevelopment } from "hooks";
import { RootState } from "store";

const LoginPage = () => {
  const isDevelopment = useIsDevelopment()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useSearchParams()
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const { testProfileMeRead } = TestService;
  const { error: toastrError, success: toastrSuccess } = useToastr();
  const {
    mutate: getMyProfile,
    data: myProfileData,
    isPending: myProfileIsPending,
  } = useMutation({
    mutationFn: testProfileMeRead,
  });

  const { mutate, data, isPending, error, status } = useMutation({
    mutationFn: async () => {
      var formdata = new FormData();
      formdata.append("username", username as string);
      formdata.append("password", password as string);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const DOMAIN = process.env.REACT_APP_BACKEND_BASE_URL;

      // @ts-ignore
      const response = await fetch(DOMAIN + "/api/token/", requestOptions);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "ورود ناموفق");
      }

      const jsonResponse = await response.json();
      return jsonResponse;
    },
  });

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      mutate()
    }
  };

  useEffect(() => {
    if (data && !isPending) {
      dispatch(setAuth(data))
      setTimeout(() => {
        getMyProfile();
      }, 100);
    }
  }, [data, isPending]);

  useEffect(() => {
    if (myProfileData && !myProfileIsPending) {
      toastrSuccess("به سامانه آزمون خوش آمدید", `${username} عزیز!`);
      dispatch(setProfile(myProfileData));
      const next = queryParams.get('next') || '/'
      navigate(next as string);
    }
  }, [myProfileData, myProfileIsPending]);

  useEffect(() => {
    if (error && !isPending) {
      if (error?.message === 'No active account found with the given credentials') {
        toastrError('نام کاربری یا کلمه عبور اشتباه است', "ورود ناموفق");
      } else {
        toastrError(error?.message as string, "ورود ناموفق");
      }
    }
  }, [error, isPending]);

  return (
    <>
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner py-4">
            {/* <!-- Register --> */}
            <div className="card">
              <div className="card-body">
                {/* <!-- Logo --> */}
                <div className="app-brand justify-content-center">
                  <a href="index.html" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo">
                      <img
                        src="../../assets/img/branding/logo.png"
                        style={{ width: 30, borderRadius: 3 }}
                      />
                    </span>
                    <span className="app-brand-text demo h3 mb-0 fw-bold">
                      TAPSI
                    </span>
                  </a>
                </div>
                {/* <!-- /Logo --> */}
                <h4 className="mb-3 secondary-font text-center">
                  به سامانه آزمون خوش آمدید!
                </h4>
                <p className="mb-4 text-center">
                  لطفا با اطلاعات سازمانی خود وارد شده و صبر کنید تا آزمون
                  شروع شود.
                </p>

                <form
                  id="formAuthentication"
                  className="mb-3"
                  action="index.html"
                  method="POST"
                >
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      نام کاربری سازمانی
                    </label>
                    <input
                      type="text"
                      className="form-control text-start"
                      id="email"
                      name="email-username"
                      placeholder="نام کاربری سازمانی خود را وارد کنید"
                      autoFocus
                      dir="ltr"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onKeyDown={handleKeyPress}
                      data-selenium-id={isDevelopment ? 'username-field' : undefined}
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">
                        کلمه عبور سازمانی
                      </label>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control text-start"
                        name="password"
                        placeholder="رمز ایمیل سازمانی خود را وارد کنید"
                        aria-describedby="password"
                        dir="ltr"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleKeyPress}
                        data-selenium-id={isDevelopment ? 'password-field' : undefined}
                      />
                      <span className="input-group-text cursor-pointer">
                        <i className="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    {isPending ? (
                      <button className="btn btn-primary w-100" type="button">
                        <span
                          className="spinner-border me-2 __web-inspector-hide-shortcut__"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        در حال ورود ...
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary d-grid w-100"
                        onClick={() => mutate()}
                        disabled={isPending}
                        data-selenium-id={isDevelopment ? 'btn-login' : undefined}
                      >
                        ورود
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
