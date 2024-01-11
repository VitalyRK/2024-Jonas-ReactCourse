import { techStack } from '@/helpers/Constant';

import WidgetsModule from '../WidgetsModule/WidgetsModule';
import styles from './index.module.css';

interface IProps {
  name: string;
  about: string;
}
const CartInfo = ({ name, about }: IProps) => {
  return (
    <div className={styles.cart__box}>
      <img className={styles.cart__img} src="vitaly.jpg" alt="Vitaly Shishou" />
      <h3>{name}</h3>
      <p className={styles.cart__about}>{about}</p>
      <WidgetsModule techStack={techStack} />
    </div>
  );
};

export default CartInfo;
