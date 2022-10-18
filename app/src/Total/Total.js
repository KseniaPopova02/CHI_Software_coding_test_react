function Total(props) {
  return (
    <div className="total">
      <div className="total__text">
        <p>Total amount available for investment:</p>
      </div>
      <div className="total__amound">
        <p>{props.totalValue}</p>
      </div>
    </div>
  );
}

export default Total;
