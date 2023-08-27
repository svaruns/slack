import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

import "./App.css";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app_body">
              <Sidebar />
              <Routes>
                <Route path={"/room/:roomId"} element={<Chat />}></Route>
                <Route path={"/"} element={<div>simha</div>}></Route>
              </Routes>
              {/* react-router --> chat screen */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
