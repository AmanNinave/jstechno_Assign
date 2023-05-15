import React from 'react';
import "./AddTask.css"
import { useState } from 'react';
import { addTodo } from '../Redux/action';
import {useDispatch} from 'react-redux'
function AddTask(props) {

    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const dispatch = useDispatch();

    function addtsk(event) {
        event.preventDefault();
    
        var obj = { title, body };
        console.log(obj);
        
        addTodo( dispatch , obj );
    
    
    }


    return (
        <div className='div_add'>

            <form onSubmit={addtsk}>
                <label for="">Task Title</label><br />
                <input id="task" type="text" placeholder="Enter Task Title" onChange={(e) => setTitle(e.target.value)} /><br />

                <label for="">Task Title</label><br />

                <textarea name="" id="textarea" cols="30" rows="10"  onChange={(e) => setBody(e.target.value)} ></textarea>

                <input type="submit"  />
            </form>

        </div>
    );
}

export default AddTask;