import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`mt-3 alert alert-sm alert-${alert.type}`}>
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
