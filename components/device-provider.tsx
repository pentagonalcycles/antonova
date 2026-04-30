'use client'

import { createContext, useContext, type ReactNode } from 'react'

interface DeviceContextValue {
  isMobile: boolean
  deviceType: 'mobile' | 'tablet' | 'desktop'
}

const DeviceContext = createContext<DeviceContextValue>({ isMobile: false, deviceType: 'desktop' })

export function DeviceProvider({ children, value }: { children: ReactNode; value: DeviceContextValue }) {
  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
}

export function useDevice(): DeviceContextValue {
  return useContext(DeviceContext)
}
