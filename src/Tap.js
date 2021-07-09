import React from 'react';

const Tap = ({label, clickFuction}) => {
  return (
    <button onClick={() => clickFuction(label)}>{label}</button>
  );
};
export default Tap;