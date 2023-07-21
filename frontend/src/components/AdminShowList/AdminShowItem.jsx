import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeShow } from '../../services/shows';
import { IoClose } from 'react-icons/io5';

function AdminShowItem({ show }) {
  const navigate = useNavigate();

  const day = show.date.split(' ')[0];
  const monthYear = show.date.split(' ').slice(1).join(' ');
  const time = show.time.split(':').slice(0, 2).join(':');

  const handleDelete = async (id) => {
    try {
        const confirmation = confirm("Etes-vous sûr de vouloir supprimer cette date?")
        if(confirmation) {
            await removeShow(id);
        } 
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <article>
      <button className='delete-icon' onClick={() => handleDelete(show.id)}>
        <IoClose
          size={25}
          style={{
            color: '#412E7C',
            backgroundColor: 'white',
            borderRadius: '50%',
            border: '1px solid #412E7C',
          }}
        />
      </button>
      <div className='venue'> {show.venue} </div>
      <div className='city'> {show.city} </div>
      <div className='date'>
        {day} {monthYear}
      </div>
      <div className='time'> {time} </div>
      <button
        className='btn'
        onClick={() => navigate(`/update-show/${show.id}`)}
      >
        Mettre à jour
      </button>
    </article>
  );
}

export default AdminShowItem;
