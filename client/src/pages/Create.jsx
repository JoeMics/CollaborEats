import RecipeForm from '../components/RecipeForm';

const Create = () => {
  return (
    <>
      {/* fixed inset-0 z-50 if you want modal */}
      <div className="justify-center items-center flex fixed inset-0 z-50 overflow-x-hidden overflow-y-autooutline-none focus:outline-none">
        <div className="relative w-auto mx-auto my-8 mb-8 max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
            <RecipeForm title="Create a NEW Recipe!" />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Create;
