import { UserTestResult } from "types";
import styles from "./style.module.css";
import { convertToPersianNumbers as _ } from "helper";

const UserRank = ({ testResult }: any) => {
  let score_1 = 0, score_2 = 0, score_3 = 0;

  [score_1, score_2, score_3] = [...new Set(testResult.map((i: any) => i.score))] // حذف تکرارها
    // @ts-ignore
    .sort((a, b) => b - a) // مرتب کردن به ترتیب نزولی
    .slice(0, 3) // گرفتن ۳ عدد بزرگتر
    // @ts-ignore
    .map((score: number) => score || 0); // اطمینان از اینکه اگر مقدار undefined باشد، صفر قرار گیرد

  console.log(score_1, score_2, score_3); // نمایش مقادیر جدید



  const showBadge = (result: UserTestResult) => {
    switch (result.score) {
      case score_1:
        return <img src="../../assets/img/badge/1.png" style={{width: '1.7em'}} />
      case score_2:
        return <img src="../../assets/img/badge/2.png" style={{width: '1.7em'}} />
      case score_3:
        return <img src="../../assets/img/badge/3.png" style={{width: '1.7em'}} />
      default:
        return <i className="bx bx-award h3 mb-0"></i>
    }
  }

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
            <div className="d-flex justify-content-between align-items-center">
              <div className="user-info">
                <h6 className="mb-1">{result.user?.username}</h6>
              </div>
              <div className={`add-btn d-flex flex-column align-items-center ${styles.score}`}>
                {showBadge(result)}
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
