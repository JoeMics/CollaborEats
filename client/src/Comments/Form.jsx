const Form = () => {
  return (
    <section>
      <form action="" method="post">
        <input className="border-2 focus:border-blue-400" type="text" />
        <button
          className=" inline-flex items-center px-4 py-2 bg-blue-300 rounded text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
