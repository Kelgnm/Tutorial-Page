import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/bio'
import { GridItem } from '../components/grid-item'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Paragraph>
                There are none. Will be added soon, if I post something!
            </Paragraph>
        </Container>
    </Layout>
)

export default Posts