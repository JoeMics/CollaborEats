import Comment from './Comment';
import Form from './Form';

const Comments = () => {
  return (
    <section className="container mt-10 mx-auto border-4">
      <h2 className="text-4xl">Comments</h2>
      <Form />
      {/* comments to mapped over */}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </section>
  );
};

export default Comments;
