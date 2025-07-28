import { useQuery } from "@tanstack/react-query";
import WithoutVerticalMenuLayout from "atomic-design/layouts/WithourVerticalMenu";
import TestCard from "atomic-design/modules/TestCard";
import TestTabs from "atomic-design/organisms/TestTabs";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TestService } from "types";

const MyProfile = () => {
  const { profile } = useSelector((state: RootState) => state.profile);

  return (
    <WithoutVerticalMenuLayout>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="user-profile-header-banner">
                <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" className="rounded-top" />
              </div>
              <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                  {/* <img
                    src="../../assets/img/avatars/1.png"
                    alt="user image"
                    className="d-block h-auto ms-0 ms-sm-4 rounded-3 user-profile-img"
                  /> */}
                  <div className="avatar avatar-xl ms-4">
                    <span className="avatar-initial rounded-circle">{profile?.username.slice(0, 2)}</span>
                  </div>
                </div>
                <div className="flex-grow-1 mt-3 mt-sm-5">
                  <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                    <div className="user-profile-info">
                      <h4>{profile?.username}</h4>
                      <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                        <li className="list-inline-item fw-semibold">
                          <i className="bx bx-pen"></i> تعداد آزمون های شرکت کرده
                        </li>
                        <li className="list-inline-item fw-semibold">
                          <i className="bx bx-map"></i> جمموع امتیاز شما
                        </li>
                        <li className="list-inline-item fw-semibold">
                          <i className="bx bx-calendar-alt"></i> بهترین نتیجه شما تا کنون
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TestTabs />

      </div>
    </WithoutVerticalMenuLayout>
  );
};

export default MyProfile;
