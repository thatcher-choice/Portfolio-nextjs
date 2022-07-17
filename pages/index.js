import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Image,
  List,
  ListItem,
  Icon,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import {  IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a full-stack developer based in Nepal!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Diwakar Adhikari
            </Heading>
            <p>( Artist / Developer / Designer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/diwakar.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            <Paragraph>
              Diwakar is a freelance and a full-stack developer based
              in Kathmandu,Nepal with a passion for designing and developing
              different mobile/web-based applications. He has a knack for many
              things such as problem-solving, app-development as well as working
              in team based enviroment and learning new and upcoming
              technologies. When not working, he loves trekking , fitness and
              has a passion for adventure. Currently, he is in his final year in
              software development and working as an Full Stack Developer in Bajaj
              Finserv.
            </Paragraph>
          </Box>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="left"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            <BioSection>
              <BioYear>2000</BioYear>
              Born in Kathmandu (काठमाडौं), Nepal.
            </BioSection>
            <BioSection>
              <BioYear>2017</BioYear>
              Graduated High-School from United Academy.
            </BioSection>
            <BioSection>
              <BioYear>2021</BioYear>
              Worked at Codeaxes Digital Solutions as a Full-Stack Intern
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              Graduated in Computer Science Engineering from S.R.M University
            </BioSection>
            <BioSection>
              <BioYear>2022 to Present</BioYear>
              Working as a Full Stack Developer in Bajaj Finserv
            </BioSection>
          </Box>
        </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="left"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
        <Paragraph>
          Art, Music,{' '}
            Doodling
          , Playing Guitar,{' '}
          <Link href="https://steamcommunity.com/profiles/76561198207271525" target="_blank">
            Gaming
          </Link>
          , Working Out, Trekking
        </Paragraph>
        </Box>
      </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Thunderk3g" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Thunderk3g
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/khuching_paryo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @khuching_paryo
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
      </Container>
    
    </Layout>
  )
}

export default Page
