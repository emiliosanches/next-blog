import React, { useState } from 'react';
import { ListSection } from './styles';
import Card, { ICard } from './components/Card';

const CardsList: React.FC<{ firstCards: ICard[] }> = ({ firstCards }) => {
    
    //using state so, in a future update, cards can be loaded gradually
    const [cards, ] = useState(firstCards);

    return (
        <ListSection>
            {
                cards.map(cardInfo => <Card card={cardInfo}></Card>)
            }
        </ListSection>
    );
}

export default CardsList;