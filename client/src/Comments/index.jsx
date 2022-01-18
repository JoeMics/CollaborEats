import Comment from './Comment';
import Form from './Form';

const Comments = () => {
  return (
    <section className="container mt-10 mx-auto">
      <h2 className="text-4xl">Comments</h2>
      <Form />
      <Comment />
    </section>
  );
};

export default Comments;
