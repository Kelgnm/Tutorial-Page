import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/bio'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Payday">
            <Container>
                <Title>
                    Payday 2 <Badge>2011</Badge>
                </Title>
                <Paragraph>
                PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://store.steampowered.com/app/218620/PAYDAY_2/'>
                            Payday 2 <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>PC/PS4/Xbox One/Nintendo Switch/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>About</Meta>
                        <span>You steal money, you shoot, you happy man :)</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/Payday.png" alt="Payday" />
            </Container>
        </Layout>
    )
}

export default Work