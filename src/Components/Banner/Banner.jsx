import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className='flex justify-around items-center bg-gray-100 h-[400px] rounded-xl my-5 shadow-xl'>
            <div className="space-y-5">
                <h1 className="text-4xl font-bold">
                    Dive into Our Online <br />Bookstore Today!
                </h1>
                    <div className="mt-5">
                    <Link to='/listed'> 
                    <button className="border-none text-white btn bg-green-400 hover:bg-green-600">View The List</button>
                    </Link>
                    </div>
            </div>
            <div>
                <img src='https://i.postimg.cc/rFSKP7kd/pngegg.png'
                 alt="Book" className="w-56"/>
            </div>
        </div>
    );
};

export default Banner;