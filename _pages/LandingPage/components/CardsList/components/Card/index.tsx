import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

import CardDiv from './styles';

export interface ICard {
    id: string;
    title: string;
    image_url: string;
    body: string;
}

const Card: React.FC<{card: ICard}> = ({ card }) => {
    return (
        <CardDiv>
            <img src={card.image_url} />
            <h3>{card.title}</h3>
            <p>
                <ReactMarkdown source={card.body} />
            </p>
            <Link href={`/blog/${card.id}`}>Leia mais...</Link>
        </CardDiv>
    );
}

export default Card;