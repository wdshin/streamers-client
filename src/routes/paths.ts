// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`
}

const ROOTS_DASHBOARD = '/dashboard'
// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
  register: '/register',
  loginUnprotected: '/login-unprotected',
  registerUnprotected: '/register-unprotected',
  verify: '/verify',
  resetPassword: '/reset-password',
  newPassword: '/new-password',
}

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  widgets: path(ROOTS_DASHBOARD, '/widgets'),
  settings: path(ROOTS_DASHBOARD, '/settings'),
  payments: path(ROOTS_DASHBOARD, '/payments'),
}
