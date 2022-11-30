import React from 'react';
import styled from 'styled-components';

const TextareaContainer = styled.div`

`;

const Textarea = ({id, labelText, value, handleChangeTxtareaValue}) => {
    return (
        <div>
            <label htmlFor={id}>{labelText}</label>
            <textarea
                id={id}  
                value={value}
                onChange={handleChangeTxtareaValue}
            />
        </div>
    )
}

export default Textarea
