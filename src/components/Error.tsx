import { FC } from "react";
import styled, { ThemeProps } from "styled-components";
import { GoAlert } from "react-icons/go";
import { GlobalThemeProps } from "../theme/model";
import { ERROR_404_MESSAGE, ERROR_NOT_404_MESSAGE } from "../constants";

const ErrorContainer = styled.div`
    height: calc(100vh - 130px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ErrorDiv = styled.div`
    padding: 2rem 4rem;
    border-radius: 5px;
    background-color: ${(p: ThemeProps<GlobalThemeProps>) => p.theme.cardColor};
    box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);

    & svg {
        vertical-align: middle;
        margin-bottom: 4px;
        margin-right: 1rem;
    }
`;

const Error: FC<{ error: boolean | string | Record<string, any> }> = ({ error }) => {
    return (
        <ErrorContainer data-cy="error-container">
            <ErrorDiv>
                <span>
                    <GoAlert />
                </span>
                {typeof error === 'object' && error.type === 404
                    ? ERROR_404_MESSAGE
                    : ERROR_NOT_404_MESSAGE}
            </ErrorDiv>
        </ErrorContainer>
    );
};

export default Error;
