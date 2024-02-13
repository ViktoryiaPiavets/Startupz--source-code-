import {
    Container,
    Column,
    Logo,
    BasicText,
    ColumnTitle,
    ColoredText,
    SocialLink
} from './Footer.styled';
import logoImg from './../../assets/images/logo.svg';
import instagramImg from './../../assets/images/instagram.svg';
import twitterImg from './../../assets/images/twitter.svg';
import linkedinImg from './../../assets/images/linkedin.svg';

const Footer = () => {
    return (
        <Container id='contacts'>
            <Column>
                <Logo src={logoImg}/>
                <div>
                    <BasicText>© 2020 Startupz.</BasicText>
                    <BasicText>All rights reserved.</BasicText>
                </div>
            </Column>
            <Column>
            <ColumnTitle>Companies</ColumnTitle>
                <div>
                    <ColoredText href='https://www.wikipedia.org/'>Tolq</ColoredText>
                    <ColoredText href='https://www.wikipedia.org/'>LegalSite</ColoredText>
                    <ColoredText href='https://www.wikipedia.org/'>Codekeeper</ColoredText>
                    <ColoredText href='https://www.wikipedia.org/'>Feedback Labs</ColoredText>
                </div>
            </Column>
            <Column>
                <ColumnTitle>Contact</ColumnTitle>
                <div>
                    <BasicText>World Trade Center - The Hague</BasicText>
                    <BasicText>Prinses Margrietplantsoen 33</BasicText>
                    <BasicText>2595 AM The Hague</BasicText>
                    <BasicText>The Netherlands</BasicText>
                </div>
                <ColoredText href='mailto:defaultEmail@com'>Send us an email</ColoredText>
            </Column>
            <div>
                <ColumnTitle>Follow us</ColumnTitle>
                <div>
                    <a href='https://twitter.com/'><SocialLink src={twitterImg} /></a>
                    <a href='https://www.linkedin.com/company/startupz.com/'><SocialLink src={linkedinImg} /></a>
                    <a href='https://www.instagram.com/'><SocialLink src={instagramImg} /></a>
                </div>
            </div>
        </Container>
    )
}

export {
    Footer
}
