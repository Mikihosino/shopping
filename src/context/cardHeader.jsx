import React from 'react';

const CardHeader = ({ id, children }) => {
  return (
    <div className="card-header p-0" id={id}>
      {children}
    </div>
  );
}

export default CardHeader;
