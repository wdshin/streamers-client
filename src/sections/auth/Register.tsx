import { Link as RouterLink } from 'react-router-dom'
// @mui
import { Stack, Typography, Link } from '@mui/material'

import LoginLayout from '../../layouts/login'
import { PATH_AUTH } from '../../routes/paths'

import AuthRegisterForm from './AuthRegisterForm'

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <LoginLayout title="Accept Crypto Donations Hassle-Free">
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Get started absolutely free.</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2"> Already have an account? </Typography>

          <Link to={PATH_AUTH.login} component={RouterLink} variant="subtitle2">
            Sign in
          </Link>
        </Stack>
      </Stack>

      <AuthRegisterForm />

      <Typography
        component="div"
        sx={{
          color: 'text.secondary',
          mt: 3,
          typography: 'caption',
          textAlign: 'center',
        }}>
        {'By signing up, I agree to '}
        <Link underline="always" color="text.primary">
          Terms of Service
        </Link>
        {' and '}
        <Link underline="always" color="text.primary">
          Privacy Policy
        </Link>
        .
      </Typography>

      {/* <AuthWithSocial /> */}
    </LoginLayout>
  )
}