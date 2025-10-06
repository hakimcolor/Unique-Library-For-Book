import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Error from '../pages/ErrorPage/Error';
import Home from '../pages/HOme/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch('BookData.json'),
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('BookData.json'),
        Component: BookDetails,
      },
    ],
  },
]);
