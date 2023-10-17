import logo from "../assets/images/logo_cookinon.jpg";
import styles from "./Header.module.scss";
function Header() {
  return (
    <header
      className={`d-flex justify-content-center align-items-center ${styles.header}`}
    >
      <div className="flex-fill">
        <img src={logo} alt="LOGO" />
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <i class="fa-solid fa-heart"></i> <span>Recettes</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
    </header>
  );
}

export default Header;
