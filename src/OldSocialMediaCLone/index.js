// With router dom 

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import CreatePost, { createPostAction }from "./Components/CreatePost";
// import Welcome from "./Components/Welcome";
// import PostList from "./Components/PostList";

// const router = createBrowserRouter([
//   {
//     path: "/", element: <App />, children: [
//       { path: "/", element: <Welcome /> },
//       // { path: "/create-post", element: <CreatePost /> },
//       { path: "/create-post", element: <CreatePost />, action: createPostAction, },  // submit data using action
//       { path: "/posts", element: <PostList /> },
//       // { path: "/posts", element: <PostList />, loader: ()=>{} },  // fetch data using loader;
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

//Without Using Router Dom
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
