import React, { useState } from "react";
import "./Dashboard.css";
import Habbitlist from "../Habbitlist/Habbitlist.jsx";
import { Link } from "react-router-dom";

const Dashboard = ({ openModal, closeModal, ontoggleHabbitlist }) => {
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");
  const [habbitName, setHabbitName] = useState("");
  const [habbitdetails, setHabbitdetails] = useState("");
  const [habbits, setHabbits] = useState([]);

  const onSave = () => {
    setHabbits([...habbits, { startDate, endDate, habbitName, habbitdetails }]);

    console.log(habbits);
  };
  function handleClick() {
    console.log(habbits);
    return (
      <button>
        <Link to="/habbitlist">Habbit List</Link>
      </button>
    );
  }
  return (
    <div className="modal">
      <div className="modal-background" onClick={closeModal}></div>

      <div className="modal-card">
        <header className="model-card-header">
          <label className="label">Habbit Name</label>{" "}
          <input
            className="modal-card-title"
            onChange={(e) => setHabbitName(e.target.value)}
          />
        </header>
        <section className="modal-card-content">
          <div className="field">
            <label className="label">Start Date</label>
            <input
              type="date"
              className="input"
              value={startDate}
              onChange={(e) => setStartdate(e.target.value)}
            />
            <div className="field">
              <label className="label">End Date</label>
              <input
                type="date"
                className="input"
                value={endDate}
                onChange={(e) => setEnddate(e.target.value)}
              />

              <div className="field">
                <label className="label">Habbit Details</label>
                <textarea
                  className="textarea"
                  value={habbitdetails}
                  onChange={(e) => setHabbitdetails(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="modal-card-foot">
          <button className="button-save" onClick={onSave}>
            Save
          </button>
          <button className="button-cancel">Cancel</button>
          {/* <button onClick={handleClick}>Habbit List</button> */}
          <button onClick={ontoggleHabbitlist}>habbit list</button>
        </footer>
      </div>
      <Habbitlist habbits={habbits} />
    </div>
  );
};

export default Dashboard;
