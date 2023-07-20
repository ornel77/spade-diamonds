import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi'


function ShowItem({show}) {
    const day = show.date.split(' ')[0]
    const monthYear = show.date.split(" ").slice(1,).join(' ')

    console.log(monthYear)
  return (
    <article>
      <div className='date'>
        <div>
          <p className='day'>{day}</p>
          <p className='month-year'> {monthYear} </p>
        </div>
      </div>
      <div className='city'> {show.city} </div>
      <div className='venue'> {show.venue} </div>
      <a href='#' className='info-link'>
        <FiArrowDownRight size={30} className='info-icon' />
      </a>
    </article>
  );
}

export default ShowItem;
