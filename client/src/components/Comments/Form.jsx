const Form = ({ handleSubmit, input, setInput }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section className="w-5/6 mx-auto mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full h-32 px-4 py-3 border-2 border-gray-300 rounded-sm outline-none focus:border-blue-400"
          name="comment"
          value={input}
          onChange={handleChange}
          type="text"
        ></textarea>
        <button
          className="block items-center px-4 py-2 bg-blue-300 rounded text-white hover:bg-blue-400 active:bg-blue-600"
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
