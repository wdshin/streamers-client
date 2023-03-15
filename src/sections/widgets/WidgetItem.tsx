import React from 'react'
import { Container, Grid, Stack, Card } from '@mui/material'
import WidgetCover from 'src/sections/widgets/WidgetCover'
import { InputAdornment, TextField, Button } from '@mui/material'
import Iconify from 'src/components/iconify'
import { useSnackbar } from 'src/components/snackbar'
import { testWidget } from 'src/utils/api'

export const WidgetItem: React.FC<{
  name: string
  role: string
  cover: string
  value: string
  streamerId: string
}> = ({ name, role, cover, value, streamerId }) => {
  const { enqueueSnackbar } = useSnackbar()

  const onTest = () => {
    testWidget({
      amount: 100,
      text: 'Test Widget Donate From CryptoAlerts',
      nickname: 'sender',
      clientId: streamerId,
    })

    enqueueSnackbar(
      'Test donation sent. You should see active widget on your stream',
      {
        variant: 'success',
        autoHideDuration: 4000,
      },
    )
  }

  return (
    <Card
      sx={{
        width: '49%',
        p: 0,
        mb: 3,
        height: 280,
        position: 'relative',
      }}>
      <WidgetCover name={name} role={role} cover={cover} />

      <Grid
        container
        spacing={3}
        sx={{
          bottom: 0,
          zIndex: 9,
          position: 'absolute',
          bgcolor: 'background.paper',
          '& .MuiTabs-flexContainer': {
            pr: { md: 3 },
            justifyContent: {
              sm: 'center',
              md: 'flex-end',
            },
          },
        }}>
        <Stack width="100%" sx={{ pl: 5, py: 2, pr: 1 }}>
          <CopyInput value={value} onTest={onTest} />
        </Stack>
      </Grid>
    </Card>
  )
}

export const CopyInput: React.FC<{ value: string; onTest: () => unknown }> = ({
  value,
  onTest,
}) => {
  const { enqueueSnackbar } = useSnackbar()

  const copyToClipboard = () => {
    const el = document.createElement('textarea')
    el.value = value
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    enqueueSnackbar('Copied', { variant: 'success' })
  }
  return (
    <TextField
      variant="standard"
      fullWidth
      value={value}
      placeholder="Set your TON wallet address"
      sx={{
        border: 'none',
        borderRadius: 0,
      }}
      InputProps={{
        disableUnderline: true,
        readOnly: true,
        startAdornment: (
          <InputAdornment position="start">
            <Iconify icon="ion:wallet" sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button onClick={copyToClipboard}>copy</Button>
            <Button onClick={onTest}>Test Donate</Button>
          </InputAdornment>
        ),
      }}
    />
  )
}
