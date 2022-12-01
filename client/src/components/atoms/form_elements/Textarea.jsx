import React from 'react';
import styled from 'styled-components';
import { Divider } from '..';

const TextareaContainer = styled.div`
    width: 100%;

    & label {
        position: absolute;
        color: #C8CCD8;
    }

    & textarea {
        border: none;

        width: inherit;
    }
`;

const Textarea = ({id, labelText, value, handleChangeTxtareaValue, handleBlurInputValue}) => {
    return (
        <TextareaContainer>
            {/*<label className="label" htmlFor={id}>{labelText}</label>*/}
            <textarea
                id={id}  
                value={value}
                placeholder={labelText}
                onChange={handleChangeTxtareaValue}
                onBlur={handleBlurInputValue}
            />
            <Divider />
        </TextareaContainer>
    )
}

export default Textarea
