const Comment = ({ name, content, createdAt }) => {
  return (
    <article className="px-5 py-2 flex justify-center">
      <div>
        <img src="https://i.imgur.com/2WZtOD6.png" alt="" />
      </div>
      <div className="bg-stone-300 mx-3 p-4 break-words rounded-lg w-4/5">
        <h4 className="text-m">{name}</h4>
        <p className="text-xs h-auto">{content}</p>
        <span className="text-xs">created on: {createdAt}</span>
      </div>
    </article>
  );
};

export default Comment;
