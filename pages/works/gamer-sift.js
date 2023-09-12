import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Simple Image Processing">
    <Container>
      <Title>
      Gamer-Sift <Badge>2022-</Badge>
      </Title>
      <P>
      Dive into the gaming world with GamerSift, where you can explore, compare, and discover your favorite games and their captivating details. Whether you're a casual player or a dedicated gamer, GamerSift is your go-to destination for in-depth gaming insights and a treasure trove of interactive experiences. Explore, sift, and level up your gaming knowledge with GamerSift.      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/thatcher-choice/gamer-sift.git">
          https://github.com/thatcher-choice/gamer-sift.git<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/IOs</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular,Raw.io api</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/gamer-sift-1.png" alt="simple" />
      <WorkImage src="/images/works/gamer-sift-2.png" alt="simple" />
      <WorkImage src="/images/works/gamer-sift-3.png" alt="simple" />
      
    </Container>
  </Layout>
)


export default Work