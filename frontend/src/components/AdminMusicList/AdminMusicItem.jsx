import React from 'react';
import { useNavigate } from 'react-router-dom';

import { removeMusic } from '../../services/musics';
import { IoClose } from 'react-icons/io5';

function AdminMusicItem({ music }) {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const confirmation = confirm("Etes-vous sûr de vouloir supprimer cette musique?")
            if(confirmation) {
                await removeMusic(id);
            } 
        } catch (error) {
          console.warn(error);
        }
      };
  return (
    <article className='audio-container-admin'>
        <button className='delete-icon' onClick={() => handleDelete(music.id)}>
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
      <h3>
        {' '}
        {music.music_title} ({music.release_year}){' '}
      </h3>
      <audio src={music.music_url} controls />
      <button className="btn" onClick={() => navigate(`/update-music/${music.id}`)} >Mettre à jour</button>
    </article>
  );
}

export default AdminMusicItem;
