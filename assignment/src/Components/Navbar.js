import React from 'react';
import './Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar(props) {
    return (
        <div>

            <div className='Navbar'>
                <h1>To-Do App</h1>
                <div className='buttons'>
                    
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/add">Add To-Do</NavLink>
                <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="incomplete">TaskList</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="complete">Complete</NavLink>
                
                </div>
            </div>
            
        </div>
    );
}

export default Navbar;