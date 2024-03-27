import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] space-y-2">
                <p className="text-5xl font-bold">Oops!!</p>
                <p>404 - Page not found</p>
                <Link to='/'><button className="btn btn-primary bg-[#59C6D2] border-none text-white mt-3">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;