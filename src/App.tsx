import { Routes, Route } from 'react-router-dom';
import Main from "./components/Main/Main"
import Favourites from './components/Favourites/Favourites';
import Header from './components/Header/Header';
import { useState, useEffect, ReactElement } from 'react';

function App(): ReactElement {

  const [cards, setCards] = useState<{id: string, url: string, [key: string]: any}[]>([]);
  const [favourites, setFavourites] = useState<{id: string, url: string}[]>([]);

  useEffect(() => {
    getCatImages();
  }, []);

  const getCatImages = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=15&api_key=${process.env.API_KEY}`, {
      method: 'GET'
    })
    .then((res) => {
      if (res.ok) 
        return res.json();
      return Promise.reject(`Ошибка ${res.status}`)
    })
    .then((res) => {
      setCards([...cards, ...res]);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <Routes>
        <Route path="/" element={ 
          <Main 
            favourites={favourites} 
            setFavourites={setFavourites}
            cards={cards}
            getCatImages={getCatImages}
          /> 
          }/>
        <Route path="/favourites" element={ 
          <Favourites 
            favourites={favourites} 
            setFavourites={setFavourites}
          /> 
          }/>
        <Route path="*" element={ <Header/> }/>
      </Routes>
    </>
  )
}

export default App
