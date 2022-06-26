import { FC } from "react";
import styled, { ThemeProps } from "styled-components";
import {
    GoMarkGithub,
    GoCalendar,
    GoPackage,
} from "react-icons/go";
import Button from "../components/Button";
import { User } from "../hooks/model";
import { GlobalThemeProps } from "../theme/model";
import { FaUser, FaUsers } from "react-icons/fa";

const ProfileSection = styled.section`
    padding: 2rem 6rem;
    padding-bottom: 0rem;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 900px) {
        padding: 1.5rem 2rem;
    }
`;

const UserContainer = styled.div`
    height: 100%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 600px) {
        padding-top: 10rem;
    }
`;

const UserInfoDiv = styled.div<{ bgImage: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 280px;
    height: 280px;
    background-color: ${(props: ThemeProps<GlobalThemeProps>) => props.theme.cardColor};
    background-image: ${(props) => `url('${props.bgImage}')`};
    padding: 4rem;
    border-radius: 5px;
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.2);

    & ul li {
        font-size: 1.8rem;
        padding: 0.3rem 0;
    }

    & ul li h1 {
        font-size: 3rem;
        font-weight: 400;
    }

    & ul li:last-of-type {
        padding-top: 0.8rem;
    }

    & ul li a {
        text-decoration: none;
        &:link,
        &:visited {
            color: #0098f0;
        }

        &:hover,
        &:active {
            text-decoration: underline;
        }
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        width: 280px;
        height: 280px;
        padding: 3rem 4rem;

        & ul li {
            text-align: center;
        }
    }

    @media only screen and (max-width: 500px) {
        width: 250px;
        height: 250px;
        padding: 3rem 2rem;
    }
`;

const DetailList = styled.ul`
    margin-top: 3rem;
    border-radius: 5px;
    background-color: ${(props: ThemeProps<GlobalThemeProps>) => props.theme.cardColor};
    padding: 2rem 4rem;
    box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.2);

    @media only screen and (max-width: 600px) {
        padding: 3rem 4rem;
    }

    @media only screen and (max-width: 500px) {
        width: 100%;
    }

    & ul li {
        text-align: center;
    }

    & ul li span a button {
        font-weight: 500;
    }
`;

const IconSpan = styled.span`
    display: inline;
    margin-right: 1.5rem;

    & svg {
        vertical-align: middle;
        margin-bottom: 4px;
    }

    & a button svg {
        margin-bottom: 0;
    }

    @media only screen and (max-width: 600px) {
        margin-right: 0;
    }
`;

const Span = styled.span`
    & svg {
        vertical-align: middle;
        margin-bottom: 3px;
    }

    margin-right: 0.5rem;
`;

interface IProfile {
    userData: User
}

const Profile: FC<IProfile> = ({ userData }) => {
    const {
        avatar_url,
        html_url,
        login,
        public_repos,
        created_at,
        followers,
        following
    } = userData;

    const date = new Date(created_at);
    const joinedDate = date.toDateString().split(" ").slice(1).join(" ");

    return (
        <ProfileSection data-cy='profile'>
            <UserContainer>
                <UserInfoDiv data-cy='user-image' bgImage={avatar_url}>
                    <IconSpan>
                        <a
                            href={html_url}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Button>
                                <GoMarkGithub /> @{login}
                            </Button>
                        </a>
                    </IconSpan>
                </UserInfoDiv>
                <DetailList>
                    <ul>
                        <li> <Span><GoCalendar /></Span> Joined github on {joinedDate}</li>
                        <li> <Span><GoPackage /></Span> Since have created {public_repos} projects</li>
                        <li> <Span><FaUsers /></Span> Followers {followers}</li>
                        <li> <Span><FaUser /></Span>Following {following}</li>
                    </ul>
                </DetailList>
            </UserContainer>
        </ProfileSection>
    );
};

export default Profile;
