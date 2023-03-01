import React, { useEffect, useState } from 'react'





const NFT = (props) => {


    const [image, setImage] = useState("");

    useEffect(() => {
        fetch("https://proxy.cors.sh/" + props.uri, {
            method: "GET",
            headers: {
                'x-cors-api-key': 'temp_c404267907d9b4d55b85c57f68949517'
            }

        }).then(async resp => {
            const data = await resp.json();
            setImage(data.image)
        }).catch(console.error)
    },[])
  return (
    <div>
        <img src={image} height="300"/>
    </div>
  )
}

export default NFT