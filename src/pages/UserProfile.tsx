import { FC } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import PageHeader from "../container/PageHeader";
import Profile from "../container/Profile";
import RepoList from "../container/RepoList";
import { useUserData, useUserRepos } from "../hooks";

const UserProfile: FC = () => {
    const { username } = useParams();

    const {userData, loading: userLoading, error: userError} = useUserData(username);
    const {repoData, loading: repoLoading, error: repoError} = useUserRepos(username);

    const loading = userLoading || repoLoading;
    const error = userError && userError.active && repoError && repoError.active;

    if (loading) {
        return (
            <>
                <PageHeader />
                <Loader size={35} />
            </>
        );
    }

    return (
        <>
            <PageHeader />
            <main>
                {
                    error ? (
                        <Error error={error} />
                    ) : (
                        <>
                            {userData && <Profile userData={userData} />}
                            {repoData && <RepoList repos={repoData} />}
                        </>
                    )
                }
            </main>
        </>
    )
}

export default UserProfile;