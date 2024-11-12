import React from 'react';
import {postService} from "@/services/api.service";
import {IPost} from "@/models/types";

const PostsPage = async () => {
   const posts:IPost[] = await postService.getAllPosts();

    return (
        <div>
            {posts.map((post: IPost) => (
                <div key={post.id}>
                    <h3>{post.id}. {post.title}</h3>
                    <p>{post.body}</p>

                </div>

            ))}
        </div>
    );
};

export default PostsPage;