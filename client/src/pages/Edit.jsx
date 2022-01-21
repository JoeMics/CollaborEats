import EditForm from '../components/Recipe/EditForm';
import { useLocation } from 'react-router-dom';
const Create = () => {
  const location = useLocation();
  const { parentRecipe } = location.state;
  return (
    <div className="container w-3/5">
      <EditForm recipe={parentRecipe} />
    </div>
  );
};

export default Create;
