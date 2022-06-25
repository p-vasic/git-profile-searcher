import { useEffect, useState } from "react";
import axios from "../util/axios";

export default function useUserRepos(username: string | undefined) {
    const [repoData, setRepoData] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState({});

    useEffect(() => {
        const getUserRepos = async () => {
            setLoading(true);
            setError({ active: false, type: 200 });
            try {
                const findTotalRepo = await axios.get(`/users/${username}`);
                const totalRepo = findTotalRepo.data.public_repos;
                let totalRequest = 1;
                // Reset Repo data to [] after rerendering
                setRepoData([]);

                // To get more than 100 repo find number of requests needed to make
                if (totalRepo > 0) {
                    totalRequest = Math.ceil(totalRepo / 100);
                }

                // Get 100 repo in each request and add them to the old array
                for (let i = 1; i < totalRequest + 1; i++) {
                    let response = await axios.get(
                        `/users/${username}/repos?per_page=100&page=${i}&sort=created:dsc`
                    );
                    setRepoData((oldArray) => [...oldArray, ...response.data]);
                }

                setLoading(false);
            } catch (error: any) {
                if (error.response) {
                    if (error.response.status === 404) {
                        setError({ active: true, type: 404 });
                    } else {
                        setError({ active: true, type: error.response.status });
                    }
                } else {
                    setError({ active: true, type: error });
                    console.log(error);
                }

                setLoading(false);
            }
        };
        getUserRepos();
    }, [username]);

    return [repoData, loading, error];
};