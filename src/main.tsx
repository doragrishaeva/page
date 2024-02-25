import React from 'react';
import ReactDOM from 'react-dom/client'
import { AuthPage, BlogPage, DashboardPage, LandingPage, SettingsPage, WidgetsPage } from './pages';
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils';

const router = createBrowserRouter([
  { path: "/page/", element: <LandingPage></LandingPage> },
  { path: "page/blog", element: <BlogPage></BlogPage> },
  { path: "page/auth", element: <AuthPage></AuthPage> },
  { path: "page/dashboard", element: <DashboardPage></DashboardPage> },
  { path: "page/settings", element: <SettingsPage></SettingsPage> },
  { path: "page/widgets", element: <WidgetsPage></WidgetsPage> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  	<React.StrictMode>
    	<ThemeProvider theme={theme}>
      		<RouterProvider router={router} />
    	</ThemeProvider>
  	</React.StrictMode>,
)