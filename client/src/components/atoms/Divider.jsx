import React from 'react';
import styled from 'styled-components';

const DividerContainer = styled.hr`
    height: 1px;
    border: none;
    background: ${props => ((props.fieldIsValid[0] || props.fieldIsValid[1]) ? '#DF5656' : '#C8CCD8')};
`

const Divider = ({fieldIsValid}) => {
    return (
        <DividerContainer  
            fieldIsValid={fieldIsValid}
        />
    )
}

export default Divider
