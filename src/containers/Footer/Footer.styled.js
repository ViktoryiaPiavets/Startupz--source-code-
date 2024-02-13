import styled from 'styled-components';
import { theme } from '../../theme';

const Container = styled.footer`
    display: flex;
    padding: 60px;
    font-size: 0.75rem;
    gap: 7%;

    @media only screen and (max-width: 950px) {
        flex-wrap: wrap;
        gap: 5%;
    }

    @media only screen and (max-width: 500px) {
        flex-direction: column;
        align-content: center;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 23%;

    @media only screen and (max-width: 950px) {
        width: 47%;
        margin-bottom: 40px;
    }
`

const BasicText = styled.div`
    color: ${theme.color.lightGrey};
`

const ColoredText = styled.a`
    display: block;
    text-decoration: none;
    color: ${theme.color.blue};
    margin-bottom: 10px;
`

const Logo = styled.img`
    width: 179px;
    height: 43px;

    @media only screen and (max-width: 500px) {
        width: 100px;
    }
`

const ColumnTitle = styled.div`
    color: ${theme.color.grey};
    margin-bottom: 15px;
`

const SocialLink = styled.img`
    display: block;
    width: 23px;
    height: 23px;
    margin-bottom: 10px;
`

export {
    Container,
    Column,
    BasicText,
    ColoredText,
    Logo,
    ColumnTitle,
    SocialLink
}
