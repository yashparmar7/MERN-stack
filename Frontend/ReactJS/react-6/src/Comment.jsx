import React, { useState } from "react";
import CommentsForm from "./CommentsForm";
import "./Comment.css";

const Comment = () => {
  let [comment, setComment] = useState([
    {
      username: "yash",
      remark: "hello",
      rating: "5",
    },
  ]);

  let addNewComment = (comment) => {
    setComment((currComment) => [...currComment, comment]);
  };
  return (
    <div>
      <h4>Show Comments</h4>

      {comment.map((comment, idx) => (
        <div className="comments" key={idx}>
          <span>username : {comment.username}</span> <br />
          <span>remark : {comment.remark}</span>
          <br />
          <span>rating : {comment.rating}</span>
        </div>
      ))}

      <hr />
      <hr />

      <CommentsForm addNewComment={addNewComment} />
    </div>
  );
};

export default Comment;
