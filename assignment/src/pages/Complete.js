import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { DeleteTodoComplete } from '../Redux/action';

function Complete(props) {
    const dispatch  = useDispatch();
    const dta = useSelector((state) => {
        return state;
    })

    console.log(dta);

    

    function DeleteTask(elem  , index) {
        
          
        // console.log(elem , " ", index )
        DeleteTodoComplete( dispatch , dta.complete , index );
 }
    return (
        <div>

            <table>

                <thead>
                    <tr> 
                        
                        <th>Task</th>
                        <th>Body</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { dta.complete.length > 0 && 
                        dta.complete.map((elem , index ) => {
                            return (
                                
                                    <tr>
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

export default Complete;