import "./Main.css"
import Header from "../Header/Header";
import Card from "../Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { Dispatch, ReactElement, SetStateAction } from "react";

type MainType = {
  favourites: {id: string, url: string}[],
  setFavourites: Dispatch<SetStateAction<{ id: string; url: string; }[]>>
  cards: {id: string, url: string}[],
  getCatImages: () => void,
}

function Main(props: MainType): ReactElement {

  return ( 
    <>
      <Header />
        <InfiniteScroll
          dataLength={props.cards.length}
          next={props.getCatImages}
          hasMore={true}
          loader={<p className="loader">... загружаем еще котиков ...</p>}
          className={'wrapper'}
        >
        <ul className='list'>
          {
            props.cards.map((card, inx) => 
            <Card 
              key={inx}
              id={card.id} 
              url={card.url} 
              favourites={props.favourites} 
              setFavourites={props.setFavourites}
            />)
          }
        </ul>
        </InfiniteScroll>
    </>
  );
}

export default Main;