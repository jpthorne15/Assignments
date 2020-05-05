import React from "React"
import link from "react-router-dom"

const Navbar = () => (
    <div>
        <ul>
            <li>
                <Link to="/Register">Register</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            <li>
                <Link to="/Password">Password</Link>
            </li>    
        </ul>
    </div>
);