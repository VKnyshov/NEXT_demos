import React from 'react';

const CommentPageById = async ({params}: { params: { id: string } }) => {
    const comment = await fetch(`http://jsonplaceholder.typicode.com/comments/${params.id}`, {})
        .then(res => res.json())
    return (
        <div>
            <div>
                <h3> Number of comment  - {comment.id}. </h3>
                <p>Comment for post {comment.postId} </p>
                <p>User email: {comment.email}</p>
                <h4> Comment name: {comment.name}</h4>
                <p> Body: {comment.body}</p>

            </div>

        </div>
    );
};

export default CommentPageById;