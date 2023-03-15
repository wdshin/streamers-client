import { IStreamerCreate, IStreamer, IWidgetCreate } from 'src/types/streamers'
import { get, post } from 'src/utils/axios'

export const getStreamer = async (): Promise<IStreamer> => {
  const res = await get(`/streamer`)
  return res.data
}

export const createStreamer = (data: IStreamerCreate): Promise<IStreamer> =>
  post(`/streamer`, data)

// export const getWidgets = () => get(`/widgets`)
export const getWidgets = async () => [
  {
    widget_id: '1',
    type: 'donation',
    title: 'New Donation',
    description: 'Get notified when someone sends you a donation',
  },
  {
    widget_id: '2',
    type: 'donation_goal',
    amount_goal: 1000,
    amount_current: 132,
    title: 'Donation Goal 1000',
    description: 'Display your donation goal and its progress',
  },
]

export const createWidget = (data: IWidgetCreate) => post(`/widgets`, data)

export const testWidget = async (data: any) => {
  // post to test widget
  fetch(`${process.env.REACT_APP_WIDGETS_API_SERVER}/payments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
