import { useEffect, useState } from 'react';
import { fetchComments } from '../../services/api';
import Comment from './Comment';
import Form from './Form';

// DEBUGGING
const RECIPEID = '61e608607f04825b4c4cd517';
const USERID = '61e608607f04825b4c4cd517';

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function getAllComments() {
      const allComments = await fetchComments(RECIPEID);
      // for debugging
      console.log(allComments.data);
      setComments(allComments.data);
    }

    getAllComments();
  }, []);

  const commentComponents = comments.map((comment) => (
    <Comment name={comment.ownerId} content={comment.content} createdAt={comment.createdAt} />
  ));

  return (
    <section className="container mt-10 mx-auto border-4">
      <h2 className="text-4xl">Comments</h2>
      <Form userId={USERID} recipeId={RECIPEID} />
      {commentComponents}
    </section>
  );
};

export default Comments;
