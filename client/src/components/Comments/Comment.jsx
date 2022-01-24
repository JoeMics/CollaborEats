import TimeAgo from 'react-timeago';

const Comment = ({ name, content, createdAt }) => {
  return (
    <article className="w-5/6 my-10 mx-auto flex justify-center">
      <div className="shrink-0">
        <img src="https://i.imgur.com/2WZtOD6.png" alt="" />
      </div>
      <div className="bg-stone-300 dark:bg-dark-800 mx-3 p-5 break-words rounded-lg flex-col w-11/12">
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="h-auto my-2">{content}</p>
        <span className="text-xs">
          created <TimeAgo date={createdAt} />
        </span>
      </div>
    </article>
  );
};

export default Comment;
