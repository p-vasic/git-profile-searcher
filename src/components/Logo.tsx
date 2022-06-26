import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
import styled, { ThemeProps } from "styled-components";
import { DEFAULT_ICON_SIZE } from "../constants";
import { GlobalThemeProps } from "../theme/model";

interface ILogo {
    size?: string | number
}

const Span = styled.span`
    font-size: 2rem;
`;

const StyledLink = styled(Link)`
    color: ${(props: ThemeProps<GlobalThemeProps>) => props.theme.id === 'light' ? '#555' : '#fff'};
`

const Logo: FC<ILogo> = ({ size=DEFAULT_ICON_SIZE }) => {
    return (
        <>
            <StyledLink to="/">
                <FaGithub data-cy="logo" size={size} />
            </StyledLink>
            <Span>Profile Searcher</Span>
        </>
    )
}

export default Logo;