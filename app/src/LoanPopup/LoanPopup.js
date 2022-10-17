function LoanPopup(props) {
  console.log(props);
  return (
    <div class="loan__popup">
      <div className="loan__popup-wrapper">
        <div className="loan__popup-cross">
          <button href="#"></button>
        </div>
        <div className="loan__popup-text">
          <div className="loan__popup-title">
            <p>Invest in Loan</p>
          </div>
          <div className="loan__popup-suptitle">
            <p>Loan title you’ve clicked</p>
          </div>
          <div className="loan__popup-info">
            <p>Amount available: $12,362</p>
            <p>Loan ends in: 1 month 10 days</p>
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
