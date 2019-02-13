import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats'

export default function Header({title, initialData}){
  return(
    <header>
      <Stats initialData={initialData} />
      <h1>{title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

