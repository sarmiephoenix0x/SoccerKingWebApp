import React from 'react';

const CustomDialog = ({ message, onClose }) => {
  return (
    <div className="custom-dialog">
      <p>{message}</p>
      <button onClick={onClose}>Close</button> {/* Call onClose when the button is clicked */}
    </div>
  );
};

export default CustomDialog;