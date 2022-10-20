import styled from "styled-components";
import Header from "../components/Header/Header";
import LoanWrapper from "../components/LoanWrapper/LoanWrapper";
import Loan from "../components/Loan/Loan";
import Total from "../components/Total/Total";
import "./style/App.css";

import Data from "../Data/current-loans.json";
function App() {
  let reduceValue = 0;
  let totalValueNum = Data.loans.reduce((previousValue, loan) => {
    return previousValue + parseFloat(loan.available.replace(",", "."));
  }, reduceValue);
  let totalValueNumRound = totalValueNum.toFixed(3);
  let totalValue = `$${totalValueNumRound}`;
  let Container = styled.div`
    padding: 32px 64px;
    @media (max-width: 497px) {
      padding: 32px 40px;
    }
  `;

  return (
    <div>
      <Header></Header>
      <Container>
        <LoanWrapper>
          {Data.loans.map((loan) => {
            return <Loan key={loan.id} loan={loan} />;
          })}
        </LoanWrapper>
        <Total totalValue={totalValue}></Total>
      </Container>
    </div>
  );
}

//put class on body (modal open/ close)
//put class on html no-scroll

export default App;
