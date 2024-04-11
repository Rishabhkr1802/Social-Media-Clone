import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { ViewPostContext } from "../Store/ViewPostContext";

function ViewPostList() {
  const { items, addInitialPosts } = useContext(ViewPostContext);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(data => addInitialPosts(data.posts));
  }, []);

  return (
    <>
      {items.map((item) => {
        return <Post key={item.id} item={item} />;
      })}
    </>
  );
}

export default ViewPostList;

/* <h2>Total no of posts: </h2> */
