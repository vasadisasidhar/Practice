import React from 'react';

export const PropsSending = (props) => {
  const containerStyle = {
    borderRadius: '20px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    margin: '10px 0',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    gap:'10px'
  };

  return (
    <li style={containerStyle}>
      <h2>{props.title}</h2>
      <h3>{props.Address1}</h3>
      <p>{props.Address2}</p>
      <h3>{props.Time}</h3>
      <h3>{props.Type}</h3>
    </li>
  );
};
