const InputField = () => {
  return (
    <div>
      <div className="flex">
        <input
          type="text"
          placeholder="Add Todo"
          className="input w-full max-w-xs p-[10px] rounded-r-none bg-gray text-black text-sm"
        />
        <button className="btn rounded-l-none bg-black text-white text-sm">
          Add
        </button>
      </div>
    </div>
  );
};

export default InputField;
