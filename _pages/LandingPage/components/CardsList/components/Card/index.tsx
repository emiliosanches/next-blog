import React from 'react';
import Link from 'next/link';

import CardDiv from './styles';

interface CardProps {
    id: string;
    title: string;
    imageURL: string;
    desc: string;
}

const Card: React.FC<CardProps> = props => {
    return (
        <CardDiv>
            <img src={props.imageURL} />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <Link href="/">Leia mais...</Link>
        </CardDiv>
    );
}

export default Card;