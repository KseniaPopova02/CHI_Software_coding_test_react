import styled from "styled-components";

function LoanPopup(props) {
  //LoansPopup style
  let LoanPopup = styled.div`
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
  //LoansPopupWrapper
  let LoanPopupWrapper = styled.div`
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
  let LoanPopupCross = styled.div`
    position: absolute;
    right: 20px;
    top: 0;
    width: 32px;
    height: 32px;
    opacity: 0.3;
  `;
  //Button
  let Button = styled.button`
    background-color: transparent;
    border: none;
    &:hover {
      opacity: 1;
    }
    :before,
    :after {
      position: absolute;
      left: 15px;
      content: " ";
      height: 22px;
      width: 2px;
      background-color: #303247;
    }
    :before {
      transform: rotate(45deg);
    }
    :after {
      transform: rotate(-45deg);
    }
  `;
  //LoanPopupTitle
  let LoanPopupTitle = styled.div`
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
  let LoanPopupSubtitle = styled.div`
    padding-bottom: 10px;
    @media (max-width: 800px) {
      padding-bottom: 0;
    }
    @media (max-width: 497px) {
      font-size: 27px;
    }
  `;
  //LoanPopupInfo
  let LoanPopupInfo = styled.div`
    p {
      padding-bottom: 8px;
    }
  `;
  //LoanInvestments
  let LoanInvestments = styled.div`
    margin-top: 64px;
    @media (max-width: 800px) {
      margin-top: 0;
    }
  `;
  //LoanInvestmentsSubtitle
  let LoanInvestmentsSubtitle = styled.div`
    font-size: 30px;
    line-height: 36px;
    padding-bottom: 30px;
    font-weight: 600;
    @media (max-width: 800px) {
      font-size: 25px;
    }
  `;
  //LoanInvestmentForm
  let LoanInvestmentForm = styled.form`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1040px) {
      flex-direction: column;
    }
  `;

  //LoanInvestmentInput
  let LoanInvestmentInput = styled.input`
    padding: 16px 32px;
    border: 1px solid rgba(48, 50, 71, 0.1);
    border-radius: 5px;
    text-align: left;
    padding-left: 32px;
    font-size: 22px;
    @media (max-width: 1040px) {
      margin-bottom: 10px;
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
            <p>Amount available: {props.loan.amount}</p>
            <p>Loan ends in: {timeRemaining}</p>
          </LoanPopupInfo>
        </div>
        <LoanInvestments>
          <LoanInvestmentsSubtitle>Investment amount</LoanInvestmentsSubtitle>
          <LoanInvestmentForm>
            <LoanInvestmentInput type="text" placeholder="1,000" />
            <button className="loans__btn">Invest</button>
          </LoanInvestmentForm>
        </LoanInvestments>
      </LoanPopupWrapper>
    </LoanPopup>
  );
}

export default LoanPopup;
