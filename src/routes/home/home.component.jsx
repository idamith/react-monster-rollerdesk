import { Outlet, Route, Routes } from "react-router-dom";
import App from "../../App";
import HomePage from "../../pages/home.page.component";

const HomeRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}>
                <Route index path="/" element={<App/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path='nav' element={<Nav/>}/>
            </Route>
        </Routes>
    )
} 

const Home = () => {
    return (
        <h1>This is Home</h1>
    );
}

const Nav = () => {
    return (
        <div>
            <h1>Navigator</h1>
            <Outlet />
        </div>
    );
}

export default HomeRoute;