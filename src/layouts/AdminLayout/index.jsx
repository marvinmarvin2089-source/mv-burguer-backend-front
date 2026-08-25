import { Outlet, Navigate } from 'react-router-dom';
import { SideNavAdmin } from '../../components/SideNavAdmin';

import { Container } from './styles';

export function AdminLayout() {
    const storedUserData = localStorage.getItem('devburger:userData');
    let isAdmin = false;

    try {
        isAdmin = Boolean(JSON.parse(storedUserData)?.admin);
    } catch {
        localStorage.removeItem('devburger:userData');
    }

    return isAdmin ?
        (
            <Container>
                <SideNavAdmin />
                <main>
                    <section>
                        <Outlet />
                    </section>
                </main>
            </Container>
        ) : (

            <Navigate to='/login' />

        );

}
