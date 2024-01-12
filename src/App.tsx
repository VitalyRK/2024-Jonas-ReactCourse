import { useState } from 'react';

import Modal from './conponents/modal/Modal';

import './global.css';

function App() {
  const [openModal, setOpenModal] = useState(true);
  const [openElement, setOpenElement] = useState(1);
  return (
    <>
      <button onClick={() => setOpenModal(!openModal)} className="clear__btn">
        <img className="clear__btn-img" src="/clear.svg" alt="ClearSVG" />
      </button>
      <Modal
        open={openModal}
        setOpenElement={setOpenElement}
        openElement={openElement}
      />
    </>
  );
}

export default App;
