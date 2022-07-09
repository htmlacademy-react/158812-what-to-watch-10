import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const FILM_CARD = {
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
      title={FILM_CARD.TITLE}
      genre={FILM_CARD.GENRE}
      year={FILM_CARD.YEAR}
    />
  </React.StrictMode>,
);
