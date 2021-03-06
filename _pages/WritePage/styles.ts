import styled from 'styled-components';

export const Container = styled.main`
    & {
        background-color: black;
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & h1 {
        margin-top: 70px;
        color: white;
        font-size: 4vw;
    }
`;
