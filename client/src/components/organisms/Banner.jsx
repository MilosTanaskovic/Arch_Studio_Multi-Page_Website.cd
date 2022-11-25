import React from 'react'
import styled from 'styled-components';
import { device } from '../../particles/utils/devices';

const BannerContainer = styled.section`
    display: flex;
    align-items: center;

    margin: 0 auto;
    margin-bottom: 200px;

    min-height: 560px;
    max-height: 720px;

    background: url(${props => props.bgImage}) no-repeat center;
    /* background-size: contain; */
`

const Box = styled.div`
    /* Center vertically */
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: flex-start;
    gap: 10px;

    padding: 0px 32px;

    @media ${device.tablet} {
        padding: 0px 58px;
    }

    @media ${device.laptop} {
        padding: 0px 168px;
    }
`

const Banner = ({children, bgColor, bgImage}) => {
    return (
        <BannerContainer
            bgColor={bgColor}
            bgImage={bgImage}
        >
            <Box>
                {children}
            </Box>
        </BannerContainer>
    )
}

export default Banner
