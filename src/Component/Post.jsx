import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ViewPostContext } from "../Store/ViewPostContext";

function Post(props) {
  const {deletePost} = useContext(ViewPostContext);

  return (
    <div className="card m-4">
      <div className="card-body">
        <h5 className="card-title">
          {props.item.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(props.item.id);
            }}>
            <MdDelete />
          </span>
        </h5>

        <p className="card-text">{props.item.body}</p>

        {props.item.tags.map((tag) => (
          <span key={Math.random()} className="badge text-bg-success mx-1">
            {"#" + tag}
          </span>
        ))}
        <div className="alert alert-success my-2" role="alert">
          This post has been reacted by {props.item.reactions} people.
        </div>
      </div>
    </div>
  );
}

export default Post;
