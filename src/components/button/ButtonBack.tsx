import { useNavigate } from 'react-router-dom';

import Button from './Button';

const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <Button
      typeStyle="back"
      onClick={(e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      Back
    </Button>
  );
};

export default ButtonBack;
