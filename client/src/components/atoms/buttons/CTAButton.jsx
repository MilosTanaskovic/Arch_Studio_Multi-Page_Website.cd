import React from 'react';
import styled from 'styled-components';
import { color } from '../../../particles/utils/colors';
import ctaArrowRight from '../../../particles/assets/ctaarrowright.png'

const ButtonBox = styled.button`
    // Normal
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;

    max-height: 72px;

    padding: 23px 31px;

    background: ${color.veryDarkBlue};
    color: white;
    border: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }
    // Hover
    &:hover {
        background: ${color.darkGrey};
    }
    // Active
    &:active {
        background: ${color.lightGrey};
    }
`;

const CTAButton = ({children, type, handleCTA, classes}) => {
    return (
        <ButtonBox
            type={type}
            onClick={handleCTA}
            className={classes}
        >
            {children}
            <img src={ctaArrowRight} alt="call to action arrow"/>
        </ButtonBox>
    )
}

export default CTAButton
