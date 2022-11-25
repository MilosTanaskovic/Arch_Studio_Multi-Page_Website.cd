import React from 'react'
import styled from 'styled-components';
import { color } from '../../../particles/utils/colors';
import { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } from '../../../particles/utils/fonts';

const HeaderBox = styled.h1`
    margin: 0;
    
    font-family: ${fontFamily.leagueSpartan};
    font-size: ${fontSize.headingXL};
    font-weight: ${fontWeight.headingXL};
    letter-spacing: ${letterSpacing.headingXL};
    line-height: ${lineHeight.headingXL};

    color: ${color.veryLightGrey};

    position: ${props => (props.position)};
    top: ${props => (props.top)}px;
    left: ${props => (props.left)}px;
    right: ${props => (props.right)}px;
`;

const HeadingXL = ({children, position='inherit', top=0, left=0, right=0}) => {
    return (
        <HeaderBox
            position={position}
            top={top}
            left={left}
            right={right}
        >
            {children}
        </HeaderBox>
    )
}

export default HeadingXL
