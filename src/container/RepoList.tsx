import { FC } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProps } from 'styled-components';
import { Repo } from "../hooks/model";
import { GlobalThemeProps } from "../theme/model";

interface IRepoList {
    repos: Repo[]
}

const RepoContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 2rem;
`;

const StyledList = styled.ul`
    border-radius: 5px;
    background-color: ${(props: ThemeProps<GlobalThemeProps>) => props.theme.cardColor};
    padding: 2rem 4rem;
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.2);
    width: 280px;

    @media only screen and (max-width: 600px) {
        padding: 3rem 4rem;
    }

    @media only screen and (max-width: 500px) {
        margin: 1.5rem 2rem;
        width: 100%;
    }

    & ul li {
        text-align: center;
    }

    & ul li span a button {
        font-weight: 500;
    }
`;

const Span = styled.span`
    & svg {
        vertical-align: middle;
        margin-bottom: 3px;
    }

    margin-right: 0.5rem;
`;

const StyledLi = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
`;

const StyledA = styled.a`
    color: ${(props: ThemeProps<GlobalThemeProps>) => props.theme.id === 'light' ? '#555' : '#fff'};
`

const RepoList: FC<IRepoList> = ({ repos }) => {
    if (repos.length === 0) {
        return (
            <RepoContainerDiv>
                <h4>There is no public repository.</h4>
            </RepoContainerDiv>
        )
    }

    return (
        <RepoContainerDiv>
            <h3>{repos.length} Repositories</h3>
            <StyledList>
                {
                    repos.map((repo: Repo, index: number) => (
                        <StyledLi key={repo.id}>
                            <Span>{index + 1}.</Span>
                            <Span>
                                <StyledA href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                                    {repo.name}
                                </StyledA>
                            </Span>
                        </StyledLi>
                    ))
                }
            </StyledList>
        </RepoContainerDiv>
    )
}

export default RepoList;