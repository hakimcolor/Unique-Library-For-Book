import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Error from '../pages/ErrorPage/Error';
import Home from '../pages/HOme/Home';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);
