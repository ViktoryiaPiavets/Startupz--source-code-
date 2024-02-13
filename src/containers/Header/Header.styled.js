import styled from 'styled-components';
import headerBackground from './../../assets/images/header_background.svg';
import { theme } from '../../theme';

const Container = styled.div`
    height: 100vh;
    background: url(${headerBackground}) no-repeat bottom right;
    background-size: 40%;
    padding: 30px 60px;

    a {
        font-size: 0.75rem;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            opacity: 0.8;
        }
    }

    @media only screen and (max-width: 400px) {
        background: none;
        text-align: center;
    }

    @media only screen and (max-width: 400px) {
        height: fit-content;
    }
`

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 650px) {
        flex-direction: column;
        gap: 5px;
    }

    @media only screen and (max-width: 400px) {
        align-items: center;
    }
`

const Logo = styled.img`
    width: 200px;
    height: 48px;
`

const LinksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 360px;

    @media only screen and (max-width: 750px) {
        justify-content: space-evenly;
    }

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        gap: 10px;
        width: fit-content;
    }
`

const JoinButton = styled.a`
    width: 185px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    text-align: center;
    color: ${theme.color.blue};
    border: solid 1px ${theme.color.blue};
    border-radius: 24px;
`

const WorksButton = styled.a`
    width: 157px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 18px;
    color: ${theme.color.white};
    background: ${theme.color.blue};
    border-radius: 24px;

    @media only screen and (max-width: 400px) {
        margin: 0 auto;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: ${theme.color.grey};
`

const Title = styled.h1`
    font-size: 3.54rem;
    line-height: 3.54rem;
    font-weight: 700;
    margin: 100px 0 30px 0;

    @media only screen and (max-width: 400px) {
        margin: 60px 0 30px 0;
        font-size: 3rem;
        line-height: 3rem;
    }
`

const Description = styled.div`
    color: ${theme.color.orange};
    margin-bottom: 30px;

    @media only screen and (max-width: 1000px) {
        width: 530px;
    }

    @media only screen and (max-width: 768px) {
        width: 440px;
    }

    @media only screen and (max-width: 700px) {
        width: 290px;
    }

    @media only screen and (max-width: 400px) {
        width: 200px;
        margin: 0 auto 30px;
}
`

export {
    Container,
    Logo,
    Navigation,
    LinksWrapper,
    JoinButton,
    WorksButton,
    Link,
    Title,
    Description
}
