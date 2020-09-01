import styled from 'styled-components';

const TextBoxStyle = styled.button`
    && {
        height: 50%;
        max-width: 60px; width: 5vw;
        border: none;
        border-bottom: 1px solid white;
        background: white;
        outline: none;
        cursor: pointer;
        border-radius: 8px;
    }

    && > i {
        color: black;
    }
`;

export default TextBoxStyle;