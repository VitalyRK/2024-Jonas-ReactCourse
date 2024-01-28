import { useState } from 'react';
import Star from './Star';
import styles from './index.module.css';
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const starContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

interface IProps {
  messages?: string[];
  maxRating?: number;
  color?: string;
  size?: number;
  defaultRating?: number;
  onSetRating: React.Dispatch<React.SetStateAction<number>>;
}

const StarRating = ({
  maxRating = 5,
  color = '#fcc419',
  size = 48,
  messages = [],
  defaultRating = 0,
  onSetRating,
}: IProps) => {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color,
    fontSize: `${size / 1.5}px`,
  };

  function handleRating(rating: number) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_v, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ''}
      </p>
    </div>
  );
};

export default StarRating;
