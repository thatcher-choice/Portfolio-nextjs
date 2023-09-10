import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Aniketraj-Portfolio">
    <Container>
      <Title>
      Aniketraj-Portfolio <Badge>2023-</Badge>
      </Title>
      <P>
      A personal portfolio made using Next.js,Chakra UI, Framer Motion and Three.js
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/thatcher-choice/Aniketraj-Portfolio">
          https://github.com/thatcher-choice/Aniketraj-Portfolio<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Vercel Link</Meta>
          <Link href="">
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/ioS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Threejs, Javascript, Chakra UI, blender</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/portfolio-1.png" alt="Covid-X" />
      <WorkImage src="/images/works/portfolio-2.png" alt="Covid-X" />
      <WorkImage src="/images/works/portfolio-3.png" alt="Covid-X" />

    </Container>
  </Layout>
)


export default Work