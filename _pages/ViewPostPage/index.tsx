import React from 'react';
import ReactMarkdown from 'react-markdown';
import Topbar from '../../components/Topbar';
import PostContent from './components/PostData';

interface ViewPostProps {
    postData: {
        title: string;
        image_url: string;
        body: string;
        author?: string;
    };
}

const ViewPostPage: React.FC<ViewPostProps> = ({ postData }) => {
    return (
        <>
            <Topbar />
            <PostContent>
                <h1>{postData.title}</h1>
                <img src={postData.image_url} />
                <div id="body">
                    <ReactMarkdown source={postData.body}/>
                </div>
            </PostContent>
        </>
    )
}

export default ViewPostPage