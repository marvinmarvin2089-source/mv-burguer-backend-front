import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';

import { api } from '../../services/api';

import {
    Container,
    ContainerItems,
    Title
} from './styles';

export function CategoriesCarousel() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        async function loadCategories() {

            const { data } = await api.get('/categories');

            console.log(data);

            setCategories(data);
        }

        loadCategories();

    }, []);

    return (
        <Container>

            <Title>
                Categorias
            </Title>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={4}
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

                {categories.map((category) => (

                    <SwiperSlide key={category.id}>

                        <ContainerItems>

                            <img
                                src={`http://localhost:3001/category-files/${category.path}`}
                                alt={category.name}
                            />

                            <p>
                                {category.name}
                            </p>

                        </ContainerItems>

                    </SwiperSlide>

                ))}

            </Swiper>

        </Container>
    );
}