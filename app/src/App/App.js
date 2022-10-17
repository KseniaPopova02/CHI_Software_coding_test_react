import Header from "../Header/Header";
import LoanWrapper from "../LoanWrapper/LoanWrapper";
import Loan1 from "../Loan1/Loan1";
import Loan2 from "../Loan2/Loan2";
import Loan3 from "../Loan3/Loan3";
import Total from "../Total/Total";
import "./style/App.css";
import data from "../data/current-loans.json";
function App() {
  console.log(data);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <LoanWrapper>
          <Loan1></Loan1>
          <Loan2></Loan2>
          <Loan3></Loan3>
        </LoanWrapper>
        <Total></Total>
      </div>
    </div>
  );
}

export default App;
