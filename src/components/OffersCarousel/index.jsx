import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';

import { api } from '../../services/api';

import { Container, Title } from './styles';

import { CardProduct } from '../CardProduct';

export function OffersCarousel() {

    const [offers, setOffers] = useState([]);

    useEffect(() => {

        async function loadProducts() {

            const { data } = await api.get('/products');

            const offers = data.filter(product => product.offer === true);

            setOffers(offers);
        }

        loadProducts();

    }, []);

    return (
        <Container>

            <Title>
                Ofertas do Dia
            </Title>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={'auto'}
                slidesOffsetBefore={20}
                slidesOffsetAfter={20}
                loop={true}
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

                {offers.map((product) => (

                    <SwiperSlide key={product.id}>

                        <CardProduct product={product} />

                    </SwiperSlide>

                ))}
                
            </Swiper>

        </Container>
    );
}