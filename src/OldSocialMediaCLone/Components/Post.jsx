import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../Store/PostListContext";

function Post(props) {
  const { deletePost } = useContext(PostListContext);

  return (
    <div>
      <div className="card m-4">
        <div className="card-body">
          <h5 className="card-title">
            {props.post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              // onClick={() => {
              //   deletePost(props.post.id);
              // }}
              >
              <MdDelete />
            </span>
          </h5>

          <p className="card-text">{props.post.body}</p>
          
          {props.post.tags.map((tag) => (
            <span key={Math.random()} className="badge text-bg-success mx-1">
              {"#" + tag}
            </span>
          ))}
          <div className="alert alert-success my-2" role="alert">
            This post has been reacted by {props.post.reactions} people.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
