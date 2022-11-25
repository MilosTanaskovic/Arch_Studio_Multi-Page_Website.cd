import React from 'react'
import styled from 'styled-components';
import { color } from '../../../particles/utils/colors';
import { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } from '../../../particles/utils/fonts';

const HeaderBox = styled.h2`
    margin: 0;
    
    font-family: ${fontFamily.leagueSpartan};
    font-size: ${fontSize.headingL};
    font-weight: ${fontWeight.headingL};
    letter-spacing: ${letterSpacing.headingL};
    line-height: ${lineHeight.headingL};

    color: ${props => (props.whiteColor ? 'white' : color.veryDarkBlue )};
`;

const HeadingL = ({children, whiteColor = false}) => {
    return (
        <HeaderBox
            whiteColor={whiteColor}
        >
            {children}
        </HeaderBox>
    )
}

export default HeadingL
