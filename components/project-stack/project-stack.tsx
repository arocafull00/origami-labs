'use client'

import { Box } from '@chakra-ui/react'
import * as React from 'react'

import { ProjectCard } from './project-card'

const projects = [
  { src: '/static/images/webs/21-dias.png', alt: 'Screenshot del proyecto 21 Días' },
  { src: '/static/images/webs/invoicer.png', alt: 'Screenshot del proyecto Invoicer' },
  { src: '/static/images/webs/rocafull-group.png', alt: 'Screenshot del proyecto Rocafull Group' },
  { src: '/static/images/webs/toll-story.png', alt: 'Screenshot del proyecto Toll Story' },
]

export const ProjectStack = () => {
  const [frontIndex, setFrontIndex] = React.useState(projects.length - 1)
  const [isPaused, setIsPaused] = React.useState(false)

  React.useEffect(() => {
    if (isPaused) {
      return
    }

    const intervalId = window.setInterval(() => {
      setFrontIndex((currentFrontIndex) => (currentFrontIndex + 1) % projects.length)
    }, 2500)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isPaused])

  return (
    <Box
      position="relative"
      height="100%"
      width="100%"
      minH="520px"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.src}
          project={project}
          fromFront={(frontIndex - index + projects.length) % projects.length}
          total={projects.length}
          isFront={index === frontIndex}
        />
      ))}
    </Box>
  )
}
