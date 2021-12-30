import React from 'react';
import { Post } from '../../../common/interfaces/post.interface';
import './posts-grid-item.component.css';

const PostsGridItem: React.FC<{ post: Post }> = ({ post } : { post: Post }) => {
    return (
        <div>
            <ul>
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
            </ul>
        </div>
    )
}

export default PostsGridItem;
