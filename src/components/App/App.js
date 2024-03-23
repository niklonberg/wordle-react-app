import styles from "./App.module.scss";
import Header from "../Header/Header";
import Game from "../Game/Game";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.gameWrapper}>{<Game />}</div>
    </div>
  );
}
