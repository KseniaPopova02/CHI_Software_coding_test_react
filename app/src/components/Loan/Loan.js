import LoanPopup from "../LoanPopup/LoanPopup";
import { useState } from "react";
import styled from "styled-components";

//Loans style
let Loans = styled.div`
  border: 1px solid rgba(48, 50, 71, 0.1);
  padding: 32px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  &:not(:first-child) {
    margin-top: 32px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
//LoansTitle style
let LoansTitle = styled.div`
  font-size: 25px;
  line-height: 30px;
  padding-bottom: 16px;
  font-weight: 600;
  @media (max-width: 590px) {
    font-size: 22px;
  }
`;
//LoansSubtitle
let LoansSubtitle = styled.div`
  @media (max-width: 590px) {
    font-size: 16px;
  }
`;
//LoansBtnWrapper style
let LoansBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
//LoansInvest style
let LoansInvest = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #51a571;
  text-align: end;
  padding-bottom: 13px;
  @media (max-width: 590px) {
    font-size: 13px;
  }
  @media (max-width: 450px) {
    text-align: start;
    padding-bottom: 0px;
  }
`;
//LoansBtn style
let LoansBtn = styled.button`
  padding: 16px 32px;
  border-radius: 5px;
  text-transform: uppercase;
  background-color: #f6e308;
  border: none;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    background-color: #e5d736;
  }
  @media (max-width: 590px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;

function Loan(props) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Loans>
      <div>
        <LoansTitle>
          <p>{props.loan.title}</p>
        </LoansTitle>
        <LoansSubtitle>
          <p>tranche: {props.loan.tranche}</p>
          <p>available: {`${props.loan.available}$`}</p>
          <p>annualised return: {props.loan.annualised_return}</p>
          <p>ltv: {props.loan.ltv}</p>
        </LoansSubtitle>
      </div>
      <LoansBtnWrapper>
        {props.loan.invested > 0 && <LoansInvest>Invested</LoansInvest>}

        <LoansBtn
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        >
          Invest
        </LoansBtn>
      </LoansBtnWrapper>
      <LoanPopup
        loan={props.loan}
        show={showPopup}
        setShowPopup={setShowPopup}
        changeInvestedValue={props.changeInvestedValue}
      />
    </Loans>
  );
}

export default Loan;
