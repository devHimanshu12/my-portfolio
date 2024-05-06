import Banner from "./components/Banner/Banner";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[{
      path:"my-portfolio",
      element:<Banner/>
    }]
  }
])

function App() {

  return <RouterProvider router={routes}/>
}

export default App
