import "./Die.css";

const Die = (props) => {
  // props
  // value /value
  // isHeld /valie
  // holdDice /function
  //   console.log(props);
  const { value, isHeld, holdDice } = props;

  const styles = {
    backgroundColor: isHeld ? "#59E391" : "#FFF",
  };
  return (
    <div className="die-face" style={styles} onClick={holdDice}>
      <h2 className="die-face--num">{value}</h2>
    </div>
  );
};

export default Die;
