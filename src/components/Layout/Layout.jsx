import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <a href="/">nexo</a>
                {/* <NavLink to="/">nexo</NavLink> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/chat">Chat</NavLink>
                <NavLink to="/register">Register</NavLink>
            </nav>

            <main>
                <Suspense fallback={<div>Loading .... </div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
}

export default Layout;