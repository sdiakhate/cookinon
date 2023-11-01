import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";
import { useState } from "react";
import { useEffect } from "react";
function Content() {
  const recipes = data;
  const [filter, setFilter] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    setFilter(value.trim().toLowerCase());
    setItems(arr);
  };
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  // const arr = items;
  // arr[0].category.icon = "../assets/images/recette.jpg";
  // arr[0].description = "Hello saliou";
  // console.log(items);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  // useEffect(() => {
  //   fetch(
  //     "https://cartes.io/api/maps/5afd4136-2c16-410c-8ea5-f4232a89d747/markers"
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);
  return (
    <div className={`container flex-fill p-20 `}>
      <h1
        className={`d-flex justify-content-center align-items-center my-30 ${styles.title}`}
      >
        Découvrez nos récentes recettes
      </h1>
      <div className={`d-flex flex-column card  ${styles.cardContainer}`}>
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
      {/* <iframe
        src="https://app.cartes.io/maps/5afd4136-2c16-410c-8ea5-f4232a89d747/embed?type=map"
        width="100%"
        height="600px"
        frameborder="0"
      ></iframe> */}
    </div>
  );
}

export default Content;
