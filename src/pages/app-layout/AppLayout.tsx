import Map from '@/components/map/Map';
import Sidebar from '@/components/sidebar/Sidebar';
import User from '@/components/user/User';

import styles from './index.module.css';

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
