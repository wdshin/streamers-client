import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PATH_DASHBOARD } from 'src/routes/paths'
import alertWidgetImage from 'src/assets/images/alert-widget-0.png'
import { WidgetItem } from 'src/sections/widgets/WidgetItem'
import { getStreamer, getWidgets } from 'src/utils/api'

export default function Widgets() {
  const navigate = useNavigate()
  const { data: user, isLoading: userIsLoading } = useQuery({
    queryKey: ['streamer'],
    queryFn: getStreamer,
  })
  const { data: widgets } = useQuery({
    queryKey: ['widgets'],
    queryFn: getWidgets,
  })

  if (!userIsLoading && !user) {
    navigate(PATH_DASHBOARD.settings, { replace: true })
    return null
  }

  return (
    <>
      <Helmet>
        <title> Widgets | CryptoAlerts </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph>
          Widgets
        </Typography>
      </Container>

      <Container maxWidth="xl">
        <WidgetItem
          name="New Donation"
          role="Get notified when someone sends you a donation"
          cover={alertWidgetImage}
          value={'https://cryptoalerts.com/dasdas/dasdsadsa/dsadsa'}
        />
        <WidgetItem
          name="Donation Goal 1000"
          role="Display your donation goal and its progress"
          cover={alertWidgetImage}
          value={'https://cryptoalerts.com/dasdas/dasdsadsa/dsadsa'}
        />
      </Container>
    </>
  )
}
