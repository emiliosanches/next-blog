import React, { useState } from 'react';
import { Container } from './styles';
import Topbar from '../../components/Topbar';
import { BodyContext, OtherInfoContext } from './context';
import WriteBody from './components/WriteBody';
import WriteOtherInfo from './components/WriteOtherInfo'

const WritePage: React.FC = () => {

    const [stepIndex, setStepIndex] = useState(0)

    const [body, setBody] = useState("");
    const bodyContextValue = {
        bodyValue: body,
        setBody: (newBody: string) => setBody(newBody)
    }

    const [title, setTitle] = useState("");
    const [image_url, setImage_url] = useState("");
    const [author, setAuthor] = useState<string>();

    const otherInfoContextValue = {
        title: {
            value: title,
            changeValue: (value: string) => setTitle(value)
        },
        image: {
            value: image_url,
            changeValue: (value: string) => setImage_url(value)
        },
        author: {
            value: author,
            changeValue: (value: string) => setAuthor(value)
        }
    }

    function handleNextStep() {
        setStepIndex(stepIndex + 1);
    }

    function handlePreviousStep() {
        setStepIndex(stepIndex - 1);
    }

    return (
        <>
            <Topbar />
            <Container>
                <h1>Escreva seu post aqui:</h1>

                {
                    [(
                        <BodyContext.Provider value={bodyContextValue} >
                            <WriteBody onClickNext={handleNextStep}/>
                        </BodyContext.Provider>
                    ), (
                        <BodyContext.Provider value={bodyContextValue} >
                            <OtherInfoContext.Provider value={otherInfoContextValue}>
                                <WriteOtherInfo clickBack={handlePreviousStep}/>
                            </OtherInfoContext.Provider>
                        </BodyContext.Provider>
                    )][stepIndex]
                }
            </Container>
        </>
    );
}

export default WritePage;