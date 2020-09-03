import React from 'react';
import { GetServerSideProps } from 'next';
import { api } from '../../axiosconfig';    

import ViewPostPage from '../../_pages/ViewPostPage';
import { AxiosResponse } from 'axios';

interface BlogPostProps {
    data?: {
        title: string;
        image_url: string;
        body: string;
        author?: string;
    } | null,
    error: any;
}

const ViewPost: React.FC<BlogPostProps> = props => {    
    return props.data ? <ViewPostPage postData={props.data} /> : (
        <div style={{color: 'white'}}>Ocorreu um erro ao carregar os dados.</div>
    );
}

export default ViewPost

export const getServerSideProps: GetServerSideProps<BlogPostProps> = async context => {
    const id = String(context.params?.id);
    
    const props = await api.get<any, AxiosResponse<BlogPostProps['data']>>(`/blog-post/${id}`).then(response => {
        return {
            data: response.data,
            error: null
        };
    }).catch(err => {
        console.log(err);
        return {
            data: null,
            error: JSON.stringify(err)
        }
    });

    return {
        props
    };
}