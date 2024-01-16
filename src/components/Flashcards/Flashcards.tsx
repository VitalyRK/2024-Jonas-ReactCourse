import { useState } from 'react';

import Card from '../Card/Card';
import styles from './index.module.css';

const contentCards = [
  {
    text: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    text: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    text: 'What is the name of the syntax we use to describe a UI in React?',
    answer: 'JSX',
  },
  {
    text: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    text: 'How to give components memory?',
    answer: 'useState',
  },
  {
    text: 'What do we call an input element that is completely synchronised in state?',
    answer: 'Controlled components',
  },
];

const Flashcards = () => {
  const [isClickedID, setIsClickedID] = useState<number | null>(null);

  return (
    <>
      <div className={styles.flashcards}>
        {contentCards.map(({ text, answer }, id) => {
          const isClicked = isClickedID === id;
          return (
            <Card
              key={id}
              text={isClicked ? answer : text}
              id={id}
              isClicked={isClicked}
              setIsClickedID={setIsClickedID}
            />
          );
        })}
      </div>
    </>
  );
};

export default Flashcards;
