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
    <html lang="es" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
