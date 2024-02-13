import styled from 'styled-components';
import { theme } from '../../theme';

const StyledForm = styled.form`
    max-width: 512px;
    max-height: 601px;
    box-shadow: 0px 8px 35px 0px #BBA98E26;
    background: #F3F3F3;
    padding: 40px 20px;
    border-radius: 10px;

    input, textarea {
        width: 100%;
        border: none;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0px 8px 35px 0px #BBA98E26;

        &:focus {
            border: solid 1px #BBA98E;
            outline: none;
        }

        &::placeholder {
            font-family: 'Roboto';
            font-size: 0.75rem;
            color: ${theme.color.lightGrey};
    }
    }
`

const Input = styled.input`
    height: 54px;
    margin-bottom: 10px;

    @media only screen and (max-width: 320px) {
        height: 30px;
    }
`

const TextArea = styled.textarea`
    height: 270px;
    margin-bottom: 20px;
    resize: none;

    @media only screen and (max-width: 500px) {
        height: 200px;
    }
`

const Button = styled.button`
    display: block;
    margin: 0 auto;
    width: 243px;
    height: 45px;
    background: ${theme.color.grey};
    color: ${theme.color.white};
    font-family: 'CircularStd';
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 20px;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    @media only screen and (max-width: 500px) {
        width: 80%;
        font-size: 0.7rem;
    }
`

const Notification = styled.p`
    text-align: center;
    color: ${theme.color.orange};
`

export {
    StyledForm,
    Input,
    TextArea,
    Button,
    Notification
}
