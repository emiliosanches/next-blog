import styled from 'styled-components';

const SectionStyle = styled.div`
    && {
        height: 100%;
        flex: 1;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }

    & > a {
        color: white;
        text-decoration: none;
        display: block;
        display: flex;
        font-style: normal;
        font-weight: 500;
        font-size: 45px;
    }

    & > a: hover {
        color: white;
        text-decoration: none;
    }

`;

export default SectionStyle;