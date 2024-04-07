import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllRefactors } from "./pages/AllRefators";
import { Chat } from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AllRefactors />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
