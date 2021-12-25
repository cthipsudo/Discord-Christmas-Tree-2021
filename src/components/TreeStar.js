import React, {useState} from "react";
import Modal from "react-modal";

import Chase from '../images/santa-chase.png'
import Batchest from '../images/batchest.gif'

const TreeStar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  return(
    <div>
      <button className="tree-star" onClick={openModal}></button>
      <Modal
        className="tree-modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col h-full justify-center items-center">
        <button className="self-end mr-5 my-5" onClick={closeModal}>close</button>
          <div className="flex w-full justify-center">
            <div className="text-center"> 
              <h2 className="top text-4xl font-bold pt-12 mt-12">Congrats to Chestbrahh#7572</h2>
              <h2 className="text-2xl pb-12">You were nominated for being the Star this year!</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={Batchest} alt="batchest"/>
            <img src={Chase} alt="Chestbrahh"></img>
            <img src={Batchest} alt="batchest"/>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default TreeStar;