import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`

`;

// inputs type: name, email...
const Input = ({labelText, type, id, value, handleChangeInputValue}) => {
    return (
        <InputContainer>
            <label htmlFor={id}> {labelText} </label>
            <input 
                type={type}
                id={id}
                value={value}
                onChange={handleChangeInputValue}
            />
        </InputContainer>
    )
}

export default Input
