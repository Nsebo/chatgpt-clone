import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/homepage/Homepage';
import DashboardPage from './routes/dashboardPage/dashboardPage';
import ChatPage from './routes/chatpage/chatpage';
import RootLayout from './layouts/rootLayout/RootLayout';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import SignInPage from './routes/signInPage/signInPage';
import SignUpPage from './routes/signUpPage/signUpPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/sign-in/*',
        element: <SignInPage />,
      },
      {
        path: '/sign-up/*',
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardPage />,
          },
          {
            path: '/dashboard/chats/:id',
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
