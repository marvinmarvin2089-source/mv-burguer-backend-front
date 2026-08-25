import { useContext, createContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const [cartProducts, setCatProducts] = useState([]);

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart;

        if (cartIndex >= 0) {
            newProductsInCart = cartProducts.map((item, index) =>
                index === cartIndex
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            );
        } else {
            newProductsInCart = [...cartProducts, { ...product, quantity: 1 }];
        }

        setCatProducts(newProductsInCart);
        updateLocalStorage(newProductsInCart);
    };

    const clearCart = () => {
        setCatProducts([]);
        updateLocalStorage([]);

    };

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);
        setCatProducts(newCart);
        updateLocalStorage(newCart);
    };

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
        });
        setCatProducts(newCart);
        updateLocalStorage(newCart);
    };

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

        if (cartIndex < 0) {
            return;
        }

        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map((prd) => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
            });
            setCatProducts(newCart);
            updateLocalStorage(newCart);
        } else {
            deleteProduct(productId);
        }

    };

     const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburger:cartInfo');
        if (clientCartData) {
            setCatProducts(JSON.parse(clientCartData));
        }

    }, []);

    return (
        <CartContext.Provider value={{ cartProducts, putProductInCart, clearCart, decreaseProduct, increaseProduct, deleteProduct }}>
            {children}
        </CartContext.Provider>

    );


};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used with a context');
    };

    return context;
};
