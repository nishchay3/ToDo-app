import React from 'react';

import './ListItem.scss';

export default function ListItem(props) {
  const dateFormatted =
    props.date.toLocaleString('en-US', { day: '2-digit' }) +
    ' ' +
    props.date.toLocaleString('en-US', { month: 'long' }) +
    ' ' +
    props.date.getFullYear();

  return (
    <div className="list-wrapper">
      <div className="list-row">
        <h3 className="title">{props.title}</h3>
        <p className="date">{dateFormatted}</p>
      </div>
      <p className="details">{props.details}</p>
    </div>
  );
}
