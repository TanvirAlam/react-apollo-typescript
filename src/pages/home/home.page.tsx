import React from 'react';
import { Post } from '../../common/interfaces/post.interface';
import PostsGrid from '../../components/post-grid/posts-grid.component';
import './home.page.css';

const Home: React.FC = () => {
    const posts: Post[] = [
        {
            id: "1",
            title: "Title1",
            body: "Body1",
        }
    ];

    return (
        <div className="container">
            <PostsGrid posts={ posts } />
        </div>
    )
}

export default Home;
