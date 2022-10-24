import "./Netflix.css";

const Netflix = (props) => {
  return (
    <div className="netflix">
      <img src={props.image} alt="img" />
    </div>
  );
};

export default Netflix;
