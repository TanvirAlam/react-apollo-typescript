import React from 'react';
import PostsGrid from '../../components/posts/posts-grid/posts-grid.component';
import { useGetPost } from '../../hooks/posts/useGetPosts';
import './home.page.css';

const Home: React.FC = () => {
    const posts = useGetPost();

    return (
        <div className="container">
            <PostsGrid posts={ posts || [] } />
        </div>
    )
}

export default Home;
