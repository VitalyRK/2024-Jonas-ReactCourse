import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

function Main({ children }: IProps) {
  return <div>{children}</div>;
}

export default Main;
