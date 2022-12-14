import React from 'react'
import { CTAButton } from '../components/atoms/buttons';
import { Body, HeadingM, HeadingXL } from '../components/atoms/typography';
import { Form, TimberBoxImage, TimberBoxText } from '../components/moleculs';
import { ContactInfo, Timber } from '../components/organisms';
import { Layout } from '../templates';

const Contact = () => {
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
                    Contact
                </HeadingXL>

                <TimberBoxImage
                    flex={1}
                    notVisibleMobile={false}
                >
                    <img width="635px" height="720px" src={'https://purepng.com/public/uploads/large/purepng.com-black-phonephoneconversationwire-communicationtelephonecablestransmissionblack-1421526587344olvcv.png'} alt="welcome to Arch Studio" />
                </TimberBoxImage>
                <TimberBoxText
                    flex={1}
                >
                    <HeadingM >
                        Tell us about your project
                    </HeadingM>
                    <Body>
                    We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
                    </Body>
                </TimberBoxText>
                
            </Timber>
            {/** Page Section (Contact Details) */}
            <Timber
                direction={'row'}
                position={'relative'}
                alignItems={'start'}
            >
                <HeadingM flex={1}>
                    Contact Details
                </HeadingM>
                <TimberBoxText flex={1}>
                    <Body>
                    Main Office
                    </Body>
                    <Body>
                    Mail :			archone@mail.com
                    Address :		1892  Chenoweth Drive TN
                    Phone :		123-456-3451
                    </Body>
                    <CTAButton
                        type="button"
                    >
                        <Body whiteColor>
                        View on Map
                        </Body>
                    </CTAButton>
                </TimberBoxText>
                <TimberBoxText flex={1}>
                    <Body>
                    Main Office
                    </Body>
                    <Body>
                    Mail :			archone@mail.com
                    Address :		1892  Chenoweth Drive TN
                    Phone :		123-456-3451
                    </Body>
                    <CTAButton
                        type="button"
                    >
                        <Body whiteColor>
                        View on Map
                        </Body>
                    </CTAButton>
                </TimberBoxText> 
            </Timber>
            {/** Page Section (Map) */}

            {/** Page Section (Contact Form) */}
            <ContactInfo>
                <HeadingM flex={1}>
                    Connect with us
                </HeadingM>
                <Form flex={2} />
            </ContactInfo>
        </Layout>
    )
}

export default Contact
