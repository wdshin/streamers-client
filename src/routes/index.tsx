import { Navigate, useRoutes } from 'react-router-dom'

import AuthGuard from '../auth/AuthGuard'
import GuestGuard from '../auth/GuestGuard'
import CompactLayout from '../layouts/compact'
import DashboardLayout from '../layouts/dashboard'
import { PATH_AFTER_LOGIN } from '../config-global'

import {
  Page404,
  Widgets,
  Settings,
  LoginPage,
  Payments,
  RegisterPage,
  ResetPasswordPage,
  NewPasswordPage,
  VerifyCodePage,
} from './elements'

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: 'login',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
        { path: 'login-unprotected', element: <LoginPage /> },
        { path: 'register-unprotected', element: <RegisterPage /> },
        {
          element: <CompactLayout />,
          children: [
            { path: 'reset-password', element: <ResetPasswordPage /> },
            { path: 'new-password', element: <NewPasswordPage /> },
            { path: 'verify', element: <VerifyCodePage /> },
          ],
        },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'widgets', element: <Widgets /> },
        { path: 'settings', element: <Settings /> },
        { path: 'payments', element: <Payments /> },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])
}
