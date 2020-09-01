import React from 'react';
import StyledPresentation from './styles';

const Presentation: React.FC = () => (
    <StyledPresentation>
        <h1>Black Journal</h1>
        <h2>Post anonymously.<br />Read about anything.</h2>
        <div>
            <span>No accounts needed.<br />Just start writing.</span>
            <div id="buttons-container">
                <button>
                    <span>Ler</span>
                    <i className="fas fa-chevron-down"/>
                </button>
                <button>
                    <span>Escrever</span>
                    <i className="fas fa-chevron-right"/>
                </button>
            </div>
        </div>
    </StyledPresentation>
)

export default Presentation;