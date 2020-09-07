import React from 'react';
import Topbar from '../../components/Topbar';
import Presentation from './components/Presentation';
import CardsList from './components/CardsList';
import { ICard } from './components/CardsList/components/Card';

interface LandingPageProps {
    first_cards: ICard[]
}

const LandingPage: React.FC<LandingPageProps> = ({ first_cards }) => {
    return (
        <>
            <Topbar />
            <main>
                <Presentation />
                <CardsList firstCards={first_cards} />
            </main>
        </>
    );
}

export default LandingPage;