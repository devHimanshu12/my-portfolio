import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/my-portfolio",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Navigate to = "/my-portfolio/home" replace />
      },
      {
        path:"home",
        element:<Home/>
      },
      {
        path: "projects",
        element: <Projects />
      }
    ]
  }
])

function App() {

  return <RouterProvider router={routes} />
}

export default App
