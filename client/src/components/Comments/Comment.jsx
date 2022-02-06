import TimeAgo from 'react-timeago';

const Comment = ({ name, content, createdAt, picture }) => {
  return (
    <article className="w-5/6 my-10 mx-auto flex justify-center">
      <div className="shrink-0 flex rounded-full h-20 w-20 overflow-hidden object-cover dark:bg-neutral-400">
        <img className="m-auto" src={picture} alt="" />
      </div>
      <div className="bg-stone-300 dark:bg-dark-300 dark:shadow-black dark:shadow-sm mx-3 p-5 break-words rounded-lg flex-col w-11/12">
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
