import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {FILMS_DATA} from './mocks/films';
import {reviews} from './mocks/reviews';

const AppProps = {
  filmPromo: {
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    released: 2014,
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      filmPromo={AppProps.filmPromo}
      films={FILMS_DATA}
      reviews={reviews}
    />
  </React.StrictMode>,
);
