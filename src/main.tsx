import React from 'react';
import ReactDOM from 'react-dom/client'
import { AuthPage, BlogPage, DashboardPage, LandingPage, SettingsPage, WidgetsPage } from './pages';
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils';

const router = createBrowserRouter([
  { path: "/page/", element: <LandingPage></LandingPage> },
  { path: "/blog", element: <BlogPage></BlogPage> },
  { path: "/auth", element: <AuthPage></AuthPage> },
  { path: "/dashboard", element: <DashboardPage></DashboardPage> },
  { path: "/settings", element: <SettingsPage></SettingsPage> },
  { path: "/widgets", element: <WidgetsPage></WidgetsPage> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  	<React.StrictMode>
    	<ThemeProvider theme={theme}>
      		<RouterProvider router={router} />
    	</ThemeProvider>
  	</React.StrictMode>,
)