import React, { useContext, useState } from 'react';
import { FaArrowLeft, FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';
import { Container, ButtonBar, InfoForm, SendButton, MessageDiv } from './styles';
import { BodyContext, OtherInfoContext } from '../../context';
import { api } from '../../../../axiosconfig';
import Link from 'next/link';

interface WriteOtherInfoComponentProps {
    clickBack: () => void;
}

const WriteOtherInfo: React.FC<WriteOtherInfoComponentProps> = ({ clickBack }) => {
    
    const { author, image, title } = useContext(OtherInfoContext);

    const { bodyValue } = useContext(BodyContext);

    const [result, setResult] = useState<{ success: boolean; id?: string}>({ success: false });
    const [error, setError] = useState(false);

    function handleChangeTitle(evt: React.ChangeEvent<HTMLInputElement>) {
        title.changeValue(evt.target.value);
    }

    function handleChangeImage(evt: React.ChangeEvent<HTMLInputElement>) {
        image.changeValue(evt.target.value);
    }
    
    function handleChangeAuthor(evt: React.ChangeEvent<HTMLInputElement>) {
        author.changeValue(evt.target.value);
    }

    function handleSend() {
        const body = {
            title: title.value,
            image_url: image.value,
            body: bodyValue,
            author: author.value
        }

        api.post('/blog-post', body).then(response => {
            if (response.status === 201) setResult({
                success: true,
                id: response.data.id
            });
            else setError(true);
        }).catch(() => {
            setError(true);
        })
    }

    return (
        <>
            <Container>
                <ButtonBar>
                    <div onClick={clickBack}><FaArrowLeft /><span>Voltar</span></div>
                </ButtonBar>
                <InfoForm>
                    <fieldset>
                        <legend>Informações adicionais</legend>
                        <div className="input-block">
                            <label htmlFor="title">Título</label>
                            <input
                                id="title"
                                type="text"
                                value={title.value}
                                onChange={handleChangeTitle}
                            />
                        </div>
                        
                        <div className="input-block">
                            <label htmlFor="title">URL da imagem</label>
                            <input
                                id="image"
                                type="text"
                                value={image.value}
                                onChange={handleChangeImage}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="author">Autor (opcional)</label>
                            <input
                                id="author"
                                type="text"
                                value={author.value}
                                onChange={handleChangeAuthor}
                            />
                        </div>
                    </fieldset>
                </InfoForm>

                <SendButton onClick={handleSend}>
                    Enviar!
                </SendButton>
            </Container>

            {
                result.success && (
                    <MessageDiv>
                        <div>
                            <h1>Seu post foi adicionado com sucesso!</h1>
                            <FaRegCheckCircle color="green" size={64} />
                            <div>
                                <Link href="/">Voltar à página inicial</Link>
                                <Link href={'/blog/' + result.id}>Ver post</Link>
                            </div>
                        </div>
                    </MessageDiv>
                )
            }

            {
                error && (
                    <MessageDiv>
                        <div>
                            <h1>Ocorreu um erro ao adicionar seu post!</h1>
                            <FaRegTimesCircle color="red" size={64} />
                            <button onClick={() => setError(false)}>Fechar</button> 
                        </div>
                    </MessageDiv>
                )
            }
        </>
    );
}

export default WriteOtherInfo;