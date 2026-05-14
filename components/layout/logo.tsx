import { Flex } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import Image from 'next/image'

import * as React from 'react'

import siteConfig from '#data/config'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  const title = siteConfig.seo?.title ?? ''

  return (
    <Flex h="8" flexShrink="0" alignItems="center">
      <Link
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
        alignItems="center"
      >
        <Image
          src="/static/images/logo.png"
          alt={title}
          width={32}
          height={32}
          priority
        />
      </Link>
    </Flex>
  )
}
