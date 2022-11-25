import React from 'react'
import styled from 'styled-components';
import { color } from '../../../particles/utils/colors';
import { fontFamily, fontSize, fontWeight, letterSpacing, lineHeight } from '../../../particles/utils/fonts';

const BodyBox = styled.p`
    font-family: ${fontFamily.leagueSpartan};
    font-size: ${fontSize.body};
    font-weight: ${fontWeight.body};
    letter-spacing: ${letterSpacing.body};
    line-height: ${lineHeight.body};

    color: ${props => (props.whiteColor ? 'white' : color.darkGrey)};
`;

const Body = ({children, whiteColor = false}) => {
    return (
        <BodyBox
            whiteColor={whiteColor}
        >
           {children} 
        </BodyBox>
    )
}

export default Body
