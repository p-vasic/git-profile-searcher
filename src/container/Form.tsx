import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProps } from "styled-components";
import Button from "../components/Button";
import { FaSearch } from "react-icons/fa";
import { GlobalThemeProps } from "../theme/model";

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    & button {
        padding: 1.2rem 1.5rem;
    }

    @media only screen and (max-width: 600px) {
        & button {
            align-self: flex-start;
        }
    }

    @media only screen and (max-width: 400px) {
        & button {
            height: auto;
        }
    }

    & span {
    }
`;

const Input = styled.input`
    font-size: 1.8rem;
    font-family: inherit;
    color: inherit;
    padding: 1.2rem 1.6rem;
    border-radius: 3px;
    border: none;
    background-color: ${(p: ThemeProps<GlobalThemeProps>) => p.theme.inputColor};
    border-bottom: 3px solid transparent;
    margin-left: 10px;
    margin-right: 15px;
    transition: all 0.3s;

    &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, 0.2);
        border-bottom: 3px solid #262728;
    }

    &::placeholder {
        color: #aaa;
    }

    @media only screen and (max-width: 600px) {
        text-align: center;
        margin: 0;
        margin-right: 15px;
        margin-bottom: 10px;
    }
`;


const SearchForm: FC = () => {
    const [user, setUser] = useState<string>("");
    const navigate = useNavigate();

    const onFormSubmit = useCallback((event: FormEvent, user: string) => {
        event.preventDefault();

        if (user) {
            navigate(`/user/${user}`);
        }
    }, [navigate]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }, [])

    return (
        <Form data-cy="search-form" onSubmit={(event: FormEvent) => onFormSubmit(event, user)}>
            <Input
                data-cy="user-search-input"
                value={user}
                onChange={handleChange}
                type='text'
                placeholder='Enter Github Username'
            />
            <Button data-cy="search-button">
                <FaSearch />
            </Button>
        </Form>
    );
};

export default SearchForm;
