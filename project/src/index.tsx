import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const FILM_CARD = {
  TITLE: 'Thor: Love and Thunder',
  GENRE: 'Adventure',
  YEAR: 2022,
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
