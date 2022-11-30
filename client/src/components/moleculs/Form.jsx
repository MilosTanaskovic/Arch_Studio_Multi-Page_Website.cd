import React, {useState} from 'react';
import styled from 'styled-components';
import { CTAButton } from '../atoms/buttons';
import { Input, Textarea } from '../atoms/form_elements';

const FormConatiner = styled.form`

`;

const handleSubmit = (event) => {
    event.preventDefault();
}

const Form = () => {
    return (
        <FormConatiner onSubmit={handleSubmit}>
            <Input 
                type={'text'}
                id={'name'}
                value={'v'}
                handleChangeInputValue={'f'}
                labelText={'Name'}
            />
            <Input 
                type={'email'}
                id={'email'}
                value={'v'}
                handleChangeInputValue={'f'}
                labelText={'Email'}
            />
            <Textarea 
                id={'message'}
                value={'v'}
                handleChangeTxtareaValue={'f'}
                labelText={'Message'}
            />
            <CTAButton> </CTAButton>
        </FormConatiner>
    )
}

export default Form
