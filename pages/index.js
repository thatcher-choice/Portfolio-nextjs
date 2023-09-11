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
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Aniketraj Jha
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
              src="/images/aniketraj"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section>
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          >
            <Paragraph>
              {`Hi everyone,I am Aniketraj Jha. I am 23 years old and currently work as a Software Engineer in Bajaj Finserv, based in Pune. When I'm not immersed in the world of coding, you'll often find me exploring new destinations and embracing the wonders of travel. I believe that just as each line of code can tell a story, so can every journey leave an indelible mark on our lives`}
            </Paragraph>
          </Box>
        </Section>
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
             My work-related tech stack is MEAN (mongoDB, ExpressJS, Angular and Nodejs) but i love learning new frameworks as well as language.
             Right now I am trying out Springboot , React and NextJs.You can checkout some of my work in my portfolio.
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
              Born in , Maharashtra.
            </BioSection>
            <BioSection>
              <BioYear>2018</BioYear>
              Graduated High-School from Sankalp Academy
            </BioSection>
            <BioSection>
              <BioYear>2019</BioYear>
                Worked at Birla Polyfibers as Environmental Analyst
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              Worked at PARC as a full stack Developer.
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              Graduated from BITS Pilani
            </BioSection>
            <BioSection>
              <BioYear>2022 to Present</BioYear>
              Working as a Software Engineer in Bajaj Finserv
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
            <Link href="https://github.com/thatcher-choice" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @Thatcher
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/anni.x.jha" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @anni.x.jha
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
