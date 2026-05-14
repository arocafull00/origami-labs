import { Box } from '@chakra-ui/react'
import Image from 'next/image'

type Project = {
  src: string
  alt: string
}

type ProjectCardProps = {
  project: Project
  fromFront: number
  total: number
  isFront: boolean
}

const offsetStep = 45
const verticalStep = 12

export const ProjectCard = ({ project, fromFront, total, isFront }: ProjectCardProps) => {
  return (
    <Box
      position="absolute"
      left={`${fromFront * offsetStep}px`}
      top={`${fromFront * verticalStep}px`}
      zIndex={total - fromFront}
      width="82%"
      borderRadius="2xl"
      overflow="hidden"
      borderWidth="2px"
      borderColor="gray.900"
      transition="left 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), top 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.45s ease"
      transitionDelay={`${fromFront * 60}ms`}
      transform={isFront ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)'}
      boxShadow={isFront ? '0 30px 60px rgba(0,0,0,0.25)' : '0 16px 35px rgba(0, 0, 0, 0.16)'}
    >
      <Image src={project.src} width={1200} height={762} alt={project.alt} quality={75} />
    </Box>
  )
}
