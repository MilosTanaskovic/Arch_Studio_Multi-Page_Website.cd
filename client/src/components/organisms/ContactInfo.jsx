import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
    margin: 0 auto;
    margin-bottom: 160px;
    padding: 0;
`;

const ContactBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;


`;

const ContactInfo = ({children}) => {
    return (
        <ContactContainer>
            <ContactBox>
                {children}
            </ContactBox>
        </ContactContainer>
    )
}

export default ContactInfo;
