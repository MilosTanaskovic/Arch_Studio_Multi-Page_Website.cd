import React from 'react';
import styled from 'styled-components';

const EmployeContainer = styled.div`
    
`;

const Employe = ({children}) => {
    return (
        <EmployeContainer>
            {children}
        </EmployeContainer>
    )
}

export default Employe
