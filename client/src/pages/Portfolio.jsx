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
                    bgImage={'https://i.pinimg.com/originals/e2/84/ed/e284ed95e721b6b5366136c2e6f53123.jpg'}
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
                    bgImage={'https://www.homeanddesign.com/wp-content/uploads/2019/06/MarkS_1.jpg'}
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
                bgImage={'https://www.busyboo.com/wp-content/uploads/small-house-design-eaves-2.jpg'}
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
                bgImage={'https://i.pinimg.com/736x/7c/ac/40/7cac403c7e6a2e7c28b910ebdcb279a2--croquis-architecture-architecture-portfolio.jpg'}
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
                bgImage={'https://api.web.designconnext.com/asset/image/architect-portfolio-workpiece/ca214790-5039-11ed-93a8-312f3dfbd916/e30/Residential-Design.png'}
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
            bgImage={'https://e0.pxfuel.com/wallpapers/844/462/desktop-wallpaper-skyline-red-sky-skyscrapers-bridge-modern-architecture-for-google-nexus-10-red-skyline-thumbnail.jpg'}
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
                bgImage={'https://i.pinimg.com/originals/e2/84/ed/e284ed95e721b6b5366136c2e6f53123.jpg'}
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
                bgImage={'https://www.homeanddesign.com/wp-content/uploads/2019/06/MarkS_1.jpg'}
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
            bgImage={'https://www.busyboo.com/wp-content/uploads/small-house-design-eaves-2.jpg'}
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
            bgImage={'https://i.pinimg.com/736x/7c/ac/40/7cac403c7e6a2e7c28b910ebdcb279a2--croquis-architecture-architecture-portfolio.jpg'}
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
            bgImage={'https://api.web.designconnext.com/asset/image/architect-portfolio-workpiece/ca214790-5039-11ed-93a8-312f3dfbd916/e30/Residential-Design.png'}
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
        bgImage={'https://e0.pxfuel.com/wallpapers/844/462/desktop-wallpaper-skyline-red-sky-skyscrapers-bridge-modern-architecture-for-google-nexus-10-red-skyline-thumbnail.jpg'}
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
