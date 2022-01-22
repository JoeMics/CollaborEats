import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import validateInput from '../../helpers/validation';
import { addComment, fetchComments } from '../../services/api';
import Comment from './Comment';
import Form from './Form';

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const { userId } = useContext(AuthContext);

  // Inital render for comments
  useEffect(() => {
    async function getAllComments() {
      const allComments = await fetchComments(recipeId);
      setComments(allComments.data);
    }
    getAllComments();
  }, []);

  const handleSubmit = async (e) => {
    // TODO: add validations/sanitizations
    e.preventDefault();

    const errorMessage = validateInput(input, { characterCount: 500 });
    setError(null);

    if (errorMessage) return setError(errorMessage);

    try {
      const newComment = await addComment(userId, recipeId, input);
      setComments((prev) => [newComment.data, ...prev]);
      setInput('');
    } catch (err) {
      setError(err);
    }
  };

  const commentComponents = comments.map(({ _id, ownerId, content, createdAt }, index) => (
    <Comment key={_id || index} name={ownerId.email} content={content} createdAt={createdAt} />
  ));

  return (
    <section className="container mt-24 mx-auto">
      <h2 className="w-5/6 mx-auto text-4xl font-serif">Comments</h2>
      <Form input={input} setInput={setInput} handleSubmit={handleSubmit} />
      {error && <h4 className="w-5/6 mx-auto text-red-700 font-serif">{error}</h4>}
      {comments[0] ? (
        commentComponents
      ) : (
        <h3 className="text-xl font-serif px-5 py-2 flex justify-center">
          Be the first to comment!
        </h3>
      )}
    </section>
  );
};

export default Comments;
