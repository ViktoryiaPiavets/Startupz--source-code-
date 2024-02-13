import styled from 'styled-components';
import { theme } from '../../theme';
import rocketImg from './../../assets/images/rocket.svg';

const Container = styled.section`
    color: ${theme.color.white};
    background: ${theme.color.yellow} url(${rocketImg}) no-repeat;
    background-position: right 10% bottom;
    background-size: 50%;
    padding: 40px 60px 80px;
`

const Title = styled.h2`
    max-width: 677px;
    font-size: 2.5rem;
    margin-bottom: 30px;

    @media only screen and (max-width: 768px) {
        max-width: 500px;
    }

    @media only screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`

const Text = styled.div`
    font-family: 'Roboto';
    font-weight: 500;
    margin-bottom: 30px;
`

export {
    Container,
    Title,
    Text
}
