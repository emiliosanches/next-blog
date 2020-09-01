import styled from 'styled-components';

const TextBoxStyle = styled.input`
    && {
        height: 50%;
        border: none;
        width: 80%;
        color: white;
        border-bottom: 1px solid white;
        background: none;
        outline: none;
    }

    &::placeholder {
        color: white;
        opacity: 0.8;
    }
`;

export default TextBoxStyle;