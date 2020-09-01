import React from 'react';
import { ListSection } from './styles';
import Card from './components/Card';


const CardsList: React.FC = () => {
    return (
        <ListSection>
            <Card
                id="a"
                title="Post example title"
                desc="Os primeiros caracteres do blog aparecem aqui.
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla hendre..."
                imageURL="https://www.w3schools.com/w3css/img_lights.jpg"
            />

            <Card
                id="a"
                title="Post example title"
                desc="Os primeiros caracteres do blog aparecem aqui.
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla hendre..."
                imageURL="https://www.w3schools.com/w3css/img_lights.jpg"
            />

            <Card
                id="a"
                title="Post example title"
                desc="Os primeiros caracteres do blog aparecem aqui.
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla hendre..."
                imageURL="https://www.w3schools.com/w3css/img_lights.jpg"
            />
        </ListSection>
    );
}

export default CardsList;