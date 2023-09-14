import React from 'react'
import './search.css'

export default function Gif({ id, title, url }) {
    return (
        <div>
            <img alt={title} src={url}></img>
            <div className='gif-title'>{title}</div>
        </div>
    )
}