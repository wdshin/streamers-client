import React from 'react'
import { Container, Grid, Stack, Card } from '@mui/material'
import WidgetCover from 'src/sections/widgets/WidgetCover'
import { CopyInput } from 'src/components/input'

export const WidgetItem: React.FC<{
  name: string
  role: string
  cover: string
  value: string
}> = ({ name, role, cover, value }) => {
  return (
    <Card
      sx={{
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
          <CopyInput value={value} />
        </Stack>
      </Grid>
    </Card>
  )
}
