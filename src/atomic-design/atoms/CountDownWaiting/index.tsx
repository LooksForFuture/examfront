import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./style.module.css";
import { convertToPersianNumbers as _ } from "helper";
import { useIsDevelopment } from "hooks";

interface CountDownWatingProps {
  duration: number;
  onComplete?: () => void;
}

const CountDownWaiting = ({ duration, onComplete }: CountDownWatingProps) => {
  const isDevelopment = useIsDevelopment();

  return (
    <div className={`${styles.root} d-flex align-items-center justify-content-center`}>
      <div className={styles.container} data-selenium-id={isDevelopment ? "count-down-timer" : undefined}>
        <CountdownCircleTimer
          isPlaying
          duration={duration}
          colors={["#39da8a", "#fdac41", "#ff5b5c"]}
          colorsTime={[duration, duration / 2, 0]}
          size={300}
          strokeWidth={30}
          onComplete={onComplete}
        >
          {({ remainingTime }) => <span className={`${styles.number}`}>{_(remainingTime.toString())}</span>}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default CountDownWaiting;
