import React, { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/nav";
import Main from "./pages/main/main";
import Footer from "./components/footer";

import "./styles/global.css";

// 페이지

const KitListPage = React.lazy(() => import("./pages/kitList"));
const Login = React.lazy(() => import("./pages/login"));
const Search = React.lazy(() => import("./pages/search"));
const Support = React.lazy(() => import("./pages/support"));

const Mypage = React.lazy(() => import("./pages/[...afterLogin]/myPage"));
const BookMark = React.lazy(() => import("./pages/[...afterLogin]/bookmark"));

const BoardDetail = React.lazy(() => import("./components/board/boardDetail"));

function App() {
  const path = window.location.pathname;
  console.log(path);
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/Login" element={<Login />} />
              {/* 사용자관리 */}
              <Route exact path="/KitList" element={<KitListPage />} />
              <Route exact path="/Search" element={<Search />} />
              <Route exact path="/Support" element={<Support />} />

              <Route path="/board/:idx" element={<BoardDetail />} />
              {/*로그인 전용 */}
              <Route exact path="/Mypage" element={<Mypage />} />
              <Route exact path="/Bookmark" element={<BookMark />} />
            </Routes>
          </Suspense>
        </div>
        {path === "/Login" ? null : <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
