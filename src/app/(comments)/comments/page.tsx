import React from 'react';
import {commentService} from "@/services/api.service";
import {IComment} from "@/models/types";
import Link from "next/link";

const CommentsPage = async () => {
    const comments:IComment[] = await commentService.getAllComments()

    return (
        <div>
            {
                comments.map((comment) => (

                    <div key={comment.id}>

                        <Link href={`/comments/${comment.id}`}><h3>Comment ID - {comment.id}. {comment.name}</h3></Link>

                    </div>
                ))
            }
        </div>
    );
};

export default CommentsPage;