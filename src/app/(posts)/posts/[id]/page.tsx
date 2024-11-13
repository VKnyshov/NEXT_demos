import React from 'react';

const PostsPageById = async ({ params }: { params: { id: string } }) => {
    const post = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(res => res.json());
    return (
        <div>
            <h3>{post.id}. {post.title} (by user: {post.userId})</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostsPageById;