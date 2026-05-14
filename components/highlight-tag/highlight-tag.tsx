import { Tag } from '@chakra-ui/react'

type HighlightTagProps = {
  label: string
}

export const HighlightTag = ({ label }: HighlightTagProps) => {
  return (
    <Tag variant="subtle" colorScheme="purple" rounded="full" px="3">
      {label}
    </Tag>
  )
}
