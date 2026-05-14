import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'span'>> = (props) => {
  return (
    <chakra.span
      fontWeight="bold"
      fontSize="lg"
      letterSpacing="tight"
      bgGradient="linear(to-r, purple.500, cyan.500)"
      bgClip="text"
      {...props}
    >
      Origami Labs
    </chakra.span>
  )
}
