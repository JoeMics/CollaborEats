import Card from './Card';
// Must be a "grid" layout
const CardList = ({ recipes }) => {
  return (
    <section className="container flex flex-wrap justify-around">
      {recipes &&
        recipes.map((recipe) => (
          <Card
            key={recipe._id}
            title={recipe.title}
            description={recipe.description}
            id={recipe._id}
          />
        ))}
    </section>
  );
};

export default CardList;
