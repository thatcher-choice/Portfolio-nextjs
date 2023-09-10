import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="Simple Image Processing">
    <Container>
      <Title>
      Brownie-fund-me <Badge>2022-</Badge>
      </Title>
      <P>
          Brownie Fund Me is a smart contract application designed to empower individuals and organizations to raise funds efficiently and securely in the world of blockchain and cryptocurrencies. Leveraging the power of the Brownie framework for Ethereum smart contracts, this project offers a robust and flexible fundraising solution.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Github Link</Meta>
          <Link href="https://github.com/Thunderk3g/kancha-bot">
          https://github.com/Thunderk3g/Kancha-Bot<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Android/IOs</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJs,Javascript</span>
        </ListItem>
      </List>


      <WorkImage src="/images/works/kancha-bot.png" alt="simple" />
      
    </Container>
  </Layout>
)


export default Work