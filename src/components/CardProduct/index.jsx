import PropTypes from 'prop-types';

import { useCart } from '../../hooks/CartContext';

import { Container, CardImage } from './styles';

import { CartButton } from '../CartButton';


export function CardProduct({ product }) {
    const { putProductInCart } = useCart();
    
    return (
        <Container>

            <CardImage
                src={`http://localhost:3001/products-files/${product.path}`}
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