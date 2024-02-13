import { BasicForm } from './../../components/Form';
import { Container, Title, Text } from './FormBlok.styled';

const FormBlock = () => {
    return (
        <Container id='applyForm'>
            <Title>Are you ready to board this rocket ship?</Title>
            <Text>Share your excitement with us.</Text>
            <BasicForm />
        </Container>
    )
}

export {
    FormBlock
}
