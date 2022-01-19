const Form = ({ handleSubmit, input, setInput }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 focus:border-blue-400"
          name="comment"
          value={input}
          onChange={handleChange}
          type="text"
        />
        <button
          className=" inline-flex items-center px-4 py-2 bg-blue-300 rounded text-white"
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
