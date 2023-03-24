import React from "react";
import "./Dashboard.css"
import { BiCommentDetail} from 'react-icons/Bi';
import { AiOutlineCalendar} from 'react-icons/Ai';
import Calendar from 'react-calendar';
import moment from 'moment'
import 'react-calendar/dist/Calendar.css';

const Dashboard = ({ show, onClose }) => {
  let modal = document.getElementById("closeModal")
  const [startdate,setstartDate] = React.useState(new Date());
  const [enddate,setendDate] = React.useState(new Date());
  const [startdisplay, setstartdisplay] = React.useState(false);
  const [enddisplay, setenddisplay] = React.useState(false);
  if (!show) {
    return null;
  }
  function startcalenderModalOpen(){
    setstartdisplay(!startdisplay)
  }
  function endcalenderModalOpen(){
    setenddisplay(!enddisplay)
  }
  function startcalenderModalClose(){
    setstartdisplay(false)
  }
  function endcalenderModalClose(){
    setenddisplay(false)
  }
  //Change Date Method 
const startchangeDate = (e) => {
    setstartDate(e)
    console.log(e)
  }
const endchangeDate = (e) => {
    setendDate(e)
    console.log(e)
  }
//Calendar Tag
  return (
    <div className="dashboard" >
      <div className="dashboard-content">
        <div id="dashboard-header">
          <input className="input-habbit" placeholder="Title"  maxLength= {50}  type="text" />
          {/* <label className="label-habbit" for="text">Habbit</label> */}
        </div>
        <div className="dashboard-body">
          <BiCommentDetail className="comment-logo"/>
          <input className="input-habbit description" placeholder="description"  maxLength= {50}  type="text" />
          <div >
            <AiOutlineCalendar className="calenderLogo"/>
            <button  onClick={startcalenderModalOpen} className="startDate">Start Date</button>
            <div className="setDate">
              {moment(startdate).format('MMMM Do YYYY')}
            </div >
            {startdisplay ?
            <div  onClick={startcalenderModalClose}>
              <div id="closeModal" onClick={e=>e.stopPropagation() }  >
                <Calendar onChange={startchangeDate} value={startdate} className="calender"/>
                <p>Current selected date is <b>{moment(startdate).format('MMMM Do YYYY')}</b></p>
            </div>
            </div>:
            null}
          </div>
          <div >
            <AiOutlineCalendar className="calenderLogo"/>
            <button  onClick={endcalenderModalOpen} className="startDate">End Date</button>
            <div className="setDate">
              {moment(enddate).format('MMMM Do YYYY')}
            </div >
            {enddisplay ?
            <div  onClick={endcalenderModalClose}>
              <div id="closeModal" onClick={e=>e.stopPropagation() }  >
                <Calendar onChange={endchangeDate} value={enddate} className="calender"/>
                <p>Current selected date is <b>{moment(enddate).format('MMMM Do YYYY')}</b></p>
            </div>
            </div>:
            null}
          </div>
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
