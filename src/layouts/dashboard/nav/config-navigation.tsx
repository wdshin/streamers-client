// routes
import { PATH_DASHBOARD } from '../../../routes/paths'
// components
import SvgColor from '../../../components/svg-color'

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
)

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
}

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      { title: 'widgets', path: PATH_DASHBOARD.widgets, icon: ICONS.dashboard },
      {
        title: 'payments',
        path: PATH_DASHBOARD.payments,
        icon: ICONS.ecommerce,
      },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'settings',
    items: [
      {
        title: 'Wallet info',
        path: PATH_DASHBOARD.settings,
        icon: ICONS.user,
      },
    ],
  },
]

export default navConfig
