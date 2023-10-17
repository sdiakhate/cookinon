import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={`p-20 ${styles.footer}`}>
      <p className="d-flex justify-content-center align-items-center">
        Copyright Cookinon ©2023 Serigne Saliou DIAKHATE{" "}
      </p>
    </footer>
  );
}

export default Footer;
