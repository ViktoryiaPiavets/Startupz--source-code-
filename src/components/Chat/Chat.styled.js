import styled from 'styled-components';

const Container = styled.div`
    display: ${props => props.$isVisible ? 'block' : 'none'};
    position: absolute;
    right: 3%;
    top: 20%;
    height: 60px;

    @media only screen and (max-width: 768px) {
        right: 0;
    }

    @media only screen and (max-width: 600px) {
        right: 10%;
        top: 45%;
    }

    @media only screen and (max-width: 350px) {
        display: none;
    }
`

const AvatarImage = styled.img`
    width: 114px;
    height: 113px;
    position: absolute;
    right: 20px;
    top: 100%;
`

const MessageImage = styled.img`
    width: 257px;
    height: 56px;
    position: absolute;
    top: -10px;
    right: 100px;

    @media only screen and (max-width: 400px) {
        right: 37px;
    }
`

const CloseImage = styled.img`
    width: 11px;
    height: 14px;
    position: absolute;
    right: 30px;
    cursor: pointer;
`

export {
    Container,
    AvatarImage,
    MessageImage,
    CloseImage
}
