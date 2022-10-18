function LoanPopup(props) {
  const timeRemainingNum = Math.ceil(Number(props.loan.term_remaining) / 86400);
  const timeRemaining = `${timeRemainingNum} days`;

  return (
    <div className={`loan__popup ${props.show ? "loan__popup-show" : ""}`}>
      <div className="loan__popup-wrapper">
        <div className="loan__popup-cross">
          <button
            href="#"
            onClick={() => {
              props.setShowPopup(false);
            }}
          ></button>
        </div>
        <div className="loan__popup-text">
          <div className="loan__popup-title">
            <p>Invest in Loan</p>
          </div>
          <div className="loan__popup-suptitle">
            <p>Loan title you’ve clicked:</p>
            <p>{props.loan.title}</p>
          </div>
          <div className="loan__popup-info">
            <p>Amount available: {props.loan.amount}</p>
            <p>Loan ends in: {timeRemaining}</p>
          </div>
        </div>
        <div className="loan__investment">
          <div className="loan__investment-subtitle">Investment amount</div>
          <form action="#" className="loan__investment-form">
            <input
              type="text"
              className="loan__investment-input"
              placeholder="1,000"
            />
            <button className="loans__btn">Invest</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoanPopup;
