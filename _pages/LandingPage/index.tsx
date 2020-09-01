import React from 'react';
import Topbar from '../../components/Topbar';
import Presentation from './components/Presentation';

export default function HomePage() {
    return (
        <>
            <Topbar />
            <main>
                <Presentation />
            </main>
        </>
    );
}
