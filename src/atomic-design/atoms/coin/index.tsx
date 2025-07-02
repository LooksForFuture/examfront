import coin from "./coin.png";
import styles from "./Coin.module.css";

interface CoinProps {
  value: 5 | 10 | 15 | 20 | 25 | 50 | 100;
  onClick?: (value: number) => void;
}

const Coin = ({ value, onClick }: CoinProps) => {
  const _onClick = () => {
    onClick?.(value);
  };

  return (
    <div className={styles.root} onClick={_onClick}>
      <div className={`${styles.badge} ${styles["v" + value.toString()]}`}>
        {value}
      </div>
      <img src={coin} className={styles.coin} />
    </div>
  );
};

export default Coin;
