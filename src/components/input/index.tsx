import React from 'react'
import { InputAdornment, TextField, Button } from '@mui/material'
import Iconify from 'src/components/iconify'
import { useSnackbar } from 'src/components/snackbar'

export const CopyInput: React.FC<{ value: string; border?: boolean }> = ({
  value,
  border = false,
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

  const styles: any = {
    border: 'none',
    borderRadius: 0,
  }

  if (border) {
    styles.borderRadius = 1
    styles.border = '1px solid #E5E5E5'
    styles.padding = 1
  }

  return (
    <TextField
      variant="standard"
      fullWidth
      value={value}
      placeholder="Set your TON wallet address"
      sx={styles}
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
