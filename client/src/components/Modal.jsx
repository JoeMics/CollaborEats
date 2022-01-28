import RecipeForm from './RecipeForm';
import { useEffect } from 'react';
import OutsideClick from '../hooks/useClickOutside';

const Modal = ({ title, recipe, setShowModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none py-8">
        <div className="relative m-auto w-2/5 max-w-3xl">
          <OutsideClick action={setShowModal}>
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <RecipeForm recipe={recipe} title={title} setShowModal={setShowModal} />
            </div>
          </OutsideClick>
        </div>
      </div>
      <div onClick={setShowModal} className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
