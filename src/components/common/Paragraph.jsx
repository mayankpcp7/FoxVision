export const Paragraph = (props) => {
  return (
    <>
      {" "}
      <p
        className={`font-poppins font-bold text-xl text-darkblue leading-normal mb-3 ${props.class}`}
      >
        {props.text}
      </p>
    </>
  );
};
