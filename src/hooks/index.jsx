import { CartProvider } from './CartContext.jsx';
import { UserProvider } from './UserProvider';

const AppProvider = ({ children }) => {
    return (
    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>
    );

};

export default AppProvider;
