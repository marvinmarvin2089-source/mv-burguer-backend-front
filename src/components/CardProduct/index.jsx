import PropTypes from 'prop-types';

import { Container, CardImage } from './styles';

import { CartButton } from '../CartButton';

export function CardProduct({ product }) {

    return (
        <Container>

            <CardImage
                src={`http://localhost:3001/products-files/${product.path}`}
                alt={product.name}
            />

            <div>
                <p>{product.name}</p>

                <strong>
                    R$ {product.price}
                </strong>
            </div>

           <CartButton />

        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object,
};