import styled from "styled-components";

const Header = styled.header`
    height: 7rem;
    display: flex;
    align-items: center;
    padding: 1rem 6rem;
    justify-content: space-between;
    box-shadow: 0 0.3rem 0.3rem 0 rgba(0,0,0, .2);

    & button svg {
        font-size: 2rem;
        vertical-align: middle;
    }

    @media only screen and (max-width: 600px) {
        padding: 1rem 2rem;
    }
`;

export default Header;