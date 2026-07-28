import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import {
    CategoryButton,
    Container,
    ContainerItems,
    Title
} from './styles';


export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);
        }

        loadCategories();
    }, []);

    const categoriesForCarousel =
        categories.length === 4
            ? [...categories, ...categories]
            : categories;

    return (
        <Container>
            <Title>Categorias</Title>

            <Swiper
                key={categories.length}
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                loop={categories.length > 1}
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
                {categoriesForCarousel.map((category, index) => (
                    <SwiperSlide
                        key={`${category.id}-${index}`}
                    >
                        <ContainerItems>
                            <img
                                src={category.url}
                                alt={category.name}
                            />
                            <CategoryButton
                            
                            onClick={() => {
                                navigate(
                                    {
                                        pathname: '/cardapio',
                                        search: `?categoria=${category.id}`,
                                    });
                            }}
                            
                            >{category.name}</CategoryButton>
                            
                        </ContainerItems>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
}