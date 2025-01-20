import "./Favourites.css"
import Header from "../Header/Header";
import Card from "../Card/Card";
import { Dispatch, ReactElement, SetStateAction } from "react";

type FavouritesType = {
  favourites: {id: string, url: string}[],
  setFavourites: Dispatch<SetStateAction<{ id: string; url: string; }[]>>
}

function Favourites({favourites, setFavourites}: FavouritesType): ReactElement {

  return ( 
    <>
      <Header />
      <ul className="list">
        {
          favourites.map(fav  => <Card 
            key={fav.id}
            url={fav.url} 
            favourites={favourites}
            id={fav.id} 
            setFavourites={setFavourites}
            />)
        }
      </ul>
    </>
  );
}

export default Favourites;
