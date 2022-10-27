import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Search from "./pages/Search";
import ErrorPage from "./pages/Error";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sales/",
    element: <Search />,
    errorElement: <ErrorPage />

  },
  {
    path: "/sales/:id",
    element: <Sales />,
    errorElement: <ErrorPage />

  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <ErrorPage />

  },
]);

const queryClient = new QueryClient()

const App = () => {
 
  return (
    <QueryClientProvider client={queryClient }>
      <RouterProvider router={browserRouter} />
    </QueryClientProvider>
  )
}

export default App