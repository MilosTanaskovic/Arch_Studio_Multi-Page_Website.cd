import React from 'react'
import { Link } from 'react-router-dom'
import { urlFor } from '../../particles/client'

const Logo = ({logo}) => {
    return (
        <h1>
            <Link to="/">
                <img src={logo && urlFor(logo)} alt="Arch Logo" />
            </Link>
        </h1>
    )
}

export default Logo
