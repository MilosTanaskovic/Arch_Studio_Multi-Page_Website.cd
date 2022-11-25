import React from 'react'
import styled from 'styled-components';
import { device } from '../../particles/utils/devices';

const TimberImgContainer = styled.div`
    flex: ${props => (props.flex)};
    margin: 0 auto;

    display: ${props => (props.notVisibleMobile ? 'none' : 'block')};

    @media ${device.tablet} {
        display: block;
    }
`;

const Box = styled.div`
     width: 100%;

     & img {
         width: ${props => (props.width)};
     }
`;

// single img or/and list of imgs
const TimberBoxImage = ({children, width='inherit', flex=0, notVisibleMobile=false}) => {
    return (
        <TimberImgContainer
            flex={flex}
            notVisibleMobile={notVisibleMobile}
        >
            <Box
                width={width}
            >
                {children}
            </Box>
        </TimberImgContainer>
    )
}

export default TimberBoxImage
