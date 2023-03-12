import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'simplebar-react/dist/simplebar.min.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Router from './routes'
import './locales/i18n'
import ThemeProvider from './theme'
import ThemeLocalization from './locales'
import SnackbarProvider from './components/snackbar'
import ScrollToTop from './components/scroll-to-top'
import { MotionLazyContainer } from './components/animate'
import { ThemeSettings, SettingsProvider } from './components/settings'
import { AuthProvider } from './auth/AwsCognitoContext'

const queryClient = new QueryClient()

// ----------------------------------------------------------------------

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <SettingsProvider>
            <BrowserRouter>
              <ScrollToTop />
              <MotionLazyContainer>
                <ThemeProvider>
                  <ThemeSettings>
                    <ThemeLocalization>
                      <SnackbarProvider>
                        <Router />
                      </SnackbarProvider>
                    </ThemeLocalization>
                  </ThemeSettings>
                </ThemeProvider>
              </MotionLazyContainer>
            </BrowserRouter>
          </SettingsProvider>
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
