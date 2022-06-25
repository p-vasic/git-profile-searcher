import { FC, useContext } from "react";
import { ThemeContext } from "styled-components";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Toggle from "../components/Toogle";
import { GlobalThemeProps } from "../theme/model";

const PageHeader: FC = () => {
    const { id, toggleTheme } = useContext<GlobalThemeProps>(ThemeContext);

    return (
        <Header>
            <Logo size={35} />
            <Toggle isDarkMode={id === 'dark'} onToggle={toggleTheme} />
        </Header>        
    )
}

export default PageHeader;