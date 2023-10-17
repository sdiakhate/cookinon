import { useState } from "react";
import "./App.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className={`${styles.appContainer} "d-flex flex-column"`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
