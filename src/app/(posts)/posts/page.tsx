import React from 'react';
import {postService} from "@/services/api.service";
import {IPost} from "@/models/types";
import Link from "next/link";

const PostsPage = async () => {
   const posts:IPost[] = await postService.getAllPosts();

    return (
        <div>
            {posts.map((post: IPost) => (
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`}><h3>{post.id}. {post.title}</h3></Link>
                </div>

            ))}
        </div>
    );
};

export default PostsPage;