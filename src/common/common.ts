export const ACTIVE_STATE = {
  ON: "ON",
  OFF: "OFF"
} as const

export const STORAGE_KEY_ACTIVE = 'microbreaks-active'

export type ActiveState = keyof typeof ACTIVE_STATE

export const INTERVAL = {
  FIVE: "FIVE",
  TEN: "TEN",
  FIFTEEN: "FIFTEEN"
} as const

export const STORAGE_KEY_INTERVAL = 'microbreaks-interval'

export type Interval = keyof typeof INTERVAL
