import { createContext, useReducer } from "react";

export const ViewPostContext = createContext();

function ViewPostProvider(props) {
  const [post, dispatchPost] = useReducer(ViewPostReducer, []);

  function addPost(userId, title, body, reactions, tags) {
    dispatchPost({
      type: "AddPost",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  }

  function deletePost(id) {
    dispatchPost({
      type: "DeletePost",
      payload: {
        id,
      },
    });
  }

  function addInitialPosts(posts) {
    console.log("a", posts);
    dispatchPost({
      type: "AddInitialPosts",
      payload: {
        posts,
      },
    });
  }

  return (
    <ViewPostContext.Provider
      value={{
        items: post,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts: addInitialPosts,
      }}>
      {props.children}
    </ViewPostContext.Provider>
  );
}

export default ViewPostProvider;

const items = [
  {
    id: 1,
    title: "Rishabh",
    body: "Rishbh rishabh",
    reactions: "fsdfsdfsfsdf",
    tags: ["rere", "dfsdfa", "sdfa"],
  },
  {
    id: 2,
    title: "Rishabh",
    body: "Rishbh rishabh",
    reactions: "fsdfsdfsfsdf",
    tags: ["rere", "dfsdfa", "sdfa"],
  },
  {
    id: 3,
    title: "Rishabh",
    body: "Rishbh rishabh",
    reactions: "fsdfsdfsfsdf",
    tags: ["rere", "dfsdfa", "sdfa"],
  },
  {
    id: 4,
    title: "Rishabh",
    body: "Rishbh rishabh",
    reactions: "fsdfsdfsfsdf",
    tags: ["rere", "dfsdfa", "sdfa"],
  },
];

function ViewPostReducer(postList, action) {
  let newPostList = postList;
  if (action.type === "DeletePost") {
    newPostList = postList.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "AddInitialPosts") {
    newPostList = action.payload.posts;
  } else if (action.type === "AddPost") {
    newPostList = [action.payload, ...newPostList];
  }
  return newPostList;
}
