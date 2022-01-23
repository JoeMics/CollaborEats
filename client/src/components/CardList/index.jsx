import Card from './Card';
// Must be a "grid" layout
const CardList = ({ recipes }) => {
  return (
    <section className="container flex flex-wrap justify-around">
      {recipes &&
        recipes.map((recipe) => {
          console.log(recipe);
          return (
            <Card
              key={recipe._id}
              title={recipe.title}
              description={recipe.description}
              photo={recipe.photo ? recipe.photo : null}
              id={recipe._id}
              ownerId={recipe.ownerId.email}
            />
          );
        })}
    </section>
  );
};

export default CardList;
