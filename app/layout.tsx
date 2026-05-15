import { ColorModeScript } from '@chakra-ui/react'
import type { Metadata } from 'next'

import siteConfig from '#data/config'
import { colorModeConfig } from '../theme/config'

import { Provider } from './provider'

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.seo.title}`,
  },
  description: siteConfig.seo.description,
}

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = colorModeConfig.initialColorMode

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/static/images/favicon.png" />
        <link rel="icon" type="image/png" href="/static/images/favicon.png" />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
