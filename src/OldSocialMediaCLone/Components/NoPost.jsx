import React from "react";

function NoPost({ onGetAllPosts }) {
  return (
    <>
      <div className="container">
        <h3 className="display-5">There is no post added by user.</h3>
        <p>If you get all post by clicking below button.</p>
        <center>
          <button className="btn btn-primary" onClick={onGetAllPosts}>
            Get all post from server
          </button>
        </center>
      </div>
    </>
  );
}

export default NoPost;
