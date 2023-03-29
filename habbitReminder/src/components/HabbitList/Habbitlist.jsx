import React from 'react'

const Habbitlist = ({habbits}) => {
  function handleClick(){
    console.log(habbits)
    // habbits.map((habbit)=>{
    //   console.log(habbit.startDate)
    //   return(
    //     <div>`Start Date = ${habbit.startDate}`</div>
        
    //   )
    // })
  }
  return (
    <button onClick={handleClick}>Habbit List</button>
  )
}

export default Habbitlist