import { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Link, BoxProps } from '@mui/material'

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean
  favicon?: boolean
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, favicon = false }, ref) => {
    const logo = (
      <Box
        component="img"
        ref={ref}
        src={favicon ? '/favicon/favicon.png' : '/logo/logo_single.png'}
        sx={{ width: 120, height: 28, cursor: 'pointer', ...sx }}
      />
    )

    if (disabledLink) {
      return logo
    }

    return (
      <Link
        component={RouterLink}
        to="/"
        sx={{ display: 'contents' }}
        ref={{ current: ref as any }}>
        {logo}
      </Link>
    )
  },
)

Logo.displayName = 'Logo'

export default Logo
