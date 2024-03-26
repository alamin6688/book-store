import { Link } from "react-router-dom";


const Banner = () => {
 

    return (
        <div className="md:flex items-center bg-gray-100 rounded-3xl p-4 shadow-xl">
            <div className="md:w-1/2 p-4 md:ml-4">
                <h1 className="text-3xl md:text-5xl">
                    Dive into Our Online Bookstore Today!
                </h1>
                <Link to="/listedBooks">
                <button className="btn bg-green-400 hover:bg-green-600 text-white text-xl font-bold border-none rounded-2xl">
                    View The List
                </button></Link>
            </div>
            <div className="md:w-1/2 text-center p-4">
                    <img className="w-full max-w-sm rounded-3xl" src="https://i.postimg.cc/x1xbxspm/6404272-3287119.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;