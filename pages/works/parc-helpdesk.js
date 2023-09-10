import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="PILANI-memories">
    <Container>
      <Title>
      PARC-Helpdesk <Badge>2022</Badge>
      </Title>
      <P>
      Complete Dynamic and Fully Functional Helpdesk Website using PHP prrogramming language and MySQL Database.Helped a non profit organization to set up a Help Desk for the local people of
Pilani, especially the less privileged to help them regarding various government/NGO schemes,
providing awareness and details so that they can get the benefits from these schemes or welfare
programs. The Help Desk will also help people get information regarding other government
benefits or documents like Adhar, BPL, etc.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/thatcher-choice/PARC-Helpdesk">
          https://github.com/thatcher-choice/PARC-Helpdesk<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/Ios</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML5,CSS3,Core/Procedural PHP programming language,MySQL</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/parc-1.png" alt="parc-1" />
      <WorkImage src="/images/works/parc-2.png" alt="parc-1" />
      <WorkImage src="/images/works/parc-3.png" alt="parc-1" />
    </Container>
  </Layout>
)


export default Work