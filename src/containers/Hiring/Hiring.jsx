import {
    Container,
    ImageLeft,
    ImageRight,
    Content,
    Link,
    Description
} from './Hiring.styled';


const Hiring = () => {
    return (
        <Container>
            <ImageLeft/>
            <Content>
                <h2>We are Hiring!</h2>
                <Description>
                    We're always looking for talented people to join and help build our startups.
                    Check out our current openings
                </Description>
                <Link href='https://www.linkedin.com/company/startupz.com/jobs/'>See current openings </Link>
            </Content>
            <ImageRight />
        </Container>
    )
}

export {
    Hiring
}
