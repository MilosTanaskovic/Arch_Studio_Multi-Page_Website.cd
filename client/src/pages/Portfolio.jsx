import React from 'react';
import { Body, HeadingS } from '../components/atoms/typography';
import { Product } from '../components/moleculs';
import { Products } from '../components/organisms';
import { Layout } from '../templates';

const Portfolio = () => {
    return (
        <Layout>
             {/** Products Section(Prosucts) */}
             <Products>
                <Product
                    bgImage={'https://s3.us-east-1.amazonaws.com/sectigo-sites-web/global/images/Sectigo/blog/Website-Monitoring-6-3-21-1.jpeg'}
                >
                    <HeadingS
                        whiteColor
                    >
                        Project One
                    </HeadingS>
                    <Body
                        whiteColor
                    >
                        Description
                    </Body>
                </Product>

                <Product
                    bgImage={'https://s3.us-east-1.amazonaws.com/sectigo-sites-web/global/images/Sectigo/blog/Website-Monitoring-6-3-21-1.jpeg'}
                >
                    <HeadingS
                        whiteColor
                    >
                        Project One
                    </HeadingS>
                    <Body
                        whiteColor
                    >
                        Description
                    </Body>
                </Product>

                <Product
                bgImage={'https://s3.us-east-1.amazonaws.com/sectigo-sites-web/global/images/Sectigo/blog/Website-Monitoring-6-3-21-1.jpeg'}
                >
                    <HeadingS
                        whiteColor
                    >
                        Project One
                    </HeadingS>
                    <Body
                        whiteColor
                    >
                        Description
                    </Body>
                </Product>
                <Product
                bgImage={'https://s3.us-east-1.amazonaws.com/sectigo-sites-web/global/images/Sectigo/blog/Website-Monitoring-6-3-21-1.jpeg'}
            >
                <HeadingS
                    whiteColor
                >
                    Project One
                </HeadingS>
                <Body
                    whiteColor
                >
                    Description
                </Body>
            </Product>

            <Product
                bgImage={'https://s3.us-east-1.amazonaws.com/sectigo-sites-web/global/images/Sectigo/blog/Website-Monitoring-6-3-21-1.jpeg'}
            >
                <HeadingS
                    whiteColor
                >
                    Project One
                </HeadingS>
                <Body
                    whiteColor
                >
                    Description
                </Body>
            </Product>

            <Product
            bgImage={'https://s3.us-east-1.amazonaws.com/sectigo-sites-web/global/images/Sectigo/blog/Website-Monitoring-6-3-21-1.jpeg'}
            >
                <HeadingS
                    whiteColor
                >
                    Project One
                </HeadingS>
                <Body
                    whiteColor
                >
                    Description
                </Body>
            </Product>
                
            </Products>
        </Layout>
    )
}

export default Portfolio
