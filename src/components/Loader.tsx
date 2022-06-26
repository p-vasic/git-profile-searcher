import styled, { keyframes } from "styled-components";
import { BiLoaderCircle } from 'react-icons/bi'
import { FC } from "react";
import { DEFAULT_ICON_SIZE } from "../constants";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const LoaderContainer = styled.div`
    height: calc(100vh - 150px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const RotatedLoader = styled(BiLoaderCircle)`
    animation: ${rotate} 2s linear infinite;
`;

interface ILoader {
    size?: number
}

const Loader: FC<ILoader> = ({ size=DEFAULT_ICON_SIZE }) => {
    return (
        <LoaderContainer>
            <RotatedLoader data-cy="loader" size={size} />
        </LoaderContainer>
    )
}

export default Loader;