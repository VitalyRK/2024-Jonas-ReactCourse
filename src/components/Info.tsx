interface IProps {
  balance: number;
  loan: number;
}

const Info = ({ balance, loan }: IProps) => {
  return (
    <div className="info">
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
    </div>
  );
};

export default Info;
