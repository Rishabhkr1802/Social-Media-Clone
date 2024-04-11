import React, { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";
import UploadPost from "./Component/UploadPost";
import ViewPostList from "./Component/ViewPostList";
import ViewPostProvider from "./Store/ViewPostContext";

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  const showComponent =
    selectedPage === "Home" ? (
      <Home />
    ) : selectedPage === "UploadPost" ? (
      <UploadPost />
    ) : (
      <ViewPostList />
    );

  return (
    <>
      <Header />
      <ViewPostProvider>
        <div className="d-flex">
          <Sidebar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <div className="container">{showComponent}</div>
        </div>
      </ViewPostProvider>
      <Footer />
    </>
  );
}

export default App;
