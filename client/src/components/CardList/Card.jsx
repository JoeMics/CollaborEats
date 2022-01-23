import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Card = ({ title, description, id, photo, ownerId }) => {
  return (
    <div className="basis-1/3">
      <article className="flex-row border-2 p-5 my-4 w-96 rounded">
        <Link to={`${ROUTES.RECIPE}/${id}`}>
          <img
            className="h-96 w-96"
            src={
              photo
                ? `http://localhost:8080/image/${photo}`
                : 'https://source.unsplash.com/random/400x400'
            }
            alt="Recipe Card"
          />
        </Link>
        <h3 className="text-2xl py-2 truncate">{title}</h3>
        <p className="text-m py-2 truncate">{description}</p>
        <p className="text-m py-2 truncate">{ownerId}</p>
      </article>
    </div>
  );
};

export default Card;
