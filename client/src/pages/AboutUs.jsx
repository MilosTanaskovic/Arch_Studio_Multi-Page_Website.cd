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
                    About Us
                </HeadingXL>

                <TimberBoxImage
                    flex={1}
                    notVisibleMobile={false}
                >
                    <img height="720px" src={'https://www.appnwebtechnologies.com/public/images/section/1622706126bannerwebpage.png'} alt="welcome to Arch Studio" />
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
                    <img src={'https://lrt.com.pk/wp-content/uploads/2021/12/macbook1.png'} alt="welcome to Arch Studio" />
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
                        <img width='100%' src={'https://cdn0.iconfinder.com/data/icons/virus-and-hacker/512/security-computer-internet-technology-512.png'} alt="" />
                        <HeadingS>
                            Jake Richards
                        </HeadingS>
                        <Body>
                        Chief Architect
                        </Body>
                    </Employe>
                    <Employe>
                        <img width='100%' src={'https://img.freepik.com/premium-vector/african-american-man-avatar-portrait-young-guy-vector-illustration-face_217290-910.jpg'} alt="" />
                        <HeadingS>
                        Thompson Smith
                        </HeadingS>
                        <Body>
                        Head of Finance
                        </Body>
                    </Employe>
                    <Employe>
                        <img width='100%' src={'https://cdn4.iconfinder.com/data/icons/people-avatar-1-2/512/7-512.png'} alt="" />
                        <HeadingS>
                        Jackson Rourke
                        </HeadingS>
                        <Body>
                        Lead Designer
                        </Body>
                    </Employe>
                    <Employe>
                        <img width='100%' src={'https://cdn-icons-png.flaticon.com/512/3749/3749780.png'} alt="" />
                        <HeadingS>
                        Maria Simpson
                        </HeadingS>
                        <Body>
                        Senior Architect
                        </Body>
                    </Employe>
                </EmployeesTumb>
            </Employees>
        </Layout>
    )
}

export default AboutUs
