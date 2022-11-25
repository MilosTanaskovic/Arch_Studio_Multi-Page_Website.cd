import React from 'react';
import styled from 'styled-components';
import { color } from '../../../particles/utils/colors';
import { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } from '../../../particles/utils/fonts';

const HeaderBox = styled.h4`
    margin: 0;
    
    font-family: ${fontFamily.leagueSpartan};
    font-size: ${fontSize.headingS};
    font-weight: ${fontWeight.headingS};
    letter-spacing: ${letterSpacing.headingS};
    line-height: ${lineHeight.headingS};

    color: ${props => (props.whiteColor ? 'white' : color.veryDarkBlue )};
`;

const HeadingS = ({children, whiteColor = false}) => {
    return (
        <HeaderBox
            whiteColor={whiteColor}
        >
            {children}
        </HeaderBox>
    )
}

export default HeadingS
