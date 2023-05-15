import React from 'react';
import {Route , Routes} from 'react-router-dom'
import Incomplete from '../pages/Incomplete';
import Complete from '../pages/Complete';
import AddTask from '../pages/AddTask';
function AllRoutes(props) {
    return (
        <div>
            <Routes> 
                
                <Route path='/add' element={  <AddTask/>  }></Route>
                <Route path='/incomplete' element={  <Incomplete/>  }></Route>
                <Route path='/complete' element={  <Complete/>  }></Route>
                
            </Routes>
            
        </div>
    );
}

export default AllRoutes;