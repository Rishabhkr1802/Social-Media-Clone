import React, { useContext, useRef } from "react";
import { ViewPostContext } from "../Store/ViewPostContext";

function UploadPost() {
  const { addPost } = useContext(ViewPostContext);

  const userIdElement = useRef();
  const titleElement = useRef();
  const descElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = descElement.current.value;
    const reactions = reactionElement.current.value;
    const tags = tagElement.current.value.split(" ");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        userId: userId,
        body: body,
        reactions: reactions,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
    // addPost(userId, title, body, reactions, tags);
    // reset();
  }

  function reset() {
    userIdElement.current.value = "";
    titleElement.current.value = "";
    descElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";
  }

  return (
    <div className="container">
      <h3 className="display-4 text-center mb-3">Upload Post</h3>
      <form className="form-group mx-5" onSubmit={handleSubmit}>
        <label>User Id:</label>
        <input ref={userIdElement} type="number" className="form-control" />
        <label>Title:</label>
        <input ref={titleElement} type="text" className="form-control" />
        <label>Description:</label>
        <textarea ref={descElement} row="4" className="form-control"></textarea>
        <label>Reactions:</label>
        <input ref={reactionElement} type="text" className="form-control" />
        <label>Tags:</label>
        <input ref={tagElement} type="text" className="form-control" />
        <button className="btn btn-dark my-4">Submit</button>
      </form>
    </div>
  );
}

export default UploadPost;
