'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import * as React from 'react'

import { ProjectCarouselItem } from './project-carousel-item'

const projects = [
  { src: '/static/images/webs/21-dias.png', alt: 'Screenshot del proyecto 21 Días' },
  { src: '/static/images/webs/invoicer.png', alt: 'Screenshot del proyecto Invoicer' },
  { src: '/static/images/webs/rocafull-group.png', alt: 'Screenshot del proyecto Rocafull Group' },
  { src: '/static/images/webs/toll-story.png', alt: 'Screenshot del proyecto Toll Story' },
]

export const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % projects.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [])

  return (
    <Box w="100%">
      <Flex justify="space-between" align="center" mb={3}>
        <Text
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="widest"
          color="gray.500"
          fontWeight="medium"
          _dark={{ color: 'gray.400' }}
        >
          Proyectos recientes
        </Text>
        <Text
          fontSize="xs"
          color="gray.400"
          fontWeight="medium"
          _dark={{ color: 'gray.500' }}
        >
          {activeIndex + 1} / {projects.length}
        </Text>
      </Flex>

      <Box
        position="relative"
        overflow="hidden"
        rounded="2xl"
        h="220px"
        borderWidth="1px"
        borderColor="blackAlpha.100"
        boxShadow="0 8px 16px rgba(0,0,0,0.06), 0 24px 48px rgba(89,40,255,0.14)"
        _dark={{
          borderColor: 'whiteAlpha.100',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3), 0 24px 48px rgba(89,40,255,0.25)',
        }}
      >
        {projects.map((project, i) => (
          <ProjectCarouselItem
            key={project.src}
            project={project}
            isActive={i === activeIndex}
          />
        ))}

        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          h="60px"
          bgGradient="linear(to-t, blackAlpha.500, transparent)"
          pointerEvents="none"
        />
      </Box>

      <Flex mt={3} justify="center" gap="6px">
        {projects.map((_, i) => (
          <Box
            key={i}
            as="button"
            aria-label={`Proyecto ${i + 1}`}
            h="6px"
            w={i === activeIndex ? '24px' : '6px'}
            rounded="full"
            bg={i === activeIndex ? 'primary.500' : 'blackAlpha.200'}
            transition="all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)"
            _dark={{ bg: i === activeIndex ? 'primary.400' : 'whiteAlpha.200' }}
            onClick={() => setActiveIndex(i)}
            cursor="pointer"
          />
        ))}
      </Flex>
    </Box>
  )
}
