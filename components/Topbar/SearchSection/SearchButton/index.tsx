import React from 'react';
import StyledButton from './styles';

const SearchButton: React.FC = () => {
    return (
        <StyledButton>
            <i className="fa fa-search"></i>
        </StyledButton>
    );
}

export default SearchButton;