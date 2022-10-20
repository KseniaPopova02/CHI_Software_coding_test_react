import styled from "styled-components";

function Header() {
  //HeaderContainer style
  let HeaderContainer = styled.div`
    padding: 32px 64px;
    border-bottom: 1px solid rgba(48, 50, 71, 0.1);
  `;
  //HeaderTitle style
  let HeaderTitle = styled.h1`
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 60px;
    line-height: 36px;
    @media (max-width: 590px) {
      font-size: 50px;
    }
    @media (max-width: 450px) {
      font-size: 33px;
    }
  `;

  return (
    <header>
      <HeaderContainer>
        <HeaderTitle>Current Loans</HeaderTitle>
      </HeaderContainer>
    </header>
  );
}

export default Header;
