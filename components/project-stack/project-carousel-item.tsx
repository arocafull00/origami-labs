import { Box } from '@chakra-ui/react'
import Image from 'next/image'

type Project = {
  src: string
  alt: string
}

type ProjectCarouselItemProps = {
  project: Project
  isActive: boolean
}

export const ProjectCarouselItem = ({ project, isActive }: ProjectCarouselItemProps) => {
  return (
    <Box
      position="absolute"
      inset={0}
      transition="opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
      opacity={isActive ? 1 : 0}
      pointerEvents={isActive ? 'auto' : 'none'}
    >
      <Image
        src={project.src}
        width={1200}
        height={762}
        alt={project.alt}
        quality={80}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
      />
    </Box>
  )
}
