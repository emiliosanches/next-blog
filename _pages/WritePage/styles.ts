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
        color: white;
        font-size: 4vw;
    }

    & > #markdown-container {
        width: 90%;
        display: flex;
        flex-direction: row;
        height: 70vh;
        justify-content: space-between;
    }

    & #markdown-container #mini-preview, & #markdown-container textarea {
        flex: 1;
        font-size: 3vh;
    }

    & #markdown-container #change-mode {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 10px;
        width: min-content;
    }

    & #markdown-container #change-mode button {
        margin: 10px 0;
        font-size: 3vh;
    }

    & #markdown-container #change-mode button#send {
        background: rgb(0,93,24);
        background: linear-gradient(180deg, rgba(0,255,113,1) 0%, rgba(0,93,24,1) 100%);
        border: none;
        cursor: pointer;
        padding: 20px
    }

    & #markdown-container #mini-preview {
        color: white;
        border: 2px gray solid;
        background: #222222;
        overflow: scroll;
        padding: 0 1vh;
    }

    & #mini-preview p {
        display: flex;
        flex-direction: column;
    }

    & #mini-preview img {
        align-self: center;
    }

    & div div *:first-child {
        margin-top: 5px;
    }

    & div div *:last-child {
        margin-bottom: 5px;
    }
`;

export const Editor = styled.div`
    & {
        position: fixed;
        height: 100vh;
        width: 100vw;
        background: rgba(85, 85, 85, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & #toolbar {
        display: flex;
        width: 90vw;
        justify-content: flex-end;
        background: black;
    }

    & #toolbar #close-btn {
        display: block;
        color: white;
        font-family: Roboto;
        user-select: none;
        padding: 10px;
        margin: 0;
        font-size: 3vh;
        cursor: pointer;
    }

    & textarea {
        width: 90vw;
        height: 90vh;
        font-size: 3vh;
    }
`;

export const Preview = styled.div`
    & {
        position: fixed;
        height: 100vh;
        width: 100vw;
        background: rgba(85, 85, 85, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    & #toolbar {
        display: flex;
        width: 90vw;
        justify-content: flex-end;
        background: black;
        border-bottom: 1px white solid;
    }

    & #toolbar #close-btn {
        display: block;
        color: white;
        font-family: Roboto;
        user-select: none;
        padding: 10px;
        margin: 0;
        font-size: 3vh;
        cursor: pointer;
    }

    & #preview {
        color: white;
        width: 90vw;
        height: 90vh;
        padding: 1vh 2vh;
        font-size: 3vh;
        background: black;
        display: flex;
        flex-direction: column;
    }

    & #preview p {
        display: flex;
        flex-direction: column;
    }

    & #preview img {
        align-self: center;
    }
`;
