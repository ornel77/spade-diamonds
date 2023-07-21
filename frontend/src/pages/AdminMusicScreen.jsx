import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import NavAdmin from '../components/NavbarAdmin/NavAdmin'
import AdminMusicList from '../components/AdminMusicList/AdminMusicList'

function AdminMusicScreen() {
  return (
    <div className=''>
        
        <Navbar />
        <NavAdmin />
        <AdminMusicList />
      
    </div>
  )
}

export default AdminMusicScreen