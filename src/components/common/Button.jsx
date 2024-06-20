const Button = ({ fun, btnName, className }) => {
  return (
    <button
      onClick={fun}
      className={`${className} font-poppins sm:py-[14px] sm:px-[30px] py-3 px-7 bg-sky hover:bg-darkpurple transition-all ease-linear duration-300 rounded-[69px] text-white font-semibold sm:text-base text-sm leading-normal`}
    >
      {btnName}
    </button>
  );
};

export default Button;
