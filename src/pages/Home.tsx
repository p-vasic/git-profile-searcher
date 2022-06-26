import { FC } from "react";
import styled from "styled-components";
import SearchForm from "../container/Form";
import PageHeader from "../container/PageHeader";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 21rem);
    justify-content: center;
    align-items: center;
    margin-bottom: 7rem;

    @media only screen and (max-width: 600px) {
        margin-bottom: 1rem;    
    }

    & form {
        margin-top: 4rem;

        & svg {
            font-size: 2rem;
        }
    }
`;

const Home: FC = () => {
    return (
        <>
           <PageHeader />
            <Container>
                <SearchForm />
            </Container>
        </>
    )
}

export default Home;