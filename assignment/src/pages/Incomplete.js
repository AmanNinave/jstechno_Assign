import React from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { ChangeTodo , DeleteTodo } from '../Redux/action';

function Incomplete(props) {

    const dispatch  = useDispatch();
    const dta = useSelector((state) => {
        return state;
    })

    console.log(dta);

    function ChangeTask(elem  , index) {
        
          
            // console.log(elem , " ", index )
            ChangeTodo( dispatch , dta.todolist , index , elem );
    }

    function DeleteTask(elem  , index) {
        
          
        // console.log(elem , " ", index )
        DeleteTodo( dispatch , dta.todolist , index );
}
    return (
        <div>

            <table>

                <thead>
                    <tr> 
                        <th>Status</th>
                        <th>Task</th>
                        <th>Body</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { dta.todolist.length > 0 && 
                        dta.todolist.map((elem , index ) => {
                            return (
                                
                                    <tr>
                                        <td> <input type="checkbox" onChange={()=>{ChangeTask(elem , index )}}/>  </td>
                                        <td>{elem.title}</td>
                                        <td>{elem.body}</td>
                                        <td><button onClick={() => { DeleteTask(elem , index)}}>delete</button></td>
                                    </tr>
                                
                            )
                        })
                    }

                </tbody>
            </table>




        </div>
    );
}

export default Incomplete;