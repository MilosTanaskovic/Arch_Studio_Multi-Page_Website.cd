import React from 'react';
import styled from 'styled-components';
import { Divider } from '..';
import { Body } from '../typography';

const InputContainer = styled.div`
    width: 100%;
    position: relative;

    padding-top: 41px;

    & label {
        position: absolute;
        color: #C8CCD8;
    }
    & input {
        border: none;
        height: 20px;

        width: inherit;

        &::placeholder {
            color: ${props => ((props.nameIsValid || props.emailIsValid) ? '#DF5656' : '#C8CCD8')};
        }
    }

    & p {
        position: absolute;
        top: 20px;
        right: 0px;
        color: #DF5656;
    }


`;

// inputs type: name, email...
const Input = ({labelText, type, id, value, handleChangeInputValue, handleBlurInputValue, nameIsValid, emailIsValid}) => {
    return (
        <InputContainer
            nameIsValid={nameIsValid}
            emailIsValid={emailIsValid}
        >
            {/*<label htmlFor={id}> {labelText} </label>*/}
            <input 
                type={type}
                id={id}
                placeholder={labelText}
                value={value}
                onChange={handleChangeInputValue}
                onBlur={handleBlurInputValue}
            />
            {(nameIsValid || emailIsValid) && <Body>Can't be empty</Body>} 
           
            <Divider 
                fieldIsValid={[nameIsValid,emailIsValid]} 
            />
        </InputContainer>
    )
}

export default Input
