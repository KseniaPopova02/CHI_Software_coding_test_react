function LoanWrapper(props) {
  return (
    <main>
      <div className="loans__wrapper">{props.children}</div>
    </main>
  );
}

export default LoanWrapper;
