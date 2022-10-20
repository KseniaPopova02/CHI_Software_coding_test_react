import styled from "styled-components";
let LoansWrapper = styled.div`
  padding-bottom: 38px;
`;
function LoanWrapper(props) {
  return (
    <main>
      <LoansWrapper>{props.children}</LoansWrapper>
    </main>
  );
}

export default LoanWrapper;
