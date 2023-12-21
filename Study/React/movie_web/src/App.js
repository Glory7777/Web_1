import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        {/* 추가적인 라우트들을 정의하세요 */}
      </Routes>
    </Router>
  );
}

export default App;
