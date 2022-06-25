import styled, { keyframes } from "styled-components";
import { BiLoaderCircle } from 'react-icons/bi'
import { FC } from "react";

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

const DEFAULT_SIZE = 30;

interface ILoader {
    size?: number
}

const Loader: FC<ILoader> = ({ size=DEFAULT_SIZE }) => {
    return (
        <LoaderContainer>
            <RotatedLoader size={size} />
        </LoaderContainer>
    )
}

export default Loader;