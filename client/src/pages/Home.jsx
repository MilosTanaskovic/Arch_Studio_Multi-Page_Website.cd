import React from 'react';
import { Logo } from '../components/atoms';
import { CTAButton } from '../components/atoms/buttons';
import { Body, HeadingL, HeadingM, HeadingS, HeadingXL } from '../components/atoms/typography';
import { Product, TimberBoxImage, TimberBoxText } from '../components/moleculs';
import { Banner, CTA, Footer, Products, Timber } from '../components/organisms';
import { Layout } from '../templates';

const Home = () => {
    return (
        <Layout>
            {/** Banner Section (Hero) */}
            <Banner
              bgImage={'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_749,w_1000,x_0,y_0/c_limit,f_auto,fl_lossy,q_80,w_1080/Colonial_Heights_Residence_hrmww7.jpg'}
                height={720}
            >
                <HeadingL 
                    whiteColor
                >
                    Project Paramour
                </HeadingL>
                <Body
                    whiteColor
                >
                    Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.
                </Body>
                <CTAButton>
                    <Body whiteColor>
                        See Our Portfolio
                    </Body>
                </CTAButton>
            </Banner>
            {/** Page Section (Welcome) */}
            <Timber
                direction={'row'}
                pl={[32, 58, 168]}
                position={'relative'}
            >
                <HeadingXL
                    position={'absolute'}
                    top={-170}
                    left={0}
                >
                    Welcome
                </HeadingXL>

                <TimberBoxText
                    flex={2}
                >
                    <HeadingM >
                        Welcome to Arch Studio
                    </HeadingM>
                    <Body>
                        We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
                    </Body>
                    <Body>
                        Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
                    </Body>
                    <Body>
                        We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
                    </Body>
                </TimberBoxText>

                <TimberBoxImage
                    flex={1}
                    notVisibleMobile={true}
                >
                    <img src={'https://static.wikia.nocookie.net/poohadventures/images/5/59/Shinkai_haru3.png'} alt="welcome to Arch Studio" />
                </TimberBoxImage>
                
            </Timber>
            {/** Banner Section (AboutUs)*/}
            <Banner
              bgImage={'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2021/07/drinking-coffee-at-a-cafe-0722211.jpg'}
            >
                <HeadingL 
                    whiteColor
                >
                    Small team, big ideas
                </HeadingL>
                <CTAButton>
                    <Body whiteColor>
                        About Us
                    </Body>
                </CTAButton>
            </Banner>
            {/** CTA Section (Fatuted)*/}
            <CTA>
                <HeadingM>Featired</HeadingM>
                <CTAButton
                    type={'button'}
                >
                    <Body 
                        whiteColor
                    >
                        See All
                    </Body>
                </CTAButton>
            </CTA>
            {/** Products Section(Prosucts) */}
            <Products>
                <Product
                    bgImage={'https://e1.pxfuel.com/desktop-wallpaper/996/817/desktop-wallpaper-buildings-architecture-glass-dark-neon-3d-black-architecture-phone-thumbnail.jpg'}
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

                
            </Products>
        </Layout>
    )
}

export default Home
