import {useContext } from "react";
 import ThemeContext from "./context/ThemeContext";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Errorpage from "./Errorpage";
import EditTask from "./pages/editTask";

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Errorpage/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/edittask/:stringId",
    element: <EditTask/>,
  },
  
  
  
]);

function App() {
  const {theme} = useContext(ThemeContext);
  return (
  <div className={`${theme}`}>
    <RouterProvider router={router} />
  </div>
    
  );
}

export default App;
