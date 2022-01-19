import Comment from './Comment';
import Form from './Form';

// DEBUGGING
const RECIPEID = '61e608607f04825b4c4cd517';
const USERID = '61e608607f04825b4c4cd517';

const Comments = () => {
  return (
    <section className="container mt-10 mx-auto border-4">
      <h2 className="text-4xl">Comments</h2>
      <Form userId={USERID} recipeId={RECIPEID} />
      {/* comments to mapped over */}
      <Comment name={'Jamie'} content={'new comment'} createdAt={'yes'} />
    </section>
  );
};

export default Comments;
