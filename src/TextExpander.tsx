import { useState } from 'react';

interface IProps {
  collapsedNumWords?: number;
  children: string;
  explaned: boolean;
  border?: boolean;
}

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  explaned,
  border = false,
}: IProps) => {
  const [isShow, setIsShow] = useState(explaned);
  const displayText = isShow
    ? children
    : children.split(' ').slice(0, collapsedNumWords).join(' ') + '...';

  const styleBorder = {
    border: '1px solid #000',
  };

  const styleBtn = {
    marginLeft: '10px',
    fontSize: '15px',
    color: isShow ? 'green' : 'red',
  };

  const handleOpen = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="box" style={border ? { ...styleBorder } : undefined}>
      <span>{displayText}</span>
      <button style={styleBtn} onClick={handleOpen}>
        {isShow ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default TextExpander;
