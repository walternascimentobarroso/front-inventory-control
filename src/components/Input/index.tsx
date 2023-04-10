export default ({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
}: any) => {
  return (
    <div className="mb-4 md:mr-2 md:mb-0">
      <label
        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white dark:bg-gray-800"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="bg-white dark:bg-gray-700 border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full px-3 py-2 mb-3"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
    </div>
  );
};
