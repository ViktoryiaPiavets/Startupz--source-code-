import {
    Container,
    PhraseWrapper,
    ThumbImage,
    Text
} from './PhraseBlock.styled';
import thumbLeftImg from './../../assets/images/thumb_left.svg';
import thumbRightImg from './../../assets/images/thumb_right.svg';
import { Chat } from './../Chat';

const PhraseBlock = ({ text, isChatEnabled }) => {
    return (
        <Container>
            <PhraseWrapper>
                <ThumbImage src={thumbLeftImg} />
                <Text>{text}</Text>
                <ThumbImage src={thumbRightImg} />
            </PhraseWrapper>
            {isChatEnabled && <Chat />}
        </Container>
    )
}

export {
    PhraseBlock
}
