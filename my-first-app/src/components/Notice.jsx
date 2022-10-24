import "./Notice.css";

const Notice = (props) => {
  return (
    <div className="notice">
      <img src={props.image} alt="img" />
      <h4>{props.title}</h4>
      <p>{props.text}</p>
      <p>
        <i class="fa-regular fa-clock"></i> {props.time} | {props.tags}
      </p>
    </div>
  );
};

export default Notice;
