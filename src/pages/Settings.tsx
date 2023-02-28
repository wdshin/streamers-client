import React from 'react'
import { Helmet } from 'react-helmet-async'
// @mui
import { Container, Typography } from '@mui/material'
import { Stack, InputAdornment, TextField, Button } from '@mui/material'

// components
import Iconify from '../components/iconify'
import { useSnackbar } from '../components/snackbar'

// ----------------------------------------------------------------------

export default function Settings() {
  const { enqueueSnackbar } = useSnackbar()
  const [walletAddress, setWalletAddress] = React.useState('')

  const onSave = React.useCallback(() => {
    enqueueSnackbar('Settings saved', { variant: 'success' })
  }, [])

  const copyToClipboard = () => {
    const el = document.createElement('textarea')
    el.value = walletAddress
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  return (
    <>
      <Helmet>
        <title> Settings | Minimal UI</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph>
          Settings
        </Typography>

        <Stack
          alignItems="center"
          direction={{
            xs: 'column',
            md: 'row',
          }}
          sx={{ py: 3 }}>
          <TextField
            fullWidth
            value={walletAddress}
            onChange={e => setWalletAddress(e.target.value)}
            placeholder="Set your TON wallet address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="ion:wallet" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={copyToClipboard}>copy</Button>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          alignItems="center"
          direction={{
            xs: 'column',
            md: 'row',
          }}
          sx={{ py: 3 }}>
          <Button variant="contained" onClick={onSave}>
            Save Changes
          </Button>
        </Stack>
      </Container>
    </>
  )
}
