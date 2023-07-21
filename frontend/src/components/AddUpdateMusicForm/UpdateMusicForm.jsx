import React, { useEffect, useState, useRef } from 'react';
import './MusicForm.scss';

import { IoClose } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { getOneMusic, putMusic } from '../../services/musics';

function UpdateMusicForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const file = useRef();
  const [updateMusic, setUpdateMusic] = useState({});

  useEffect(() => {
    getOneMusic(id).then((res) => setUpdateMusic(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateMusic((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      for (const key in updateMusic) {
        form.append(key, updateMusic[key]);
      }
      form.append('music_url', file.current.files[0]);
      const res = await putMusic(id, updateMusic);
      console.log(res);
      toast.success('Evènement modifier avec succès!');
      setTimeout(() => {
        navigate('/admin-music');
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
          <h2>Mettre à jour un évènement</h2>
          <form action='' onSubmit={handleSubmit}>
            <div className='input-data'>
              <input
                type='text'
                required
                ref={file}
                placeholder='title'
                name='music_title'
                value={updateMusic.music_title}
                onChange={handleChange}
              />
            </div>
            <div className='input-data'>
              <input
                type='number'
                placeholder='année de sortie'
                name='release_year'
                value={updateMusic.release_year}
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
              <button className='btn'>Modifier</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default UpdateMusicForm;
