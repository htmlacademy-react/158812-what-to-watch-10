import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MoviePageInListScreen from '../../pages/movie-page-in-list-screen/movie-page-in-list-screen';
//import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number
};

function App({title, genre, year}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen title={title} genre={genre} year={year} />}
        />

        <Route
          path={AppRoute.Film}
          element={<MoviePageInListScreen />}
        />

        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen />}
        />

        <Route
          path={AppRoute.Player}
          element={<PlayerScreen />}
        />

        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />

        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
