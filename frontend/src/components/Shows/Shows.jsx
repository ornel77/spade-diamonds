import React, { useEffect, useState } from 'react'
import { getShows } from '../../services/shows'
import './Shows.scss'
import ShowItem from './ShowItem'

function Shows() {
    const [shows, setShows] = useState([])
    useEffect(() => {
        getShows()
            .then(res => setShows(res.data))
            .catch(err => console.log(err))
    }, [])

  return (
    <section className='container show-container'>
        <h2>Live Tour</h2>
        <div className="show-list">
            {
                shows.map(show => <ShowItem key={show.id} show={show}/>)
            }
                 
        </div>
    </section>
  )
}

export default Shows