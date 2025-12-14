import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailsPage from "./DetailsPage";
import FormPage from "./FormPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
