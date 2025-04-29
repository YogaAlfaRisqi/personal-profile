// src/router/index.jsx
import { createBrowserRouter } from "react-router"
import App from "@/App"         // Ini seharusnya layout (berisi sidebar dan <Outlet />)
import Home from "@/pages/home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,         // App sebagai layout utama
    children: [
      {
        path: "home",         // /home => children of layout
        element: <Home />,
      },
      // Tambahkan rute lain di sini
    ],
  },
])

export default router
