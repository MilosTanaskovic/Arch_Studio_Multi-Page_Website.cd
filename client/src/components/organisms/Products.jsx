import React from 'react';
import styled from 'styled-components'

const ProductsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-gap: 2rem;
    justify-content: start;
    /* width: 100%; */

    margin: 0 auto;
    margin-bottom: 200px;
    padding: 0;
`;

const Products = ({children}) => {
    return (
        <ProductsContainer>
            {children}
        </ProductsContainer>
    )
}

export default Products
