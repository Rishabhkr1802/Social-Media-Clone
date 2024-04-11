//With Router... navigation

// import React from "react";
// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <>
//       <div
//         className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
//         style={{ width: "280px" }}>
//         <hr />
//         <ul className="nav nav-pills flex-column mb-auto">
//           <li>
//             <Link to={"/"}>Home</Link>
//           </li>
//           <li>
//             <Link to={"/create-post"}>Create Post</Link>
//           </li>
//           <li>
//             <Link to={"/posts"}>See All Post</Link>
//           </li>
//         </ul>
//         <hr />
//       </div>
//     </>
//   );
// }

// export default Sidebar;

//without Router navigation using useState() hook

import React from "react";

function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
        style={{ width: "280px" }}>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li
            onClick={() => {
              setSelectedTab("Home");
            }}>
            <a className={`nav-link ${selectedTab === "Home" && "active"} `}>
              Home
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("CreatePost");
            }}>
            <a
              className={`nav-link ${
                selectedTab === "CreatePost" && "active"
              } `}>
              Create Post
            </a>
          </li>
          <li
            onClick={() => {
              setSelectedTab("PostList");
            }}>
            <a
              className={`nav-link ${selectedTab === "PostList" && "active"} `}>
              See All Post
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}

export default Sidebar;
