export interface IStreamer {
  streamerId?: string
  wallet_address: string
  cognito_id: string
}

export interface IStreamerCreate {
  wallet_address: string
  cognito_id: string
}

export interface IWidgetCreate {
  type: string
  amount_goal: number
  amount_current: number
}
