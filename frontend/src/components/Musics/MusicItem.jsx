import React, { useEffect } from 'react';
import cover from '../../assets/image/cover.png';

function MusicItem({ music }) {
  return (
    <article className='audio-container'>
      <h3>
        {' '}
        {music.music_title} ({music.release_year}){' '}
      </h3>
      <div className='icon-and-player'>
        <div className='audio-player'>
          <div className='icon-container'>
            <img src={cover} alt='' />
          </div>
        </div>
        <audio src={music.music_url} controls />
      </div>
    </article>
  );
}

export default MusicItem;
