import React from 'react';
import { Container } from './styles';

const PostData: React.FC = props => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default PostData;