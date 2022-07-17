import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {FILM_DATA} from './mocks/films';

const FILM_PROMO = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title={FILM_PROMO.TITLE}
      genre={FILM_PROMO.GENRE}
      year={FILM_PROMO.YEAR}
      films={FILM_DATA}
    />
  </React.StrictMode>,
);
