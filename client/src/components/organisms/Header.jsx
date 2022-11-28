import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import { client } from '../../particles/client';
import { useStateContext } from '../../particles/context/StateContext';
import { headerQuery } from '../../particles/utils/data';
import { device } from '../../particles/utils/devices';
import { Logo } from '../atoms'
import { NavBar } from '../moleculs'

const HeaderContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 32px;

    @media ${device.tablet} {
        margin: 56px 0px;
    }



`;

const Header = () => {
    const {header} = useStateContext();

    const {logo, link, pageName} = header;

    console.log('Header data', header);
    console.log('Logo data', logo);
    return (
        <HeaderContainer>
            <Logo logo={logo && logo} />
            <NavBar 
                links={link && link}
                pages={pageName && pageName}
            />
        </HeaderContainer>
    )
}

export default Header
