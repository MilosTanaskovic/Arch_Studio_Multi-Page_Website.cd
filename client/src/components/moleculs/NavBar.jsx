import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { color } from '../../particles/utils/colors';
import { device } from '../../particles/utils/devices';
import { HamburgerBtn } from '../atoms/buttons';
import { Body } from '../atoms/typography';

const NavContainer = styled.nav`
    display: none;
    @media ${device.mobileL} {
        display: block;
    }
`;

const UlBox = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    list-style-type: none;
    margin: 0;
    padding: 0;

    @media ${device.mobileL} {
        flex-direction: row;
    }
`;

const LiItem = styled.li`
    padding: 8px;
    
    & a {
        text-decoration: none;

        &:hover,
        &:active {
            color: ${color.veryDarkBlue};

        }
    }
    
    @media ${device.tablet} {
        padding: 12px;
    }
`;

let activeStyle = {
    color: '#1B1D23',
    paddingBottom: '2px',
    borderBottom: '1px solid #1B1D23',
}

let notActiveStyle = {
    color: '#7D828F',
}

const NavBar = ({links, pages, p=0, bgColor='inherit'}) => {
    const [isActiveNav, setIsActiveNav] = useState(false);
    return (
        <>     
        <HamburgerBtn />
        <NavContainer>
        {pages && (
        <UlBox>
            {/*
            <LiItem>
                <NavLink to={`${links[0]}`}>
                    <Body>
                        {pages[0]}
                    </Body>
                </NavLink>
            </LiItem>*/}
            <LiItem>
                <Body>
                    <NavLink 
                        style={({isActive}) => isActive ? activeStyle : notActiveStyle} 
                        to={`${links[1]}`}
                    >     
                        {pages[1]}             
                    </NavLink>
                </Body>
            </LiItem>
            <LiItem>
                <Body>
                    <NavLink 
                        style={({isActive}) => isActive ? activeStyle : notActiveStyle}
                        to={`${links[2]}`}
                    > 
                        {pages[2]}    
                    </NavLink>
                </Body>
            </LiItem>
            <LiItem>
                <Body>
                    <NavLink 
                        style={({isActive}) => isActive ? activeStyle : notActiveStyle}
                        to={`${links[3]}`}
                    >
                        {pages[3]}
                    </NavLink>
                </Body>
            </LiItem>
        
        </UlBox>
        )}
    </NavContainer>
        </>
    )
}

export default NavBar
