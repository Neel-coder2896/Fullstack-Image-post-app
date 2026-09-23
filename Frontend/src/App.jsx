import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<CreatePost />}
        />

        <Route
          path="/posts"
          element={<Posts />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;