import {
    Container,
    Description,
    DetailsWrapper,
    DetailsHeadline,
    Underline,
    Image
} from './About.styled';


const About = ({title, summary, details, imagePath}) => {
    return (
        <Container>
            <Image src={imagePath} />
            <h2>{title}</h2>
            {
                summary &&
                <>
                <Description>{summary?.firstLine}</Description>
                <Description>{summary?.secondLine}</Description>
                </>
            }
            <DetailsWrapper>
                {details.map((d) => (
                    <div key={d.headline}>
                        <DetailsHeadline>{d.headline}</DetailsHeadline>
                        <Underline />
                        <div>{d.text}</div>
                    </div>
                ))}
            </DetailsWrapper>
        </Container>
    )
}

export {
    About
}
