import React, { useEffect, useState } from 'react';
import { getShows } from '../../services/shows';
import AdminShowItem from './AdminShowItem';
import { BsPlusCircleDotted } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import './AdminShow.scss'

function AdminShowList() {
    const navigate = useNavigate()

  const [shows, setShows] = useState([]);
  useEffect(() => {
    getShows()
      .then((res) => setShows(res.data))
      .catch((err) => console.log(err));
  }, [shows]);
  return (
    <section className='admin-show-container'>
      <h2>Liste des concerts</h2>
      <div className='show-list'>
        {shows.map((show) => (
          <AdminShowItem  key={show.id} show={show} />
        ))}
        <article className='add-icon' onClick={() => navigate('/add-show')}>
            <BsPlusCircleDotted size={100} style={{ color: "#412E7C" }}/>
        </article>
      </div>
    </section>
  );
}

export default AdminShowList;
