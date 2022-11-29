import React from 'react';
import { Body, HeadingM, HeadingS, HeadingXL } from '../components/atoms/typography';
import { Employe, TimberBoxImage, TimberBoxText } from '../components/moleculs';
import { Employees, EmployeesTumb, Timber } from '../components/organisms';
import { Layout } from '../templates';


const AboutUs = () => {
    return (
        <Layout>
            {/** Page Section (Welcome) */}
            <Timber
                direction={'row'}
                position={'relative'}
                alignItems={'end'}
            >
                <HeadingXL
                    position={'absolute'}
                    top={30}
                    right={0}
                >
                    Welcome
                </HeadingXL>

                <TimberBoxImage
                    flex={1}
                    notVisibleMobile={false}
                >
                    <img src={'https://c8.alamy.com/comp/HN7DBW/boys-and-girls-with-the-word-welcome-HN7DBW.jpg'} alt="welcome to Arch Studio" />
                </TimberBoxImage>
                <TimberBoxText
                    flex={1}
                >
                    <HeadingM >
                        Your team of professionals
                    </HeadingM>
                    <Body>
                    Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.
                    </Body>
                </TimberBoxText>
                
            </Timber>
            {/** Page Section (Our Heritage) */}
            <Timber
                direction={'row'}
                position={'relative'}
                alignItems={'end'}
            >
                <TimberBoxText
                    flex={1}
                >
                    <HeadingM >
                        Our 
                        Heritage
                    </HeadingM>
                    <Body>
                    Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
                    </Body>
                    <Body>
                    Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
                    </Body>
                    <Body>
                    Our small team of world-class professionals provides input on every project.
                    </Body>
                </TimberBoxText>
                <TimberBoxImage
                    flex={1}
                    notVisibleMobile={false}
                >
                    <img src={'https://c8.alamy.com/comp/HN7DBW/boys-and-girls-with-the-word-welcome-HN7DBW.jpg'} alt="welcome to Arch Studio" />
                </TimberBoxImage>
                
            </Timber>
            {/** Page Section (The Leaders) */}
            <Employees>
                <HeadingM
                    flex={1}
                >
                    The Leaders
                </HeadingM>
                <EmployeesTumb
                    flex={2}
                >
                    <Employe>
                        <img width="150" src={'https://c8.alamy.com/comp/HN7DBW/boys-and-girls-with-the-word-welcome-HN7DBW.jpg'} alt="" />
                        <HeadingS>
                            Milos Tanaskovic
                        </HeadingS>
                        <Body>
                            Senior JS/React Engeneer
                        </Body>
                    </Employe>
                    <Employe>
                        <img width="150" src={'https://c8.alamy.com/comp/HN7DBW/boys-and-girls-with-the-word-welcome-HN7DBW.jpg'} alt="" />
                        <HeadingS>
                            Milos Tanaskovic
                        </HeadingS>
                        <Body>
                            Senior JS/React Engeneer
                        </Body>
                    </Employe>
                    <Employe>
                        <img width="150" src={'https://c8.alamy.com/comp/HN7DBW/boys-and-girls-with-the-word-welcome-HN7DBW.jpg'} alt="" />
                        <HeadingS>
                            Milos Tanaskovic
                        </HeadingS>
                        <Body>
                            Senior JS/React Engeneer
                        </Body>
                    </Employe>
                    <Employe>
                        <img width="150" src={'https://c8.alamy.com/comp/HN7DBW/boys-and-girls-with-the-word-welcome-HN7DBW.jpg'} alt="" />
                        <HeadingS>
                            Milos Tanaskovic
                        </HeadingS>
                        <Body>
                            Senior JS/React Engeneer
                        </Body>
                    </Employe>
                </EmployeesTumb>
            </Employees>
        </Layout>
    )
}

export default AboutUs
