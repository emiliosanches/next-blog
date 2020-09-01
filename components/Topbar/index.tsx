import React from 'react';
import StyledTopbar from './styles';
import Section from './LinkSection';
import SearchSection from './SearchSection';

const Topbar: React.FC = () => {
    return (
        <header>
            <StyledTopbar>
                <Section name="Home" route="/" />
                <Section name="Escreva" route="/"/>
                <SearchSection />
                <Section name="Sobre" route="/"/>
            </StyledTopbar>
        </header>
    );
}

export default Topbar;