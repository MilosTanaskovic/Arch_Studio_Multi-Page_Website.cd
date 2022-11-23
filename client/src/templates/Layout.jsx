import React from 'react';
import styled from 'styled-components';

import Header from '../components/organisms/Header'
import { device } from '../particles/utils/devices';

const MainContainer = styled.div`
    display: inline-block;

    width: 100%;
    height: 100%;
    margin: auto;

    background-color: silver;

    @media ${device.mobileL} {
        max-width: 500px;
    }

    @media ${device.tablet} {
        max-width: 600px;
    }

    @media ${device.laptop} {
        max-width: 800px;
    }

    @media ${device.laptopL} {
        max-width: 1110px;
    }
`;


const Layout = ({children}) => {
    return (
        <MainContainer>
            {/** Header */}
            <Header />
            {/** Main */}
            <main>
                {children}
            </main>
            {/** Footer */}
            Footer
        </MainContainer>
    )
}

export default Layout
