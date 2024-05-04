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
            </Routes>
          </Suspense>
        </div>
        {path === "/Login" ? null : <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;
