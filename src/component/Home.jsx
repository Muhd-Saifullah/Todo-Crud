import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlicer';
const Home = () => {
  const [input,setInput]=useState("")
  const dispatch=useDispatch()

  const handleTodosFitIn=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")
  }
  
  return (
    <div className='contaier d-flex flex-column items-center'>
        <section className='mt-3 text-center'>
            <h3>Enter Your Task</h3>
        </section>
        <div className='container col-lg-5 d-flex gap-2'>
            <input className='form-control' value={input} onChange={(e)=>setInput(e.target.value)} />
            <Button variant="contained" onClick={handleTodosFitIn}><AddIcon/></Button>
        </div>
    </div>
  )
}

export default Home