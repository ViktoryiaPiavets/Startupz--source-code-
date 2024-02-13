import styled from 'styled-components';
import { theme } from '../../theme';
import hiringLeftImg from './../../assets/images/hiring_left.svg';
import hiringRightImg from './../../assets/images/hiring_right.svg';

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${theme.color.beige};
    padding: 100px 0;

    @media only screen and (max-width: 768px) {
        padding: 60px 0;
    }
`

const ImageLeft = styled.div`
    width: 318px;
    height: 319px;
    background: url(${hiringLeftImg}) no-repeat;
    background-size: 100%;
    background-position: center;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`

const ImageRight = styled.div`
    width: 291px;
    height: 319px;
    background: url(${hiringRightImg}) no-repeat;
    background-size: 100%;
    background-position: center;

    @media only screen and (max-width: 500px) {
        display: none;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 443px;
`

const Link = styled.a`
    width: 243px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 18px;
    color: ${theme.color.white};
    background: ${theme.color.blue};
    border-radius: 24px;
    font-weight: 700;
    font-size: 0.75rem;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }
`

const Description = styled.div`
    color: ${theme.color.orange};
    margin: 0 0 30px 0;

    @media only screen and (max-width: 500px){
        width: 70%;
}
`

export {
    Container,
    ImageLeft,
    ImageRight,
    Content,
    Link,
    Description
}
