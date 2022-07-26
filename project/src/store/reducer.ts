import {createReducer} from '@reduxjs/toolkit';
import {getFilteredGenre} from './action';
import {DEFAULT_ACTIVE_GENRE} from '../const';
import {FILMS_DATA} from '../mocks/films';

const initialState = {
  genre: DEFAULT_ACTIVE_GENRE,
  films: FILMS_DATA,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilteredGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export {reducer};
