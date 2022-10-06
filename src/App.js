import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';

import Friends from './components/Friends/Friends';
import Mane from './Layout/Mane';
import FriendsDetails from './components/FriendsDetails/FriendsDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Mane></Mane>,
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/Home', element: <Home></Home> },
        { path: 'products', element: <Products></Products> },
        {
          path: 'friends',
          loader: async () =>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        },

        {
          path: '/friend/:friendId',
          loader:async ({params}) =>{
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendsDetails></FriendsDetails>
        }

      ]
    },

    { path: '/About', element: <About></About> },
    { path: '*', element: <div>The Route not found</div> },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
