import React, {useState} from "react";
import Modal from "react-modal";
import Carousel from "nuka-carousel";
import DnDSayings from '../images/dnd/dnd-sayings.png'
import Ryudeus from '../images/dnd/ryudeus.png'
import ActualRose from '../images/dnd/actual-rose.png'
import ActualRacist from '../images/dnd/actually_racist.png'
import Boom from '../images/dnd/boom.png'
import Chawa from '../images/dnd/chawa.png'
import DnDMeme from '../images/dnd/dnd-meme.webp'
import kinStrong from '../images/dnd/kindron-strong.png'
import LanceSyb from '../images/dnd/lance-sybil.jpg'
import LowainFun from '../images/dnd/lowain-funny.png'
import MeanDron from '../images/dnd/mean-dron.png'
import NightTerror from '../images/dnd/night-terror.png'
import NoFranz from '../images/dnd/no-franz.png'
import RyudeusEpic from '../images/dnd/ryudeus-epic.png'
import RyudeusMentor from '../images/dnd/ryudeus-mentor.png'
import SuicideSquad from '../images/dnd/suicide-squad.png'
import SybilHot from '../images/dnd/sybil-hot-code.png'
import SybilRacist from '../images/dnd/sybil-racist.png'
import SybilToxic from '../images/dnd/toxic-sybil.png'
import XiadoKey from '../images/dnd/xiado-key.png'


import LanceMoment from '../videos/lance_moment.mp4'
import Sybil from '../videos/sybil_moment.mp4'
import FranzWatch from '../videos/FRANZ_WATCH_TF_OUT_MAN.mp4'



const DndBook = () => {
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
      <button className="dnd-book" onClick={openModal}></button>
      <Modal
        className="dnd-modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col h-full justify-center items-center">
        <button className="self-end mr-5 my-5" onClick={closeModal}>close</button>
          <div className="flex w-full justify-center">
            <div className="text-center"> 
              <h2 className="top text-4xl font-bold underline mb-5">DnD Memorable Moments/Memes</h2>
            </div>
          </div>
          <Carousel wrapAround={true}>
            <img src={DnDSayings}></img>
            <img src={DnDMeme}></img>
            <video controls src={LanceMoment} typeof="video/mp4"></video>
            <video controls src={Sybil} typeof="video/mp4"></video>
            <video className="franz-vid" controls src={FranzWatch} typeof="video/mp4"></video>
            <img src={ActualRose}></img>
            <img src={Boom}></img>
            <img src={Chawa}></img>
            <img src={LanceSyb}></img>
            <img src={LowainFun}></img>
            <img src={kinStrong}></img>
            <img src={MeanDron}></img>
            <img src={NightTerror}></img>
            <img src={ActualRacist}></img>
            <img src={NoFranz}></img>
            <img src={Ryudeus}></img>
            <img src={RyudeusMentor}></img>
            <img src={RyudeusEpic}></img>
            <img src={SuicideSquad}></img>
            <img src={SybilHot}></img>
            <img src={SybilRacist}></img>
            <img src={SybilToxic}></img>
            <img src={XiadoKey}></img>
          </Carousel>
        </div>
      </Modal>
    </div>
  )
}

export default DndBook;