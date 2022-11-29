import React from 'react';
import styled from 'styled-components';
import { device } from '../../particles/utils/devices';

const EmployeesContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: start;
    /* width: 100%; */

    margin: 0 auto;
    margin-bottom: 200px;
    padding: 0;

    @media ${device.mobileL} {
        flex-direction: row;
    }
`;

const Employees = ({children}) => {
    return (
        <EmployeesContainer>
            {children}
        </EmployeesContainer>
    )
}

export default Employees
