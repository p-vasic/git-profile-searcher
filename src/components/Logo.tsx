import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
import styled, { ThemeProps } from "styled-components";
import { GlobalThemeProps } from "../theme/model";

interface ILogo {
    size?: string | number
}

const DEFAULT_SIZE = 30;

const Span = styled.span`
    font-size: 2rem;
`;

const StyledLink = styled(Link)`
    color: ${(props: ThemeProps<GlobalThemeProps>) => props.theme.id === 'light' ? '#555' : '#fff'};
`

const Logo: FC<ILogo> = ({ size=DEFAULT_SIZE }) => {
    return (
        <>
            <StyledLink to="/">
                <FaGithub size={size} />
            </StyledLink>
            <Span>Profile Searcher</Span>
        </>
    )
}

export default Logo;