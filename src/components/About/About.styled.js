import styled from 'styled-components';
import { theme } from './../../theme'

const Container = styled.section`
    position: relative;
    padding: 100px 60px;
    background: ${theme.color.beige};

    @media only screen and (max-width: 768px) {
        padding: 60px;
    }
`

const Description = styled.div`
    color: ${theme.color.orange};

    @media only screen and (max-width: 900px) {
        width: 470px;
    }

    @media only screen and (max-width: 600px) {
        width: 300px;
    }

    @media only screen and (max-width: 400px){
        width: 200px;
    }
`

const DetailsWrapper = styled.div`
    width: 95%;
    display: flex;
    gap: 40px;
    font-size: 1.25rem;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        gap: 0;
    }
`

const DetailsHeadline = styled.div`
    font-weight: 700;
    color: ${theme.color.orange};
    margin-top: 50px;
`

const Underline = styled.div`
    height: 1px;
    width: 50px;
    background: ${theme.color.grey};
    margin: 15px 0 20px;
`

const Image = styled.img`
    position: absolute;
    right: 100px;
    top: 135px;
    width: 75px;
    height: 88px;

    @media only screen and (max-width: 768px) {
        top: 70px;
    }

    @media only screen and (max-width: 500px) {
        right: 50px;
    }

    @media only screen and (max-width: 500px) {
        display: none;
    }
`

export {
    Container,
    Description,
    DetailsWrapper,
    DetailsHeadline,
    Underline,
    Image
}
