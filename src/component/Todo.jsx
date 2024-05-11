import React, { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo,updateTodo } from '../redux/TodoSlicer';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Todo = () => {
    const todos = useSelector((state) => state.Todos.todos);
    const dispatch = useDispatch();
   
    const [newText, setNewText] = useState("");
    const [editTodoId, setEditTodoId] = useState(null);
   
   const[showmodal,setModal]=useState(false)
    

    const handleUpdate = (todo) => {
      setEditTodoId(todo.id)
      setNewText("")
    };
    const handledispatchingupadate=(id)=>{
     
      dispatch(updateTodo({id,newText}))
      
      setEditTodoId(null);
    }

    return (
        <>
            {todos && todos.map((todo) => (
                <div key={todo.id} className='container mt-3 text-light px-2 py-2 col-lg-5 d-flex justify-content-between items-center rounded' style={{ background: "#505050" }}>
                    {editTodoId === todo.id ? (
                        <>
                            <input className='outline-0' type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
                            <button className='btn btn-primary' onClick={()=>handledispatchingupadate(todo.id)} type="button">Save</button>
                        </>
                    ) : ( <>
                        <h5>{todo.text}</h5>
                        <div className='d-inline-flex gap-2 items-center'>
                        <EditIcon  onClick={() => handleUpdate(todo)} style={{ cursor: "pointer" }} />
                        <RemoveRedEyeIcon onClick={()=>setModal(!showmodal)} className='text-light' style={{ cursor: "pointer" }} />
                        <DeleteIcon onClick={() => dispatch(removeTodo(todo.id))} className='text-danger' style={{ cursor: "pointer" }} />
                    </div>

                    { 
    showmodal &&  (
    <div>
    
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={showmodal}
      onClose={() => setModal(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={showmodal}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            {todo.text}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
           id : {todo.id}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  </div>
  )
  }


                    </>
                    )}
                    
                </div>
  

 




     ))}




           
       
        </>
    );
};

export default Todo;
