import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "박영광",
        comment: "Hi, i'm glory",
    },
    {
        name: "강호동",
        comment: "리액트 먹는건가유?",
    },
    {
        name : "김지선",
        comment: " 리액트 배워볼래용",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) =>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;