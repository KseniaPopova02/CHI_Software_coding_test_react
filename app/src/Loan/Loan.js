import LoanPopup from "../LoanPopup/LoanPopup";
import { useState } from "react";
function Loan(props) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="loans">
      <div className="loans__text">
        <div className="loans__title">
          <p>{props.loan.title}</p>
        </div>
        <div className="loans__subtitle">
          <p>tranche: {props.loan.tranche}</p>
          <p>available: {props.loan.available}</p>
          <p>annualised return: {props.loan.annualised_return}</p>
          <p>ltv: {props.loan.ltv}</p>
        </div>
      </div>
      <div className="loans__btn-wrapper">
        {props.loan.invested > 0 && <p className="loans__invest">Invested</p>}

        <button
          className="loans__btn"
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        >
          invest
        </button>
      </div>
      <LoanPopup
        loan={props.loan}
        show={showPopup}
        setShowPopup={setShowPopup}
      />
    </div>
  );
}

export default Loan;
