import ConnectWallet from "./components/ConnectWallet";
import Trade from "./components/Trade";
import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  
  return (
    <>
      <div
        className="w-full h-screen bg-[#E2FCA4] flex flex-col items-center justify-center"
      >
        <ConnectWallet toggleModal={toggleModal} showModal={showModal}/>
        <Trade />
      </div>
    </>
  );
}

export default App;
