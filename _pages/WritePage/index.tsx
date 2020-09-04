import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Editor, Preview } from './styles';
import Topbar from '../../components/Topbar';

const WritePage: React.FC = () => {
    const [body, setBody] = useState("");
    const [isEditorVisible, setIsEditorVisible] = useState(false);
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);

    function handleOpenEditor() {
        setIsEditorVisible(true);
    }

    function handleCloseEditor() {
        setIsEditorVisible(false);
    }

    function handleOpenPreview() {
        setIsPreviewVisible(true);
    }

    function handleClosePreview() {
        setIsPreviewVisible(false);
    }
    
    function handleChangeBody(evt: React.ChangeEvent<HTMLTextAreaElement>) {
        setBody(evt.target.value);
    }

    return (
        <>
            <Topbar />
            <Container>
                <h1>Escreva seu post aqui:</h1>
                <div id="markdown-container">
                    <textarea
                        value={body}
                        onChange={handleChangeBody} />
                    
                    <div id="change-mode">
                        <button onClick={handleOpenEditor}>Abrir apenas editor</button>
                        <button onClick={handleOpenPreview}>Abrir apenas preview</button>
                        <button id="send">Enviar</button>
                    </div>
                    
                    <div id="mini-preview">
                        <ReactMarkdown source={body} />
                    </div>
                </div>
                {
                    isEditorVisible && (
                        <Editor>
                            <div id="toolbar">
                                {/* Add tools like: bold, italic, image, etc. */}
                                <span id="close-btn" onClick={handleCloseEditor}>X</span>
                            </div>
                            <textarea value={body} onChange={handleChangeBody} />
                        </Editor>
                    )
                }

                {
                    isPreviewVisible && (
                        <Preview>
                            <div id="toolbar">
                                {/* Add tools like: bold, italic, image, etc. */}
                                <span id="close-btn" onClick={handleClosePreview}>X</span>
                            </div>
                            <div id="preview">
                                <ReactMarkdown source={body} />
                            </div>
                        </Preview>
                    )
                }
            </Container>
        </>
    );
}

export default WritePage;