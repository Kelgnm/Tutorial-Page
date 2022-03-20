import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGrid } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/payday2.png'
import Layout from "../components/layouts/article"

const Works = () => {
    return (
        <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGrid id="Payday" title="Get Payed" thumbnail={thumbInkdrop}>
                        No jobs. Busy robbing you.
                    </WorkGrid>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works