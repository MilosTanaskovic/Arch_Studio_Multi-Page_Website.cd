import React from 'react';
import styled from 'styled-components';

const EmployeesTumbContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    grid-gap: 2rem;
    justify-content: start;
    
    flex: ${props => (props.flex)};
`;

const EmployeesTumb = ({children, flex}) => {
    return (
        <EmployeesTumbContainer
            flex={flex}
        >
            {children}
        </EmployeesTumbContainer>
    )
}

export default EmployeesTumb
