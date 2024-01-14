import { useState } from 'react';

import Modal from './conponents/modal/Modal';

import './global.css';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [isOpenElement, setIsOpenElement] = useState(1);
  return (
    <>
      <button
        onClick={() => setIsOpenModal(!isOpenModal)}
        className="clear__btn"
      >
        <img className="clear__btn-img" src="/clear.svg" alt="ClearSVG" />
      </button>
      <Modal
        open={isOpenModal}
        setOpenElement={setIsOpenElement}
        openElement={isOpenElement}
      />
    </>
  );
}

export default App;
