import {Review} from '../types/reviews';

export const reviews: Review[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Kate Muir',
    },
    rating: 8.9,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one',
    date: '2022-02-23T16:00:00.000Z',
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Matthew Lickona',
    },
    rating: 7.9,
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    date: '2022-02-23T16:00:00.000Z',
  }
];
