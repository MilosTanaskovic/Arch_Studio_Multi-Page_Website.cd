import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
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

        & p {
            &:hover,
            &:active {
                color: ${color.veryDarkBlue};
            }
        }
    }
    @media ${device.tablet} {
        padding: 12px;
    }
`;


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
                <NavLink to={`${links[1]}`}> 
                    <Body>
                        {pages[1]}
                    </Body>
                </NavLink>
            </LiItem>
            <LiItem>
                <NavLink to={`${links[2]}`}>
                    <Body>
                        {pages[2]}
                    </Body>
                </NavLink>
            </LiItem>
            <LiItem>
                <NavLink to={`${links[3]}`}>
                    <Body>
                        {pages[3]}
                    </Body>
                </NavLink>
            </LiItem>
        
        </UlBox>
        )}
    </NavContainer>
        </>
    )
}

export default NavBar
