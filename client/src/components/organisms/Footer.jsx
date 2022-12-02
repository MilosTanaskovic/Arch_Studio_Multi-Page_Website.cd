import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../particles/context/StateContext';
import { device } from '../../particles/utils/devices';
import { Logo } from '../atoms';
import { CTAButton } from '../atoms/buttons';
import { Body } from '../atoms/typography';
import { NavBar } from '../moleculs';

const FooterContainer = styled.section`
    width: 100%;

    margin: 0 auto;
    padding: 0;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: inherit;

        max-height: 200px;  
    }

`;

const LogoBox = styled.span`
    position: absolute;
    top: -100px;

    padding: 80px 50px;
    background: #1B1D23;

    @media ${device.tablet} {
        position: inherit;
        top: inherit;
    }
`;

const NavBarBox = styled.span`
    padding: 150px 0px;
    background: #EEEFF4;

    width: 100%;

    @media ${device.tablet} {
        padding: 60px 0px;
    }
`;

const BtnBox = styled.span`
    position: absolute;
    bottom: 40px;
    @media ${device.tablet} {
        right: 0;
        bottom: inherit;  
    }

`;

const Footer = () => {
    const {header} = useStateContext();

    const {logoWhite, link, pageName} = header;
    return (
        <FooterContainer>
            <Box>
                <LogoBox>
                    <Logo
                        logo={logoWhite && logoWhite} 
                    />
                </LogoBox>
                <NavBarBox>
                    <NavBar
                        links={link && link}
                        pages={pageName && pageName}
                    />
                </NavBarBox>
                <BtnBox>
                    <CTAButton
                        p={32}
                    >
                        <Body whiteColor>
                            See Our Portfolio
                        </Body>
                    </CTAButton>
                </BtnBox>
            </Box>
        </FooterContainer>
    )
}

export default Footer
