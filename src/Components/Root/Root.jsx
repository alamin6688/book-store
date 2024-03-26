import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Banner from "../Banner/Banner";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Header></Header>
                {/* <Banner></Banner> */}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;