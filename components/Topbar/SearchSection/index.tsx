import React from 'react';
import SectionDiv from './styles';
import SearchButton from './SearchButton';
import SearchBox from './SearchBox';

const Section: React.FC = () => {
    return (
        <SectionDiv>
            <SearchBox placeholder="Pesquise aqui" />
            <SearchButton />
        </SectionDiv>
    );
}

export default Section;