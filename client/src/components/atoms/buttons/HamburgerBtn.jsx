import React from 'react';
import styled from 'styled-components';
import { device } from '../../../particles/utils/devices';

const SvgBox = styled.svg`
    display: block;

    @media ${device.mobileL} {
        display: none;
    }
`;

const HamburgerBtn = () => {
    return (
        <SvgBox width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
                <rect id="Rectangle" width="24" height="3" fill="#1B1D23"/>
                <rect id="Rectangle Copy 2" y="7" width="24" height="3" fill="#1B1D23"/>
                <rect id="Rectangle Copy 3" y="14" width="24" height="3" fill="#1B1D23"/>
            </g>
        </SvgBox>
    )
}

export default HamburgerBtn
