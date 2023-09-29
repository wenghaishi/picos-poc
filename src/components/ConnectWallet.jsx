import { useState } from "react";
import Web3 from "web3";

// eslint-disable-next-line react/prop-types
const ConnectWallet = ({ toggleModal, showModal }) => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.enable();
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error(
        "MetaMask is not installed. Please install MetaMask extension."
      );
    }
  };

  const disconnectFromMetaMask = () => {
    setWeb3(null); // Reset web3 instance
    setAccount(null); // Reset account
    toggleModal()
  };

  return (
    <div className="mb-16">
      {account ? (
        <div>
          <button
            className="p-6 bg-[#1d6a5e] rounded-xl text-white font-bold text-xl"
            onClick={toggleModal}
          >
            Connected Account: {account.slice(0, 4)} ... {account.slice(38, 42)}
          </button>
          {showModal && (
            <button className="ml-4 w-26 p-6 absolute bg-[#1d6a5e] text-white font-bold text-xl rounded-xl" onClick={disconnectFromMetaMask}>
              Disconnect
            </button>
          )}
        </div>
      ) : (
        <button
          className="p-6 bg-[#1d6a5e] rounded-xl text-white font-bold text-xl"
          onClick={connectToMetaMask}
        >
          Connect to MetaMask
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;
