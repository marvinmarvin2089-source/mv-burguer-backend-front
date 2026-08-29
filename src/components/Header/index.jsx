import { UserCircleIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from '../../hooks/UserContext';

import { Container, Navigation, HeaderLink, Options, Profile, LinkContainer, Logout, Content } from "./styles";

export function Header() {
    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const { pathname } = useResolvedPath();


    function logoutUser() {
        logout();
        navigate('/login');

    }


    return(
        <Container>
            <Content>
            <Navigation>
                <div>
                    <HeaderLink to='/' $isActive={pathname === '/'}>
                        Home
                    </HeaderLink>
                    <hr></hr>
                    <HeaderLink to='/cardapio' $isActive={pathname === '/cardapio'}>
                        Cardápio
                    </HeaderLink>
                    {userInfo?.token && (
                        <HeaderLink to='/meus-pedidos' $isActive={pathname === '/meus-pedidos'}>
                            Meus Pedidos
                        </HeaderLink>
                    )}

                </div>
            </Navigation>

            <Options>
                <Profile>
    <UserCircleIcon size={24} />

    <div>
        {userInfo?.name ? (
            <>
                <p>
                    Olá, <span>{userInfo.name}</span>
                </p>

                <Logout onClick={logoutUser}>
                    Sair
                </Logout>
            </>
        ) : (
            <>
                <p>
                    Olá, <span>Visitante</span>
                </p>

                <Logout onClick={() => navigate('/login')}>
                    Entrar
                </Logout>
            </>
        )}
    </div>
</Profile>
                 <LinkContainer>
                    <ShoppingCartIcon size={24} />
                <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
            
            </LinkContainer>
            </Options>

            </Content>
        </Container>
    );

};
