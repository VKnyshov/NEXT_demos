import React from 'react';
import {IComment, IPost} from "@/models/types";

const PostsPageId = async ({ params }: { params: { id: string } }) => {
    const users = await fetch(`http://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(res => res.json());

    const posts = await fetch('http://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json());

    const comments = await fetch('http://jsonplaceholder.typicode.com/comments/')
        .then(res => res.json());

    return (
        <div>
            <h3>{users.name}</h3>
            {
                posts.filter((post: IPost) => post.userId === users.id)
                    .map((post: IPost) => (
                        <div key={post.id}>
                            <h4>{post.id}. {post.title}</h4>
                            <p>{post.body}</p>
                            <ul>
                                {comments.filter((comment:IComment) => comment.postId === post.id)
                                    .map((comment: IComment) => (
                                        <li key={comment.id}>
                                            <h5>{comment.name}</h5>
                                            <p>{comment.body}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))
            }

        </div>
    );
};

export default PostsPageId;