import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { Container, Grid, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { PATH_DASHBOARD } from 'src/routes/paths'
import alertWidgetImage from 'src/assets/images/alert-widget-0.png'
import { WidgetItem } from 'src/sections/widgets/WidgetItem'
import { getStreamer, getWidgets } from 'src/utils/api'
import { CopyInput } from 'src/components/input'

// const donationDomain = 'https://donate.cryptoalerts.to'
// const widgetDomain = 'https://widget.cryptoalerts.to'
const donationDomain = process.env.REACT_APP_DONATIONS_DOMAIN
const widgetDomain = process.env.REACT_APP_WIDGETS_DOMAIN

export default function Widgets() {
  const navigate = useNavigate()
  const { data: user, isLoading: userIsLoading } = useQuery({
    queryKey: ['streamer'],
    queryFn: getStreamer,
    retry: false,
  })
  const { data: widgets } = useQuery({
    queryKey: ['widgets'],
    queryFn: getWidgets,
  })

  if (!userIsLoading && !user) {
    navigate(PATH_DASHBOARD.settings, { replace: true })
    return null
  }

  const donationLink = `${donationDomain}/${user?.streamerId}`

  return (
    <>
      <Helmet>
        <title> Widgets | CryptoAlerts </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph>
          Widgets
        </Typography>

        <Typography variant="subtitle1" component="span" paragraph>
          Your donation link to share with the supporters:
          <Stack width="50%" sx={{ pl: 0, py: 1, pr: 1, mt: 1 }}>
            <CopyInput value={donationLink} border />
          </Stack>
        </Typography>
      </Container>

      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Typography variant="subtitle1" component="span" paragraph>
          Your widgets:
        </Typography>

        <Grid
          direction="row"
          container
          gap={1}
          justifyContent="space-between"
          sx={{ mt: 2 }}>
          {widgets?.map(widget =>
            widget.type === 'donation' ? (
              <WidgetItem
                key={widget.widget_id}
                name={widget.title}
                role={widget.description}
                cover={alertWidgetImage}
                value={`${widgetDomain}/payment/${user?.streamerId}`}
                streamerId={user?.streamerId || ''}
              />
            ) : (
              <WidgetItem
                key={widget.widget_id}
                name={widget.title}
                role={widget.description}
                cover={alertWidgetImage}
                value={`${widgetDomain}/donation-goal/${user?.streamerId}`}
                streamerId={user?.streamerId || ''}
              />
            ),
          )}
        </Grid>
      </Container>
    </>
  )
}
