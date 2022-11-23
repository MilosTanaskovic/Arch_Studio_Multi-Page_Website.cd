import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { device } from '../../particles/utils/devices';

const NavContainer = styled.nav`
    
`;

const UlBox = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    list-style-type: none;
    margin: 0;
    padding: 0;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

const LiItem = styled.li`
    padding: 8px;

    @media ${device.tablet} {
        padding: 20px;
    }

    
`;


const NavBar = ({links, pages}) => {
    return (
        <NavContainer>
            {pages && (
            <UlBox>
                <LiItem>
                    <NavLink to={`${links[0]}`}>{pages[0]}</NavLink>
                </LiItem>
                <LiItem>
                    <NavLink to={`${links[1]}`}>{pages[1]}</NavLink>
                </LiItem>
                <LiItem>
                    <NavLink to={`${links[2]}`}>{pages[2]}</NavLink>
                </LiItem>
                <LiItem>
                    <NavLink to={`${links[3]}`}>{pages[3]}</NavLink>
                </LiItem>
              
            </UlBox>
            )}
        </NavContainer>
    )
}

export default NavBar
