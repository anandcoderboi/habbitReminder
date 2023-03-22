import React from "react";

const Dashboard = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div id="dashboard-header">
          <input className="input-habbit"  maxLength= {50}  type="text" />
          <label className="label-habbit" for="text">Habbit</label>
        </div>
        <div className="dashboard-body">content</div>
        <div className="dashboard-footer">
          <button onClick={onClose} className="addhabbit">
            add habbit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
