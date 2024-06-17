export const Heading = (props) => {
  return (
    <h2
      className={`${props.className} font-montserrat font-semibold text-6xxl text-darkblue !leading-md `}
    >
      {props.text}
    </h2>
  );
};
