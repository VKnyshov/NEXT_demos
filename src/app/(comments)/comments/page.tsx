import React from 'react';
import {commentService} from "@/services/api.service";
import {IComments} from "@/models/types";

const CommentsPage = async () => {
    const comments:IComments[] = await commentService.getAllComments()

    return (
        <div>
            {
                comments.map((comment) => (

                    <div key={comment.id}>
                        <h3>Comment ID - {comment.id}. {comment.name}</h3>
                        <p> {comment.body}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default CommentsPage;