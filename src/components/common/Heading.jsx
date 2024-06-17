export const BlueHeading = ({ headingText, className }) => {
  return (
    <h2
      className={`${className} capitalize font-semibold font-montserrat text-6xxl leading-md text-darkblue`}
    >
      {headingText}
    </h2>
  );
};

export const WhiteHeading = ({ whiteHeadingText, className }) => {
  return (
    <h2
      className={`${className} capitalize font-semibold font-montserrat text-6xxl leading-md text-white`}
    >
      {whiteHeadingText}
    </h2>
  );
};
