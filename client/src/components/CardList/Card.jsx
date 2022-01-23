import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Card = ({ title, description, id, photo, ownerId }) => {
  return (
    <div className="basis-1/3">
      <Link to={`${ROUTES.RECIPE}/${id}`}>
        <article className="flex-row border-2 p-5 my-4 w-96 rounded shadow-slate-500 shadow-md hover:scale-105 group-hover:transition-all duration-300">
          <img
            className="h-96 w-96 rounded-lg object-cover"
            src={
              photo
                ? `http://localhost:8080/image/${photo}`
                : 'https://source.unsplash.com/random/?food'
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
