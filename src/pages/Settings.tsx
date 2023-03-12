import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useQuery, useMutation } from '@tanstack/react-query'
import { Container, Typography } from '@mui/material'
import { Stack, InputAdornment, TextField, Button } from '@mui/material'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { useNavigate } from 'react-router'
import { PATH_DASHBOARD } from 'src/routes/paths'
import { copyToClipboard } from 'src/utils/clipboard'
import { createStreamer, getStreamer } from 'src/utils/api'
import { useAuthContext } from 'src/auth/useAuthContext'

// components
import Iconify from '../components/iconify'
import { useSnackbar } from '../components/snackbar'

export default function Settings() {
  const { data: user, isLoading: userIsLoading } = useQuery({
    queryKey: ['streamer'],
    queryFn: getStreamer,
  })
  const [openOnboarding, setOpenOnboarding] = useState(true)
  const { enqueueSnackbar } = useSnackbar()
  const [walletAddress, setWalletAddress] = React.useState('')

  const onSave = React.useCallback(() => {
    enqueueSnackbar('Settings saved', { variant: 'success' })
  }, [])

  useEffect(() => {
    if (!userIsLoading && !user) {
      setOpenOnboarding(true)
    }
  }, [user, userIsLoading])

  return (
    <>
      <Helmet>
        <title> Settings | CryptoAlerts</title>
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
                  <Button onClick={() => copyToClipboard(walletAddress)}>
                    copy
                  </Button>
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

        <OnboardingModal
          open={openOnboarding}
          onClose={() => setOpenOnboarding(false)}
        />
      </Container>
    </>
  )
}

export const OnboardingModal: React.FC<{
  open: boolean
  onClose: () => void
}> = ({ open, onClose }) => {
  const toast = useSnackbar()
  const auth = useAuthContext()
  const navigate = useNavigate()
  const [walletAddress, setWalletAddress] = useState('')
  const { mutate } = useMutation({
    mutationFn: createStreamer,
    onSuccess: () => {
      toast.enqueueSnackbar('Wallet saved', { variant: 'success' })
      navigate(PATH_DASHBOARD.widgets, { replace: true })
    },
  })

  const onSave = () => {
    if (!walletAddress) {
      toast.enqueueSnackbar('Please enter your TON wallet address')
      return
    }
    mutate({ wallet_address: walletAddress, cognito_id: auth.user?.username })
  }

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <DialogTitle sx={{ p: theme => theme.spacing(3, 3, 2, 3) }}>
        Welcome, to start using CryptoAlerts, please set your TON wallet
        address!
      </DialogTitle>

      <DialogContent dividers sx={{ pt: 1, pb: 0, border: 'none' }}>
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
            }}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          startIcon={<Iconify icon="eva:cloud-upload-fill" />}
          onClick={onSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
