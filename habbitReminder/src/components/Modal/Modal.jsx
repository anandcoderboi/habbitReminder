import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import "./Modal.css"
const Modal = () => {

  const[open,setOpen]=React.useState(false)

  const openModal=()=>{
    setOpen(!open)
  }

  const closeModal=()=>{
    setOpen(false)
  }
  return (
    <div className="modal">
      <div className="modal-content">
      <div className="modal-heading">
        <h1 className="heading">Let's add your habbit!!</h1>
      </div>
      
      <button  onClick={openModal} className="addyourhabbit">Add your habbit</button>
      </div>
      <div className='test'>
      <Dashboard onClose={closeModal} show={open}/>
      </div>
    </div>
  )
}

export default Modal