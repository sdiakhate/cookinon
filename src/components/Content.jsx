import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";
import { useState } from "react";
function Content() {
  const recipes = data;
  const [filter, setFilter] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    setFilter(value.trim().toLowerCase());
  };
  return (
    <div className={`container flex-fill p-20`}>
      <h1 className="d-flex justify-content-center align-items-center my-30">
        Découvrez nos récentes recettes
      </h1>
      <div className={` d-flex flex-column card ${styles.cardContainer}`}>
        <div
          className={`m-20 d-flex justify-content-center align-items-center ${styles.searchBar}`}
        >
          <i className="mr-15  fa-solid fa-magnifying-glass"></i>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Recherche"
          />
        </div>
        <div className={`p-20 ${styles.grid}`}>
          {recipes
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map((r) => (
              <Recipe key={r._id} title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
