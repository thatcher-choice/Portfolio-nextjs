import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCovMean from '../public/images/works/pilani-memories-1.png'
import thumbKrypto from '../public/images/works/parc-1.png'
import thumbHMS from '../public/images/works/portfolio-3.png'
import gamerSift from '../public/images/works/gamer-sift-1.png' 

import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <WorkGridItem id="parc-helpdesk" title="PARC-Helpdesk" thumbnail={thumbKrypto}>
            Helpdesk for the local people of Pilani to help  them regarding various government/NGO schemes
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="pilani-memories" title="PILANI-memories" thumbnail={thumbCovMean}>
          A MERN stack application with Google Maps integration, allowing users to create and explore cherished memories tied to specific locations.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="aniketraj-portfolio"
            title="Aniketraj-Portfolio"
            thumbnail={thumbHMS}
          >
            A portfolio web-application made using Next.js , Chakra UI , Framer-Motion and Threejs
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
        <WorkGridItem id="gamer-sift" thumbnail={gamerSift} title="GamerSift - Your Gaming Data Hub">
            GamerSift is a dynamic web platform created using Angular and powered by the rawg.io API, designed for avid gamers and enthusiasts
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.1}>
          <WorkGridItem id="thunderkeg" thumbnail={thumbThunderkeg} title="Thunderkeg-Portfolio">
            A portfolio web-application made using Next.js , Chakra UI , Framer-Motion and Threejs
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      {/* <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="covid-x" thumbnail={thumbCovid} title="PILANI-memories">
            A covid statistics provider in Codeigniter Framework.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
        <WorkGridItem
            id="iijis"
            title="IIJIS"
            thumbnail={thumbIIJIS}
          >
            A full stack web-site for Indian Innovations: Journal of Indian Start-Ups
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
  )
}
export default Works
