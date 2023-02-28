/* eslint-disable react/display-name */
import { Suspense, lazy, ElementType } from 'react'

// components
import LoadingScreen from '../components/loading-screen'

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )

// ----------------------------------------------------------------------

export const LoginPage = Loadable(lazy(() => import('../pages/auth/LoginPage')))
export const RegisterPage = Loadable(
  lazy(() => import('../pages/auth/RegisterPage')),
)
export const ResetPasswordPage = Loadable(
  lazy(() => import('../pages/auth/ResetPasswordPage')),
)
export const NewPasswordPage = Loadable(
  lazy(() => import('../pages/auth/NewPasswordPage')),
)
export const VerifyCodePage = Loadable(
  lazy(() => import('../pages/auth/VerifyCodePage')),
)

export const Widgets = Loadable(lazy(() => import('../pages/Widgets')))
export const Settings = Loadable(lazy(() => import('../pages/Settings')))
export const Payments = Loadable(lazy(() => import('../pages/Payments')))

export const Page404 = Loadable(lazy(() => import('../pages/Page404')))
