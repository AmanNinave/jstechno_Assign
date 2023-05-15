
const initialData = {
    todolist : JSON.parse(localStorage.getItem("todo")) || [] ,
    complete : JSON.parse(localStorage.getItem("complete")) || [] 
}


function MyReducer( state = initialData , action ){

    if(action.type == "ADD"){

        localStorage.setItem("todo" , JSON.stringify( [...state.todolist , action.payload ]  ))
        
        return {
            ...state,
            todolist : [...state.todolist , action.payload ] 
        }
    }
    if(action.type == "CHANGE"){

        localStorage.setItem("todo" , JSON.stringify(  action.payload.dta  ))
        localStorage.setItem("complete" , JSON.stringify( [...state.complete , action.payload.elem ]  ))
        
        return {
            ...state,
            todolist : action.payload.dta,
            complete : [...state.complete , action.payload.elem ] 
        }
        
    }

    if(action.type == "DELETE"){

        localStorage.setItem("todo" , JSON.stringify(  action.payload   ))
        return {
            ...state,
            todolist : action.payload
        }
        
    }

    if(action.type == "DELETEC"){

        localStorage.setItem("complete" , JSON.stringify(  action.payload   ))
        return {
            ...state,
            complete : action.payload
        }
        
    }

    return state;
}


export default MyReducer;