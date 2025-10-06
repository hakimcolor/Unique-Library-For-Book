import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root/Root';
import Error from '../pages/ErrorPage/Error';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: () => fetch('/BookData.json').then((res) => res.json()), 
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('/BookData.json').then((res) => res.json()), 
        element: <BookDetails />,
      },
    ],
  },
]);
