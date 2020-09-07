import React from 'react';
import { useRouter } from 'next/router';
import StyledPresentation from './styles';

const Presentation: React.FC = () => {
    const router = useRouter();

    return (
        <StyledPresentation>
            <h1>Black Journal</h1>
            <h2>Post anonymously.<br />Read about anything.</h2>
            <div>
                <span>No accounts needed.<br />Just start writing.</span>
                <div id="buttons-container">
                    <button onClick={() => { router.push('/write')}}>
                        <span>Ler</span>
                        <i className="fas fa-chevron-down" />
                    </button>
                    <button onClick={() => {}}>
                        <span>Escrever</span>
                        <i className="fas fa-chevron-right" />
                    </button>
                </div>
            </div>
        </StyledPresentation>
    )
}

export default Presentation;