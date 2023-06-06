import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import UserSearch from "./components/UserSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserSearch />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
