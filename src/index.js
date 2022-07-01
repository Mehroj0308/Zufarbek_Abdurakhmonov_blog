import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from "./Components/Enter/Entering.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import About from "./Components/About/About"
import Asosiy_page from "./Components/Home/Umumiy"
import Works from './Components/Work/Work'
import Videos from './Components/Videos/Videos'
// import Entering from './Components/Entering/Entering'
// import Home from './Components/Home/Home'
// import Navbar from './Components/Home/Navbar/Navbar'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Enter/>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/home" element={<Asosiy_page/>} />
          <Route path="/works" element={<Works/>} />
          <Route path="/videos" element={<Videos/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
