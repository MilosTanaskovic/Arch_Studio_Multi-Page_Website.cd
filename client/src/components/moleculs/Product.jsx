import React from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    align-items: flex-end;

    width: 100%;
    height: 560px;

    background: url(${props => props.bgImage}) no-repeat center;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    
    padding: 40px;
`;

const Product = ({children, bgImage}) => {
    return (
        <ProductContainer
            bgImage={bgImage}
        >
            <Box>
                {children}
            </Box>
        </ProductContainer>
    )
}

export default Product
