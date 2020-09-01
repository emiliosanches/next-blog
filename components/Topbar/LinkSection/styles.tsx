import styled from 'styled-components';

const SectionStyle = styled.div`
    && {
        height: 100%;
        padding: 0 3vw;
        background-color: black;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        cursor: pointer;
    }

    & > a {
        color: white;
        text-decoration: none;
        display: block;
        display: flex;
        font-style: normal;
        font-weight: 500;
        font-size: 2.5vw;
    }

    & > a: hover {
        color: white;
        text-decoration: none;
    }

    &:hover {
        background-color: #333333
    }

`;

export default SectionStyle;