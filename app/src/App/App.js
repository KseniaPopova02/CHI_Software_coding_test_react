import Header from "../Header/Header";
import LoanWrapper from "../LoanWrapper/LoanWrapper";
import Loan from "../Loan/Loan";
import Total from "../Total/Total";
import "./style/App.css";

import Data from "../Data/current-loans.json";
function App() {
  let reduceValue = 0;
  let totalValueNum = Data.loans.reduce((previousValue, loan) => {
    return previousValue + parseFloat(loan.available.replace(",", "."));
  }, reduceValue);
  let totalValueNumRound = totalValueNum.toFixed(3);
  let totalValue = `$${totalValueNumRound}`;

  return (
    <div>
      <Header></Header>
      <div className="container">
        <LoanWrapper>
          {Data.loans.map((loan) => {
            return <Loan key={loan.id} loan={loan}></Loan>;
          })}
        </LoanWrapper>
        <Total totalValue={totalValue}></Total>
      </div>
    </div>
  );
}

//put class on body (modal open/ close)
//put class on html no-scroll

export default App;
