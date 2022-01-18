const Jumbotron = ({ direction, imgSrc, description, background }) => {
  return (
    <div
      className={`flex ${direction} mx-auto px-16 py-8 justify-between items-center ${background}`}
    >
      <div className="w-1/2 mr-4">
        <img className="w-full" src={imgSrc} alt="Jumbotron" />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">{description}</h1>
      </div>
    </div>
  );
};

export default Jumbotron;
