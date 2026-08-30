import PropTypes from 'prop-types';

import { useCart } from '../../hooks/UseCart';

import { Container, CardImage } from './styles';

import { CartButton } from '../CartButton';
import { API_URL } from '../../services/api';


export function CardProduct({ product }) {
    const { putProductInCart } = useCart();
    
    return (
        <Container>

            <CardImage
                src={`${API_URL}/products-files/${product.path}`}
                alt={product.name}
            />

            <div>
                <p>{product.name}</p>

                <strong>
                     {product.currencyValue}
                </strong>
            </div>

           <CartButton onClick={() => putProductInCart(product)}>Adicionar ao Carrinho</CartButton>

        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object,
};
