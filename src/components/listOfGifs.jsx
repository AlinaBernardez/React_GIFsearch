import React from 'react'
import { useState, useEffect } from "react"
import Gif from "./gif"
import getGifs from '../services/getGifs'

export default function ListOfGifs({ keyword }) {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, [keyword]);

    return (
        gifs.map(gif => 
            <Gif
                key={gif.id}
                url={gif.url}
                title={gif.title}/>
        )
    )
}