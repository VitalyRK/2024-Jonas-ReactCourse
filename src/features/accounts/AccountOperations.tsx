import { useState } from 'react';
import { depositFunc, payLoan, requestLoan, withdrow } from './accountSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState<number | string>('');
  const [withdrawalAmount, setWithdrawalAmount] = useState<number | string>('');
  const [loanAmount, setLoanAmount] = useState<number | string>('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [currency, setCurrency] = useState('USD');

  const dispatch = useAppDispatch();
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurposes,
    isLoading,
  } = useAppSelector((store) => store.account);

  function handleDeposit() {
    if (typeof depositAmount !== 'number') return;

    dispatch(depositFunc(depositAmount, currency));
    setDepositAmount('');
    setCurrency('USD');
  }

  function handleWithdrawal() {
    if (typeof withdrawalAmount !== 'number') return;
    dispatch(withdrow(withdrawalAmount));
    setWithdrawalAmount('');
  }

  function handleRequestLoan() {
    if (typeof loanAmount !== 'number' || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount('');
    setLoanPurpose('');
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDepositAmount(+e.target.value)
            }
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? 'Converting...' : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>
        {currentLoan > 0 && (
          <div>
            <span>
              Pay back ${currentLoan} ({currentLoanPurposes}){' '}
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
