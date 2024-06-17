export const BlueHeading = ({ headingText, className }) => {
  return (
    <h2
      className={`${className} capitalize font-semibold font-montserrat lg:text-6xxl md:text-5xl sm:text-4xl text-3xl leading-md text-darkblue`}
    >
      {headingText}
    </h2>
  );
};

export const WhiteHeading = ({ whiteHeadingText, className }) => {
  return (
    <h2
      className={`${className} capitalize font-semibold font-montserrat lg:text-6xxl md:text-5xl sm:text-4xl text-3xl leading-md text-white`}
    >
      {whiteHeadingText}
    </h2>
  );
};
