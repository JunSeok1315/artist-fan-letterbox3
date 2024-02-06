import Detail from "pages/Detail";
import Home from "pages/Home";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import fakeData from "fakeData.json";

function Router() {
  const [letters, setLetters] = useState(fakeData);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home letters={letters} setLetters={setLetters} />}
        ></Route>
        <Route
          path="/detail/:id"
          element={<Detail letters={letters} setLetters={setLetters} />}
        ></Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
