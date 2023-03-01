import './App.css';
import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import NFTContract from './abi/NFTContract.json'
import NFTGrid from './components/NFTGrid.jsx';
function App() {
  const [nfts, setNFTS] = useState([]);
  const [connectedUser, setConnectedUser] = useState("");

  const contractAddress = "0x542af22baf52cdd0fe292b6fd41eac70d724a0a7";



  const {ethereum} = window;

  useEffect(() => {
    if(ethereum) {
      console.log("Hooray! We can run Web3 apps here")
      getNFTs()
    }else {
      console.error("No web3 here :(")
    }
  }, [])


  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return;
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
  
      // const connectedContract = new ethers.Contract(contractAddress, NFTContract.abi, signer);
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      if(accounts.length) {
        setConnectedUser(accounts[0])
      }else {
        throw new Error("No accounts available")
      }
    } catch (error) {
      console.error(error)
    }
  
  }


  const mintNFT = async () => {
    try {
      if (!ethereum) {
        return;
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner()
      const connectedContract = new ethers.Contract(contractAddress, NFTContract.abi, signer);
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      if(accounts.length) {
        setConnectedUser(accounts[0])
      }else {
        throw new Error("No accounts available")
      }
  
      const res = await connectedContract.mintNFT()
      alert("Hooray you've marked your attendance " + res.hash)
    } catch (error) {
      console.error(error)
    }
  }

  const getNFTs = async () => {
    try {
      if (!ethereum) {
        return;
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const connectedContract = new ethers.Contract(contractAddress, NFTContract.abi, signer);
      const res = await connectedContract.getAllNFTs();

      setNFTS(res)
    }catch(err) {
      console.error(err)
    }
  }

  const onClickHandler = () => {
    mintNFT()
  }

  return (
    <div className="flex flex-col items-center pt-2">
      <h1 className='text-3xl font-bold underline'>Welcome to my NFT page </h1>
      <div className='my-8 flex flex-col items-center'>
        <h2 className='text-xl font-bold my-3'>Mint here</h2>
        <button className=' border border-solid border-green-700 py-1 px-3' onClick={onClickHandler}>LFG!</button>
      </div>
      <NFTGrid nfts={nfts} />
    </div>
  );
}

export default App;
