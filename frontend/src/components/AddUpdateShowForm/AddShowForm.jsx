import React, { useState } from 'react';
import './Form.scss';
import { postShow } from '../../services/shows';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';

function AddShowForm() {
  const navigate = useNavigate();

  const [newShow, setNewShow] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewShow((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await postShow(newShow);
        console.log(res);
        toast.success('Oeuvre ajouté avec succès!')
  
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
      <button className='btn close' onClick={() => navigate('/admin')}>
        <IoClose size={40} style={{ color: '#fff' }} />
      </button>
      <section className='body-form'>
        <div className='container'>
          <h2>Nouvel évènement</h2>
          <form action='' onSubmit={handleSubmit}>
            <div className='input-data'>
              <input
                type='text'
                required
                placeholder='lieu'
                name='venue'
                onChange={handleChange}
              />
            </div>
            <div className='input-data'>
              <input
                type='text'
                required
                placeholder='ville'
                name='city'
                onChange={handleChange}
              />
            </div>
            <div className='input-data'>
              <input
                type='text'
                required
                name='date'
                placeholder='date (ex: 12 Oct 2023)'
                onChange={handleChange}
              />
            </div>
            <div className='input-data'>
              <input
                type='text'
                required
                name='time'
                placeholder='horaire (hh:mm:ss)'
                onChange={handleChange}
              />
            </div>
            <div className='submit-data'>
              <button className='btn'>Ajouter</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddShowForm;
