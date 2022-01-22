import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
const Card = ({ title, description, id }) => {
  return (
    <div className="basis-1/3">
      <article className="flex-row border-2 p-5 my-4 w-96 rounded">
        <Link to={`${ROUTES.RECIPE}/${id}`}>
          <img src="https://source.unsplash.com/random/400x400" alt="" />
        </Link>
        <h3 className="text-2xl py-2">{title}</h3>
        <p className="text-m py-2">{description}</p>
      </article>
    </div>
  );
};

export default Card;
