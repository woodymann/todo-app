import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats'
import Stopwatch from './Stopwatch'


export default function Header({title, initialData}){
  return(
    <header>
      <Stats initialData={initialData} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

