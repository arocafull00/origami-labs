'use client'

import { SaasProvider } from '@saas-ui/react'

import { theme } from '#theme'
import { EmotionCacheProvider } from './emotion-cache-provider'

export function Provider(props: { children: React.ReactNode }) {
  return (
    <EmotionCacheProvider>
      <SaasProvider theme={theme}>{props.children}</SaasProvider>
    </EmotionCacheProvider>
  )
}
