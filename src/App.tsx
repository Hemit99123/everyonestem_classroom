import React from 'react'
import {Box, Alert, AlertIcon, AlertTitle, AlertDescription, Text} from '@chakra-ui/react'

const App = () => {
  return (
    <>
    <Text
      fontSize='4xl'
      fontWeight='bold'
      padding={5}
    >
      Everyone Classroom
    </Text>
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
  
<Alert
  status='error'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Currently under devlopment
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for your interest. Our dev team is working hard to develop this! For now, use our temporary solution at <a href="https://www.everyonestem.org/courses">here</a>
  </AlertDescription>
</Alert>
  </Box>
  </>
  )
}

export default App