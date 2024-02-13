import { Card } from './../../components/Card';
import { OUR_WORKS } from './../../constants';
import { WorksWrapper, WorksTitle } from './Works.styled';

const Works = () => {
    return (
        <>
            <WorksTitle id='works'>Our Works</WorksTitle>
            <WorksWrapper>
                {OUR_WORKS.map((w) => (
                    <Card
                        key={w.companyName}
                        companyName={w.companyName}
                        description={w.description}
                        image={w.image}
                        color={w.color}
                        path={w.path || 'https://www.wikipedia.org/'}
                    />
                ))}
            </WorksWrapper>
        </>
    )
}

export {
    Works
}
