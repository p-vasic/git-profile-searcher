import { useEffect, useState } from "react";
import axios from "../util/axios";
import { GitError, User } from "./model";

export default function useUserData(username: string | undefined) {
    const [userData, setUserData] = useState<User>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<GitError>({});

    useEffect(() => {
        if (!username) return;

        const getUserData = async () => {
            setLoading(true);
            try {
                setError({ active: false, type: 200 });

                const response = await axios.get(`/users/${username}`);
                setUserData(response.data);
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
                }
                setLoading(false);
            }
        };
        getUserData();
    }, [username]);

    return {userData, loading, error};
};