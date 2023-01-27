import React from 'react';

export default function Box({ box }) {
  // console.log('box props', { box });
  return <div className="board-cell">{box}</div>;
}
