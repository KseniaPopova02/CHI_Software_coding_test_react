import styled from "styled-components";

function Total(props) {
  //Total
  let Total = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    @media (max-width: 590px) {
      font-size: 16px;
    }
    @media (max-width: 497px) {
      flex-direction: column;
    }
  `;
  //TotalText
  let TotalText = styled.div`
    padding-right: 10px;
  `;

  return (
    <Total>
      <TotalText>
        <p>Total amount available for investment:</p>
      </TotalText>
      <div>
        <p>{props.totalValue}</p>
      </div>
    </Total>
  );
}

export default Total;
