import styled from 'styled-components'

export const MarkdownContainer = styled.section`
    & {
        width: 90%;
        display: flex;
        flex-direction: row;
        height: 70vh;
        justify-content: space-between;
    }

    & #mini-preview, & textarea {
        flex: 1;
        font-size: 3vh;
    }

    & #mini-preview {
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

    & #mini-preview *:first-child {
        margin-top: 5px;
    }

    & #mini-preview *:last-child {
        margin-bottom: 5px;
    }

    & textarea::placeholder {
        font-size: 2vh;
    }
`;

export const ButtonContainer = styled.div`
    & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 10px;
        width: min-content;
    }

    & button {
        margin: 10px 0;
        font-size: 3vh;
    }

    & button#next {
        background: rgb(0,93,24);
        background: linear-gradient(180deg, rgba(0,255,113,1) 0%, rgba(0,93,24,1) 100%);
        border: none;
        cursor: pointer;
        padding: 20px;
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
