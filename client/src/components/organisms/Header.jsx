import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import { client } from '../../particles/client';
import { headerQuery } from '../../particles/utils/data';
import { device } from '../../particles/utils/devices';
import { Logo } from '../atoms'
import { NavBar } from '../moleculs'

const HeaderContainer = styled.header`
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
    const [header, setHeader] = useState([]);

    const {logo, link, pageName} = header;

    useEffect(() => {
      const query = headerQuery();

      client.fetch(query)
        .then((data) => {
            setHeader(data[0]);
        })
    }, []);

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
