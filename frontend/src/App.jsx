import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import University1Page from "./pages/University1Page"; // MAIT page
import VJTIPage from "./pages/VJTIPage"; // (new page)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home University Selector */}
        <Route path="/" element={<HomePage />} />

        {/* MAIT Delhi Page */}
        <Route path="/mait" element={<University1Page />} />

        {/* VJTI Mumbai Page */}
        <Route path="/vjti" element={<VJTIPage />} />
      </Routes>
    </BrowserRouter>
  );
}
