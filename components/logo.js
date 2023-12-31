import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const lightningImg = `/images/lightning${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="https://aniketraj-portfolio.vercel.app/">
      <a>
        <LogoBox>
          <Image src={lightningImg} width={40} height={40} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Aniketraj Jha
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo