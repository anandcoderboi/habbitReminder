import React,{useState} from 'react'
import Dashboard from '../Dashboard/Dashboard'
import "./Modal.css"
const Modal = () => {

  const[showModal,setShowModal] =useState(false)



  return(
    <div className="modal">
      <h1 className="modal-title">Habbit Reminder</h1>
      <button className='button-primary' onClick={()=>setShowModal(true)}>Add Habbit</button>


      {showModal && (<Dashboard onClose={()=>setShowModal(false)}/>)}
    </div>
  )
}
export default Modal