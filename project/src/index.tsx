import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';

const FILM_DATA = {
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
      title={FILM_DATA.TITLE}
      genre={FILM_DATA.GENRE}
      year={FILM_DATA.YEAR}
      films={films}
    />
  </React.StrictMode>,
);
