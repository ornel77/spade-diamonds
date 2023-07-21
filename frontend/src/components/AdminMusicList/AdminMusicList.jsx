import React, { useEffect, useState } from 'react';
import { getMusics } from '../../services/musics';
import './AdminMusic.scss';
import AdminMusicItem from './AdminMusicItem';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';



function AdminMusicList() {
  const navigate = useNavigate();
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    getMusics()
      .then((res) => setMusics(res.data))
      .catch((err) => console.log(err));
  }, [musics]);

  return (
    <div className='container'>
      <div className='music-container-admin'>
        <h2>Liste des musiques.</h2>
        <div className='music-list'>
          {musics.map((music) => (
            <AdminMusicItem key={music.id} music={music} />
          ))}
          <article className='audio-container-admin add-icon' onClick={() => navigate('/add-music')}>
          <BsPlusCircleDotted size={100} style={{ color: '#412E7C' }} />
              
          </article>
        </div>
      </div>
    </div>
  );
}

export default AdminMusicList;
