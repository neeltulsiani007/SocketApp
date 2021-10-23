import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import JoinRoomModal from "./Components/JoinRoomModal/JoinRoomModal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <JoinRoomModal showModal={showModal} />
      <Header />
      <Main />
      <Footer setShowModal={setShowModal} />
    </>
  );
}

export default App;
