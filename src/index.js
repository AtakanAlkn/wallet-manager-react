import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import ExpensePage from "./pages/ExpensePage/ExpensePage";
import IncomePage from "./pages/IncomePage/IncomePage";
import TransactionPage from "./pages/TransactionPage/TransactionPage";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/transaction",
    element: <TransactionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/expense",
    element: <ExpensePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/income",
    element: <IncomePage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
