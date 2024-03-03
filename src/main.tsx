import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils';
import { Loader } from './components/common';

const LandingPage = lazy(() =>  import('./pages/Landing/Landing.page').then((module) => ({ default: module.LandingPage })));
const BlogPage = lazy(() => import('./pages/Blog/Blog.page').then((module) => ({ default: module.BlogPage })));
const AuthPage = lazy(() => import('./pages/Auth/Auth.page').then((module) => ({ default: module.AuthPage })));
const DashboardPage = lazy(() => import('./pages/Dashboard/Dashboard.page').then((module) => ({ default: module.DashboardPage })));
const SettingsPage = lazy(() => import('./pages/Settings/Settings.page').then((module) => ({ default: module.SettingsPage })));
const WidgetsPage = lazy(() => import('./pages/Widgets/Widgets.page').then((module) => ({ default: module.WidgetsPage })));

const router = createBrowserRouter([
  { path: "/page/", element: <Suspense fallback={<Loader />}><LandingPage /></Suspense> },
  { path: "page/blog", element: <Suspense fallback={<Loader />}><BlogPage /></Suspense> },
  { path: "page/auth", element: <Suspense fallback={<Loader />}><AuthPage /></Suspense> },
  { path: "page/dashboard", element: <Suspense fallback={<Loader />}><DashboardPage /></Suspense> },
  { path: "page/settings", element: <Suspense fallback={<Loader />}><SettingsPage /></Suspense> },
  { path: "page/widgets", element: <Suspense fallback={<Loader />}><WidgetsPage /></Suspense> }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  	<React.StrictMode>
    	<ThemeProvider theme={theme}>
      		<RouterProvider router={router} />
    	</ThemeProvider>
  	</React.StrictMode>,
)