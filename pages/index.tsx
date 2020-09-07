import React from 'react';
import { GetServerSideProps } from 'next';
import { AxiosResponse } from 'axios';
import LandingPage from '../_pages/LandingPage';
import { ICard } from '../_pages/LandingPage/components/CardsList/components/Card';
import { api } from '../axiosconfig';

interface homepageProps {
    data: ICard[],
    error: any;
}

const HomePage: React.FC<homepageProps> = ({ data, error }) => {
    return data ? <LandingPage first_cards={data} /> : (
        <div style={{
            color: 'white',
            width: '100%',
            textAlign: 'center'
        }}>
            Ocorreu um erro ao carregar a página.
        </div>
    );
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = async () => {
    const props = await api.get<any, AxiosResponse<homepageProps['data']>>(`/blog-posts`).then(response => {
        return {
            data: response.data,
            error: null
        };
    }).catch(err => {
        return {
            data: null,
            error: JSON.stringify(err)
        }
    });

    return {
        props
    };
}
