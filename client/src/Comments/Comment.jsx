const Comment = () => {
  return (
    <article className="px-5 py-2 flex">
      <div>
        <img src="https://source.unsplash.com/random/40x40" alt="" />
      </div>
      <div className="bg-stone-300 mx-3 p-4 rounded-lg">
        <h4 className="text-m">Jamie Li</h4>
        <p className="text-xs text-center h-auto">I think this needs a little bit less soup</p>
      </div>
    </article>
  );
};

export default Comment;
