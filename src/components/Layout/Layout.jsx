import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "../../styles";




const Layout = () => {
    return (
        <>
            <Container>
                <nav>
                    <NavLink to="/">nexo</NavLink>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/chat">Chat</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </nav>
            </Container>

            <main>
                <Suspense fallback={<div>Loading .... </div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}

export default Layout;