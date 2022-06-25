import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ILogo {
    size?: string | number
}

const DEFAULT_SIZE = 30;

const Span = styled.span`
    font-size: 2rem;
`;

const StyledLink = styled(Link)`
    color: white;
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