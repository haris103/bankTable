import React from "react";
import File from "./Components/File";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allbanks from "./Components/Allbanks";
import Favouritebanks from "./Components/Favouritebanks";

const App = () => {
  return (
    <div>
      <File />
      {/* <Routes>
        <Route path="/" element={<Allbanks />} />
        <Route path="/favourite" element={<Favouritebanks />} />
      </Routes> */}
    </div>
  );
};

export default App;
