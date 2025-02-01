const FormInput = ({ label, name, type, defautValue }) => {
  return (
    <>
      <label
        htmlFor="UserEmail"
        className="block text-xs font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id="UserEmail"
        name={name}
        defaultValue={defautValue}
        className="mt-1 w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
      />
    </>
  );
};

export default FormInput;
