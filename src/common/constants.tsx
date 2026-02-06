export const ACTIVE_STATE = {
  ON: "ON",
  OFF: "OFF"
} as const

export type ActiveState = keyof typeof ACTIVE_STATE

export const STORAGE_KEY_ACTIVE = 'microbreaks-active'
