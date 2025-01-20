import "./Card.css";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";

type cardType = {
  url: string,
  favourites: {id: string, url: string}[],
  id: string,
  setFavourites: Dispatch<SetStateAction<{ id: string; url: string; }[]>>
}

function Card(props: cardType): ReactElement {

  const [isFav, setIsFav] = useState(!!props.favourites.find(
    (e: {id: string}):boolean => e.id === props.id
  ));

  const handleLikeBtnClick = () => {
    if (isFav) {
      props.setFavourites([...props.favourites.filter(
        (e: {id: string}):boolean => e.id !== props.id
      )]);
      setIsFav(false);
    }
    else {
      props.setFavourites([...props.favourites, {id: props.id, url: props.url}]);
      setIsFav(true);
    }
  }

  return (
    <li className="card" id={props.id}>
      <img src={props.url} alt="Котик" className="card__img" />
      <button 
        className={`card__btn ${isFav ? "card__btn_active" : ""}`} 
        onClick={handleLikeBtnClick}
      ></button>
    </li>
  );
}

export default Card