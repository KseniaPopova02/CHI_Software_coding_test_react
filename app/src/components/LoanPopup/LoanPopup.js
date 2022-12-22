import styled from "styled-components";
import React from "react";
import { useState, useRef } from "react";

//LoansPopup style

//LoansPopupWrapper
const LoanPopupWrapper = styled.div`
  margin: 64px;
  width: 50vw;

  border-radius: 5px;
  margin: auto;
  background-color: #fff;
  z-index: 1000;
  color: #303247;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 38px;
  @media (max-width: 760px) {
    padding: 15px;
    width: 85vw;
  }
`;
//LoanPopupCross
const LoanPopupCross = styled.div`
  position: absolute;
  right: 20px;
  top: 35px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//Button
const Button = styled.button`
  background-color: transparent;
  width: 100%;
  height: 100%;
  border: none;

  :before,
  :after {
    position: absolute;
    top: 5px;
    left: 15px;
    content: " ";
    height: 22px;
    width: 2px;
    background-color: #000;
  }
  &:hover::before,
  &:hover::after {
    background-color: #1c1e2a;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;
//LoanPopupTitle
const LoanPopupTitle = styled.div`
  font-weight: 600;
  font-size: 35px;
  line-height: 42px;
  @media (max-width: 800px) {
    padding-bottom: 0;
    font-size: 27px;
    p {
      padding: 0;
    }
  }
`;
//LoanPopupSubtitle
const LoanPopupSubtitle = styled.div`
  padding-bottom: 10px;
  @media (max-width: 800px) {
    padding-bottom: 0;
  }
  @media (max-width: 497px) {
    font-size: 27px;
  }
`;
//LoanPopupInfo
const LoanPopupInfo = styled.div`
  p {
    padding-bottom: 8px;
  }
`;
//LoanInvestments
const LoanInvestments = styled.div`
  margin-top: 64px;
  @media (max-width: 800px) {
    margin-top: 0;
  }
`;
//LoanInvestmentsSubtitle
const LoanInvestmentsSubtitle = styled.div`
  font-size: 30px;
  line-height: 36px;
  padding-bottom: 30px;
  font-weight: 600;
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;
//LoanInvestmentForm
const LoanInvestmentForm = styled.form`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;

//LoanInvestmentInput
const LoanInvestmentInput = styled.input`
  width: 100%;
  padding: 16px 32px;
  border: 1px solid rgba(48, 50, 71, 0.1);
  border-radius: 5px;
  text-align: left;
  padding-left: 32px;
  font-size: 22px;
  text-align: right;
  @media (max-width: 1040px) {
    margin-bottom: 10px;
    padding: 10px 20px;
  }
`;

const LoansBtn = styled.button`
  padding: 16px 32px;
  border-radius: 5px;
  text-transform: uppercase;
  background-color: #f6e308;
  border: none;
  font-size: 20px;
  font-weight: 500;
  margin-left: 35px;
  &:hover {
    background-color: #e5d736;
  }
  @media (max-width: 1040px) {
    margin: 0;
  }

  @media (max-width: 590px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;

function LoanPopup(props) {
  // ref
  const value = useRef("");

  //styling
  const LoanPopup = styled.div`
    display: ${props.show ? "block" : "none"};
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: rgba(26, 26, 26, 0.4);
    }
  `;

  const timeRemainingNum = Math.ceil(Number(props.loan.term_remaining) / 86400);
  const timeRemaining = `${timeRemainingNum} days`;

  return (
    <LoanPopup>
      <LoanPopupWrapper>
        <LoanPopupCross>
          <Button
            href="#"
            onClick={() => {
              props.setShowPopup(false);
            }}
          ></Button>
        </LoanPopupCross>
        <div>
          <LoanPopupTitle>
            <p>Invest in Loan</p>
          </LoanPopupTitle>
          <LoanPopupSubtitle>
            <p>Loan title you’ve clicked:</p>
            <p>{props.loan.title}</p>
          </LoanPopupSubtitle>
          <LoanPopupInfo>
            <p>Amount available: {props.loan.available}$</p>
            <p>Loan ends in: {timeRemaining}</p>
          </LoanPopupInfo>
        </div>
        <LoanInvestments>
          <LoanInvestmentsSubtitle>Investment amount</LoanInvestmentsSubtitle>
          <LoanInvestmentForm
            onSubmit={(e) => {
              e.preventDefault();
              props.changeInvestedValue(props.loan.id, value.current);
              props.setShowPopup(false);
            }}
          >
            <LoanInvestmentInput
              onInput={(event) => {
                value.current = event.target.value;
              }}
              type="number"
              placeholder="1,000"
            />
            <LoansBtn type="submit">Invest</LoansBtn>
          </LoanInvestmentForm>
        </LoanInvestments>
      </LoanPopupWrapper>
    </LoanPopup>
  );
}

export default LoanPopup;
