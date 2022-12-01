import React from 'react';
import styled from 'styled-components';
import { Divider } from '..';

const InputContainer = styled.div`
    width: 100%;

    & label {
        position: absolute;
        color: #C8CCD8;
    }
    & input {
        border: none;

        width: inherit;
    }
`;

// inputs type: name, email...
const Input = ({labelText, type, id, value, handleChangeInputValue, handleBlurInputValue}) => {
    return (
        <InputContainer>
            {/*<label htmlFor={id}> {labelText} </label>*/}
            <input 
                type={type}
                id={id}
                placeholder={labelText}
                value={value}
                onChange={handleChangeInputValue}
                onBlur={handleBlurInputValue}
            />
            <Divider />
        </InputContainer>
    )
}

export default Input
