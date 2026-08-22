import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { formatPrice } from '../../utils/formatPrice';

import { api } from '../../services/api';

import { Container, Title } from './styles';

import { CardProduct } from '../CardProduct';

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');

            const productsOnOffer = data.filter(
                product => product.offer === true
            ).map(product => ({currencyValue: formatPrice(product.price), ...product}));

            setOffers(productsOnOffer);
        }

        loadProducts();
    }, []);

    return (
        <Container>
            <Title>Ofertas do Dia</Title>

            <Swiper
                key={offers.length}
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                loop={offers.length > 4}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },

                    690: {
                        slidesPerView: 2,
                    },

                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {offers.map(product => (
                    <SwiperSlide key={product.id}>
                        <CardProduct product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}