//Submit data using action in react router dom

// import React, { useRef, useContext } from "react";
// import { PostListContext } from "../Store/PostListContext";
// import { Form, redirect, useNavigate } from "react-router-dom";

// function CreatePost() {

//   return (
//     <>
//       <div className="m-4">
//         <h1 className="display-3">Add a new post</h1>
//         <Form method="POST">
//           <div className="my-3 col-6">
//             <label className="form-label">Enter your user ID</label>
//             <input
//               name='id'
//               type="text"
//               className="form-control"
//               placeholder="User Id"
//             />
//           </div>
//           <div className="my-3 col-6">
//             <label className="form-label">Post Title</label>
//             <input
//               name='title'
//               type="text"
//               className="form-control"
//               placeholder="how are you feeling today.."
//             />
//           </div>
//           <div className="my-3 col-6">
//             <label className="form-label">Post Content</label>
//             <textarea
//               name='content'
//               className="form-control"
//               row="4"
//               placeholder="Tell us more about it"></textarea>
//           </div>
//           <div className="my-3 col-6">
//             <label className="form-label">Number of Reactions</label>
//             <input
//               name='reactions'
//               type="text"
//               className="form-control"
//               placeholder="How many people reacted to this post"
//             />
//           </div>
//           <div className="my-3 col-6">
//             <label className="form-label">Tags</label>
//             <input
//               name="tags"
//               type="text"
//               className="form-control"
//               placeholder="Please enter tags using space"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Post
//           </button>
//         </Form>
//       </div>
//     </>
//   );
// }

// export async function createPostAction (data)  {
//   const formData = await data.request.formData();
//   const postData = Object.fromEntries(formData);
//   console.log(postData);
//   //call api by using fetch meth
//   //navigate('/');

//   return redirect('/posts')
// }

// export default CreatePost;


import React, { useRef, useContext } from "react";
import { PostListContext } from "../Store/PostListContext";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostListContext);
  // const navigate = useNavigate();                     //Navigate Programmitically

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, reaction, tags);

    resetField();
    // navigate('/posts');                                     //Navigate Programmitically
  }

  function resetField() {
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
  }

  return (
    <>
      <div className="m-4">
        <h1 className="display-3">Add a new post</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-3 col-6">
            <label className="form-label">Enter your user ID</label>
            <input
              ref={userIdElement}
              type="text"
              className="form-control"
              placeholder="User Id"
            />
          </div>
          <div className="my-3 col-6">
            <label className="form-label">Post Title</label>
            <input
              ref={postTitleElement}
              type="text"
              className="form-control"
              placeholder="how are you feeling today.."
            />
          </div>
          <div className="my-3 col-6">
            <label className="form-label">Post Content</label>
            <textarea
              ref={postBodyElement}
              className="form-control"
              row="4"
              placeholder="Tell us more about it"></textarea>
          </div>
          <div className="my-3 col-6">
            <label className="form-label">Number of Reactions</label>
            <input
              ref={reactionElement}
              type="text"
              className="form-control"
              placeholder="How many people reacted to this post"
            />
          </div>
          <div className="my-3 col-6">
            <label className="form-label">Tags</label>
            <input
              ref={tagsElement}
              type="text"
              className="form-control"
              placeholder="Please enter tags using space"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
    </>
  );
}

export default CreatePost;
