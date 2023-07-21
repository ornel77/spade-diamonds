import React, { useState, useRef } from 'react';
import './MusicForm.scss';
import { postMusic } from '../../services/musics';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';

function AddMusicForm() {
  const navigate = useNavigate();
  const file = useRef()

  const [newMusic, setNewMusic] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMusic((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in newMusic) {
      form.append(key, newMusic[key]);
    }
    form.append('music_url', file.current.files[0]);
    try {
        const res = await postMusic(form);
        console.log(res);
        toast.success('Musique ajouté avec succès!')
        setTimeout(() => {
            navigate('/admin-music')
        }, 5000);
  
      } catch (err) {
        console.warn(err);
        // if(err.request.status === 422) {
        //   err.response.data.validationErrors.map(msg => (
        //     toast.error(msg.message)
        //   ))
        // }
      }
  };

  return (
    <div className='super-container'>
        <ToastContainer />
      <button className='btn close' onClick={() => navigate('/admin-music')}>
        <IoClose size={40} style={{ color: '#fff' }} />
      </button>
      <section className='body-form'>
        <div className='container'>
          <h2>Nouveau morceau</h2>
          <form action='' onSubmit={handleSubmit}>
            <div className='input-data'>
              <input
                type='text'
                required
                placeholder='tite'
                name='music_title'
                onChange={handleChange}
              />
            </div>
            <div className='input-data'>
              <input
                type='number'
                placeholder='année de sortie'
                name='release_year'
                onChange={handleChange}
              />
            </div>
            <div className='input-data'>
              <input
                type='file'
                ref={file}
                required
                name='music_url'
                onChange={handleChange}
              />
            </div>
            <div className='submit-data'>
              <button className='btn' >Ajouter</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMusicForm;
