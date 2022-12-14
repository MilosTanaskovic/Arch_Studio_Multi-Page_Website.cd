import React from 'react'
import styled from 'styled-components';
import { color } from '../../../particles/utils/colors';
import { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } from '../../../particles/utils/fonts';

const HeaderBox = styled.h3`
    margin: 0;
    
    font-family: ${fontFamily.leagueSpartan};
    font-size: ${fontSize.headingM};
    font-weight: ${fontWeight.headingM};
    letter-spacing: ${letterSpacing.headingM};
    line-height: ${lineHeight.headingM};

    color: ${props => (props.whiteColor ? 'white' : color.veryDarkBlue )};

    flex: ${props => (props.flex)};
`;

const HeadingM = ({children, flex, whiteColor = false}) => {
    return (
        <HeaderBox
            flex={flex}
            whiteColor={whiteColor}
        >
            {children}
        </HeaderBox>
    )
}

export default HeadingM
