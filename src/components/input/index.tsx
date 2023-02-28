import React from 'react'
import { InputAdornment, TextField, Button } from '@mui/material'
import Iconify from 'src/components/iconify'
import { useSnackbar } from 'src/components/snackbar'

export const CopyInput: React.FC<{ value: string }> = ({ value }) => {
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
          </InputAdornment>
        ),
      }}
    />
  )
}
