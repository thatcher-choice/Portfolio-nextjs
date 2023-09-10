import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="PILANI-memories">
    <Container>
      <Title>
      PILANI-memories <Badge>2023-</Badge>
      </Title>
      <P>
      This app empowers users to capture moments and share their experiences, creating a unique social media platform centered around meaningful places.
      Through seamless Google Maps integration, users can not only revisit their own memories but also discover the experiences of others, adding a dynamic layer to travel planning.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/thatcher-choice/BITS-Memories">
          https://github.com/thatcher-choice/BITS-Memories <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/iOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, MongoDB, Nodejs , Express, Netlify, Render</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/pilani-memories-1.png" alt="Covid-X" />
      <WorkImage src="/images/works/pilani-memories-2.png" alt="Covid-X" />
      <WorkImage src="/images/works/pilani-memories-3.png" alt="Covid-X" />
    </Container>
  </Layout>
)


export default Work