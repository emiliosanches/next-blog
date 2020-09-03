import styled from 'styled-components';

export const Container = styled.main`
    & {
        background: black;
        width: 100%;
        min-height: 100vh;
        padding: 0 7vw;
        padding-top: calc(70px + 1vh);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & h1 {
        margin: 0 0 20px;
        color: white;
        font-size: min(144px, 10vh);
        font-family: Roboto;
        font-weight: 900;
    }

    & img {
        max-width: 86vw;
        max-height: 80vh;
    }

    & #body {
        color: white;
        margin-top: 50px;
        width: 100%;
    }
`;

//post body has little styling because a markdown parser will be added