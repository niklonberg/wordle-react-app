import styles from "./App.module.scss";
import Header from "../Header/Header";
import Guess from "../Guess/Guess";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.gameWrapper}>{/* <Game /> */}</div>
      <Guess />
    </div>
  );
}
