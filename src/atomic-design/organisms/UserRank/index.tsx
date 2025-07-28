import { UserTestResult } from "types";
import styles from "./style.module.css";
import { convertToPersianNumbers as _ } from "helper";

const UserRank = ({ testResult }: any) => {
  return (
    <div className="list-group">
      {testResult?.map((result: UserTestResult, index: number) => (
        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
          {/* <img src="../../assets/img/avatars/2.png" alt="User Image" className="rounded-circle me-3 w-px-50" /> */}
          <div className="avatar avatar-md me-2">
            <span className="avatar-initial rounded-circle">
              {result.user?.username.slice(0, 2)}
            </span>
          </div>
          <div className="w-100">
            <div className="d-flex justify-content-between">
              <div className="user-info">
                <h6 className="mb-1">{result.user?.username}</h6>
              </div>
              <div className={`add-btn d-flex flex-column align-items-center ${styles.score}`}>
                <i className="bx bx-award h3 mb-0"></i>
                <span>
                  {_(result.score?.toString())}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserRank;
