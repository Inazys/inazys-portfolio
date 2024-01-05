import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
    Text
} from '@chakra-ui/react'



const ImageTop = props => {
  const { path } = props

  return (
        <Box
    position={'absolute'}
      w="100%"
      bgColor={'tomato'}
      left= '0px'
      right= '0px'
      p={'150px'}
      margin={0}
      bgImage={"url('/map.png')"}
      bgPosition={"center"}
      opacity={'50%'}
      {...props}
    >
    </Box>
  )
}

export default ImageTop
