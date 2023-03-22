import React from "react";
import "./Dashboard.css"
const Dashboard = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div id="dashboard-header">
          <input className="input-habbit"  maxLength= {50}  type="text" />
          {/* <label className="label-habbit" for="text">Habbit</label> */}
        </div>
        <div className="dashboard-body">
          <input className="input-habbit description"  maxLength= {50}  type="text" />
        </div>
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
