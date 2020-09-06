import styled from 'styled-components'

export const Container = styled.div`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: min-content;
        color: white;
        font-family: Roboto;
    }
`;

export const ButtonBar = styled.div`
    & {
        user-select: none;
        color: white;
        font-family: Roboto;
        cursor: pointer;
        width: 100%;
    }

    & div {
        width: max-content;
    }

    & div:hover {
        border-bottom: 1px solid white;
    }
`;

export const InfoForm = styled.form`
    & {
        margin-top: 20px;
        width: fit-content;
        display: flex;
        flex-direction: column;
    }

    & div {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: cemter;
        justify-content: space-between;
    }

    & label {
        margin-right: 20px;
        display: flex;
        align-items: center;
    }

    & input[type="text"] {
        margin: 10px 0;
        width: min(60vw, 400px);
        height: 35px;
        border-radius: 8px;
        border: 1px solid white;
        border-top: none;
        border-left: none;
        background: none;
        color: white;
        padding-left: 10px;
        font-size: 1.1rem;
    }
`;

export const SendButton = styled.button`
    & {
        margin-top: 20px;
        background: rgb(0,93,24);
        background: linear-gradient(180deg, rgba(0,255,113,1) 0%, rgba(0,93,24,1) 100%);
        border: none;
        cursor: pointer;
        padding: 20px;
        font-size: 3vh;
    }
`;

export const MessageDiv = styled.div`
    & {
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(85, 85, 85, 0.8);
    }

    & div {
        background: black;
        padding: 20px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & div h1 {
        margin: 0 auto;
    }

    & div svg {
        margin: 20px;
    }

    & div a {
        color: white;
        text-decoration: none;
    }

    & div a:hover {
        text-decoration-line: underline;
    }

    & div button {
        background-color: red;
        color: white;
        border-radius: 8px;
        padding: 10px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }
`;
