import { Helmet } from 'react-helmet-async'
// @mui
import { Container, Grid, Stack, Typography } from '@mui/material'
import PaymentsWidgetSummary from 'src/sections/payments/PaymentsWidgetSummary'
import TotalWidget from 'src/sections/payments/TotalWidget'
import PaymentsList from 'src/sections/payments/PaymentsLists'

// ----------------------------------------------------------------------

export default function PageThree() {
  return (
    <>
      <Helmet>
        <title> Payments | CryptoAlerts</title>
      </Helmet>

      <Container maxWidth={'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Payments
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Grid item md={12} xl={12} sm={12}>
                <PaymentsWidgetSummary
                  title="Donations"
                  icon="eva:diagonal-arrow-left-up-fill"
                  percent={2.6}
                  total={18765}
                  chart={{
                    series: [111, 136, 76, 108, 74, 54, 57, 84],
                  }}
                />
              </Grid>
              <Grid item xl={4} md={6} sm={12}>
                <TotalWidget
                  title="Total Number of Donations"
                  total={123}
                  icon="ic:round-payments"
                />
              </Grid>
              <Grid item xl={4} md={6} sm={12}>
                <TotalWidget
                  title="Total Number of new Users"
                  total={123}
                  color="warning"
                  icon="ic:round-people"
                />
              </Grid>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              marginTop={5}>
              <Grid item md={12}>
                <PaymentsList
                  title="Recent Donations"
                  tableData={[
                    {
                      id: 1,
                      nickname: 'John Doe',
                      date: 1677571777939,
                      amount: 123,
                      message: 'yo lol, amazing project',
                    },
                    {
                      id: 2,
                      nickname: 'John Doe',
                      date: 1677571777939,
                      amount: 123,
                      message: 'yo lol, amazing project',
                    },
                    {
                      id: 3,
                      nickname: 'John Doe',
                      date: 1677571777939,
                      amount: 123,
                      message: 'yo lol, amazing project',
                    },
                    {
                      id: 4,
                      nickname: 'John Doe',
                      date: 1677571777939,
                      amount: 123,
                      message: 'yo lol, amazing project',
                    },
                    {
                      id: 5,
                      nickname: 'John Doe',
                      date: 1677571777939,
                      amount: 123,
                      message: 'yo lol, amazing project',
                    },
                    {
                      id: 6,
                      nickname: 'John Doe',
                      date: 1677571777939,
                      amount: 123,
                      message: 'yo lol, amazing project',
                    },
                  ]}
                  tableLabels={[
                    { id: 'nickname', label: 'User' },
                    { id: 'date', label: 'Date' },
                    { id: 'amount', label: 'Amount' },
                    { id: 'message', label: 'Message' },
                  ]}
                />
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
