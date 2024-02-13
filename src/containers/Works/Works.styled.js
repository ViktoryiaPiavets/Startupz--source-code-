import styled from 'styled-components';

const WorksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 36px;
    justify-content: space-between;
    padding: 100px 60px 0;

    @media only screen and (max-width: 768px) {
        padding: 60px 60px 0;
    }
`

const WorksTitle = styled.h2`
    text-align: center;
    padding: 40px 0 0 ;
    margin-bottom: 0;
`

export {
    WorksWrapper,
    WorksTitle
}
