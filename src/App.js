import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';

import Friends from './components/Friends/Friends';
import Mane from './Layout/Mane';

function App() {
  const router =createBrowserRouter([
    {path: '/', element: <Mane></Mane> ,
     children:[
      {path:'/', element: <Home></Home>},
      {path:'/Home', element:<Home></Home> },
      {path: 'products', element: <Products></Products>},
      {path: 'friends', element: <Friends></Friends>},

     ]
    },
    
    {path:'/About', element: <About></About> },

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
