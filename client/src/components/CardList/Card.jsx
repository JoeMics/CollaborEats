import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Card = ({ title, description, id, photo, ownerId }) => {
  return (
    <div className="basis-1/3 flex justify-center">
      <Link to={`${ROUTES.RECIPE}/${id}`}>
        <article className="flex-row p-5 my-4 w-96 rounded shadow-dark-50 dark:shadow-black shadow-md dark:shadow-lg hover:scale-105 group-hover:transition-all duration-300 dark:bg-dark-300 dark:shadow-none dark:hover:bg-dark-50 dark:text-neutral-200">
          <img
            className="h-96 w-96 rounded-lg object-cover"
            src={
              photo
                ? `http://localhost:8080/image/${photo}`
                : 'https://source.unsplash.com/random/400x400/?food'
            }
            alt="Recipe Card"
          />
          <h3 className="text-2xl underline py-2 mx-2 truncate">{title}</h3>
          <p className="text-m pb-2 mx-2 truncate">by {ownerId}</p>
          <p className="text-lg py-3 mx-2 truncate">{description}</p>
        </article>
      </Link>
    </div>
  );
};

export default Card;
