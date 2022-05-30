import React from 'react';
import TodoContainer from "./components/TodoContainer";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<TodoContainer />} />
      <Route path="/about/*" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
}

export default App;
