import React from 'react';
import Topbar from '../../components/Topbar';
import Presentation from './components/Presentation';
import CardsList from './components/CardsList';

export default function HomePage() {
    return (
        <>
            <Topbar />
            <main>
                <Presentation />
                <CardsList />
            </main>
        </>
    );
}
