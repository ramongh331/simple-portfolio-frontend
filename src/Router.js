import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Show from "./pages/Show";
import { projectsLoader } from "./Loaders";


const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Home/>} loader={projectsLoader}/>
        <Route path=":id" element={<Show/>}/>
      </Route>
    )
  );
  
  export default Router