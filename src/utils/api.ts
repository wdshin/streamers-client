import { IStreamerCreate, IStreamer, IWidgetCreate } from 'src/types/streamers'
import { get, post } from 'src/utils/axios'

export const getStreamer = (): Promise<IStreamer> => get(`/streamer`)

export const createStreamer = (data: IStreamerCreate): Promise<IStreamer> =>
  post(`/streamer`, data)

export const getWidgets = () => get(`/widgets`)

export const createWidget = (data: IWidgetCreate) => post(`/widgets`, data)
