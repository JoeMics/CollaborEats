import { useEffect, useState } from 'react';
import { addComment, fetchComments } from '../../services/api';
import Comment from './Comment';
import Form from './Form';

// DEBUGGING
const RECIPEID = '61e608607f04825b4c4cd517';
const USERID = '61e608607f04825b4c4cd517';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  // Inital render for comments
  useEffect(() => {
    async function getAllComments() {
      const allComments = await fetchComments(RECIPEID);
      setComments(allComments.data);
    }
    getAllComments();
  }, []);

  const handleSubmit = async (e) => {
    // TODO: add validations/sanitizations
    e.preventDefault();

    try {
      await addComment(USERID, RECIPEID, input);
    } catch (error) {
      console.log(error);
    }

    const now = new Date().toString();
    setComments((prev) => [...prev, { ownerId: USERID, content: input, createdAt: now }]);
    setInput('');
  };

  const commentComponents = comments.map(({ _id, ownerId, content, createdAt }, index) => (
    <Comment key={_id || index} name={ownerId} content={content} createdAt={createdAt} />
  ));

  return (
    <section className="container mt-10 mx-auto border-4">
      <h2 className="text-4xl">Comments</h2>
      <Form input={input} setInput={setInput} handleSubmit={handleSubmit} />
      {commentComponents}
    </section>
  );
};

export default Comments;
