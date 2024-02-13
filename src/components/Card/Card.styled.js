import styled from 'styled-components';
import { theme } from '../../theme';

const Container = styled.div`
    width: 48%;
    box-shadow: 0px 8px 35px 0px #BBA98E26;
    font-size: 0.67rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 60px;

    @media only screen and (max-width: 1000px) {
        width: 45%;
    }

    @media only screen and (max-width: 850px) {
        width: 100%;
    }

    @media only screen and (max-width: 350px) {
        padding: 40px;
    }
`

const Title = styled.div`
    font-size: 1.33rem;
    color: ${props => props.color};
    margin: 0  0 30px 0;
    text-align: center;
`

const Summary = styled.div`
    text-align: center;

    @media only screen and (max-width: 850px) {
        width: 60%;
    }

    @media only screen and (max-width: 500px) {
        width: 100%;
    }
`

const Image = styled.img`
    width: 371px;
    height: 244px;

    @media only screen and (max-width: 1000px) {
        width: 244px;
        height: 183px;
    }

    @media only screen and (max-width: 400px) {
        width: 150px;
        height: 120px;
    }
`

const Link = styled.a`
    width: 107px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 1px ${theme.color.blue};
    border-radius: 20px;
    color: ${theme.color.blue};
    font-weight: 700;
    font-size: 0.75rem;
    text-decoration: none;
    margin-top: 20px;

    &:hover {
        opacity: 0.8;
    }
`

export {
    Container,
    Title,
    Summary,
    Image,
    Link
}
