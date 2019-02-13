import React from 'react';
import PropTypes from 'prop-types';

export default function Stats({initialData}){

  let all = initialData.length;
  let completed = initialData.filter(({completed}) => completed === true).length;
  let left = all- completed;

  return(
    <table className="stats">
      <tbody>
        <tr>
          <th>All:</th><td>{all}</td>
        </tr>
        <tr>
          <th>Completed:</th><td>{completed}</td>
        </tr>
        <tr>
          <th>Left:</th><td>{left}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes = {
  todos: PropTypes.array
}

