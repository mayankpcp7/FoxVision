export const BlueHeading = ({ headingText, className }) => {
  return (
    <h2
      className={`${className} capitalize font-semibold font-montserrat text-6xxl leading-md text-darkblue`}
    >
      {headingText}
    </h2>
  );
};

export const WhiteHeading = ({ boldText, normalText, className }) => {
  return (
    <h2
      className={`${className} capitalize font-bold font-montserrat text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xxl xl:text-8xxl leading-sm text-white`}
    >
      {boldText} <span className="font-normal">{normalText}</span>
    </h2>
  );
};
