import React from 'react';
import Link from 'next/link';
import SectionDiv from './styles';

interface propsInterface {
    route: string;
    name: string;
    className?: string;
}

const Section: React.FC<propsInterface> = props => {
    return (
        <SectionDiv>
            <Link href={props.route}>
                {props.name}
            </Link>
        </SectionDiv>
    );
}

export default Section;