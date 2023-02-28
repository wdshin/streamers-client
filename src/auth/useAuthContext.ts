import { useContext } from 'react'

import { AuthContext } from './AwsCognitoContext'

// ----------------------------------------------------------------------

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context)
    throw new Error('useAuthContext context must be use inside AuthProvider')

  return context
}
