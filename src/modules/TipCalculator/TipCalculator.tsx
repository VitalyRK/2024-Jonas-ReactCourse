import { useState } from 'react';

import InputField from '@/components/InputField/InputField';
import Reset from '@/components/Reset/Reset';
import SelectField from '@/components/SelectField/SelectField';

import styles from './index.module.css';

const TipCalculator = () => {
  const [totalBill, setTotalBill] = useState(0);
  const [mineSatisfaction, setMineSatisfaction] = useState(20);
  const [friendsSatisfaction, setFriendsSatisfaction] = useState(20);

  const tip = Math.round(
    (totalBill / 100) * ((mineSatisfaction + friendsSatisfaction) / 2)
  );

  const resetFunc = () => {
    setTotalBill(0);
    setMineSatisfaction(20);
    setFriendsSatisfaction(20);
  };

  return (
    <>
      <div className={styles.container}>
        <InputField totalBill={totalBill} setTotalBill={setTotalBill} />
        <SelectField
          text="How did you like the service?"
          satisfaction={mineSatisfaction}
          setSatisfaction={setMineSatisfaction}
        />
        <SelectField
          text="How did your friend like the service?"
          satisfaction={friendsSatisfaction}
          setSatisfaction={setFriendsSatisfaction}
        />
        <p>{`You pay $${totalBill + tip} ($${totalBill} + $${tip} tip)`}</p>
        <Reset ResetFunc={resetFunc} />
      </div>
    </>
  );
};

export default TipCalculator;
