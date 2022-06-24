import { FC } from "react";
import { FaGithub } from 'react-icons/fa';
import styled from "styled-components";

interface ILogo {
    size?: string | number
}

const DEFAULT_SIZE = 30;

const Span = styled.span`
    font-size: 2rem;
`

const Logo: FC<ILogo> = ({ size=DEFAULT_SIZE }) => {
    return (
        <>
            <FaGithub size={size} />
            <Span>Profile Searcher</Span>
        </>
    )
}

export default Logo;