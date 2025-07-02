import { User } from "types";
import styles from "./style.module.css";
import { convertToPersianNumbers as _ } from "helper";

interface WinnerCardProps {
  winnerType: "first" | "second" | "third";
  winner?: User | undefined | null;
}

const WinnerCard = ({ winnerType, winner }: any) => {
  console.log(winner);
  return (
    <div className="card mb-4">
      <div className="card-body text-center">
        {/* <div className="mx-auto mb-3">
          <img
            src="../../assets/img/avatars/12.png"
            alt="Avatar Image"
            className="rounded-circle w-px-100"
          />
        </div> */}
        <div className="d-flex align-items-center justify-content-center">
          <div className="avatar avatar-md me-2">
            <span className="avatar-initial rounded-circle">{winner.user.username.slice(0, 2)}</span>
          </div>
        </div>
        <h5 className="mb-1 card-title primary-font">{winner.user.username}</h5>
        <h5 className="mb-1 card-title primary-font">{_(winner.score.toFixed(3).toString())}</h5>
      </div>
    </div>
  );
};

export default WinnerCard;
