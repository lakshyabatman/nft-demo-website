import React from 'react'
import NFT from './NFT'



const NFTGrid= (props) => {


  
  return (
    <div className='container mt-8 grid grid-cols-4 gap-3'>
       {props.nfts.map(nft => {
        return (
            <div>
                <b>Name: {nft.name.toString()}</b>
                <NFT uri={nft.uri} />
            </div>
        )
       })}
    </div>
  )
}

export default NFTGrid


