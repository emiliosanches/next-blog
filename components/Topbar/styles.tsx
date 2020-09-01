import styled from 'styled-components';

const TopbarStyle = styled.nav`
    && {
        position: fixed;
        padding: 0;
        width: 100%;
        height: 70px;
        background-color: black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid white;
    }
`;

export default TopbarStyle;