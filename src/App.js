import HomePage from "./pages/HomePage";
import DonatePage from "./pages/DonatePage";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/donate"
          element={
            <>
              <DonatePage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
