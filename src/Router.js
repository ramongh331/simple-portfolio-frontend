import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Show from "./pages/Show";


const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Home/>}/>
        <Route path=":id" element={<Show/>}/>
      </Route>
    )
  );
  
  export default Router