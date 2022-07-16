import FilmCard from '../film-card/film-card';
import {Film} from '../../types/films';

type FilmsListProps = {
  films: Film[],
}

function FilmsList ({films}: FilmsListProps): JSX.Element {

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} id={film.id} previewImage={film.previewImage} name={film.name} />
      ))}
    </div>
  );
}

export default FilmsList;
