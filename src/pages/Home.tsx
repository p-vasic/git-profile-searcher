import { FC, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import SearchForm from "../components/Form";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Toggle from "../components/Toogle";
import { GlobalThemeProps } from "../theme/model";

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
    const { id, toggleTheme } = useContext<GlobalThemeProps>(ThemeContext);

    return (
        <>
            <Header>
                <Logo size={35} />
                <Toggle isDarkMode={id === 'dark'} onToggle={toggleTheme} />
            </Header>
            <Container>
                <SearchForm />
            </Container>
        </>
    )
}

export default Home;