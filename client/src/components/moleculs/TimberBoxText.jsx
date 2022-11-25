import React from 'react';
import styled from 'styled-components';

const TimberTextContainer = styled.div`
    flex: ${props => (props.flex)};

    width: 100%;

    margin: 0 auto;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: start;
`;

// invoke always inside the Timber organism
const TimberBoxText = ({children, flex=0}) => {
    return (
        <TimberTextContainer
            flex={flex}
        >
            <Box>
                {children}
            </Box>
        </TimberTextContainer>
    )
}

export default TimberBoxText
