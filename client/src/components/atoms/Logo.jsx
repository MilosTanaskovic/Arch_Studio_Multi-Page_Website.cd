import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { urlFor } from '../../particles/client';

const LogoConatiner = styled.span`

`;


const Logo = ({logo}) => {
    return (
        <LogoConatiner>
            <Link to="/">
                <img src={logo && urlFor(logo)} alt="Arch Logo" />
            </Link>
        </LogoConatiner>
    )
}

export default Logo
