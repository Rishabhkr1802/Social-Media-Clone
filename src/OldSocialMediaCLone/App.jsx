//with Router navigate 
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import Sidebar from "./Components/Sidebar";

// import PostListProvider from "./Store/PostListContext";
// import { Outlet } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Header />
//       <PostListProvider>
//         <div className="d-flex">
//           <Sidebar />
//           <Outlet />
//         </div>
//       </PostListProvider>
//       <Footer />
//     </>
//   );
// }

// export default App;

//Without Router navigate using useState()

import { useState } from "react";

import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import Sidebar from "./Components/Sidebar";
import Welcome from "./Components/Welcome";

import PostListProvider from "./Store/PostListContext";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const showComponentByClicking =
    selectedTab === "Home" ? (
      <Welcome />
    ) : selectedTab === "CreatePost" ? (
      <CreatePost />
    ) : (
      <PostList />
    );

  return (
    <>
      <Header />
      <PostListProvider>
        <div className="d-flex">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="container">{showComponentByClicking}</div>
        </div>
      </PostListProvider>
      <Footer />
    </>
  );
}

export default App;
