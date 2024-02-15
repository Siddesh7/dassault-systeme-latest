// components/CommentsSection.js
import React from "react";
import {CommentSchemaType} from "../models/Comments";
interface Comment {
  comments: CommentSchemaType[];
}

const CommentsSection: React.FC<Comment> = ({comments}) => {
  return (
    <div className="space-y-4 mt-8">
      <h3 className="mb-4 text-2xl font-semibold text-white">
        Comments ({comments.length})
      </h3>
      <div className="space-y-2">
        {comments.map((comment, index) => (
          <div key={index} className="chat chat-start w-full">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={comment.image}
                />
              </div>
            </div>
            <div className="chat-header w-full">
              {comment.from}
              <time className="text-xs opacity-50 mx-2">
                {new Date(comment.createdAt).toDateString()}
              </time>
            </div>
            <div className="chat-bubble bg-white/10 w-full min-h-[40px] rounded-xl">
              {comment.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
