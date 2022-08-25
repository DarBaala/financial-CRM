import "./scss/app.scss";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Balance from "./pages/Balance";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/balance" element={<Balance />} />
    </Routes>
  );
}

export default App;
