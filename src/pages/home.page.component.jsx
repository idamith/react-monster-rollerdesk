import Title from "../components/title/title.component";
import { Outlet } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-page-container">
            <Title/>
            <Outlet/>
        </div>
    );
}



export default HomePage;