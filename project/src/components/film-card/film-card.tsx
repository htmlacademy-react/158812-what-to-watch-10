import {Link} from 'react-router-dom';

type FilmCardProps = {
  id: number;
  previewImage: string;
  name: string;
}

function FilmCard({id, previewImage, name}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/:${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
