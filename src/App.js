import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Cart from './components/Cart';

const AppLayout = () => {
  const [userName, setUserName] = useState()

  useEffect(() => {
    const data = {
      name: "Nikita sawant"
    }
    setUserName(data.name)
  }, []);


  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => (import('./components/Grocery')))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<div>Loading</div>}><Grocery /></Suspense>,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ]
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={appRouter} />
);