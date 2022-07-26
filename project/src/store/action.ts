import {createAction} from '@reduxjs/toolkit';

export const getFilteredGenre = createAction('films/getFilteredGenre', (value) => ({
  payload: value,
}));
