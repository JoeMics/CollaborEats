const Form = ({ handleSubmit, input, setInput }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section className="w-5/6 mx-auto mb-6 dark:text-neutral-200">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-32 px-4 py-3 border-2 rounded-sm outline-none focus:border-primary-400 dark:bg-dark-800"
          name="comment"
          value={input}
          onChange={handleChange}
          type="text"
        ></textarea>
        <button
          className="block items-center px-4 py-2 bg-secondary-400 rounded text-white hover:bg-secondary-500 active:bg-secondary-600"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
