import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { Banner, Container, Content } from './stykes';

export function Home() {
    return (
        <main>
        <Banner> 
            <h1>Seja Bem-Vindo(a)!</h1>
        </Banner>
        <Container>
        <Content>
            <CategoriesCarousel />
            <OffersCarousel />
        </Content>

        </Container>
        </main>
    )
}