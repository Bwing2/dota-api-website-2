import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";
import About from "./pages/About.jsx";
// import Login from "./pages/Login.jsx";
// import SignUp from "./pages/SignUp.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "about",
        element: <About />,
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      // {
      //   path: "signUp",
      //   element: <SignUp />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
