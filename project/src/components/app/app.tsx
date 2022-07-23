import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MoviePageScreen from '../../pages/movie-page-screen/movie-page-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {FilmPromo} from '../../types/filmPromo';
import {Film} from '../../types/films';
import {Review} from '../../types/reviews';

type AppScreenProps = {
  filmPromo: FilmPromo,
  films: Film[],
  reviews: Review[]
};

function App({filmPromo, films, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen filmPromo={filmPromo} films={films} />}
        />

        <Route
          path={AppRoute.Film}
          element={<MoviePageScreen films={films} reviews={reviews} />}
        />

        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen films={films} />}
        />

        <Route
          path={AppRoute.Player}
          element={<PlayerScreen films={films} />}
        />

        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListScreen films={films} />
            </PrivateRoute>
          }
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
