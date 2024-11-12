import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/my-portfolio",
    element: <Layout />,
    children: [
      // {
      //   index:true,
      //   element: <Navigate to = "/my-portfolio/" replace />
      // },
      {
        path:"",
        element:<Home/>
      },
      // {
      //   path: "projects",
      //   element: <Projects />
      // }
    ]
  }
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
