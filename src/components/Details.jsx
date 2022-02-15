import parse from "html-react-parser";

const Details = ({ description }) => {
  return (
    <>
      <div className="ProseMirror">{parse(description)}</div>
    </>
  );
};

export default Details;
