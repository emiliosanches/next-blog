import styled from "styled-components";

export default styled.section`
    & {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 8vw;
        padding-top: calc(70px + 13vh);
    }

    & > h1 {
        font-size: min(144px, 10vh);
        font-family: Roboto;
        font-weight: 900;
    }

    & > h2 {
        position: relative;
        font-size: min(72px, 6vh);
        font-family: Roboto;
        font-weight: 500;
        margin-top: 6.6vh !important;
        margin-bottom: auto !important;
    }

    & > h1, & > h2 {
        color: white;
        align-self: center;
        text-align: center;
        margin: 0;
    }

    & > div {
        justify-self: end;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    & > div > span {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: 3vw;
        color: white;
        align-self: start;
        margin-right: 55px;
    }

    & > div > #buttons-container {
        display: flex;
        flex: 1;
    }

    & > div > #buttons-container > button {
        border-radius: 20px;
        background-color: #E6E6E6;
        display: flex;
        flex-direction: row;
        margin: 5px 10px;
        font-size: 5.9vh;
        justify-content: flex-end;
        flex: 1;
        cursor: pointer;
    }

    & > div > #buttons-container > button > span {
        flex: 1;
    }

    & > div > #buttons-container > button > svg {
        margin: 0 20px;
    }
`;