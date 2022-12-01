import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { CTAButton } from '../atoms/buttons';
import { Input, Textarea } from '../atoms/form_elements';

const FormConatiner = styled.form`
    display: flex;
    flex-direction: column;
    align-items: end;

    flex: ${props => (props.flex)};

    width: 100%;
`;

const Form = ({flex}) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    //const [formIsValid, setFormIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    let formIsValid = false;

    //const enteredNameIsValid = enteredName.trim() !== '';
    const enteredValueIsValid = {
        name: enteredName.trim() !== '',
        email: enteredEmail.includes('@'),
        message: enteredMessage.trim() !== '',
    }
    //const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const valueIsValid = {
        name: !enteredValueIsValid.name && enteredNameTouched,
        email: !enteredValueIsValid.email && enteredNameTouched,
        message: !enteredValueIsValid.message && enteredNameTouched,
    }

    if(enteredValueIsValid.name && enteredValueIsValid.email && enteredValueIsValid.message) {
        formIsValid = true;
    } 

    // useEffect(() => {
    //     if(enteredValueIsValid.name && enteredValueIsValid.email && enteredValueIsValid.message) {
    //         setFormIsValid(true);
    //     } else {
    //         setFormIsValid(false);
    //     }

    // }, [enteredValueIsValid.name, enteredValueIsValid.email, enteredValueIsValid.message]);

    const handleChangeNameValue = (event) => {
        setEnteredName(event.target.value);
    }

    const handleChangeEmailValue = (event) => {
        setEnteredEmail(event.target.value);
    }

    const handleChangeMessageValue = (event) => {
        setEnteredMessage(event.target.value);
    }

    const handleBlurInputValue = () => {
        setEnteredNameTouched(true);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if(!enteredValueIsValid.name && !enteredValueIsValid.email && !enteredValueIsValid.message) {
            return;
        }

        console.log(enteredName);
        console.log(enteredEmail);
        console.log(enteredMessage);

        setEnteredName('');
        setEnteredEmail('');
        setEnteredMessage('');
        setEnteredNameTouched(false);
    }

    return (
        <FormConatiner onSubmit={handleSubmit} flex={flex}>
            <Input 
                type={'text'}
                id={'name'}
                value={enteredName}
                handleChangeInputValue={handleChangeNameValue}
                handleBlurInputValue={handleBlurInputValue}
                labelText={'Name'}
            />
            {valueIsValid.name && <p style={{color: 'red'}}>Can't be empty</p>}
            <Input 
                type={'email'}
                id={'email'}
                value={enteredEmail}
                handleChangeInputValue={handleChangeEmailValue}
                handleBlurInputValue={handleBlurInputValue}
                labelText={'Email'}
            />
            {valueIsValid.email && <p style={{color: 'red'}}>Can't be empty</p>}
            <Textarea 
                id={'message'}
                value={enteredMessage}
                handleChangeTxtareaValue={handleChangeMessageValue}
                handleBlurInputValue={handleBlurInputValue}
                labelText={'Message'}
            />
            {valueIsValid.message && <p style={{color: 'red'}}>Can't be empty</p>}
            <CTAButton disabled={!formIsValid} />
        </FormConatiner>
    )
}

export default Form
