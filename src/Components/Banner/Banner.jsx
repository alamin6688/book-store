import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className='flex justify-around items-center bg-[#F3F3F3] h-[400px] rounded-xl my-5'>
            <div className="space-y-5">
                <h1 className="text-4xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <div className="mt-5">
                    <Link to='/listed'> 
                    <button className="bg-[#23BE0A] border-none text-white btn btn-primary">View The List</button>
                    </Link>
                    </div>
            </div>
            <div>
                <img src='https://i.postimg.cc/rFSKP7kd/pngegg.png'
                 alt="Cover Book" className="w-56"/>
            </div>
        </div>
    );
};

export default Banner;