export const ACTIVE_STATE = {
  ON: "ON",
  OFF: "OFF"
} as const

export type ActiveState = keyof typeof ACTIVE_STATE

export const STORAGE_KEY_ACTIVE = 'microbreaks-active'

export const INTERVAL = {
  FIVE: "FIVE",
  TEN: "TEN",
  FIFTEEN: "FIFTEEN"
} as const

export type Interval = keyof typeof INTERVAL

export const STORAGE_KEY_INTERVAL = 'microbreaks-interval'
