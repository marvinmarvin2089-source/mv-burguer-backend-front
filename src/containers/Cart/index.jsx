import { Elements } from '@stripe/react-stripe-js'

import Logo from '../../assets/mv-burguer-logo.png'
import { CartItems, CartResume } from '../../components'
import stripePromise from '../../config/stripeConfig'

import { Container, Title, Banner, Content } from './styles'

export function Cart() {
    return (
        <Elements stripe={stripePromise}>
            <Container>
                <Banner>
                    <img src={Logo} alt='Logo MV Burguer' />
                </Banner>

                <Title>Checkout - Pedido</Title>

                <Content>
                    <CartItems />
                    <CartResume />
                </Content>
            </Container>
        </Elements>
    )
}