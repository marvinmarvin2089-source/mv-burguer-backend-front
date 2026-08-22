import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';
import { useLocation, useNavigate } from 'react-router-dom';


import {
  Container,
  Banner,
  CategoryMenu,
  ProductsContainer,
  CategoryButton,
} from './styles';

export function Menu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const navigate = useNavigate();

  const { search } = useLocation()

  const queryParams = new URLSearchParams(search);
  

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('categoria');

    if(categoryId){
      return categoryId;
    }
    return 0
  });
  
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'Todas' }, ...data];


      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('/products');

      const newProducts = data
        .map(product => ({
          currencyValue: formatPrice(product.price),
          ...product,
          category_id: Number(product.category_id),
        }));

      setProducts(newProducts);
    }

    loadCategories();

    loadProducts();

  }, []);

  useEffect(() => {
    const categoryId = Number(new URLSearchParams(search).get('categoria'));

    setActiveCategory(Number.isFinite(categoryId) && categoryId > 0 ? categoryId : 0);
  }, [search]);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );

      setFilteredProducts(newFilteredProducts);
    }

  }, [products, activeCategory]);


  return (
    <Container>
      <Banner>
        <h1>
          O MELHOR
          <br />
          HAMBÚRGUER
          <br />
          ESTÁ AQUI!
          <span>Esse cardápio está irresistível!</span>
        </h1>
      </Banner>

      <CategoryMenu>
        {categories.map(category => (
          <CategoryButton key={category.id}
            $isActiveCategory={Number(category.id) === activeCategory}
            onClick={() => {
              const categoryId = Number(category.id);
              setActiveCategory(categoryId);
              navigate(
                {
                  pathname: '/cardapio',
                  search: categoryId ? `?categoria=${categoryId}` : '',
                },
                {
                  replace: true,
                },
              );
            }}


          >{category.name}</CategoryButton>
        ))}


      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}

      </ProductsContainer>

    </Container>
  );
}
