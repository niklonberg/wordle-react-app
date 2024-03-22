import Header from "../Header/Header";
import styles from "./App.module.scss";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.gameWrapper}>{/* <Game /> */}</div>
    </div>
  );
}
