import './global.css';
import AccountOperations from './features/accounts/AccountOperations';
import CreateCustomer from './features/customers/CreateCustomer';
import BalanceDisplay from './features/accounts/BalanceDisplay';
import Customer from './features/customers/Customer';
import { useAppSelector } from './hooks';

function App() {
  const { fullName } = useAppSelector((store) => store.customer);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
