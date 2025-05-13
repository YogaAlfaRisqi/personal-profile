// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom"
import App from "@/App"         // App sebagai MainLayout (berisi <Outlet />)
import Home from "@/pages/home"
import WebPage from "@/pages/projects/webPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,           // Main Layout
    children: [
      {
        index: true,           // Ini menjadikan /home sebagai default
        element: <Home />,
      },
      {
        path: "home",          // Tetap support /home secara eksplisit
        element: <Home />,
      },
      {
        path: "projects/web",
        element: <WebPage />,
      },
    ],
  },
])

export default router
