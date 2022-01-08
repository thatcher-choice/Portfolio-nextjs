import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Simple Image Processing">
    <Container>
      <Title>
        Simple Image Processing <Badge>2020-</Badge>
      </Title>
      <P>
            A simple image processing application in PHP to turn colored image into polarised image
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/Thunderk3g/SimpleImageProcessing">
          https://github.com/Thunderk3g/SimpleImageProcessing<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Codeigniter, PHP, Javascript</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/simple.png" alt="simple" />
      
    </Container>
  </Layout>
)


export default Work