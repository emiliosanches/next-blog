import React, { useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { Editor, Preview, MarkdownContainer, ButtonContainer } from './styles';
import { BodyContext } from '../../context';

interface WriteBodyComponentProps {
    onClickNext: () => void
}

const WriteBody: React.FC<WriteBodyComponentProps> = ({ onClickNext }) => {

    const [isEditorVisible, setIsEditorVisible] = useState(false);
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);
    
    const { bodyValue, setBody } = useContext(BodyContext);

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
            <MarkdownContainer>
                <textarea
                    placeholder={"Escreva o corpo da sua postagem aqui (imagem principal e título serão informados depois)\nVocê pode usar Markdown para estilizar seu texto."}
                    value={bodyValue}
                    onChange={handleChangeBody} />

                <ButtonContainer>
                    <button onClick={handleOpenEditor}>Abrir apenas editor</button>
                    <button onClick={handleOpenPreview}>Abrir apenas preview</button>
                    <button onClick={onClickNext} id="next">Próximo</button>
                </ButtonContainer>

                <div id="mini-preview">
                    <ReactMarkdown source={bodyValue} />
                </div>
            </MarkdownContainer>
            {
                isEditorVisible && (
                    <Editor>
                        <div id="toolbar">
                            {/* Add tools like: bold, italic, image, etc. */}
                            <span id="close-btn" onClick={handleCloseEditor}>X</span>
                        </div>
                        <textarea value={bodyValue} onChange={handleChangeBody} />
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
                            <ReactMarkdown source={bodyValue} />
                        </div>
                    </Preview>
                )
            }
        </>
    )
}

export default WriteBody;