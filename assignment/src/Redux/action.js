function addTodo(dispatch , obj) {
    dispatch(
        {
            type : "ADD",
             payload : obj
    }
    )
}

function ChangeTodo(dispatch  , arr , index , elem ){

    let dta =  arr.filter((elem, i) =>{
        return i!=index;
    })

    let data1 = {
        dta,
        elem
    }



    dispatch({
        type : "CHANGE",
        payload : data1
    })
}

function DeleteTodo(dispatch  , arr , index ){

    let dta =  arr.filter((elem, i) =>{
         return i!=index;
     })
 
 
     dispatch({
         type : "DELETE",
         payload : dta
     })
 }

 function DeleteTodoComplete(dispatch  , arr , index ){

    let dta =  arr.filter((elem, i) =>{
         return i!=index;
     })
 
 
     dispatch({
         type : "DELETEC",
         payload : dta
     })
 }


export {
    addTodo
    , ChangeTodo,
    DeleteTodo,
    DeleteTodoComplete
}