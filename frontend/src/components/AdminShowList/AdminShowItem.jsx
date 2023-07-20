import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminShowItem({ show }) {
    const navigate = useNavigate()

  const day = show.date.split(' ')[0];
  const monthYear = show.date.split(' ').slice(1).join(' ');
  const time = show.time.split(':').slice(0, 2).join(':');
  return (
    <article>
      <div className='venue'> {show.venue} </div>
      <div className='city'> {show.city} </div>
      <div className='date'>
        {day} {monthYear}
      </div>
      <div className='time'> {time} </div>
      <button className='btn' onClick={() => navigate(`/update-show/${show.id}`)}>Mettre à jour</button>
    </article>
  );
}

export default AdminShowItem;
