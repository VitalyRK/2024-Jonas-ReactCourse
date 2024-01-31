import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Footer = ({ children }: IProps) => {
  return <footer>{children}</footer>;
};

export default Footer;
