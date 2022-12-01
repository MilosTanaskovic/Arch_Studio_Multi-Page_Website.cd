import React from 'react';
import styled from 'styled-components';
import { Divider } from '..';
import { Body } from '../typography';

const TextareaContainer = styled.div`
    position: relative;
    width: 100%;

    padding-top: 41px;

    & label {
        position: absolute;
        color: #C8CCD8;
    }

    & textarea {
        border: none;
        height: 20px;
        width: inherit;

        &::placeholder {
            color: ${props => ((props.messageIsValid) ? '#DF5656' : '#C8CCD8')};
        }
    }

    & p {
        position: absolute;
        top: 20px;
        right: 0px;
        color: #DF5656;
    }
`;

const Textarea = ({id, labelText, value, handleChangeTxtareaValue, handleBlurInputValue, messageIsValid}) => {
    return (
        <TextareaContainer
            messageIsValid={messageIsValid}
        >
            {/*<label className="label" htmlFor={id}>{labelText}</label>*/}
            <textarea
                id={id}  
                value={value}
                placeholder={labelText}
                onChange={handleChangeTxtareaValue}
                onBlur={handleBlurInputValue}
            />
            {(messageIsValid) && <Body>Can't be empty</Body>} 
            <Divider fieldIsValid={[messageIsValid]} />
        </TextareaContainer>
    )
}

export default Textarea
