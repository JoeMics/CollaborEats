import RecipeForm from './RecipeForm';
import { useEffect } from 'react';
const Modal = ({ title, recipe, setShowModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'unset');
  }, []);
  return (
    <>
      <div className="justify-center items-center flex fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none py-8">
        <div className="relative m-auto w-2/5 max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <RecipeForm recipe={recipe} title={title} setShowModal={setShowModal} />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;

// overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 supports-scrollbars:pr-2 lg:max-h-96
