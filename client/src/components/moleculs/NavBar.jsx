import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const NavBar = ({links, pages}) => {
    return (
        <nav>
            {pages && (
            <ul>
                <li>
                    <NavLink to={`${links[0]}`}>{pages[0]}</NavLink>
                </li>
                <li>
                    <NavLink to={`${links[1]}`}>{pages[1]}</NavLink>
                </li>
                <li>
                    <NavLink to={`${links[2]}`}>{pages[2]}</NavLink>
                </li>
                <li>
                    <NavLink to={`${links[3]}`}>{pages[3]}</NavLink>
                </li>
              
            </ul>
            )}
        </nav>
    )
}

export default NavBar
