import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import AxiosPost from "./components/AxiosPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddNew from "./components/AddNew";
import Update from "./components/Update";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addnew" element={<AddNew />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      {/* <AxiosPost /> */}
    </div>
  );
}

export default App;
