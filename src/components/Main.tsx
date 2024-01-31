import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Main = ({ children }: IProps) => {
  return (
    <>
      <h1>useReducer Bank Account</h1>

      <div className="container">{children}</div>
    </>
  );
};

export default Main;
