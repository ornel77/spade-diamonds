import React, { useEffect, useState } from 'react'
import { getMusics } from '../../services/musics'
import MusicItem from './MusicItem'
import './Music.scss'
function Music() {
    const [musics, setMusics] = useState([])

    useEffect(() => {
        getMusics()
            .then(res => setMusics(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(musics)
  return (
    <div className='container'>
        <div className="music-container">

        <h2>Check out some of our music</h2>
        <div className="music-list">
            {
                musics.map(music => <MusicItem key={music.id} music={music} />)
            }
        </div>
        </div>
    </div>
  )
}

export default Music