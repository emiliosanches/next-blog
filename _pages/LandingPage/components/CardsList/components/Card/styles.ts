import styled from 'styled-components';

export default styled.div`
    & {
        padding: 65px;
        background: white;
        width: 40%;
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        margin-bottom: 55px;
    }

    & img {
        width: 100%;
        border-radius: 4px;
    }

    & h3 {
        font-family: Roboto;
        font-size: min(72px, 6vh);
        margin: 25px 0;
    }

    & p {
        color: black;
        font-size: 90% !important;
        font-family: Roboto;
        font-weight: 300;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        max-height: 100px;
        margin-top: 0;
    }

    & a {
        align-self: flex-end;
        color: #054B8C;
        font-size: 1.8rem;
    }
`;