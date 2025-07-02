import styles from "./style.module.css";
import { convertToPersianNumbers as _ } from "helper";

interface TopWinnerCardProps {
  winnerType: "first" | "second" | "third";
  winner?: any;
}

const TopWinnerCard = ({ winnerType, winner }: TopWinnerCardProps) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className={`user-profile-header-banner ${styles.bg}`}>
            <img src="../../assets/img/pages/profile-banner.png" alt="Banner image" className="rounded-top" />
          </div>
          <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
              <div className="avatar avatar-md ms-4 mt-1">
                <span className="avatar-initial avatar-lg rounded-circle">{winner.user.username.slice(0, 2)}</span>
              </div>
            {/* <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
              <img
                src="../../assets/img/avatars/1.png"
                alt="user image"
                className="d-block h-auto ms-0 ms-sm-4 rounded-3 user-profile-img"
              />
            </div> */}
            <div className="flex-grow-1 mt-3 mt-sm-5">
              <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                <div className="user-profile-info">
                  <h4>{winner?.user?.username}</h4>
                  <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                    <li className="list-inline-item fw-semibold">
                      <i className="bx bx-map"></i> امتیاز {_(winner.score.toFixed(3).toString())}
                    </li>
                  </ul>
                </div>
                <img className={styles.winnerBadge} src={`/assets/img/modules/${winnerType}.png`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopWinnerCard;
