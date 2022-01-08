import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const PortalSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const PortalContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-portal"
    m="auto"
    mt={['-20px', '-30px', '-120px']}
    mb={['-20px', '-200px', '-200px']}
    w={[380, 580, 740]}
    h={[480, 680, 810]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <PortalContainer>
      <PortalSpinner />
    </PortalContainer>
  )
}

export default Loader