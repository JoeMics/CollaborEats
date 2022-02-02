import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Card = ({ title, description, id, photo, ownerId }) => {
  return (
    <Link to={`${ROUTES.RECIPE}/${id}`}>
      <article className="p-5 my-4 rounded shadow-dark-50 dark:shadow-black shadow-md dark:shadow-lg hover:scale-105 group-hover:transition-all duration-300 dark:bg-dark-300 dark:hover:bg-dark-50 dark:text-neutral-200">
        <img
          className=" rounded-lg object-cover"
          src={photo ? `http://localhost:8080/image/${photo}` : '/demo/default_image.jpg'}
          alt="Recipe Card"
        />
        <h3 className="text-2xl underline py-2 mx-2 truncate">{title}</h3>
        <p className="text-m pb-2 mx-2 truncate">by {ownerId}</p>
        <p className="text-lg py-3 mx-2 truncate">{description}</p>
      </article>
    </Link>
  );
};

export default Card;
