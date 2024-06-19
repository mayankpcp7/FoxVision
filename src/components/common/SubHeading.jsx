export const SubHeading = (subheading) => {
  return (
    <>
      <p
        className={`font-poppins uppercase font-bold text-sm sm:text-base md:text-lg lg:text-xl text-darkblue !leading-normal mb-0 sm:mb-3 ${subheading.className}`}
      >
        {subheading.text}
      </p>
    </>
  );
};
