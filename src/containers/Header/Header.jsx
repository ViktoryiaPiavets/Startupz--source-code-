import  {
    Container,
    Logo,
    JoinButton,
    WorksButton,
    Link,
    LinksWrapper,
    Navigation,
    Title,
    Description
} from './Header.styled';
import logoImage from './../../assets/images/logo.svg';

const Header = () => {
    return (
        <Container>
            <Navigation>
                <Logo src={logoImage} />
                <LinksWrapper>
                    <Link href='https://www.wikipedia.org/'>Startups</Link>
                    <Link href='#contacts'>Contact</Link>
                    <JoinButton href='#applyForm'>Work with us !</JoinButton>
                </LinksWrapper>
            </Navigation>
            <Title>We Create <br/>Startups.</Title>
            <Description>We are startup studio that develops and launches new companies.</Description>
            <WorksButton href='#works'>See our works</WorksButton>
        </Container>
    )
}

export {
    Header
}
