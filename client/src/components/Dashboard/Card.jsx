const Card = () => {
  return (
    <article className="border-2 p-5 mx-14 my-4 w-96 rounded">
      <img src="https://source.unsplash.com/random/400x400" alt="" />
      <h3 className="text-2xl py-2">Recipe Name</h3>
      <p className="text-m py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, beatae quis rem ratione
        voluptatibus culpa blanditiis facere unde quam eius!
      </p>
    </article>
  );
};

export default Card;
