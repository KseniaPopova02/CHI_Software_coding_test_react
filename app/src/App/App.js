import Header from "../Header/Header";
import LoanWrapper from "../LoanWrapper/LoanWrapper";
import Loan from "../Loan/Loan";
import Total from "../Total/Total";
import "./style/App.css";
import LoanPopup from "../LoanPopup/LoanPopup";
import Data from "../Data/current-loans.json";
function App() {
  console.log(Data);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <LoanWrapper>
          {Data.loans.map((loan) => {
            return <Loan key={loan.id} loan={loan}></Loan>;
          })}
        </LoanWrapper>
        <Total></Total>
        <LoanPopup></LoanPopup>
      </div>
    </div>
  );
}

export default App;
