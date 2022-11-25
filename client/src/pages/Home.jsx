import React from 'react';
import { CTAButton } from '../components/atoms/buttons';
import { Body, HeadingL, HeadingM, HeadingXL } from '../components/atoms/typography';
import { TimberBoxImage, TimberBoxText } from '../components/moleculs';
import { Banner, CTA, Timber } from '../components/organisms';
import { Layout } from '../templates';

const Home = () => {
    return (
        <Layout>
            {/** Banner Section (Hero) */}
            <Banner
              bgImage={'https://s3.us-east-1.amazonaws.com/sectigo-sites-web/global/images/Sectigo/blog/Website-Monitoring-6-3-21-1.jpeg'}
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
                    <img src={'https://c8.alamy.com/comp/HN7DBW/boys-and-girls-with-the-word-welcome-HN7DBW.jpg'} alt="welcome to Arch Studio" />
                </TimberBoxImage>
                
            </Timber>
            {/** Banner Section (AboutUs)*/}
            <Banner
              bgImage={'https://s3.us-east-1.amazonaws.com/sectigo-sites-web/global/images/Sectigo/blog/Website-Monitoring-6-3-21-1.jpeg'}
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
            <CTA >
                <HeadingM>Featired</HeadingM>
                <CTAButton
                    type={'button'}
                >
                    See All
                </CTAButton>
            </CTA>
            {/** Products Section(Prosucts) */}

            {/** Footer Section (Footer) */}
        </Layout>
    )
}

export default Home
