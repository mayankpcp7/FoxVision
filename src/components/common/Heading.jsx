export const BlueHeading = ({ headingText, className }) => {
  return (
    <h2
      className={`${className} capitalize font-semibold font-montserrat xl:text-6xxl lg:text-5xxl md:text-5xl sm:text-4xl text-2xl xs:text-3xl !leading-md text-darkblue`}
      data-aos="fade-up"
    >
      {headingText}
    </h2>
  );
};

export const WhiteHeading = ({ boldText, normalText, className }) => {
  return (
    <h2
      className={`${className} capitalize font-bold font-montserrat text-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xxl xl:text-8xxl !leading-sm text-white`}
      data-aos="fade-up"
    >
      {boldText} <span className="font-normal">{normalText}</span>
    </h2>
  );
};
