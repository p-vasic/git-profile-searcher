import { useEffect, useState } from "react";
import axios from "../util/axios";

export default function useUserData(username: string | undefined) {
    const [userData, setUserData] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState({});

    useEffect(() => {
        if (!username) return;

        const getUserData = async () => {
            try {
                setLoading(true);
                setError({ active: false, type: 200 });

                const response = await axios.get(`/users/${username}`);
                setUserData(response.data);
                setLoading(false);
            } catch (error: any) {
                console.log("Error", error);
                if (error.response) {
                    if (error.response.status === 404) {
                        setError({ active: true, type: 404 });
                    } else {
                        setError({ active: true, type: error.response.status });
                    }
                } else {
                    setError({ active: true, type: error });
                    console.log(error);
                    setLoading(false);
                }
            }
        };
        getUserData();
    }, [username]);

    return [userData, loading, error];
};