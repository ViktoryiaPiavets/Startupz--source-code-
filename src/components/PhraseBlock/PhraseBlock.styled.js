import styled from 'styled-components';
import { theme } from '../../theme';

const Container = styled.section`
    position: relative;
    padding: 120px;

    @media only screen and (max-width: 600px) {
        padding: 60px;
        min-height: 400px;
    }

    @media only screen and (max-width: 350px) {
        min-height: 0;
        padding: 60px 10px;
    }
`

const PhraseWrapper = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
`

const ThumbImage = styled.img`
    width: 59px;
    height: 66px;
    margin: 0 20px;

    @media only screen and (max-width: 768px) {
        margin: 0 10px;
    }
`

const Text = styled.span`
    font-size: 1.67rem;
    font-weight: 700;
    color: ${theme.color.orange};
    text-align: center;

    @media only screen and (max-width: 500px) {
        font-size: 1rem;
    }
`

export {
    Container,
    PhraseWrapper,
    ThumbImage,
    Text
}
