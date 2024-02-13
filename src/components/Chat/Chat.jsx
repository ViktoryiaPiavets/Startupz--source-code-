import { useState } from 'react';
import avatarImg from './../../assets/images/avatar.svg';
import messageImg from './../../assets/images/message.svg';
import closeImg from './../../assets/images/close_icon.svg';
import {
    Container,
    AvatarImage,
    MessageImage,
    CloseImage
} from './Chat.styled'


const Chat = () => {
    const [isChatVisible, setIsChatVisible] = useState(true);

    const closeChat = () => {
        setIsChatVisible(false);
    }

    return (
        <Container $isVisible={isChatVisible} >
            <AvatarImage src={avatarImg} />
            <MessageImage src={messageImg} />
            <CloseImage src={closeImg} onClick={closeChat} />
        </Container>
    )
}

export {
    Chat
}
