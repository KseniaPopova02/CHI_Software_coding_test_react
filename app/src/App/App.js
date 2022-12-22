import styled from "styled-components";
import Header from "../components/Header/Header";
import LoanWrapper from "../components/LoanWrapper/LoanWrapper";
import Loan from "../components/Loan/Loan";
import Total from "../components/Total/Total";
import "./style/App.css";
import Data from "../Data/current-loans.json";
import { useState } from "react";

let Container = styled.div`
  padding: 32px 64px;
  @media (max-width: 497px) {
    padding: 32px 40px;
  }
`;

function App() {
  //states

  const [loans, setLoans] = useState(Data.loans);

  //function that returns new array of loans with new invested value and available amount
  const changeInvestedValue = (id, value) => {
    //changing the invested value
    const newLoans = loans.map((loan) => {
      const loanAmoutNumber = Number(loan.available.replace(",", ""));
      if (id === loan.id) {
        if (loanAmoutNumber > value) {
          loan.invested += Number(value);
          //changing the available value
          const totalAmount = loanAmoutNumber - value;
          loan.available = `${totalAmount.toLocaleString("en-IN")}`;
        } else {
          alert("Oops! It seems that you don't have enough money!");
        }
      }

      return loan;
    });
    setLoans(newLoans);
  };

  let reduceValue = 0;
  let totalValueNum = loans.reduce((previousValue, loan) => {
    return previousValue + parseFloat(loan.available.replace(",", "."));
  }, reduceValue);
  let totalValueNumRound = totalValueNum.toFixed(3).replace(".", ",");
  let totalValue = `$${totalValueNumRound}`;

  return (
    <div>
      <Header></Header>
      <Container>
        <LoanWrapper>
          {loans.map((loan) => {
            return (
              <Loan
                key={loan.id}
                loan={loan}
                changeInvestedValue={changeInvestedValue}
              />
            );
          })}
        </LoanWrapper>
        <Total totalValue={totalValue}></Total>
      </Container>
    </div>
  );
}

export default App;
