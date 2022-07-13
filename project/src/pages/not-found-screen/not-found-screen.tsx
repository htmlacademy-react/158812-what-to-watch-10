import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="user-block">
      <h1>404. Page not found</h1>
      <Link to="/" className="user-block__link">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
