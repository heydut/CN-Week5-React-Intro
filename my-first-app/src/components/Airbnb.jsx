import "./Airbnb.css";

const Airbnb = (props) => {
  return (
    <div className="airbnb">
      <img src={props.image} alt="img" />
      <p>{props.name}</p>
    </div>
  );
};

export default Airbnb;
