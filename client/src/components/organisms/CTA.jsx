import React from 'react';
import styled from 'styled-components';

const CTAContainer = styled.section`
    width: 100%;

    margin: 0 auto;
    padding: 0;
`;

const Box = styled.div`
    display: flex;
    flex-direction: ${props => (props.direction)};
    justify-content: ${props => (props.space)};
    align-items: center;
`;

const CTA = ({children, direction='row', space='space-between'}) => {
    return (
        <CTAContainer>
            <Box
                direction={direction}
                space={space}
            >
                {children}
            </Box>
        </CTAContainer>
    )
}

export default CTA
