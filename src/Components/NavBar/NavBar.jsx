import {  NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {


    return (
        <div className="navbar bg-base-100 flex justify-between">

            <div>
                <a className="font-bold text-2xl">Book Vibe</a>
            </div>

            <div className=" hidden md:flex">
                <nav className="flex gap-5">
                    <NavLink className='p-1' to='/'>Home</NavLink>
                    <NavLink className='p-1' to='/listed'>Listed Books</NavLink>
                    <NavLink className='p-1' to='/to-read'>Pages to Read</NavLink>
                    <NavLink className='p-1' to='/favourites'>Favourites</NavLink>
                    <NavLink className='p-1' to='/buy'>To Buy</NavLink>
                </nav>
            </div>

            <div className=" flex gap-5">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>

        </div>
    );
};

export default NavBar;