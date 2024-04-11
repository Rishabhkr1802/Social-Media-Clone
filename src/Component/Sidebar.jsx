import React from "react";

function Sidebar({ selectedPage, setSelectedPage }) {
  return (
    <>
      <div className="d-flex flex-column bg-dark w-25 text-center min-vh-100">
        <ul className="nav nav-pills">
          <li
            className="p-3"
            onClick={() => {
              setSelectedPage("Home");
            }}>
            <a className={`nav-link ${selectedPage === "Home" && "active"}`}>
              Home
            </a>
          </li>
          <li
            className="p-3"
            onClick={() => {
              setSelectedPage("UploadPost");
            }}>
            <a
              className={`nav-link ${
                selectedPage === "UploadPost" && "active"
              }`}>
              Upload Post
            </a>
          </li>
          <li
            className="p-3"
            onClick={() => {
              setSelectedPage("ViewPost");
            }}>
            <a
              className={`nav-link ${selectedPage === "ViewPost" && "active"}`}>
              View Posts
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
