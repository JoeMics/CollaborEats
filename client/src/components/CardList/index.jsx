import Card from './Card';
import Masonry from 'react-masonry-css';

// Must be a "grid" layout
const CardList = ({ recipes }) => {
  const breakpointColumbsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    768: 1,
  };

  return (
    <Masonry
      className="my-masonry-grid container mx-auto mb-16"
      columnClassName="my-masonry-grid_column px-2"
      breakpointCols={breakpointColumbsObj}
    >
      {recipes &&
        recipes.map((recipe) => {
          return (
            <Card
              key={recipe._id}
              title={recipe.title}
              description={recipe.description}
              photo={recipe.photo ? recipe.photo : null}
              id={recipe._id}
              ownerId={recipe.ownerId}
            />
          );
        })}
    </Masonry>
  );
};

export default CardList;
