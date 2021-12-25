import React, { useState, useLayoutEffect } from "react";
import Modal from "react-modal";
import Carousel from 'nuka-carousel';

import shuffle from "../services/shuffle";
import memeData from "../data/memedata";
const handleDragStart = (e) => e.preventDefault();

const Memebook = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  let memes;
  
  memes = memeData.map((meme, index) => {
    return(
      <img key={index} onDragStart={handleDragStart} src={require(`../images/memes/${meme.pathName}`)}></img>
    );
  });
  memes = shuffle.shuffle(memes);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="meme-book" onClick={openModal}></button>
      <Modal
        className="da-modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col h-full justify-center items-center">
        <button className="self-end mr-5 my-5" onClick={closeModal}>close</button>
          <div className="flex w-full justify-center">
            <div className="text-center"> 
              <h2 className="top text-4xl font-bold">Memorable Moments/Memes</h2>
              <h2 className="text-2xl">(Hover over the image to pause the scroll)</h2>
            </div>
          </div>
          <Carousel className="cara" autoplay={true} heightMode="max" wrapAround={true} autoplayInterval={2000}>
            {memes} 
          </Carousel>
        </div>
      </Modal>
    </div>
  );
};

export default Memebook;
