import React from 'react';
import styled from 'styled-components';
import { device } from '../../particles/utils/devices';

const TimberContainer = styled.section`
    margin: 0 auto;
    margin-bottom: 200px;
    padding: 0;

`;

const Box = styled.div`
    display: flex;
    flex-direction: ${props => (props.direction)};
    align-items: center;
    justify-content: center;
    text-align: start;
    gap: 22px;
    padding-left: ${props => (props.pl[0])}px;

    position: ${props => (props.position)};

    & h1 { // Show Big Title
        display: none;

        @media ${device.mobileL} {
            display: block;
        }
    }

    @media ${device.tablet} {
        padding-left: ${props => (props.pl[1])}px;
    }

    @media ${device.laptop} {
        padding-left: ${props => (props.pl[2])}px;
    }
`;
{/** Timber is unic section/wrapper/component, use where you need it */}
const Timber = ({children, direction = 'column', position='inherit', pl=[0, 0, 0]}) => {
    return (
        <TimberContainer>
            <Box
                direction={direction}
                pl={pl}
                position={position}
            >
                {children}
            </Box>
        </TimberContainer>
    )
}

export default Timber
