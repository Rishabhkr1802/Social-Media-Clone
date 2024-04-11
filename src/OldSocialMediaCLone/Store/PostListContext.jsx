import { createContext, useReducer } from "react";

export const PostListContext = createContext([
  {
    itemName: [],
    addPost: () => {},
    addInitialPosts: () => {},
    deletePost: () => {},
  },
]);

function postListReducer(currentPostList, action) {
  let newPostList = currentPostList;
  if (action.type === "ADD_POSTLIST_ITEM") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTLIST_ITEMS") {
    newPostList = action.payload.posts;
  } else if (action.type === "DELETE_POSTLIST_ITEM") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  }
  return newPostList;
}

const PostListProvider = (props) => {
  // const [currentList, dispatchCurrentList] = useReducer(
  //   postListReducer,
  //   DEFAULT_POSTLIST
  // );

  const [currentList, dispatchCurrentList] = useReducer(
    postListReducer,
    []
  );

  function addedPost(userId, title, body, reactions, tags) {
    dispatchCurrentList({
      type: "ADD_POSTLIST_ITEM",
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

  function addInitialPosts(posts) {
    dispatchCurrentList({
      type: "ADD_INITIAL_POSTLIST_ITEMS",
      payload: {
        posts,
      },
    });
  }

  function deletedPost(id) {
    dispatchCurrentList({
      type: "DELETE_POSTLIST_ITEM",
      payload: {
        id,
      },
    });
  }

  return (
    <PostListContext.Provider
      value={{
        itemName: currentList,
        addPost: addedPost,
        addInitialPosts,
        deletePost: deletedPost,
      }}>
      {" "}
      {props.children}
    </PostListContext.Provider>
  );
};

/* const DEFAULT_POSTLIST = [
  {
    id: 1,
    title: "Go to mumbai",
    body: "Hi Friends i am going to mumbai come and going me.",
    reactions: 1000,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Trend"],
  },
  {
    id: 2,
    title: "Go to Maldives",
    body: "Hi Friends i am going to maldives come and going me.",
    reactions: 10000,
    userId: "user-10",
    tags: ["vacation", "Maldives", "Trend"],
  },
]; */

export default PostListProvider;
