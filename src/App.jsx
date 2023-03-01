import './App.css';
import { useEffect, useState } from 'react';
import { ethers } from "ethers";
import NFTContract from './abi/NFTContract.json'
import NFTGrid from './components/NFTGrid.jsx';
function App() {
  const [nfts, setNFTS] = useState([]);
  const [connectedUser, setConnectedUser] = useState("");



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
