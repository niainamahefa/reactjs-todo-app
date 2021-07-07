import React from 'react';
import {NavLink} from 'react-router-dom'

import {FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash} from "react-icons/fa";

const NavBar = () => (
    <footer className="d-flex justify-content-between bg-dark p-3" id="mainFooter">
        <div className="btn-group">
            <NavLink to="/" className="btn btn-outline-dark bg-light"><FaListAlt /></NavLink>
            <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare /></NavLink>
            <NavLink to="/add-task" className="btn btn-outline-dark bg-light"><FaPlusSquare /></NavLink>
        </div>
        <button className="btn btn-outline-dark bg-light"><FaTrash /></button>
    </footer>
)

export default NavBar