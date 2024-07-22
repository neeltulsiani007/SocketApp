import React from 'react'
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import JoinRoomModal from "./JoinRoomModal/JoinRoomModal";
import { useEffect, useState } from "react";
import io from "socket.io-client";

function Game() {
    const [showModal, setShowModal] = useState(true);
  const [roomCode, setRoomCode] = useState(null);
  const socket = io.connect("http://localhost:4000");
 

  useEffect(() => {
    console.log(roomCode);
    if (roomCode) {
      socket.emit("joinRoom", roomCode);
    }
  }, [roomCode]);
  return (
    <div>
      <JoinRoomModal
        showModal={showModal}
        setShowModal={setShowModal}
        setRoomCode={setRoomCode}
      />
      <Header />
      <Main socket={socket} roomCode={roomCode} />
      <Footer setShowModal={setShowModal} />
    </div>
  )
}

export default Game
