'use client'

import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { useState } from 'react'

export function EmotionCacheProvider(props: { children: React.ReactNode }) {
  const [registry] = useState(() => {
    const cache = createCache({ key: 'css' })
    cache.compat = true

    const prevInsert = cache.insert
    let inserted: string[] = []

    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }

      return prevInsert(...args)
    }

    const flush = () => {
      const names = inserted
      inserted = []
      return names
    }

    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = registry.flush()
    if (names.length === 0) {
      return null
    }

    let styles = ''
    for (const name of names) {
      styles += registry.cache.inserted[name]
    }

    return (
      <style
        data-emotion={`${registry.cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    )
  })

  return <CacheProvider value={registry.cache}>{props.children}</CacheProvider>
}
