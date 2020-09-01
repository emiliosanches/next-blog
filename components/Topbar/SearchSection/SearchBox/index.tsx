import React, { InputHTMLAttributes } from 'react';
import StyledInput from './styles';

const SearchBox: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => {
    return (
        <StyledInput {...props} />
    );
}

export default SearchBox;