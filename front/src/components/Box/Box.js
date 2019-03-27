import React from 'react';
import './Box.css';

export default function Box(props) {
  return (
    <div className="box">
      <span>{props.name}</span>
      <img src={props.url} alt={props.name}/>
    </div>
  )
}
