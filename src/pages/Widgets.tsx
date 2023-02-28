import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { PATH_DASHBOARD } from 'src/routes/paths'
import { useAuthContext } from 'src/auth/useAuthContext'
import alertWidgetImage from 'src/assets/images/alert-widget-0.png'
import { WidgetItem } from 'src/sections/widgets/WidgetItem'

export default function Widgets() {
  const { user } = useAuthContext()

  return (
    <>
      <Helmet>
        <title> Widgets | CryptoAlerts </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph>
          Widgets
        </Typography>

        {/* <Typography gutterBottom variant="h5">
          Hey, to start using the widgets, you need to add your TON wallet
          address on the <Link to={PATH_DASHBOARD.settings}>Settings page</Link>
          .
        </Typography> */}
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
