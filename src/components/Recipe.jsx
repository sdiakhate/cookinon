import { useState } from "react";
import styles from "./Recipe.module.scss";
function Recipe({ image, title }) {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <div onClick={handleClick} className={`${styles.recipe}`}>
      <div className={`${styles.imgContainer}`}>
        <img src={image} alt="" />
      </div>
      <div
        className={`d-flex flex-column justify-content-center align-items-center ${styles.recipeTitle}`}
      >
        <h3 className="mb-10">{title}</h3>
        <i className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}></i>
      </div>
    </div>
  );
}
export default Recipe;
