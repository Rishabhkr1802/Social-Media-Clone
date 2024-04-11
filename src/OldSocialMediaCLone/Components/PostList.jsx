import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/PostListContext";
import NoPost from "./NoPost";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { itemName, addInitialPosts } = useContext(PostListContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  function handlePostFromServer() {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPosts(data.posts));
  }

  return (
    <>
      <div className="mx-3 my-4">
        {loading && <LoadingSpinner />}
        {!loading && itemName.length === 0 && (
          <NoPost onGetAllPosts={handlePostFromServer} />
        )}

        {!loading && itemName.length > 0 && (
          <h2 className="display-4">No. of all Posts</h2>
        )}
        {!loading &&
          itemName.map((post) => (
            <Post className="m-3" key={post.id} post={post} />
          ))}
      </div>
    </>
  );
}

export default PostList;

/* 
<div className="mx-3 my-4">
        <div className="row my-2">
          <div className="col-4">
          <Post key={post.id} post={post} />
          </div>
          <div className="col-4">
          <Post key={post.id} post={post} />
          </div>
          <div className="col-4">
          <Post key={post.id} post={post} />
          </div>
        </div>
      </div>
*/
