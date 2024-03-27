import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import BookDetails from './Components/BookDetails/BookDetails';
import ReadList from './Components/ReadList/ReadList';
import WhiteList from './Components/WhiteList/WhiteList';
import PagesToRead from './Components/PagesToRead/PagesToRead';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../Books.json'),
      },
      {
        path: "/to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('Books.json'),
        children: [
          {
            index:true,
            path: 'read-book',
            element: <ReadList></ReadList>,
          },
          {
            path: 'whitelist-books',
            element: <WhiteList></WhiteList>,
          },
        ],
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
