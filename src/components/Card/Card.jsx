import { Container, Title, Summary, Image, Link } from './Card.styled';

const Card = ({ companyName, description, image, path, color }) => {
    return (
        <Container>
            <Title color={color}>{companyName}</Title>
            <Summary>{description}</Summary>
            <Image src={image} />
            <Link href={path}>More</Link>
        </Container>
    )
}

export {
    Card
}
